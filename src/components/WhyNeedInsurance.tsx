import React from 'react';
import { Shield, Clock, Globe, DollarSign, Stethoscope, AlertTriangle } from 'lucide-react';

const WhyNeedInsurance = () => {
  const insuranceReasons = [
    {
      title: "Financial Protection",
      description: "Medical treatment in Canada is expensive for non-residents. A single day in hospital can cost $3,000-5,000, and emergency services like ambulances start at $500.",
      icon: <DollarSign className="h-8 w-8 text-white" />,
      color: "#17B3E4"
    },
    {
      title: "Emergency Coverage",
      description: "Visitor insurance provides immediate access to healthcare for unexpected illnesses or injuries without the stress of arranging payment first.",
      icon: <Stethoscope className="h-8 w-8 text-white" />,
      color: "#17B3E4"
    },
    {
      title: "Peace of Mind",
      description: "Travel with confidence knowing you're protected against the unexpected. Focus on enjoying your visit to Canada, not worrying about potential healthcare costs.",
      icon: <Shield className="h-8 w-8 text-white" />,
      color: "#17B3E4"
    },
    {
      title: "Legal Requirements",
      description: "Some visitors, like Super Visa applicants, are legally required to have medical insurance coverage of at least $100,000 for the duration of their stay.",
      icon: <AlertTriangle className="h-8 w-8 text-white" />,
      color: "#17B3E4"
    },
    {
      title: "Comprehensive Protection",
      description: "Beyond medical care, many plans include benefits like trip interruption coverage, emergency evacuation, and assistance with lost baggage.",
      icon: <Globe className="h-8 w-8 text-white" />,
      color: "#17B3E4"
    },
    {
      title: "24/7 Support",
      description: "Get access to multilingual emergency assistance services that can help coordinate care and communicate with healthcare providers anytime, day or night.",
      icon: <Clock className="h-8 w-8 text-white" />,
      color: "#17B3E4"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50 relative overflow-hidden" id="why-need">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 rounded-full opacity-30 transform translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-pink-100 rounded-full opacity-30 transform -translate-x-1/3 translate-y-1/3"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
            Why do you need visitor insurance in Canada?
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Emergency medical insurance in Canada can save you thousands. As a non-resident, you're responsible for all healthcare costs, including ER visits that often exceed $3,000.
            </p>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Visitor health insurance Canada covers sudden expenses like hospitalization, doctor visits, diagnostics, and ambulances and helps you avoid unexpected bills during your stay.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {insuranceReasons.map((reason, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 border border-gray-100">
              <div className="flex flex-col items-center text-center">
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-5"
                  style={{ backgroundColor: reason.color }}
                >
                  {reason.icon}
                </div>
                <h4 className="font-bold text-xl text-gray-900 mb-3">{reason.title}</h4>
                <p className="text-gray-700">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 md:mt-16 bg-white p-8 rounded-xl shadow-md border border-gray-100">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: '#17B3E4' }}>
                Don't risk your financial security
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Without proper insurance, a medical emergency in Canada could cost you tens of thousands of dollars. Visitor insurance provides essential protection at an affordable price.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                InsureTravel makes it easy to compare plans, get the right coverage, and enjoy peace of mind during your Canadian visit.
              </p>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <div className="w-full max-w-[200px] h-[200px] bg-[#17B3E4] rounded-full flex items-center justify-center text-white p-8">
                <div className="text-center">
                  <div className="text-4xl font-bold">$2,500+</div>
                  <div className="text-sm mt-2">Average cost for a single hospital visit in Canada</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyNeedInsurance; 