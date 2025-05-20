import React from 'react';
import { Users, GraduationCap, Briefcase, FileCheck, Heart } from 'lucide-react';

const WhoNeedsInsurance = () => {
  const visitorTypes = [
    {
      title: "Visitor insurance for tourists",
      description: "Insurance for tourists in Canada covers emergency medical care, so you can explore the country stress-free",
      icon: <Users className="h-8 w-8 text-white" />,
      color: "#17B3E4"
    },
    {
      title: "Emergency medical insurance for international students",
      description: "Before provincial health plans kick in (or if you're not eligible), international student insurance Canada provides essential protection for doctor visits and hospital care",
      icon: <GraduationCap className="h-8 w-8 text-white" />,
      color: "#17B3E4"
    },
    {
      title: "Visitor to Canada insurance for temporary workers & IEC participants",
      description: "Temporary worker insurance Canada and IEC (International Experience Canada) insurance protect those in Canada on work permits with plans designed for temporary stays",
      icon: <Briefcase className="h-8 w-8 text-white" />,
      color: "#17B3E4"
    },
    {
      title: "Super Visa insurance in Canada",
      description: "To qualify, you need Super Visa insurance Canada with at least $100,000 in coverage from a Canadian provider, valid for a year",
      icon: <FileCheck className="h-8 w-8 text-white" />,
      color: "#17B3E4"
    },
    {
      title: "Visitor insurance for parents and grandparents",
      description: "Reunions should be joyful, not stressful. Our visitor insurance for parents and grandparents in Canada covers both short trips and long Super Visa stays",
      icon: <Heart className="h-8 w-8 text-white" />,
      color: "#17B3E4"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50 relative overflow-hidden" id="who-needs-insurance">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 rounded-full opacity-30 transform translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-pink-100 rounded-full opacity-30 transform -translate-x-1/3 translate-y-1/3"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
            Who needs travel insurance for visitors to Canada?
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              We customize visitor insurance to protect every kind of traveller in Canada. Whether you're a 
              tourist, international student, temporary worker, or simply visiting family, our plans cover 
              emergency medical care so you can focus on your trip, not on unexpected bills.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {visitorTypes.slice(0, 3).map((type, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 border border-gray-100">
              <div className="flex flex-col items-center text-center">
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-5"
                  style={{ backgroundColor: type.color }}
                >
                  {type.icon}
                </div>
                <h3 className="font-bold text-xl text-gray-900 mb-3">{type.title}</h3>
                <p className="text-gray-700">{type.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {visitorTypes.slice(3, 5).map((type, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 border border-gray-100">
              <div className="flex flex-col items-center text-center">
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-5"
                  style={{ backgroundColor: type.color }}
                >
                  {type.icon}
                </div>
                <h3 className="font-bold text-xl text-gray-900 mb-3">{type.title}</h3>
                <p className="text-gray-700">{type.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 md:mt-16 bg-white p-8 rounded-xl shadow-md border border-gray-100">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: '#17B3E4' }}>
                Specialized coverage for every visitor
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                No matter why you're visiting Canada, we have a plan tailored to your specific needs. Our specialized insurance options provide peace of mind for every type of traveler.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Compare plans instantly and find the perfect coverage for your Canadian journey.
              </p>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <div className="w-full max-w-[200px] h-[200px] bg-[#17B3E4] rounded-full flex items-center justify-center text-white p-8">
                <div className="text-center">
                  <div className="text-4xl font-bold">100%</div>
                  <div className="text-sm mt-2">Visitors protected with the right coverage</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoNeedsInsurance; 