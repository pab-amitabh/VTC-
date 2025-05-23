import React, { memo } from 'react';
import { BarChart3, DollarSign, Settings, CheckCircle, Lock, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeIn, simpleHover, VIEWPORT_CONFIG } from '../utils/motionConfig';

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
    <section className="py-16 md:py-24 bg-gray-50" id="why-choose-us">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Content */}
        <motion.div 
          className="text-center max-w-4xl mx-auto mb-16 md:mb-20"
          variants={fadeIn}
          initial="initial"
          whileInView="animate"
          viewport={VIEWPORT_CONFIG}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[#181B1F] leading-tight">
            Why choose us
          </h2>
          <p className="text-lg md:text-xl text-[#64748B] max-w-3xl mx-auto">
            We make finding the right visitor insurance for Canada simple, fast, and reliable with our innovative platform.
          </p>
        </motion.div>
        
        {/* Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          variants={fadeIn}
          initial="initial"
          whileInView="animate"
          viewport={VIEWPORT_CONFIG}
        >
          {reasonsItems.map((reason, index) => (
            <motion.div 
              key={index} 
              className="group bg-white rounded-2xl p-6 md:p-8 border border-gray-100"
              whileHover={simpleHover}
            >
              {/* Icon container */}
              <div className="mb-6 md:mb-8 flex justify-center">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gray-50 flex items-center justify-center">
                  {reason.icon}
                </div>
              </div>
              
              <h3 className="text-xl md:text-2xl font-semibold text-[#181B1F] mb-4 text-center">
                {reason.title}
              </h3>
              
              <p className="text-[#64748B] leading-relaxed text-base md:text-lg text-center">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

WhyChooseUs.displayName = 'WhyChooseUs';

export default memo(WhyChooseUs); 