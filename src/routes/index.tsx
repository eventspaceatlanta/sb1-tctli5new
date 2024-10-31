import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '@/pages/HomePage';
import CategoryPage from '@/pages/CategoryPage';
import SubCategoryPage from '@/pages/SubCategoryPage';
import SubSubCategoryPage from '@/pages/SubSubCategoryPage';
import CategoriesOverview from '@/pages/CategoriesOverview';
import VenueDetails from '@/pages/VenueDetails';
import SearchResults from '@/pages/SearchResults';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/categories" element={<CategoriesOverview />} />
      <Route path="/categories/:categoryId" element={<CategoryPage />} />
      <Route path="/categories/:categoryId/:subCategoryId" element={<SubCategoryPage />} />
      <Route path="/categories/:categoryId/:subCategoryId/:subSubCategoryId" element={<SubSubCategoryPage />} />
      <Route path="/venue/:id" element={<VenueDetails />} />
      <Route path="/search" element={<SearchResults />} />
    </Routes>
  );
}