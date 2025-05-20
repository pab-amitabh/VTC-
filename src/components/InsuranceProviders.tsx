import React from 'react';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

const InsuranceProviders = () => {
  const partners = [
    { name: 'Manulife' },
    { name: 'Tugo (iA Financial Group)' },
    { name: 'Group Medical Services (GMS)' },
    { name: 'Allianz' },
    { name: '21st Century Travel Insurance Limited' },
    { name: 'Destination Canada' },
    { name: 'Travelance' },
    { name: 'Secure Travel' }
  ];

  return (
    <section className="w-full bg-lightBlue py-16 md:py-16 pb-10 md:pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-12 md:gap-20 items-center max-w-6xl mx-auto">
          {/* Text Content - Left */}
          <div className="md:w-3/5">
            <h2 id="insurance-providers" className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 relative">
            Which companies offer the best health insurance plans for visitors to Canada?
            </h2>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Several top insurance providers offer affordable visitor insurance to Canada, including Manulife, Tugo, Allianz, Travelance, 21st Century, GMS, and more. Each company provides different premiums, coverage options, deductibles, and policy features to suit various needs.
            </p>
            
            <div className="mb-8">
              <p id="partners" className="text-lg font-semibold text-gray-800 mb-4">Some of our partners include:</p>
              <ul className="space-y-3">
                {partners.map((partner, index) => (
                  <motion.li 
                    key={index}
                    className="flex items-center"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-6 h-6 rounded-full bg-magenta/10 flex items-center justify-center mr-3">
                      <Check className="w-4 h-4 text-magenta" />
                    </div>
                    <span className="text-gray-700">{partner.name}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Image - Right */}
          <div className="md:w-2/5">
            <div className="relative">
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-deepBlue/10 rounded-full"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-magenta/10 rounded-full"></div>
              
              <div className="relative">
                <img 
                  src="/images/mobile.png" 
                  alt="Travel Insurance Mobile App" 
                  className="w-full object-contain max-w-[300px] mx-auto"
                  style={{ filter: 'drop-shadow(0px 10px 15px rgba(0, 0, 0, 0.1))' }}
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Added tagline at the bottom */}
        <div className="mt-16 text-center max-w-3xl mx-auto">
          <p className="text-lg font-medium text-gray-800" style={{ color: '#17B3E4' }}>
            InsureTravel gives you access to competitive rates and comprehensive coverage options from trusted providers—all in one place.
          </p>
        </div>
      </div>
    </section>
  );
};

export default InsuranceProviders; 