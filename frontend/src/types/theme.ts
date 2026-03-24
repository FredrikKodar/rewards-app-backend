export interface ThemePreferences {
  colorScheme: 'indigo' | 'emerald';
  themeMode: 'light' | 'dark';
}

export const DEFAULT_THEME: ThemePreferences = {
  colorScheme: 'indigo',
  themeMode: 'light'
};

export type ColorScheme = 'indigo' | 'emerald';
export type ThemeMode = 'light' | 'dark';
