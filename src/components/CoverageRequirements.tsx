import React, { memo } from 'react';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

const CoverageRequirements = () => {
  // Updated step process with simplified data
  const buyingSteps = [
    {
      number: 1,
      title: 'Submit your details',
      description: 'Enter your age, trip dates, number of travellers, and destination'
    },
    {
      number: 2,
      title: 'Pick coverage needs',
      description: 'Choose requirements like Super Visa insurance, pre-existing condition coverage, and policy limits'
    },
    {
      number: 3,
      title: 'Compare quotes instantly',
      description: 'View multiple personalized options side-by-side'
    },
    {
      number: 4,
      title: 'Purchase your plan online',
      description: 'Purchase your chosen policy directly through InsureTravel in minutes'
    }
  ];

  const buyingBeforePoints = [
    'Coverage starts the moment you leave your home country',
    'No waiting periods before your insurance takes effect',
    'Protects you throughout your entire journey, including flights',
    'Generally more affordable rates',
    'Gives you peace of mind from the start of your trip',
    'Includes coverage for emergencies that may occur while traveling'
  ];

  const buyingAfterPoints = [
    'Coverage often begins only after a waiting period of 48–72 hours',
    'You may face a waiting period before benefits apply',
    'Higher premiums are common when buying after arrival',
    'Limited options for covering pre-existing conditions',
    'Risk of being uninsured during the initial days of your stay',
    'May not cover conditions that develop during the waiting period'
  ];

  const preExistingTips = [
    'Disclose all medical conditions honestly when applying',
    'Compare stability period requirements between providers',
    'Consider policies specifically designed for high-risk travelers',
    'Consult with your physician to document stability if needed',
    'Read policy wording carefully regarding condition definitions',
    'Ask about partial coverage options for conditions not meeting stability requirements'
  ];

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="py-16 md:py-24 bg-white" id="coverage">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section 1: How to buy insurance */}
        <motion.div 
          className="mb-16 md:mb-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeIn}
        >
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
            {/* Image */}
            <div className="w-full lg:w-[65%] order-2 lg:order-1 lg:-ml-10">
              <div className="overflow-hidden rounded-xl">
                <img 
                  src="/images/Coverage.png" 
                  alt="Travel Insurance Coverage" 
                  className="w-full lg:w-[120%] h-auto object-cover lg:scale-100 lg:transform lg:origin-center"
                  onError={(e) => {
                    e.currentTarget.src = "https://via.placeholder.com/600x400?text=Insurance+Coverage";
                  }}
                />
              </div>
            </div>
            
            {/* Content */}
            <div className="w-full lg:w-[55%] order-1 lg:order-2">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-center lg:text-left text-gray-900">
                How to buy visitor<br />
                insurance for Canada?
              </h2>
              <p className="text-lg text-gray-700 mb-8 text-center lg:text-left">
                Simple 4-step process tailored to your trip.
              </p>
              
              {/* Steps */}
              <div className="space-y-1">
                {buyingSteps.map((step, index) => (
                  <div key={index} className="py-2">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mr-3 mt-1">
                        <div className="w-8 h-8 flex items-center justify-center rounded-full text-white font-bold text-base bg-magenta">
                          {step.number}
                        </div>
                      </div>
                      <div>
                        <p className="font-semibold text-lg text-gray-900 mb-0.5 pt-0.5">
                          {step.title}
                        </p>
                        <p className="text-gray-600">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Section 2: When to purchase */}
        <motion.div 
          className="mb-16 md:mb-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeIn}
        >
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-center">
            When to purchase visitor to Canada
          </h3>
          <p className="text-lg text-gray-700 mb-10 max-w-4xl mx-auto text-center">
            For the best protection, buy your travel insurance as soon as you confirm your plans to visit Canada. 
            Purchasing early offers significant advantages over waiting until after you arrive.
          </p>

          {/* Mobile version (stacked cards) */}
          <div className="lg:hidden space-y-8">
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="bg-deepBlue py-3 px-4">
                <h4 className="text-lg font-semibold text-white text-center">Buying Before Arrival</h4>
              </div>
              <div className="p-6">
                <ul className="space-y-4">
                  {buyingBeforePoints.map((point, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-deepBlue flex items-center justify-center shrink-0 mr-3 mt-0.5">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-gray-700">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="bg-magenta py-3 px-4">
                <h4 className="text-lg font-semibold text-white text-center">Buying After Arrival</h4>
              </div>
              <div className="p-6">
                <ul className="space-y-4">
                  {buyingAfterPoints.map((point, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-magenta flex items-center justify-center shrink-0 mr-3 mt-0.5">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-gray-700">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Desktop version - Side by side */}
          <div className="hidden lg:grid grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="bg-deepBlue py-3 px-4">
                <h4 className="text-lg font-semibold text-white text-center">Buying Before Arrival</h4>
              </div>
              <div className="p-6">
                <ul className="space-y-4">
                  {buyingBeforePoints.map((point, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-deepBlue flex items-center justify-center shrink-0 mr-3 mt-0.5">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-gray-700">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="bg-magenta py-3 px-4">
                <h4 className="text-lg font-semibold text-white text-center">Buying After Arrival</h4>
              </div>
              <div className="p-6">
                <ul className="space-y-4">
                  {buyingAfterPoints.map((point, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-magenta flex items-center justify-center shrink-0 mr-3 mt-0.5">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-gray-700">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Section 3: Pre-existing Conditions */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeIn}
        >
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
            {/* Content */}
            <div className="w-full lg:w-[55%]">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-center lg:text-left">
                Pre-existing Conditions and Coverage
              </h3>
              <p className="text-lg text-gray-700 mb-8 text-center lg:text-left">
                Many visitors worry about coverage for pre-existing medical conditions. While policies vary, 
                most insurance providers will cover stable pre-existing conditions, with stability periods 
                typically ranging from 90 to 180 days.
              </p>

              <div className="bg-blue-50 p-6 rounded-xl">
                <h4 className="text-xl font-semibold text-deepBlue mb-6 text-center">
                  Tips for Getting Coverage with Pre-existing Conditions
                </h4>
                <ul className="space-y-4">
                  {preExistingTips.map((tip, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-deepBlue/20 flex items-center justify-center shrink-0 mr-3 mt-0.5">
                        <Check className="w-3 h-3 text-deepBlue" />
                      </div>
                      <span className="text-gray-700">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            {/* Image */}
            <div className="w-full lg:w-[45%]">
              <div className="rounded-xl overflow-hidden shadow-md">
                <img 
                  src="/images/pre-ex.png" 
                  alt="Pre-existing Conditions Coverage" 
                  className="w-full h-auto object-cover"
                  onError={(e) => {
                    e.currentTarget.src = "https://via.placeholder.com/600x400?text=Pre-existing+Conditions";
                  }}
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

CoverageRequirements.displayName = 'CoverageRequirements';

export default memo(CoverageRequirements); 