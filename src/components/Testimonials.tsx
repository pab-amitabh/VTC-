import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

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

  // Simplified animation variants for the new grid layout
  const containerVariants = {
    hidden: { opacity: 1 }, // Grid container itself can be visible
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    hover: { // Keep a subtle hover effect
      y: -5,
      boxShadow: "0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)", // Tailwind shadow-lg
      transition: { duration: 0.2 }
    }
  };

  const StarRating = ({ rating }: { rating: number }) => (
    <div className="flex items-center mb-3">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`} fill={i < rating ? 'currentColor' : 'none'} />
      ))}
    </div>
  );

  return (
    <section className="pt-0 pb-16 md:pb-20 bg-white" id="testimonials">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold mb-8 text-gray-900 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          Our happy clients say about us
        </motion.h2>
        
        {/* True glassmorphism effect with background gradient orbs */}
        <div className="relative overflow-hidden mb-10">
          {/* Colorful gradient background orbs */}
          <div className="absolute w-[40%] h-[300px] rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 blur-3xl opacity-40 -left-[5%] top-1/4"></div>
          <div className="absolute w-[40%] h-[300px] rounded-full bg-gradient-to-r from-magenta to-purple-500 blur-3xl opacity-40 -right-[5%] top-1/4"></div>
          
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 relative z-10 py-6 px-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {testimonials.slice(0, 3).map((testimonial, index) => ( 
              <motion.div 
                key={testimonial.id}
                className="bg-white/40 backdrop-blur-md rounded-xl overflow-hidden flex flex-col border border-white/50 shadow-lg"
                variants={cardVariants}
                whileHover="hover"
              >
                <div className="p-6 md:p-8 flex-grow flex flex-col">
                  <StarRating rating={testimonial.rating} />
                  <p className="text-gray-800 leading-relaxed mb-6 flex-grow italic">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center mt-auto pt-4 border-t border-white/30">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover object-top mr-4 border-2 border-white/50"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(testimonial.name)}&background=random&color=0D47A1&bold=true`;
                      }}
                    />
                    <div>
                      <h3 className="text-gray-900 font-semibold text-lg">{testimonial.name}</h3>
                      <p className="text-gray-700 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="text-center">
          <a 
            href="https://www.reviews.io/company-reviews/store/www-policyadvisor-com" 
            className="inline-flex items-center justify-center px-6 py-3 bg-magenta text-white font-medium rounded-lg hover:bg-magenta/90 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read all our reviews
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
