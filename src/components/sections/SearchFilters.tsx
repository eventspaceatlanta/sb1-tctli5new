import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Users, 
  DollarSign, 
  Calendar,
  SlidersHorizontal,
  Wifi,
  ParkingCircle,
  Music,
  UtensilsCrossed,
  Accessibility,
  Camera,
  Shield,
  Clock
} from 'lucide-react';

export default function SearchFilters() {
  const [showMoreFilters, setShowMoreFilters] = useState(false);
  const [filters, setFilters] = useState({
    eventType: '',
    guests: '',
    budget: '',
    date: '',
    amenities: [] as string[],
    duration: '',
    accessibility: false,
    parking: false,
    catering: false,
    security: false,
    audioVisual: false,
    wifi: false
  });

  const handleAmenityToggle = (amenity: string) => {
    setFilters(prev => ({
      ...prev,
      amenities: prev.amenities.includes(amenity)
        ? prev.amenities.filter(a => a !== amenity)
        : [...prev.amenities, amenity]
    }));
  };

  const handleSearch = () => {
    // Implement search functionality
    console.log('Search with filters:', filters);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white shadow-lg rounded-xl p-6 mt-6"
    >
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Event Type</label>
          <select 
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
            value={filters.eventType}
            onChange={(e) => setFilters({ ...filters, eventType: e.target.value })}
          >
            <option value="">All Types</option>
            <option value="wedding">Wedding</option>
            <option value="corporate">Corporate</option>
            <option value="birthday">Birthday</option>
            <option value="conference">Conference</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            <span className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              Guests
            </span>
          </label>
          <Input
            type="number"
            placeholder="Number of guests"
            min="0"
            value={filters.guests}
            onChange={(e) => setFilters({ ...filters, guests: e.target.value })}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            <span className="flex items-center gap-2">
              <DollarSign className="h-4 w-4" />
              Budget
            </span>
          </label>
          <select 
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
            value={filters.budget}
            onChange={(e) => setFilters({ ...filters, budget: e.target.value })}
          >
            <option value="">Any Budget</option>
            <option value="0-1000">$0 - $1,000</option>
            <option value="1000-5000">$1,000 - $5,000</option>
            <option value="5000+">$5,000+</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            <span className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              Date
            </span>
          </label>
          <Input
            type="date"
            value={filters.date}
            onChange={(e) => setFilters({ ...filters, date: e.target.value })}
          />
        </div>
      </div>

      <AnimatePresence>
        {showMoreFilters && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-6 pt-6 border-t"
          >
            <h3 className="text-sm font-medium text-gray-700 mb-4">Amenities & Features</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              <Button
                type="button"
                variant={filters.wifi ? "default" : "outline"}
                className="flex items-center gap-2"
                onClick={() => handleAmenityToggle('wifi')}
              >
                <Wifi className="h-4 w-4" />
                WiFi
              </Button>

              <Button
                type="button"
                variant={filters.parking ? "default" : "outline"}
                className="flex items-center gap-2"
                onClick={() => handleAmenityToggle('parking')}
              >
                <ParkingCircle className="h-4 w-4" />
                Parking
              </Button>

              <Button
                type="button"
                variant={filters.audioVisual ? "default" : "outline"}
                className="flex items-center gap-2"
                onClick={() => handleAmenityToggle('audioVisual')}
              >
                <Music className="h-4 w-4" />
                AV Equipment
              </Button>

              <Button
                type="button"
                variant={filters.catering ? "default" : "outline"}
                className="flex items-center gap-2"
                onClick={() => handleAmenityToggle('catering')}
              >
                <UtensilsCrossed className="h-4 w-4" />
                Catering
              </Button>

              <Button
                type="button"
                variant={filters.accessibility ? "default" : "outline"}
                className="flex items-center gap-2"
                onClick={() => handleAmenityToggle('accessibility')}
              >
                <Accessibility className="h-4 w-4" />
                Accessible
              </Button>

              <Button
                type="button"
                variant={filters.security ? "default" : "outline"}
                className="flex items-center gap-2"
                onClick={() => handleAmenityToggle('security')}
              >
                <Shield className="h-4 w-4" />
                Security
              </Button>
            </div>

            <div className="mt-6">
              <h3 className="text-sm font-medium text-gray-700 mb-4">Duration</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Button
                  type="button"
                  variant={filters.duration === '4' ? "default" : "outline"}
                  className="flex items-center gap-2"
                  onClick={() => setFilters({ ...filters, duration: '4' })}
                >
                  <Clock className="h-4 w-4" />
                  4 Hours
                </Button>

                <Button
                  type="button"
                  variant={filters.duration === '8' ? "default" : "outline"}
                  className="flex items-center gap-2"
                  onClick={() => setFilters({ ...filters, duration: '8' })}
                >
                  <Clock className="h-4 w-4" />
                  8 Hours
                </Button>

                <Button
                  type="button"
                  variant={filters.duration === '12' ? "default" : "outline"}
                  className="flex items-center gap-2"
                  onClick={() => setFilters({ ...filters, duration: '12' })}
                >
                  <Clock className="h-4 w-4" />
                  12 Hours
                </Button>

                <Button
                  type="button"
                  variant={filters.duration === '24' ? "default" : "outline"}
                  className="flex items-center gap-2"
                  onClick={() => setFilters({ ...filters, duration: '24' })}
                >
                  <Clock className="h-4 w-4" />
                  Full Day
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex items-center justify-between mt-6 pt-4 border-t">
        <Button 
          variant="outline" 
          className="flex items-center gap-2"
          onClick={() => setShowMoreFilters(!showMoreFilters)}
        >
          <SlidersHorizontal className="h-4 w-4" />
          {showMoreFilters ? 'Less Filters' : 'More Filters'}
        </Button>
        <Button className="min-w-[120px]" onClick={handleSearch}>
          Search
        </Button>
      </div>
    </motion.div>
  );
}