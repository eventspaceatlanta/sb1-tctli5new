import { useQuery } from '@tanstack/react-query';
import { searchVenuesByState } from '@/services/api';
import type { Venue } from '@/types/venue';

interface UseVenuesByStateParams {
  stateId: string;
  page?: number;
}

export function useVenuesByState({
  stateId,
  page = 1
}: UseVenuesByStateParams) {
  return useQuery<Venue[], Error>({
    queryKey: ['venuesByState', stateId, page],
    queryFn: () => searchVenuesByState({
      stateId,
      page
    }),
    enabled: Boolean(stateId),
    staleTime: 5 * 60 * 1000, // Consider data fresh for 5 minutes
    retry: 2,
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
  });
}