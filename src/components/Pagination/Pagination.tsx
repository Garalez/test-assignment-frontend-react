import { motion } from 'framer-motion';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Pagination.module.css';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange?: (page: number) => void;
}

const ARROWS = {
  FirstPage: '«',
  PreviousPage: '‹',
  NextPage: '›',
  LastPage: '»',
}

export const Pagination: FC<PaginationProps> = ({ 
  currentPage, 
  totalPages,
  onPageChange 
}) => {
  const navigate = useNavigate();

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;

    if (onPageChange) {
      onPageChange(page);
    } else {
      navigate(`/?page=${page}`, { 
        state: { pageTransition: true }
      });
    }
  };

  const buttonVariants = {
    hover: { 
      scale: "var(--scale-sm)",
      transition: { type: "spring", stiffness: 400, damping: 10 }
    },
    tap: { scale: 0.95 }
  };

  return (
    <motion.div 
      className={styles.pagination}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      style={{
        transition: "var(--transition-duration-normal) var(--transition-timing-easeOut)"
      }}
      role="navigation"
      aria-label="Pagination"
    >
      <motion.button 
        className={styles.button}
        onClick={() => handlePageChange(1)}
        disabled={currentPage === 1}
        aria-label="Go to first page"
        variants={buttonVariants}
        whileHover="hover"
        whileTap="tap"
      >
        {ARROWS.FirstPage}
      </motion.button>
      
      <motion.button 
        className={styles.button}
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="Go to previous page"
        variants={buttonVariants}
        whileHover="hover"
        whileTap="tap"
      >
        {ARROWS.PreviousPage}
      </motion.button>
      
      <motion.span 
        className={styles.pageInfo}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        style={{
          transition: "var(--transition-duration-normal) var(--transition-timing-easeOut) var(--transition-duration-fast)"
        }}
      >
        Page {currentPage} of {totalPages}
      </motion.span>
      
      <motion.button 
        className={styles.button}
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label="Go to next page"
        variants={buttonVariants}
        whileHover="hover"
        whileTap="tap"
      >
        {ARROWS.NextPage}
      </motion.button>
      
      <motion.button 
        className={styles.button}
        onClick={() => handlePageChange(totalPages)}
        disabled={currentPage === totalPages}
        aria-label="Go to last page"
        variants={buttonVariants}
        whileHover="hover"
        whileTap="tap"
      >
        {ARROWS.LastPage}
      </motion.button>
    </motion.div>
  );
};
