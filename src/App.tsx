import { Layout, PageSkeleton } from '@/components';
import { AnimationProvider, ThemeProvider } from '@/context';
import { useScrollToTop } from '@/hooks';
import { ROUTES } from '@/utils';
import { AnimatePresence } from 'framer-motion';
import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';

const PokemonListPage = lazy(() => import('@/pages/PokemonListPage/PokemonListPage').then(module => ({ default: module.PokemonListPage })));
const PokemonDetailPage = lazy(() => import('@/pages/PokemonDetailPage/PokemonDetailPage').then(module => ({ default: module.PokemonDetailPage })));
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage/NotFoundPage').then(module => ({ default: module.NotFoundPage })));

const AnimatedRoutes = () => {
  const location = useLocation();
  useScrollToTop();
  
  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path={ROUTES.HOME} element={<PokemonListPage />} />
        <Route path={ROUTES.POKEMON_DETAIL} element={<PokemonDetailPage />} />
        <Route path={ROUTES.NOT_FOUND} element={<NotFoundPage />} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => (
  <ThemeProvider>
    <BrowserRouter>
      <AnimationProvider>
        <Layout>
          <Suspense fallback={<PageSkeleton />}>
            <AnimatedRoutes />
          </Suspense>
        </Layout>
      </AnimationProvider>
    </BrowserRouter>
  </ThemeProvider>
);

export default App;
