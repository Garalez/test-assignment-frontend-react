import { useAnimationContext } from '@/context';
import { motion } from 'framer-motion';
import { FC } from 'react';
import styles from './PokemonAbilities.module.css';

interface PokemonAbilitiesProps {
  abilities?: Array<{ ability: { name: string }, is_hidden: boolean }>;
}

export const PokemonAbilities: FC<PokemonAbilitiesProps> = ({
  abilities
}) => {
  const { itemVariants, transitionProps } = useAnimationContext();
  
  return (
    <motion.div className={styles.section} variants={itemVariants} {...transitionProps}>
      <h2 className={styles.sectionTitle}>Abilities</h2>
      <div className={styles.abilities}>
        {!abilities ? (
          <>
            <div className={`${styles.ability} ${styles.skeletonAbility}`}></div>
            <div className={`${styles.ability} ${styles.skeletonAbility}`}></div>
          </>
        ) : (
          abilities.map(abilityInfo => (
            <motion.span 
              key={abilityInfo.ability.name} 
              className={styles.ability}
              whileHover={{ scale: "var(--scale-sm)" }}
              transition={{ 
                type: "spring", 
                stiffness: 400, 
                damping: 10 
              }}
            >
              {abilityInfo.ability.name.replace('-', ' ')}
              {abilityInfo.is_hidden ? ' (Hidden)' : ''}
            </motion.span>
          ))
        )}
      </div>
    </motion.div>
  );
};
