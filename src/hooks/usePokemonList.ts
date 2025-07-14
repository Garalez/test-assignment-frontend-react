import { pokemons } from '@/api';
import { PokemonListItem } from '@/types';
import { API, CACHE_EXPIRATION, STORAGE } from '@/utils';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const pokemonListCache = new Map<number, {
  data: PokemonListItem[];
  totalCount: number;
  hasNext: boolean;
  hasPrevious: boolean;
  timestamp: number;
}>();

interface UsePokemonListResult {
  pokemonList: PokemonListItem[];
  isLoading: boolean;
  error: Error | null;
  totalCount: number;
  hasNext: boolean;
  hasPrevious: boolean;
  currentPage: number;
}

export const usePokemonList = (limit: number = API.ITEMS_PER_PAGE): UsePokemonListResult => {
  const [searchParams, setSearchParams] = useSearchParams();
  const pageParam = searchParams.get('page');
  
  const [pokemonList, setPokemonList] = useState<PokemonListItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);
  const [totalCount, setTotalCount] = useState<number>(0);
  const [hasNext, setHasNext] = useState<boolean>(false);
  const [hasPrevious, setHasPrevious] = useState<boolean>(false);

  useEffect(() => {
    if (!pageParam) {
      const lastVisitedPage = localStorage.getItem(STORAGE.LAST_VISITED_PAGE);
      if (lastVisitedPage && lastVisitedPage !== '1') {
        setSearchParams({ page: lastVisitedPage });
      }
    }
  }, [pageParam, setSearchParams]);
  
  const currentPage = pageParam ? parseInt(pageParam, 10) : 1;
  
  useEffect(() => {
    localStorage.setItem(STORAGE.LAST_VISITED_PAGE, currentPage.toString());
  }, [currentPage]);

  useEffect(() => {
    const fetchPokemonList = async () => {
      try {
        setIsLoading(true);
        setError(null);
        
        const cachedData = pokemonListCache.get(currentPage);
        const now = Date.now();
        
        if (cachedData && (now - cachedData.timestamp) < CACHE_EXPIRATION) {
          setPokemonList(cachedData.data);
          setTotalCount(cachedData.totalCount);
          setHasNext(cachedData.hasNext);
          setHasPrevious(cachedData.hasPrevious);
          setIsLoading(false);
          return;
        }
        
        const offset = (currentPage - 1) * limit;
        const response = await pokemons.getList(offset, limit);
        const data = response.data;
        
        setPokemonList(data.results);
        setTotalCount(data.count);
        setHasNext(!!data.next);
        setHasPrevious(!!data.previous);
        
        pokemonListCache.set(currentPage, {
          data: data.results,
          totalCount: data.count,
          hasNext: !!data.next,
          hasPrevious: !!data.previous,
          timestamp: now
        });
      } catch (err) {
        setError(err instanceof Error ? err : new Error('An error occurred while fetching Pokemon list'));
      } finally {
        setIsLoading(false);
      }
    };

    fetchPokemonList();
  }, [currentPage, limit]);

  return { pokemonList, isLoading, error, totalCount, hasNext, hasPrevious, currentPage };
};
