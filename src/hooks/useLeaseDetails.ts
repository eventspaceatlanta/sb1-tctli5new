import { useQuery } from '@tanstack/react-query';
import { getLeaseDetails } from '@/services/api';
import type { LeaseDetails } from '@/types/venue';

export function useLeaseDetails(listingId: string) {
  return useQuery<LeaseDetails | null, Error>({
    queryKey: ['leaseDetails', listingId],
    queryFn: () => getLeaseDetails(listingId),
    enabled: !!listingId,
    staleTime: 5 * 60 * 1000, // Consider data fresh for 5 minutes
    retry: 2,
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
  });
}