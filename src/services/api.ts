import axios from 'axios';
import type { Venue, SearchParams, LeaseDetails } from '@/types/venue';
import { mockVenues } from '@/data/mockVenues';

interface ApiResponse<T> {
  status: string;
  message: string;
  data: T;
}

interface VenueCoordinate {
  ListingId: string;
  Coordinations: [number, number][];
}

// Create API instance with RapidAPI configuration
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'x-rapidapi-key': import.meta.env.VITE_RAPIDAPI_KEY,
    'x-rapidapi-host': import.meta.env.VITE_RAPIDAPI_HOST,
    'Content-Type': 'application/json'
  }
});

// Add response interceptor
api.interceptors.response.use(
  (response) => {
    const { status, message, data } = response.data as ApiResponse<any>;
    
    if (status.toLowerCase() === 'success') {
      return data;
    }
    
    throw new Error(message || 'An error occurred');
  },
  (error) => {
    console.error('API Error:', error);
    throw new Error(error.response?.data?.message || 'Failed to fetch data');
  }
);

const processCoordinates = (coordinates: [number, number][]): { lat: number; lng: number } => {
  // Use the first set of coordinates if multiple exist
  const [lng, lat] = coordinates[0];
  return { lat, lng };
};

const transformVenueResponse = async (venueCoords: VenueCoordinate[]): Promise<Venue[]> => {
  const venuePromises = venueCoords.map(async (coord) => {
    try {
      const venue = await getVenueById(coord.ListingId);
      if (venue) {
        const coordinates = processCoordinates(coord.Coordinations);
        const leaseDetails = await getLeaseDetails(coord.ListingId);
        return {
          ...venue,
          coordinates,
          leaseDetails
        };
      }
      return null;
    } catch (error) {
      console.error(`Error fetching venue ${coord.ListingId}:`, error);
      return null;
    }
  });

  const venues = await Promise.all(venuePromises);
  return venues.filter((venue): venue is Venue => venue !== null);
};

export const getLeaseDetails = async (listingId: string): Promise<LeaseDetails | null> => {
  try {
    if (import.meta.env.DEV) {
      return {
        listingId,
        propertyType: 'Commercial',
        spaceAvailable: 5000,
        pricePerSqFt: 25,
        leaseType: 'NNN',
        availableDate: '2024-04-01',
        minTermLength: 12,
        maxTermLength: 60,
        buildingClass: 'A',
        yearBuilt: 2010,
        lastRenovated: 2020,
        amenities: ['HVAC', 'Security System', 'Loading Dock', 'Elevator']
      };
    }

    const response = await api.post<ApiResponse<LeaseDetails>>('/loopnet/property/LeaseDetails', {
      listingId
    });

    return response || null;
  } catch (error) {
    console.error('Error fetching lease details:', error);
    return null;
  }
};

export const searchVenues = async (params: SearchParams): Promise<Venue[]> => {
  try {
    if (import.meta.env.DEV) {
      await new Promise(resolve => setTimeout(resolve, 300));
      let filteredVenues = [...mockVenues];

      if (params.category) {
        filteredVenues = filteredVenues.filter(venue => 
          venue.category === params.category
        );
      }

      if (params.subCategory) {
        filteredVenues = filteredVenues.filter(venue => 
          venue.subCategory === params.subCategory
        );
      }

      if (params.subSubCategory) {
        filteredVenues = filteredVenues.filter(venue => 
          venue.subSubCategory === params.subSubCategory
        );
      }

      if (params.searchQuery) {
        const query = params.searchQuery.toLowerCase();
        filteredVenues = filteredVenues.filter(venue => 
          venue.name.toLowerCase().includes(query) ||
          venue.description.toLowerCase().includes(query) ||
          venue.location.toLowerCase().includes(query)
        );
      }

      return filteredVenues;
    }

    const response = await api.post<ApiResponse<VenueCoordinate[]>>('/loopnet/sale/advanceSearch', {
      locationId: '41096', // Atlanta
      locationType: 'city',
      page: 1,
      size: params.limit || 20,
      ...params
    });

    return transformVenueResponse(response);
  } catch (error) {
    console.error('Error fetching venues:', error);
    throw new Error('Failed to fetch venues');
  }
};

export const searchVenuesByCity = async (
  cityId: string = '41096', // Default to Atlanta
  page: number = 1
): Promise<Venue[]> => {
  try {
    if (import.meta.env.DEV) {
      return mockVenues.slice(0, 10);
    }

    const response = await api.post<ApiResponse<VenueCoordinate[]>>('/loopnet/lease/searchByCity', {
      cityId,
      page
    });

    return transformVenueResponse(response);
  } catch (error) {
    console.error('Error fetching venues by city:', error);
    throw new Error('Failed to fetch venues in city');
  }
};

export const searchVenuesByState = async ({
  stateId,
  page = 1
}: {
  stateId: string;
  page?: number;
}): Promise<Venue[]> => {
  try {
    if (import.meta.env.DEV) {
      return mockVenues.slice(0, 15);
    }

    const response = await api.post<ApiResponse<VenueCoordinate[]>>('/loopnet/sale/searchByState', {
      stateId,
      page
    });

    return transformVenueResponse(response);
  } catch (error) {
    console.error('Error fetching venues by state:', error);
    throw new Error('Failed to fetch venues in state');
  }
};

export const searchVenuesByCoordinates = async (
  lat: number,
  lng: number,
  radius: number = 5,
  page: number = 1
): Promise<Venue[]> => {
  try {
    if (import.meta.env.DEV) {
      return mockVenues.slice(0, 5);
    }

    const response = await api.post<ApiResponse<VenueCoordinate[]>>('/loopnet/sale/searchByCoordination', {
      coordination: [lng, lat],
      distance: radius,
      page
    });

    return transformVenueResponse(response);
  } catch (error) {
    console.error('Error fetching venues by coordinates:', error);
    throw new Error('Failed to fetch venues by location');
  }
};

export const searchVenuesByBoundingBox = async (
  southWest: { lat: number; lng: number },
  northEast: { lat: number; lng: number },
  page: number = 1
): Promise<Venue[]> => {
  try {
    if (import.meta.env.DEV) {
      return mockVenues.slice(0, 8);
    }

    const response = await api.post<ApiResponse<VenueCoordinate[]>>('/loopnet/sale/searchByBoundingBox', {
      boundingBox: [southWest.lng, southWest.lat, northEast.lng, northEast.lat],
      page
    });

    return transformVenueResponse(response);
  } catch (error) {
    console.error('Error fetching venues by bounding box:', error);
    throw new Error('Failed to fetch venues in area');
  }
};

export const getVenueById = async (id: string): Promise<Venue | null> => {
  try {
    if (import.meta.env.DEV) {
      const venue = mockVenues.find(v => v.id === id);
      return venue || null;
    }

    const response = await api.get<ApiResponse<Venue>>(`/venues/${id}`);
    return response || null;
  } catch (error) {
    console.error('Error fetching venue:', error);
    throw new Error('Failed to fetch venue');
  }
};

export default api;