import { ErrorMessage, ImageSkeleton, Pagination, PokemonCard } from '@/components';
import { usePageTransition, usePokemonList } from '@/hooks';
import { API } from '@/utils';
import { AnimatePresence, motion } from 'framer-motion';
import { FC, useCallback, useMemo } from 'react';
import styles from './PokemonListPage.module.css';

export const PokemonListPage: FC = () => {
  const { 
    pokemonList, 
    isLoading, 
    error, 
    totalCount,
    currentPage
  } = usePokemonList(API.ITEMS_PER_PAGE);
  
  const { pageVariants, itemVariants, transitionProps, isTransitioning } = usePageTransition();
  const totalPages = Math.ceil(totalCount / API.ITEMS_PER_PAGE);

  if (error) {
    return (
      <div className={styles.container}>
        <ErrorMessage 
          title="Failed to load Pokémon" 
          message={error.message} 
        />
      </div>
    );
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const skeletons = useMemo(() => 
    Array(API.ITEMS_PER_PAGE).fill(null).map((_, index) => (
    <ImageSkeleton key={`skeleton-${index}`} />
  )), []);

  const renderContent = useCallback(() => {
    if (isLoading || isTransitioning) return skeletons;

    return pokemonList.map(pokemon => (
      <motion.div 
        key={pokemon.name}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <PokemonCard pokemon={pokemon} />
      </motion.div>
    ));
  }, [pokemonList, isLoading, isTransitioning]);

  return (
    <motion.div 
      className={styles.container}
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      {...transitionProps}
    >
      <motion.header 
        className={styles.header}
        variants={itemVariants}
        {...transitionProps}
      >
        <motion.h1 
          className={styles.title}
          variants={itemVariants}
          {...transitionProps}
        >
          Pokemon Catalog
        </motion.h1>
        <motion.h2 
          className={styles.subtitle}
          variants={itemVariants}
          {...transitionProps}
        >
          Discover all {isLoading || isTransitioning ? '...' : totalCount} Pokémon species
        </motion.h2>
      </motion.header>

      <AnimatePresence mode="wait">
        <motion.div 
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          key={`pokemon-grid-${currentPage}`}
          style={{
            transition: "var(--transition-duration-normal) var(--transition-timing-easeInOut)"
          }}
        >
          {renderContent()}
        </motion.div>
      </AnimatePresence>

      {!isLoading && totalPages > 1 ? (
        <Pagination 
          currentPage={currentPage} 
          totalPages={totalPages} 
        />
      ) : null}
    </motion.div>
  );
};
