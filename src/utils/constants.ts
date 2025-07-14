export const API = {
  BASE_URL: 'https://pokeapi.co/api/v2',
  ITEMS_PER_PAGE: 20,
};

const BASE_URL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon';

export const IMAGES = {
  POKEMON: {
    OFFICIAL_ARTWORK: (id: number) => 
      `${BASE_URL}/other/official-artwork/${id}.png`,
    DEFAULT_SPRITE: (id: number) => 
      `${BASE_URL}/${id}.png`,
    PLACEHOLDER: (name: string, size = 200) => 
      `https://ui-avatars.com/api/?name=${name}&background=random&color=fff&size=${size}`,
  },
}; 

export const STORAGE = {
  LAST_VISITED_PAGE: 'last_visited_page',
}; 

export const CACHE_EXPIRATION = 5 * 60 * 1000; // 5 minutes
