import { Venue } from '@/types/venue';

export const mockVenues: Venue[] = [
  {
    id: '1',
    name: 'Peachtree Ballroom',
    description: 'Elegant ballroom perfect for weddings and galas',
    category: 'wedding-venues',
    capacity: 300,
    location: 'Downtown Atlanta',
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80',
    price: 5000,
    amenities: ['Catering Kitchen', 'Dance Floor', 'Bridal Suite'],
    rating: 4.9
  },
  {
    id: '2',
    name: 'Midtown Conference Center',
    description: 'Modern space for corporate events',
    category: 'corporate-spaces',
    capacity: 500,
    location: 'Midtown',
    image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&q=80',
    price: 3000,
    amenities: ['AV Equipment', 'Breakout Rooms', 'High-speed Internet'],
    rating: 4.7
  },
  {
    id: '3',
    name: 'Historic Factory Lofts',
    description: 'Industrial chic venue for unique events',
    category: 'party-venues',
    capacity: 200,
    location: 'Old Fourth Ward',
    image: 'https://images.unsplash.com/photo-1519750783826-e2420f4d687f?auto=format&fit=crop&q=80',
    price: 2500,
    amenities: ['Open Floor Plan', 'Exposed Brick', 'Outdoor Space'],
    rating: 4.8
  }
];