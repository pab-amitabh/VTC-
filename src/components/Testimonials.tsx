import { useEffect, useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useIsMobile } from '@/hooks/use-mobile';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      quote: "InsureTravel has transformed the way I think about travel safety. Their comprehensive coverage gave me complete peace of mind. Highly recommend!",
      image: "/images/avatars/sarah.svg",
      featured: true
    },
    {
      id: 2,
      name: "Christina Matthews",
      quote: "InsureTravel has completely transformed my daily routine. The guided assistance are exactly what I need to start my journeys with clarity and focus.",
      image: "/images/avatars/david.svg"
    },
    {
      id: 3,
      name: "Sofia Marquez",
      quote: "I've tried many travel insurance providers, but InsureTravel stands out with its personalized programs and supportive service. It feels like it was made just for me.",
      image: "/images/avatars/emma.svg"
    },
    {
      id: 4,
      name: "Michael Thompson",
      quote: "After experiencing a medical emergency abroad, I'll never travel without InsureTravel again. Their quick response and comprehensive coverage made all the difference.",
      image: "/images/avatars/michael.svg"
    },
    {
      id: 5,
      name: "Priya Patel",
      quote: "The peace of mind that comes with knowing you're covered by InsureTravel is worth every penny. Their support team is available 24/7 and genuinely helpful!",
      image: "/images/avatars/priya.svg"
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 7000); // Change slide every 7 seconds

    return () => clearInterval(interval);
  }, []);

  const testimonialVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        duration: 0.6, 
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    },
    hover: {
      y: -4,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: { duration: 0.3 }
    }
  };
  
  // Container animation for testimonials
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

  const isMobile = useIsMobile();

  return (
    <section className="py-10 md:py-16 bg-white" id="testimonials">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold mb-16 text-gray-900 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          Hear it from our users
        </motion.h2>
        
        <div className="relative max-w-6xl mx-auto" ref={carouselRef}>
          <div className="overflow-hidden">
            <div className="flex flex-wrap">
              {/* Featured testimonial - larger on the left */}
              <div className="w-full md:w-1/2 px-4 md:px-6 mb-8 md:mb-0">
                <motion.div 
                  className="bg-magenta text-white rounded-3xl p-8 md:p-10 h-full relative shadow-lg"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="text-2xl md:text-3xl font-medium mb-8 leading-relaxed">
                    {testimonials[0].quote}
                  </div>
                  <div className="mt-auto">
                    <div className="flex items-center">
                      <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white mr-4">
                        <img 
                          src={testimonials[0].image} 
                          alt={testimonials[0].name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(testimonials[0].name)}&background=random&color=fff&background=17B3E4`;
                          }}
                        />
                      </div>
                      <div>
                        <p className="font-bold text-xl">{testimonials[0].name}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Two smaller testimonials on the right, stacked vertically */}
              <motion.div 
                className="w-full md:w-1/2 flex flex-col space-y-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
              >
                {[1, 2].map((index) => (
                  <motion.div 
                    key={testimonials[index].id}
                    className="flex-1 px-4 md:px-6"
                    variants={cardVariants}
                  >
                    <div className="bg-white border border-gray-100 rounded-3xl p-6 h-full shadow-sm">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 rounded-full overflow-hidden mr-3">
                          <img 
                            src={testimonials[index].image} 
                            alt={testimonials[index].name}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(testimonials[index].name)}&background=random&color=fff&background=17B3E4`;
                            }}
                          />
                        </div>
                        <div>
                          <p className="font-semibold text-deepBlue">{testimonials[index].name}</p>
                        </div>
                      </div>
                      <div className="text-base text-gray-800 leading-relaxed">
                        {testimonials[index].quote}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Carousel navigation dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.slice(0, 6).map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full ${
                  index === currentSlide 
                    ? "bg-magenta" 
                    : "bg-gray-300 hover:bg-gray-400"
                } transition-colors`}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Carousel navigation buttons */}
          <button 
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 md:-translate-x-12 bg-white rounded-full p-2 shadow-md text-deepBlue hover:text-white hover:bg-deepBlue transition-colors z-10"
            onClick={prevSlide}
            aria-label="Previous"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button 
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 md:translate-x-12 bg-white rounded-full p-2 shadow-md text-deepBlue hover:text-white hover:bg-deepBlue transition-colors z-10"
            onClick={nextSlide}
            aria-label="Next"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
