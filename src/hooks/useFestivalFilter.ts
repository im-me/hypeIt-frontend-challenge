import { useMemo } from 'react';
import { FestivalType } from 'src/api';

export const useFestivalFilter = (
  festivals: FestivalType[],
  searchTerm: string
) => {
  return useMemo(() => {
    const trimmedSearchTerm = searchTerm.trim().toLowerCase();

    if (!trimmedSearchTerm) {
      return festivals;
    }

    return festivals.filter(
      (festival) =>
        festival.name?.toLowerCase().includes(trimmedSearchTerm) ||
        festival.location?.city?.toLowerCase().includes(trimmedSearchTerm)
    );
  }, [festivals, searchTerm]);
};
