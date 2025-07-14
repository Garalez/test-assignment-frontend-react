import { useAnimationContext } from '@/context';
import { motion } from 'framer-motion';
import { FC } from 'react';
import styles from './PokemonStats.module.css';

interface PokemonStatsProps {
  stats?: Array<{ stat: { name: string }, base_stat: number }>;
}

export const PokemonStats: FC<PokemonStatsProps> = ({
  stats
}) => {
  const { itemVariants, transitionProps } = useAnimationContext();
  
  return (
    <motion.div className={styles.section} variants={itemVariants} {...transitionProps}>
      <h2 className={styles.sectionTitle}>Base Stats</h2>
      <div className={styles.stats}>
        {!stats ? (
          Array(6).fill(null).map((_, index) => (
            <motion.div 
              key={`skeleton-stat-${index}`} 
              className={styles.stat}
            >
              <span className={styles.statName}>
                <span className={styles.skeletonText}></span>
              </span>
              <span className={styles.statValue}>
                <span className={styles.skeletonText}></span>
              </span>
            </motion.div>
          ))
        ) : (
          stats.map(statInfo => (
            <motion.div 
              key={statInfo.stat.name} 
              className={styles.stat}
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              style={{
                transition: "var(--transition-duration-slow) var(--transition-timing-easeOut)"
              }}
            >
              <span className={styles.statName}>
                {statInfo.stat.name.replace('-', ' ')}
              </span>
              <motion.span 
                className={styles.statValue}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                style={{
                  transition: "var(--transition-duration-normal) var(--transition-timing-easeOut) var(--transition-duration-fast)"
                }}
              >
                {statInfo.base_stat}
              </motion.span>
            </motion.div>
          ))
        )}
      </div>
    </motion.div>
  );
}; 
