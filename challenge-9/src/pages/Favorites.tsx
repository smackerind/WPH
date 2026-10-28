import { AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import MovieListItem from "@/components/movie/MovieListItem";
import StateMessage from "@/components/movie/StateMessage";
import PageTransition from "@/components/layout/PageTransition";
import { Button } from "@/components/ui/button";
import { useMovieStore } from "@/store/movieStore";
import type { Movie } from "@/types/movie";

/**
 * Data favorit disimpan ringkas di localStorage, sedangkan MovieListItem
 * menerima tipe Movie. Field sisanya diisi nilai default di sini.
 */
const toMovie = (favorite: ReturnType<typeof useMovieStore.getState>["favorites"][number]): Movie => ({
  ...favorite,
  original_title: favorite.title,
  original_language: "en",
  backdrop_path: null,
  vote_count: 0,
  popularity: 0,
  genre_ids: [],
  adult: false,
  video: false,
});

const Favorites = () => {
  const favorites = useMovieStore((state) => state.favorites);

  return (
    <PageTransition>
      <section
        aria-labelledby="favorites-title"
        className="container-page flex flex-col gap-8 py-6 lg:gap-8 lg:py-12"
      >
        <h1
          id="favorites-title"
          className="font-display text-display-xs font-bold text-neutral-25 lg:text-display-lg lg:tracking-[-0.02em]"
        >
          Favorites
        </h1>

        {favorites.length === 0 ? (
          <StateMessage
            icon="/icons/SearchEmpty.png"
            title="Data Empty"
            description="You don't have a favorite movie yet"
            action={
              <Button asChild className="w-[200px] lg:h-13 lg:w-[220px] lg:text-md">
                <Link to="/">Explore Movie</Link>
              </Button>
            }
          />
        ) : (
          <ul className="flex flex-col">
            <AnimatePresence initial={false}>
              {favorites.map((favorite, index) => (
                <li
                  key={favorite.id}
                  className={
                    index > 0
                      ? "mt-6 border-t border-neutral-800 pt-6 lg:mt-8 lg:pt-8"
                      : ""
                  }
                >
                  <MovieListItem movie={toMovie(favorite)} />
                </li>
              ))}
            </AnimatePresence>
          </ul>
        )}
      </section>
    </PageTransition>
  );
};

export default Favorites;
