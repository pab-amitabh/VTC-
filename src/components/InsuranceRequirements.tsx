import React from 'react';
import { AlertCircle, DollarSign, Shield, Ban, Clock, Users, FileText, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const InsuranceRequirements = () => {
  // Insurance requirement terms with expanded descriptions
  const insuranceTerms = [
    {
      term: 'Deductible',
      description: 'What you pay before insurance kicks in',
      icon: <DollarSign className="w-5 h-5 text-white" />
    },
    {
      term: 'Policy maximum',
      description: 'The most your plan will cover',
      icon: <Shield className="w-5 h-5 text-white" />
    },
    {
      term: 'Premium',
      description: 'Cost of the plan',
      icon: <DollarSign className="w-5 h-5 text-white" />
    },
    {
      term: 'Exclusions',
      description: 'What\'s not covered',
      icon: <Ban className="w-5 h-5 text-white" />
    },
    {
      term: 'Waiting period',
      description: 'Time before benefits begin (if applicable)',
      icon: <Clock className="w-5 h-5 text-white" />
    },
    {
      term: 'Eligibility criteria',
      description: 'Who qualifies',
      icon: <Users className="w-5 h-5 text-white" />
    },
    {
      term: 'Claims process',
      description: 'How to get reimbursed',
      icon: <FileText className="w-5 h-5 text-white" />
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
    <section className="py-16 md:py-24 bg-gray-50 relative overflow-hidden" id="insurance-requirements">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 rounded-full opacity-30 transform translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-pink-100 rounded-full opacity-30 transform -translate-x-1/3 translate-y-1/3"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative">
        <motion.div 
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={itemVariants}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
            Visitors to Canada insurance requirements explained
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Get clear, confident coverage by understanding the essential insurance requirements for visitors to 
              Canada. Knowing the key terms helps you choose the right plan and avoid surprises when you need care. 
              Here's a quick guide to the most important insurance concepts you should know before you travel.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={itemVariants}
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-gray-900">
            Understand your visitor to Canada coverage with confidence
          </h3>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {insuranceTerms.map((item, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 border border-gray-100"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-5" style={{ backgroundColor: '#17B3E4' }}>
                  {item.icon}
                </div>
                <h4 className="font-bold text-xl text-gray-900 mb-3">{item.term}</h4>
                <p className="text-gray-700">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 md:mt-16 bg-white p-8 rounded-xl shadow-md border border-gray-100">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: '#17B3E4' }}>
                Make informed insurance decisions
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Understanding these key terms will help you navigate the visitor insurance landscape and choose a policy that provides appropriate coverage for your needs.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                InsureTravel makes comparing and understanding visitor insurance plans simple, giving you confidence in your coverage during your stay in Canada.
              </p>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <div className="w-full max-w-[200px] h-[200px] bg-[#17B3E4] rounded-full flex items-center justify-center text-white p-8">
                <div className="text-center">
                  <div className="text-4xl font-bold">100%</div>
                  <div className="text-sm mt-2">Peace of mind with the right coverage</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsuranceRequirements; 