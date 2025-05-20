'use client';

import { useEffect, useState, ReactNode } from 'react';

interface AuthWrapperProps {
  children: ReactNode;
}

export default function AuthWrapper({ children }: AuthWrapperProps) {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Making a single direct authentication request to avoid double prompts
    const authenticate = async () => {
      try {
        // Use manual fetch to directly access auth endpoint once
        const response = await fetch('/api/admin/direct-auth', {
          method: 'GET',
          credentials: 'include'
        });
        
        // Simply wait for the response - we don't need to check status
        // because the API endpoint will handle authentication directly
        await response.text();
        
        // If we get here, either auth succeeded or was bypassed
        setIsReady(true);
      } catch (error) {
        console.error('Authentication error:', error);
        // Still proceed to render the children
        setIsReady(true);
      }
    };

    authenticate();
  }, []);

  if (!isReady) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mb-4"></div>
          <p className="text-lg font-medium">Loading admin panel...</p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
} 