import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { useVenues } from '@/hooks/useVenues';
import SpaceCard from '@/components/sections/SpaceCard';
import { Loader2 } from 'lucide-react';
import SEO from '@/components/SEO';

export default function SearchResults() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  
  const { data: venues = [], isLoading, error } = useVenues({
    searchQuery: query,
    limit: 20
  });

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <SEO 
        title={`Search Results for "${query}" - Event Space Atlanta`}
        description={`Find event venues in Atlanta matching "${query}". Browse and book your perfect venue.`}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Search Results for "{query}"
        </h1>
        
        {isLoading ? (
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
              No venues found matching "{query}". Try a different search term.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}