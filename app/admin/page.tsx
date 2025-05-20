'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminPage() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to stats page
    router.replace('/admin/stats');
  }, [router]);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-8">Admin Portal</h1>
        <p className="mb-4">Redirecting to statistics dashboard...</p>
        <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
      </div>
    </div>
  );
} 