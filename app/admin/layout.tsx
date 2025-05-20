import React from 'react';
import Link from 'next/link';
import AuthWrapper from './auth-wrapper';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthWrapper>
      <div className="min-h-screen bg-gray-50">
        {/* Admin Header */}
        <header className="bg-deepBlue text-white shadow-md">
          <div className="container mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-bold">Travel Insurance Admin</h1>
              <nav>
                <ul className="flex space-x-6">
                  <li>
                    <Link href="/admin/stats" className="hover:text-gray-200 transition-colors">
                      Statistics
                    </Link>
                  </li>
                  <li>
                    <Link href="/admin/clear-stats" className="hover:text-gray-200 transition-colors">
                      Clear Data
                    </Link>
                  </li>
                  <li>
                    <Link href="/" className="hover:text-gray-200 transition-colors">
                      Return to Site
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>
        
        {/* Admin Content */}
        <main>
          {children}
        </main>
      </div>
    </AuthWrapper>
  );
} 