import { useState } from "react";
import GenreFilter from "@/components/movie/GenreFilter";
import HeroSection from "@/components/movie/HeroSection";
import MovieCard from "@/components/movie/MovieCard";
import MovieCarousel from "@/components/movie/MovieCarousel";
import MovieGridSkeleton from "@/components/movie/MovieGridSkeleton";
import StateMessage from "@/components/movie/StateMessage";
import PageTransition from "@/components/layout/PageTransition";
import { Button } from "@/components/ui/button";
import {
  useMoviesByGenre,
  useNowPlayingMovies,
  useTrendingMovies,
} from "@/hooks/useMovies";
import { uniqueById } from "@/lib/utils";

const Home = () => {
  const [activeGenre, setActiveGenre] = useState<number | null>(null);

  const trending = useTrendingMovies();
  const nowPlaying = useNowPlayingMovies();
  const byGenre = useMoviesByGenre(activeGenre);

  // Saat genre dipilih, daftar "New Release" diganti hasil filter genre
  const list = activeGenre === null ? nowPlaying : byGenre;
  const movies = uniqueById(list.data?.pages.flatMap((page) => page.results) ?? []);
  const heroMovie = trending.data?.results[0];

  return (
    <PageTransition>
      <HeroSection movie={heroMovie} isLoading={trending.isLoading} />

      {/* ---------- Trending Now ---------- */}
      <section
        aria-labelledby="trending-title"
        className="container-page flex flex-col gap-6 py-10 lg:gap-10 lg:py-20"
      >
        <h2
          id="trending-title"
          className="font-display text-display-xs font-bold text-neutral-25 lg:text-display-lg lg:tracking-[-0.02em]"
        >
          Trending Now
        </h2>

        {trending.isLoading && <MovieGridSkeleton count={6} />}

        {trending.isError && (
          <StateMessage
            title="Gagal memuat film trending"
            description={trending.error.message}
            action={
              <Button onClick={() => trending.refetch()}>Coba Lagi</Button>
            }
          />
        )}

        {trending.data && (
          <MovieCarousel movies={trending.data.results.slice(0, 10)} />
        )}
      </section>

      {/* ---------- New Release / hasil filter genre ---------- */}
      <section
        aria-labelledby="new-release-title"
        className="container-page flex flex-col gap-6 pb-10 lg:gap-10 lg:pb-20"
      >
        <div className="flex flex-col gap-4 lg:gap-6">
          <h2
            id="new-release-title"
            className="font-display text-display-xs font-bold text-neutral-25 lg:text-display-lg lg:tracking-[-0.02em]"
          >
            New Release
          </h2>
          <GenreFilter activeGenre={activeGenre} onChange={setActiveGenre} />
        </div>

        {list.isLoading && <MovieGridSkeleton count={10} />}

        {list.isError && (
          <StateMessage
            title="Gagal memuat film"
            description={list.error.message}
            action={<Button onClick={() => list.refetch()}>Coba Lagi</Button>}
          />
        )}

        {list.data && movies.length === 0 && (
          <StateMessage
            title="Data Empty"
            description="Belum ada film untuk genre ini."
          />
        )}

        {movies.length > 0 && (
          <>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-3 lg:grid-cols-5 lg:gap-5">
              {movies.map((movie) => (
                <li key={movie.id}>
                  <MovieCard movie={movie} />
                </li>
              ))}
            </ul>

            {list.hasNextPage && (
              <Button
                variant="secondary"
                onClick={() => list.fetchNextPage()}
                disabled={list.isFetchingNextPage}
                className="mx-auto w-[200px] lg:h-13 lg:w-[220px] lg:text-md"
              >
                {list.isFetchingNextPage ? "Loading…" : "Load More"}
              </Button>
            )}
          </>
        )}
      </section>
    </PageTransition>
  );
};

export default Home;
