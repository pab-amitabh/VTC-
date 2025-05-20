import { Mail, MapPin, Phone, Facebook, Twitter, Instagram, Linkedin, ChevronDown, Globe, Send, CheckCircle2 } from 'lucide-react';
import { IMAGES } from '@/constants/images';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const Footer = () => {
  const [email, setEmail] = useState<string>('');
  const [subscribed, setSubscribed] = useState<boolean>(false);
  const [language, setLanguage] = useState<string>('en');
  const [langDropdownOpen, setLangDropdownOpen] = useState<boolean>(false);

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'es', name: 'Español' },
    { code: 'fr', name: 'Français' },
    { code: 'de', name: 'Deutsch' },
    { code: 'zh', name: '中文' }
  ];

  const insurancePlans = [
    { name: 'Travel Medical Insurance', href: '/insurance/travel-medical' },
    { name: 'Trip Cancellation Insurance', href: '/insurance/trip-cancellation' },
    { name: 'Annual Multi-Trip Plans', href: '/insurance/annual-multi-trip' },
    { name: 'Adventure Travel Coverage', href: '/insurance/adventure' },
    { name: 'Family Travel Insurance', href: '/insurance/family' },
    { name: 'Senior Travel Insurance', href: '/insurance/senior' },
    { name: 'Student Travel Insurance', href: '/insurance/student' }
  ];

  const resources = [
    { name: 'Insurance Guides', href: '/resources/guides' },
    { name: 'Travel Safety Tips', href: '/resources/safety-tips' },
    { name: 'Claims Process', href: '/resources/claims' },
    { name: 'FAQs', href: '/faq' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact Us', href: '/contact' }
  ];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.includes('@') && email.includes('.')) {
      // In a real app, you would handle the subscription via API
      console.log('Subscribing email:', email);
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail('');
      }, 3000);
    }
  };

  const setLanguageHandler = (langCode: string) => {
    setLanguage(langCode);
    setLangDropdownOpen(false);
    // In a real app, you would implement language change functionality
  };

  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-gray-950 text-white pt-16 pb-8 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-deepBlue via-magenta to-deepBlue"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-deepBlue rounded-full opacity-10 blur-3xl -z-10 transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-magenta rounded-full opacity-5 blur-3xl -z-10 transform -translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center mr-3">
                <span className="text-2xl font-bold text-deepBlue">IT</span>
              </div>
              <h3 className="text-xl font-bold">InsureTravel</h3>
            </div>
            <p className="text-gray-300 mb-6 text-sm">
              Providing comprehensive travel insurance solutions since 2010. We're committed to protecting your journey with reliable coverage and exceptional service.
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-3 text-magenta" />
                <span className="text-gray-300 text-sm">123 Travel Way, San Francisco, CA 94103</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-magenta" />
                <span className="text-gray-300 text-sm">+1 (800) 123-4567</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-magenta" />
                <span className="text-gray-300 text-sm">info@insuretravel.com</span>
              </div>
            </div>
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com/insuretravel" 
                className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-deepBlue transition-colors"
                aria-label="Facebook"
                rel="noopener noreferrer"
              >
                <Facebook size={16} />
              </a>
              <a 
                href="https://twitter.com/insuretravel" 
                className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-deepBlue transition-colors"
                aria-label="Twitter"
                rel="noopener noreferrer"
              >
                <Twitter size={16} />
              </a>
              <a 
                href="https://instagram.com/insuretravel" 
                className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-deepBlue transition-colors"
                aria-label="Instagram"
                rel="noopener noreferrer"
              >
                <Instagram size={16} />
              </a>
              <a 
                href="https://linkedin.com/company/insuretravel" 
                className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-deepBlue transition-colors"
                aria-label="LinkedIn"
                rel="noopener noreferrer"
              >
                <Linkedin size={16} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="mt-8 md:mt-0">
            <h3 className="text-lg font-semibold mb-6 border-b border-gray-800 pb-2">Insurance Plans</h3>
            <ul className="space-y-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1">
              {insurancePlans.map((plan) => (
                <li key={plan.href}>
                  <a 
                    href={plan.href} 
                    className="text-gray-300 hover:text-white transition-colors text-sm flex items-center"
                  >
                    <span className="w-1.5 h-1.5 bg-magenta rounded-full mr-2"></span>
                    {plan.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Resources */}
          <div className="mt-8 md:mt-0">
            <h3 className="text-lg font-semibold mb-6 border-b border-gray-800 pb-2">Resources</h3>
            <ul className="space-y-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1">
              {resources.map((resource) => (
                <li key={resource.href}>
                  <a 
                    href={resource.href} 
                    className="text-gray-300 hover:text-white transition-colors text-sm flex items-center"
                  >
                    <span className="w-1.5 h-1.5 bg-magenta rounded-full mr-2"></span>
                    {resource.name}
                  </a>
                </li>
              ))}
            </ul>
            
            {/* <div className="mt-6">
              <motion.a 
                href="#quote" 
                className="inline-flex items-center justify-center px-5 py-2.5 bg-magenta text-white rounded-lg text-sm font-medium hover:bg-magenta/90 transition-colors shadow-sm shadow-magenta/20"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Get a Quote
              </motion.a>
            </div> */}
          </div>

          {/* Newsletter Signup */}
          <div className="mt-8 lg:mt-0">
            <h3 className="text-lg font-semibold mb-6 border-b border-gray-800 pb-2">Stay Updated</h3>
            <p className="text-gray-300 mb-4 text-sm">
              Subscribe to our newsletter for the latest travel insurance tips and exclusive offers.
            </p>
            <form onSubmit={handleSubscribe} className="mb-6">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="w-full py-2.5 px-4 pr-12 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-magenta focus:border-magenta text-sm"
                  required
                />
                <button
                  type="submit"
                  className="absolute right-1 top-1/2 transform -translate-y-1/2 p-1.5 rounded-md bg-magenta text-white hover:bg-magenta/90 transition-colors"
                  aria-label="Subscribe"
                >
                  <Send size={16} />
                </button>
              </div>
              {subscribed && (
                <motion.div 
                  className="flex items-center text-blue-500 mt-2 text-xs"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <CheckCircle2 size={14} className="mr-1" />
                  Thank you for subscribing!
                </motion.div>
              )}
            </form>

            {/* Language Selector */}
            <div className="relative mb-6">
              <div 
                className="flex items-center justify-between px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg cursor-pointer"
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              >
                <div className="flex items-center">
                  <Globe size={16} className="mr-2 text-gray-400" />
                  <span className="text-sm text-gray-300">
                    {languages.find(lang => lang.code === language)?.name}
                  </span>
                </div>
                <ChevronDown size={16} className={`text-gray-400 transition-transform ${langDropdownOpen ? 'rotate-180' : ''}`} />
              </div>
              {langDropdownOpen && (
                <div className="absolute z-10 mt-1 w-full bg-gray-800 border border-gray-700 rounded-lg shadow-xl py-1 max-h-48 overflow-auto">
                  {languages.map(lang => (
                    <button
                      key={lang.code}
                      className={cn(
                        "flex items-center w-full px-4 py-2 text-sm text-left hover:bg-gray-700 transition-colors",
                        language === lang.code ? "text-magenta" : "text-gray-300"
                      )}
                      onClick={() => setLanguageHandler(lang.code)}
                    >
                      {lang.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Partner logos section */}
        <div className="mb-12 py-8 border-t border-b border-gray-800">
          <p className="text-center text-gray-400 text-sm mb-6">Trusted by leading travel and insurance partners</p>
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12 ">
            <img src="/images/Manulife.png" alt="Manulife" className="h-12 md:h-12 object-contain" />
            <img src="/images/Sunlife.png" alt="Sun Life" className="h-12 md:h-12 object-contain" />
            <img src="/images/bluecross.png" alt="Blue Cross" className="h-12 md:h-12 object-contain" />
            <img src="/images/Greenshield.png" alt="Green Shield" className="h-12 md:h-12 object-contain" />
            <img src="/images/gms.png" alt="GMS" className="h-12 md:h-12 object-contain" />
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-xs mb-4 md:mb-0">
            © {new Date().getFullYear()} InsureTravel. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-xs">
            <a href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
            <a href="/terms-of-service" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
            <a href="/cookie-policy" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</a>
            <a href="/accessibility" className="text-gray-400 hover:text-white transition-colors">Accessibility</a>
            <a href="/sitemap.xml" className="text-gray-400 hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>

        {/* Mobile fixed bottom nav - visible only on mobile */}
        <div className="md:hidden fixed bottom-0 left-0 right-0 bg-gray-950 border-t border-gray-800 px-2 py-2 flex justify-around z-50">
          <a href="#" className="flex flex-col items-center justify-center text-xs text-gray-400 py-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <span>Home</span>
          </a>
          <a href="#plans" className="flex flex-col items-center justify-center text-xs text-gray-400 py-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            <span>Plans</span>
          </a>
          <button 
            onClick={scrollToTop} 
            className="flex flex-col items-center justify-center text-xs text-magenta py-1 bg-transparent border-none"
          >
            <div className="bg-magenta text-white p-2 rounded-full -mt-6 shadow-lg shadow-magenta/20 border-4 border-gray-950">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            <span className="mt-1">Quote</span>
          </button>
          <a href="#faq" className="flex flex-col items-center justify-center text-xs text-gray-400 py-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>FAQ</span>
          </a>
          <a href="#resources" className="flex flex-col items-center justify-center text-xs text-gray-400 py-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
            </svg>
            <span>Learn</span>
          </a>
        </div>
      </div>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "InsureTravel",
            "url": "https://insuretravel.com",
            "logo": IMAGES.logo.src,
            "sameAs": [
              "https://facebook.com/insuretravel",
              "https://twitter.com/insuretravel",
              "https://instagram.com/insuretravel",
              "https://linkedin.com/company/insuretravel"
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "1-800-INSURANCE",
              "contactType": "customer service",
              "areaServed": "CA",
              "availableLanguage": ["English", "French"]
            }
          })
        }}
      />
    </footer>
  );
};

export default Footer;
