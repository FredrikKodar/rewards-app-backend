import { ThemePreferences, DEFAULT_THEME } from '../types/theme';

const THEME_STORAGE_KEY = 'themePreferences';

// Get current theme preferences from session storage
export const getThemePreferences = (): ThemePreferences => {
  if (typeof window !== 'undefined') {
    const savedPreferences = sessionStorage.getItem(THEME_STORAGE_KEY);
    if (savedPreferences) {
      try {
        return JSON.parse(savedPreferences);
      } catch (error) {
        console.error('Failed to parse theme preferences:', error);
      }
    }
  }
  return DEFAULT_THEME;
};

// Save theme preferences to session storage
export const saveThemePreferences = (preferences: ThemePreferences): void => {
  if (typeof window !== 'undefined') {
    sessionStorage.setItem(THEME_STORAGE_KEY, JSON.stringify(preferences));
  }
};

// Apply theme to document using CSS variables
export const applyTheme = (preferences: ThemePreferences): void => {
  const root = document.documentElement;
  
  // Apply color scheme
  if (preferences.colorScheme === 'indigo') {
    root.style.setProperty('--primary-color', '#6366f1'); // indigo-600
    root.style.setProperty('--primary-dark', '#4f46e5'); // indigo-700
    root.style.setProperty('--primary-light', '#818cf8'); // indigo-400
  } else {
    root.style.setProperty('--primary-color', '#059669'); // emerald-600
    root.style.setProperty('--primary-dark', '#047857'); // emerald-700
    root.style.setProperty('--primary-light', '#34d399'); // emerald-400
  }
  
  // Apply theme mode
  if (preferences.themeMode === 'dark') {
    root.classList.add('dark');
  } else {
    root.classList.remove('dark');
  }
};

// Initialize theme from saved preferences or use default
export const initializeTheme = (): ThemePreferences => {
  const preferences = getThemePreferences();
  applyTheme(preferences);
  return preferences;
};
