import React, { memo } from 'react';
import { Users, Briefcase, FileCheck, Heart, ArrowRight } from 'lucide-react';

const WhoNeedsInsurance = () => {
  const visitorTypes = [
    {
      title: "Visitors to Canada",
      description: "Tourists and family visitors exploring Canada",
      icon: <Users className="w-7 h-7 text-[#17B3E4]" />,
    },
    {
      title: "International Students",
      description: "Students studying at Canadian institutions",
      icon: <Briefcase className="w-7 h-7 text-[#17B3E4]" />,
    },
    {
      title: "Super Visa Insurance",
      description: "Parents and grandparents visiting long-term",
      icon: <FileCheck className="w-7 h-7 text-[#17B3E4]" />,
    },
    {
      title: "Foreign Workers",
      description: "Temporary workers and professionals",
      icon: <Heart className="w-7 h-7 text-[#17B3E4]" />,
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToPlans = () => {
    const plansSection = document.getElementById('plans');
    if (plansSection) {
      plansSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const renderVisitorTypePanel = (type: any, index: number) => (
    <div key={index} className="group bg-white hover:bg-blue-50 p-4 rounded-xl shadow-sm hover:shadow-lg border border-gray-100 hover:border-[#17B3E4]/30 transition-all duration-300 transform hover:-translate-y-1">
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0">
          <div className="bg-[#17B3E4]/10 w-10 h-10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            {React.cloneElement(type.icon, { className: "w-5 h-5 text-[#17B3E4]" })}
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-bold text-[#181B1F] mb-1 group-hover:text-[#17B3E4] transition-colors duration-300">
            {type.title}
          </h3>
          <p className="text-xs text-[#64748B] leading-relaxed">
            {type.description}
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden" id="who-needs-insurance">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50/30 to-pink-50/30"></div>
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#17B3E4]/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#DB2877]/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-1000"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#181B1F] mb-6 leading-tight">
            Who needs travel insurance for 
             visitors to Canada?
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-lg md:text-xl text-[#64748B] leading-relaxed">
              We customize visitor insurance to protect every kind of traveller in Canada. Whether you're a 
              tourist, international student, temporary worker, or simply visiting family, our plans cover 
              emergency medical care so you can focus on your trip, not on unexpected bills.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8 items-center mb-16 relative px-4 lg:px-8">
          {/* Left Column */}
          <div className="space-y-6 order-2 lg:order-1 lg:col-span-2 relative z-10">
            <div className="lg:-mt-16">
              {renderVisitorTypePanel(visitorTypes[0], 0)}
            </div>
            <div className="lg:mt-8">
              {renderVisitorTypePanel(visitorTypes[2], 2)}
            </div>
          </div>

          {/* Center Image Column */}
          <div className="flex justify-center items-center order-1 lg:order-2 py-8 lg:py-0 lg:col-span-1 relative z-20">
            <div className="relative">
              <img 
                src="/images/illustration.png" 
                alt="Travel insurance illustration" 
                className="relative max-w-24 md:max-w-32 lg:max-w-md h-auto object-contain transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6 order-3 lg:col-span-2 relative z-10">
            <div className="lg:mt-8">
              {renderVisitorTypePanel(visitorTypes[1], 1)}
            </div>
            <div className="lg:mt-8 relative z-30">
              {renderVisitorTypePanel(visitorTypes[3], 3)}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="flex justify-center">
          <div className="bg-[#17B3E4] rounded-3xl p-4 md:p-6 lg:p-8 text-center text-white max-w-5xl w-full">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 md:mb-3">
              Ready to protect your Canadian adventure?
            </h3>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center mb-3 md:mb-4">
              <button 
                onClick={scrollToTop}
                className="w-full sm:w-auto bg-white text-[#17B3E4] px-6 md:px-8 py-3 md:py-4 rounded-xl font-bold text-base md:text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2 group"
              >
                Get Free Quote
                <ArrowRight className="w-4 md:w-5 h-4 md:h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button 
                onClick={scrollToPlans}
                className="w-full sm:w-auto border-2 border-white text-white px-6 md:px-8 py-3 md:py-4 rounded-xl font-bold text-base md:text-lg hover:bg-white hover:text-[#17B3E4] transition-all duration-300 transform hover:scale-105"
              >
                Compare Plans
              </button>
            </div>
            <p className="text-xs md:text-sm opacity-75">
              ✓ No hidden fees  ✓ Instant coverage
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

WhoNeedsInsurance.displayName = 'WhoNeedsInsurance';

export default memo(WhoNeedsInsurance); 