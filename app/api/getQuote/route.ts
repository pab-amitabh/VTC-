// app/api/getQuote/route.ts
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log('body', body)
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
    // console.log(body.coverageDates)
    const coverageDates = body.coverageDates || "May 7, 2025 → May 6, 2026" 
    const [startDate, endDate] = coverageDates.split('→').map((date: string) => date.trim());
    const coverage_start_date = formatToDDMMYYYY(startDate);
    const coverage_end_date = formatToDDMMYYYY(endDate);
    // console.log(coverage_start_date, coverage_end_date)

    const quoteData = {
      quote: {
        coverage_start_date: coverage_start_date,
        coverage_end_date: coverage_end_date,
        category: "VTC",
        coverage: parseInt(body.coverageAmount),
        deductible: parseInt(body.deductible),
        show_pre_existing_condition_only: body.preExisting ? "yes" : "no",
        show_monthly_payment_options_only: body.monthlyPayment ? "yes" : "no",
        quote_type: ""
      },
      traveller_profile: travellerProfiles,
      vtc_type: "for_all"
    };
    // console.log(quoteData)

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
    // console.log(quoteRes)
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
    console.log(quoteResponse)
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
