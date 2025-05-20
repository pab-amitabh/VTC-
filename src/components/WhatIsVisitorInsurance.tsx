import React from 'react';
import { User, X } from 'lucide-react';

const WhatIsVisitorInsurance = () => {
  const insuranceTypes = [
    {
      title: "Medical insurance for visitors to Canada",
      description: "This coverage helps pay for medical treatment if you fall ill or get injured while visiting. It also covers emergency medical transportation, including medical evacuation to a hospital in another country if necessary. This is the most commonly purchased type of visitor insurance",
      icon: <User className="h-8 w-8 text-white" />,
      color: "#17B3E4"
    },
    {
      title: "Trip cancellation and interruption insurance",
      description: "This insurance reimburses you for trip costs if you need to cancel or interrupt your travel due to unforeseen events like illness, severe weather, lost baggage, or transportation delays",
      icon: <X className="h-8 w-8 text-white" />,
      color: "#17B3E4"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50 relative overflow-hidden" id="what-is-visitor-insurance">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 rounded-full opacity-30 transform translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-pink-100 rounded-full opacity-30 transform -translate-x-1/3 translate-y-1/3"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
            What is Visitor to Canada Insurance?
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Canada's provincial healthcare does not cover visitors, which makes visitor insurance essential 
              for anyone traveling to Canada. Visitor to Canada insurance protects your parents, relatives, 
              and other guests from unexpected medical emergencies and travel-related expenses during 
              their stay.
            </p>
          </div>
        </div>
        
        <div className="text-center mb-8">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">
            There are two main types of visitor insurance:
          </h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {insuranceTypes.map((type, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 border border-gray-100">
              <div className="flex flex-col items-center text-center">
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-5"
                  style={{ backgroundColor: type.color }}
                >
                  {type.icon}
                </div>
                <h4 className="font-bold text-xl text-gray-900 mb-3">{type.title}</h4>
                <p className="text-gray-700">{type.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 md:mt-16 bg-white p-8 rounded-xl shadow-md border border-gray-100">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: '#17B3E4' }}>
                Protection and peace of mind
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Together, these coverages provide peace of mind, ensuring visitors are protected against costly 
                emergencies and travel disruptions while in Canada.
              </p>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <div className="w-full max-w-[200px] h-[200px] bg-[#17B3E4] rounded-full flex items-center justify-center text-white p-8">
                <div className="text-center">
                  <div className="text-4xl font-bold">100%</div>
                  <div className="text-sm mt-2">Travel with confidence and security</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsVisitorInsurance; 