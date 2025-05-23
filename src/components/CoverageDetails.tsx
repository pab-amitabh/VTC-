import { motion } from 'framer-motion';
import { Shield, Umbrella, Plane, Luggage, Clock, Headphones } from 'lucide-react';

const CoverageDetails = () => {
  const coverageItems = [
    {
      title: "Medical Coverage",
      description: "Emergency medical treatments, hospital stays, and medical evacuation to the nearest adequate medical facility.",
      icon: Shield
    },
    {
      title: "Trip Cancellation",
      description: "Reimbursement for non-refundable trip payments if you need to cancel for covered reasons like illness or severe weather.",
      icon: Plane
    },
    {
      title: "Baggage Protection",
      description: "Coverage for lost, stolen, or damaged luggage and personal effects during your journey.",
      icon: Luggage
    },
    {
      title: "Travel Delays",
      description: "Additional accommodation, meal costs, and transportation expenses due to covered travel delays.",
      icon: Clock
    },
    {
      title: "Emergency Assistance",
      description: "24/7 access to emergency assistance services, including medical referrals and travel support.",
      icon: Headphones
    },
    {
      title: "Adventure Activities",
      description: "Coverage for adventure activities like hiking, snorkeling, and skiing (coverage varies by plan).",
      icon: Umbrella
    },
  ];

  // Animation variants for container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0,
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  // Animation variants for individual items
  const itemVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-white" id="coverage">
      {/* Static background elements - no animations */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-lightBlue rounded-full opacity-50 blur-3xl -z-10 transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-lightBlue rounded-full opacity-30 blur-3xl -z-10 transform -translate-x-1/2 translate-y-1/2"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <span className="badge badge-primary mb-4">Protection Details</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Coverage Highlights</h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Our travel insurance plans include essential protections to give you peace of mind throughout your journey.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {coverageItems.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass-card backdrop-blur-sm bg-white/60 rounded-2xl p-8 border border-neutral-200 hover:shadow-medium transition-all hover:-translate-y-1"
            >
              <div className="w-14 h-14 mb-6 rounded-xl bg-lightBlue flex items-center justify-center text-deepBlue">
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-neutral-800">{item.title}</h3>
              <p className="text-neutral-600 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Call to action section - Static without animations */}
        <div className="mt-20 p-10 rounded-2xl overflow-hidden relative bg-gradient-to-r from-deepBlue to-magenta">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h3 className="text-2xl md:text-3xl font-semibold mb-6">
              Not Sure What Coverage You Need?
            </h3>
            <p className="text-lg mb-8 opacity-90">
              Our insurance experts can help you select the right plan for your specific travel needs. 
              Get personalized assistance today.
            </p>
            <a 
              href="#quote" 
              className="inline-flex items-center justify-center bg-white text-deepBlue px-8 py-3 rounded-full font-medium hover:bg-opacity-90 transition-colors shadow-medium"
            >
              Get a Personalized Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoverageDetails;
