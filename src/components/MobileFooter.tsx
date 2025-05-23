import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, MessageCircleQuestion, Star } from 'lucide-react'

const MobileFooter = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('hero')
      const plansSection = document.getElementById('plans')
      
      if (heroSection && plansSection) {
        const heroRect = heroSection.getBoundingClientRect()
        const plansRect = plansSection.getBoundingClientRect()
        
        // Show footer after plan comparison section is reached and hide when on hero/form section
        const hasPassedPlans = plansRect.top <= window.innerHeight
        const isOnHero = heroRect.bottom > 0 && heroRect.top <= window.innerHeight
        
        setIsVisible(hasPassedPlans && !isOnHero)
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Check initial state

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToHero = () => {
    const heroSection = document.getElementById('hero')
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const scrollToFAQ = () => {
    const faqSection = document.getElementById('faq')
    if (faqSection) {
      faqSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const scrollToTestimonials = () => {
    const testimonialsSection = document.getElementById('testimonials')
    if (testimonialsSection) {
      testimonialsSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
        >
          {/* Simple solid background */}
          <div className="bg-slate-800 border-t border-slate-700">
            {/* Content */}
            <div className="flex items-center justify-between px-6 py-2">
              {/* FAQ Button */}
              <motion.button
                onClick={scrollToFAQ}
                className="flex flex-col items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="flex items-center justify-center w-8 h-8 rounded-xl bg-slate-700 border border-slate-600">
                  <MessageCircleQuestion size={14} className="text-white" />
                </div>
                <span className="text-xs text-white font-medium mt-1">FAQ</span>
              </motion.button>

              {/* Quote Button (Center) */}
              <motion.button
                onClick={scrollToHero}
                className="flex flex-col items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#D81671' }}>
                  <Plus size={16} strokeWidth={3} className="text-white" />
                </div>
                <span className="text-xs text-white font-medium mt-0.5">QUOTE</span>
              </motion.button>

              {/* Reviews Button */}
              <motion.button
                onClick={scrollToTestimonials}
                className="flex flex-col items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="flex items-center justify-center w-8 h-8 rounded-xl bg-slate-700 border border-slate-600">
                  <Star size={14} className="text-white" />
                </div>
                <span className="text-xs text-white font-medium mt-1">Reviews</span>
              </motion.button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default MobileFooter 