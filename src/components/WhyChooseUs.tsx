import React from 'react';
import { BarChart3, DollarSign, Settings, CheckCircle, Lock, Users } from 'lucide-react';

const WhyChooseUs = () => {
  const reasonsItems = [
    {
      title: "Comprehensive comparison",
      description: "Instantly access quotes from multiple top Canadian insurance providers—all in one place!",
      icon: <BarChart3 className="h-10 w-10 md:h-12 md:w-12 text-[#17B3E4]" />,
    },
    {
      title: "Save time & money",
      description: "Quickly compare competitive rates to find plans that offer the best value for your needs",
      icon: <DollarSign className="h-10 w-10 md:h-12 md:w-12 text-[#17B3E4]" />,
    },
    {
      title: "Customized options",
      description: "Choose from plans designed specifically for tourists, international students, temporary workers, and Super Visa applicants",
      icon: <Settings className="h-10 w-10 md:h-12 md:w-12 text-[#17B3E4]" />,
    },
    {
      title: "Transparent information",
      description: "We present clear, easy-to-understand plan details and costs—no hidden fees or surprises",
      icon: <CheckCircle className="h-10 w-10 md:h-12 md:w-12 text-[#17B3E4]" />,
    },
    {
      title: "Easy & secure online process",
      description: "Get quotes and purchase your policy conveniently and safely from anywhere",
      icon: <Lock className="h-10 w-10 md:h-12 md:w-12 text-[#17B3E4]" />,
    },
    {
      title: "Expert support",
      description: "Our licensed advisors and customer service team are ready to help you choose the right coverage and answer your questions",
      icon: <Users className="h-10 w-10 md:h-12 md:w-12 text-[#17B3E4]" />,
    }
  ];

  return (
    <section className="pt-8 pb-8 md:pt-12 md:pb-12 bg-white" id="why-choose-us">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header Content */}
        <div className="text-center max-w-4xl mx-auto mb-12 md:mb-16 lg:mb-20">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-[#181A1B]">
            Why choose us
          </h2>
          <p className="text-lg text-[#525A5B]">
            We make finding the right visitor insurance for Canada simple, fast, and reliable.
          </p>
        </div>
        
        {/* Grid with Lines */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10 md:gap-y-12 lg:gap-y-16">
          {/* Horizontal Line */}
          <div className="absolute top-1/2 left-0 right-0 h-px bg-[#E4E4E7] hidden lg:block"></div>
          
          {/* Vertical Lines */}
          <div className="absolute top-0 bottom-0 left-1/3 w-px bg-[#E4E4E7] hidden lg:block"></div>
          <div className="absolute top-0 bottom-0 left-2/3 w-px bg-[#E4E4E7] hidden lg:block"></div>

          {/* Feature Items */}
          {reasonsItems.map((reason, index) => (
            <div key={index} className="flex flex-col items-center text-center px-4 md:px-6">
              <div className="mb-6 md:mb-8">
                {reason.icon}
              </div>
              <h3 className="text-xl font-semibold text-[#181A1B] mb-4">{reason.title}</h3>
              <p className="text-[#525A5B] leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs; 