import { useQuery } from '@tanstack/react-query';
import { searchVenuesByBoundingBox } from '@/services/api';
import type { Venue } from '@/types/venue';

interface UseVenuesByBoundingBoxParams {
  southWest: {
    lat: number;
    lng: number;
  };
  northEast: {
    lat: number;
    lng: number;
  };
  page?: number;
}

export function useVenuesByBoundingBox({
  southWest,
  northEast,
  page = 1
}: UseVenuesByBoundingBoxParams) {
  return useQuery<Venue[], Error>({
    queryKey: ['venuesByBoundingBox', southWest, northEast, page],
    queryFn: () => searchVenuesByBoundingBox(southWest, northEast, page),
    enabled: Boolean(southWest && northEast),
    staleTime: 5 * 60 * 1000, // Consider data fresh for 5 minutes
    retry: 2,
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
  });
}