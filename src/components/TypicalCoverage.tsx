import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Pill, Stethoscope, PlaneTakeoff, Skull, Heart } from 'lucide-react';

const TypicalCoverage = () => {
  const gridVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-8 md:py-12 bg-[#F0F9FF]">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold text-[#181B1F] text-center mb-12">
          What a typical visitor insurance plan covers
        </h2>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-5xl mx-auto"
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Card 1 */}
          <motion.div className="relative" variants={cardVariants}>
            <div className="bg-white rounded-lg shadow-sm flex flex-col border border-blue-200 h-full">
              <div className="p-6 flex-grow">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 flex items-center justify-center flex-shrink-0 mt-2">
                    <Stethoscope className="w-7 h-7 text-[#68A1F8]" />
                  </div>
                  <h3 className="text-[#182E6E] text-xl font-bold mb-2">Emergency Medical Expenses</h3>
                </div>
                <p className="text-[#64748B] text-sm mb-4">
                  Covers hospitalization, doctor visits, lab tests, and ambulance services for sudden illnesses or injuries.
                </p>
              </div>
              <div className="bg-transparent py-3 px-6 rounded-b-lg flex justify-center items-center">
                <p className="bg-slate-100 text-[#D71571] text-base py-2 px-5 rounded-md font-bold">
                  Up to $500,000 coverage
                </p>
              </div>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div className="relative" variants={cardVariants}>
            <div className="bg-white rounded-lg shadow-sm flex flex-col border border-blue-200 h-full">
              <div className="p-6 flex-grow">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 flex items-center justify-center flex-shrink-0">
                    <Pill className="w-7 h-7 text-[#68A1F8] mt-2" />
                  </div>
                  <h3 className="text-[#182E6E] text-xl font-bold mb-2">Prescription<br/>Drugs</h3>
                </div>
                <p className="text-[#64748B] text-sm mb-4">
                  Provides medication coverage for emergencies included in your plan.
                </p>
              </div>
              <div className="bg-transparent py-3 px-6 rounded-b-lg flex justify-center items-center">
                <p className="bg-slate-100 text-[#D71571] text-base font-bold py-2 px-5 rounded-md">
                  No out-of-pocket costs
                </p>
              </div>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div className="relative" variants={cardVariants}>
            <div className="bg-white rounded-lg shadow-sm flex flex-col border border-blue-200 h-full">
              <div className="p-6 flex-grow">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 flex items-center justify-center flex-shrink-0">
                    <Activity className="w-7 h-7 text-[#68A1F8] mt-2" />
                  </div>
                  <h3 className="text-[#182E6E] text-xl font-bold mb-2">Emergency Dental Care</h3>
                </div>
                <p className="text-[#64748B] text-sm mb-4">
                  Offers immediate relief for dental pain or accidental injuries during your trip.
                </p>
              </div>
              <div className="bg-transparent py-3 px-6 rounded-b-lg flex justify-center items-center">
                <p className="bg-slate-100 text-[#D71571] text-base font-bold py-2 px-5 rounded-md">
                  Up to $2,500 in coverage
                </p>
              </div>
            </div>
          </motion.div>

          {/* Card 4 */}
          <motion.div className="relative" variants={cardVariants}>
            <div className="bg-white rounded-lg shadow-sm flex flex-col border border-blue-200 h-full">
              <div className="p-6 flex-grow">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 flex items-center justify-center flex-shrink-0">
                    <PlaneTakeoff className="w-7 h-7 text-[#68A1F8] mt-2" />
                  </div>
                  <h3 className="text-[#182E6E] text-xl font-bold mb-2">Medical Evacuation & Repatriation</h3>
                </div>
                <p className="text-[#64748B] text-sm mb-4">
                  Ensures safe transfer to a better medical facility or return home if treatment is unavailable locally.
                </p>
              </div>
              <div className="bg-transparent py-3 px-6 rounded-b-lg flex justify-center items-center">
                <p className="bg-slate-100 text-[#D71571] text-base font-bold py-2 px-5 rounded-md">
                  Full coverage for transport
                </p>
              </div>
            </div>
          </motion.div>

          {/* Card 5 */}
          <motion.div className="relative" variants={cardVariants}>
            <div className="bg-white rounded-lg shadow-sm flex flex-col border border-blue-200 h-full">
              <div className="p-6 flex-grow">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 flex items-center justify-center flex-shrink-0">
                    <Skull className="w-7 h-7 text-[#68A1F8] mt-2" />
                  </div>
                  <h3 className="text-[#182E6E] text-xl font-bold mb-2">Accidental Death & Dismemberment</h3>
                </div>
                <p className="text-[#64748B] text-sm mb-4">
                  Lump-sum protection in the event of accidental death or serious injury.
                </p>
              </div>
              <div className="bg-transparent py-3 px-6 rounded-b-lg flex justify-center items-center">
                <p className="bg-slate-100 text-[#D71571] text-base font-bold py-2 px-5 rounded-md">
                  Benefits up to $50,000
                </p>
              </div>
            </div>
          </motion.div>

          {/* Card 6 */}
          <motion.div className="relative" variants={cardVariants}>
            <div className="bg-white rounded-lg shadow-sm flex flex-col border border-blue-200 h-full">
              <div className="p-6 flex-grow">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 flex items-center justify-center flex-shrink-0">
                    <Heart className="w-7 h-7 text-[#68A1F8] mt-2 " />
                  </div>
                  <h3 className="text-[#182E6E] text-xl font-bold mb-2">Pre-existing Medical Conditions</h3>
                </div>
                <p className="text-[#64748B] text-sm mb-4">
                  Includes stable pre-existing conditions with coverage eligibility typically after 90 to 180 days of stability.
                </p>
              </div>
              <div className="bg-transparent py-3 px-6 rounded-b-lg flex justify-center items-center">
                <p className="bg-slate-100 text-[#D71571] text-base font-bold py-2 px-5 rounded-md">
                  Peace of mind
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TypicalCoverage; 