import React from 'react';
import { Activity, Pill, Stethoscope, PlaneTakeoff, Skull, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const TypicalCoverage = () => {
  // Coverage items included in a typical visitor insurance plan
  const coverageItems = [
    {
      title: "Emergency medical expenses",
      description: "Covers hospitalization, doctor visits, lab tests, and ambulance services for sudden illnesses or injuries",
      icon: <Stethoscope className="w-8 h-8 text-white" />
    },
    {
      title: "Prescription drugs",
      description: "Provides medication coverage for emergencies included in your plan",
      icon: <Pill className="w-8 h-8 text-white" />
    },
    {
      title: "Emergency dental care",
      description: "Offers immediate relief for dental pain or accidental injuries during your trip",
      icon: <Activity className="w-8 h-8 text-white" />
    },
    {
      title: "Medical evacuation & repatriation",
      description: "Ensures safe transfer to a better medical facility or return home if treatment is unavailable locally",
      icon: <PlaneTakeoff className="w-8 h-8 text-white" />
    },
    {
      title: "Accidental Death & Dismemberment (AD&D)",
      description: "Lump-sum protection in the event of accidental death or serious injury",
      icon: <Skull className="w-8 h-8 text-white" />
    },
    {
      title: "Coverage for pre-existing medical conditions",
      description: "Includes stable pre-existing conditions with coverage eligibility typically after 90 to 180 days of stability",
      icon: <Heart className="w-8 h-8 text-white" />
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        duration: 0.6,
        staggerChildren: 0.1,
        ease: "easeOut"
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section className="py-16 md:py-24 bg-gray-50 relative overflow-hidden" id="typical-coverage">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 rounded-full opacity-30 transform translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-pink-100 rounded-full opacity-30 transform -translate-x-1/3 translate-y-1/3"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative">
        <motion.div 
          className="text-center mb-12 md:mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={itemVariants}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
            What a typical visitor insurance plan covers
          </h2>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {coverageItems.map((item, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 border border-gray-100"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-5" style={{ backgroundColor: '#17B3E4' }}>
                  {item.icon}
                </div>
                <h4 className="font-bold text-xl text-gray-900 mb-3">
                  {item.title}
                </h4>
                <p className="text-gray-700">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="mt-12 md:mt-16 bg-white p-8 rounded-xl shadow-md border border-gray-100"
          variants={itemVariants}
        >
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: '#17B3E4' }}>
                Optional add-ons to consider
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Add-ons available include travel interruption insurance for Canada visitors and baggage loss insurance for Canada visitors.
              </p>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <div className="w-full max-w-[200px] h-[200px] bg-[#17B3E4] rounded-full flex items-center justify-center text-white p-8">
                <div className="text-center">
                  <div className="text-4xl font-bold">100%</div>
                  <div className="text-sm mt-2">Comprehensive protection for your Canadian visit</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TypicalCoverage; 