import { Link } from 'react-router-dom';
import { categories } from '@/data/categories';
import { neighborhoods } from '@/data/neighborhoods';

export default function Sitemap() {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Site Map</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Main Pages */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Main Pages</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-purple-600">Home</Link>
              </li>
              <li>
                <Link to="/search" className="text-gray-600 hover:text-purple-600">Search</Link>
              </li>
              <li>
                <Link to="/list-space" className="text-gray-600 hover:text-purple-600">List Your Space</Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Categories</h3>
            <ul className="space-y-2">
              {categories.map((category) => (
                <li key={category.id}>
                  <Link 
                    to={`/categories/${category.id}`}
                    className="text-gray-600 hover:text-purple-600"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Neighborhoods */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Neighborhoods</h3>
            <ul className="space-y-2">
              {neighborhoods.map((neighborhood) => (
                <li key={neighborhood.id}>
                  <Link 
                    to={`/neighborhoods/${neighborhood.id}`}
                    className="text-gray-600 hover:text-purple-600"
                  >
                    {neighborhood.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}