/**
 * Extracts the Pokemon ID from its URL
 * @param url Pokemon URL from the API
 * @returns Pokemon ID as a number
 */
export const extractPokemonId = (url: string): number => {
  const parts = url.split('/');
  const idStr = parts[parts.length - 2];

  return parseInt(idStr, 10);
};

export const formatPokemonName = (name: string): string => name.charAt(0).toUpperCase() + name.slice(1);
