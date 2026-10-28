import { useState } from "react";
import MovieCard from "@/components/movie/MovieCard";
import { useDragScroll } from "@/hooks/useDragScroll";
import type { Movie } from "@/types/movie";

interface MovieCarouselProps {
  movies: Movie[];
}

/**
 * Baris film yang bisa digeser.
 * Mobile: digeser dengan jari. Desktop: ada tombol panah di kanan,
 * sesuai desain Trending Now.
 */
const MovieCarousel = ({ movies }: MovieCarouselProps) => {
  const trackRef = useDragScroll<HTMLUListElement>();
  const [canScrollBack, setCanScrollBack] = useState(false);

  const scrollBy = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;

    // Geser sejauh satu layar penuh dari baris kartu
    track.scrollBy({ left: direction * track.clientWidth * 0.8, behavior: "smooth" });
  };

  return (
    <div className="relative">
      <ul
        ref={trackRef}
        onScroll={(e) => setCanScrollBack(e.currentTarget.scrollLeft > 8)}
        className="no-scrollbar -mx-4 flex cursor-grab gap-4 overflow-x-auto px-4 pb-2 lg:mx-0 lg:gap-5 lg:px-0"
      >
        {movies.map((movie, index) => (
          <li key={movie.id} className="w-[173px] shrink-0 lg:w-[216px]">
            <MovieCard movie={movie} rank={index + 1} />
          </li>
        ))}
      </ul>

      {/* Gradient + tombol panah hanya tampil di desktop */}
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-40 bg-gradient-to-l from-black to-transparent lg:block" />
      <button
        type="button"
        onClick={() => scrollBy(1)}
        aria-label="Scroll trending movies"
        className="absolute top-1/2 right-0 hidden size-14 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-surface-glass backdrop-blur-[40px] transition-colors hover:bg-neutral-900 lg:flex"
      >
        <img src="/icons/Arrow.png" alt="" className="size-6" />
      </button>
      {canScrollBack && (
        <button
          type="button"
          onClick={() => scrollBy(-1)}
          aria-label="Scroll trending movies back"
          className="absolute top-1/2 left-0 hidden size-14 -translate-y-1/2 rotate-180 cursor-pointer items-center justify-center rounded-full bg-surface-glass backdrop-blur-[40px] transition-colors hover:bg-neutral-900 lg:flex"
        >
          <img src="/icons/Arrow.png" alt="" className="size-6" />
        </button>
      )}
    </div>
  );
};

export default MovieCarousel;
