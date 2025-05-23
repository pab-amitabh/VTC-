/**
 * Fallback URLs for insurance companies
 * Used when API response doesn't include a redirection link
 */
export const FALLBACK_URLS: Record<string, string> = {
  'Travelance': 'http://www.getreliable.com/direct/login.aspx?ag=TMA7401',
  'GMS': 'https://bitli.pro/1y4MI_8e0c40c4',
  'MSH': 'https://www.mshgroups.com/policyadvisor',
  'Manulife': 'https://www.manulife-travel.ca/dist/home.html?as=wljiten',
  'Tugo': 'https://shop.tugo.com/store/FHTO1977',
  'Destination': 'https://www.desttravel.com/?id=7922f5a9-2495-4ee6-b7a4-6b84062b2e51#/insuranceproducts/visitortocanadainsurance/quote/planprofile',
  'Secure Travel': 'https://forms.rimiinsurance.com/en/rimivisitorstocanada?&sales_channel=online&tracking_code=POL102',
  '21st Century': 'https://www.manulife-travel.ca/dist/home.html?as=wljiten',
  'CENT': 'https://www.manulife-travel.ca/dist/home.html?as=wljiten',
};

/**
 * Mapping from company codes to normalized names
 * Used when API response includes company_code instead of company_short_name
 */
export const COMPANY_CODE_MAP: Record<string, string> = {
  'CENT': '21st Century',
  'MANU': 'Manulife',
  'GMS': 'GMS',
  'TUGA': 'Tugo',
  'MSH': 'MSH',
  'DEST': 'Destination',
  'TRVI': 'Travelance',
  'SECU': 'Secure Travel'
};

/**
 * Normalizes provider name by removing any text in parentheses
 * E.g., "Tugo (iA Financial Group)" becomes "Tugo"
 * Also checks if the provider is a company code and maps it to the proper name
 */
export const normalizeProviderName = (providerName: string): string => {
  // First clean up any parentheses content
  const cleanName = providerName.split('(')[0].trim();
  
  // Check if this might be a company code
  if (COMPANY_CODE_MAP[cleanName]) {
    console.log(`Mapped company code ${cleanName} to ${COMPANY_CODE_MAP[cleanName]}`);
    return COMPANY_CODE_MAP[cleanName];
  }
  
  return cleanName;
};

/**
 * Gets the redirection URL for a provider
 * Returns the provided URL if valid, otherwise falls back to the default URL
 */
export const getRedirectionUrl = (providerName: string, providedUrl?: string): string => {
  // Use provided URL if it exists and is valid
  if (providedUrl && providedUrl !== '#') {
    console.log(`Using provided URL for ${providerName}:`, providedUrl);
    return providedUrl;
  }
  
  // Otherwise try to use fallback URL
  const normalizedProvider = normalizeProviderName(providerName);
  console.log(`Looking for fallback URL for: "${normalizedProvider}"`);
  
  if (FALLBACK_URLS[normalizedProvider]) {
    console.log(`Found fallback URL for ${normalizedProvider}:`, FALLBACK_URLS[normalizedProvider]);
    return FALLBACK_URLS[normalizedProvider];
  }
  
  // If direct match failed, try a case-insensitive partial match
  const keys = Object.keys(FALLBACK_URLS);
  for (const key of keys) {
    if (normalizedProvider.toLowerCase().includes(key.toLowerCase()) || 
        key.toLowerCase().includes(normalizedProvider.toLowerCase())) {
      console.log(`Found partial match fallback URL for ${normalizedProvider} => ${key}:`, FALLBACK_URLS[key]);
      return FALLBACK_URLS[key];
    }
  }
  
  // Return empty fallback if no URL is found
  console.warn(`No valid URL or fallback found for: "${normalizedProvider}"`);
  return '#';
}; 