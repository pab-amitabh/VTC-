import React, { memo } from 'react';
import { Heart, Shield, Plane, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeIn, simpleHover, VIEWPORT_CONFIG } from '../utils/motionConfig';

const WhatIsVisitorInsurance = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50" id="what-is-visitor-insurance">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Content */}
        <motion.div 
          className="max-w-5xl mx-auto mb-16 md:mb-20 text-center"
          variants={fadeIn}
          initial="initial"
          whileInView="animate"
          viewport={VIEWPORT_CONFIG}
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-[#181B1F] leading-tight">
            What is
              Visitor to Canada Insurance?
          </h2>
          <p className="text-lg md:text-xl text-[#64748B] leading-relaxed max-w-4xl mx-auto">
            Canada's provincial healthcare does not cover visitors, making visitor insurance essential 
            for anyone traveling to Canada. It protects your parents, relatives, and guests from unexpected 
            medical emergencies and travel-related expenses during their stay.
          </p>
        </motion.div>

        {/* Main content container */}
        <motion.div 
          className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100"
          variants={fadeIn}
          initial="initial"
          whileInView="animate"
          viewport={VIEWPORT_CONFIG}
        >
          {/* Section header */}
          <motion.div 
            className="text-center mb-12"
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={VIEWPORT_CONFIG}
          >
            <h3 className="text-2xl md:text-4xl font-bold text-[#181B1F] mb-4">
              Two Main Types of Coverage
            </h3>
          </motion.div>

          {/* Cards container */}
          <motion.div 
            className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto"
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={VIEWPORT_CONFIG}
          >
            {/* Medical Insurance Card */}
            <motion.div 
              className="group bg-white rounded-2xl shadow-lg p-8 border border-gray-100"
              whileHover={simpleHover}
            >
              {/* Icon */}
              <div className="mb-6 flex justify-center">
                <div className="w-16 h-16 rounded-2xl bg-[#17B3E4]/10 flex items-center justify-center">
                  <Heart className="h-8 w-8 text-[#17B3E4]" />
                </div>
              </div>
              
              <h4 className="text-xl md:text-2xl font-bold text-[#181B1F] mb-4 text-center">
                Medical Insurance
              </h4>
              <p className="text-[#64748B] leading-relaxed text-center">
                Covers medical treatment if you fall ill or get injured while visiting. Includes emergency medical transportation and evacuation to hospitals in other countries if necessary. This is the most commonly purchased type of visitor insurance.
              </p>
            </motion.div>

            {/* Trip Cancellation Card */}
            <motion.div 
              className="group bg-white rounded-2xl shadow-lg p-8 border border-gray-100"
              whileHover={simpleHover}
            >
              {/* Icon */}
              <div className="mb-6 flex justify-center">
                <div className="w-16 h-16 rounded-2xl bg-[#DB2877]/10 flex items-center justify-center">
                  <Shield className="h-8 w-8 text-[#DB2877]" />
                </div>
              </div>
              
              <h4 className="text-xl md:text-2xl font-bold text-[#181B1F] mb-4 text-center">
                Trip Cancellation & Interruption
              </h4>
              <p className="text-[#64748B] leading-relaxed text-center">
                Reimburses you for trip costs if you need to cancel or interrupt your travel due to unforeseen events like illness, severe weather, lost baggage, or transportation delays.
              </p>
            </motion.div>
          </motion.div>

          {/* Additional info section */}
          <motion.div 
            className="text-center mt-12"
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={VIEWPORT_CONFIG}
          >
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#17B3E4] to-[#DB2877] text-white font-bold rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105 group"
            >
              <span>Get Your Quote Now</span>
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

WhatIsVisitorInsurance.displayName = 'WhatIsVisitorInsurance';

export default memo(WhatIsVisitorInsurance);