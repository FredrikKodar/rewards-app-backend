import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { CogIcon, HomeIcon, UsersIcon, ClipboardDocumentListIcon, ClockIcon } from '@heroicons/react/24/outline';

export const SettingsLayout: React.FC = () => {
  const { state, logout } = useAuth();
  const location = useLocation();

  // Determine navigation based on user role
  const getNavigation = () => {
    if (state.user?.role === 'PARENT') {
      return [
        { name: 'Dashboard', href: '/parent/dashboard', icon: HomeIcon },
        { name: 'Children', href: '/parent/children', icon: UsersIcon },
        { name: 'Tasks', href: '/parent/tasks', icon: ClipboardDocumentListIcon },
        { name: 'History', href: '/parent/history', icon: ClockIcon },
      ];
    } else {
      return [
        { name: 'Dashboard', href: '/child/dashboard', icon: HomeIcon },
        { name: 'Tasks', href: '/child/tasks', icon: ClipboardDocumentListIcon },
      ];
    }
  };

  const navigation = getNavigation();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Mobile header */}
      <div className="pb-32" style={{ backgroundColor: 'var(--primary-color)' }}>
        <header className="py-4 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center">
            <h1 className="text-white text-xl font-semibold">Settings</h1>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-white text-sm">
              Welcome, {state.user?.firstName || 'User'}
            </span>
            <button
              onClick={logout}
              className="text-white hover:text-gray-200 text-sm flex items-center gap-1"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
              Sign out
            </button>
          </div>
        </header>
      </div>

      {/* Main content */}
      <main className="-mt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow px-4 py-6 sm:px-6 lg:px-8">
            <Outlet />
          </div>
        </div>
      </main>

      {/* Bottom navigation for mobile */}
      <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 md:hidden">
        <div className="flex justify-around items-center h-16">
          {navigation.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.href;

            return (
              <Link
                key={item.name}
                to={item.href}
                className={`flex flex-col items-center justify-center flex-1 h-full ${
                  isActive
                    ? 'text-primary dark:text-primary-light'
                    : 'text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary-light'
                }`}
              >
                <Icon className="h-6 w-6" aria-hidden="true" />
                <span className="text-xs mt-1">{item.name}</span>
              </Link>
            );
          })}
          <Link
            to="/settings"
            className={`flex flex-col items-center justify-center flex-1 h-full text-primary dark:text-primary-light`}
          >
            <CogIcon className="h-6 w-6" aria-hidden="true" />
            <span className="text-xs mt-1">Settings</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
