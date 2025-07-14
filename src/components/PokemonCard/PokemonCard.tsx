import { usePokemonImage } from '@/hooks';
import { PokemonListItem } from '@/types';
import { extractPokemonId, formatPokemonName } from '@/utils';
import { motion } from 'framer-motion';
import { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './PokemonCard.module.css';

interface PokemonCardProps {
  pokemon: PokemonListItem;
}

export const PokemonCard: FC<PokemonCardProps> = ({ pokemon }) => {
  const id = extractPokemonId(pokemon.url);
  const formattedName = formatPokemonName(pokemon.name);
  const [isLoading, setIsLoading] = useState(true);
  
  const { imageUrl, handleImageError } = usePokemonImage({
    pokemonId: id,
    pokemonName: pokemon.name
  });
  
  const handleImageLoad = () => {
    setIsLoading(false);
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: undefined,
        ease: undefined,
        type: "tween"
      }}
      style={{
        transition: "var(--transition-duration-normal) var(--transition-timing-easeInOut)"
      }}
    >
      <Link 
        to={`/${id}`} 
        className={styles.link}
        state={{ pokemonTransition: true }}
      >
        <div className={styles.card}>
          <div className={styles.imageContainer}>
            <motion.img 
              src={imageUrl} 
              alt={`${formattedName} avatar`} 
              className={`${styles.image} ${isLoading ? styles.hidden : ''}`}
              loading="lazy"
              onError={handleImageError}
              onLoad={handleImageLoad}
              initial={{ opacity: 0 }}
              animate={{ opacity: isLoading ? 0 : 1 }}
              transition={{ 
                duration: undefined,
                ease: undefined,
                type: "tween"
              }}
              style={{
                transition: "var(--transition-duration-normal) var(--transition-timing-easeOut)"
              }}
            />
          </div>
          <div className={styles.content}>
            <h3 className={styles.name}>{formattedName}</h3>
            <p className={styles.id}>#{id}</p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};
