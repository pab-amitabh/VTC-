// app/api/getQuote/route.ts
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const loginRes = await fetch('https://qa.policyadvisor.ca/admin/auth/accounts/sign_in.json', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'X-Api-Client': 'true'
      },
      body: JSON.stringify({
        admin_account: {
          email: process.env.EMAIL,
          password: process.env.PASSWORD
        }
      })
    });

    if (!loginRes.ok) {
      const error = await loginRes.json();
      return new NextResponse(
        JSON.stringify({ status: 'error', message: 'Login failed', error }), 
        { 
          status: 401,
          headers: {
            'Content-Type': 'application/json',
            'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
            'Pragma': 'no-cache',
            'Expires': '0',
            'Surrogate-Control': 'no-store'
          }
        }
      );
    }

    const rawCookie = loginRes.headers.get('set-cookie');
    const sessionCookie = rawCookie?.split(';')[0];

    if (!sessionCookie) {
      return new NextResponse(
        JSON.stringify({ status: 'error', message: 'Session cookie missing' }),
        {
          status: 401,
          headers: {
            'Content-Type': 'application/json',
            'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
            'Pragma': 'no-cache',
            'Expires': '0',
            'Surrogate-Control': 'no-store'
          }
        }
      );
    }

    const travellerProfiles = body.travellerDOBs.map((traveller: any) => ({
      dob: traveller.dob,
      relationship: traveller.type === "Adult" ? "Self" : "Child"
    }));

    const formatToDDMMYYYY = (dateStr: string): string => {
      const date = new Date(dateStr);
      const mm = String(date.getMonth() + 1).padStart(2, '0');
      const dd = String(date.getDate()).padStart(2, '0');
      const yyyy = date.getFullYear();
      return `${dd}/${mm}/${yyyy}`;
    };
    const coverageDates = body.coverageDates || "May 7, 2025 → May 6, 2026" 
    const [startDate, endDate] = coverageDates.split('→').map((date: string) => date.trim());
    const coverage_start_date = formatToDDMMYYYY(startDate);
    const coverage_end_date = formatToDDMMYYYY(endDate);

    const quoteData = {
      quote: {
        coverage_start_date: coverage_start_date,
        coverage_end_date: coverage_end_date,
        category: "VTC",
        coverage: parseInt(body.coverageAmount),
        deductible: parseInt(body.deductible),
        show_pre_existing_condition_only: body.preExisting ? "yes" : "no",
        show_monthly_payment_options_only: body.monthlyPayment ? "yes" : "no",
        quote_type: "",
        province: body.province
      },
      traveller_profile: travellerProfiles,
      vtc_type: "for_all"
    };

    const quoteRes = await fetch('https://qa.policyadvisor.ca/admin/travel_insurances/fetch_quote.json', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'X-Api-Client': 'true',
        'X-Requested-With': 'XMLHttpRequest',
        'Cookie': sessionCookie
      },
      body: JSON.stringify(quoteData)
    });
    if (!quoteRes.ok) {
      const error = await quoteRes.json();
      return new NextResponse(
        JSON.stringify({ status: 'error', message: 'Quote fetch failed', error }),
        {
          status: quoteRes.status,
          headers: {
            'Content-Type': 'application/json',
            'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
            'Pragma': 'no-cache',
            'Expires': '0',
            'Surrogate-Control': 'no-store'
          }
        }
      );
    }

    const quoteResponse = await quoteRes.json();

    // Function to fetch product details
    const fetchProductDetails = async (productCode: string) => {
      try {
        const productRes = await fetch(`https://content.policyadvisor.com/company-product-infos?product_code=${productCode}`, {
          method: 'GET',
          headers: {
            'Accept': 'application/json'
          }
        });

        if (!productRes.ok) {
          console.error(`Failed to fetch product details for ${productCode}`);
          return null;
        }

        const productData = await productRes.json();
        if (productData && productData.length > 0) {
          const product = productData[0];
          const baseUrl = 'https://content.policyadvisor.com';
          
          // Convert relative URLs to absolute URLs
          const brochureUrl = product.Product_Brochure?.[0]?.file_attached?.url;
          const policyDocUrl = product.Sample_policy_document?.[0]?.file_attached?.url;

          return {
            brochure_url: brochureUrl ? `${baseUrl}${brochureUrl}` : null,
            policy_document_url: policyDocUrl ? `${baseUrl}${policyDocUrl}` : null
          };
        }
        return null;
      } catch (error) {
        console.error(`Error fetching product details for ${productCode}:`, error);
        return null;
      }
    };

    // Enhance quote response with product details
    let quotes = [];
    if (quoteResponse.travel_quotes?.quotes) {
      quotes = quoteResponse.travel_quotes.quotes;
    } else if (quoteResponse.quotes) {
      quotes = quoteResponse.quotes;
    } else {
      console.error('No quotes found in response:', quoteResponse);
      return new NextResponse(
        JSON.stringify({ status: 'error', message: 'No quotes found in response' }),
        {
          status: 400,
          headers: {
            'Content-Type': 'application/json',
            'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
            'Pragma': 'no-cache',
            'Expires': '0',
            'Surrogate-Control': 'no-store'
          }
        }
      );
    }

    const enhancedQuotes = await Promise.all(
      quotes.map(async (quote: any) => {
        if (quote.product_code) {
          const productDetails = await fetchProductDetails(quote.product_code);
          return {
            ...quote,
            brochure_url: productDetails?.brochure_url,
            policy_document_url: productDetails?.policy_document_url
          };
        }
        return quote;
      })
    );

    // Update the response with enhanced quotes
    if (quoteResponse.travel_quotes) {
      quoteResponse.travel_quotes.quotes = enhancedQuotes;
    } else {
      quoteResponse.quotes = enhancedQuotes;
    }
    return new NextResponse(
      JSON.stringify({ status: 'success', quote: quoteResponse }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
          'Pragma': 'no-cache',
          'Expires': '0',
          'Surrogate-Control': 'no-store'
        }
      }
    );

  } catch (error) {
    console.error('API error:', error);
    return new NextResponse(
      JSON.stringify({ status: 'error', message: 'Internal Server Error', error }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
          'Pragma': 'no-cache',
          'Expires': '0',
          'Surrogate-Control': 'no-store'
        }
      }
    );
  }
}
