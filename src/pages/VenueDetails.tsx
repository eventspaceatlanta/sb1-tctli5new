import React from 'react';
import { useParams } from 'react-router-dom';
import { useVenue } from '@/hooks/useVenue';
import { motion } from 'framer-motion';
import { 
  Users,
  MapPin,
  Clock,
  DollarSign,
  Star,
  Calendar,
  Wifi,
  ParkingCircle,
  Music,
  UtensilsCrossed
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import SEO from '@/components/SEO';
import PhotoGallery from '@/components/venue/PhotoGallery';
import Reviews from '@/components/venue/Reviews';
import BookingForm from '@/components/venue/BookingForm';
import SimilarVenues from '@/components/venue/SimilarVenues';
import LoadingSpinner from '@/components/ui/LoadingSpinner';

const amenityIcons = {
  wifi: Wifi,
  parking: ParkingCircle,
  'sound system': Music,
  catering: UtensilsCrossed
};

export default function VenueDetails() {
  const { id } = useParams<{ id: string }>();
  const { data: venue, isLoading, error } = useVenue(id || '');

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (error || !venue) {
    return (
      <div className="min-h-screen bg-gray-50 pt-24 pb-16 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Venue Not Found</h1>
          <p className="text-gray-600">The venue you're looking for doesn't exist or has been removed.</p>
          <Button 
            className="mt-8"
            onClick={() => window.history.back()}
          >
            Go Back
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <SEO 
        title={`${venue.name} - Event Venue in ${venue.location}`}
        description={`Book ${venue.name} for your next event. ${venue.category} in ${venue.location} with capacity for ${venue.capacity} guests.`}
        image={venue.image}
        type="article"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-2/3">
              <h1 className="text-3xl font-bold text-gray-900">{venue.name}</h1>
              <div className="flex items-center gap-4 mt-2">
                <span className="text-purple-600 font-medium">{venue.category}</span>
                <div className="flex items-center gap-1">
                  <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                  <span className="font-medium">{venue.rating}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 mt-4">
                <div className="flex items-center gap-2 text-gray-600">
                  <MapPin className="h-5 w-5" />
                  <span>{venue.location}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Users className="h-5 w-5" />
                  <span>Up to {venue.capacity} guests</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Clock className="h-5 w-5" />
                  <span>8 hours</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <DollarSign className="h-5 w-5" />
                  <span>Starting at ${venue.price.toLocaleString()}</span>
                </div>
              </div>

              <PhotoGallery venue={venue} />

              <div className="mt-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">About this space</h2>
                <p className="text-gray-600 leading-relaxed">
                  {venue.description}
                </p>
              </div>

              <div className="mt-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Amenities</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {venue.amenities.map((amenity) => {
                    const IconComponent = amenityIcons[amenity.toLowerCase() as keyof typeof amenityIcons];
                    return (
                      <div key={amenity} className="flex items-center gap-2 text-gray-600">
                        {IconComponent && <IconComponent className="h-5 w-5" />}
                        <span>{amenity}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              <Reviews venueId={venue.id} />
            </div>

            <div className="lg:w-1/3">
              <div className="bg-white rounded-xl p-6 shadow-sm sticky top-24">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Book this venue</h3>
                <BookingForm venue={venue} />
              </div>
            </div>
          </div>

          <SimilarVenues category={venue.category} currentVenueId={venue.id} />
        </motion.div>
      </div>
    </div>
  );
}