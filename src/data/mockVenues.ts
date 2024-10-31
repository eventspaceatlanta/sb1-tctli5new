import { Venue } from '@/types/venue';

export const mockVenues = [
  {
    id: 'historic-theater-1',
    name: 'Fox Theatre',
    description: 'Historic theater with stunning architecture',
    category: 'concert-halls',
    subCategory: 'theaters',
    subSubCategory: 'historic-theaters',
    capacity: 4000,
    location: 'Downtown',
    image: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&q=80',
    price: 15000,
    rating: 4.9,
    amenities: ['Stage', 'Orchestra Pit', 'Dressing Rooms', 'Sound System'],
    features: {
      wifi: true,
      parking: true,
      audioVisual: true,
      catering: true,
      accessibility: true,
      security: true
    }
  },
  {
    id: 'symphony-hall-1',
    name: 'Atlanta Symphony Hall',
    description: 'Premier venue for classical performances',
    category: 'concert-halls',
    subCategory: 'auditoriums',
    subSubCategory: 'symphony-halls',
    capacity: 1800,
    location: 'Midtown',
    image: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&q=80',
    price: 12000,
    rating: 4.8,
    amenities: ['Orchestra Shell', 'Acoustic Panels', 'Green Room', 'Recording Equipment'],
    features: {
      wifi: true,
      parking: true,
      audioVisual: true,
      catering: true,
      accessibility: true,
      security: true
    }
  },
  {
    id: 'amphitheater-1',
    name: 'Chastain Park Amphitheater',
    description: 'Beautiful outdoor concert venue',
    category: 'concert-halls',
    subCategory: 'amphitheaters',
    subSubCategory: 'park-amphitheaters',
    capacity: 6000,
    location: 'Buckhead',
    image: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&q=80',
    price: 18000,
    rating: 4.7,
    amenities: ['Covered Stage', 'Lawn Seating', 'Concessions', 'Backstage Area'],
    features: {
      wifi: true,
      parking: true,
      audioVisual: true,
      catering: true,
      accessibility: true,
      security: true
    }
  }
];

export const getVenuesByCategory = (category: string, subCategory?: string, subSubCategory?: string) => {
  return mockVenues.filter(venue => 
    venue.category === category && 
    (!subCategory || venue.subCategory === subCategory) &&
    (!subSubCategory || venue.subSubCategory === subSubCategory)
  );
};

export const getVenueById = (id: string) => {
  return mockVenues.find(venue => venue.id === id);
};