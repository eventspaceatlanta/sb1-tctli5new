import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SpaceCard from './SpaceCard';

const featuredSpaces = [
  {
    id: 'peachtree-ballroom',
    name: 'The Fox Theatre',
    type: 'Wedding Venue',
    capacity: 300,
    location: 'Downtown Atlanta',
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80',
    price: '$3,500',
    rating: 4.9
  },
  {
    id: 'midtown-conference',
    name: 'Midtown Conference Center',
    type: 'Corporate Space',
    capacity: 500,
    location: 'Midtown',
    image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&q=80',
    price: '$2,800',
    rating: 4.7
  },
  {
    id: 'buckhead-loft',
    name: 'Buckhead Loft',
    type: 'Party Space',
    capacity: 150,
    location: 'Buckhead',
    image: 'https://images.unsplash.com/photo-1519750783826-e2420f4d687f?auto=format&fit=crop&q=80',
    price: '$1,900',
    rating: 4.8
  },
  {
    id: 'tech-event-hall',
    name: 'Georgia Tech Event Hall',
    type: 'Conference Hall',
    capacity: 1000,
    location: 'Midtown',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80',
    price: '$5,000',
    rating: 4.6
  }
];

export default function FeaturedSpaces() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="venues" className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Featured Spaces in Atlanta
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Explore our handpicked selection of stunning event spaces
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
          {featuredSpaces.map((space) => (
            <SpaceCard 
              key={space.id}
              id={space.id}
              name={space.name}
              type={space.type}
              capacity={space.capacity}
              location={space.location}
              image={space.image}
              price={space.price}
              rating={space.rating}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}