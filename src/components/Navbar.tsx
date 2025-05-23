import React, { memo } from 'react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

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
    { name: 'Home', href: '/' },
    { name: 'Claims', href: '/claims' },
    { name: 'Our Reviews', href: '/insurance' },
    // { name: 'Reviews', href: '/reviews' },
    { name: 'FAQ', href: '/faq' }
  ];

  return (
    <header className="fixed w-full z-50 transition-all duration-300 sticky-nav bg-white shadow-sm py-3"
      style={{ position: 'fixed', top: 0, left: 0, right: 0, width: '100%', zIndex: 1000 }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-deepBlue">InsureTravel</Link>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2 rounded-full bg-white bg-opacity-20 backdrop-blur-md"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          
          {/* Desktop navigation - scrolling horizontal menu */}
          <nav className="hidden md:block">
            <div className="overflow-hidden whitespace-nowrap py-2 disable-scroll">
              <div className="flex items-center">
                {navLinks.map((link, index) => (
                  <div key={link.name} className="flex items-center">
                    {index > 0 && (
                      <span className="mx-4 text-gray-300 text-lg font-light">|</span>
                    )}
                    <Link 
                      href={link.href}
                      className="text-gray-700 hover:text-deepBlue transition-colors duration-300 text-base font-medium whitespace-nowrap px-2"
                    >
                      {link.name}
                    </Link>
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
                  <motion.div custom={i} variants={menuItemVariants}>
                    <Link
                      href={link.href}
                      className="text-xl text-gray-700 hover:text-deepBlue transition-colors py-3 px-2 block"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
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

Navbar.displayName = 'Navbar';

export default memo(Navbar);
