import { Suspense } from 'react';
import Hero from '@/components/sections/Hero';
import SearchFilters from '@/components/sections/SearchFilters';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import Categories from '@/components/sections/Categories';
import FeaturedSpaces from '@/components/sections/FeaturedSpaces';
import Neighborhoods from '@/components/sections/Neighborhoods';
import Contact from '@/components/sections/Contact';
import Newsletter from '@/components/sections/Newsletter';
import Sitemap from '@/components/Sitemap';

export default function HomePage() {
  return (
    <>
      <Hero />
      <SearchFilters />
      <Categories />
      <Suspense fallback={<LoadingSpinner />}>
        <FeaturedSpaces />
        <Neighborhoods />
        <Contact />
        <Newsletter />
        <Sitemap />
      </Suspense>
    </>
  );
}