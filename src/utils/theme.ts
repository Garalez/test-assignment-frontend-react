export type ThemeMode = 'light' | 'dark';

export interface ThemeColors {
  primary: string;
  secondary: string;
  background: string;
  surface: string;
  text: string;
  textSecondary: string;
  border: string;
  error: string;
  errorBackground: string;
  link: string;
  linkHover: string;
  headerBackground: string;
  headerText: string;
  footerBackground: string;
  footerText: string;
  cardBackground: string;
  cardShadow: string;
  buttonBackground: string;
  buttonBackgroundHover: string;
  buttonBorder: string;
  activeButton: string;
  activeButtonHover: string;
  skeletonBackground: string;
  'skeletonBackground-rgb': string;
  white: string;
  black: string;
  'white-rgb': string;
  'black-rgb': string;
}

export interface ThemeSpacing {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  '2xl': string;
  '3xl': string;
}

export interface ThemeTypography {
  fontFamily: string;
  fontSize: {
    xs: string;
    sm: string;
    base: string;
    lg: string;
    xl: string;
    '2xl': string;
    '3xl': string;
    '4xl': string;
  };
  fontWeight: {
    normal: string;
    medium: string;
    semibold: string;
    bold: string;
  };
  lineHeight: {
    none: string;
    tight: string;
    normal: string;
    relaxed: string;
    loose: string;
  };
}

export interface ThemeBorderRadius {
  none: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  full: string;
}

export interface ThemeContainers {
  sm: string;
  md: string;
  lg: string;
  xl: string;
  '2xl': string;
}

export interface ThemeShadows {
  sm: string;
  md: string;
  lg: string;
  xl: string;
}

export interface ThemeZIndex {
  base: string;
  dropdown: string;
  sticky: string;
  fixed: string;
  modal: string;
  popover: string;
  tooltip: string;
}

export interface ThemeSizes {
  spinnerSize: string;
  spinnerBorder: string;
  cardImageHeight: string;
  pokemonImageSize: string;
  pokemonCardHeight: string;
  translateYHover: string;
  gridItemLarge: string;
  gridItemMedium: string;
  gridItemSmall: string;
  backButtonWidth: string;
  detailNameWidth: string;
  detailIdWidth: string;
  sectionTitleWidth: string;
}

export interface ThemeOpacity {
  light: string;
  medium: string;
  high: string;
  disabled: string;
  none: string;
  full: string;
}

export interface ThemeScales {
  sm: string;
  md: string;
  lg: string;
}

export interface ThemeBorders {
  thin: string;
  regular: string;
  thick: string;
}

export interface ThemeBreakpoints {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
}

export interface ThemePercents {
  full: string;
  half: string;
  quarter: string;
  third: string;
  threeQuarters: string;
  double: string;
  none: string;
}

export interface ThemeViewport {
  full: string;
  half: string;
  min: string;
  max: string;
}

export interface TimingConfig {
  duration: {
    fast: string;
    normal: string;
    slow: string;
  };
  timing: {
    ease: string;
    linear: string;
    easeIn: string;
    easeOut: string;
    easeInOut: string;
  };
}

export interface ThemeTransition extends TimingConfig {}

export interface ThemeAnimation extends TimingConfig {}

export interface ThemeRotate {
  quarter: string;
  half: string;
  threeQuarters: string;
  full: string;
}

export interface PokemonTypeColors {
  normal: string;
  fire: string;
  water: string;
  grass: string;
  electric: string;
  ice: string;
  fighting: string;
  poison: string;
  ground: string;
  flying: string;
  psychic: string;
  bug: string;
  rock: string;
  ghost: string;
  dark: string;
  dragon: string;
  steel: string;
  fairy: string;
}

export interface Theme {
  colors: ThemeColors;
  spacing: ThemeSpacing;
  typography: ThemeTypography;
  borderRadius: ThemeBorderRadius;
  containers: ThemeContainers;
  shadows: ThemeShadows;
  zIndex: ThemeZIndex;
  sizes: ThemeSizes;
  opacity: ThemeOpacity;
  pokemonTypes: PokemonTypeColors;
  scales: ThemeScales;
  borders: ThemeBorders;
  breakpoints: ThemeBreakpoints;
  percents: ThemePercents;
  viewport: ThemeViewport;
  transition: ThemeTransition;
  animation: ThemeAnimation;
  rotate: ThemeRotate;
}

export const spacing: ThemeSpacing = {
  xs: '0.25rem',
  sm: '0.5rem',
  md: '1rem',
  lg: '1.5rem',
  xl: '2rem',
  '2xl': '3rem',
  '3xl': '4rem',
};

export const typography: ThemeTypography = {
  fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',
  fontSize: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
  },
  fontWeight: {
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
  },
  lineHeight: {
    none: '1',
    tight: '1.25',
    normal: '1.5',
    relaxed: '1.75',
    loose: '2',
  },
};

export const borderRadius: ThemeBorderRadius = {
  none: '0',
  sm: '0.125rem',
  md: '0.25rem',
  lg: '0.5rem',
  xl: '1rem',
  full: '9999px',
};

export const containers: ThemeContainers = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1200px',
  '2xl': '1400px',
};

export const shadows: ThemeShadows = {
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
};

export const zIndex: ThemeZIndex = {
  base: '0',
  dropdown: '1000',
  sticky: '1100',
  fixed: '1200',
  modal: '1300',
  popover: '1400',
  tooltip: '1500',
};

export const sizes: ThemeSizes = {
  spinnerSize: '50px',
  spinnerBorder: '3px',
  cardImageHeight: '180px',
  pokemonImageSize: '200px',
  pokemonCardHeight: '268px',
  translateYHover: '5px',
  gridItemLarge: '250px',
  gridItemMedium: '200px',
  gridItemSmall: '150px',
  backButtonWidth: '150px',
  detailNameWidth: '60%',
  detailIdWidth: '30%',
  sectionTitleWidth: '30%',
};

export const opacity: ThemeOpacity = {
  light: '0.2',
  medium: '0.3',
  high: '0.5',
  disabled: '0.6',
  none: '0',
  full: '1',
};

export const scales: ThemeScales = {
  sm: '1.05',
  md: '1.1',
  lg: '1.2',
};

export const borders: ThemeBorders = {
  thin: '1px',
  regular: '2px',
  thick: '3px',
};

export const breakpoints: ThemeBreakpoints = {
  xs: '320px',
  sm: '480px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
};

export const percents: ThemePercents = {
  full: '100%',
  half: '50%',
  quarter: '25%',
  third: '33.333%',
  threeQuarters: '75%',
  double: '200%',
  none: '0%',
};

export const viewport: ThemeViewport = {
  full: '100vh',
  half: '50vh',
  min: '100vmin',
  max: '100vmax',
};

export const timingConfig: TimingConfig = {
  duration: {
    fast: '0.2s',
    normal: '0.3s',
    slow: '0.5s',
  },
  timing: {
    ease: 'ease',
    linear: 'linear',
    easeIn: 'ease-in',
    easeOut: 'ease-out',
    easeInOut: 'ease-in-out',
  },
};

export const transition: ThemeTransition = {
  ...timingConfig
};

export const animation: ThemeAnimation = {
  duration: {
    fast: '1s',
    normal: '1.5s',
    slow: '2s',
  },
  timing: {
    ...timingConfig.timing
  },
};

export const rotate: ThemeRotate = {
  quarter: '90deg',
  half: '180deg',
  threeQuarters: '270deg',
  full: '360deg',
};

export const pokemonTypes: PokemonTypeColors = {
  normal: '#A8A878',
  fire: '#F08030',
  water: '#6890F0',
  grass: '#78C850',
  electric: '#F8D030',
  ice: '#98D8D8',
  fighting: '#C03028',
  poison: '#A040A0',
  ground: '#E0C068',
  flying: '#A890F0',
  psychic: '#F85888',
  bug: '#A8B820',
  rock: '#B8A038',
  ghost: '#705898',
  dark: '#705848',
  dragon: '#7038F8',
  steel: '#B8B8D0',
  fairy: '#EE99AC',
};

export const lightTheme: Theme = {
  colors: {
    primary: '#ef4444',
    secondary: '#3b82f6',
    background: '#f9fafb',
    surface: '#ffffff',
    text: '#213547',
    textSecondary: '#666666',
    border: '#dddddd',
    error: '#b91c1c',
    errorBackground: '#fee2e2',
    link: '#3b82f6',
    linkHover: '#2563eb',
    headerBackground: '#ef4444',
    headerText: '#ffffff',
    footerBackground: '#f8f8f8',
    footerText: '#666666',
    cardBackground: '#ffffff',
    cardShadow: 'rgba(0, 0, 0, 0.1)',
    buttonBackground: '#f0f0f0',
    buttonBackgroundHover: '#e0e0e0',
    buttonBorder: '#dddddd',
    activeButton: '#3b82f6',
    activeButtonHover: '#2563eb',
    skeletonBackground: '#f5f5f5',
    'skeletonBackground-rgb': '245, 245, 245',
    white: '#ffffff',
    black: '#000000',
    'white-rgb': '255, 255, 255',
    'black-rgb': '0, 0, 0',
  },
  spacing,
  typography,
  borderRadius,
  containers,
  shadows,
  zIndex,
  sizes,
  opacity,
  pokemonTypes,
  scales,
  borders,
  breakpoints,
  percents,
  viewport,
  transition,
  animation,
  rotate,
};

export const darkTheme: Theme = {
  colors: {
    primary: '#ef4444',
    secondary: '#60a5fa',
    background: '#121212',
    surface: '#1e1e1e',
    text: '#e5e7eb',
    textSecondary: '#9ca3af',
    border: '#374151',
    error: '#f87171',
    errorBackground: '#7f1d1d',
    link: '#60a5fa',
    linkHover: '#93c5fd',
    headerBackground: '#991b1b',
    headerText: '#ffffff',
    footerBackground: '#1e1e1e',
    footerText: '#9ca3af',
    cardBackground: '#1e1e1e',
    cardShadow: 'rgba(0, 0, 0, 0.3)',
    buttonBackground: '#374151',
    buttonBackgroundHover: '#4b5563',
    buttonBorder: '#4b5563',
    activeButton: '#3b82f6',
    activeButtonHover: '#2563eb',
    skeletonBackground: '#374151',
    'skeletonBackground-rgb': '55, 65, 81',
    white: '#ffffff',
    black: '#000000',
    'white-rgb': '255, 255, 255',
    'black-rgb': '0, 0, 0',
  },
  spacing,
  typography,
  borderRadius,
  containers,
  shadows,
  zIndex,
  sizes,
  opacity,
  pokemonTypes,
  scales,
  borders,
  breakpoints,
  percents,
  viewport,
  transition,
  animation,
  rotate,
};

export const getTheme = (mode: ThemeMode): Theme => {
  return mode === 'light' ? lightTheme : darkTheme;
};

export const themeToCssVariables = (theme: Theme): Record<string, string> => {
  const cssVars: Record<string, string> = {};
  
  Object.entries(theme.colors).forEach(([key, value]) => {
    cssVars[`--color-${key}`] = value;
  });
  
  Object.entries(theme.spacing).forEach(([key, value]) => {
    cssVars[`--spacing-${key}`] = value;
  });
  
  cssVars['--font-family'] = theme.typography.fontFamily;
  
  Object.entries(theme.typography.fontSize).forEach(([key, value]) => {
    cssVars[`--font-size-${key}`] = value;
  });
  
  Object.entries(theme.typography.fontWeight).forEach(([key, value]) => {
    cssVars[`--font-weight-${key}`] = value;
  });
  
  Object.entries(theme.typography.lineHeight).forEach(([key, value]) => {
    cssVars[`--line-height-${key}`] = value;
  });
  
  Object.entries(theme.borderRadius).forEach(([key, value]) => {
    cssVars[`--border-radius-${key}`] = value;
  });
  
  Object.entries(theme.containers).forEach(([key, value]) => {
    cssVars[`--container-${key}`] = value;
  });
  
  Object.entries(theme.shadows).forEach(([key, value]) => {
    cssVars[`--shadow-${key}`] = value;
  });
  
  Object.entries(theme.zIndex).forEach(([key, value]) => {
    cssVars[`--z-index-${key}`] = value;
  });
  
  Object.entries(theme.sizes).forEach(([key, value]) => {
    cssVars[`--size-${key}`] = value;
  });
  
  Object.entries(theme.opacity).forEach(([key, value]) => {
    cssVars[`--opacity-${key}`] = value;
  });
  
  Object.entries(theme.pokemonTypes).forEach(([key, value]) => {
    cssVars[`--pokemon-type-${key}`] = value;
  });
  
  Object.entries(theme.scales).forEach(([key, value]) => {
    cssVars[`--scale-${key}`] = value;
  });
  
  Object.entries(theme.borders).forEach(([key, value]) => {
    cssVars[`--border-${key}`] = value;
  });
  
  Object.entries(theme.breakpoints).forEach(([key, value]) => {
    cssVars[`--breakpoint-${key}`] = value;
  });
  
  Object.entries(theme.percents).forEach(([key, value]) => {
    cssVars[`--percent-${key}`] = value;
  });
  
  Object.entries(theme.viewport).forEach(([key, value]) => {
    cssVars[`--viewport-${key}`] = value;
  });
  
  Object.entries(theme.transition.duration).forEach(([key, value]) => {
    cssVars[`--transition-duration-${key}`] = value;
  });
  
  Object.entries(theme.transition.timing).forEach(([key, value]) => {
    cssVars[`--transition-timing-${key}`] = value;
  });
  
  Object.entries(theme.animation.duration).forEach(([key, value]) => {
    cssVars[`--animation-duration-${key}`] = value;
  });
  
  Object.entries(theme.animation.timing).forEach(([key, value]) => {
    cssVars[`--animation-timing-${key}`] = value;
  });
  
  Object.entries(theme.rotate).forEach(([key, value]) => {
    cssVars[`--rotate-${key}`] = value;
  });
  
  return cssVars;
};

export const applyTheme = (theme: Theme): void => {
  const root = document.documentElement;
  const cssVars = themeToCssVariables(theme);
  
  Object.entries(cssVars).forEach(([property, value]) => {
    root.style.setProperty(property, value);
  });
};
