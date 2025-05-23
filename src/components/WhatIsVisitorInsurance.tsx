import React from 'react';
import { DollarSign, AlertTriangle } from 'lucide-react';

const WhatIsVisitorInsurance = () => {
  return (
    <section className="py-8 md:py-12 bg-white" id="what-is-visitor-insurance">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header Content */}
        <div className="max-w-5xl mx-auto mb-12 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-semibold mb-4 text-[#181A1B] text-center">
            What is Visitor to Canada Insurance?
          </h2>
          <p className="text-base md:text-lg text-[#525A5B] text-center leading-relaxed">
            Canada's provincial healthcare does not cover visitors, which makes visitor insurance essential 
            for anyone traveling to Canada. Visitor to Canada insurance protects your parents, relatives, 
            and other guests from unexpected medical emergencies and travel-related expenses during their stay.
          </p>
        </div>

        <div className='bg-[#F8F9FF] p-6 md:p-8 rounded-xl'>
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 lg:items-end">
            {/* Center aligned heading for the entire section */}
            <div className="w-full">
              <h3 className="text-xl md:text-3xl font-semibold text-[#181A1B] text-center">
                There are two main types of visitor insurance:
              </h3>
            </div>
          </div>

          {/* Card layout container */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 mt-8 max-w-5xl mx-auto">
            {/* Medical Insurance Card */}
            <div className="bg-white rounded-xl shadow-md p-6 border">
              <h4 className="text-lg md:text-xl font-semibold text-[#181A1B] mb-3">
                Medical insurance for visitors to Canada
              </h4>
              <p className="text-base text-[#525A5B] leading-relaxed">
                This coverage helps pay for medical treatment if you fall ill or get injured while visiting. It also covers emergency medical transportation, including medical evacuation to a hospital in another country if necessary. This is the most commonly purchased type of visitor insurance
              </p>
            </div>

            {/* Trip Cancellation Card */}
            <div className="bg-white rounded-xl shadow-md p-6 border">
              <h4 className="text-lg md:text-xl font-semibold text-[#181A1B] mb-3">
                Trip cancellation and interruption insurance
              </h4>
              <p className="text-base text-[#525A5B] leading-relaxed">
                This insurance reimburses you for trip costs if you need to cancel or interrupt your travel due to unforeseen events like illness, severe weather, lost baggage, or transportation delays
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsVisitorInsurance; 