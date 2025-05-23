import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { Activity, Pill, Stethoscope, PlaneTakeoff, Shield, Heart } from 'lucide-react';
import { fadeIn, simpleHover, VIEWPORT_CONFIG } from '../utils/motionConfig';

const TypicalCoverage = () => {
  const coverageItems = [
    {
      icon: <Stethoscope className="w-8 h-8" />,
      title: "Emergency Medical Expenses",
      description: "Covers hospitalization, doctor visits, lab tests, and ambulance services for sudden illnesses or injuries.",
      coverage: "Up to $500,000 coverage",
      color: "#DB2877"
    },
    {
      icon: <Pill className="w-8 h-8" />,
      title: "Prescription Drugs",
      description: "Provides medication coverage for emergencies included in your plan.",
      coverage: "No out-of-pocket costs",
      color: "#DB2877"
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: "Emergency Dental Care",
      description: "Offers immediate relief for dental pain or accidental injuries during your trip.",
      coverage: "Up to $2,500 in coverage",
      color: "#DB2877"
    },
    {
      icon: <PlaneTakeoff className="w-8 h-8" />,
      title: "Medical Evacuation & Repatriation",
      description: "Ensures safe transfer to a better medical facility or return home if treatment is unavailable locally.",
      coverage: "Full coverage for transport",
      color: "#DB2877"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Accidental Death & Dismemberment",
      description: "Lump-sum protection in the event of accidental death or serious injury.",
      coverage: "Benefits up to $50,000",
      color: "#DB2877"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Pre-existing Medical Conditions",
      description: "Includes stable pre-existing conditions with coverage eligibility typically after 90 to 180 days of stability.",
      coverage: "Peace of mind",
      color: "#DB2877"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 right-0 w-40 h-40 bg-[#17B3E4]/5 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 left-0 w-40 h-40 bg-[#DB2877]/5 rounded-full blur-xl"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-16 md:mb-20"
          variants={fadeIn}
          initial="initial"
          whileInView="animate"
          viewport={VIEWPORT_CONFIG}
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-[#181B1F] leading-tight">
            What a typical visitor insurance
              plan covers
          </h2>
          <p className="text-lg md:text-xl text-[#64748B] max-w-3xl mx-auto leading-relaxed">
            Comprehensive protection for your peace of mind while visiting Canada
          </p>
        </motion.div>
        
        {/* Coverage Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          variants={fadeIn}
          initial="initial"
          whileInView="animate"
          viewport={VIEWPORT_CONFIG}
        >
          {coverageItems.map((item, index) => (
            <motion.div 
              key={index}
              className="group backdrop-blur-sm rounded-2xl shadow-lg border border-white/60 overflow-hidden h-full flex flex-col"
              style={{ backgroundColor: '#17B3E410' }}
              whileHover={simpleHover}
            >
              {/* Card Header */}
              <div className="p-6 md:p-8 flex-grow">
                {/* Icon */}
                <div className="mb-6 flex justify-center">
                  <div 
                    className="w-16 h-16 rounded-2xl flex items-center justify-center"
                    style={{ background: `${item.color}15` }}
                  >
                    <div style={{ color: item.color }}>
                      {item.icon}
                    </div>
                  </div>
                </div>
                
                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold text-[#181B1F] mb-4 text-center leading-tight">
                  {item.title}
                </h3>
                
                {/* Description */}
                <p className="text-[#64748B] leading-relaxed text-center text-sm md:text-base">
                  {item.description}
                </p>
              </div>
              
              {/* Coverage Badge */}
              <div className="px-6 pb-6 md:px-8 md:pb-8">
                <div 
                  className="w-full py-3 px-4 rounded-xl text-white font-bold text-center text-sm md:text-base"
                  style={{ 
                    background: `linear-gradient(135deg, #17B3E4, #17B3E4dd)` 
                  }}
                >
                  {item.coverage}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

TypicalCoverage.displayName = 'TypicalCoverage';

export default memo(TypicalCoverage); 