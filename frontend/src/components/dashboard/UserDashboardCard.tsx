import React from 'react';
import { UserResponse } from '../../types/user';
import { UserCircleIcon, StarIcon, TrophyIcon, CheckCircleIcon, ClockIcon, SparklesIcon, LockClosedIcon } from '@heroicons/react/24/outline';

interface UserDashboardCardProps {
  user: UserResponse;
  className?: string;
}

const StatCard = ({ icon, label, value, color }: { 
  icon: React.ReactNode; 
  label: string; 
  value: string | number; 
  color: string 
}) => (
  <div className="flex flex-col items-center">
    <div className="w-10 h-10 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center mb-2">
      {icon}
    </div>
    <span className="text-xs text-gray-500 dark:text-gray-400 mb-1">{label}</span>
    <span className={`text-lg font-semibold ${color}`}>{value}</span>
  </div>
);

export const UserDashboardCard: React.FC<UserDashboardCardProps> = ({ user, className = '' }) => {
  const completionRate = user.numTasksTotal > 0
    ? Math.round((user.numTasksCompleted / user.numTasksTotal) * 100)
    : 0;

  return (
    <div className={`bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm p-6 text-center ${className}`}>
      {/* Avatar Placeholder */}
      <div className="relative mb-4 inline-block">
        <div className="w-24 h-24 rounded-full bg-indigo-100 dark:bg-indigo-900/20 flex items-center justify-center">
          <UserCircleIcon className="w-16 h-16 text-indigo-600 dark:text-indigo-400" />
        </div>
        <div className="absolute -bottom-1 -right-1">
          <button className="w-6 h-6 rounded-full bg-green-600 dark:bg-green-500 flex items-center justify-center text-white text-xs hover:bg-opacity-90">
            +
          </button>
        </div>
      </div>

      {/* User Info */}
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
        {user.firstName} {user.lastName}
      </h2>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
        {user.email}
      </p>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-4 w-full max-w-sm mx-auto">
        <StatCard icon={<StarIcon />} label="Points" value={user.currentPoints} color="text-green-600 dark:text-green-400" />
        <StatCard icon={<TrophyIcon />} label="Total" value={user.totalPoints} color="text-amber-600 dark:text-amber-400" />
        <StatCard icon={<CheckCircleIcon />} label="Completion" value={`${completionRate}%`} color="text-green-600 dark:text-green-400" />
        <StatCard icon={<ClockIcon />} label="Pending" value={user.numTasksOpen} color="text-amber-600 dark:text-amber-400" />
      </div>

      {/* Future: Achievements */}
      <div className="mt-6">
        <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-3 flex items-center justify-center gap-1">
          <SparklesIcon className="w-4 h-4" />
          Achievements (Coming Soon)
        </h3>
        <div className="flex justify-center gap-2 opacity-50">
          {[1, 2, 3].map((i) => (
            <div key={i} className="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
              <LockClosedIcon className="w-6 h-6 text-gray-500 dark:text-gray-400" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};