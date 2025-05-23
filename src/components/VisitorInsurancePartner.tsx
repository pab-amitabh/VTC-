import React, { memo } from 'react';
import { ArrowRight } from 'lucide-react';

const VisitorInsurancePartner = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Customer data for the table
  const customers = [
    {
      name: "Darrell Steward",
      email: "D.rivera@example.com",
      amount: "$12,399",
      location: "Fairfield",
      image: "/images/header-4.png"
    },
    {
      name: "Jenny Wilson",
      email: "w.lawson@example.com",
      amount: "$11,234",
      location: "Austin",
      image: "/images/header-4.png"
    },
    {
      name: "Devon Lane",
      email: "dat.roberts@example.com",
      amount: "$11,159",
      location: "New York",
      image: "/images/header-4.png"
    },
    {
      name: "Jane Cooper",
      email: "jgraham@example.com",
      amount: "$10,483",
      location: "Toledo",
      image: "/images/header-4.png"
    },
    {
      name: "Dianne Russell",
      email: "curtis.d@example.com",
      amount: "$9,084",
      location: "Naperville",
      image: "/images/header-4.png"
    }
  ];
  
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden" id="trusted-partner">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50/30 to-pink-50/30"></div>
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#17B3E4]/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#DB2877]/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-1000"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12 mb-16">
          {/* Left Column - Image */}
          <div className="w-full lg:w-5/12 flex items-center justify-center">
            <img 
              src="/images/header-4.png" 
              alt="Trusted Partner Info - Canada skyline in maple leaf" 
              className="w-full max-w-md h-auto object-contain transform hover:scale-105 transition-transform duration-500"
            />
          </div>
          
          {/* Right Column - Content */}
          <div className="w-full lg:w-7/12">
            <h2 className="text-4xl md:text-5xl font-bold text-[#181B1F] mb-2 leading-tight">
              Your trusted partner for Visitor to Canada Insurance
            </h2>
            
            <div className="border-t border-gray-200 pt-2 mb-3"></div>
            
            <p className="text-lg md:text-xl text-[#64748B] leading-relaxed mb-6">
              At <span className="font-semibold text-[#181B1F]">[domain name]</span>, we promise you the best visitor insurance plans for Canada within minutes, 
              and at affordable rates. We specialize in customized Visitor to Canada insurance plans to meet 
              the unique needs of tourists, international students, temporary workers, Super Visa applicants, 
              and more.
            </p>
            
            <p className="text-lg md:text-xl text-[#64748B] leading-relaxed">
              Our easy-to-use platform helps you compare plans from trusted Canadian providers and find the 
              best coverage, so you can travel with complete peace of mind.
            </p>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="bg-[#DB2877] rounded-3xl p-4 md:p-6 lg:p-8 text-center text-white max-w-5xl w-full relative mb-0 mt-20 mx-auto">
          <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left" style={{ minHeight: "180px" }}>
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 md:mb-3">
              Start protecting your trip today
            </h3>
            <p className="text-sm md:text-base mb-3 md:mb-4 opacity-90">
              Don't wait until the last minute. Secure your peace of mind with comprehensive visitor insurance coverage.
            </p>
            <button 
              onClick={scrollToTop}
              className="bg-white text-[#DB2877] px-3 md:px-4 py-2 md:py-2.5 rounded-lg font-bold text-xs md:text-sm hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-1.5 group mx-auto md:mx-0 w-fit"
            >
              GET QUOTE NOW
              <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            <p className="text-xs md:text-sm opacity-75 mt-3 md:mt-4">
              ✓ No hidden fees  ✓ Instant coverage
            </p>
          </div>
          
          {/* Background Image - properly positioned - desktop only */}
          <div 
            className="hidden md:block absolute right-1 -top-16 w-1/2 h-[calc(100%+4rem)] z-20"
          >
            <img 
              src="/images/family.png" 
              alt="Family" 
              className="w-full h-full object-cover object-top object-right scale-x-[-1]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

VisitorInsurancePartner.displayName = 'VisitorInsurancePartner';

export default memo(VisitorInsurancePartner); 