import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Admin credentials - fixed values
const ADMIN_USERNAME = 'admin';
const ADMIN_PASSWORD = 'travel2024';

export async function POST(request: NextRequest) {
  try {
    const authHeader = request.headers.get('authorization');
    
    if (!authHeader || !authHeader.startsWith('Basic ')) {
      return new NextResponse('Unauthorized', { status: 401 });
    }
    
    const base64Credentials = authHeader.split(' ')[1];
    const credentials = atob(base64Credentials);
    const [username, password] = credentials.split(':');
    
    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      return new NextResponse('Authorized', { status: 200 });
    }
    
    return new NextResponse('Unauthorized', { status: 401 });
  } catch (error) {
    console.error('Auth verification error:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
} 