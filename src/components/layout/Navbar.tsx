import React, { useState, useEffect } from 'react';
import { Menu, X, Building2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { categories } from '@/data/categories';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHomePage = location.pathname === '/';

  const handleListSpace = () => {
    navigate('/list-space');
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled || !isHomePage ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <Link to="/" className="flex items-center">
              <Building2 className={`h-8 w-8 ${scrolled || !isHomePage ? 'text-purple-600' : 'text-white'}`} />
              <span className={`ml-2 text-xl font-bold ${scrolled || !isHomePage ? 'text-gray-900' : 'text-white'}`}>
                Event Space Atlanta
              </span>
            </Link>
          </motion.div>
          
          <div className="hidden md:block">
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="ml-10 flex items-center space-x-4"
            >
              <Link 
                to="/categories/wedding-venues" 
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  scrolled || !isHomePage ? 'text-gray-700 hover:text-purple-600' : 'text-white/90 hover:text-white'
                }`}
              >
                Wedding Venues
              </Link>
              <Link 
                to="/categories/corporate-spaces" 
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  scrolled || !isHomePage ? 'text-gray-700 hover:text-purple-600' : 'text-white/90 hover:text-white'
                }`}
              >
                Corporate Events
              </Link>
              <Link 
                to="/categories/party-venues" 
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  scrolled || !isHomePage ? 'text-gray-700 hover:text-purple-600' : 'text-white/90 hover:text-white'
                }`}
              >
                Party Venues
              </Link>
              <Button 
                variant={scrolled || !isHomePage ? "default" : "outline"}
                onClick={handleListSpace}
              >
                List Your Space
              </Button>
            </motion.div>
          </div>
          
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              className={scrolled || !isHomePage ? 'text-gray-900' : 'text-white'}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
              {categories.map((category) => (
                <Link
                  key={category.id}
                  to={category.path}
                  className="text-gray-700 hover:text-purple-600 block px-3 py-2 rounded-md text-base font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {category.name}
                </Link>
              ))}
              <Button 
                className="w-full mt-4" 
                variant="default"
                onClick={handleListSpace}
              >
                List Your Space
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}