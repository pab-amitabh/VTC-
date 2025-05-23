import React, { memo } from 'react';
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
    <section className="w-full bg-white py-8 md:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-20 items-start max-w-6xl mx-auto">
          {/* Text Content */}
          <div className="w-full">
            <h2 id="insurance-providers" className="text-3xl md:text-4xl font-bold text-[#181B1F] mb-6 relative text-center max-w-4xl mx-auto">
            Which companies offer the best health insurance plans for visitors to Canada?
            </h2>
            
            <p className="text-lg text-[#64748B] leading-relaxed mb-8 text-center max-w-5xl mx-auto">
            Several top insurance providers offer affordable visitor insurance to Canada, including Manulife, Tugo, Allianz, Travelance, 21st Century, GMS, and more. Each company provides different premiums, coverage options, deductibles, and policy features to suit various needs.
            </p>
            
            {/* Partners and Image container */}
            <div className="flex flex-col md:flex-row gap-0 max-w-6xl mx-auto">
              {/* Partners List - Left */}
              <div className="md:w-1/3">
                <p id="partners" className="text-lg font-semibold text-[#181B1F] mb-4">Some of our partners include:</p>
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
                      <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                        <Check className="w-4 h-4 text-blue-600" />
                      </div>
                      <span className="text-[#64748B]">{partner.name}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
              
              {/* Image - Right */}
              <div className="md:w-2/3">
                <div className="relative">
                  <div className="absolute -top-6 -right-6 w-16 h-16 md:w-24 md:h-24 bg-blue-100 rounded-full"></div>
                  <div className="absolute -bottom-6 -left-6 w-12 h-12 md:w-16 md:h-16 bg-sky-100 rounded-full"></div>
                  
                  <div className="relative">
                    <img 
                      src="/images/compare-insurance.png" 
                      alt="Travel Insurance Mobile App" 
                      className="w-full object-contain mx-auto h-auto max-h-[600px]"
                      style={{ filter: 'drop-shadow(0px 10px 15px rgba(0, 0, 0, 0.1))' }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

InsuranceProviders.displayName = 'InsuranceProviders';

export default memo(InsuranceProviders); 