import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { DollarSign, Clock, Shield, Scale, Headphones, Globe } from 'lucide-react';
import { fadeIn, simpleHover, VIEWPORT_CONFIG } from '../utils/motionConfig';

// Simple benefit card component
const BenefitCard = memo(({ 
  benefit, 
  index 
}: { 
  benefit: any; 
  index: number;
}) => (
  <motion.div 
    className="group bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-gray-100"
    variants={fadeIn}
    whileHover={simpleHover}
  >
    {/* Icon */}
    <div className="mb-4">
      <div 
        className="w-12 h-12 rounded-xl flex items-center justify-center"
        style={{ 
          background: `${benefit.color}15` 
        }}
      >
        <div style={{ color: benefit.color }}>
          {benefit.icon}
        </div>
      </div>
    </div>
    
    <h3 className="text-xl md:text-2xl font-semibold text-[#181B1F] mb-4">
      {benefit.title}
    </h3>
    
    <p className="text-[#64748B] leading-relaxed">
      {benefit.description}
    </p>
  </motion.div>
));

BenefitCard.displayName = 'BenefitCard';

const WhyNeedInsurance = memo(() => {
  const benefits = [
    {
      icon: <DollarSign className="h-8 w-8" />,
      title: "Financial Protection",
      description: "Medical treatment in Canada is expensive for non-residents. A single day in hospital can cost $3,000-5,000, and emergency services like ambulances start at $500.",
      color: "#17B3E4"
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Emergency Coverage",
      description: "Visitor insurance provides immediate access to healthcare for unexpected illnesses or injuries without the stress of arranging payment first.",
      color: "#DB2877"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Peace of Mind",
      description: "Travel with confidence knowing you're protected against the unexpected. Focus on enjoying your visit to Canada, not worrying about potential healthcare costs.",
      color: "#17B3E4"
    },
    {
      icon: <Scale className="h-8 w-8" />,
      title: "Legal Requirements",
      description: "Some visitors, like Super Visa applicants, are legally required to have medical insurance coverage of at least $100,000 for the duration of their stay.",
      color: "#DB2877"
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Easy & Secure Process",
      description: "Beyond medical care, many plans include benefits like trip interruption coverage, emergency evacuation, and assistance with lost baggage.",
      color: "#17B3E4"
    },
    {
      icon: <Headphones className="h-8 w-8" />,
      title: "Comprehensive Protection",
      description: "Get access to multilingual emergency assistance services that can help coordinate care and communicate with healthcare providers anytime, day or night.",
      color: "#DB2877"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white" id="why-need">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-16 md:mb-20"
          variants={fadeIn}
          initial="initial"
          whileInView="animate"
          viewport={VIEWPORT_CONFIG}
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-[#181B1F] leading-tight">
            Why do you need     
              visitor insurance?
          </h2>
        </motion.div>
        
        {/* Simple Statistics */}
        <motion.div 
          className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 mb-16 md:mb-20"
          variants={fadeIn}
          initial="initial"
          whileInView="animate"
          viewport={VIEWPORT_CONFIG}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 text-center max-w-5xl mx-auto">
            <div>
              <div className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4" style={{ color: "#17B3E4" }}>
                $3000+
              </div>
              <div className="text-[#64748B] font-medium text-lg">Average ER Visit Cost</div>
            </div>
            
            <div className="md:border-l md:border-r md:border-gray-200 px-4">
              <div className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4" style={{ color: "#DB2877" }}>
                $5000
              </div>
              <div className="text-[#64748B] font-medium text-lg">Daily Hospital Stay</div>
            </div>
            
            <div>
              <div className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4" style={{ color: "#17B3E4" }}>
                $500+
              </div>
              <div className="text-[#64748B] font-medium text-lg">Ambulance Service</div>
            </div>
          </div>
        </motion.div>
        
        {/* Benefits Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          variants={fadeIn}
          initial="initial"
          whileInView="animate"
          viewport={VIEWPORT_CONFIG}
        >
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} benefit={benefit} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
});

WhyNeedInsurance.displayName = 'WhyNeedInsurance';

export default WhyNeedInsurance; 