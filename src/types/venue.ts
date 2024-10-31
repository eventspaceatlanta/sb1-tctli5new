export interface VenueFeatures {
  wifi: boolean;
  parking: boolean;
  audioVisual: boolean;
  catering: boolean;
  accessibility: boolean;
  security: boolean;
}

export interface Coordinates {
  lat: number;
  lng: number;
}

export interface LeaseDetails {
  listingId: string;
  propertyType: string;
  spaceAvailable: number;
  pricePerSqFt: number;
  leaseType: string;
  availableDate: string;
  minTermLength: number;
  maxTermLength: number;
  buildingClass: string;
  yearBuilt?: number;
  lastRenovated?: number;
  amenities: string[];
}

export interface Venue {
  id: string;
  name: string;
  description: string;
  category: string;
  subCategory?: string;
  subSubCategory?: string;
  capacity: number;
  location: string;
  image: string;
  images?: string[];
  price: number;
  rating: number;
  amenities: string[];
  features?: VenueFeatures;
  coordinates?: Coordinates;
  metaTitle?: string;
  metaDescription?: string;
  keywords?: string[];
  leaseDetails?: LeaseDetails;
}

export interface SearchParams {
  searchQuery?: string;
  category?: string;
  subCategory?: string;
  subSubCategory?: string;
  capacity?: number;
  priceRange?: {
    min: number;
    max: number;
  };
  amenities?: string[];
  features?: string[];
  limit?: number;
  venueIds?: string[];
  coordinates?: {
    lat: number;
    lng: number;
    radius?: number;
  };
  boundingBox?: {
    southWest: Coordinates;
    northEast: Coordinates;
  };
}