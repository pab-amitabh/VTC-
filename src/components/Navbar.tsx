import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Animation variants
  const menuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1]
      }
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const menuItemVariants = {
    closed: { opacity: 0, y: -10 },
    open: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1]
      }
    })
  };

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Compare Plans', href: '#plans' },
    { name: 'Reviews', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' }
  ];

  return (
    <header className="fixed w-full z-50 transition-all duration-300 sticky-nav bg-white shadow-sm py-3"
      style={{ position: 'fixed', top: 0, left: 0, right: 0, width: '100%', zIndex: 1000 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <a href="/" className="text-2xl font-bold text-deepBlue">InsureTravel</a>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2 rounded-full bg-white bg-opacity-20 backdrop-blur-md"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          
          {/* Desktop navigation - scrolling horizontal menu */}
          <nav className="hidden md:block">
            <div className="overflow-x-auto whitespace-nowrap py-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
              <div className="flex items-center">
                {navLinks.map((link, index) => (
                  <div key={link.name} className="flex items-center">
                    {index > 0 && (
                      <span className="mx-4 text-gray-300 text-lg font-light">|</span>
                    )}
                    <a 
                      href={link.href}
                      className="text-gray-700 hover:text-deepBlue transition-colors duration-300 text-base font-medium whitespace-nowrap px-2"
                    >
                      {link.name}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </nav>
        </div>
      </div>
      
      {/* Mobile navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-8 px-6"
            style={{ zIndex: 1000 }}
          >
            <div className="flex flex-col">
              {navLinks.map((link, i) => (
                <div key={link.name} className="flex flex-col">
                  <motion.a
                    custom={i}
                    variants={menuItemVariants}
                    href={link.href}
                    className="text-xl text-gray-700 hover:text-deepBlue transition-colors py-3 px-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </motion.a>
                  {i < navLinks.length - 1 && (
                    <div className="border-b border-gray-200 w-full my-1"></div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
