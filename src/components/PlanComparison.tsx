import React, { useState, useContext, useEffect, memo } from 'react';
import { motion } from 'framer-motion';
import { 
  ChevronDown, 
  Star, 
  Pill, 
  Building2, 
  Stethoscope, 
  UserRound, 
  Smile,
  Eye,
  Plus,
  Minus
} from 'lucide-react';
import { cn } from '@/lib/utils';
import CustomerInfoForm from './CustomerInfoForm';
import DOMPurify from 'dompurify';
import { createPortal } from 'react-dom';
import { getRedirectionUrl } from '@/constants/redirectLinks';

// Create context for quote data in app.tsx
export const QuoteContext = React.createContext<any>(null);

type PlanFeature = {
  type: 'Medication' | 'Hospitalization' | 'Complementary care' | 'Health Professional' | 'Dental Care' | 'Stable Pre-existing Conditions';
  description: string;
  icon: React.ElementType;
};

// Add onModifySearch prop
interface PlanComparisonProps {
  onModifySearch?: () => void;
}

type InsurancePlan = {
  id: string;
  name: string;
  provider: string;
  logo: string;
  price: string;
  pricePerMonth: string;
  rating: number;
  recommended: boolean;
  websiteUrl?: string;
  features: {
    [key: string]: {
      description: string;
    }
  };
  additionalInfo: {
    preExisting: string;
    preExistingText: string;
    maxAge: string;
    keyFeatures: string;
    familyPlan?: string;
    extractedKeyFeatures: string[];
    underwrittenBy: string;
    maxDependentAge: string;
  };
  brochure_url?: string;
  policy_document_url?: string;
};

const iconMapping = {
  'Medication': Pill,
  'Hospitalization': Building2,
  'Complementary care': Stethoscope,
  'Health Professional': UserRound,
  'Dental Care': Smile,
  'Stable Pre-existing Conditions': UserRound
};

// Mock insurance plans data for default display
const mockInsurancePlans: InsurancePlan[] = [
  {
    id: 'plan1',
    name: 'Visitors to Canada Plan B',
    provider: 'Manulife',
    logo: '/images/Manulife.png',
    price: '$XXX',
    pricePerMonth: '$XX per month',
    rating: 5,
    recommended: true,
    brochure_url: '',
    policy_document_url: '',
    features: {
      'Medication': {
        description: 'Reasonable and customary charges',
      },
      'Hospitalization': {
        description: 'Semi-private room',
      },
      'Complementary care': {
        description: 'Multiple follow-up visits during an emergency',
      },
      'Health Professional': {
        description: 'Up to $700',
      },
      'Dental Care': {
        description: 'Up to $4000 for accidental blow and $300 for emergency',
      },
      'Stable Pre-existing Conditions': {
        description: 'Included',
      },
    },
    additionalInfo: {
      preExisting: 'Yes',
      preExistingText: 'Included',
      maxAge: 'N/A',
      keyFeatures: '<ul>\n<li>Comprehensive Plan</li>\n<li>Semi-private Hospital Cover Charges (Multiple follow-up visits during an emergency)</li>\n<li>Prescription Drugs: Reasonable and customary charges</li>\n<li>Dental: Up to $4000 for accidental blow and $300 for emergency treatment</li>\n<li>Professional services: Up to $700</li>\n<li>AD&amp;D benefits: Up to $50,000</li>\n<li>Meals &amp; Accommodation Allowance (if hospitalized beyond scheduled return date): $150/day up to $1,500</li>\n<li>Bedside Companion Allowance: Return economy class airfare up to $3,000 + upto $500</li>\n</ul>\n',
      familyPlan: 'No family plans',
      extractedKeyFeatures: [
        'Comprehensive Plan',
        'Semi-private Hospital Cover Charges (Multiple follow-up visits during an emergency)',
        'Prescription Drugs: Reasonable and customary charges',
        'Dental: Up to $4000 for accidental blow and $300 for emergency treatment',
        'Professional services: Up to $700',
        'AD&amp;D benefits: Up to $50,000',
        'Meals & Accommodation Allowance (if hospitalized beyond scheduled return date): $150/day up to $1,500',
        'Bedside Companion Allowance: Return economy class airfare up to $3,000 + upto $500'
      ],
      underwrittenBy: 'Manulife/ Global Excel Management',
      maxDependentAge: '0'
    }
  },
  {
    id: 'plan2',
    name: 'Visitors to Canada',
    provider: 'Allianz',
    logo: 'https://qa.policyadvisor.ca/uploads/core/company/logo/39/ALNZ.png',
    price: '$XXX',
    pricePerMonth: '$XX per month',
    rating: 5,
    recommended: false,
    brochure_url: 'https://content.policyadvisor.com/uploads/Allianz_VTC_Product_Brochure_29_May2023_7f159be026.pdf',
    policy_document_url: 'https://content.policyadvisor.com/uploads/Allianz_VTC_Policy_Wording_29_May2023_9401d92005.pdf',
    features: {
      'Medication': {
        description: 'Max 30-day supply up to $1000',
      },
      'Hospitalization': {
        description: 'Semi-Private Cover',
      },
      'Complementary care': {
        description: 'Included',
      },
      'Health Professional': {
        description: 'Up to $500/practitioner',
      },
      'Dental Care': {
        description: 'Up to $4000 for accidental blow and $500 for emergency',
      },
      'Stable Pre-existing Conditions': {
        description: 'Included (Stability 90 days for 0-59 age, Stability 180 days for 60-89)',
      },
    },
    additionalInfo: {
      preExisting: 'Yes',
      preExistingText: 'Stability 90 days for 0-59 age, Stability 180 days for 60-89',
      maxAge: '59',
      keyFeatures: '<ul>\n<li>Comprehensive Plan</li>\n<li>Semi-Private Cover Charges (Follow-up visits as prescribed by the attending physician)</li>\n<li>Prescription Drugs: Max 30-day supply up to $1000 </li>\n<li>Dental: Up to $4000 for accidental blow and $500 for emergency treatment</li>\n<li>Professional services: Up to $500/practitioner</li>\n<li>AD&amp;D benefits: Up to coverage amount</li>\n<li>Meals &amp; Accommodation Allowance (if hospitalized beyond scheduled return date): $150/day up to $1500 or 10 days max</li>\n<li>Bedside Companion Allowance: Return economy class airfare up to $3000 + upto $1000</li>\n</ul>\n',
      familyPlan: 'No family plans',
      extractedKeyFeatures: [
        'Comprehensive Plan',
        'Semi-Private Cover Charges (Follow-up visits as prescribed by the attending physician)',
        'Prescription Drugs: Max 30-day supply up to $1000',
        'Dental: Up to $4000 for accidental blow and $500 for emergency treatment',
        'Professional services: Up to $500/practitioner',
        'AD&amp;D benefits: Up to coverage amount',
        'Meals & Accommodation Allowance (if hospitalized beyond scheduled return date): $150/day up to $1500 or 10 days max',
        'Bedside Companion Allowance: Return economy class airfare up to $3000 + upto $1000'
      ],
      underwrittenBy: 'CUMIS/ Allianz',
      maxDependentAge: '21'
    }
  },
  {
    id: 'plan3',
    name: 'Immigrants & Visitors to Canada',
    provider: 'GMS',
    logo: '/images/gms.png',
    price: '$XXX',
    pricePerMonth: '$XX per month',
    rating: 4.5,
    recommended: false,
    brochure_url: '',
    policy_document_url: '',
    features: {
      'Medication': {
        description: 'Max 30-day supply up to coverage amt.',
      },
      'Hospitalization': {
        description: 'Semi-private Hospital Cover',
      },
      'Complementary care': {
        description: 'Included',
      },
      'Health Professional': {
        description: 'Up to $500',
      },
      'Dental Care': {
        description: 'Up to $2000 for accidental blow and $300 for emergency',
      },
      'Stable Pre-existing Conditions': {
        description: 'Included',
      },
    },
    additionalInfo: {
      preExisting: 'Yes',
      preExistingText: 'Included',
      maxAge: '90',
      keyFeatures: '<ul>\n<li>Comprehensive Plan</li>\n<li>Semi-private Hospital Cover Charges (Multiple follow-up visits during emergency &amp; 1 visit post-emergency)</li>\n<li>Prescription Drugs: Max 30-day supply up to coverage amt. </li>\n<li>Dental: Up to $2000 for accidental blow and $300 for emergency treatment</li>\n<li>Professional services: Up to $500</li>\n<li>AD&amp;D benefits: Not included</li>\n<li>Meals &amp; Accommodation Allowance (if hospitalized beyond scheduled return date): $150/day up to $1000</li>\n<li>Bedside Companion Allowance: Not available</li>\n</ul>\n',
      familyPlan: 'Family plans available',
      extractedKeyFeatures: [
        'Comprehensive Plan',
        'Semi-private Hospital Cover Charges (Multiple follow-up visits during emergency & 1 visit post-emergency)',
        'Prescription Drugs: Max 30-day supply up to coverage amt.',
        'Dental: Up to $2000 for accidental blow and $300 for emergency treatment',
        'Professional services: Up to $500',
        'AD&amp;D benefits: Not included',
        'Meals & Accommodation Allowance (if hospitalized beyond scheduled return date): $150/day up to $1000',
        'Bedside Companion Allowance: Not available'
      ],
      underwrittenBy: 'GMS/ World Travel Protection (WTP)',
      maxDependentAge: '18'
    }
  },
  {
    id: 'plan4',
    name: 'Destination: Canada Visitors Plan - Option 2',
    provider: 'Destination Canada',
    logo: 'https://qa.policyadvisor.ca/uploads/core/company/logo/43/DSTN.png',
    price: '$XXX',
    pricePerMonth: '$XX per month',
    rating: 4,
    recommended: false,
    brochure_url: 'https://content.policyadvisor.com/uploads/Destination_Canada_Product_Brochure_0125_80767c4995.pdf',
    policy_document_url: 'https://content.policyadvisor.com/uploads/Destination_Canada_Sample_Policy_EN_0125_8ca721a6a2.pdf',
    features: {
      'Medication': {
        description: 'Max 30-day supply up to $1000',
      },
      'Hospitalization': {
        description: 'Semi-Private Cover',
      },
      'Complementary care': {
        description: 'Included',
      },
      'Health Professional': {
        description: 'Up to $500/practitioner',
      },
      'Dental Care': {
        description: 'Up to $3000 for accidental blow and $500 for emergency',
      },
      'Stable Pre-existing Conditions': {
        description: 'Not included',
      },  
    },
    additionalInfo: {
      preExisting: 'No',
      preExistingText: 'Not included',
      maxAge: '59',
      keyFeatures: '<ul>\n<li>Comprehensive Plan</li>\n<li>Semi-Private Cover Charges (Follow-up visits if prescribed up to $3,000 to monitor the effects of earlier treatment directly related to an initial emergency, except while hospitalized)</li>\n<li>Prescription Drugs: Max 30-day supply up to $1000 </li>\n<li>Dental: Up to $3000 for accidental blow and $500 for emergency treatment</li>\n<li>Professional services: Up to $500/practitioner</li>\n<li>AD&amp;D benefits: Up to $150,000</li>\n<li>Meals &amp; Accommodation Allowance (if hospitalized beyond scheduled return date): $150/day up to $1,500 or 10 days max </li>\n<li>Bedside Companion Allowance: Return economy class airfare up to $3,000 + upto $1,000</li>\n</ul>\n',
      familyPlan: 'Family plans available',
      extractedKeyFeatures: [
        'Comprehensive Plan',
        'Semi-Private Cover Charges (Follow-up visits if prescribed up to $3,000 to monitor the effects of earlier treatment directly related to an initial emergency, except while hospitalized)',
        'Prescription Drugs: Max 30-day supply up to $1000',
        'Dental: Up to $3000 for accidental blow and $500 for emergency treatment',
        'Professional services: Up to $500/practitioner',
        'AD&amp;D benefits: Up to $150,000',
        'Meals & Accommodation Allowance (if hospitalized beyond scheduled return date): $150/day up to $1,500 or 10 days max',
        'Bedside Companion Allowance: Return economy class airfare up to $3,000 + upto $1,000'
      ],
      underwrittenBy: 'Zurich Travel Assist',
      maxDependentAge: '25'
    }
  },
  
];

// Utility function to convert HTML entities to plain text
const decodeHtmlEntities = (html: string): string => {
  const txt = document.createElement('textarea');
  txt.innerHTML = html;
  return txt.value;
};

// Utility function to sanitize and convert HTML to markdown
const htmlToMarkdown = (html: string): string => {
  if (!html) return '';
  
  // First sanitize the HTML
  const sanitizedHtml = DOMPurify.sanitize(html);
  
  // Then decode HTML entities
  let markdown = decodeHtmlEntities(sanitizedHtml);
  
  // Replace common HTML entities that might still be present
  markdown = markdown
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&ndash;/g, '–')
    .replace(/&mdash;/g, '—')
    .replace(/&nbsp;/g, ' ');

  markdown = markdown.replace(/<br\s*\/?>/gi, '\n');

  markdown = markdown.replace(/<p[^>]*>.*?<\/p>/gi, '');

  markdown = markdown.replace(/<[^>]*>/g, '');

  markdown = markdown.replace(/\n\s*\n/g, '\n\n');

  markdown = markdown.trim();
    
  return markdown;
};

// Utility function to format feature descriptions
const formatFeatureDescription = (description: string): string => {
  // Add comma after numbers only if they're not at the end of the string
  return description.replace(/(\d+)(?!\s*,)(?=\s+\w)/g, '$1,');
};

// Utility function to format provider name for URL
const formatProviderUrl = (provider: string): string => {
  return provider.toLowerCase().replace(/\s+/g, '-');
};

// Function to convert API quotes to InsurancePlan format
const convertApiQuotesToPlans = (quotes: any): InsurancePlan[] => {
  console.log('Converting API quotes to plans:', quotes);
  
  if (!quotes || !quotes.travel_quotes || !quotes.travel_quotes.quotes) {
    console.log('No valid quotes found, returning mock plans');
    return mockInsurancePlans;
  }
  
  if (quotes.travel_quotes.quotes.length === 0) {
    console.log('Empty quotes array, returning empty array');
    return [];
  }

  // Get monthly payment preference from form data
  const isMonthlyPayment = quotes.formData?.monthlyPayment || false;
  console.log('Monthly payment preference:', isMonthlyPayment);

  console.log('Found quotes to convert:', quotes.travel_quotes.quotes.length);
  
  return quotes.travel_quotes.quotes.map((quote: any, index: number) => {
    // Extract star rating from product attributes if available
    const starRating = 
      quote.product_attributes?.star_rating ? 
      parseFloat(quote.product_attributes.star_rating) : 
      (quote.star_rating ? parseFloat(quote.star_rating) : 4.0);
    
    // Use company_short_name if available, otherwise try company_code
    const providerName = quote.company_short_name || quote.company_code || 'Insurance Provider';
    
    console.log(`Provider for plan ${quote.product_name}: ${providerName}, websiteUrl: ${quote.trv_redirection_companywebsite_url || 'null/undefined'}`);
    
    // Parse the key features HTML to extract specific features
    let keyFeatures: Record<string, { description: string }> = {
      'Medication': { description: 'Not specified' },
      'Hospitalization': { description: 'Not specified' },
      'Complementary care': { description: 'Not specified' },
      'Health Professional': { description: 'Not specified' },
      'Dental Care': { description: 'Not specified' },
      'Stable Pre-existing Conditions': { description: 'Not specified' }
    };

    // Parse the trv_key_features HTML to extract feature details
    if (quote.trv_key_features) {
      // Extract prescription drug info
      if (quote.trv_key_features.includes('Prescription Drugs')) {
        const match = quote.trv_key_features.match(/Prescription Drugs:(.+?)(<\/li>|$)/i);
        keyFeatures['Medication'].description = match ? htmlToMarkdown(match[1].trim()) : 'Included';
      }
      
      // Extract hospitalization info
      if (quote.trv_key_features.includes('Hospital')) {
        const match = quote.trv_key_features.match(/Hospital(?:ization)?:?\s*(.+?)(<\/li>|$)/i);
        keyFeatures['Hospitalization'].description = match ? htmlToMarkdown(match[1].trim()) : 'Included';
      }
      
      // Extract professional services info
      if (quote.trv_key_features.includes('Professional services')) {
        const match = quote.trv_key_features.match(/Professional services:(.+?)(<\/li>|$)/i);
        keyFeatures['Health Professional'].description = match ? htmlToMarkdown(match[1].trim()) : 'Included';
      }
      
      // Extract dental info
      if (quote.trv_key_features.includes('Dental')) {
        const match = quote.trv_key_features.match(/Dental:(.+?)(<\/li>|$)/i);
        keyFeatures['Dental Care'].description = quote.trv_key_features.includes('Not included') ? 
          'Not included' : (match ? htmlToMarkdown(match[1].trim()) : 'Included');
      }

      // Extract pre-existing conditions info
      keyFeatures['Stable Pre-existing Conditions'].description = quote.trv_covers_pre_existing === "Yes" ? 
        'Included' : 
        'Not included';

      // Extract "Complementary care" - could be diagnostic services or other
      if (quote.trv_key_features.includes('diagnostic')) {
        const match = quote.trv_key_features.match(/diagnostic\s*(.+?)(<\/li>|$)/i);
        keyFeatures['Complementary care'].description = match ? htmlToMarkdown(match[1].trim()) : 'Included';
      } else if (quote.trv_key_features.includes('Comprehensive Plan')) {
        keyFeatures['Complementary care'].description = 'Included in plan';
      }
    }
    
    // Extract key features for expanded view
    const extractedKeyFeatures = [];
    if (quote.trv_key_features) {
      // Simple extraction of list items
      const liMatches = quote.trv_key_features.match(/<li>(.+?)<\/li>/g);
      if (liMatches) {
        extractedKeyFeatures.push(...liMatches.map((li: string) => {
          const cleanedLi = li.replace(/<\/?li>/g, '').trim();
          return htmlToMarkdown(cleanedLi);
        }));
      }
    }
    
    // Use API-provided logo when available, fallback to local images only when needed
    let logoPath = '';
    const companyName = quote.company_short_name?.toLowerCase() || '';
    
    if (quote.company_logo) {
      // Prioritize the logo from the API response
      logoPath = `https://qa.policyadvisor.ca${quote.company_logo}`;
    } else if (companyName.includes('manulife')) {
      logoPath = '/images/Manulife.png';
    } else if (companyName.includes('sun') || companyName.includes('sunlife')) {
      logoPath = '/images/Sunlife.png';
    } else if (companyName.includes('blue') || companyName.includes('cross') || companyName.includes('shield')) {
      logoPath = '/images/bluecross.png';
    } else if (companyName.includes('green') || companyName.includes('shield')) {
      logoPath = '/images/Greenshield.png';
    } else if (companyName.includes('21st century')) {
      logoPath = '/images/Manulife.png'; // May need a different logo
    } else if (companyName.includes('secure travel')) {
      logoPath = '/images/Sunlife.png'; // May need a different logo
    } else if (companyName.includes('gms')) {
      logoPath = '/images/bluecross.png'; // May need a different logo
    } else if (companyName.includes('msh')) {
      logoPath = '/images/Greenshield.png'; // May need a different logo
    } else {
      logoPath = 'https://via.placeholder.com/150x50?text=Insurance';
    }
    return {
      id: quote.product_code || `plan${index + 1}`,
      name: quote.product_name || 'Insurance Plan',
      provider: providerName,
      logo: logoPath,
      price: (() => {
        // Case 3: Monthly payment selected and available
        if (isMonthlyPayment && quote.trv_monthly_option_available === "yes" && quote.monthly_option_premiums) {
          return typeof quote.monthly_option_premiums === 'object' 
            ? `$${quote.monthly_option_premiums.monthly_payment}`
            : `$${quote.monthly_option_premiums}`;
        }
        
        // Case 2: Monthly payment not selected but available
        if (!isMonthlyPayment && quote.trv_monthly_option_available === "yes" && quote.monthly_option_premiums) {
          return quote.total_premium || '$0.00';
        }
        
        // Case 1: No monthly payment or not available
        return quote.total_premium || '$0.00';
      })(),
      pricePerMonth: (() => {
        // Case 3: Monthly payment selected and available
        if (isMonthlyPayment && quote.trv_monthly_option_available === "yes" && quote.monthly_option_premiums) {
          return typeof quote.monthly_option_premiums === 'object'
            ? `$${quote.monthly_option_premiums.initial_payment} initial deposit`
            : `${quote.monthly_option_premiums} initial deposit`;
        }
        
        // Case 2: Monthly payment not selected but available
        if (!isMonthlyPayment && quote.trv_monthly_option_available === "yes" && quote.monthly_option_premiums) {
          return typeof quote.monthly_option_premiums === 'object'
            ? `$${quote.monthly_option_premiums.monthly_payment}/month + setup charges`
            : `${quote.monthly_option_premiums} + setup charges`;
        }
        
        // Case 1: No monthly payment or not available
        return null;
      })(),
      rating: starRating,
      recommended: false,
      features: keyFeatures,
      websiteUrl: quote.trv_redirection_companywebsite_url || undefined,
      brochure_url: quote.brochure_url || '',
      policy_document_url: quote.policy_document_url || '',
      // Include expanded details from the actual API response
      additionalInfo: {
        preExisting: quote.trv_covers_pre_existing || 'No',
        preExistingText: quote.trv_pre_existing_text || 'No coverage for pre-existing conditions',
        maxAge: quote.trv_max_eldest_age || 'Contact for details',
        keyFeatures: quote.trv_key_features || '<p>Contact provider for detailed coverage information.</p>',
        familyPlan: quote.trv_family_plan_allowed === "Yes" ? "Family plans available" : "No family plans",
        extractedKeyFeatures: extractedKeyFeatures,
        underwrittenBy: quote.trv_underwritten_claim || 'Contact provider for details',
        maxDependentAge: quote.trv_max_dependentchild_age || 'N/A'
      }
    };
  });
};

// Function to track buy now clicks
const trackBuyNowClick = async (
  providerName: string, 
  planName: string, 
  isMockData: boolean,
  customerName?: string,
  customerPhone?: string,
  customerEmail?: string,
  trackingId?: string,
  province?: string
) => {
  // Don't track clicks for mock data as requested
  if (isMockData) {
    console.log('Click on mock data - not tracking as requested');
    return null;
  }

  try {
    console.log('Tracking click for REAL data:', providerName, planName);
    console.log('API request payload:', JSON.stringify({
      providerName,
      planName,
      province,
      ...(customerName && { customerName }),
      ...(customerPhone && { customerPhone }),
      ...(customerEmail && { customerEmail }),
      ...(trackingId && { trackingId })
    }));
    
    const response = await fetch('/api/clickTracker', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        providerName,
        planName,
        province,
        ...(customerName && { customerName }),
        ...(customerPhone && { customerPhone }),
        ...(customerEmail && { customerEmail }),
        ...(trackingId && { trackingId })
      }),
    });
    
    console.log('API response status:', response.status);
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error('Failed to track click:', errorText);
      return null;
    } else {
      const result = await response.json();
      console.log('Click tracked successfully:', result);
      return result.trackingId || null;
    }
  } catch (error) {
    console.error('Error tracking click:', error);
    return null;
  }
};

// Add function to get logo dimensions based on company name
const getLogoDimensions = (provider: string, isApiData: boolean) => {
  if (!isApiData) {
    // Mock data - use original sizing
    return {
      maxWidth: '100%',
      maxHeight: '100%'
    };
  }
  
  // Base API dimensions (previously 189px x 68px)
  const baseDimensions = { width: 189, height: 68 };
  
  // Company-specific scaling factors - MOBILE ONLY
  const scalingFactors: { [key: string]: number } = {
    'travelance': 1.25,    // 25% increase
    'secure travel': 1.15, // 15% increase  
    'manulife': 1.12,      // 12% increase
    'gms': 1.10           // 10% increase
  };
  
  const providerKey = provider.toLowerCase();
  const scaleFactor = scalingFactors[providerKey] || 1.0; // Default to no scaling for other providers
  
  return {
    // Desktop: Use original API dimensions
    width: `${baseDimensions.width}px`,
    height: `${baseDimensions.height}px`,
    maxWidth: `${baseDimensions.width}px`,
    maxHeight: `${baseDimensions.height}px`,
    // Mobile: Use scaled dimensions via CSS custom properties
    '--mobile-width': `${Math.round(baseDimensions.width * scaleFactor)}px`,
    '--mobile-height': `${Math.round(baseDimensions.height * scaleFactor)}px`,
    '--mobile-max-width': `${Math.round(baseDimensions.width * scaleFactor)}px`,
    '--mobile-max-height': `${Math.round(baseDimensions.height * scaleFactor)}px`
  };
};

const PlanComparison = ({ onModifySearch }: PlanComparisonProps) => {
  const [expandedPlans, setExpandedPlans] = useState<Record<string, boolean>>({});
  const [expandedFeatures, setExpandedFeatures] = useState<Record<string, boolean>>({});
  const [showAllPlans, setShowAllPlans] = useState<boolean>(false);
  const [showCustomerInfoForm, setShowCustomerInfoForm] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<{ 
    provider: string; 
    name: string; 
    url?: string;
    trackingId?: string;
  } | null>(null);
  const [showMobileDetailsPopup, setShowMobileDetailsPopup] = useState(false);
  const [selectedMobileDetailsPlan, setSelectedMobileDetailsPlan] = useState<InsurancePlan | null>(null);
  
  const quoteData = useContext(QuoteContext);
  
  // Debug section to display form data
  useEffect(() => {
    if (quoteData?.formData) {
      console.log('Form data in PlanComparison::::::::::', quoteData.formData);
      // Access monthlyPayment value
      const isMonthlyPayment = quoteData.formData.monthlyPayment;
      console.log('Monthly Payment option selected:', isMonthlyPayment);
    }
  }, [quoteData]);

  // Access selected province from the form context
  const formProvinceContext = quoteData?.formData?.province || 'Ontario';
  
  // Access monthlyPayment value
  const isMonthlyPayment = quoteData?.formData?.monthlyPayment || false;
  
  // Check if we have an actual search with empty quotes array (vs null initial state)
  const hasEmptyQuotes = quoteData && 
                         quoteData.travel_quotes && 
                         Array.isArray(quoteData.travel_quotes.quotes) && 
                         quoteData.travel_quotes.quotes.length === 0;
  
  // Check if we have an error response
  const hasError = quoteData && quoteData.status === "error";
  
  // Logic for which plans to display:
  // 1. If hasEmptyQuotes true -> No search results found -> Show "No plans found" message (empty array)
  // 2. If quoteData null -> Initial state or reset -> Show mock plans
  // 3. Otherwise -> Show API results (or mock plans if API didn't return valid data)
  let allInsurancePlans: InsurancePlan[] = [];
  
  if (hasEmptyQuotes) {
    // Empty search results - show no plans
    allInsurancePlans = [];
    console.log('Using empty array for plans due to empty quotes');
  } else if (quoteData === null) {
    // Initial state - show mock plans
    allInsurancePlans = mockInsurancePlans;
    console.log('Using mock plans for initial state');
  } else {
    // Search results - convert API quotes
    allInsurancePlans = convertApiQuotesToPlans(quoteData);
    console.log('Using API quotes converted to plans');
  }
  
  // Debug what plans we're showing
  console.log('hasEmptyQuotes:', hasEmptyQuotes);
  console.log('hasError:', hasError);
  console.log('allInsurancePlans length:', allInsurancePlans.length);
  
  // Limit to 6 plans initially
  const visiblePlans = showAllPlans ? allInsurancePlans : allInsurancePlans.slice(0, 6);
  console.log('visiblePlans length:', visiblePlans.length);
  console.log('showAllPlans:', showAllPlans);
  const hasMorePlans = allInsurancePlans.length > 6;

  const togglePlanDetails = (planId: string) => {
    // Check if we're on mobile (screen width less than 768px)
    const isMobile = window.innerWidth < 768;
    
    if (isMobile) {
      // On mobile, show popup instead of expanding
      const plan = allInsurancePlans.find(p => p.id === planId);
      if (plan) {
        setSelectedMobileDetailsPlan(plan);
        setShowMobileDetailsPopup(true);
        document.body.style.overflow = 'hidden';
      }
    } else {
      // On desktop, keep the original expand behavior
      setExpandedPlans(prev => ({
        ...prev,
        [planId]: !prev[planId]
      }));
    }
  };

  const closeMobileDetailsPopup = () => {
    document.body.style.overflow = '';
    setShowMobileDetailsPopup(false);
    setTimeout(() => {
      setSelectedMobileDetailsPlan(null);
    }, 100);
  };

  const toggleFeatures = (planId: string) => {
    setExpandedFeatures(prev => ({
      ...prev,
      [planId]: !prev[planId]
    }));
  };
  
  const handleShowMorePlans = () => {
    // Simply toggle the state directly - the previous approach using prev might have issues with closures
    setShowAllPlans(!showAllPlans);
    console.log('toggleShowAllPlans to:', !showAllPlans);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  // Animation variants for individual cards
  const cardVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeInOut"
      }
    }
  };

  // Define essential categories that will be shown by default
  const essentialCategories = ['Medication', 'Hospitalization', 'Complementary care'];

  // Handle modify search click
  const handleModifySearchClick = () => {
    // Scroll to top with a smooth animation
    window.scrollTo({top: 0, behavior: 'smooth'});
    
    // Call the callback if provided
    if (onModifySearch) {
      onModifySearch();
    }
  };

  // Handle buy now button click
  const handleBuyNowClick = (plan: InsurancePlan) => {
    // Check if we're using mock data (when quoteData is null)
    const isMockData = quoteData === null;
    console.log('Buy Now clicked for:', plan.provider, plan.name);
    console.log('Original websiteUrl:', plan.websiteUrl || 'null/undefined');
    
    // For mock data, redirect immediately
    if (isMockData) {
      // Get the redirection URL (either the provided one or fallback)
      const redirectUrl = getRedirectionUrl(plan.provider, plan.websiteUrl);
      console.log('Using redirect URL (mock data):', redirectUrl);
      
      // Open the URL if it's valid
      if (redirectUrl && redirectUrl !== '#') {
        window.open(redirectUrl, '_blank');
      }
      return;
    }
    
    // Make sure any previous modal is fully closed
    if (showCustomerInfoForm) {
      // First close the existing modal
      document.body.style.overflow = '';
      setShowCustomerInfoForm(false);
      setSelectedPlan(null);
      
      // Then open the new one after a short delay
      setTimeout(() => {
        openModal(plan);
      }, 100);
    } else {
      // First time opening - no need for delay
      openModal(plan);
    }
  };

  // Helper function to open the modal with a plan
  const openModal = (plan: InsurancePlan) => {
    // For real data, show the form immediately and ensure it's visible
    // Use the fallback URL if needed
    console.log('Opening modal for:', plan.provider, 'Original URL:', plan.websiteUrl || 'null/undefined');
    const url = getRedirectionUrl(plan.provider, plan.websiteUrl);
    console.log('Setting URL for form:', url);
    
    setSelectedPlan({
      provider: plan.provider,
      name: plan.name,
      url: url
    });
    
    // Stop scrolling when modal is open
    document.body.style.overflow = 'hidden';
    
    // Show the form immediately 
    setShowCustomerInfoForm(true);
    
    // Then track click in the background (non-blocking)
    const isMockData = false; // Real data, not mock
    trackBuyNowClick(plan.provider, plan.name, isMockData, undefined, undefined, undefined, undefined, formProvinceContext)
      .then(trackingId => {
        // Update the tracking ID once we have it
        if (trackingId) {
          console.log('Updated tracking ID:', trackingId);
          setSelectedPlan(prev => prev ? {...prev, trackingId} : null);
        }
      })
      .catch(error => {
        console.error("Error tracking initial click:", error);
      });
  };
  
  // Handle form submission with customer data
  const handleCustomerInfoSubmit = async (name: string, phone: string, email: string) => {
    if (!selectedPlan) return;
    
    try {
      console.log('Submitting customer info:', name, phone, email);
      
      // Track click again with customer info and tracking ID
      await trackBuyNowClick(
        selectedPlan.provider, 
        selectedPlan.name, 
        false, // Not mock data
        name,
        phone,
        email,
        selectedPlan.trackingId,
        formProvinceContext
      );
      
      console.log('Customer info submitted successfully');
      
      // The form component will handle redirection to the insurance URL
    } catch (error) {
      console.error('Error submitting customer info:', error);
      // Let the form handle the error
      throw error;
    }
  };
  
  // Close the form without submitting
  const handleCloseForm = () => {
    // First enable scrolling
    document.body.style.overflow = '';
    
    // Then close the modal
    setShowCustomerInfoForm(false);
    
    // Clear the plan data with a small delay to avoid state conflicts
    setTimeout(() => {
      setSelectedPlan(null);
    }, 100);
  };

  // Add state for portal root
  const [portalRoot, setPortalRoot] = useState<HTMLElement | null>(null);
  
  // Set up the portal root once the component mounts (client-side only)
  useEffect(() => {
    setPortalRoot(document.body);
  }, []);

  // Clean up scroll lock when component unmounts or when modals change
  useEffect(() => {
    const restoreScroll = () => {
      document.body.style.overflow = '';
    };

    // Cleanup on unmount
    return restoreScroll;
  }, []);

  // Restore scroll when modals close
  useEffect(() => {
    if (!showMobileDetailsPopup && !showCustomerInfoForm) {
      document.body.style.overflow = '';
    }
  }, [showMobileDetailsPopup, showCustomerInfoForm]);

  // Handle window resize - close mobile popup if screen becomes desktop
  useEffect(() => {
    const handleResize = () => {
      if (showMobileDetailsPopup && window.innerWidth >= 768) {
        closeMobileDetailsPopup();
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [showMobileDetailsPopup]);

  return (
    <>
      <section className="pt-6 md:pt-8 py-8 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto" id="plans">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 text-gray-900">
            {quoteData === null ? 'Top Insurance Providers' : 'Compare Insurance Plans'}
          </h2>
        </div>
        
        {hasError ? (
          <div className="bg-white rounded-xl shadow-md p-8 text-center border border-gray-200">
            <h3 className="text-xl font-medium text-red-600 mb-4">Unable to fetch insurance quotes</h3>
            <p className="text-gray-600 mb-6">We encountered an error while fetching insurance quotes. Please try again with different parameters or try again later.</p>
            <button 
              onClick={handleModifySearchClick}
              className="px-8 py-4 bg-deepBlue text-white rounded-lg font-medium hover:bg-deepBlue/90 transition-colors shadow-md transform hover:scale-105 active:scale-95"
            >
              Try with different criteria
            </button>
          </div>
        ) : hasEmptyQuotes ? (
          <div className="bg-white rounded-xl shadow-md p-8 text-center border border-gray-200">
            <h3 className="text-xl font-medium text-gray-900 mb-4">No plans found</h3>
            <p className="text-gray-600 mb-6">We couldn't find any insurance plans for your search criteria. Please try adjusting your travel details or coverage options.</p>
            <button 
              onClick={handleModifySearchClick}
              className="px-8 py-4 bg-deepBlue text-white rounded-lg font-medium hover:bg-deepBlue/90 transition-colors shadow-md transform hover:scale-105 active:scale-95"
            >
              Adjust your search criteria
            </button>
          </div>
        ) : (
          <>
            <div className="space-y-8">
              {visiblePlans.map((plan, index) => (
                <motion.div
                  key={plan.id}
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ 
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: "easeOut"
                  }}
                  className="bg-white rounded-xl shadow-md overflow-hidden border border-deepBlue ring-1 ring-deepBlue hover:shadow-lg"
                >
                  <div className="relative">
                    <div className="p-5">
                      {/* Plan name at the top */}
                      <h3 className="text-xl font-bold text-deepBlue mb-4 md:mb-2 pl-2">{plan.name}</h3>
                      
                      <div className="flex flex-wrap md:flex-nowrap">
                        {/* Logo and rating column */}
                        <div className="w-full md:w-48 flex flex-col items-center md:items-center mb-6 md:mb-0 md:pr-6">
                          <div className="w-full h-40 flex items-center justify-center mb-0 md:mb-4">
                          <a href={`/${formatProviderUrl(plan.provider)}`} target="_blank" rel="noopener noreferrer">
                            <img 
                              src={plan.logo} 
                              alt={`${plan.provider} logo`} 
                              className="object-contain px-2 mobile-logo-scaling" 
                              style={getLogoDimensions(plan.provider, quoteData !== null)}
                            />
                          </a>
                          </div>
                          <div className="flex items-center mb-1 justify-center">
                            <div className="font-bold text-lg mr-1">{plan.rating}</div>
                            {Array(5).fill(0).map((_, i) => {
                              const rating = plan.rating;
                              const fullStar = i < Math.floor(rating);
                              const halfStar = !fullStar && (i < Math.ceil(rating) && rating % 1 !== 0);
                              
                              return (
                                <div key={i} className="relative">
                                  <Star 
                                    className={cn(
                                      "w-5 h-5",
                                      fullStar ? "text-yellow-400 fill-yellow-400" : "text-gray-200"
                                    )}
                                  />
                                  {halfStar && (
                                    <div className="absolute inset-0 overflow-hidden" style={{ width: '50%' }}>
                                      <Star 
                                        className="w-5 h-5 text-yellow-400 fill-yellow-400"
                                      />
                                    </div>
                                  )}
                                </div>
                              );
                            })}
                          </div>
                        </div>
                        
                        {/* Features grid - main content */}
                        <div className="w-full md:flex-1 grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-3 md:pl-8 md:pr-6 md:border-r border-gray-100">
                          {/* Essential categories shown by default */}
                          {plan?.features && Object.entries(plan.features)
                            .filter(([type]) => essentialCategories.includes(type))
                            .map(([type, feature], i) => {
                              const IconComponent = iconMapping[type as keyof typeof iconMapping] || Stethoscope;
                              
                              return (
                                <div key={i} className="flex items-start">
                                  <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center mr-3 shrink-0 border border-gray-100">
                                    <IconComponent size={16} className="text-deepBlue" />
                                  </div>
                                  <div className="min-w-0 flex-1">
                                    <div className={`text-sm font-bold text-gray-700 ${type === 'Stable Pre-existing Conditions' ? '' : 'whitespace-nowrap'}`}>{type}</div>
                                    <div className="text-sm text-gray-600">{formatFeatureDescription(feature.description)}</div>
                                  </div>
                                </div>
                              );
                            })
                          }
                          
                          {/* Show more button - mobile only */}
                          {!expandedFeatures[plan.id] && (
                            <div 
                              className="md:hidden flex items-center cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors"
                              onClick={() => toggleFeatures(plan.id)}
                            >
                              <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center mr-2 shrink-0 border border-gray-100">
                                <Plus size={16} className="text-deepBlue" />
                              </div>
                              <div className="text-sm font-medium text-deepBlue">Show more coverage details</div>
                            </div>
                          )}
                          
                          {/* Additional categories shown when expanded */}
                          {expandedFeatures[plan.id] && (
                            <>
                              {Object.entries(plan.features)
                                .filter(([type]) => !essentialCategories.includes(type))
                                .map(([type, feature], i) => {
                                  const IconComponent = iconMapping[type as keyof typeof iconMapping] || Stethoscope;
                                  
                                  return (
                                    <div key={`extra-${i}`} className="flex items-start">
                                      <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center mr-3 shrink-0 border border-gray-100">
                                        <IconComponent size={16} className="text-deepBlue" />
                                      </div>
                                      <div className="min-w-0 flex-1">
                                        <div className={`text-sm font-bold text-gray-700 ${type === 'Stable Pre-existing Conditions' ? '' : 'whitespace-nowrap'}`}>{type}</div>
                                        <div className="text-sm text-gray-600">{formatFeatureDescription(feature.description)}</div>
                                      </div>
                                    </div>
                                  );
                                })
                              }
                              
                              {/* Show less button - mobile only */}
                              <div 
                                className="md:hidden flex items-center cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors"
                                onClick={() => toggleFeatures(plan.id)}
                              >
                                <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center mr-2 shrink-0 border border-gray-100">
                                  <Minus size={16} className="text-deepBlue" />
                                </div>
                                <div className="text-sm font-medium text-deepBlue">Show less coverage details</div>
                              </div>
                            </>
                          )}
                          
                          {/* All features directly shown on desktop */}
                          <div className="hidden md:contents">
                            {Object.entries(plan.features)
                              .filter(([type]) => !essentialCategories.includes(type))
                              .map(([type, feature], i) => {
                                const IconComponent = iconMapping[type as keyof typeof iconMapping] || Stethoscope;
                                
                                return (
                                  <div key={`desktop-${i}`} className="flex items-start">
                                    <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center mr-3 shrink-0 border border-gray-100">
                                      <IconComponent size={16} className="text-deepBlue" />
                                    </div>
                                    <div className="min-w-0 flex-1">
                                      <div className={`text-sm font-bold text-gray-700 ${type === 'Stable Pre-existing Conditions' ? '' : 'whitespace-nowrap'}`}>{type}</div>
                                      <div className="text-sm text-gray-600">{formatFeatureDescription(feature.description)}</div>
                                    </div>
                                  </div>
                                );
                              })
                            }
                          </div>
                        </div>
                        
                        {/* Price and buy column */}
                        <div className="w-full md:w-56 flex flex-col items-center text-center md:items-center mt-4 md:mt-0 md:pl-6">
                          <div className="text-5xl md:text-4xl font-bold text-magenta mb-1">{plan.price}</div>
                          {plan.pricePerMonth && <div className="text-sm text-gray-500 mb-4">{plan.pricePerMonth}</div>}
                          {plan.provider !== "21st Century" ?  
                            <button 
                              onClick={() => handleBuyNowClick(plan)}
                              className={`w-full md:w-auto py-3 px-8 rounded-lg font-medium uppercase transition-colors shadow-sm ${quoteData === null ? 'bg-gray-400 cursor-not-allowed' : 'bg-magenta hover:bg-magenta/90'} text-white`}
                              aria-disabled={quoteData === null}
                            >
                              BUY NOW
                            </button> : 
                            <button 
                            className={`w-full md:w-auto py-3 px-8 rounded-lg font-medium uppercase transition-colors shadow-sm ${quoteData === null ? 'bg-gray-400 cursor-not-allowed' : 'bg-magenta hover:bg-magenta/90'} text-white`}
                            aria-disabled={quoteData === null}
                            >
                            CALL NOW
                            </button> 
                          } 
                          <div className="text-xs text-gray-400 mt-2">With our partner {plan.provider}</div>
                        </div>
                      </div>
                    
                      {/* Show details button - hidden for mock plans */}
                      {quoteData !== null && (
                        <button 
                          className="flex items-center justify-center w-full py-3 bg-gray-100 rounded-lg text-deepBlue hover:text-deepBlue/80 text-sm font-medium mt-6"
                          onClick={() => togglePlanDetails(plan.id)}
                        >
                          {expandedPlans[plan.id] ? 'Hide details' : 'Show details'}
                          <ChevronDown className={`ml-1 transition-transform md:${expandedPlans[plan.id] ? 'rotate-180' : ''}`} size={16} />
                        </button>
                      )}
                      
                      {/* Only show expanded content on desktop */}
                      {expandedPlans[plan.id] && (
                        <div className="hidden md:block mt-4 pt-4 border-t border-gray-100">
                          <div className="bg-white rounded-lg p-6 mb-4">
                            <h3 className="text-2xl font-medium text-gray-900 mb-4">What is included in your policy</h3>
                            
                            <p className="text-gray-700 mb-4">
                              Travel medical insurance provides coverage for emergency medical expenses during your trip, which includes doctor's visits, hospital stays, emergency transportation, and prescription medication.
                            </p>
                            
                            <h4 className="text-xl font-semibold text-gray-900 mb-4">Key features</h4>
                            <ul className="list-disc pl-5 space-y-2 mb-6">
                              {plan.additionalInfo.extractedKeyFeatures.map((feature, i) => (
                                <li key={i} className="text-gray-700">{feature}</li>
                              ))}
                            </ul>
                            
                            <h4 className="text-xl font-semibold text-gray-900 mb-2">Pre-existing conditions</h4>
                            <p className="text-gray-700 mb-6">
                              {plan.additionalInfo.preExisting === "Yes" ? 
                                'Included' : 
                                'Not included'}
                            </p>
                            
                            {(plan.policy_document_url || plan.brochure_url) && (
                              <div className="border rounded-lg p-4 bg-gray-50">
                                <div className="flex flex-wrap items-center">
                                  <div className="font-medium text-gray-700 mr-4">Downloads:</div>
                                  <div className="flex flex-wrap gap-4">
                                    {plan.policy_document_url && (
                                      <a 
                                        href={plan.policy_document_url} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center text-blue-400 hover:text-blue-500"
                                      >
                                        <div className="w-8 h-8 flex items-center justify-center bg-red-100 rounded-md mr-2">
                                          <span className="text-xs font-medium text-red-500">PDF</span>
                                        </div>
                                        Policy Wordings
                                      </a>
                                    )}
                                    {plan.brochure_url && (
                                      <a 
                                        href={plan.brochure_url} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center text-blue-400 hover:text-blue-500"
                                      >
                                        <div className="w-8 h-8 flex items-center justify-center bg-red-100 rounded-md mr-2">
                                          <span className="text-xs font-medium text-red-500">PDF</span>
                                        </div>
                                        Product Brochure
                                      </a>
                                    )}
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {hasMorePlans && (
              <div className="flex justify-center mt-12">
                <button 
                  onClick={handleShowMorePlans}
                  className="text-deepBlue border border-deepBlue rounded-full px-8 py-3 flex items-center hover:bg-deepBlue hover:text-white transition-colors shadow-sm"
                >
                  {showAllPlans ? "Show fewer plans" : "Show more plans"} 
                  <ChevronDown className={`ml-2 transition-transform ${showAllPlans ? "rotate-180" : ""}`} size={16} />
                </button>
              </div>
            )}
          </>
        )}
      </section>
      
      {/* Customer info form modal - outside the section to avoid any container influence */}
      {showCustomerInfoForm && selectedPlan && portalRoot && createPortal(
        <div 
          className="fixed inset-0 z-[9999] flex items-center justify-center"
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          }}
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              handleCloseForm();
            }
          }}
        >
          <div 
            className="bg-white rounded-xl shadow-lg max-w-md w-full mx-auto"
            style={{ 
              position: 'fixed',
              top: '50%', 
              left: '50%', 
              transform: 'translate(-50%, -50%)'
            }}
          >
            <CustomerInfoForm
              key={`form-${selectedPlan.provider}-${selectedPlan.name}`}
              providerName={selectedPlan.provider}
              planName={selectedPlan.name}
              insuranceUrl={selectedPlan.url || '#'}
              placeOfPurchase={formProvinceContext}
              onSubmit={handleCustomerInfoSubmit}
              onClose={handleCloseForm}
            />
          </div>
        </div>,
        portalRoot
      )}

      {/* Mobile details popup modal */}
      {showMobileDetailsPopup && selectedMobileDetailsPlan && portalRoot && createPortal(
        <div 
          className="fixed inset-0 z-[9998] flex items-center justify-center p-4"
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          }}
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              closeMobileDetailsPopup();
            }
          }}
        >
          <div 
            className="bg-white rounded-xl shadow-lg w-full max-w-sm max-h-[85vh] overflow-y-auto modal-content mx-4"
            style={{ 
              position: 'relative'
            }}
          >
            <div className="p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-100">
                <h3 className="text-xl font-bold text-deepBlue">{selectedMobileDetailsPlan.name}</h3>
                <button 
                  onClick={closeMobileDetailsPopup}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Content */}
              <div className="space-y-4">
                <div>
                  <h4 className="text-md font-medium text-gray-900 mb-2">What is included in your policy</h4>
                  <p className="text-gray-700 mb-3 text-xs">
                    Emergency medical coverage including doctor visits, hospital stays, emergency transportation, and prescription medication.
                  </p>
                </div>
                
                <div>
                  <h5 className="text-sm font-semibold text-gray-900 mb-2">Key features</h5>
                  <ul className="list-disc pl-4 space-y-1 mb-3">
                    {selectedMobileDetailsPlan.additionalInfo.extractedKeyFeatures.map((feature, i) => (
                      <li key={i} className="text-gray-700 text-xs">{feature}</li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h5 className="text-sm font-semibold text-gray-900 mb-1">Pre-existing conditions</h5>
                  <p className="text-gray-700 text-xs mb-3">
                    {selectedMobileDetailsPlan.additionalInfo.preExisting === "Yes" ? 
                      'Included' : 
                      'Not included'}
                  </p>
                </div>

                {/* Downloads */}
                {(selectedMobileDetailsPlan.policy_document_url || selectedMobileDetailsPlan.brochure_url) && (
                  <div className="border rounded-lg p-3 bg-gray-50">
                    <div className="space-y-2">
                      <div className="font-medium text-gray-700 text-xs mb-2">Downloads:</div>
                      <div className="flex flex-col gap-2">
                        {selectedMobileDetailsPlan.policy_document_url && (
                          <a 
                            href={selectedMobileDetailsPlan.policy_document_url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center text-blue-400 hover:text-blue-500 text-xs"
                          >
                            <div className="w-5 h-5 flex items-center justify-center bg-red-100 rounded-md mr-2">
                              <span className="text-xs font-medium text-red-500">PDF</span>
                            </div>
                            Policy Wordings
                          </a>
                        )}
                        {selectedMobileDetailsPlan.brochure_url && (
                          <a 
                            href={selectedMobileDetailsPlan.brochure_url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center text-blue-400 hover:text-blue-500 text-xs"
                          >
                            <div className="w-5 h-5 flex items-center justify-center bg-red-100 rounded-md mr-2">
                              <span className="text-xs font-medium text-red-500">PDF</span>
                            </div>
                            Product Brochure
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>,
        portalRoot
      )}
    </>
  );
};

PlanComparison.displayName = 'PlanComparison';

export default memo(PlanComparison);
