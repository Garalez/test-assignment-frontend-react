import { motion } from 'framer-motion';
import { FC } from 'react';
import styles from './ErrorMessage.module.css';

interface ErrorMessageProps {
  title?: string;
  message: string;
}

const EXCLAMATION_MARK = '⚠️';

export const ErrorMessage: FC<ErrorMessageProps> = ({ 
  title = 'Error', 
  message 
}) =>  (
  <motion.div 
    className={styles.container} 
    role="alert"
    initial={{ opacity: 0, scale: 0.8, y: 20 }}
    animate={{ opacity: 1, scale: 1, y: 0 }}
    transition={{ 
      type: "spring", 
      stiffness: 300, 
      damping: 15
    }}
    style={{
      transition: "var(--transition-duration-normal) var(--transition-timing-easeOut)"
    }}
  >
    <motion.h3 
      className={styles.title}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      style={{
        transition: "var(--transition-duration-normal) var(--transition-timing-easeOut) var(--transition-duration-fast)"
      }}
    >
      <motion.span
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ 
          type: "spring", 
          stiffness: 400, 
          damping: 10,
          delay: 0.4 
        }}
      >
        {EXCLAMATION_MARK}
      </motion.span> {title}
    </motion.h3>
    <motion.p 
      className={styles.message}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      style={{
        transition: "var(--transition-duration-normal) var(--transition-timing-easeOut) var(--transition-duration-slow)"
      }}
    >
      {message}
    </motion.p>
  </motion.div>
);
