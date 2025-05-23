import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import crypto from 'crypto';

// Admin credentials - fixed values
const ADMIN_USERNAME = 'admin';
const ADMIN_PASSWORD = 'travel2024';

// Export config to make sure middleware runs on all routes
export const config = {
  matcher: [
    // Include admin routes explicitly
    '/admin/:path*',
    // Include all other routes that aren't specific static assets
    '/((?!api|_next/static|_next/image|favicon.ico).*)'
  ]
};

export function middleware(request: NextRequest) {
  // Get the current pathname
  const pathname = request.nextUrl.pathname;
  console.log('Middleware running for path:', pathname);
  
  // If it's an admin route, handle authentication
  if (pathname.startsWith('/admin')) {
    console.log('Admin route detected:', pathname);
    
    // Get the Authorization header
    const authHeader = request.headers.get('authorization');
    
    // Generate a random nonce to prevent caching of auth headers
    const nonce = crypto.randomBytes(8).toString('hex');
    
    // If no auth header or invalid auth, redirect to login
    if (!authHeader || !isValidAuth(authHeader)) {
      console.log('Authentication required or failed for admin route:', pathname);
      
      // Create a new URL for the login page
      const loginUrl = new URL('/admin/login', request.url);
      loginUrl.searchParams.set('from', pathname);
      
      // Return a redirect response
      return NextResponse.redirect(loginUrl);
    }
    
    console.log('Authentication successful for:', pathname);
  }
  
  // For non-admin routes or authenticated admin routes, proceed with cache control
  const response = NextResponse.next();
  
  // Add cache control headers
  response.headers.set('Cache-Control', 'no-store, no-cache, must-revalidate, max-age=0');
  response.headers.set('Pragma', 'no-cache');
  response.headers.set('Expires', '-1');
  
  return response;
}

function isValidAuth(authHeader: string): boolean {
  try {
    // Basic auth format: "Basic base64(username:password)"
    if (!authHeader.startsWith('Basic ')) {
      console.log('Invalid auth header format, missing "Basic " prefix');
      return false;
    }
    
    // Extract the base64 part
    const base64Credentials = authHeader.split(' ')[1];
    
    // Debugging for Vercel
    console.log('Auth credentials received (encoded):', base64Credentials);
    
    const credentials = atob(base64Credentials);
    const [username, password] = credentials.split(':');
    
    // For security, don't log actual password
    console.log('Username provided:', username);
    console.log('Expected username:', ADMIN_USERNAME);
    
    // Check against our credentials
    const isValid = username === ADMIN_USERNAME && password === ADMIN_PASSWORD;
    console.log('Authentication result:', isValid ? 'Valid' : 'Invalid');
    
    return isValid;
  } catch (e) {
    console.error('Auth error:', e);
    return false;
  }
} 