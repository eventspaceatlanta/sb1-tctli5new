import React from 'react';
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
import SEO from '../SEO';
import PhotoGallery from './PhotoGallery';
import Reviews from './Reviews';
import BookingForm from './BookingForm';
import SimilarVenues from './SimilarVenues';

interface VenueDetailsProps {
  venue: {
    name: string;
    type: string;
    location: string;
    capacity: number;
    image: string;
    price: string;
    rating: number;
  };
}

const amenities = [
  { name: 'WiFi', icon: Wifi },
  { name: 'Parking', icon: ParkingCircle },
  { name: 'Sound System', icon: Music },
  { name: 'Catering', icon: UtensilsCrossed },
];

const photos = [
  {
    url: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80',
    alt: 'Venue main hall'
  },
  {
    url: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&q=80',
    alt: 'Venue detail view'
  },
  {
    url: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80',
    alt: 'Venue setup example'
  }
];

export default function VenueDetails({ venue }: VenueDetailsProps) {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <SEO 
        title={`${venue.name} - Event Venue in ${venue.location}`}
        description={`Book ${venue.name} for your next event. ${venue.type} in ${venue.location} with capacity for ${venue.capacity} guests.`}
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
                <span className="text-purple-600 font-medium">{venue.type}</span>
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
                  <span>Starting at {venue.price}</span>
                </div>
              </div>

              <PhotoGallery photos={photos} />

              <div className="mt-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">About this space</h2>
                <p className="text-gray-600 leading-relaxed">
                  This stunning venue offers the perfect blend of elegance and functionality. 
                  With state-of-the-art facilities and versatile spaces, it's ideal for both 
                  intimate gatherings and large-scale events. The venue features high ceilings, 
                  natural light, and modern amenities to ensure your event is a success.
                </p>
              </div>

              <div className="mt-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Amenities</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {amenities.map((amenity) => (
                    <div key={amenity.name} className="flex items-center gap-2 text-gray-600">
                      <amenity.icon className="h-5 w-5" />
                      <span>{amenity.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Reviews />
            </div>

            <div className="lg:w-1/3">
              <div className="bg-white rounded-xl p-6 shadow-sm sticky top-24">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Book this venue</h3>
                <BookingForm />
              </div>
            </div>
          </div>

          <SimilarVenues />
        </motion.div>
      </div>
    </div>
  );
}