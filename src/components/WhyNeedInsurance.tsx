import React, { useState, useEffect } from 'react';
import { motion, animate } from 'framer-motion';

const WhyNeedInsurance = () => {
  const [erCost, setErCost] = useState(0);
  const [hospitalCost, setHospitalCost] = useState(0);
  const [ambulanceCost, setAmbulanceCost] = useState(0);

  const AnimateCounter = (
    targetValue: number,
    setter: React.Dispatch<React.SetStateAction<number>>,
    duration: number = 1.5
  ) => {
    animate(0, targetValue, {
      duration: duration,
      onUpdate: (latest) => {
        setter(Math.round(latest));
      },
    });
  };

  const handleViewportEnter = () => {
    AnimateCounter(3000, setErCost);
    AnimateCounter(5000, setHospitalCost);
    AnimateCounter(500, setAmbulanceCost);
  };

  return (
    <section className="py-8 md:py-12 bg-white" id="why-need">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#181B1F] text-center mb-12">
            Why do you need visitor insurance in Canada?
          </h2>
        </div>
        
        <motion.div 
          className="bg-[#F0F9FF] rounded-lg p-6 md:p-8 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          onViewportEnter={handleViewportEnter}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-center max-w-5xl mx-auto">
            <div className="md:border-r md:border-[#E5E7EB] px-2">
              <div 
                className="text-5xl sm:text-6xl md:text-7xl text-[#181B1F] mb-2"
                style={{ fontFamily: 'Urbanist, sans-serif' }}
              >
                ${erCost.toLocaleString()}+
              </div>
              <div className="text-[#64748B]">Average ER Visit Cost</div>
            </div>
            <div className="md:border-r md:border-[#E5E7EB] px-2">
              <div 
                className="text-5xl sm:text-6xl md:text-7xl text-[#181B1F] mb-2"
                style={{ fontFamily: 'Urbanist, sans-serif' }}
              >
                ${hospitalCost.toLocaleString()}
              </div>
              <div className="text-[#64748B]">Daily Hospital Stay</div>
            </div>
            <div className="px-2">
              <div 
                className="text-5xl sm:text-6xl md:text-7xl text-[#181B1F] mb-2"
                style={{ fontFamily: 'Urbanist, sans-serif' }}
              >
                ${ambulanceCost.toLocaleString()}+
              </div>
              <div className="text-[#64748B]">Ambulance Service</div>
            </div>
          </div>
        </motion.div>
        
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="absolute top-1/2 left-0 right-0 h-px bg-[#E4E4E7] hidden lg:block"></div>
          
          <div className="absolute top-0 bottom-0 left-1/3 w-px bg-[#E4E4E7] hidden lg:block"></div>
          <div className="absolute top-0 bottom-0 left-2/3 w-px bg-[#E4E4E7] hidden lg:block"></div>
          
          <div className="flex flex-col items-center text-center p-4 md:p-6">
            <div className="mb-4">
              <svg width="40" height="40" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 6C25.1046 6 26 6.89543 26 8V12.5C26 13.6046 25.1046 14.5 24 14.5C22.8954 14.5 22 13.6046 22 12.5V8C22 6.89543 22.8954 6 24 6Z" fill="#181B1F"/>
                <path d="M36 14C37.1046 14 38 14.8954 38 16V20.5C38 21.6046 37.1046 22.5 36 22.5C34.8954 22.5 34 21.6046 34 20.5V16C34 14.8954 34.8954 14 36 14Z" fill="#181B1F"/>
                <path d="M30 12C31.1046 12 32 12.8954 32 14V18.5C32 19.6046 31.1046 20.5 30 20.5C28.8954 20.5 28 19.6046 28 18.5V14C28 12.8954 28.8954 12 30 12Z" fill="#181B1F"/>
                <path d="M18 12C19.1046 12 20 12.8954 20 14V18.5C20 19.6046 19.1046 20.5 18 20.5C16.8954 20.5 16 19.6046 16 18.5V14C16 12.8954 16.8954 12 18 12Z" fill="#181B1F"/>
                <path d="M12 14C13.1046 14 14 14.8954 14 16V20.5C14 21.6046 13.1046 22.5 12 22.5C10.8954 22.5 10 21.6046 10 20.5V16C10 14.8954 10.8954 14 12 14Z" fill="#181B1F"/>
                <path d="M24 19C20.134 19 17 22.134 17 26V28H31V26C31 22.134 27.866 19 24 19Z" fill="#181B1F"/>
                <path d="M18 26V28H12C8.13401 28 5 31.134 5 35V37H29V35C29 31.134 25.866 28 22 28H20V26C20 23.2386 22.2386 21 25 21H30C32.7614 21 35 23.2386 35 26V28H43V35C43 38.866 39.866 42 36 42H12C8.13401 42 5 38.866 5 35V37H43V35C43 31.134 39.866 28 36 28H30V26C30 27.1046 29.1046 28 28 28C26.8954 28 26 27.1046 26 26C26 23.2386 28.2386 21 31 21C33.7614 21 36 23.2386 36 26V28" stroke="#1E40AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-[#181B1F] mb-3">Financial Protection</h3>
            <p className="text-[#64748B] text-sm">
              Medical treatment in Canada is expensive for non-residents. A single day in hospital can cost $3,000-5,000, and emergency services like ambulances start at $500.
            </p>
          </div>
          
          <div className="flex flex-col items-center text-center p-4 md:p-6">
            <div className="mb-4">
              <svg width="40" height="40" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 42C33.9411 42 42 33.9411 42 24C42 14.0589 33.9411 6 24 6C14.0589 6 6 14.0589 6 24C6 33.9411 14.0589 42 24 42Z" stroke="#1E40AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M24 12V24L31 31" stroke="#1E40AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M24 24L17 31" stroke="#181B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-[#181B1F] mb-3">Emergency Coverage</h3>
            <p className="text-[#64748B] text-sm">
              Visitor insurance provides immediate access to healthcare for unexpected illnesses or injuries without the stress of arranging payment first.
            </p>
          </div>
          
          <div className="flex flex-col items-center text-center p-4 md:p-6">
            <div className="mb-4">
              <svg width="40" height="40" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 6L6 16L24 26L42 16L24 6Z" stroke="#1E40AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M6 16V32L24 42L42 32V16" stroke="#1E40AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M24 26V42" stroke="#181B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-[#181B1F] mb-3">Peace of Mind</h3>
            <p className="text-[#64748B] text-sm">
              Travel with confidence knowing you're protected against the unexpected. Focus on enjoying your visit to Canada, not worrying about potential healthcare costs.
            </p>
          </div>
          
          <div className="flex flex-col items-center text-center p-4 md:p-6">
            <div className="mb-4">
              <svg width="40" height="40" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 36H28V42H20V36Z" stroke="#181B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M24 28V36" stroke="#181B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M24 28C29.5228 28 34 23.5228 34 18C34 12.4772 29.5228 8 24 8C18.4772 8 14 12.4772 14 18C14 23.5228 18.4772 28 24 28Z" stroke="#1E40AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M24 12V18" stroke="#1E40AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-[#181B1F] mb-3">Legal Requirements</h3>
            <p className="text-[#64748B] text-sm">
              Some visitors, like Super Visa applicants, are legally required to have medical insurance coverage of at least $100,000 for the duration of their stay.
            </p>
          </div>
          
          <div className="flex flex-col items-center text-center p-4 md:p-6">
            <div className="mb-4">
              <svg width="40" height="40" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 12H42" stroke="#1E40AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M6 36H42" stroke="#1E40AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M6 12V36H42V12H6Z" stroke="#1E40AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16 20L22 26L28 20L34 26" stroke="#181B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-[#181B1F] mb-3">Easy & secure online process</h3>
            <p className="text-[#64748B] text-sm">
              Beyond medical care, many plans include benefits like trip interruption coverage, emergency evacuation, and assistance with lost baggage.
            </p>
          </div>
          
          <div className="flex flex-col items-center text-center p-4 md:p-6">
            <div className="mb-4">
              <svg width="40" height="40" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 28C28.4183 28 32 24.4183 32 20C32 15.5817 28.4183 12 24 12C19.5817 12 16 15.5817 16 20C16 24.4183 19.5817 28 24 28Z" stroke="#1E40AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M36 40C36 35.5817 30.6274 32 24 32C17.3726 32 12 35.5817 12 40" stroke="#1E40AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M40 26V17C40 16.4477 39.5523 16 39 16H35" stroke="#181B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8 26V17C8 16.4477 8.44772 16 9 16H13" stroke="#181B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M36 26C37.1046 26 38 25.1046 38 24C38 22.8954 37.1046 22 36 22C34.8954 22 34 22.8954 34 24C34 25.1046 34.8954 26 36 26Z" fill="#181B1F"/>
                <path d="M12 26C13.1046 26 14 25.1046 14 24C14 22.8954 13.1046 22 12 22C10.8954 22 10 22.8954 10 24C10 25.1046 10.8954 26 12 26Z" fill="#181B1F"/>
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-[#181B1F] mb-3">Comprehensive Protection</h3>
            <p className="text-[#64748B] text-sm">
              Get access to multilingual emergency assistance services that can help coordinate care and communicate with healthcare providers anytime, day or night.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyNeedInsurance; 