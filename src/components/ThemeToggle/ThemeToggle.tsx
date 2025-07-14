import { useThemeContext } from '@/context';
import { motion } from 'framer-motion';
import { FC } from 'react';
import styles from './ThemeToggle.module.css';

export const ThemeToggle: FC = () => {
  const { theme, toggleTheme } = useThemeContext();

  const isLight = theme === 'light';
  const ariaLabel = `Switch to ${isLight ? 'dark' : 'light'} mode`;
  const icon = isLight ? '🌙' : '☀️';

  return (
    <motion.button
      className={styles.toggle}
      onClick={toggleTheme}
      aria-label={ariaLabel}
      whileHover={{ scale: "var(--scale-sm)" }}
    >
      <motion.span key={theme}>{icon}</motion.span>
    </motion.button>
  );
}; 
