import { Building2 } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2">
              <Building2 className="h-6 w-6 text-purple-400" />
              <span className="text-xl font-bold">Event Space Atlanta</span>
            </div>
            <p className="mt-4 text-gray-400">
              Find and book the perfect venue for your next event in Atlanta.
            </p>
            <p className="mt-4 text-gray-400">
              Contact us: eventspaceatlanta@gmail.com
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Venue Types</h3>
            <ul className="space-y-2">
              <li><a href="#wedding-venues" className="text-gray-400 hover:text-purple-400">Wedding Venues</a></li>
              <li><a href="#corporate-spaces" className="text-gray-400 hover:text-purple-400">Corporate Spaces</a></li>
              <li><a href="#party-venues" className="text-gray-400 hover:text-purple-400">Party Venues</a></li>
              <li><a href="#photo-studios" className="text-gray-400 hover:text-purple-400">Photo Studios</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Areas</h3>
            <ul className="space-y-2">
              <li><a href="#midtown" className="text-gray-400 hover:text-purple-400">Midtown</a></li>
              <li><a href="#buckhead" className="text-gray-400 hover:text-purple-400">Buckhead</a></li>
              <li><a href="#downtown" className="text-gray-400 hover:text-purple-400">Downtown</a></li>
              <li><a href="#decatur" className="text-gray-400 hover:text-purple-400">Decatur</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#venues" className="text-gray-400 hover:text-purple-400">All Venues</a></li>
              <li><a href="#categories" className="text-gray-400 hover:text-purple-400">Categories</a></li>
              <li><a href="#neighborhoods" className="text-gray-400 hover:text-purple-400">Neighborhoods</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-purple-400">Contact Us</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Event Space Atlanta. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}