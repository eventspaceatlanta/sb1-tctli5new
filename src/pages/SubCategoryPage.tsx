import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { getCategoryById, getSubCategory } from '@/data/categories';
import { useVenues } from '@/hooks/useVenues';
import SEO from '@/components/SEO';
import SpaceCard from '@/components/sections/SpaceCard';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import { motion } from 'framer-motion';

export default function SubCategoryPage() {
  const { categoryId, subCategoryId } = useParams<{ categoryId: string; subCategoryId: string }>();
  
  const category = getCategoryById(categoryId || '');
  const subCategory = getSubCategory(categoryId || '', subCategoryId || '');
  
  const { data: venues = [], isLoading, error } = useVenues({
    category: categoryId,
    subCategory: subCategoryId,
    limit: 12
  });

  if (!category || !subCategory) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Category not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <SEO 
        title={`${subCategory.name} - ${category.name} Venues in Atlanta`}
        description={`Find and book ${subCategory.name.toLowerCase()} venues in Atlanta. ${subCategory.description}`}
        image={subCategory.image}
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
            <li className="text-purple-600 font-medium">
              {subCategory.name}
            </li>
          </ol>
        </nav>

        <div className="relative h-[300px] mb-12 rounded-xl overflow-hidden">
          <img
            src={subCategory.image}
            alt={subCategory.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <h1 className="text-3xl font-bold text-white mb-4">
              {subCategory.name}
            </h1>
            <p className="text-xl text-white/90">
              {subCategory.description}
            </p>
          </div>
        </div>

        {subCategory.subSubCategories && (
          <div className="mb-16">
            <h2 className="text-2xl font-semibold text-gray-900 mb-8">
              Browse by Type
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {subCategory.subSubCategories.map((subSubCategory) => (
                <motion.div
                  key={subSubCategory.id}
                  whileHover={{ y: -5 }}
                  className="group relative"
                >
                  <Link to={`/categories/${category.id}/${subCategory.id}/${subSubCategory.id}`}>
                    <div className="relative h-64 rounded-lg overflow-hidden">
                      <img
                        src={subSubCategory.image}
                        alt={subSubCategory.name}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-colors duration-300" />
                      <div className="absolute inset-0 p-6 flex flex-col justify-between">
                        <h2 className="text-xl font-semibold text-white">
                          {subSubCategory.name}
                        </h2>
                        <div>
                          <p className="text-white/90 mb-2">
                            {subSubCategory.description}
                          </p>
                          <p className="text-purple-300 text-sm">
                            {subSubCategory.count} venues
                          </p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">
            Featured Venues
          </h2>
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
    </div>
  );
}