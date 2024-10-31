import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { categories } from '@/data/categories';
import SEO from '@/components/SEO';

export default function CategoriesOverview() {
  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <SEO 
        title="Event Venue Categories in Atlanta"
        description="Explore our comprehensive selection of event venues in Atlanta. Find the perfect space for weddings, corporate events, parties, and more."
        keywords={['atlanta venues', 'event spaces', 'venue categories', 'event planning']}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900">
            Explore Venue Categories
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Find the perfect space for your next event
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <motion.div
              key={category.id}
              whileHover={{ y: -5 }}
              className="group relative"
            >
              <Link to={`/categories/${category.id}`}>
                <div className="relative h-64 rounded-xl overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    <div className="flex items-center gap-2 text-white/80 mb-2">
                      <category.icon className="h-5 w-5" />
                      <span>{category.count} venues</span>
                    </div>
                    <h2 className="text-2xl font-bold text-white mb-2">
                      {category.name}
                    </h2>
                    <p className="text-white/90">
                      {category.description}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}