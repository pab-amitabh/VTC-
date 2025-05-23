import React, { memo } from 'react';
import { useState } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { motion } from 'framer-motion';
import { MessageCircle, AlertCircle, Plane, CreditCard, Shield, Clock, FileText } from 'lucide-react';
import { cn } from '@/lib/utils';

type FAQ = {
  id: string;
  question: string;
  answer: string;
  category: 'coverage' | 'claims' | 'pricing' | 'eligibility' | 'timing' | 'general';
  icon: React.ElementType;
};

const FAQ = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', name: 'All Questions', icon: FileText },
    { id: 'coverage', name: 'Coverage', icon: Shield },
    { id: 'claims', name: 'Claims', icon: FileText },
    { id: 'pricing', name: 'Pricing', icon: CreditCard },
    { id: 'eligibility', name: 'Eligibility', icon: AlertCircle },
    { id: 'timing', name: 'Timing', icon: Clock },
  ];

  const faqs: FAQ[] = [
    {
      id: "item-1",
      question: "What does travel insurance typically cover?",
      answer: "Travel insurance typically covers emergency medical expenses, trip cancellation or interruption, lost or stolen baggage, travel delays, emergency evacuation, and 24/7 assistance services. Coverage varies by plan, so it's important to review policy details.",
      category: 'coverage',
      icon: Shield
    },
    {
      id: "item-2",
      question: "How much does travel insurance cost?",
      answer: "The cost of travel insurance usually ranges from 4% to 10% of your total trip cost. Factors affecting the price include your age, trip duration, destination, coverage limits, and any optional add-ons like adventure sports coverage or cancel for any reason benefits.",
      category: 'pricing',
      icon: CreditCard
    },
    {
      id: "item-3",
      question: "When should I purchase travel insurance?",
      answer: "For maximum benefits, it's best to purchase travel insurance soon after making your first trip payment. Many time-sensitive benefits, such as pre-existing condition waivers or cancel for any reason coverage, are only available if you buy insurance within 14-21 days of your initial trip deposit.",
      category: 'timing',
      icon: Clock
    },
    {
      id: "item-4",
      question: "Are pre-existing medical conditions covered?",
      answer: "Many plans offer a pre-existing condition waiver if you purchase insurance shortly after making your first trip payment (typically within 14-21 days) and insure the full non-refundable trip cost. Without the waiver, conditions that existed within a certain period before coverage begins (usually 60-180 days) may be excluded.",
      category: 'eligibility',
      icon: AlertCircle
    },
    {
      id: "item-5",
      question: "Can I buy travel insurance after booking my trip?",
      answer: "Yes, you can purchase travel insurance after booking your trip, but it's best to buy it as soon as possible after making trip arrangements. Some benefits, like pre-existing condition waivers or cancel for any reason coverage, are only available within a limited time after your initial trip deposit.",
      category: 'timing',
      icon: Clock
    },
    {
      id: "item-6",
      question: "How do I file a claim?",
      answer: "The claim process typically involves: 1) Notifying your insurance company as soon as possible, 2) Completing a claim form (available online or through customer service), 3) Gathering supporting documentation (receipts, medical reports, etc.), 4) Submitting all materials through the company's claims portal or by mail, and 5) Following up as needed. Most companies also offer claims assistance through their customer service department.",
      category: 'claims',
      icon: FileText
    },
    {
      id: "item-7",
      question: "Does travel insurance cover flight cancellations?",
      answer: "Yes, most comprehensive travel insurance plans cover trip cancellation due to certain unforeseen events, including airline cancellations. You may be reimbursed for prepaid, non-refundable trip costs if your flight is cancelled due to severe weather, mechanical breakdown, or even airline strikes. However, coverage varies by policy, so it's important to check the specific terms.",
      category: 'coverage',
      icon: Plane
    },
    {
      id: "item-8",
      question: "Can I extend my travel insurance while I'm abroad?",
      answer: "Many insurance providers allow you to extend your coverage while you're traveling, provided you request the extension before your original policy expires. There may be limitations based on your age, trip duration, or if you've already filed a claim. Contact your insurer directly to inquire about extension options and any additional premiums.",
      category: 'general',
      icon: Shield
    }
  ];

  // Filter FAQs based on active category only
  // const filteredFaqs = faqs.filter(faq => {
  //   return activeCategory === 'all' || faq.category === activeCategory;
  // });
  // Display all FAQs since tabs are removed
  const filteredFaqs = faqs;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="py-8 md:py-12 relative overflow-hidden bg-gradient-to-b from-gray-50 to-white" id="faq">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-lightBlue rounded-full opacity-50 blur-3xl -z-10 transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-lightBlue rounded-full opacity-30 blur-3xl -z-10 transform -translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <motion.div 
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={itemVariants}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-neutral-800">
            Frequently asked questions
          </h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            Quick answers for smart decisions. 
            Frequently asked questions for Visitor to Canada insurance
          </p>
        </motion.div>

        {/* Category tabs - REMOVED */}
        {/* <motion.div
          className="max-w-4xl mx-auto mb-10 overflow-x-auto hide-scrollbar"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <div className="flex space-x-2 md:space-x-4 min-w-max p-1 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={cn(
                  "flex items-center px-4 py-2 rounded-full text-sm transition-colors whitespace-nowrap",
                  activeCategory === category.id
                    ? "bg-deepBlue text-white shadow-md"
                    : "bg-white text-blue-600 hover:bg-blue-50 border border-gray-200"
                )}
              >
                <category.icon className="w-4 h-4 mr-2" />
                {category.name}
              </button>
            ))}
          </div>
        </motion.div> */}
        
        {/* FAQ accordion */}
        <motion.div 
          className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          {/* Main accordion section */}
          <div className="lg:col-span-8">
            {filteredFaqs.length > 0 ? (
              <Accordion type="single" collapsible className="w-full space-y-4">
                {filteredFaqs.map((faq, index) => (
                  <motion.div 
                    id={faq.id}
                    key={faq.id} 
                    variants={itemVariants}
                    custom={index}
                  >
                    <AccordionItem 
                      value={faq.id} 
                      className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow"
                    >
                      <AccordionTrigger className="px-4 py-4 md:px-6 md:py-5 hover:no-underline group">
                        <div className="flex items-start gap-4 text-left">
                          <span className="p-2 rounded-lg inline-flex bg-blue-100 text-blue-600">
                            <faq.icon className="w-5 h-5" />
                          </span>
                          <span className="text-lg font-medium text-neutral-800 group-hover:text-deepBlue transition-colors">{faq.question}</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="px-4 pb-4 md:px-6 md:pb-6 pt-0 ml-10 md:ml-14 text-neutral-600 leading-relaxed">
                        <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                          {faq.answer}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </motion.div>
                ))}
              </Accordion>
            ) : (
              <div className="text-center py-10 bg-white rounded-2xl border border-gray-200">
                <AlertCircle className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-700">No questions in this category</h3>
                <p className="text-gray-500 mt-2">Try selecting a different category</p>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4">
            <motion.div 
              className="bg-white rounded-2xl p-4 md:p-6 shadow-sm border border-gray-200 sticky top-24"
              variants={itemVariants}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-blue-100 text-blue-600">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold text-neutral-800">Still have questions?</h3>
              </div>
              <p className="text-neutral-600 mb-6 text-sm">
                Our insurance experts are here to help you find the perfect coverage for your travels.
              </p>
              <div className="space-y-3">
                <motion.a 
                  href="tel:1-888-601-9980" 
                  className="w-full py-2.5 px-4 bg-deepBlue hover:bg-deepBlue/90 text-white rounded-xl font-medium text-sm inline-flex items-center justify-center transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Talk to an Expert
                </motion.a>
              </div>

              {/* Popular questions section */}
              <div className="mt-8 pt-6 border-t border-gray-100">
                <h4 className="text-sm font-semibold text-gray-700 mb-4">Popular Questions</h4>
                <ul className="space-y-3">
                  {faqs.slice(0, 3).map((faq) => (
                    <li key={faq.id}>
                      <a 
                        href={`#${faq.id}`} 
                        className="text-sm text-deepBlue hover:text-deepBlue/80 flex items-start gap-2"
                        onClick={(e) => {
                          e.preventDefault();
                          // setActiveCategory('all'); // No longer needed
                          // Use a slight delay to allow state update and re-render if necessary before scrolling
                          setTimeout(() => {
                            const element = document.getElementById(faq.id);
                            element?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                            // Optionally, open the accordion item if your Accordion component supports it programmatically
                          }, 100); // 100ms delay, adjust if needed
                        }}
                      >
                        <span className="text-deepBlue mt-0.5">•</span>
                        <span>{faq.question}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

FAQ.displayName = 'FAQ';

export default memo(FAQ);
