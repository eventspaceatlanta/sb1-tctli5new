import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { getCategoryById } from '@/data/categories';
import SEO from '@/components/SEO';
import LoadingSpinner from '@/components/ui/LoadingSpinner';

export default function CategoryPage() {
  const { categoryId } = useParams<{ categoryId: string }>();
  const category = getCategoryById(categoryId || '');

  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Category not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <SEO 
        title={category.metaTitle || `${category.name} - Event Venues in Atlanta`}
        description={category.metaDescription || category.description}
        image={category.image}
        keywords={category.keywords}
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
            <li className="text-purple-600 font-medium">
              {category.name}
            </li>
          </ol>
        </nav>

        <div className="relative h-[300px] mb-12 rounded-xl overflow-hidden">
          <img
            src={category.image}
            alt={category.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <h1 className="text-3xl font-bold text-white mb-4">
              {category.name}
            </h1>
            <p className="text-xl text-white/90">
              {category.description}
            </p>
          </div>
        </div>

        {category.subCategories && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {category.subCategories.map((subCategory) => (
              <motion.div
                key={subCategory.id}
                whileHover={{ y: -5 }}
                className="group relative"
              >
                <Link to={`/categories/${category.id}/${subCategory.id}`}>
                  <div className="relative h-64 rounded-lg overflow-hidden">
                    <img
                      src={subCategory.image}
                      alt={subCategory.name}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-colors duration-300" />
                    <div className="absolute inset-0 p-6 flex flex-col justify-between">
                      <h2 className="text-xl font-semibold text-white">
                        {subCategory.name}
                      </h2>
                      <div>
                        <p className="text-white/90 mb-2">
                          {subCategory.description}
                        </p>
                        <p className="text-purple-300 text-sm">
                          {subCategory.count} venues
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}