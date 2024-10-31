import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbItem {
  name: string;
  href: string;
  current?: boolean;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav className="mb-8">
      <ol className="flex items-center space-x-2 text-sm">
        {items.map((item, index) => (
          <React.Fragment key={item.href}>
            <li>
              {item.current ? (
                <span className="text-purple-600 font-medium">
                  {item.name}
                </span>
              ) : (
                <Link 
                  to={item.href}
                  className="text-gray-500 hover:text-purple-600"
                >
                  {item.name}
                </Link>
              )}
            </li>
            {index < items.length - 1 && (
              <ChevronRight className="h-4 w-4 text-gray-400" />
            )}
          </React.Fragment>
        ))}
      </ol>
    </nav>
  );
}