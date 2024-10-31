import { useState, useEffect } from 'react';
import { mockReviews } from '@/data/mockReviews';

interface Review {
  id: string;
  author: string;
  date: string;
  rating: number;
  content: string;
  helpful: number;
  avatar: string;
}

interface VenueReviewsState {
  reviews: Review[];
  loading: boolean;
  error: string | null;
  averageRating: number;
}

export function useVenueReviews(venueId: string) {
  const [state, setState] = useState<VenueReviewsState>({
    reviews: [],
    loading: true,
    error: null,
    averageRating: 0
  });

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setState(prev => ({ ...prev, loading: true, error: null }));
        
        // In a real app, this would be an API call
        const venueReviews = mockReviews[venueId] || [];
        const avgRating = venueReviews.reduce((acc, review) => acc + review.rating, 0) / (venueReviews.length || 1);
        
        setState({
          reviews: venueReviews,
          loading: false,
          error: null,
          averageRating: avgRating
        });
      } catch (error) {
        setState(prev => ({
          ...prev,
          loading: false,
          error: 'Failed to fetch reviews',
          averageRating: 0
        }));
      }
    };

    fetchReviews();
  }, [venueId]);

  return state;
}