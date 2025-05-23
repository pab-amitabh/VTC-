import React, { memo } from 'react';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeIn, simpleHover, VIEWPORT_CONFIG } from '../utils/motionConfig';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      quote: "InsureTravel has transformed the way I think about travel safety. Their comprehensive coverage gave me complete peace of mind. Highly recommend!",
      image: "/images/avatar1.png",
      role: "Frequent Traveller",
      rating: 5,
    },
    {
      id: 2,
      name: "Christina Matthews",
      quote: "InsureTravel has completely transformed my daily routine. The guided assistance are exactly what I need to start my journeys with clarity and focus.",
      image: "/images/avatar2.png",
      role: "Digital Nomad",
      rating: 5,
    },
    {
      id: 3,
      name: "Sofia Marquez",
      quote: "I've tried many travel insurance providers, but InsureTravel stands out with its personalized programs and supportive service. It feels like it was made just for me.",
      image: "/images/avatar3.png",
      role: "Exchange Student",
      rating: 5,
    },
    {
      id: 4,
      name: "Michael Thompson",
      quote: "After experiencing a medical emergency abroad, I'll never travel without InsureTravel again. Their quick response and comprehensive coverage made all the difference.",
      image: "/images/avatars/michael.svg",
      role: "Adventure Seeker",
      rating: 5,
    },
    {
      id: 5,
      name: "Priya Patel",
      quote: "The peace of mind that comes with knowing you're covered by InsureTravel is worth every penny. Their support team is available 24/7 and genuinely helpful!",
      image: "/images/avatars/priya.svg",
      role: "Family Vacationer",
      rating: 5,
    },
    {
      id: 6,
      name: "John Davis",
      quote: "Fantastic service and great plans. Navigating the options was easy, and I found the perfect coverage for my family trip to Canada.",
      image: "/images/avatars/john.svg",
      role: "Business Traveller",
      rating: 4,
    },
    {
      id: 7,
      name: "Linda Chen",
      quote: "Customer support was excellent when I had questions about my policy. Very patient and informative. Smooth process from start to finish.",
      image: "/images/avatars/linda.svg",
      role: "Solo Explorer",
      rating: 5,
    },
    {
      id: 8,
      name: "Robert Garcia",
      quote: "Affordable rates and the website is user-friendly. Comparing plans was straightforward, and I felt confident in my choice.",
      image: "/images/avatars/robert.svg",
      role: "Weekend Tripper",
      rating: 4,
    }
  ];

  const StarRating = ({ rating }: { rating: number }) => (
    <div className="flex items-center mb-4">
      {[...Array(5)].map((_, i) => (
        <Star 
          key={i} 
          className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`} 
          fill={i < rating ? 'currentColor' : 'none'} 
        />
      ))}
    </div>
  );

  return (
    <section className="py-16 md:py-24 bg-gray-50" id="testimonials">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          variants={fadeIn}
          initial="initial"
          whileInView="animate"
          viewport={VIEWPORT_CONFIG}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[#181B1F] leading-tight">
            Our happy clients
            <span className="block mt-2 text-[#181B1F]">
              say about us
            </span>
          </h2>
          <p className="text-lg md:text-xl text-[#64748B] max-w-3xl mx-auto">
            Don't just take our word for it. See what our satisfied customers have to say about their experience with InsureTravel.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          variants={fadeIn}
          initial="initial"
          whileInView="animate"
          viewport={VIEWPORT_CONFIG}
        >
          {testimonials.slice(0, 3).map((testimonial, index) => ( 
            <motion.div 
              key={testimonial.id}
              className="group bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
              whileHover={simpleHover}
            >
              {/* Header */}
              <div className="bg-gray-50 p-6 border-b border-gray-100">
                <StarRating rating={testimonial.rating} />
                <p className="text-[#181B1F] leading-relaxed text-lg">
                  "{testimonial.quote}"
                </p>
              </div>

              {/* User info */}
              <div className="p-6">
                <div className="flex items-center">
                  <div className="relative mr-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover border-3 border-white shadow-lg"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(testimonial.name)}&background=random&color=0D47A1&bold=true`;
                      }}
                    />
                    {/* Verified badge */}
                    <div className="absolute -bottom-1 -right-1 w-7 h-7 bg-gradient-to-r from-[#17B3E4] to-[#DB2877] rounded-full flex items-center justify-center shadow-lg">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-[#181B1F] font-bold text-xl mb-1">
                      {testimonial.name}
                    </h3>
                    <p className="text-[#64748B] text-sm font-medium bg-gray-100 px-3 py-1 rounded-full inline-block">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="text-center bg-gradient-to-r from-[#17B3E4] to-[#DB2877] rounded-2xl p-8 md:p-12 text-white"
          variants={fadeIn}
          initial="initial"
          whileInView="animate"
          viewport={VIEWPORT_CONFIG}
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Join thousands of satisfied customers
          </h3>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Experience the peace of mind that comes with comprehensive travel insurance coverage. 
            Your next adventure awaits – let us protect it.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="https://www.reviews.io/company-reviews/store/www-policyadvisor-com" 
              className="inline-flex items-center justify-center px-8 py-4 bg-white/20 text-white font-bold rounded-full hover:bg-white/30 transition-all duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              Read all our reviews
            </a>
            
            <div className="flex items-center text-white/90">
              <div className="flex -space-x-2 mr-3">
                {testimonials.slice(0, 4).map((testimonial, index) => (
                  <img 
                    key={testimonial.id}
                    src={testimonial.image} 
                    alt=""
                    className="w-8 h-8 rounded-full border-2 border-white object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(testimonial.name)}&background=random&color=fff&bold=true`;
                    }}
                  />
                ))}
              </div>
              <span className="text-sm font-medium">
                Trusted by 10,000+ travelers
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

Testimonials.displayName = 'Testimonials';

export default memo(Testimonials);
