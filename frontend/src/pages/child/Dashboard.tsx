import React, { useCallback, useEffect, useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { taskService } from '../../services/taskService';
import { UserDashboardCard } from '../../components/dashboard/UserDashboardCard';
import { TaskList } from '../../components/tasks/TaskList';
import { TaskStatusChart } from '../../components/dashboard/TaskStatusChart';
import { TaskReadResponse } from '../../types/tasks';
import { RefreshButton } from '../../components/ui/RefreshButton';

export const ChildDashboard: React.FC = () => {
  const { state, refreshUser } = useAuth();
  const [tasks, setTasks] = useState<TaskReadResponse[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchTasks = useCallback(async () => {
    const tasksData = await taskService.getTasks();
    setTasks(tasksData);
  }, []);

  const handleRefresh = async () => {
    setRefreshing(true);
    setError(null);
    try {
      await Promise.all([fetchTasks(), refreshUser()]);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to refresh');
    } finally {
      setRefreshing(false);
    }
  };

  useEffect(() => {
    const loadTasks = async () => {
      try {
        setLoading(true);
        await fetchTasks();
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load tasks');
      } finally {
        setLoading(false);
      }
    };

    if (state.user) {
      loadTasks();
    }
  }, [state.user, fetchTasks]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {error && (
        <div className="bg-red-50 border-l-4 border-red-400 p-4">
          <p className="text-sm text-red-700 dark:text-red-300">{error}</p>
        </div>
      )}
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Dashboard</h2>
        <RefreshButton onClick={handleRefresh} refreshing={refreshing} />
      </div>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          {state.user && (
            <UserDashboardCard user={state.user} className="mb-6" />
          )}
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">My Tasks</h2>
          <TaskList tasks={tasks} showToggle={true} />
        </div>
        <div className="space-y-6">
          <TaskStatusChart tasks={tasks} />
          {/* Future: RecentActivity component */}
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
            <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-2">
              Recent Activity
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 text-center py-4">
              Coming soon...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};