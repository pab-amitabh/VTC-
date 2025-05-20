import React from 'react';

const VisitorInsurancePartner = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <section className="py-16 md:py-24 bg-gray-50 relative overflow-hidden" id="trusted-partner">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 rounded-full opacity-30 transform translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-pink-100 rounded-full opacity-30 transform -translate-x-1/3 translate-y-1/3"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative">
        {/* Canada icon */}
        <div className="absolute top-0 right-4 md:right-10 w-32 md:w-40 opacity-10 pointer-events-none">
          <svg viewBox="0 0 60 60" fill="currentColor" style={{ color: '#17B3E4' }}>
            <path d="M30,0L30,0c16.57,0,30,13.43,30,30v0c0,16.57-13.43,30-30,30h0C13.43,60,0,46.57,0,30v0C0,13.43,13.43,0,30,0z"/>
            <path fill="#fff" d="M46.35,30l-5.04,2.52l2.38,1.05l-1.06,2.39L37.14,30l-3.78,5.04h-2.52v-3.78L26.1,34.2l-1.89-4.2 l-1.89,4.2l-4.73-2.94v3.78h-2.52L11.29,30l-5.48,5.96l-1.06-2.39l2.38-1.05L2.09,30l5.04-2.52l-2.38-1.05l1.06-2.39L11.29,30 l3.78-5.04h2.52v3.78l4.73-2.94l1.89,4.2l1.89-4.2l4.73,2.94v-3.78h2.52L37.14,30l5.48-5.96l1.06,2.39l-2.38,1.05L46.35,30z"/>
          </svg>
        </div>
        
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
            Your trusted partner for Visitor to Canada Insurance
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Whether you're visiting Canada for leisure, study, work, or to reunite with your loved ones, 
              having Visitor to Canada insurance is crucial. Canada's healthcare system does not cover non-residents, 
              and a single hospital visit can cost over <span className="font-semibold">$2,500!</span>
            </p>
          </div>
        </div>
            
        <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-8 md:p-10 border border-gray-100 mb-8">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed flex items-start">
              <span className="inline-block mr-3 mt-1 flex-shrink-0" style={{ color: '#17B3E4' }}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              <span>
                At <span className="font-semibold">[domain name]</span>, we promise you the best visitor insurance plans for Canada within minutes, 
                and at affordable rates. We specialize in customized Visitor to Canada insurance plans to meet 
                the unique needs of tourists, international students, temporary workers, Super Visa applicants, 
                and more.
              </span>
            </p>
                
            <p className="text-lg text-gray-700 leading-relaxed flex items-start">
              <span className="inline-block mr-3 mt-1 flex-shrink-0" style={{ color: '#17B3E4' }}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </span>
              <span>
                Our easy-to-use platform helps you compare plans from trusted Canadian providers and find the 
                best coverage, so you can travel with complete peace of mind.
              </span>
            </p>
          </div>
        </div>
              
        <div className="mt-12 md:mt-16 bg-white p-8 rounded-xl shadow-md border border-gray-100">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: '#17B3E4' }}>
                Start protecting your trip today
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Don't wait until the last minute. Secure your peace of mind with comprehensive visitor insurance coverage.
              </p>
              <div className="mt-6">
                <button 
                  onClick={scrollToTop}
                  className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-4 px-12 rounded-full text-lg transition-all duration-300 shadow-md transform hover:scale-105 flex items-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  GET A QUOTE
                </button>
              </div>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <div className="w-full max-w-[200px] h-[200px] bg-[#17B3E4] rounded-full flex items-center justify-center text-white p-8">
                <div className="text-center">
                  <div className="text-4xl font-bold">24/7</div>
                  <div className="text-sm mt-2">Support and assistance throughout your trip</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisitorInsurancePartner; 