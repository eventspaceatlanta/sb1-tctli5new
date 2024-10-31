import { 
  GlassWater, 
  Briefcase, 
  Camera, 
  Music, 
  Utensils,
  Palette,
  Warehouse,
  Building2,
  Gem
} from 'lucide-react';
import type { Category } from '@/types/category';

export const categories: Category[] = [
  { 
    id: 'wedding-venues',
    name: 'Wedding Venues', 
    icon: GlassWater, 
    count: 45,
    description: 'Beautiful spaces for your special day',
    path: '/categories/wedding-venues',
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80',
    metaTitle: 'Wedding Venues in Atlanta - Find Your Perfect Wedding Space',
    metaDescription: 'Discover beautiful wedding venues in Atlanta. From elegant ballrooms to garden settings, find the perfect space for your special day.',
    keywords: ['wedding venues', 'atlanta weddings', 'wedding spaces', 'wedding locations'],
    subCategories: [
      {
        id: 'ballrooms',
        name: 'Ballrooms',
        description: 'Grand spaces for elegant receptions',
        image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80',
        count: 15,
        subSubCategories: [
          {
            id: 'grand-ballrooms',
            name: 'Grand Ballrooms',
            description: 'Luxurious spaces for large weddings',
            image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80',
            count: 8
          },
          {
            id: 'boutique-ballrooms',
            name: 'Boutique Ballrooms',
            description: 'Intimate spaces for smaller celebrations',
            image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80',
            count: 7
          }
        ]
      },
      {
        id: 'gardens',
        name: 'Gardens',
        description: 'Beautiful outdoor wedding venues',
        image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80',
        count: 12,
        subSubCategories: [
          {
            id: 'botanical-gardens',
            name: 'Botanical Gardens',
            description: 'Lush garden settings',
            image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80',
            count: 6
          },
          {
            id: 'estate-gardens',
            name: 'Estate Gardens',
            description: 'Private mansion gardens',
            image: 'https://images.unsplash.com/photo-1519741347686-c1e0aadf4611?auto=format&fit=crop&q=80',
            count: 6
          }
        ]
      }
    ]
  },
  { 
    id: 'corporate-spaces',
    name: 'Corporate Events', 
    icon: Briefcase, 
    count: 38,
    description: 'Professional venues for business events',
    path: '/categories/corporate-spaces',
    image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&q=80',
    metaTitle: 'Corporate Event Venues in Atlanta - Meeting & Conference Spaces',
    metaDescription: 'Find professional corporate event venues in Atlanta. Perfect for meetings, conferences, and business events.',
    keywords: ['corporate venues', 'conference spaces', 'meeting rooms', 'business events'],
    subCategories: [
      {
        id: 'conference-centers',
        name: 'Conference Centers',
        description: 'Large-scale event spaces',
        image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&q=80',
        count: 14,
        subSubCategories: [
          {
            id: 'convention-centers',
            name: 'Convention Centers',
            description: 'Massive spaces for expos and conferences',
            image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&q=80',
            count: 6
          },
          {
            id: 'hotel-conference',
            name: 'Hotel Conference Centers',
            description: 'Full-service hotel venues',
            image: 'https://images.unsplash.com/photo-1431540015161-0bf868a2d407?auto=format&fit=crop&q=80',
            count: 8
          }
        ]
      }
    ]
  },
  {
    id: 'art-galleries',
    name: 'Art Galleries',
    icon: Palette,
    count: 22,
    description: 'Creative spaces for exhibitions and events',
    path: '/categories/art-galleries',
    image: 'https://images.unsplash.com/photo-1577083552431-6e5fd01988ec?auto=format&fit=crop&q=80',
    metaTitle: 'Art Gallery Venues in Atlanta - Exhibition & Event Spaces',
    metaDescription: 'Discover unique art gallery venues in Atlanta perfect for exhibitions, events, and creative gatherings.',
    keywords: ['art galleries', 'exhibition spaces', 'creative venues', 'gallery rental'],
    subCategories: [
      {
        id: 'contemporary-galleries',
        name: 'Contemporary Galleries',
        description: 'Modern art spaces',
        image: 'https://images.unsplash.com/photo-1577083552431-6e5fd01988ec?auto=format&fit=crop&q=80',
        count: 12,
        subSubCategories: [
          {
            id: 'modern-galleries',
            name: 'Modern Art Galleries',
            description: 'Contemporary art exhibition spaces',
            image: 'https://images.unsplash.com/photo-1577083552431-6e5fd01988ec?auto=format&fit=crop&q=80',
            count: 7
          },
          {
            id: 'multimedia-galleries',
            name: 'Multimedia Galleries',
            description: 'Digital and interactive art spaces',
            image: 'https://images.unsplash.com/photo-1577083552431-6e5fd01988ec?auto=format&fit=crop&q=80',
            count: 5
          }
        ]
      }
    ]
  },
  {
    id: 'industrial-spaces',
    name: 'Industrial Spaces',
    icon: Warehouse,
    count: 20,
    description: 'Converted warehouses and industrial venues',
    path: '/categories/industrial-spaces',
    image: 'https://images.unsplash.com/photo-1506377295352-e3154d43ea9e?auto=format&fit=crop&q=80',
    metaTitle: 'Industrial Event Venues in Atlanta - Warehouse & Factory Spaces',
    metaDescription: 'Find unique industrial venues in Atlanta. Converted warehouses and factory spaces perfect for events.',
    keywords: ['industrial venues', 'warehouse spaces', 'factory venues', 'industrial events'],
    subCategories: [
      {
        id: 'warehouses',
        name: 'Warehouses',
        description: 'Converted warehouse spaces',
        image: 'https://images.unsplash.com/photo-1506377295352-e3154d43ea9e?auto=format&fit=crop&q=80',
        count: 12,
        subSubCategories: [
          {
            id: 'raw-warehouses',
            name: 'Raw Warehouses',
            description: 'Minimally converted spaces',
            image: 'https://images.unsplash.com/photo-1506377295352-e3154d43ea9e?auto=format&fit=crop&q=80',
            count: 6
          },
          {
            id: 'renovated-warehouses',
            name: 'Renovated Warehouses',
            description: 'Fully converted industrial spaces',
            image: 'https://images.unsplash.com/photo-1506377295352-e3154d43ea9e?auto=format&fit=crop&q=80',
            count: 6
          }
        ]
      }
    ]
  },
  {
    id: 'luxury-venues',
    name: 'Luxury Venues',
    icon: Gem,
    count: 15,
    description: 'High-end and exclusive event spaces',
    path: '/categories/luxury-venues',
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80',
    metaTitle: 'Luxury Event Venues in Atlanta - Exclusive & High-End Spaces',
    metaDescription: 'Experience Atlanta\'s finest luxury venues. Exclusive spaces for high-end events and celebrations.',
    keywords: ['luxury venues', 'exclusive spaces', 'high-end venues', 'upscale events'],
    subCategories: [
      {
        id: 'private-clubs',
        name: 'Private Clubs',
        description: 'Exclusive membership venues',
        image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80',
        count: 8,
        subSubCategories: [
          {
            id: 'country-clubs',
            name: 'Country Clubs',
            description: 'Upscale suburban venues',
            image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80',
            count: 4
          },
          {
            id: 'city-clubs',
            name: 'City Clubs',
            description: 'Urban private clubs',
            image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80',
            count: 4
          }
        ]
      }
    ]
  },
  {
    id: 'unique-venues',
    name: 'Unique Venues',
    icon: Building2,
    count: 18,
    description: 'One-of-a-kind event spaces',
    path: '/categories/unique-venues',
    image: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&q=80',
    metaTitle: 'Unique Event Venues in Atlanta - One-of-a-Kind Spaces',
    metaDescription: 'Discover unique and unconventional event venues in Atlanta. Stand out with distinctive spaces.',
    keywords: ['unique venues', 'unusual spaces', 'distinctive venues', 'special events'],
    subCategories: [
      {
        id: 'historic-landmarks',
        name: 'Historic Landmarks',
        description: 'Iconic historic buildings',
        image: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&q=80',
        count: 8,
        subSubCategories: [
          {
            id: 'museums',
            name: 'Museums',
            description: 'Cultural institution venues',
            image: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&q=80',
            count: 4
          },
          {
            id: 'historic-sites',
            name: 'Historic Sites',
            description: 'Heritage venues',
            image: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&q=80',
            count: 4
          }
        ]
      }
    ]
  }
];

export const getCategoryById = (id: string): Category | undefined => 
  categories.find(category => category.id === id);

export const getSubCategory = (categoryId: string, subCategoryId: string) => {
  const category = getCategoryById(categoryId);
  return category?.subCategories?.find(sub => sub.id === subCategoryId);
};

export const getSubSubCategory = (categoryId: string, subCategoryId: string, subSubCategoryId: string) => {
  const subCategory = getSubCategory(categoryId, subCategoryId);
  return subCategory?.subSubCategories?.find(sub => sub.id === subSubCategoryId);
};