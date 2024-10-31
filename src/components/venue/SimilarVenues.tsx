import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SpaceCard from '../sections/SpaceCard';
import { useVenues } from '@/hooks/useVenues';
import { Loader2 } from 'lucide-react';

interface SimilarVenuesProps {
  category: string;
  currentVenueId: string;
}

export default function SimilarVenues({ category, currentVenueId }: SimilarVenuesProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const { venues, loading, error } = useVenues({
    category,
    limit: 3
  });

  const similarVenues = venues.filter(venue => venue.id !== currentVenueId);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <Loader2 className="h-8 w-8 animate-spin text-purple-600" />
      </div>
    );
  }

  if (error || similarVenues.length === 0) {
    return null;
  }

  return (
    <section className="mt-16">
      <h2 className="text-2xl font-semibold text-gray-900 mb-8">Similar Venues You May Like</h2>
      
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
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {similarVenues.map((venue) => (
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
      </motion.div>
    </section>
  );
}