import { pokemons } from '@/api';
import { Pokemon } from '@/types';
import { CACHE_EXPIRATION, STORAGE } from '@/utils';
import { useEffect, useState } from 'react';

const pokemonCache = new Map<string, {
  data: Pokemon;
  timestamp: number;
}>();

interface UsePokemonResult {
  pokemon: Pokemon | null;
  isLoading: boolean;
  error: Error | null;
  backLink: string;
}

export const usePokemon = (id: string | number): UsePokemonResult => {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);
  
  const lastVisitedPage = localStorage.getItem(STORAGE.LAST_VISITED_PAGE) || '1';
  const backLink = lastVisitedPage !== '1' ? `/?page=${lastVisitedPage}` : '/';

  useEffect(() => {
    const fetchPokemon = async () => {
      if (!id) return;
      
      try {
        setIsLoading(true);
        setError(null);
        
        const cacheKey = id.toString();
        const cachedData = pokemonCache.get(cacheKey);
        const now = Date.now();
        
        if (cachedData && (now - cachedData.timestamp) < CACHE_EXPIRATION) {
          setPokemon(cachedData.data);
          setIsLoading(false);
          return;
        }
        
        const response = await pokemons.getOne(id);
        setPokemon(response.data);
        
        pokemonCache.set(cacheKey, {
          data: response.data,
          timestamp: now
        });
      } catch (err) {
        setError(err instanceof Error ? err : new Error(`An error occurred while fetching Pokemon with id: ${id}`));
      } finally {
        setIsLoading(false);
      }
    };

    fetchPokemon();
  }, [id]);

  return { pokemon, isLoading, error, backLink };
};
