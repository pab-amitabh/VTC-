import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import PlanComparison, { QuoteContext } from '../components/PlanComparison';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import WhyNeedInsurance from '../components/WhyNeedInsurance';
import CoverageRequirements from '../components/CoverageRequirements';
import InsuranceProviders from '../components/InsuranceProviders';
import VisitorInsurancePartner from '../components/VisitorInsurancePartner';
import WhyChooseUs from '../components/WhyChooseUs';
import WhatIsVisitorInsurance from '../components/WhatIsVisitorInsurance';
import WhoNeedsInsurance from '../components/WhoNeedsInsurance';
import TypicalCoverage from '../components/TypicalCoverage';
import { ArrowUp } from 'lucide-react';

interface IndexProps {
  onQuoteUpdate?: (data: any) => void;
}

const Index = ({ onQuoteUpdate }: IndexProps) => {
  // Initial state should be null to show mock plans on load
  const [quoteData, setQuoteData] = useState<any>(null);
  
  // For tracking sections that are in view
  const sectionRefs = {
    hero: useRef(null),
    plans: useRef(null),
    trustedPartner: useRef(null),
    whyChooseUs: useRef(null),
    whatIsInsurance: useRef(null),
    whyNeedInsurance: useRef(null),
    typicalCoverage: useRef(null),
    whoNeeds: useRef(null),
    companies: useRef(null),
    howToBuy: useRef(null),
    testimonials: useRef(null),
    faq: useRef(null)
  };

  // Initialize with null to show mock plans on component mount
  useEffect(() => {
    if (onQuoteUpdate) {
      onQuoteUpdate(null);
    }
  }, []);

  const { scrollY } = useScroll();
  const navbarBackground = useTransform(
    scrollY,
    [0, 100], 
    ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.95)"]
  );

  const navbarShadow = useTransform(
    scrollY,
    [0, 100], 
    ["0 0 0 rgba(0,0,0,0)", "0 4px 20px rgba(0,0,0,0.06)"]
  );

  // Simple static animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 }, // Add actual y displacement for animation
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  // Handle quote data received from Hero component
  const handleQuoteDataReceived = (data: any) => {
    setQuoteData(data);
    if (onQuoteUpdate) {
      onQuoteUpdate(data);
    }
  };

  // Handle modify search button click
  const handleModifySearch = () => {
    // Reset to null to show mock plans when Adjust Search Criteria is clicked
    setQuoteData(null);
    if (onQuoteUpdate) {
      onQuoteUpdate(null);
    }
    
    // Scroll to the top to let the user modify their search
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Simple observer for class toggling - no animation impact
  useEffect(() => {
    const observerOptions = {
      threshold: 0.15,
      rootMargin: "-50px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    }, observerOptions);

    // Observe all section refs
    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      Object.values(sectionRefs).forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);

  return (
    <QuoteContext.Provider value={quoteData}>
      <div className="min-h-screen bg-white">
        <motion.div
          style={{
            backgroundColor: "white",
            boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 1000,
            width: '100%'
          }}
          className="transition-all duration-200 sticky-nav"
        >
          <Navbar />
        </motion.div>
        
        {/* 1. Main landing page with Input form */}
        <div ref={sectionRefs.hero} id="hero" className="section-visible">
          <Hero onQuoteDataReceived={handleQuoteDataReceived} />
        </div>
        
        {/* 3. Compare Insurance Plans */}
        <div ref={sectionRefs.plans} id="plans" className="section-visible">
          <PlanComparison onModifySearch={handleModifySearch} />
        </div>
        
        {/* 4. Your trusted partner for Visitor to Canada Insurance */}
        <div ref={sectionRefs.trustedPartner} id="trusted-partner" className="section-visible">
          <VisitorInsurancePartner />
        </div>
        
        {/* 5. Why choose us */}
        <div ref={sectionRefs.whyChooseUs} id="why-choose-us" className="section-visible">
          <WhyChooseUs />
        </div>
        
        {/* 6. What is Visitor to Canada Insurance? */}
        <div ref={sectionRefs.whatIsInsurance} id="what-is-visitor-insurance" className="section-visible">
          <WhatIsVisitorInsurance />
        </div>
        
        {/* 7. Why do you need visitor insurance in Canada? */}
        <div ref={sectionRefs.whyNeedInsurance} id="why-need" className="section-visible">
          <WhyNeedInsurance />
        </div>
        
        {/* 8. What a typical visitor insurance plan covers */}
        <div ref={sectionRefs.typicalCoverage} id="typical-coverage" className="section-visible">
          <TypicalCoverage />
        </div>
        
        {/* 9. Who needs travel insurance for visitors to Canada? */}
        <div ref={sectionRefs.whoNeeds} id="who-needs-insurance" className="section-visible">
          <WhoNeedsInsurance />
        </div>
        
        {/* 10. Which companies offer the best health insurance plans for visitors to Canada? */}
        <div ref={sectionRefs.companies} id="insurance-providers" className="section-visible">
          <InsuranceProviders />
        </div>
        
        {/* 11-12. How to buy visitor insurance for Canada? & When to purchase visitor to Canada */}
        <div ref={sectionRefs.howToBuy} id="coverage" className="section-visible">
          <CoverageRequirements />
        </div>
        
        {/* 13. Reviews/Testimonials */}
        <div ref={sectionRefs.testimonials} id="testimonials" className="section-visible">
          <Testimonials />
        </div>
        
        {/* 14. FAQ */}
        <div ref={sectionRefs.faq} id="faq" className="section-visible">
          <FAQ />
        </div>
        
        <Footer />

        {/* Scroll to top button */}
        <ScrollToTopButton />
      </div>
    </QuoteContext.Provider>
  );
};

// Scroll to top button component
const ScrollToTopButton = () => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [100, 300], [0, 1]);
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  return (
    <motion.button
      style={{ opacity }}
      className="fixed md:bottom-8 bottom-20 right-8 bg-deepBlue text-white w-12 h-12 rounded-full flex items-center justify-center shadow-medium z-50 hover:bg-deepBlueHover transition-colors"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={scrollToTop}
    >
      <ArrowUp className="w-5 h-5" />
    </motion.button>
  );
};

export default Index;
