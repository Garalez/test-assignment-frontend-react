import { IMAGES } from '@/utils';
import { useState } from 'react';

interface UsePokemonImageProps {
  pokemonId: number;
  pokemonName: string;
  officialArtwork?: string | null;
  defaultSprite?: string | null;
}

interface UsePokemonImageResult {
  imageUrl: string;
  handleImageError: () => void;
}

export const usePokemonImage = ({
  pokemonId,
  pokemonName,
  officialArtwork,
  defaultSprite
}: UsePokemonImageProps): UsePokemonImageResult => {
  const [imageErrorCount, setImageErrorCount] = useState(0);

  const imageSources = [
    officialArtwork || IMAGES.POKEMON.OFFICIAL_ARTWORK(pokemonId),
    defaultSprite || IMAGES.POKEMON.DEFAULT_SPRITE(pokemonId),
    IMAGES.POKEMON.PLACEHOLDER(pokemonName)
  ];

  const handleImageError = () => {
    setImageErrorCount(prev => Math.min(prev + 1, imageSources.length - 1));
  };

  const imageUrl = imageSources[imageErrorCount];

  return { imageUrl, handleImageError };
};
