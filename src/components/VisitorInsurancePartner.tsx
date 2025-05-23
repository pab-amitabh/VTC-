import React from 'react';
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
    <section className="py-8 md:py-12 bg-white" id="trusted-partner">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12 mb-16">
          {/* Left Column - Image */}
          <div className="w-full lg:w-5/12 flex items-center justify-center">
            <img 
              src="/images/header-4.png" 
              alt="Trusted Partner Info - Canada skyline in maple leaf" 
              className="w-full max-w-md h-auto object-contain"
            />
          </div>
          
          {/* Right Column - Content */}
          <div className="w-full lg:w-7/12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-[#141428]">
              Your trusted partner for Visitor to Canada Insurance
            </h2>
            
            <div className="border-t border-gray-100 pt-8 mb-6"></div>
            
            <p className="text-lg text-[#181B1F] leading-relaxed mb-6">
              At <span className="font-semibold">[domain name]</span>, we promise you the best visitor insurance plans for Canada within minutes, 
              and at affordable rates. We specialize in customized Visitor to Canada insurance plans to meet 
              the unique needs of tourists, international students, temporary workers, Super Visa applicants, 
              and more.
            </p>
            
            <p className="text-lg text-[#181B1F] leading-relaxed">
              Our easy-to-use platform helps you compare plans from trusted Canadian providers and find the 
              best coverage, so you can travel with complete peace of mind.
            </p>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="bg-[#DB2877] rounded-xl p-6 md:p-10 relative overflow-visible mb-0 mt-20">
          <div className="w-1/2 flex flex-col justify-center" style={{ minHeight: "180px" }}>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 whitespace-nowrap">
              Start protecting your trip today
            </h2>
            
            <p className="text-base text-white mb-6">
              Don't wait until the last minute. Secure your peace of mind with comprehensive visitor insurance coverage.
            </p>
            
            <button 
              onClick={scrollToTop}
              className="bg-[#CEF2FC] hover:bg-[#CEF2FC] text-black font-semibold py-3 px-8 rounded-md w-fit transition-all duration-300"
            >
              GET QUOTE NOW
            </button>
          </div>
          
          {/* Background Image - properly positioned */}
          <div 
            className="absolute right-1 bottom-0 w-1/2 h-full md:h-[140%] z-20"
          >
            <img 
              src="/images/family.png" 
              alt="Family" 
              className="w-full h-full object-contain object-right scale-x-[-1]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisitorInsurancePartner; 