import React from 'react';
import { Star } from 'lucide-react';
import ReviewCard from './ReviewCard';
import { useVenueReviews } from '@/hooks/useVenueReviews';
import { Loader2 } from 'lucide-react';

interface ReviewsProps {
  venueId: string;
}

export default function Reviews({ venueId }: ReviewsProps) {
  const { reviews, loading, error, averageRating } = useVenueReviews(venueId);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <Loader2 className="h-8 w-8 animate-spin text-purple-600" />
      </div>
    );
  }

  if (error) {
    return null;
  }

  if (!reviews.length) {
    return (
      <div className="bg-white rounded-xl p-8 shadow-sm mt-8">
        <p className="text-gray-500 text-center">No reviews yet for this venue.</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl p-8 shadow-sm mt-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900">Reviews</h2>
          <p className="text-gray-500 mt-1">{reviews.length} reviews from verified bookings</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-5 w-5 ${
                  i < Math.floor(averageRating)
                    ? 'text-yellow-400 fill-yellow-400'
                    : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <span className="font-semibold text-lg">{averageRating.toFixed(1)}</span>
        </div>
      </div>

      <div className="space-y-2">
        {reviews.map((review) => (
          <ReviewCard key={review.id} {...review} />
        ))}
      </div>
    </div>
  );
}