import React from 'react';

interface QuickStatsProps {
  user: {
    currentPoints: number;
    totalPoints: number;
    numTasksOpen: number;
    numTasksCompleted: number;
    numTasksTotal: number;
  };
  className?: string;
}

export const QuickStats: React.FC<QuickStatsProps> = ({ user, className = '' }) => {
  const completionRate = user.numTasksTotal > 0
    ? Math.round((user.numTasksCompleted / user.numTasksTotal) * 100)
    : 0;

  return (
    <div className={`bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 ${className}`}>
      <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-3">Quick Stats</h3>
      <div className="space-y-3">
        <div className="flex justify-between">
          <span className="text-sm text-gray-600 dark:text-gray-400">Current Points</span>
          <span className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">{user.currentPoints}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-sm text-gray-600 dark:text-gray-400">Total Points</span>
          <span className="text-sm font-semibold text-amber-600 dark:text-amber-400">{user.totalPoints}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-sm text-gray-600 dark:text-gray-400">Completion Rate</span>
          <span className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">{completionRate}%</span>
        </div>
        <div className="flex justify-between">
          <span className="text-sm text-gray-600 dark:text-gray-400">Pending Tasks</span>
          <span className="text-sm font-semibold text-amber-600 dark:text-amber-400">{user.numTasksOpen}</span>
        </div>
      </div>
    </div>
  );
};