import { useQuery } from '@tanstack/react-query';
import { searchVenuesByCoordinates } from '@/services/api';
import type { Venue } from '@/types/venue';

interface UseVenuesByLocationParams {
  latitude: number;
  longitude: number;
  radius?: number;
  page?: number;
}

export function useVenuesByLocation({
  latitude,
  longitude,
  radius = 5,
  page = 1
}: UseVenuesByLocationParams) {
  return useQuery<Venue[], Error>({
    queryKey: ['venuesByLocation', latitude, longitude, radius, page],
    queryFn: () => searchVenuesByCoordinates(latitude, longitude, radius, page),
    enabled: Boolean(latitude && longitude),
    staleTime: 5 * 60 * 1000, // Consider data fresh for 5 minutes
    retry: 2,
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
  });
}