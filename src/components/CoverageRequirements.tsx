import React from 'react';
import { Check, Clock, Users, GraduationCap, Briefcase, ListOrdered, Settings, PieChart, CreditCard } from 'lucide-react';
import { cn } from '@/lib/utils';

const CoverageRequirements = () => {
  // Updated step process from the image
  const buyingSteps = [
    {
      number: 1,
      title: 'Submit your details:',
      description: 'Enter your age, trip dates, number of travellers, and destination',
      icon: <ListOrdered className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
    },
    {
      number: 2,
      title: 'Pick coverage needs:',
      description: 'Choose requirements like Super Visa insurance, pre-existing condition coverage, and policy limits',
      icon: <Settings className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
    },
    {
      number: 3,
      title: 'Compare quotes instantly:',
      description: 'View multiple personalized options side-by-side',
      icon: <PieChart className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
    },
    {
      number: 4,
      title: 'Purchase your plan online:',
      description: 'Purchase your chosen policy directly through InsureTravel in minutes',
      icon: <CreditCard className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
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

  return (
    <section className="py-6 md:py-12 bg-white" id="coverage">
      <div className="container mx-auto px-3 sm:px-6 lg:px-8 max-w-6xl">
        {/* Main heading with image and content in a 40/60 split */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 mb-6 md:mb-12">
          {/* Image Section - 40% */}
          <div className="w-full md:w-[40%]">
            <div className="bg-lightBlue/20 rounded-lg md:rounded-xl h-full min-h-[180px] md:min-h-[300px] flex items-center justify-center relative overflow-hidden">
              <img 
                src="/images/Coverage.png" 
                alt="Travel Insurance Coverage" 
                className="object-cover w-full h-full rounded-lg md:rounded-xl"
                onError={(e) => {
                  e.currentTarget.src = "https://via.placeholder.com/600x400?text=Insurance+Coverage";
                }}
              />
              <div className="absolute inset-0 bg-deepBlue/10 rounded-lg md:rounded-xl"></div>
            </div>
          </div>
          
          {/* Content Section - 60% */}
          <div className="w-full md:w-[60%]">
            <h2 id="coverage-requirements" className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 md:mb-4" style={{ color: '#17B3E4' }}>
              How to buy visitor insurance for Canada?
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-5 md:mb-6">
              Simple 4-step process tailored to your trip.
            </p>
            
            {/* Steps to Buy Insurance */}
            <div className="bg-white rounded-lg md:rounded-xl overflow-hidden shadow-sm md:shadow-md border border-gray-100">
              <ul className="divide-y divide-gray-100">
                {buyingSteps.map((step, index) => (
                  <li key={index} className="p-4 md:p-5">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mr-4">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full text-white font-bold text-lg" style={{ backgroundColor: '#17B3E4' }}>
                          {step.number}
                        </div>
                      </div>
                      <div>
                        <p className="font-bold text-base sm:text-lg text-gray-900 mb-1 flex items-center">
                          {step.title}
                        </p>
                        <p className="text-sm sm:text-base text-gray-700">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Two information boxes stacked vertically with images */}
        <div className="space-y-6 sm:space-y-8 md:space-y-12">
          {/* When to Purchase Your Insurance - Full width */}
          <div>
            <h3 id="when-to-purchase" className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2 md:mb-4">When to purchase visitor to Canada</h3>
            <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-3 md:mb-6">
              For the best protection, buy your travel insurance as soon as you confirm your plans to visit Canada. Purchasing early offers significant advantages over waiting until after you arrive.
            </p>

            {/* Mobile version (stacked cards) */}
            <div className="md:hidden space-y-4">
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
                <div className="bg-gray-50 py-2 px-4 border-b border-gray-200">
                  <h4 className="text-base font-semibold text-gray-800 text-center">Buying Before Arrival</h4>
                </div>
                <div className="p-3 sm:p-4">
                  <ul className="space-y-2 sm:space-y-3">
                    {buyingBeforePoints.map((point, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-deepBlue flex items-center justify-center shrink-0 mr-2 md:mr-3 mt-0.5">
                          <Check className="w-2 h-2 sm:w-3 sm:h-3 text-white" />
                        </div>
                        <span className="text-xs sm:text-sm text-gray-700">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
                <div className="bg-gray-50 py-2 px-4 border-b border-gray-200">
                  <h4 className="text-base font-semibold text-gray-800 text-center">Buying After Arrival</h4>
                </div>
                <div className="p-3 sm:p-4">
                  <ul className="space-y-2 sm:space-y-3">
                    {buyingAfterPoints.map((point, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-magenta flex items-center justify-center shrink-0 mr-2 md:mr-3 mt-0.5">
                          <Check className="w-2 h-2 sm:w-3 sm:h-3 text-white" />
                        </div>
                        <span className="text-xs sm:text-sm text-gray-700">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Desktop version - Original style with updated content */}
            <div className="hidden md:block bg-white rounded-xl overflow-hidden shadow-md border border-gray-100">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="py-4 md:py-6 px-4 md:px-6 text-gray-800 font-semibold text-center text-sm md:text-base border-b border-gray-200 w-1/2">Buying Before Arrival</th>
                      <th className="py-4 md:py-6 px-4 md:px-6 text-gray-800 font-semibold text-center text-sm md:text-base border-b border-gray-200 w-1/2">Buying After Arrival</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-4 md:py-6 px-4 md:px-6 border-b border-gray-200 align-top">
                        <ul className="space-y-3 md:space-y-4">
                          {buyingBeforePoints.map((point, index) => (
                            <li key={index} className="flex items-start">
                              <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-deepBlue flex items-center justify-center shrink-0 mr-3 mt-0.5">
                                <Check className="w-3 h-3 md:w-4 md:h-4 text-white" />
                              </div>
                              <span className="text-sm md:text-base text-gray-700">{point}</span>
                            </li>
                          ))}
                        </ul>
                      </td>
                      <td className="py-4 md:py-6 px-4 md:px-6 border-b border-gray-200 align-top">
                        <ul className="space-y-3 md:space-y-4">
                          {buyingAfterPoints.map((point, index) => (
                            <li key={index} className="flex items-start">
                              <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-magenta flex items-center justify-center shrink-0 mr-3 mt-0.5">
                                <Check className="w-3 h-3 md:w-4 md:h-4 text-white" />
                              </div>
                              <span className="text-sm md:text-base text-gray-700">{point}</span>
                            </li>
                          ))}
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Pre-existing Conditions and Coverage */}
          <div className="flex flex-col md:flex-row gap-4 md:gap-8">
            {/* Image - 40% */}
            <div className="w-full md:w-[40%]">
              <div className="bg-lightBlue/20 rounded-lg md:rounded-xl h-full min-h-[180px] md:min-h-[300px] flex items-center justify-center relative overflow-hidden">
                <img 
                  src="/images/pre-ex.png" 
                  alt="Pre-existing Conditions Coverage" 
                  className="object-cover w-full h-full rounded-lg md:rounded-xl"
                  onError={(e) => {
                    e.currentTarget.src = "https://via.placeholder.com/600x400?text=Pre-existing+Conditions";
                  }}
                />
                <div className="absolute inset-0 bg-deepBlue/10 rounded-lg md:rounded-xl"></div>
              </div>
            </div>
            
            {/* Content - 60% */}
            <div className="w-full md:w-[60%]">
              <h3 id="pre-existing-conditions" className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2 md:mb-4">Pre-existing Conditions and Coverage</h3>
              <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-3 md:mb-6">
                Many visitors worry about coverage for pre-existing medical conditions. While policies vary, most insurance providers will cover stable pre-existing conditions, with stability periods typically ranging from 90 to 180 days.
              </p>

              <div className="bg-lightBlue/30 p-3 sm:p-4 md:p-6 rounded-lg md:rounded-xl">
                <h4 id="coverage-tips" className="text-base sm:text-lg md:text-xl font-semibold text-deepBlue mb-2 md:mb-4 text-center">
                  Tips for Getting Coverage with Pre-existing Conditions
                </h4>
                <ul className="space-y-2 sm:space-y-3 md:space-y-4">
                  {preExistingTips.map((tip, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 rounded-full bg-deepBlue/20 flex items-center justify-center shrink-0 mr-2 sm:mr-3 mt-0.5">
                        <Check className="w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 text-deepBlue" />
                      </div>
                      <span className="text-xs sm:text-sm md:text-base text-gray-700">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoverageRequirements; 