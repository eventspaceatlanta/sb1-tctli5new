import { useQuery } from '@tanstack/react-query';
import { getVenueById } from '@/services/api';
import type { Venue } from '@/types/venue';

export function useVenue(id: string) {
  return useQuery<Venue | null, Error>({
    queryKey: ['venue', id],
    queryFn: () => getVenueById(id),
    enabled: !!id,
    staleTime: 5 * 60 * 1000, // Consider data fresh for 5 minutes
    retry: 2,
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
  });
}