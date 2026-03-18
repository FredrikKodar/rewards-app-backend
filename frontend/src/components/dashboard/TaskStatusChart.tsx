import React from 'react';
import { TaskReadResponse } from '../../types/tasks';

export const TaskStatusChart: React.FC<{ tasks: TaskReadResponse[]; className?: string }> = ({ tasks, className = '' }) => {
  const statusCounts = tasks.reduce((acc, task) => {
    acc[task.status] = (acc[task.status] || 0) + 1;
    return acc;
  }, {} as Record<'ASSIGNED' | 'PENDING_APPROVAL' | 'APPROVED', number>);

  const total = tasks.length;
  const assignedPercent = total > 0 ? Math.round((statusCounts.ASSIGNED || 0) / total * 100) : 0;
  const pendingPercent = total > 0 ? Math.round((statusCounts.PENDING_APPROVAL || 0) / total * 100) : 0;
  const approvedPercent = total > 0 ? Math.round((statusCounts.APPROVED || 0) / total * 100) : 0;

  return (
    <div className={`bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 ${className}`}>
      <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-3">Task Status</h3>
      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-blue-500"></span>
            <span className="text-sm text-gray-600 dark:text-gray-400">Assigned</span>
          </div>
          <span className="text-sm font-semibold text-gray-900 dark:text-white">{assignedPercent}%</span>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
            <span className="text-sm text-gray-600 dark:text-gray-400">Pending Approval</span>
          </div>
          <span className="text-sm font-semibold text-gray-900 dark:text-white">{pendingPercent}%</span>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-green-500"></span>
            <span className="text-sm text-gray-600 dark:text-gray-400">Approved</span>
          </div>
          <span className="text-sm font-semibold text-gray-900 dark:text-white">{approvedPercent}%</span>
        </div>
      </div>
    </div>
  );
};