import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const neighborhoods = [
  {
    id: 'midtown',
    name: 'Midtown',
    image: 'https://images.unsplash.com/photo-1575917649705-5b59aaa12e6b?auto=format&fit=crop&q=80',
    venueCount: 42,
    description: 'Cultural heart of Atlanta with modern venues',
    highlights: ['Arts Center', 'Tech Square', 'Piedmont Park']
  },
  {
    id: 'buckhead',
    name: 'Buckhead',
    image: 'https://images.unsplash.com/photo-1569012871812-f38ee64cd54c?auto=format&fit=crop&q=80',
    venueCount: 38,
    description: 'Upscale district with luxury event spaces',
    highlights: ['Lenox Square', 'Phipps Plaza', 'Atlanta History Center']
  },
  {
    id: 'downtown',
    name: 'Downtown',
    image: 'https://images.unsplash.com/photo-1575917649705-5b59aaa12e6b?auto=format&fit=crop&q=80',
    venueCount: 55,
    description: 'Historic venues in the city center',
    highlights: ['Centennial Park', 'Mercedes-Benz Stadium', 'World Congress Center']
  },
  {
    id: 'old-fourth-ward',
    name: 'Old Fourth Ward',
    image: 'https://images.unsplash.com/photo-1578086604350-631a6b20d1d1?auto=format&fit=crop&q=80',
    venueCount: 28,
    description: 'Trendy neighborhood with industrial spaces',
    highlights: ['Ponce City Market', 'BeltLine', 'Historic Fourth Ward Park']
  },
  {
    id: 'virginia-highland',
    name: 'Virginia Highland',
    image: 'https://images.unsplash.com/photo-1571055582845-67e98663656f?auto=format&fit=crop&q=80',
    venueCount: 25,
    description: 'Charming area with boutique venues',
    highlights: ['Highland Avenue', 'Local Restaurants', 'Boutique Shops']
  },
  {
    id: 'decatur',
    name: 'Decatur',
    image: 'https://images.unsplash.com/photo-1595891597771-b0231f3cd93a?auto=format&fit=crop&q=80',
    venueCount: 32,
    description: 'Small-town charm with diverse spaces',
    highlights: ['Decatur Square', 'Historic Courthouse', 'Restaurant District']
  },
  {
    id: 'west-midtown',
    name: 'West Midtown',
    image: 'https://images.unsplash.com/photo-1506377295352-e3154d43ea9e?auto=format&fit=crop&q=80',
    venueCount: 35,
    description: 'Industrial-chic venues and galleries',
    highlights: ['The Works', 'Westside Provisions', 'Art Galleries']
  },
  {
    id: 'inman-park',
    name: 'Inman Park',
    image: 'https://images.unsplash.com/photo-1574958269340-fa927503f3dd?auto=format&fit=crop&q=80',
    venueCount: 30,
    description: 'Historic neighborhood with unique venues',
    highlights: ['Krog Street Market', 'Victorian Homes', 'Restaurant Row']
  },
  {
    id: 'little-five-points',
    name: 'Little Five Points',
    image: 'https://images.unsplash.com/photo-1501772418-b33899635bca?auto=format&fit=crop&q=80',
    venueCount: 22,
    description: 'Eclectic district with alternative spaces',
    highlights: ['Variety Playhouse', 'Street Art', 'Indie Venues']
  }
];

export default function Neighborhoods() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const navigate = useNavigate();

  const handleNeighborhoodClick = (neighborhood: string) => {
    navigate(`/search?q=${encodeURIComponent(neighborhood)}`);
  };

  return (
    <section id="neighborhoods" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Popular Neighborhoods
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Discover unique venues in Atlanta's most vibrant areas
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {neighborhoods.map((neighborhood) => (
            <motion.div
              key={neighborhood.id}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5 }
                }
              }}
              whileHover={{ y: -5 }}
              onClick={() => handleNeighborhoodClick(neighborhood.name)}
              className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer transform transition-all duration-300 hover:shadow-xl"
            >
              <div className="relative h-[400px]">
                <img
                  src={neighborhood.image}
                  alt={neighborhood.name}
                  className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
                
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <h3 className="text-3xl font-bold text-white mb-3">
                    {neighborhood.name}
                  </h3>
                  
                  <p className="text-lg text-white/90 mb-4 leading-relaxed">
                    {neighborhood.description}
                  </p>
                  
                  <div className="space-y-2 mb-6">
                    {neighborhood.highlights.map((highlight, index) => (
                      <div 
                        key={index} 
                        className="flex items-center gap-2 text-white/80"
                      >
                        <span className="w-1.5 h-1.5 bg-purple-400 rounded-full"></span>
                        <span className="text-sm font-medium">{highlight}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-white/20">
                    <span className="text-purple-300 font-medium">
                      {neighborhood.venueCount} venues
                    </span>
                    <span className="flex items-center gap-2 text-white group-hover:translate-x-1 transition-transform duration-300">
                      Explore <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}