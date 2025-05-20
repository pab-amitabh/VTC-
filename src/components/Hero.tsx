import { useState, useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Check, CalendarIcon, Plus, Minus, Loader2, ChevronLeft, ChevronRight, ChevronDown, MapPin, Users, DollarSign } from 'lucide-react';
import { cn } from "@/lib/utils";
import { format, addYears, subDays, subYears, addMonths, addDays, isWithinInterval, isSameDay, startOfMonth } from 'date-fns';
import DOMPurify from 'dompurify';

// Utility function to convert HTML entities to plain text
const decodeHtmlEntities = (html: string): string => {
  const txt = document.createElement('textarea');
  txt.innerHTML = html;
  return txt.value;
};

// Utility function to sanitize and convert HTML to markdown
const htmlToMarkdown = (html: string): string => {
  if (!html) return '';
  
  // First sanitize the HTML
  const sanitizedHtml = DOMPurify.sanitize(html);
  
  // Then decode HTML entities
  let markdown = decodeHtmlEntities(sanitizedHtml);
  
  // Replace common HTML entities that might still be present
  markdown = markdown
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&ndash;/g, '–')
    .replace(/&mdash;/g, '—')
    .replace(/&nbsp;/g, ' ');
    
  return markdown;
};

interface TravellerDOB {
  id: string;
  type: 'Adult' | 'Child';
  dob: string;
  age?: number;
}

interface HeroProps {
  onQuoteDataReceived?: (data: any) => void;
}

type VisaType = 'visitor' | 'super';
type ProvinceType = 'Ontario' | 'Manitoba' | 'British Columbia' | 'Alberta';

const Hero = ({ onQuoteDataReceived }: HeroProps) => {
  const [visaType, setVisaType] = useState<VisaType>('visitor');
  const [startDate, setStartDate] = useState<Date | undefined>(undefined);
  const [endDate, setEndDate] = useState<Date | undefined>(undefined);
  const [hoverDate, setHoverDate] = useState<Date | undefined>(undefined);
  const [coverageAmount, setCoverageAmount] = useState<string>('100000');
  const [deductible, setDeductible] = useState<string>('0');
  const [province, setProvince] = useState<ProvinceType>('Ontario');
  const [adults, setAdults] = useState<number>(1);
  const [children, setChildren] = useState<number>(0);
  const [travellerDOBs, setTravellerDOBs] = useState<TravellerDOB[]>([
    { id: 'adult-0', type: 'Adult', dob: '', age: undefined }
  ]);
  const [preExisting, setPreExisting] = useState<boolean>(false);
  const [monthlyPayment, setMonthlyPayment] = useState<boolean>(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [formData, setFormData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [quotes, setQuotes] = useState<any>(null);
  const [apiError, setApiError] = useState<string | null>(null);
  const plansRef = useRef<HTMLDivElement>(null);
  const [datePickerOpen, setDatePickerOpen] = useState(false);
  const [provincePickerOpen, setProvincePickerOpen] = useState(false);
  const [dateFieldKey, setDateFieldKey] = useState(0);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 } 
    }
  };

  // Debug form data in the console whenever it changes
  useEffect(() => {
    if (formData) {
      console.log('%c FORM DATA SUBMITTED:', 'background: #222; color: #bada55; font-size: 16px;');
      console.log(formData);
    }
  }, [formData]);

  // Update travellerDOBs when adults or children count changes
  useEffect(() => {
    updateTravellerDOBs();
  }, [adults, children]);

  // Update end date when start date changes for supervisa
  useEffect(() => {
    if (visaType === 'super' && startDate) {
      // For Super Visa, set end date to one day less than one year after start date
      const fullYearDate = addYears(startDate, 1);
      setEndDate(subDays(fullYearDate, 1));
    }
  }, [startDate, visaType]);

  // Update coverage amount when visa type changes to super
  useEffect(() => {
    if (visaType === 'super') {
      // For Super Visa, ensure coverage amount is at least $100,000
      const amount = parseInt(coverageAmount);
      if (amount < 100000) {
        setCoverageAmount('100000');
      }
    }
  }, [visaType, coverageAmount]);

  // Handle visa type change
  const handleVisaTypeChange = (type: VisaType) => {
    setVisaType(type);
    
    if (type === 'super' && startDate) {
      // For Super Visa, set end date to one day less than one year after start date
      const fullYearDate = addYears(startDate, 1);
      setEndDate(subDays(fullYearDate, 1));
    }
  };

  // Convert age to DOB in DD/MM/YYYY format
  const ageToDOB = (age: number): string => {
    const today = new Date();
    const birthYear = today.getFullYear() - age;
    const birthDate = new Date(birthYear, today.getMonth(), today.getDate());
    return format(birthDate, 'dd/MM/yyyy');
  };

  const updateTravellerDOBs = () => {
    const newTravellerDOBs: TravellerDOB[] = [];
    
    // Add adult DOBs
    for (let i = 0; i < adults; i++) {
      const existingAdult = travellerDOBs.find(t => t.id === `adult-${i}`);
      newTravellerDOBs.push(
        existingAdult || { id: `adult-${i}`, type: 'Adult', dob: '', age: undefined }
      );
    }
    
    // Add child DOBs
    for (let i = 0; i < children; i++) {
      const existingChild = travellerDOBs.find(t => t.id === `child-${i}`);
      newTravellerDOBs.push(
        existingChild || { id: `child-${i}`, type: 'Child', dob: '', age: undefined }
      );
    }
    
    setTravellerDOBs(newTravellerDOBs);
  };

  const updateAge = (id: string, ageStr: string) => {
    // Only allow numeric input
    if (ageStr !== '' && !/^\d+$/.test(ageStr)) {
      return;
    }
    
    const age = ageStr === '' ? undefined : parseInt(ageStr);
      const traveller = travellerDOBs.find(t => t.id === id);
    
    // Update errors based on the new age
    if (!ageStr || age === undefined) {
      // Empty age - set error
      setErrors(prev => ({
        ...prev,
        [id]: 'Age is required'
      }));
    } else if (traveller && traveller.type === 'Adult' && age < 18) {
      // Invalid adult age
        setErrors(prev => ({
          ...prev,
          [id]: 'Adult must be at least 18 years old'
        }));
      } else if (traveller && traveller.type === 'Child' && age >= 18) {
      // Invalid child age
        setErrors(prev => ({
          ...prev,
          [id]: 'Child must be under 18 years old'
        }));
      } else {
      // Valid age - clear any error for this field
        if (errors[id]) {
          setErrors(prev => {
            const newErrors = { ...prev };
            delete newErrors[id];
            return newErrors;
          });
      }
    }
    
    setTravellerDOBs(prev => 
      prev.map(item => {
        if (item.id === id) {
          const updatedItem = { ...item, age };
          
          // Calculate DOB from age if age is valid
          if (age !== undefined) {
            updatedItem.dob = ageToDOB(age);
          } else {
            updatedItem.dob = '';
          }
          
          return updatedItem;
        }
        return item;
      })
    );
  };

  const handleAdultsChange = (increment: boolean) => {
    if (increment && adults < 10) {
      setAdults(prev => prev + 1);
    } else if (!increment && adults > 1) {
      setAdults(prev => prev - 1);
    }
  };

  const handleChildrenChange = (increment: boolean) => {
    if (increment && children < 10) {
      setChildren(prev => prev + 1);
    } else if (!increment && children > 0) {
      setChildren(prev => prev - 1);
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};
    
    if (!startDate) newErrors.startDate = 'Coverage dates are required';
    if (!endDate) newErrors.endDate = 'Coverage dates are required';
    if (!coverageAmount) newErrors.coverageAmount = 'Coverage amount is required';
    if (!deductible) newErrors.deductible = 'Deductible is required';
    
    // Validate age for each traveller
    travellerDOBs.forEach(traveller => {
      if (!traveller.age) {
        newErrors[traveller.id] = 'Age is required';
      } else if (traveller.type === 'Adult' && traveller.age < 18) {
        newErrors[traveller.id] = 'Adult must be at least 18 years old';
      } else if (traveller.type === 'Child' && traveller.age >= 18) {
        newErrors[traveller.id] = 'Child must be under 18 years old';
      }
    });
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Date selection helpers for calendar styling
  const isDateInRange = (date: Date) => {
    // If we have both start and end dates, check if the date is in the selected range
    if (startDate && endDate) {
      return isWithinInterval(date, { 
        start: startDate, 
        end: endDate 
      });
    }
    
    // If we have a start date and hover date, show preview of potential range
    if (startDate && hoverDate && !endDate) {
      const rangeStart = startDate < hoverDate ? startDate : hoverDate;
      const rangeEnd = startDate < hoverDate ? hoverDate : startDate;
      return isWithinInterval(date, { 
        start: rangeStart, 
        end: rangeEnd 
      });
    }
    
    return false;
  };

  const isStartDate = (date: Date) => {
    return startDate && isSameDay(date, startDate);
  };

  const isEndDate = (date: Date) => {
    return endDate && isSameDay(date, endDate);
  };

  // Separate function to fetch quotes that can be called from multiple places
  const fetchQuotes = async () => {
    // Only proceed if we have valid form data
    if (!startDate || !endDate || !travellerDOBs.every(t => t.age)) {
      setErrors({
        ...(startDate ? {} : { startDate: 'Coverage dates are required' }),
        ...(endDate ? {} : { endDate: 'Coverage dates are required' }),
        ...travellerDOBs.reduce((acc, t) => !t.age ? { ...acc, [t.id]: 'Age is required' } : acc, {})
      });
      return;
    }
    
    setLoading(true);
    setApiError(null);
    
    // Format dates as required
    const formatCoverageDates = `${startDate ? format(startDate, 'MMMM d, yyyy') : ''} → ${endDate ? format(endDate, 'MMMM d, yyyy') : ''}`;
    
    // Package data into required JSON format
    const jsonData = {
      coverageDates: formatCoverageDates,
      coverageAmount,
      deductible,
      province,
      adults,
      children,
      travellerDOBs,
      preExisting,
      monthlyPayment,
      needSupervisa: visaType === 'super' // Set this based on the visa type
    };
    
    // Log the form data in the exact format requested
    console.log(jsonData);
    
    setFormData(jsonData);
    
    try {
      const response = await fetch(`/api/getQuote?t=${Date.now()}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'no-cache, no-store, must-revalidate',
          'Pragma': 'no-cache',
          'Expires': '0'
        },
        body: JSON.stringify(jsonData),
      });
      
      const data = await response.json();
      
      if (data.status === 'success') {
        // Debug logs
        console.log('Original quote data:', data.quote.travel_quotes.quotes[0]);
        
        // Process the quotes data to convert HTML entities to markdown
        const processedQuotes = {
          ...data.quote,
          travel_quotes: {
            ...data.quote.travel_quotes,
            quotes: data.quote.travel_quotes.quotes.map((quote: any) => {
              const processed = {
                ...quote,
                features: quote.features?.map((feature: string) => {
                  console.log('Original feature:', feature);
                  const processed = htmlToMarkdown(feature);
                  console.log('Processed feature:', processed);
                  return processed;
                }) || [],
                description: htmlToMarkdown(quote.description),
                additional_info: quote.additional_info?.map((info: string) => htmlToMarkdown(info)) || []
              };
              console.log('Processed quote:', processed);
              return processed;
            })
          }
        };
        
        // Save the processed quotes data
        setQuotes(processedQuotes);
        
        // Pass the processed data to parent component
        if (onQuoteDataReceived) {
          onQuoteDataReceived(processedQuotes);
        }
        
        // Scroll to plans section for viewing the results
        scrollToPlans();
      } else {
        // Handle error as "no plans found" rather than showing an error
        console.warn('No plans found:', data.message || 'Failed to get quote');
        setApiError(null); // Clear any API error
        
        // Pass empty quotes data to show "no plans found" message
        if (onQuoteDataReceived) {
          onQuoteDataReceived({
            travel_quotes: {
              quotes: []
            }
          });
        }
        
        scrollToPlans();
      }
    } catch (error) {
      console.error('Error fetching quote:', error);
      setApiError(null); // We don't want to show error message anymore
      
      // Pass empty quotes data to show "no plans found" message
      if (onQuoteDataReceived) {
        onQuoteDataReceived({
          travel_quotes: {
            quotes: []
          }
        });
      }
      
      scrollToPlans();
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    fetchQuotes();
  };

  // Function to scroll to plans section
  const scrollToPlans = () => {
    const plansSection = document.getElementById('plans');
    if (plansSection) {
      plansSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Debug output for date state changes
  useEffect(() => {
    console.log("Date state updated - startDate:", startDate);
    console.log("Date state updated - endDate:", endDate);
    
    // Force re-render of date field when dates change
    setDateFieldKey(prev => prev + 1);
    
    // Also check what would be displayed in the field
    if (startDate) {
      console.log("Start date string:", format(startDate, "MMM d, yyyy"));
    }
    if (endDate) {
      console.log("End date string:", format(endDate, "MMM d, yyyy"));
    }
  }, [startDate, endDate]);

  return (
    <section className="pt-10 pb-0 md:pt-12 md:pb-0 relative overflow-hidden bg-gray-50">
      
      {/* Booking.com style calendar styles */}
      <style jsx global>{`
        .booking-calendar {
          max-width: 670px;
          width: 100%;
          background: white;
          border-radius: 4px;
          box-shadow: 0 2px 16px rgba(0, 0, 0, 0.15);
        }
        .booking-calendar .rdp-months {
          justify-content: center;
        }
        .booking-calendar .rdp {
          --rdp-cell-size: 40px;
          --rdp-accent-color: #0071c2;
          --rdp-background-color: #e7f4fa;
          margin: 0;
        }
        .booking-calendar .rdp-day {
          width: 40px;
          height: 40px;
          border-radius: 0;
          font-size: 14px;
          color: #333;
        }
        .booking-calendar .rdp-day_selected, 
        .booking-calendar .rdp-day_selected:hover {
          background-color: #0071c2 !important;
          color: white !important;
          font-weight: 500;
        }
        /* Fix Range selection and hover */
        .booking-calendar .rdp-day_range_start {
          border-top-left-radius: 100% !important;
          border-bottom-left-radius: 100% !important;
        }
        .booking-calendar .rdp-day_range_end {
          border-top-right-radius: 100% !important;
          border-bottom-right-radius: 100% !important;
        }
        .booking-calendar .rdp-day_range_middle {
          background-color: #e7f4fa !important;
          color: #0071c2 !important;
        }
        .booking-calendar .rdp-day_range_middle:hover {
          background-color: #e7f4fa !important;
          color: #0071c2 !important;
        }
        /* Ensure hover preview uses same colors */
        .booking-calendar .rdp-day_range_end:not([aria-selected="true"]) {
          background-color: #0071c2 !important;
          color: #fff !important;
        }
        .booking-calendar .rdp-day_range_start:not([aria-selected="true"]) {
          background-color: #0071c2 !important;
          color: #fff !important;
        }
        /* Style the hover preview range */
        .booking-calendar [data-preview] {
          background-color: rgba(0, 113, 194, 0.1) !important;
          color: #0071c2 !important;
        }
        .booking-calendar [data-preview]:hover {
          background-color: rgba(0, 113, 194, 0.1) !important;
          color: #0071c2 !important;
        }
        /* Style the hover end date */
        .booking-calendar [data-preview]:last-of-type {
          background-color: #0071c2 !important;
          color: white !important;
          border-top-right-radius: 100% !important;
          border-bottom-right-radius: 100% !important;
        }
        .booking-calendar .rdp-day:hover:not(.rdp-day_selected):not(.rdp-day_range_middle):not(.rdp-day_range_start):not(.rdp-day_range_end):not(.rdp-day_disabled) {
          background-color: #f5f5f5;
          color: #0071c2;
        }
        .booking-calendar .rdp-caption {
          font-size: 16px;
          font-weight: 600;
          color: #333;
          padding: 8px 0;
        }
        .booking-calendar .rdp-head_cell {
          font-size: 12px;
          font-weight: 600;
          height: 24px;
          color: #6b6b6b;
          width: 40px;
          text-transform: uppercase;
        }
        .booking-calendar .rdp-day_disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
        @media (max-width: 640px) {
          .booking-calendar .rdp-caption {
            font-size: 14px;
          }
          .booking-calendar .rdp-day {
            width: 35px;
            height: 35px;
            font-size: 13px;
          }
        }
        .booking-calendar .range-start,
        .booking-calendar .range-end,
        .booking-calendar .preview-end {
          background-color: #0071c2 !important;
          color: white !important;
          border-radius: 0;
        }
        .booking-calendar .range-start {
          border-top-left-radius: 9999px !important;
          border-bottom-left-radius: 9999px !important;
        }
        .booking-calendar .range-end,
        .booking-calendar .preview-end {
          border-top-right-radius: 9999px !important;
          border-bottom-right-radius: 9999px !important;
        }
        .booking-calendar .range-middle {
          background-color: rgba(0, 113, 194, 0.1) !important;
          color: #333 !important;
        }
        .booking-calendar .range-middle:hover {
          background-color: rgba(0, 113, 194, 0.2) !important;
        }
        /* Hover styles */
        .booking-calendar .rdp-day:not(.rdp-day_disabled):hover {
          background-color: rgba(0, 113, 194, 0.1);
          color: #333;
        }
        .booking-calendar .rdp-day_disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
      `}</style>
      
      <motion.div
        className="container mx-auto px-4 sm:px-6 lg:px-8 pt-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Hero content - centered at the top */}
        <motion.div variants={itemVariants} className="text-center max-w-3xl mx-auto mb-2 mt-6 md:mt-12">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Visitor to Canada Insurance: Compare Quotes & Find the Best Coverage
          </h1>
          <p className="text-lg text-gray-800 leading-relaxed max-w-2xl mx-auto font-semibold">
            Protect your visit to Canada with affordable, customized visitor insurance plans from 30+ trusted providers.
          </p>
          {/* Enhanced structured data for the insurance product */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "InsuranceAgency",
                "name": "InsureTravel",
                "description": "Comprehensive travel insurance coverage for your journey. Compare plans, get instant quotes, and protect yourself with medical coverage, trip cancellation, and 24/7 assistance.",
                "url": "https://your-domain.com",
                "logo": "https://lovable.dev/opengraph-image-p98pqg.png",
                "sameAs": [
                  "https://twitter.com/insuretravel",
                  "https://www.facebook.com/insuretravel",
                  "https://www.linkedin.com/company/insuretravel"
                ],
                "address": {
                  "@type": "PostalAddress",
                  "addressCountry": "CA"
                },
                "offers": {
                  "@type": "Offer",
                  "category": "Travel Insurance",
                  "availability": "https://schema.org/InStock",
                  "priceCurrency": "CAD",
                  "priceSpecification": {
                    "@type": "PriceSpecification",
                    "price": "371.49",
                    "priceCurrency": "CAD",
                    "valueAddedTaxIncluded": true
                  }
                },
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": "4.8",
                  "reviewCount": "1250"
                },
                "areaServed": {
                  "@type": "Country",
                  "name": "Canada"
                },
                "hasOfferCatalog": {
                  "@type": "OfferCatalog",
                  "name": "Travel Insurance Plans",
                  "itemListElement": [
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Basic Travel Insurance",
                        "description": "Basic hospitalization/medical benefits with semi-private hospital coverage"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Comprehensive Travel Insurance",
                        "description": "Full coverage including trip cancellation, medical emergencies, and baggage protection"
                      }
                    }
                  ]
                }
              })
            }}
          />
        </motion.div>
        
        {/* Quote form - full width and compact */}
        <motion.div variants={itemVariants} className="w-full mx-auto" style={{ maxWidth: "1178px" }}>
          {!formSubmitted ? (
            <div className="bg-white rounded-xl shadow-md border border-gray-100/50 mb-8 overflow-hidden relative w-full" 
                 style={{ 
                   boxShadow: "0 8px 30px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 20px 25px -5px rgba(0, 0, 0, 0.1)" 
                 }}>
              
              
              {/* Visa Type Tabs */}
              <div className="grid grid-cols-2 border-b">
                <button
                  className={cn(
                    "py-4 text-center font-medium transition-colors",
                    visaType === 'visitor' 
                      ? "bg-deepBlue text-white" 
                      : "bg-gray-50 text-gray-700 hover:bg-gray-100"
                  )}
                  onClick={() => handleVisaTypeChange('visitor')}
                >
                  Visitor Visa
                </button>
                <button
                  className={cn(
                    "py-4 text-center font-medium transition-colors",
                    visaType === 'super' 
                      ? "bg-deepBlue text-white" 
                      : "bg-gray-50 text-gray-700 hover:bg-gray-100"
                  )}
                  onClick={() => handleVisaTypeChange('super')}
                >
                  Super Visa
                </button>
              </div>
              
              <form onSubmit={handleSubmit} className="w-full p-4 md:p-6" aria-label="Travel Insurance Quote Form">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-x-2 gap-y-3 items-start">
                  {/* Travelling to - 2 columns */}
                  <div className="md:col-span-2 flex flex-col w-full">
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      Travelling to
                    </label>
                    <div className="flex flex-col grow">
                      <Popover open={provincePickerOpen} onOpenChange={setProvincePickerOpen}>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className="w-full justify-between px-3 py-2 h-auto border border-gray-300 rounded-lg text-left font-normal text-sm"
                          >
                            <div className="flex items-center">
                              <MapPin className="h-4 w-4 opacity-50 mr-2" />
                              <span>{province}</span>
                            </div>
                            <ChevronDown className="h-4 w-4 opacity-50" />
                          </Button>
                        </PopoverTrigger>
                        <div className="h-5">
                          {/* Error placeholder for consistency */}
                        </div>
                        <PopoverContent className="w-[calc(100vw-40px)] md:w-64 p-3" align="start" side="bottom" sideOffset={5}>
                          <div className="space-y-1">
                            {['Ontario', 'Manitoba', 'British Columbia', 'Alberta'].map((prov) => (
                              <div 
                                key={prov}
                                onClick={() => {
                                  setProvince(prov as ProvinceType);
                                  setProvincePickerOpen(false); // Close the popover after selection
                                }}
                                className={`px-3 py-2 rounded-lg cursor-pointer transition-colors ${province === prov ? 'bg-deepBlue text-white' : 'hover:bg-gray-100'}`}
                              >
                                {prov}
                              </div>
                            ))}
                          </div>
                        </PopoverContent>
                      </Popover>
                    </div>
                  </div>
                  
                  {/* Coverage Dates - 3 columns */}
                  <div className="md:col-span-3 flex flex-col w-full">
                    <label htmlFor="coverage-dates" className="block text-xs font-medium text-gray-700 mb-1">
                      Coverage Dates
                    </label>
                    <div className="flex flex-col grow">
                      <Popover 
                        open={datePickerOpen} 
                        onOpenChange={(open) => {
                          console.log("Date picker open state changing to:", open);
                          setDatePickerOpen(open);
                        }}
                      >
                      <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            key={`date-field-${dateFieldKey}`}
                            className={`w-full justify-between px-3 py-2 h-auto border ${errors.startDate || errors.endDate ? 'border-red-500' : 'border-gray-300'} rounded-lg text-left font-normal text-sm whitespace-nowrap overflow-hidden transition-all duration-200 hover:border-deepBlue hover:bg-gray-50/50 focus:ring-2 focus:ring-deepBlue/20 active:bg-gray-100`}
                            onClick={() => {
                              console.log("Date field clicked, current values:", {
                                startDate: startDate ? format(startDate, "MMM d, yyyy") : "none",
                                endDate: endDate ? format(endDate, "MMM d, yyyy") : "none"
                              });
                              setDatePickerOpen(true);
                            }}
                        >
                            <div className="flex items-center min-w-0">
                              <CalendarIcon className="h-4 w-4 opacity-50 mr-2 flex-shrink-0" />
                              <span className="truncate">
                            {startDate ? format(startDate, "MMM d, yyyy") : "Start date"} 
                            <span className="mx-1">→</span> 
                            {endDate ? format(endDate, "MMM d, yyyy") : "End date"}
                              </span>
                          </div>
                            <ChevronDown className="h-4 w-4 opacity-50 flex-shrink-0 ml-2" />
                          </Button>
                      </PopoverTrigger>
                        <div className="h-5">
                          {(errors.startDate || errors.endDate) && (
                            <p className="mt-1 text-xs text-red-500">{errors.startDate || errors.endDate}</p>
                          )}
                        </div>
                        <PopoverContent 
                          className="w-auto p-0 booking-calendar" 
                          align="start" 
                          side="bottom" 
                          sideOffset={5}
                          onInteractOutside={(e) => {
                            // Prevent closing when clicking inside the calendar
                            console.log("Interact outside event");
                            e.preventDefault();
                          }}
                        >
                          <div className="p-4">
                            <div className="flex justify-between items-center mb-4">
                              <h3 className="text-base font-medium">Select dates</h3>
                          </div>
                            
                            <Calendar
                              mode="range"
                              selected={{
                                from: startDate,
                                to: endDate
                              }}
                              defaultMonth={startDate || new Date()}
                              onDayMouseEnter={(date) => {
                                console.log("Mouse enter on date:", date);
                                setHoverDate(date);
                              }}
                              onDayMouseLeave={() => {
                                console.log("Mouse leave");
                                setHoverDate(undefined);
                              }}
                              modifiers={{
                                range_start: startDate ? [startDate] : [],
                                range_end: endDate ? [endDate] : [],
                                range_middle: startDate && (endDate || hoverDate) ? {
                                  from: startDate,
                                  to: endDate || hoverDate || startDate
                                } : [],
                                preview_end: !endDate && startDate && hoverDate && hoverDate > startDate ? [hoverDate] : []
                              }}
                              modifiersClassNames={{
                                range_start: "range-start",
                                range_end: "range-end",
                                range_middle: "range-middle",
                                preview_end: "preview-end"
                              }}
                              onSelect={(range) => {
                                console.log("Calendar onSelect called with:", range);
                                
                                // Clear any existing errors
                                if (errors.startDate || errors.endDate) {
                                  setErrors(prev => {
                                    const newErrors = { ...prev };
                                    delete newErrors.startDate;
                                    delete newErrors.endDate;
                                    return newErrors;
                                  });
                                }

                                if (!range || !range.from) {
                                  console.log("Clearing dates");
                                  setStartDate(undefined);
                                  setEndDate(undefined);
                                  return;
                                }

                                // For Super Visa
                                if (visaType === 'super') {
                                  console.log("Super visa selection");
                                  setStartDate(range.from);
                                  const fullYearDate = addYears(range.from, 1);
                                  const superVisaEndDate = subDays(fullYearDate, 1);
                                  setEndDate(superVisaEndDate);
                                  console.log("Setting super visa dates:", range.from, superVisaEndDate);
                                  setTimeout(() => {
                                    console.log("Closing date picker after selection");
                                    setDatePickerOpen(false);
                                  }, 150);
                                  return;
                                }

                                // Regular visa selection logic
                                console.log("Setting dates - from:", range.from, "to:", range.to);
                                setStartDate(range.from);
                                if (range.to) {
                                  setEndDate(range.to);
                                  setTimeout(() => {
                                    console.log("Closing date picker after selection");
                                    setDatePickerOpen(false);
                                  }, 150);
                                } else {
                                  setEndDate(undefined);
                                }
                              }}
                              disabled={(date) => {
                                const today = new Date();
                                today.setHours(0, 0, 0, 0);
                                
                                // Disable all dates before today
                                if (date < today) {
                                  return true;
                                }
                                
                                // For Super Visa, if start date is selected, allow selecting only the end date that's 1 year - 1 day later
                                if (visaType === 'super' && startDate) {
                                  const targetEndDate = subDays(addYears(startDate, 1), 1);
                                  // Allow selecting the start date (again) or the target end date
                                  return !isSameDay(date, startDate) && !isSameDay(date, targetEndDate);
                                }
                                
                                return false;
                              }}
                              classNames={{
                                months: "flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4",
                                month: "space-y-4",
                                caption: "flex justify-center pt-1 relative items-center",
                                caption_label: "text-sm font-medium",
                                nav: "space-x-1 flex items-center",
                                nav_button: "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100",
                                nav_button_previous: "absolute left-1",
                                nav_button_next: "absolute right-1",
                                table: "w-full border-collapse space-y-1",
                                head_row: "flex",
                                head_cell: "text-gray-500 rounded-md w-9 font-normal text-[0.8rem] flex items-center justify-center",
                                row: "flex w-full mt-2",
                                cell: "text-center text-sm p-0 relative [&:has([aria-selected])]:bg-deepBlue/10 first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
                                day: "h-9 w-9 p-0 font-normal aria-selected:opacity-100 flex items-center justify-center",
                                day_selected: "bg-deepBlue text-white hover:bg-deepBlue hover:text-white focus:bg-deepBlue focus:text-white",
                                day_today: "bg-gray-100",
                                day_outside: "text-gray-300 opacity-50",
                                day_disabled: "text-gray-300 opacity-50",
                                day_range_start: "bg-deepBlue text-white rounded-l-full",
                                day_range_end: "bg-deepBlue text-white rounded-r-full",
                                day_range_middle: "bg-deepBlue/10 text-gray-700",
                                day_hidden: "invisible",
                              }}
                            />
                            
                            {/* Date range display */}
                            <div className="mt-4 text-center text-sm font-medium">
                              {startDate && endDate ? (
                                <div className="flex items-center justify-center space-x-2">
                                  <span>{format(startDate, "MMM d, yyyy")}</span>
                                  <span>—</span>
                                  <span>{format(endDate, "MMM d, yyyy")}</span>
                          </div>
                              ) : startDate ? (
                                <div>Please select end date</div>
                              ) : (
                                <div>Please select start date</div>
                              )}
                        </div>
                            
                        {/* Super Visa note */}
                        {visaType === 'super' && (
                              <div className="mt-2 text-xs text-gray-500 text-center">
                              Super Visa insurance requires coverage for exactly one year minus one day.
                          </div>
                        )}
                          </div>
                      </PopoverContent>
                    </Popover>
                    </div>
                  </div>
                  
                  {/* Number of Travellers - comfortable width */}
                  <div className="md:col-span-3 flex flex-col w-full">
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      Number of Travellers
                    </label>
                    <div className="flex flex-col grow">
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                            className={`w-full justify-between px-3 py-2 h-auto border ${Object.keys(errors).some(key => key.includes('adult') || key.includes('child')) ? 'border-red-500' : 'border-gray-300'} rounded-lg text-left font-normal text-sm transition-all duration-200 hover:border-deepBlue hover:bg-gray-50/50 focus:ring-2 focus:ring-deepBlue/20 active:bg-gray-100`}
                        >
                            <div className="flex items-center">
                              <Users className="h-4 w-4 opacity-50 mr-2" />
                          <span>{adults} {adults === 1 ? 'adult' : 'adults'} • {children} {children === 1 ? 'child' : 'children'}</span>
                            </div>
                          <ChevronDown className="h-4 w-4 opacity-50" />
                        </Button>
                      </PopoverTrigger>
                        <div className="h-5">
                          {Object.keys(errors).some(key => key.includes('adult') || key.includes('child')) && (
                            <p className="mt-1 text-xs text-red-500">All traveller ages are required</p>
                          )}
                        </div>
                        <PopoverContent className="w-[calc(100vw-40px)] md:w-80 p-3" align="start" side="bottom" sideOffset={5}>
                          <div className="space-y-3">
                            <div className="flex flex-col space-y-2">
                              <div className="flex items-center justify-between">
                              <h3 className="text-sm font-medium text-gray-700">Adults</h3>
                                <div className="flex border rounded-lg overflow-hidden h-7 bg-white">
                                <button 
                                  type="button"
                                  onClick={() => handleAdultsChange(false)}
                                    className="px-1.5 hover:bg-gray-50 transition-colors flex items-center justify-center text-deepBlue"
                                  disabled={adults <= 1}
                                >
                                    <Minus size={12} className={adults <= 1 ? "text-gray-300" : "text-deepBlue"} />
                                </button>
                                  <div className="flex-1 flex items-center justify-center font-medium text-gray-700 text-xs px-3 min-w-[24px]">
                                  {adults}
                                </div>
                                <button 
                                  type="button"
                                  onClick={() => handleAdultsChange(true)}
                                    className="px-1.5 hover:bg-gray-50 transition-colors flex items-center justify-center text-deepBlue"
                                  disabled={adults >= 10}
                                >
                                    <Plus size={12} className={adults >= 10 ? "text-gray-300" : "text-deepBlue"} />
                                </button>
                              </div>
                            </div>
                            
                              <div className="flex items-center justify-between">
                              <h3 className="text-sm font-medium text-gray-700">Children</h3>
                                <div className="flex border rounded-lg overflow-hidden h-7 bg-white">
                                <button 
                                  type="button"
                                  onClick={() => handleChildrenChange(false)}
                                    className="px-1.5 hover:bg-gray-50 transition-colors flex items-center justify-center text-deepBlue"
                                  disabled={children <= 0}
                                >
                                    <Minus size={12} className={children <= 0 ? "text-gray-300" : "text-deepBlue"} />
                                </button>
                                  <div className="flex-1 flex items-center justify-center font-medium text-gray-700 text-xs px-3 min-w-[24px]">
                                  {children}
                                </div>
                                <button 
                                  type="button"
                                  onClick={() => handleChildrenChange(true)}
                                    className="px-1.5 hover:bg-gray-50 transition-colors flex items-center justify-center text-deepBlue"
                                  disabled={children >= 10}
                                >
                                    <Plus size={12} className={children >= 10 ? "text-gray-300" : "text-deepBlue"} />
                                </button>
                              </div>
                            </div>
                          </div>

                          {/* Age inputs directly in the travellers dropdown */}
                          {(adults > 0 || children > 0) && (
                              <div className="border-t pt-3 mt-3">
                              <h3 className="text-sm font-medium text-gray-700 mb-3">Traveller Ages</h3>
                                <div className="space-y-3 max-h-[30vh] md:max-h-[40vh] overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 pb-2">
                                  {travellerDOBs.map((traveller) => {
                                    const isAdult = traveller.type === 'Adult';
                                    const travellerIndex = parseInt(traveller.id.split('-')[1]);
                                    const hasError = !!errors[traveller.id];
                                    
                                    return (
                                      <div 
                                        key={traveller.id} 
                                        className={`border rounded-lg p-3 transition-colors ${hasError ? 'border-red-300 bg-red-50' : 'border-gray-200 hover:border-gray-300'}`}
                                      >
                                        <div className="flex justify-between items-center">
                                          <label className="text-sm font-medium text-gray-700">
                                            {isAdult ? 'Adult' : 'Child'} {travellerIndex + 1}
                                    </label>
                                          <div className="flex items-center">
                                            <div className="relative">
                                    <input
                                      type="number"
                                      inputMode="numeric"
                                      pattern="[0-9]*"
                                                min={isAdult ? 18 : 0}
                                      max={120}
                                      value={traveller.age || ''}
                                      onChange={(e) => updateAge(traveller.id, e.target.value)}
                                                placeholder={isAdult ? "Age" : "Age"}
                                                className="w-24 h-10 border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-deepBlue focus:border-deepBlue text-center font-medium"
                                    />
                                            </div>
                                          </div>
                                        </div>
                                    {errors[traveller.id] && (
                                      <p className="text-red-500 text-xs mt-1">{errors[traveller.id]}</p>
                                    )}
                                  </div>
                                    );
                                  })}
                              </div>
                            </div>
                          )}
                        </div>
                      </PopoverContent>
                    </Popover>
                    </div>
                  </div>
                  
                  
                  {/* Coverage Amount - adequate width */}
                  <div className="md:col-span-2 flex flex-col w-full">
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      Coverage Amount
                    </label>
                    <div className="flex flex-col grow">
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                            className={`w-full justify-between px-3 py-2 h-auto border ${errors.coverageAmount || errors.deductible ? 'border-red-500' : 'border-gray-300'} rounded-lg text-left font-normal text-sm transition-all duration-200 hover:border-deepBlue hover:bg-gray-50/50 focus:ring-2 focus:ring-deepBlue/20 active:bg-gray-100`}
                        >
                            <div className="flex items-center">
                              <DollarSign className="h-4 w-4 opacity-50 mr-2" />
                          <span>${parseInt(coverageAmount).toLocaleString()} • ${parseInt(deductible).toLocaleString()}</span>
                            </div>
                          <ChevronDown className="h-4 w-4 opacity-50" />
                        </Button>
                      </PopoverTrigger>
                        <div className="h-5">
                          {(errors.coverageAmount) && (
                            <p className="mt-1 text-xs text-red-500">{errors.coverageAmount}</p>
                          )}
                        </div>
                        <PopoverContent className="w-[calc(100vw-40px)] md:w-80 p-3" align="start" side="bottom" sideOffset={5}>
                        <div className="space-y-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Coverage Amount
                            </label>
                            <select
                              value={coverageAmount}
                                onChange={(e) => {
                                  setCoverageAmount(e.target.value);
                                  // Clear coverage amount error if it exists
                                  if (errors.coverageAmount) {
                                    setErrors(prev => {
                                      const newErrors = {...prev};
                                      delete newErrors.coverageAmount;
                                      return newErrors;
                                    });
                                  }
                                }}
                              className="w-full border rounded-lg px-3 h-10 text-sm"
                            >
                                {visaType !== 'super' && (
                                  <>
                              <option value="10000">$10,000</option>
                              <option value="25000">$25,000</option>
                              <option value="50000">$50,000</option>
                                  </>
                                )}
                              <option value="100000">$100,000</option>
                              <option value="250000">$250,000</option>
                              <option value="500000">$500,000</option>
                              <option value="1000000">$1,000,000</option>
                            </select>
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Deductible
                            </label>
                            <select
                              value={deductible}
                                onChange={(e) => {
                                  setDeductible(e.target.value);
                                  // Clear deductible error if it exists
                                  if (errors.deductible) {
                                    setErrors(prev => {
                                      const newErrors = {...prev};
                                      delete newErrors.deductible;
                                      return newErrors;
                                    });
                                  }
                                }}
                              className="w-full border rounded-lg px-3 h-10 text-sm"
                            >
                              <option value="0">$0</option>
                              <option value="500">$500</option>
                              <option value="1000">$1,000</option>
                              <option value="2000">$2,000</option>
                              <option value="5000">$5,000</option>
                            </select>
                          </div>
                        </div>
                      </PopoverContent>
                    </Popover>
                    </div>
                  </div>
                  
                  {/* Submit Button - 2 columns */}
                  <div className="md:col-span-2 flex flex-col w-full">
                    <div className="h-[21px]"></div>
                    <div className="flex flex-col grow">
                    <motion.button 
                      type="submit" 
                        className="w-full bg-deepBlue hover:bg-deepBlue/90 text-white flex items-center justify-center h-[42px] px-4 text-base font-semibold whitespace-nowrap shadow-md rounded-lg transition-all duration-200 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      disabled={loading}
                    >
                      {loading ? (
                        <div className="flex items-center justify-center">
                            <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                          Getting Quotes...
                        </div>
                      ) : (
                        <>
                          {quotes ? 'Refresh Quotes' : 'Get Quote Now'}
                        </>
                      )}
                    </motion.button>
                      <div className="h-5"></div>
                    </div>
                  </div>
                </div>
                
                {/* Checkboxes below the form in a single row */}
                <div className="flex flex-wrap gap-x-6 gap-y-2 mt-4">
                  <div className="flex items-center cursor-pointer group" onClick={() => setPreExisting(!preExisting)}>
                    <div className={cn(
                      "w-4 h-4 rounded flex items-center justify-center mr-2 border transition-all duration-200",
                      preExisting ? "bg-deepBlue border-deepBlue" : "bg-white border-gray-300 group-hover:border-deepBlue/50"
                    )}>
                      {preExisting && <Check className="h-3 w-3 text-white" />}
                    </div>
                    <label className="text-xs text-gray-700 cursor-pointer select-none hover:text-gray-900 transition-colors">
                      Show coverages with Pre-existing conditions
                    </label>
                  </div>
                  <div className="flex items-center cursor-pointer group" onClick={() => setMonthlyPayment(!monthlyPayment)}>
                    <div className={cn(
                      "w-4 h-4 rounded flex items-center justify-center mr-2 border transition-all duration-200",
                      monthlyPayment ? "bg-deepBlue border-deepBlue" : "bg-white border-gray-300 group-hover:border-deepBlue/50"
                    )}>
                      {monthlyPayment && <Check className="h-3 w-3 text-white" />}
                    </div>
                    <label className="text-xs text-gray-700 cursor-pointer select-none hover:text-gray-900 transition-colors">
                      Monthly payment options only
                    </label>
                  </div>
                </div>
              </form>
            </div>
          ) : null}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
