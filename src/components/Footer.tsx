import React, { memo } from 'react';
import Link from 'next/link';
import { MapPin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-16 bg-[#002061] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between gap-10 mb-12">
          {/* Left side - Title */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold">
              Comprehensive travel insurance for visitors to Canada
            </h2>
          </div>
          
          {/* Right side - Contact info */}
          <div className="lg:w-1/2 flex flex-col gap-5">
            <div className="flex items-center">
              <MapPin className="w-5 h-5 mr-3 flex-shrink-0" />
              <span>123 Travel Way, Toronto, Ontario M5V 2L7, Canada</span>
            </div>
            <div className="flex items-center">
              <Phone className="w-5 h-5 mr-3 flex-shrink-0" />
              <span>+1 (800) 123-4567</span>
            </div>
            <div className="flex items-center">
              <Mail className="w-5 h-5 mr-3 flex-shrink-0" />
              <span>info@insuretravel.com</span>
            </div>
          </div>
        </div>
        
        {/* Divider */}
        <div className="border-t border-white/20 mb-8"></div>
        
        {/* Bottom section with links and copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Navigation links */}
          <div className="flex flex-wrap gap-6 mb-6 md:mb-0">
            <Link href="/privacy-policy" className="hover:text-blue-200">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-blue-200">
              Terms of Service
            </Link>
            <Link href="/cookie-policy" className="hover:text-blue-200">
              Cookie Policy
            </Link>
            <Link href="/contact" className="hover:text-blue-200">
              Contact Us
            </Link>
          </div>
          
          {/* Copyright text */}
          <div>
            <p>© Copyright {currentYear} InsureTravel. All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

Footer.displayName = 'Footer';

export default memo(Footer);
