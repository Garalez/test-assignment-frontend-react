import { ThemeMode, applyTheme, getTheme } from '@/utils';
import { FC, ReactNode, createContext, useCallback, useContext, useEffect, useState } from 'react';

const STORAGE_KEY = 'theme';
const THEME_ATTRIBUTE = 'data-theme';
const LIGHT: ThemeMode = 'light';
const DARK: ThemeMode = 'dark';
const MEDIA_QUERY = '(prefers-color-scheme: dark)';

export interface ThemeContextType {
  theme: ThemeMode;
  toggleTheme: () => void;
  setTheme: (theme: ThemeMode) => void;
  isLight: boolean;
  isDark: boolean;
}

interface ThemeProviderProps {
  initialTheme?: ThemeMode;
  children: ReactNode;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: FC<ThemeProviderProps> = ({ initialTheme, children }) => {
  const getInitialTheme = (): ThemeMode => {
    if (!!initialTheme) return initialTheme;
    
    const savedTheme = localStorage.getItem(STORAGE_KEY) as ThemeMode | null;

    if (savedTheme && (savedTheme === LIGHT || savedTheme === DARK)) {
      return savedTheme;
    }
    
    if (window.matchMedia && window.matchMedia(MEDIA_QUERY).matches) {
      return DARK;
    }
    
    return LIGHT;
  };

  const [theme, setThemeState] = useState<ThemeMode>(getInitialTheme);

  useEffect(() => {
    const currentTheme = getTheme(theme);

    applyTheme(currentTheme);

    localStorage.setItem(STORAGE_KEY, theme);
    
    document.documentElement.setAttribute(THEME_ATTRIBUTE, theme);

    const root = document.documentElement;
    root.style.fontFamily = currentTheme.typography.fontFamily;
    root.style.lineHeight = currentTheme.typography.lineHeight.normal;
    root.style.fontWeight = currentTheme.typography.fontWeight.normal;
    root.style.color = currentTheme.colors.text;
    root.style.backgroundColor = currentTheme.colors.background;
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setThemeState(prevTheme => prevTheme === LIGHT ? DARK : LIGHT);
  }, []);

  const setTheme = useCallback((newTheme: ThemeMode) => {
    setThemeState(newTheme);
  }, []);

  const contextValue = {
    theme,
    toggleTheme,
    setTheme,
    isLight: theme === LIGHT,
    isDark: theme === DARK
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  
  if (context === undefined) {
    throw new Error('useThemeContext must be used within a ThemeProvider');
  }
  
  return context;
}; 
