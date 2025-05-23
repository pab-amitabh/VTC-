import React, { useRef } from 'react';
import WhyNeedInsurance from '../components/WhyNeedInsurance';
import InsuranceProviders from '../components/InsuranceProviders';
import CoverageRequirements from '../components/CoverageRequirements';
// import TableOfContents from '../components/TableOfContents';

const TravelInsuranceInfo = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  // Travel Insurance 101 cards
  const insuranceTypes = [
    {
      title: "Medical Insurance",
      description: "Covers emergency medical expenses, hospital stays, and doctor visits during your trip",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      color: "#17B3E4"
    },
    {
      title: "Trip Cancellation",
      description: "Reimburses non-refundable trip costs if you need to cancel for covered reasons",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      ),
      color: "#FF6B6B"
    },
    {
      title: "Baggage Protection",
      description: "Covers lost, damaged, or stolen baggage during your travels",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 10a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z" />
        </svg>
      ),
      color: "#6C63FF"
    },
    {
      title: "Emergency Evacuation",
      description: "Covers transportation to the nearest adequate medical facility or back home if necessary",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      color: "#FFC107"
    }
  ];
  
  return (
    <>
      <div ref={containerRef}>
        {/* Your trusted partner for Visitor to Canada Insurance */}
        <section className="py-12 md:py-20 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden" id="travel-insurance-info">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 rounded-full opacity-30 transform translate-x-1/3 -translate-y-1/3"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-pink-100 rounded-full opacity-30 transform -translate-x-1/3 translate-y-1/3"></div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl relative">
            {/* Canada icon */}
            <div className="absolute top-0 right-4 md:right-10 w-32 md:w-40 opacity-10 pointer-events-none">
              <svg viewBox="0 0 60 60" fill="currentColor" style={{ color: '#17B3E4' }}>
                <path d="M30,0L30,0c16.57,0,30,13.43,30,30v0c0,16.57-13.43,30-30,30h0C13.43,60,0,46.57,0,30v0C0,13.43,13.43,0,30,0z"/>
                <path fill="#fff" d="M46.35,30l-5.04,2.52l2.38,1.05l-1.06,2.39L37.14,30l-3.78,5.04h-2.52v-3.78L26.1,34.2l-1.89-4.2 l-1.89,4.2l-4.73-2.94v3.78h-2.52L11.29,30l-5.48,5.96l-1.06-2.39l2.38-1.05L2.09,30l5.04-2.52l-2.38-1.05l1.06-2.39L11.29,30 l3.78-5.04h2.52v3.78l4.73-2.94l1.89,4.2l1.89-4.2l4.73,2.94v-3.78h2.52L37.14,30l5.48-5.96l1.06,2.39l-2.38,1.05L46.35,30z"/>
              </svg>
            </div>
            
            <div className="flex flex-col items-center">
              {/* Main content */}
              <div className="w-full relative z-10">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-center" style={{ color: '#17B3E4' }}>
                  Your trusted partner for 
                  <span className="block mt-1">Visitor to Canada Insurance</span>
                </h2>
                
                <div className="bg-white p-8 md:p-10 rounded-xl shadow-lg border border-gray-100 mb-8">
                  <div className="space-y-6">
                    <p className="text-base md:text-lg text-gray-800 leading-relaxed flex items-start">
                      <span className="inline-block mr-3 mt-1 flex-shrink-0" style={{ color: '#17B3E4' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </span>
                      <span>
                        Whether you're visiting Canada for leisure, study, work, or to reunite with your loved ones, 
                        having Visitor to Canada insurance is crucial. Canada's healthcare system does not cover non-residents, 
                        and a single hospital visit can cost over <span className="font-semibold">$2,500!</span>
                      </span>
                    </p>
                    
                    <p className="text-base md:text-lg text-gray-800 leading-relaxed flex items-start">
                      <span className="inline-block mr-3 mt-1 flex-shrink-0" style={{ color: '#17B3E4' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </span>
                      <span>
                        At <span className="font-semibold">InsureTravel</span>, we promise you the best visitor insurance plans for Canada within minutes, 
                        and at affordable rates. We specialize in customized Visitor to Canada insurance plans to meet 
                        the unique needs of tourists, international students, temporary workers, Super Visa applicants, 
                        and more.
                      </span>
                    </p>
                    
                    <p className="text-base md:text-lg text-gray-800 leading-relaxed flex items-start">
                      <span className="inline-block mr-3 mt-1 flex-shrink-0" style={{ color: '#17B3E4' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span>
                        Our easy-to-use platform helps you compare plans from trusted Canadian providers and find the 
                        best coverage, so you can travel with complete peace of mind.
                      </span>
                    </p>
                  </div>
                  
                  <div className="flex flex-col items-center border-t border-gray-100 pt-8 mt-8">
                    <button 
                      onClick={scrollToTop}
                      className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-4 px-12 rounded-full text-lg transition-all duration-300 shadow-md transform hover:scale-105 flex items-center"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                      BUY NOW
                    </button>
                    
                    <div className="mt-4 text-pink-600 font-medium text-lg">
                      <span className="cursor-pointer hover:underline flex items-center" onClick={scrollToTop}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                        </svg>
                        Get an instant quote
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Why choose us section */}
        <section className="py-12 md:py-16 bg-white relative" id="why-choose-us">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 md:mb-10" style={{ color: '#17B3E4' }}>
              Why choose us
            </h2>
            
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-md border border-gray-100">
              <p className="text-base md:text-lg text-gray-800 mb-8">
                We make finding the right visitor insurance for Canada simple, fast, and reliable. Here's why you should trust us:
              </p>
              
              <ul className="space-y-6">
                {/* Comprehensive comparison */}
                <li className="flex">
                  <div className="flex-shrink-0 h-8 w-8 rounded-full flex items-center justify-center mr-4 text-white" style={{ backgroundColor: '#17B3E4' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Comprehensive comparison</h3>
                    <p className="text-gray-700">
                      Instantly access quotes from multiple top Canadian insurance providers—all in one place!
                    </p>
                  </div>
                </li>
                
                {/* Save time & money */}
                <li className="flex">
                  <div className="flex-shrink-0 h-8 w-8 rounded-full flex items-center justify-center mr-4 text-white" style={{ backgroundColor: '#17B3E4' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Save time & money</h3>
                    <p className="text-gray-700">
                      Quickly compare competitive rates to find plans that offer the best value for your needs
                    </p>
                  </div>
                </li>
                
                {/* Customized options */}
                <li className="flex">
                  <div className="flex-shrink-0 h-8 w-8 rounded-full flex items-center justify-center mr-4 text-white" style={{ backgroundColor: '#17B3E4' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Customized options</h3>
                    <p className="text-gray-700">
                      Choose from plans designed specifically for tourists, international students, temporary workers, and Super Visa applicants
                    </p>
                  </div>
                </li>
                
                {/* Transparent information */}
                <li className="flex">
                  <div className="flex-shrink-0 h-8 w-8 rounded-full flex items-center justify-center mr-4 text-white" style={{ backgroundColor: '#17B3E4' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Transparent information</h3>
                    <p className="text-gray-700">
                      We present clear, easy-to-understand plan details and costs—no hidden fees or surprises
                    </p>
                  </div>
                </li>
                
                {/* Easy & secure online process */}
                <li className="flex">
                  <div className="flex-shrink-0 h-8 w-8 rounded-full flex items-center justify-center mr-4 text-white" style={{ backgroundColor: '#17B3E4' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Easy & secure online process</h3>
                    <p className="text-gray-700">
                      Get quotes and purchase your policy conveniently and safely from anywhere
                    </p>
                  </div>
                </li>
                
                {/* Expert support */}
                <li className="flex">
                  <div className="flex-shrink-0 h-8 w-8 rounded-full flex items-center justify-center mr-4 text-white" style={{ backgroundColor: '#17B3E4' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Expert support</h3>
                    <p className="text-gray-700">
                      Our licensed advisors and customer service team are ready to help you choose the right coverage and answer your questions
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
        
        {/* What is Visitor to Canada Insurance section */}
        <section className="py-12 md:py-16 bg-gray-50 relative" id="what-is-visitor-insurance">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 md:mb-10" style={{ color: '#17B3E4' }}>
              What is Visitor to Canada Insurance?
            </h2>
            
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-md border border-gray-100">
              <p className="text-base md:text-lg text-gray-800 mb-8 leading-relaxed">
                Canada's provincial healthcare does not cover visitors, which makes visitor insurance essential 
                for anyone traveling to Canada. Visitor to Canada insurance protects your parents, relatives, 
                and other guests from unexpected medical emergencies and travel-related expenses during 
                their stay.
              </p>
              
              <p className="text-base md:text-lg font-medium text-gray-800 mb-6">
                There are two main types of visitor insurance:
              </p>
              
              <div className="space-y-6 md:space-y-8">
                {/* Medical Insurance */}
                <div className="p-5 rounded-lg border" style={{ backgroundColor: 'rgba(23, 179, 228, 0.1)', borderColor: 'rgba(23, 179, 228, 0.3)' }}>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full flex items-center justify-center mr-4 text-white" style={{ backgroundColor: '#17B3E4' }}>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Medical Insurance for visitors to Canada</h3>
                      <p className="text-gray-700 leading-relaxed">
                        This coverage helps pay for medical treatment if you fall ill or get injured while visiting. It
                        typically covers emergency medical care, hospital stays, prescription medications, emergency dental care,
                        and ambulance services during your visit to Canada. This is the most commonly purchased type of
                        visitor insurance.
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Trip cancellation and interruption insurance */}
                <div className="p-5 rounded-lg border" style={{ backgroundColor: 'rgba(23, 179, 228, 0.1)', borderColor: 'rgba(23, 179, 228, 0.3)' }}>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full flex items-center justify-center mr-4 text-white" style={{ backgroundColor: '#17B3E4' }}>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Trip cancellation and interruption insurance</h3>
                      <p className="text-gray-700 leading-relaxed">
                        This insurance reimburses you for trip costs if you need to cancel or interrupt your travel 
                        due to unforeseen events like illness, severe weather, lost baggage, or transportation 
                        delays.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="p-5 border-t border-gray-100 mt-6">
                  <p className="text-base md:text-lg text-gray-800 leading-relaxed">
                    Together, these coverages provide peace of mind, ensuring visitors are protected against costly 
                    emergencies and travel disruptions while in Canada.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Who needs travel insurance for visitors to Canada section */}
        <section className="py-12 md:py-16 bg-white relative" id="who-needs-insurance">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 md:mb-10" style={{ color: '#17B3E4' }}>
              Who needs travel insurance for visitors to Canada?
            </h2>
            
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-md border border-gray-100">
              <p className="text-base md:text-lg text-gray-800 mb-8 leading-relaxed">
                We customize visitor insurance to protect every kind of traveller in Canada. Whether you're a 
                tourist, international student, temporary worker, or simply visiting family, our plans cover 
                emergency medical care so you can focus on your trip, not on unexpected bills.
              </p>
              
              <div className="space-y-8">
                {/* Tourists */}
                <div className="p-6 rounded-lg shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md" style={{ borderLeftWidth: '4px', borderLeftColor: '#17B3E4' }}>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Visitor insurance for tourists</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Insurance for tourists in Canada covers emergency medical care, so you can explore the 
                    country stress-free
                  </p>
                </div>
                
                {/* International Students */}
                <div className="p-6 rounded-lg shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md" style={{ borderLeftWidth: '4px', borderLeftColor: '#17B3E4' }}>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Emergency medical insurance for international students</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Before provincial health plans kick in (or if you're not eligible), international student insurance 
                    Canada provides essential protection for doctor visits and hospital care
                  </p>
                </div>
                
                {/* Temporary Workers */}
                <div className="p-6 rounded-lg shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md" style={{ borderLeftWidth: '4px', borderLeftColor: '#17B3E4' }}>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Visitor to Canada insurance for temporary workers & IEC participants</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Temporary worker insurance Canada and IEC (International Experience Canada) insurance 
                    protect those in Canada on work permits with plans designed for temporary stays
                  </p>
                </div>
                
                {/* Super Visa */}
                <div className="p-6 rounded-lg shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md" style={{ borderLeftWidth: '4px', borderLeftColor: '#17B3E4' }}>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Super Visa insurance in Canada</h3>
                  <p className="text-gray-700 leading-relaxed">
                    To qualify, you need Super Visa insurance Canada with at least $100,000 in coverage from a 
                    Canadian provider, valid for a year
                  </p>
                </div>
                
                {/* Parents and Grandparents */}
                <div className="p-6 rounded-lg shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md" style={{ borderLeftWidth: '4px', borderLeftColor: '#17B3E4' }}>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Visitor insurance for parents and grandparents</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Reunions should be joyful, not stressful. Our visitor insurance for parents and grandparents in 
                    Canada covers both short trips and long Super Visa stays
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Table of Contents */}
      {/* <TableOfContents 
        containerRef={containerRef} 
        sectionId="travel-insurance-info" 
      /> */}
    </>
  );
};

export default TravelInsuranceInfo; 