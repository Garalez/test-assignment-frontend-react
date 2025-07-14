import { ErrorMessage, PageSkeleton } from '@/components';
import {
    PokemonAbilities,
    PokemonHeader,
    PokemonPhysicalInfo,
    PokemonStats
} from '@/components/PokemonDetail';
import { useAnimationContext } from '@/context';
import { usePokemon, usePokemonImage } from '@/hooks';
import { formatPokemonName } from '@/utils';
import { AnimatePresence, motion } from 'framer-motion';
import { FC, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import styles from './PokemonDetailPage.module.css';

export const PokemonDetailPage: FC = () => {
  const { id } = useParams<{ id: string }>();
  const { pokemon, isLoading, error, backLink } = usePokemon(id || '');
  const [isImageLoading, setIsImageLoading] = useState(true);
  const { pageVariants, itemVariants, transitionProps, isTransitioning } = useAnimationContext();

  const { imageUrl, handleImageError } = usePokemonImage({
    pokemonId: pokemon?.id || Number(id) || 0,
    pokemonName: pokemon?.name || '',
    officialArtwork: pokemon?.sprites?.other?.['official-artwork']?.front_default || null,
    defaultSprite: pokemon?.sprites?.front_default || null
  });

  const handleImageLoad = () => {
    setIsImageLoading(false);
  };

  if (error) {
    return (
      <div className={styles.container}>
        <Link to={backLink} className={styles.backButton}>
          ← Back to Pokémon List
        </Link>
        <ErrorMessage 
          title="Failed to load Pokémon" 
          message={error?.message || 'Pokemon not found'} 
        />
      </div>
    );
  }

  if (isLoading || isTransitioning) return <PageSkeleton type="detail" />;

  const formattedName = pokemon ? formatPokemonName(pokemon.name) : `Pokemon #${id}`;
  const pokemonHeight = pokemon?.height ? pokemon.height / 10 : 0;
  const pokemonWeight = pokemon?.weight ? pokemon.weight / 10 : 0;

  return (
    <motion.div 
      className={styles.container}
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      {...transitionProps}
      key={`pokemon-detail-${id}`}
    >
      <motion.div variants={itemVariants} {...transitionProps}>
        <Link to={backLink} className={styles.backButton}>
          ← Back to Pokémon List
        </Link>
      </motion.div>

      <AnimatePresence mode="wait">
        <motion.div 
          className={styles.card}
          key={`pokemon-card-${id}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <PokemonHeader
            imageUrl={imageUrl}
            formattedName={formattedName}
            id={pokemon?.id?.toString() || id}
            types={pokemon?.types}
            isImageLoading={isImageLoading}
            handleImageLoad={handleImageLoad}
            handleImageError={handleImageError}
          />

          <motion.div className={styles.content} variants={itemVariants} {...transitionProps}>
            <PokemonPhysicalInfo
              height={pokemonHeight}
              weight={pokemonWeight}
            />

            <PokemonAbilities
              abilities={pokemon?.abilities}
            />

            <PokemonStats
              stats={pokemon?.stats}
            />
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};
