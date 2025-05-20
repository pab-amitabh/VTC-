'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ClearStatsPage() {
  const router = useRouter();
  const [clearing, setClearing] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleClearAllData = async () => {
    if (!confirm('Are you sure you want to clear all click tracking data? This action cannot be undone.')) {
      return;
    }

    setClearing(true);
    setMessage(null);
    setError(null);
    
    try {
      // Add a timestamp to avoid caching
      const timestamp = new Date().getTime();
      const response = await fetch(`/api/clickTracker/clearAll?t=${timestamp}`, {
        method: 'DELETE',
        headers: {
          'Cache-Control': 'no-cache',
          'Pragma': 'no-cache'
        }
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || `API returned ${response.status}: ${response.statusText}`);
      }
      
      console.log('Cleared data response:', data);
      setMessage(`Successfully cleared ${data.deletedCount} records. Remaining records: ${data.remainingCount || 0}.`);
      
      if (data.remainingCount > 0) {
        setMessage((prev) => `${prev} Some records may still exist. Redirecting to stats page...`);
        
        // Force a hard reload of the stats page after a short delay
        setTimeout(() => {
          window.location.href = '/admin/stats?t=' + new Date().getTime();
        }, 2000);
      } else {
        // Force a hard reload of the stats page after a short delay
        setTimeout(() => {
          window.location.href = '/admin/stats?t=' + new Date().getTime();
        }, 1000);
      }
    } catch (error) {
      console.error('Error clearing data:', error);
      setError(`Failed to clear data: ${error instanceof Error ? error.message : String(error)}`);
    } finally {
      setClearing(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Clear Click Statistics</h1>
      
      <div className="bg-white rounded-xl shadow-md p-8 max-w-md mx-auto">
        <p className="text-gray-600 mb-8">
          Use this page to delete all buy now click tracking data from the database. 
          <strong className="text-red-600"> This action cannot be undone.</strong>
        </p>
        
        {message && (
          <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg mb-6">
            {message}
          </div>
        )}
        
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6">
            {error}
          </div>
        )}
        
        <div className="flex space-x-4">
          <button 
            onClick={handleClearAllData}
            disabled={clearing}
            className={`px-4 py-2 text-white rounded ${clearing ? 'bg-gray-400 cursor-not-allowed' : 'bg-red-600 hover:bg-red-700'}`}
          >
            {clearing ? 'Clearing...' : 'Clear All Data'}
          </button>
          
          <button 
            onClick={() => router.push('/admin/stats')}
            className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
          >
            Back to Statistics
          </button>
        </div>
      </div>
    </div>
  );
} 