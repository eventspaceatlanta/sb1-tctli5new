import React from 'react';
import { useParams } from 'react-router-dom';
import { useVenues } from '@/hooks/useVenues';
import { neighborhoods } from '@/data/neighborhoods';
import SpaceCard from '@/components/sections/SpaceCard';
import { Loader2, MapPin } from 'lucide-react';

export default function VenuesByNeighborhood() {
  const { neighborhoodId } = useParams<{ neighborhoodId: string }>();
  
  const { venues, loading, error } = useVenues({
    searchQuery: neighborhoodId,
    limit: 12
  });

  const neighborhood = neighborhoods.find(n => n.id === neighborhoodId);

  if (!neighborhood) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Neighborhood not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative h-[300px] mb-12 rounded-xl overflow-hidden">
          <img
            src={neighborhood.image}
            alt={neighborhood.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <div className="flex items-center gap-2 text-white/80 mb-2">
              <MapPin className="h-5 w-5" />
              <span>{neighborhood.name}, Atlanta</span>
            </div>
            <h1 className="text-3xl font-bold text-white mb-4">
              Event Venues in {neighborhood.name}
            </h1>
            <p className="text-xl text-white/90">
              {neighborhood.description}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {neighborhood.highlights.map((highlight, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg p-4 shadow-sm"
            >
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                <span className="text-gray-700">{highlight}</span>
              </div>
            </div>
          ))}
        </div>

        {loading ? (
          <div className="flex items-center justify-center py-12">
            <Loader2 className="h-8 w-8 animate-spin text-purple-600" />
          </div>
        ) : error ? (
          <div className="text-center py-12">
            <p className="text-red-500">Error loading venues. Please try again later.</p>
          </div>
        ) : venues.length > 0 ? (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {venues.map((venue) => (
              <SpaceCard
                key={venue.id}
                id={venue.id}
                name={venue.name}
                type={venue.category}
                capacity={venue.capacity}
                location={venue.location}
                image={venue.image}
                price={venue.price}
                rating={venue.rating}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500">
              No venues found in {neighborhood.name}.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}