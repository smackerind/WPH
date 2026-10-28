import { AnimatePresence } from "framer-motion";
import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import MovieGridSkeleton from "@/components/movie/MovieGridSkeleton";
import Home from "@/pages/Home";

/**
 * Halaman selain Home dimuat lazy (code splitting), jadi bundle awal
 * lebih kecil dan halaman pertama tampil lebih cepat.
 */
const Search = lazy(() => import("@/pages/Search"));
const MovieDetail = lazy(() => import("@/pages/MovieDetail"));
const Favorites = lazy(() => import("@/pages/Favorites"));
const NotFound = lazy(() => import("@/pages/NotFound"));

/**
 * Route dipisah dari BrowserRouter karena AnimatePresence butuh
 * `location` dari useLocation untuk menganimasikan perpindahan halaman.
 */
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    // Kembali ke atas setelah halaman lama selesai fade-out, supaya halaman
    // baru (misal klik Similar Movies) tidak terbuka di posisi scroll lama.
    // "instant" karena html memakai scroll-behavior: smooth.
    <AnimatePresence
      mode="wait"
      onExitComplete={() => window.scrollTo({ top: 0, behavior: "instant" })}
    >
      <Routes location={location} key={location.pathname}>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route
            path="/search"
            element={
              <Suspense fallback={<PageFallback />}>
                <Search />
              </Suspense>
            }
          />
          <Route
            path="/movie/:id"
            element={
              <Suspense fallback={<PageFallback />}>
                <MovieDetail />
              </Suspense>
            }
          />
          <Route
            path="/favorites"
            element={
              <Suspense fallback={<PageFallback />}>
                <Favorites />
              </Suspense>
            }
          />
          <Route
            path="*"
            element={
              <Suspense fallback={<PageFallback />}>
                <NotFound />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

/** Placeholder singkat selagi file halaman diunduh */
const PageFallback = () => (
  <div className="container-page py-6">
    <MovieGridSkeleton count={4} />
  </div>
);

const App = () => (
  <BrowserRouter>
    <AnimatedRoutes />
  </BrowserRouter>
);

export default App;
