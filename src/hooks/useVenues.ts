import { useQuery } from '@tanstack/react-query';
import { searchVenues } from '@/services/api';
import type { SearchParams, Venue } from '@/types/venue';

export function useVenues(params: SearchParams) {
  return useQuery<Venue[], Error>({
    queryKey: ['venues', params],
    queryFn: () => searchVenues(params),
    staleTime: 5 * 60 * 1000, // Consider data fresh for 5 minutes
    keepPreviousData: true,
    retry: 2,
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
  });
}