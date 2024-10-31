import { useQuery } from '@tanstack/react-query';
import { searchVenuesByCity } from '@/services/api';
import type { Venue } from '@/types/venue';

interface UseVenuesByCityParams {
  cityId?: string;
  page?: number;
}

export function useVenuesByCity({
  cityId = '41096', // Default to Atlanta
  page = 1
}: UseVenuesByCityParams = {}) {
  return useQuery<Venue[], Error>({
    queryKey: ['venuesByCity', cityId, page],
    queryFn: () => searchVenuesByCity(cityId, page),
    staleTime: 5 * 60 * 1000, // Consider data fresh for 5 minutes
    retry: 2,
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
  });
}