import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { getCategoryById, getSubCategory, getSubSubCategory } from '@/data/categories';
import { useVenues } from '@/hooks/useVenues';
import SEO from '@/components/SEO';
import SpaceCard from '@/components/sections/SpaceCard';
import LoadingSpinner from '@/components/ui/LoadingSpinner';

export default function SubSubCategoryPage() {
  const { categoryId, subCategoryId, subSubCategoryId } = useParams<{ 
    categoryId: string; 
    subCategoryId: string;
    subSubCategoryId: string;
  }>();
  
  const category = getCategoryById(categoryId || '');
  const subCategory = getSubCategory(categoryId || '', subCategoryId || '');
  const subSubCategory = getSubSubCategory(categoryId || '', subCategoryId || '', subSubCategoryId || '');
  
  const { data: venues = [], isLoading, error } = useVenues({
    category: categoryId,
    subCategory: subCategoryId,
    subSubCategory: subSubCategoryId,
    limit: 12
  });

  if (!category || !subCategory || !subSubCategory) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Category not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <SEO 
        title={`${subSubCategory.name} - ${subCategory.name} in Atlanta`}
        description={`${subSubCategory.description} in Atlanta. Book your perfect venue today.`}
        image={subSubCategory.image}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-sm">
            <li>
              <Link to="/" className="text-gray-500 hover:text-purple-600">
                Home
              </Link>
            </li>
            <ChevronRight className="h-4 w-4 text-gray-400" />
            <li>
              <Link to="/categories" className="text-gray-500 hover:text-purple-600">
                Categories
              </Link>
            </li>
            <ChevronRight className="h-4 w-4 text-gray-400" />
            <li>
              <Link to={`/categories/${category.id}`} className="text-gray-500 hover:text-purple-600">
                {category.name}
              </Link>
            </li>
            <ChevronRight className="h-4 w-4 text-gray-400" />
            <li>
              <Link 
                to={`/categories/${category.id}/${subCategory.id}`} 
                className="text-gray-500 hover:text-purple-600"
              >
                {subCategory.name}
              </Link>
            </li>
            <ChevronRight className="h-4 w-4 text-gray-400" />
            <li className="text-purple-600 font-medium">
              {subSubCategory.name}
            </li>
          </ol>
        </nav>

        <div className="relative h-[300px] mb-12 rounded-xl overflow-hidden">
          <img
            src={subSubCategory.image}
            alt={subSubCategory.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <h1 className="text-3xl font-bold text-white mb-4">
              {subSubCategory.name}
            </h1>
            <p className="text-xl text-white/90">
              {subSubCategory.description}
            </p>
          </div>
        </div>

        {isLoading ? (
          <LoadingSpinner />
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
              No venues found in this category.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}