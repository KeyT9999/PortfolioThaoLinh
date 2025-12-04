import React, { useState, useEffect } from 'react';

interface ApiWidgetProps {
  apiUrl?: string;
}

const ApiWidget: React.FC<ApiWidgetProps> = ({ apiUrl }) => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    if (!apiUrl) return;
    
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const jsonData = await response.json();
      setData(jsonData);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch data');
      console.error('API Error:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (apiUrl) {
      fetchData();
      // Optionally set up polling interval
      const interval = setInterval(fetchData, 60000); // Refresh every minute
      return () => clearInterval(interval);
    }
  }, [apiUrl]);

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="w-full h-full rounded-full bg-white dark:bg-gray-800 border-4 border-[#8B4513] dark:border-gray-400 shadow-md flex flex-col items-center justify-center p-2">
        {loading ? (
          <div className="text-xs text-gray-500 dark:text-gray-400 animate-pulse">Loading...</div>
        ) : error ? (
          <div className="text-xs text-red-500 text-center px-2">{error}</div>
        ) : data ? (
              <div className="text-xs text-gray-700 dark:text-gray-300 text-center px-2 break-words">
            {typeof data === 'object' ? JSON.stringify(data).substring(0, 50) + '...' : String(data).substring(0, 50)}
          </div>
        ) : (
          <div className="text-xs text-gray-400 dark:text-gray-500 text-center px-2">
            No API URL configured
          </div>
        )}
        {apiUrl && (
          <button
            onClick={fetchData}
            className="mt-2 px-2 py-1 text-[0.5rem] bg-[#8B4513] dark:bg-gray-600 text-white rounded hover:bg-[#6B3410] dark:hover:bg-gray-500 transition-colors"
          >
            Refresh
          </button>
        )}
      </div>
    </div>
  );
};

export default ApiWidget;

