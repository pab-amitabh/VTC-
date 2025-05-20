export const IMAGES = {
  // Logo
  logo: {
    src: '/images/logo.png',
    alt: 'InsureTravel Logo',
    width: 180,
    height: 60,
  },
  
  // Hero Images
  hero: {
    src: '/images/hero.jpg',
    alt: 'Travel with Confidence',
    width: 1920,
    height: 1080,
  },
  
  // Insurance Type Icons
  insuranceTypes: {
    visitor: {
      src: '/images/icons/visitor-insurance.svg',
      alt: 'Visitor Insurance Icon',
      width: 64,
      height: 64,
    },
    superVisa: {
      src: '/images/icons/super-visa-insurance.svg',
      alt: 'Super Visa Insurance Icon',
      width: 64,
      height: 64,
    },
    travelMedical: {
      src: '/images/icons/travel-medical-insurance.svg',
      alt: 'Travel Medical Insurance Icon',
      width: 64,
      height: 64,
    },
    tripCancellation: {
      src: '/images/icons/trip-cancellation-insurance.svg',
      alt: 'Trip Cancellation Insurance Icon',
      width: 64,
      height: 64,
    },
    student: {
      src: '/images/icons/student-insurance.svg',
      alt: 'Student Insurance Icon',
      width: 64,
      height: 64,
    },
  },
  
  // Social Media
  social: {
    facebook: {
      src: '/images/social/facebook.svg',
      alt: 'Follow us on Facebook',
      width: 24,
      height: 24,
    },
    twitter: {
      src: '/images/social/twitter.svg',
      alt: 'Follow us on Twitter',
      width: 24,
      height: 24,
    },
    linkedin: {
      src: '/images/social/linkedin.svg',
      alt: 'Follow us on LinkedIn',
      width: 24,
      height: 24,
    },
  },
  
  // OpenGraph and Social Sharing
  og: {
    default: {
      src: '/images/og/default.jpg',
      alt: 'InsureTravel - Travel Insurance Solutions',
      width: 1200,
      height: 630,
    },
    about: {
      src: '/images/og/about.jpg',
      alt: 'About InsureTravel',
      width: 1200,
      height: 630,
    },
    contact: {
      src: '/images/og/contact.jpg',
      alt: 'Contact InsureTravel',
      width: 1200,
      height: 630,
    },
    blog: {
      src: '/images/og/blog.jpg',
      alt: 'InsureTravel Blog',
      width: 1200,
      height: 630,
    },
  },
  
  // Blog Post Featured Images
  blog: {
    default: {
      src: '/images/blog/default.jpg',
      alt: 'Blog Post Featured Image',
      width: 800,
      height: 450,
    },
  },
} as const

// Image optimization settings
export const IMAGE_SETTINGS = {
  quality: 75,
  loading: 'lazy' as const,
  sizes: {
    hero: '(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px',
    blog: '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px',
    icon: '64px',
    logo: '180px',
  },
} as const 