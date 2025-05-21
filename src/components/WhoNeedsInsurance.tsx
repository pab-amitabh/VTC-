import React from 'react';
import { Users, Briefcase, FileCheck, Heart } from 'lucide-react';

const WhoNeedsInsurance = () => {
  const visitorTypes = [
    {
      title: "Visitors to Canada",
      icon: <Users className="w-6 h-6 text-[#3344DD]" />,
    },
    {
      title: "International Students",
      icon: <Briefcase className="w-6 h-6 text-[#3344DD]" />,
    },
    {
      title: "Super Visa Insurance",
      icon: <FileCheck className="w-6 h-6 text-[#3344DD]" />,
    },
    {
      title: "Foreign Workers",
      icon: <Heart className="w-6 h-6 text-[#3344DD]" />,
    }
  ];

  const renderVisitorTypePanel = (type: any, index: number, extraMarginClass: string = '') => (
    <div key={index} className={`bg-white p-4 rounded-lg shadow-md flex items-center gap-4 ${extraMarginClass}`}>
      <div className="flex-shrink-0">
        <div className="bg-[#F0F9FF] w-10 h-10 rounded-lg flex items-center justify-center">
          {type.icon}
        </div>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-[#181B1F]">{type.title}</h3>
      </div>
    </div>
  );

  return (
    <section className="py-8 md:py-12 bg-white" id="who-needs-insurance">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold text-[#181B1F] text-center mb-12">
          Who needs travel insurance for visitors to Canada?
        </h2>
        
        <div className="max-w-4xl mx-auto text-center mb-16">
          <p className="text-base md:text-lg text-[#64748B]">
            We customize visitor insurance to protect every kind of traveller in Canada. Whether you're a 
            tourist, international student, temporary worker, or simply visiting family, our plans cover 
            emergency medical care so you can focus on your trip, not on unexpected bills.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row items-stretch gap-x-8">
          {/* Left Column */}
          <div className="w-full lg:w-1/3 flex flex-col gap-y-6 lg:gap-y-12 order-2 lg:order-1 justify-center">
            {renderVisitorTypePanel(visitorTypes[0], 0)}
            {renderVisitorTypePanel(visitorTypes[2], 2)} {/* Panel 3: Super Visa */}
          </div>

          {/* Center Image Column */}
          <div className="w-full lg:w-1/3 flex justify-center items-center order-1 lg:order-2 py-8 lg:py-0">
            <img 
              src="/images/family.png" 
              alt="Family needing visitor insurance" 
              className="max-w-xs md:max-w-sm lg:max-w-full h-auto object-contain rounded-lg shadow-lg"
            />
          </div>

          {/* Right Column */}
          <div className="w-full lg:w-1/3 flex flex-col gap-y-6 lg:gap-y-12 order-3 lg:order-3 justify-center">
            {renderVisitorTypePanel(visitorTypes[1], 1, "lg:mt-24")} {/* Panel 2: Intl Students, increased lg:mt-16 to lg:mt-24 */}
            {renderVisitorTypePanel(visitorTypes[3], 3)}
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhoNeedsInsurance; 