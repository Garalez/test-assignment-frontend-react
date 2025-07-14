import { FC, ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ThemeToggle } from '../ThemeToggle/ThemeToggle';
import styles from './Layout.module.css';

interface LayoutProps {
  children: ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const currentPath = location.search || '';
  
  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <Link 
            to={`/${currentPath}`} 
            className={styles.logo} 
          >
            <span>Pokemon Catalog</span>
          </Link>
          <ThemeToggle />
        </div>
      </header>
      
      <main className={styles.main}>
        {children}
      </main>
      
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <p>© 2025 Vlad Galcev</p>
        </div>
      </footer>
    </div>
  );
};
