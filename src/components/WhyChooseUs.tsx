import React from 'react';
import { BarChart3, DollarSign, Settings, CheckCircle, Lock, Users } from 'lucide-react';

const WhyChooseUs = () => {
  const reasonsItems = [
    {
      title: "Comprehensive comparison",
      description: "Instantly access quotes from multiple top Canadian insurance providers—all in one place!",
      icon: <BarChart3 className="h-8 w-8 text-white" />,
      color: "#17B3E4"
    },
    {
      title: "Save time & money",
      description: "Quickly compare competitive rates to find plans that offer the best value for your needs",
      icon: <DollarSign className="h-8 w-8 text-white" />,
      color: "#17B3E4"
    },
    {
      title: "Customized options",
      description: "Choose from plans designed specifically for tourists, international students, temporary workers, and Super Visa applicants",
      icon: <Settings className="h-8 w-8 text-white" />,
      color: "#17B3E4"
    },
    {
      title: "Transparent information",
      description: "We present clear, easy-to-understand plan details and costs—no hidden fees or surprises",
      icon: <CheckCircle className="h-8 w-8 text-white" />,
      color: "#17B3E4"
    },
    {
      title: "Easy & secure online process",
      description: "Get quotes and purchase your policy conveniently and safely from anywhere",
      icon: <Lock className="h-8 w-8 text-white" />,
      color: "#17B3E4"
    },
    {
      title: "Expert support",
      description: "Our licensed advisors and customer service team are ready to help you choose the right coverage and answer your questions",
      icon: <Users className="h-8 w-8 text-white" />,
      color: "#17B3E4"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50 relative overflow-hidden" id="why-choose-us">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 rounded-full opacity-30 transform translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-pink-100 rounded-full opacity-30 transform -translate-x-1/3 translate-y-1/3"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
            Why choose us
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              We make finding the right visitor insurance for Canada simple, fast, and reliable. Here's why you should trust us:
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {reasonsItems.map((reason, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 border border-gray-100">
              <div className="flex flex-col items-center text-center">
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-5"
                  style={{ backgroundColor: reason.color }}
                >
                  {reason.icon}
                </div>
                <h3 className="font-bold text-xl text-gray-900 mb-3">{reason.title}</h3>
                <p className="text-gray-700">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 md:mt-16 bg-white p-8 rounded-xl shadow-md border border-gray-100">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: '#17B3E4' }}>
                Experience the InsureTravel difference
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                With our user-friendly platform, expert guidance, and comprehensive comparison tools, finding the right visitor insurance has never been easier.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Join thousands of satisfied travelers who've secured their peace of mind with InsureTravel.
              </p>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <div className="w-full max-w-[200px] h-[200px] bg-[#17B3E4] rounded-full flex items-center justify-center text-white p-8">
                <div className="text-center">
                  <div className="text-4xl font-bold">100%</div>
                  <div className="text-sm mt-2">Satisfaction guarantee</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs; 