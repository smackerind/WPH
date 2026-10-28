import MovieCard from "@/components/movie/MovieCard";
import { useDragScroll } from "@/hooks/useDragScroll";
import type { Movie } from "@/types/movie";

interface SimilarMoviesProps {
  movies: Movie[];
}

/**
 * Baris film serupa di halaman detail.
 * Mobile: digeser dengan jari. Desktop: click + drag dengan mouse.
 */
const SimilarMovies = ({ movies }: SimilarMoviesProps) => {
  const trackRef = useDragScroll<HTMLUListElement>();

  return (
    <section className="flex flex-col gap-4 lg:gap-6">
      <h2 className="text-xl font-bold text-neutral-25 lg:text-display-md">Similar Movies</h2>
      <ul
        ref={trackRef}
        className="no-scrollbar -mx-4 flex cursor-grab gap-4 overflow-x-auto px-4 pb-2 lg:mx-0 lg:gap-5 lg:px-0"
      >
        {movies.map((item) => (
          <li key={item.id} className="w-[140px] shrink-0 lg:w-[216px]">
            <MovieCard movie={item} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default SimilarMovies;
