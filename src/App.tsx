import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Layout from './components/layout/Layout';
import LoadingSpinner from './components/ui/LoadingSpinner';
import { ErrorBoundary } from './components/ErrorBoundary';

// Import critical routes directly
import HomePage from './pages/HomePage';
import SearchResults from './pages/SearchResults';
import VenueDetails from './pages/VenueDetails';

// Lazy load less critical routes
const CategoryPage = React.lazy(() => import('./pages/CategoryPage'));
const SubCategoryPage = React.lazy(() => import('./pages/SubCategoryPage'));
const SubSubCategoryPage = React.lazy(() => import('./pages/SubSubCategoryPage'));
const ListSpace = React.lazy(() => import('./pages/ListSpace'));
const VenuesByNeighborhood = React.lazy(() => import('./pages/VenuesByNeighborhood'));
const VenueComparison = React.lazy(() => import('./pages/VenueComparison'));
const VenueAvailability = React.lazy(() => import('./pages/VenueAvailability'));

// Configure React Query client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 2,
      staleTime: 5 * 60 * 1000 // 5 minutes
    }
  }
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <ErrorBoundary>
          <Router>
            <Layout>
              <Suspense fallback={<LoadingSpinner />}>
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/search" element={<SearchResults />} />
                  <Route path="/venue/:id" element={<VenueDetails />} />
                  <Route path="/categories/:categoryId" element={<CategoryPage />} />
                  <Route path="/categories/:categoryId/:subCategoryId" element={<SubCategoryPage />} />
                  <Route path="/categories/:categoryId/:subCategoryId/:subSubCategoryId" element={<SubSubCategoryPage />} />
                  <Route path="/venue/:id/availability" element={<VenueAvailability />} />
                  <Route path="/list-space" element={<ListSpace />} />
                  <Route path="/neighborhoods/:neighborhoodId" element={<VenuesByNeighborhood />} />
                  <Route path="/compare" element={<VenueComparison />} />
                </Routes>
              </Suspense>
            </Layout>
          </Router>
        </ErrorBoundary>
      </HelmetProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;