'use client';

import { useState, useEffect } from 'react';

interface ClickStat {
  id: string;
  providerName: string;
  planName: string;
  province: string | null;
  ipAddress: string;
  customerName: string;
  customerEmail: string | null;
  customerPhone: string;
  clickCount: number;
  trackingId: string;
  createdAt: string;
  updatedAt: string;
}

export default function StatsPage() {
  const [stats, setStats] = useState<ClickStat[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [rawResponse, setRawResponse] = useState<string | null>(null);

  // Function to force a hard refresh
  const hardRefresh = () => {
    // Add a timestamp to the URL to force a browser reload
    window.location.href = '/admin/stats?t=' + new Date().getTime();
  };

  const fetchStats = async () => {
    try {
      console.log('Fetching stats from API...');
      
      // Add timestamp to prevent caching
      const timestamp = new Date().getTime();
      const response = await fetch(`/api/clickTracker/getStats?t=${timestamp}`, {
        headers: {
          'Cache-Control': 'no-cache',
          'Pragma': 'no-cache'
        }
      });
      
      // Store raw response for debugging
      const responseText = await response.text();
      console.log('Raw API response:', responseText);
      setRawResponse(responseText);
      
      let data;
      try {
        // Try to parse JSON
        data = JSON.parse(responseText);
      } catch (parseError) {
        console.error('Failed to parse JSON response:', parseError);
        setError(`Invalid JSON response: ${responseText.substring(0, 100)}...`);
        setLoading(false);
        return;
      }

      if (!response.ok) {
        throw new Error(data.error || `API returned ${response.status}: ${response.statusText}`);
      }
      
      if (!data.data || !Array.isArray(data.data)) {
        console.error('Invalid data format:', data);
        setError(`Invalid data format returned from API: ${JSON.stringify(data).substring(0, 100)}...`);
        setLoading(false);
        return;
      }
      
      console.log('Stats received:', data.data.length, 'records');
      setStats(data.data);
      setError(null);
    } catch (error) {
      console.error('Error fetching stats:', error);
      setError(`Failed to load statistics: ${error instanceof Error ? error.message : String(error)}`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStats();

    // Set up a refresh interval for stats every 30 seconds
    const intervalId = setInterval(fetchStats, 30000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Buy Now Click Statistics</h1>
      
      {loading && (
        <div className="text-center py-8">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
          <p className="mt-2">Loading statistics...</p>
        </div>
      )}
      
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6">
          {error}
        </div>
      )}
      
      {rawResponse && !stats.length && !loading && (
        <div className="bg-yellow-50 border border-yellow-200 text-yellow-700 px-4 py-3 rounded-lg mb-6">
          <h3 className="font-bold">Raw API Response:</h3>
          <pre className="mt-2 text-xs overflow-auto max-h-40">{rawResponse}</pre>
        </div>
      )}
      
      {!loading && !error && stats.length === 0 && (
        <div className="bg-blue-50 border border-blue-200 text-blue-700 px-4 py-3 rounded-lg mb-6">
          No click data available yet. Data will appear when users start clicking "Buy Now" buttons.
        </div>
      )}
      
      {!loading && !error && stats.length > 0 && (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone Number</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Province</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Created On</th>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Clicks</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Updated</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Provider</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Plan Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">IP Address</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {stats.map((stat) => (
                <tr key={stat.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{stat.customerName}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{stat.customerEmail || 'N/A'}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{stat.customerPhone}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{stat.province || 'N/A'}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {new Date(stat.createdAt).toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-center font-bold text-gray-900">{stat.clickCount}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {new Date(stat.updatedAt).toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{stat.providerName}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{stat.planName}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{stat.ipAddress}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      
      <div className="mt-8 flex space-x-4">
        <button 
          onClick={hardRefresh} 
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Refresh Data
        </button>
        
        <a
          href="/admin/clear-stats"
          className="px-4 py-2 text-white rounded bg-red-500 hover:bg-red-600 inline-flex items-center"
        >
          Clear All Data
        </a>
        
        <a
          href="/api/clickTracker/cleanup"
          className="px-4 py-2 text-white rounded bg-yellow-600 hover:bg-yellow-700 inline-flex items-center"
          target="_blank"
        >
          Clean Up Duplicates
        </a>
      </div>
    </div>
  );
} 