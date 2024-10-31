import React from 'react';
import { useGeocoding } from '@/hooks/useGeocoding';
import { Loader2 } from 'lucide-react';

interface VenueMapProps {
  address: string;
}

export default function VenueMap({ address }: VenueMapProps) {
  const { coordinates, loading, error } = useGeocoding(address);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64 bg-gray-100 rounded-lg">
        <Loader2 className="h-8 w-8 animate-spin text-purple-600" />
      </div>
    );
  }

  if (error || !coordinates) {
    return (
      <div className="flex items-center justify-center h-64 bg-gray-100 rounded-lg">
        <p className="text-gray-500">Map unavailable</p>
      </div>
    );
  }

  const mapUrl = `https://www.google.com/maps/embed/v1/place?key=${
    import.meta.env.VITE_GOOGLE_MAPS_API_KEY
  }&q=${encodeURIComponent(address)}&zoom=15`;

  return (
    <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
      <iframe
        title="Venue location"
        src={mapUrl}
        className="w-full h-full border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}