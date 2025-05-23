
import { Check, Shield, Umbrella, MapPin, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const EssentialInfo = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="container-section bg-neutral-50" id="information">
      <motion.div 
        className="text-center mb-16"
        initial="hidden"
        whileInView="visible"
        variants={fadeIn}
        viewport={{ once: true, amount: 0.2 }}
      >
        <span className="badge badge-primary mb-4">Key Information</span>
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-neutral-800">
          Essential Travel Insurance Information
        </h2>
        <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
          Everything you need to know about travel insurance before your next adventure.
        </p>
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <motion.div 
          className="bg-white rounded-2xl p-8 shadow-soft border border-neutral-100"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 rounded-xl bg-lightBlue flex items-center justify-center text-deepBlue mr-4">
              <Shield className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-semibold text-neutral-800">Why Travel Insurance Matters</h3>
          </div>
          
          <ul className="space-y-6">
            <li className="flex items-start">
              <div className="p-1.5 rounded-full bg-deepBlue text-white mr-3 mt-1 flex-shrink-0">
                <Check className="w-3.5 h-3.5" />
              </div>
              <div>
                <span className="font-medium text-neutral-800">Medical Emergencies Abroad</span>
                <p className="text-neutral-600 mt-1 leading-relaxed">
                  International medical care can cost tens of thousands of dollars, and many domestic health insurance plans don't provide coverage overseas.
                </p>
              </div>
            </li>
            
            <li className="flex items-start">
              <div className="p-1.5 rounded-full bg-deepBlue text-white mr-3 mt-1 flex-shrink-0">
                <Check className="w-3.5 h-3.5" />
              </div>
              <div>
                <span className="font-medium text-neutral-800">Trip Cancellation Protection</span>
                <p className="text-neutral-600 mt-1 leading-relaxed">
                  Recover non-refundable expenses if you need to cancel your trip due to covered reasons such as illness, injury, or severe weather.
                </p>
              </div>
            </li>
            
            <li className="flex items-start">
              <div className="p-1.5 rounded-full bg-deepBlue text-white mr-3 mt-1 flex-shrink-0">
                <Check className="w-3.5 h-3.5" />
              </div>
              <div>
                <span className="font-medium text-neutral-800">Lost Luggage & Belongings</span>
                <p className="text-neutral-600 mt-1 leading-relaxed">
                  Get reimbursed if your luggage or personal items are lost, stolen, or damaged during your journey.
                </p>
              </div>
            </li>
            
            <li className="flex items-start">
              <div className="p-1.5 rounded-full bg-deepBlue text-white mr-3 mt-1 flex-shrink-0">
                <Check className="w-3.5 h-3.5" />
              </div>
              <div>
                <span className="font-medium text-neutral-800">24/7 Emergency Assistance</span>
                <p className="text-neutral-600 mt-1 leading-relaxed">
                  Access to round-the-clock support services including medical referrals, emergency evacuation, and travel assistance.
                </p>
              </div>
            </li>
          </ul>
        </motion.div>
        
        <motion.div 
          className="bg-white rounded-2xl p-8 shadow-soft border border-neutral-100"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 rounded-xl bg-lightBlue flex items-center justify-center text-deepBlue mr-4">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-semibold text-neutral-800">Tips for Choosing the Right Plan</h3>
          </div>
          
          <ul className="space-y-6">
            <li className="flex items-start">
              <div className="p-1.5 rounded-full bg-deepBlue text-white mr-3 mt-1 flex-shrink-0">
                <Check className="w-3.5 h-3.5" />
              </div>
              <div>
                <span className="font-medium text-neutral-800">Assess Your Trip Value</span>
                <p className="text-neutral-600 mt-1 leading-relaxed">
                  Choose coverage that matches your total non-refundable trip costs, including flights, accommodations, and tours.
                </p>
              </div>
            </li>
            
            <li className="flex items-start">
              <div className="p-1.5 rounded-full bg-deepBlue text-white mr-3 mt-1 flex-shrink-0">
                <Check className="w-3.5 h-3.5" />
              </div>
              <div>
                <span className="font-medium text-neutral-800">Consider Your Activities</span>
                <p className="text-neutral-600 mt-1 leading-relaxed">
                  If you're planning adventure sports or specialized activities, ensure your policy covers these without exclusions.
                </p>
              </div>
            </li>
            
            <li className="flex items-start">
              <div className="p-1.5 rounded-full bg-deepBlue text-white mr-3 mt-1 flex-shrink-0">
                <Check className="w-3.5 h-3.5" />
              </div>
              <div>
                <span className="font-medium text-neutral-800">Check Medical Coverage Limits</span>
                <p className="text-neutral-600 mt-1 leading-relaxed">
                  For international travel, experts recommend at least $100,000 in emergency medical coverage and $250,000 for emergency evacuation.
                </p>
              </div>
            </li>
            
            <li className="flex items-start">
              <div className="p-1.5 rounded-full bg-deepBlue text-white mr-3 mt-1 flex-shrink-0">
                <Check className="w-3.5 h-3.5" />
              </div>
              <div>
                <span className="font-medium text-neutral-800">Read the Fine Print</span>
                <p className="text-neutral-600 mt-1 leading-relaxed">
                  Understand what's covered and what's not, including pre-existing condition coverage and policy exclusions.
                </p>
              </div>
            </li>
          </ul>
        </motion.div>
      </div>
      
      <motion.div 
        className="mt-16 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <a href="#quote" className="btn-primary inline-flex items-center group">
          Get Protected Today
          <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
          </svg>
        </a>
      </motion.div>
    </section>
  );
};

export default EssentialInfo;
