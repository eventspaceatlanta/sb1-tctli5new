import React from 'react';
import { motion } from 'framer-motion';
import { Star, Users, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import imageLoader from '@/utils/imageLoader';

interface SpaceCardProps {
  id: string;
  name: string;
  type: string;
  capacity: number;
  location: string;
  image: string;
  price: string | number;
  rating: number;
}

export default function SpaceCard({ 
  id,
  name, 
  type, 
  capacity, 
  location, 
  image,
  price,
  rating
}: SpaceCardProps) {
  const navigate = useNavigate();
  const { url: optimizedImage, alt } = imageLoader(image, 400, name, type);

  const handleViewDetails = () => {
    navigate(`/venue/${id}`);
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.3 }}
      className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={optimizedImage}
          alt={alt}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
          decoding="async"
          width="400"
          height="300"
          title={`${name} - ${type} in ${location}, Atlanta`}
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
            <span className="text-sm font-medium">{rating}</span>
          </div>
        </div>
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 group-hover:text-purple-600 transition-colors duration-300">
              {name}
            </h3>
            <p className="text-sm text-purple-600 font-medium">{type}</p>
          </div>
          <p className="text-lg font-semibold text-gray-900">
            {typeof price === 'number' ? `$${price.toLocaleString()}` : price}
          </p>
        </div>
        <div className="mt-4 space-y-2">
          <div className="flex items-center text-gray-500 text-sm">
            <Users className="h-4 w-4 mr-2" />
            <span>Capacity: {capacity}</span>
          </div>
          <div className="flex items-center text-gray-500 text-sm">
            <MapPin className="h-4 w-4 mr-2" />
            <span>{location}</span>
          </div>
        </div>
        <Button 
          className="w-full mt-6" 
          variant="default"
          onClick={handleViewDetails}
        >
          View Details
        </Button>
      </div>
    </motion.div>
  );
}