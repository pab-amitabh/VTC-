import React, { memo } from 'react';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { List, ChevronUp } from 'lucide-react';
import { cn } from '@/lib/utils';

type TocItem = {
  id: string;
  text: string;
  level: number;
};

type TableOfContentsProps = {
  containerRef: React.RefObject<HTMLElement>;
  sectionId: string;
  className?: string;
  items?: TocItem[];
};

const PREDEFINED_ITEMS: TocItem[] = [
  { id: 'what-is-travel-insurance', text: 'What is travel insurance?', level: 2 },
  { id: 'why-need-insurance', text: 'Why you need travel insurance', level: 2 },
  { id: 'coverage-requirements', text: 'Coverage Requirements for Different Visitors', level: 2 },
  { id: 'when-to-purchase', text: 'When to Purchase Your Insurance', level: 3 },
  { id: 'pre-existing-conditions', text: 'Pre-existing Conditions and Coverage', level: 3 },
  { id: 'insurance-providers', text: 'Who offers the best travel insurance in Canada?', level: 2 },
  { id: 'testimonials', text: 'Hear it from our users (Reviews)', level: 2 },
  { id: 'resources', text: 'Travel Insurance Resources', level: 2 },
  { id: 'faq', text: 'Frequently Asked Questions', level: 2 },
];

const TableOfContents = ({ containerRef, sectionId, className, items }: TableOfContentsProps) => {
  const [activeId, setActiveId] = useState<string>('');
  const [isOpen, setIsOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  // Use predefined items or custom items if provided
  const tocItems = items || PREDEFINED_ITEMS;

  // Show TOC only after scrolling past the intro section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const whatIsSection = document.getElementById('what-is-travel-insurance');
      
      if (whatIsSection) {
        const sectionTop = whatIsSection.getBoundingClientRect().top + window.pageYOffset - 200;
        setIsVisible(scrollPosition >= sectionTop);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initialize
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Update active heading based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (tocItems.length === 0) return;
      
      // Get all headings from our predefined list that exist in the DOM
      const headingElements = tocItems
        .map(item => ({ item, element: document.getElementById(item.id) }))
        .filter(({ element }) => element !== null);
      
      if (headingElements.length === 0) return;
      
      // Find the first heading that is at or below the top of the viewport
      const scrollPosition = window.scrollY + 100; // Offset for better UX
      
      let activeHeading = headingElements[0].item.id;
      
      for (let i = 0; i < headingElements.length; i++) {
        const { item, element } = headingElements[i];
        if (element && element.offsetTop <= scrollPosition) {
          activeHeading = item.id;
        } else {
          break;
        }
      }
      
      setActiveId(activeHeading);
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initialize
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [tocItems]);

  // Handle mobile detection
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
      // Auto-close on mobile by default
      if (window.innerWidth < 768) {
        setIsOpen(false);
      }
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Adjust based on your header height
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      setActiveId(id);
      
      // On mobile, close the TOC after clicking
      if (isMobile) {
        setIsOpen(false);
      }
    }
  };

  const toggleOpen = () => setIsOpen(!isOpen);

  if (!isVisible) return null;

  return (
    <div 
      className="fixed z-30"
      style={{
        position: 'fixed',
        right: isMobile ? 'auto' : '1.5rem',
        left: isMobile ? '1.5rem' : 'auto',
        top: isMobile ? 'auto' : '6rem',
        bottom: isMobile ? '5rem' : 'auto',
        zIndex: 30,
        width: 'auto',
        maxWidth: '16rem',
      }}
    >
      {/* TOC toggle button */}
      <button
        onClick={toggleOpen}
        className={cn(
          "flex items-center gap-2 px-3 py-2 rounded-full mb-2",
          "bg-magenta text-white shadow-md hover:bg-magenta/90 transition-colors",
          isMobile ? "self-start" : "self-end ml-auto"
        )}
      >
        {isOpen ? <ChevronUp size={16} /> : <List size={16} />}
        <span className="text-sm font-medium">
          {isOpen ? "Hide" : "Contents"}
        </span>
      </button>

      {/* TOC panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden w-full"
            style={{
              position: 'absolute',
              left: isMobile ? '0' : 'auto',
              right: isMobile ? 'auto' : '0',
            }}
          >
            <div className="p-4">
              <h3 className="text-sm font-semibold text-gray-700 mb-3">On this page</h3>
              <ul className="space-y-2 max-h-[60vh] overflow-hidden disable-scroll">
                {tocItems.map((item, index) => (
                  <li 
                    key={index} 
                    style={{ paddingLeft: `${(item.level - 2) * 12}px` }}
                  >
                    <button
                      onClick={() => scrollToHeading(item.id)}
                      className={cn(
                        "text-sm py-1 hover:text-deepBlue transition-colors text-left w-full",
                        activeId === item.id 
                          ? "text-magenta font-medium" 
                          : "text-gray-600"
                      )}
                    >
                      {item.text}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

TableOfContents.displayName = 'TableOfContents';

export default memo(TableOfContents); 