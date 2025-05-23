import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const ResourceGuide = () => {
  // Added state for mobile detection
  const [isMobile, setIsMobile] = useState(false);
  
  // Check if device is mobile on component mount and window resize
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkIfMobile();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkIfMobile);
    
    // Cleanup event listener
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const guides = [
    {
      title: "Ultimate Guide to Travel Insurance Coverage",
      description: "Learn everything you need to know about travel insurance coverage, from medical emergencies to trip cancellation.",
      image: "/images/guide.jpg",
      readTime: "8 min read"
    },
    {
      title: "Travel Health & Safety Tips for 2025",
      description: "Essential health and safety tips for travelers in the post-pandemic world. Stay protected on your journey.",
      image: "/images/tips.jpg",
      readTime: "6 min read"
    },
    {
      title: "How to Choose the Right Travel Insurance Plan",
      description: "A step-by-step guide to selecting the perfect travel insurance plan for your specific needs and destination.",
      image: "/images/insurance.jpg",
      readTime: "10 min read"
    },
    {
      title: "Making Insurance Claims: What You Need to Know",
      description: "Detailed instructions on how to file insurance claims efficiently and maximize your reimbursement.",
      image: "/images/claims.jpg",
      readTime: "7 min read"
    }
  ];

  // For demo purposes, using placeholder images if real images don't exist
  const getImageUrl = (path: string) => {
    // This is a fallback in case the images aren't available
    return path;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.1 
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 } 
    }
  };

  // First article gets larger display
  const featuredArticle = guides[0];
  // Regular articles (excluding the first one)
  const regularArticles = guides.slice(1);

  return (
    <section className="py-12 md:py-32 bg-gray-50" id="resources">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Mobile-optimized header section */}
        <motion.div 
          className="text-center mb-10 md:mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={itemVariants}
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3 md:mb-4 text-gray-900 leading-tight">
            Travel Insurance Resources
          </h2>
          
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto px-1">
            Expert guides to help you make informed decisions about your travel insurance.
          </p>
        </motion.div>
        
        {/* Mobile-optimized Featured Article */}
        <motion.div
          className="mb-10 md:mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={itemVariants}
        >
          <div className="bg-white rounded-xl md:rounded-2xl overflow-hidden shadow-md md:shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-56 sm:h-64 md:h-72 lg:h-auto">
                {/* Higher quality mobile images with lazy loading */}
                <img 
                  src={getImageUrl(featuredArticle.image)} 
                  alt={featuredArticle.title} 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              {/* Mobile-optimized content section with better spacing */}
              <div className="p-5 sm:p-6 md:p-8 flex flex-col justify-center">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 md:mb-4 text-gray-900 leading-tight">{featuredArticle.title}</h3>
                <p className="text-sm md:text-lg text-gray-600 mb-4 md:mb-6">{featuredArticle.description}</p>
                <div className="flex items-center mb-5 md:mb-6 text-xs md:text-sm text-gray-500">
                  <span className="font-medium text-gray-700">{featuredArticle.readTime}</span>
                  <span className="mx-2">•</span>
                  <span>May 11, 2025</span>
                </div>
                {/* Touch-optimized call-to-action button */}
                <a 
                  href="#" 
                  className="flex justify-center md:inline-flex items-center px-5 py-3 rounded-full bg-deepBlue text-white font-medium hover:bg-deepBlue/90 transition-colors text-center touch-manipulation"
                  style={{WebkitTapHighlightColor: 'transparent'}}
                >
                  Read Full Article
                  <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Mobile-optimized Article Grid with better spacing and touch targets */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {regularArticles.map((guide, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              whileHover={isMobile ? {} : { y: -8, transition: { duration: 0.3 } }}
              className="group touch-manipulation"
              style={{WebkitTapHighlightColor: 'rgba(0,0,0,0.1)'}}
            >
              <div className="bg-white rounded-xl overflow-hidden shadow-md transition-all group-hover:shadow-xl h-full flex flex-col">
                <div className="relative">
                  <div className="aspect-w-16 aspect-h-10 overflow-hidden">
                    {/* Optimized mobile images with lazy loading */}
                    <img 
                      src={getImageUrl(guide.image)} 
                      alt={guide.title} 
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                </div>
                
                {/* Improved spacing for mobile article cards */}
                <div className="p-4 sm:p-5 md:p-6 flex flex-col flex-grow">
                  <div className="flex items-center mb-3 text-xs text-gray-500">
                    <span className="font-medium text-gray-700">{guide.readTime}</span>
                    <span className="mx-2">•</span>
                    <span>May 11, 2025</span>
                  </div>
                  
                  {/* Improved text sizing and spacing for mobile */}
                  <h3 className="text-lg sm:text-xl font-bold mb-2 md:mb-3 group-hover:text-deepBlue transition-colors leading-tight">{guide.title}</h3>
                  <p className="text-sm text-gray-600 mb-4 md:mb-6 line-clamp-3 flex-grow">{guide.description}</p>
                  
                  {/* Enhanced mobile touch target */}
                  <a 
                    href="#" 
                    className="inline-flex items-center font-medium text-deepBlue hover:text-magenta transition-colors py-1 touch-manipulation"
                    style={{WebkitTapHighlightColor: 'transparent'}}
                  >
                    Read Article
                    <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Mobile-optimized "View All" button */}
        <motion.div 
          className="mt-10 md:mt-16 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={itemVariants}
        >
          <motion.a 
            href="#" 
            className="w-full sm:w-auto px-6 py-4 bg-white border-2 border-deepBlue text-deepBlue rounded-full font-bold hover:bg-deepBlue hover:text-white transition-colors shadow-sm inline-flex items-center justify-center"
            whileHover={isMobile ? {} : { scale: 1.05 }}
            whileTap={isMobile ? { scale: 0.98 } : { scale: 0.95 }}
            style={{WebkitTapHighlightColor: 'transparent'}}
          >
            View All Resources
            <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ResourceGuide;
