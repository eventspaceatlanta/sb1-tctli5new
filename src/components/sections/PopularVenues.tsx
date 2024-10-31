import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SpaceCard from './SpaceCard';

const popularVenues = [
  {
    id: 'fox-theatre',
    name: 'The Fox Theatre',
    type: 'Wedding Venue',
    capacity: 350,
    location: 'Midtown',
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80',
    price: '$4,500',
    rating: 4.9
  },
  {
    id: 'tech-square',
    name: 'Tech Square Conference Center',
    type: 'Corporate Space',
    capacity: 500,
    location: 'Midtown',
    image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&q=80',
    price: '$3,800',
    rating: 4.7
  },
  {
    id: 'factory-studios',
    name: 'The Factory Studios',
    type: 'Photo Studio',
    capacity: 50,
    location: 'West Midtown',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80',
    price: '$1,200',
    rating: 4.8
  },
  {
    id: 'piedmont-tent',
    name: 'Piedmont Garden Tent',
    type: 'Party Venue',
    capacity: 200,
    location: 'Piedmont Park',
    image: 'https://images.unsplash.com/photo-1519750783826-e2420f4d687f?auto=format&fit=crop&q=80',
    price: '$2,900',
    rating: 4.6
  }
];

export default function PopularVenues() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="popular-venues" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Most Popular Venues
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Discover highly-rated spaces loved by our customers
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2 }
            }
          }}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4"
        >
          {popularVenues.map((venue) => (
            <SpaceCard 
              key={venue.id}
              id={venue.id}
              name={venue.name}
              type={venue.type}
              capacity={venue.capacity}
              location={venue.location}
              image={venue.image}
              price={venue.price}
              rating={venue.rating}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}