export interface Neighborhood {
  id: string;
  name: string;
  image: string;
  venueCount: number;
  description: string;
  cities: {
    name: string;
    venues: string[];
  }[];
}