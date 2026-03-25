import React from 'react';

interface RefreshButtonProps {
  onClick: () => void;
  refreshing: boolean;
}

export const RefreshButton: React.FC<RefreshButtonProps> = ({ onClick, refreshing }) => (
  <button
    onClick={onClick}
    disabled={refreshing}
    className="flex items-center gap-1 text-sm text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 disabled:opacity-50"
  >
    <svg className={`w-4 h-4 ${refreshing ? 'animate-spin' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
    </svg>
    {refreshing ? 'Refreshing...' : 'Refresh'}
  </button>
);
