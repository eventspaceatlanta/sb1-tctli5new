import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useVenues } from '@/hooks/useVenues';
import { Loader2, Check, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function VenueComparison() {
  const [searchParams] = useSearchParams();
  const venueIds = searchParams.get('ids')?.split(',') || [];
  
  const { venues, loading, error } = useVenues({
    venueIds,
    limit: venueIds.length
  });

  const features = [
    'Catering Available',
    'Parking',
    'WiFi',
    'AV Equipment',
    'Outdoor Space',
    'Wheelchair Accessible',
    'Bar Service',
    'Security',
    'Setup/Cleanup',
    'Bridal Suite'
  ];

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-purple-600" />
      </div>
    );
  }

  if (error || venues.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Unable to load venues for comparison</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Compare Venues</h1>

        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="grid grid-cols-[200px_repeat(auto-fit,minmax(200px,1fr))]">
            {/* Header */}
            <div className="bg-gray-50 p-4 border-b"></div>
            {venues.map((venue) => (
              <div key={venue.id} className="p-4 border-b border-l">
                <img
                  src={venue.image}
                  alt={venue.name}
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                <h3 className="font-semibold text-lg">{venue.name}</h3>
                <p className="text-gray-600">{venue.category}</p>
              </div>
            ))}

            {/* Basic Info */}
            <div className="bg-gray-50 p-4 font-medium">Basic Information</div>
            {venues.map((venue) => (
              <div key={venue.id} className="p-4 border-l">
                <div className="space-y-2">
                  <p>Capacity: {venue.capacity}</p>
                  <p>Price: ${venue.price.toLocaleString()}</p>
                  <p>Rating: {venue.rating}/5</p>
                  <p>{venue.location}</p>
                </div>
              </div>
            ))}

            {/* Features */}
            {features.map((feature) => (
              <React.Fragment key={feature}>
                <div className="bg-gray-50 p-4 font-medium border-t">
                  {feature}
                </div>
                {venues.map((venue) => {
                  const hasFeature = venue.amenities.some(
                    a => a.toLowerCase().includes(feature.toLowerCase())
                  );
                  return (
                    <div key={venue.id} className="p-4 border-l border-t flex items-center justify-center">
                      {hasFeature ? (
                        <Check className="h-5 w-5 text-green-500" />
                      ) : (
                        <X className="h-5 w-5 text-red-500" />
                      )}
                    </div>
                  );
                })}
              </React.Fragment>
            ))}
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <Button onClick={() => window.print()}>
            Print Comparison
          </Button>
        </div>
      </div>
    </div>
  );
}