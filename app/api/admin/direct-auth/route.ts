import { NextResponse } from 'next/server';
import crypto from 'crypto';

// Admin credentials - use environment variables if available, fall back to defaults
const ADMIN_USERNAME = process.env.ADMIN_USERNAME || 'admin';
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'travel2024';

export async function GET(request: Request) {
  console.log('API Route: Direct auth requested');
  
  // Check if there's an Authorization header
  const authHeader = request.headers.get('authorization');
  
  if (!authHeader || !authHeader.startsWith('Basic ')) {
    console.log('API Route: No valid authorization header, prompting for credentials');
    
    // Generate a random nonce to prevent caching
    const nonce = crypto.randomBytes(16).toString('hex');
    
    // Return a 401 to prompt for credentials
    return new NextResponse('Admin Authentication Required', {
      status: 401,
      headers: {
        'WWW-Authenticate': `Basic realm="Travel Insurance Admin ${nonce}"`,
        'Cache-Control': 'no-store, no-cache, must-revalidate, max-age=0',
        'Pragma': 'no-cache',
        'Expires': '-1'
      }
    });
  }
  
  // Extract and verify credentials
  try {
    const base64Credentials = authHeader.substring(6); // Skip "Basic "
    const credentials = atob(base64Credentials);
    const [username, password] = credentials.split(':');
    
    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      console.log('API Route: Admin authentication successful');
      
      // Authentication successful, return 200
      return new NextResponse('Authentication successful', {
        status: 200,
        headers: {
          'Cache-Control': 'no-store, no-cache, must-revalidate, max-age=0',
          'Pragma': 'no-cache',
          'Expires': '-1'
        }
      });
    } else {
      console.log('API Route: Invalid credentials provided');
      
      // Generate a random nonce to prevent caching
      const nonce = crypto.randomBytes(16).toString('hex');
      
      // Invalid credentials, return 401 to prompt again
      return new NextResponse('Invalid credentials', {
        status: 401,
        headers: {
          'WWW-Authenticate': `Basic realm="Travel Insurance Admin ${nonce}"`,
          'Cache-Control': 'no-store, no-cache, must-revalidate, max-age=0',
          'Pragma': 'no-cache',
          'Expires': '-1'
        }
      });
    }
  } catch (error) {
    console.error('API Route: Error during authentication:', error);
    
    // Return 500 for unexpected errors
    return new NextResponse('Authentication error', {
      status: 500
    });
  }
} 