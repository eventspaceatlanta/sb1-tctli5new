import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="mt-10 max-w-xl mx-auto"
    >
      <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-4">
        <Input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search venues by location or type..."
          className="flex-1 bg-white/90 backdrop-blur-sm border-transparent focus:border-purple-300"
        />
        <Button 
          type="submit"
          size="lg" 
          className="flex items-center gap-2 transform hover:scale-105 transition-transform duration-200"
        >
          <Search className="h-5 w-5" />
          Search Venues
        </Button>
      </form>
    </motion.div>
  );
}