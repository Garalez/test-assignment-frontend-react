import { ImageSkeleton } from '@/components';
import { useAnimationContext } from '@/context';
import { motion } from 'framer-motion';
import { FC } from 'react';
import styles from './PokemonHeader.module.css';

interface PokemonHeaderProps {
  imageUrl: string;
  formattedName: string;
  id?: string;
  types?: Array<{ type: { name: string } }>;
  isImageLoading: boolean;
  handleImageLoad: () => void;
  handleImageError: () => void;
}

export const PokemonHeader: FC<PokemonHeaderProps> = ({
  imageUrl,
  formattedName,
  id = '',
  types,
  isImageLoading,
  handleImageLoad,
  handleImageError
}) => {
  const { itemVariants, transitionProps } = useAnimationContext();
  
  return (
    <motion.div className={styles.header} variants={itemVariants} {...transitionProps}>
      <div className={styles.imageContainer}>
        {isImageLoading ? <ImageSkeleton /> : null}
        <motion.img 
          src={imageUrl} 
          alt={`${formattedName} official artwork`} 
          className={`${styles.image} ${isImageLoading ? styles.hidden : ''}`}
          onError={handleImageError}
          onLoad={handleImageLoad}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ 
            opacity: isImageLoading ? 0 : 1, 
            scale: isImageLoading ? 0.9 : 1 
          }}
          style={{
            transition: "var(--transition-duration-normal) var(--transition-timing-easeOut)"
          }}
        />
      </div>
      <motion.h1 
        className={styles.name}
        variants={itemVariants}
        {...transitionProps}
      >
        {formattedName}
      </motion.h1>
      <motion.p 
        className={styles.id}
        variants={itemVariants}
        {...transitionProps}
      >
        {`#${id}`}
      </motion.p>
      <motion.div 
        className={styles.types}
        variants={itemVariants}
        {...transitionProps}
      >
        {!types ? (
          <>
            <div className={`${styles.type} ${styles.skeletonType}`}></div>
            <div className={`${styles.type} ${styles.skeletonType}`}></div>
          </>
        ) : (
          types.map(typeInfo => (
            <motion.span 
              key={typeInfo.type.name}
              className={`${styles.type} ${styles[typeInfo.type.name]}`}
              whileHover={{ scale: "var(--scale-sm)" }}
              transition={{ 
                type: "spring", 
                stiffness: 400, 
                damping: 10 
              }}
            >
              {typeInfo.type.name}
            </motion.span>
          ))
        )}
      </motion.div>
    </motion.div>
  );
}; 
