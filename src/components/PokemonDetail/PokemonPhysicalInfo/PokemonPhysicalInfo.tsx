import { useAnimationContext } from '@/context';
import { motion } from 'framer-motion';
import { FC } from 'react';
import styles from './PokemonPhysicalInfo.module.css';

interface PokemonPhysicalInfoProps {
  height: number;
  weight: number;
}

export const PokemonPhysicalInfo: FC<PokemonPhysicalInfoProps> = ({
  height,
  weight
}) => {
  const { itemVariants, transitionProps } = useAnimationContext();
  
  return (
    <motion.div className={styles.physicalInfo} variants={itemVariants} {...transitionProps}>
      <motion.div 
        className={styles.infoItem}
        whileHover={{ scale: "var(--scale-sm)" }}
        transition={{ 
          type: "spring", 
          stiffness: 400, 
          damping: 10 
        }}
      >
        <span className={styles.infoLabel}>Height</span>
        <span className={styles.infoValue}>
          {`${height} m`}
        </span>
      </motion.div>
      <motion.div 
        className={styles.infoItem}
        whileHover={{ scale: "var(--scale-sm)" }}
        transition={{ 
          type: "spring", 
          stiffness: 400, 
          damping: 10 
        }}
      >
        <span className={styles.infoLabel}>Weight</span>
        <span className={styles.infoValue}>
          {`${weight} kg`}
        </span>
      </motion.div>
    </motion.div>
  );
};
