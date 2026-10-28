import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import FavoriteButton from "@/components/movie/FavoriteButton";
import MoviePoster from "@/components/movie/MoviePoster";
import Rating from "@/components/movie/Rating";
import TrailerDialog from "@/components/movie/TrailerDialog";
import { IMAGE_SIZES } from "@/lib/constants";
import type { Movie } from "@/types/movie";

interface MovieListItemProps {
  movie: Movie;
}

/**
 * Baris film memanjang untuk halaman Favorites dan hasil pencarian.
 * Mobile: poster di kiri, tombol di bawah.
 * Desktop: poster, info, lalu tombol Watch Trailer & favorit di kanan.
 */
const MovieListItem = ({ movie }: MovieListItemProps) => (
  <motion.article
    layout
    initial={{ opacity: 0, y: 8 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, scale: 0.97 }}
    transition={{ duration: 0.25 }}
    className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-5"
  >
    <div className="flex gap-4 lg:min-w-0 lg:flex-1 lg:gap-5">
      <Link to={`/movie/${movie.id}`} className="shrink-0">
        <MoviePoster
          path={movie.poster_path}
          title={movie.title}
          size={IMAGE_SIZES.poster.medium}
          className="h-[156px] w-[104px] rounded-lg lg:h-[270px] lg:w-[182px] lg:rounded-xl"
        />
      </Link>

      <div className="flex min-w-0 flex-col gap-1 lg:gap-2">
        <Link to={`/movie/${movie.id}`}>
          <h3 className="line-clamp-2 text-md font-bold text-neutral-25 transition-colors hover:text-primary-200 lg:text-display-xs">
            {movie.title}
          </h3>
        </Link>
        <Rating value={movie.vote_average} className="text-neutral-25" />
        <p className="line-clamp-2 text-sm text-neutral-400 lg:line-clamp-3 lg:text-md">
          {movie.overview}
        </p>
      </div>
    </div>

    <div className="flex items-center gap-4 lg:shrink-0 lg:gap-5">
      <TrailerDialog
        movieId={movie.id}
        title={movie.title}
        className="flex-1 lg:h-13 lg:w-[220px] lg:flex-none lg:text-md"
      />
      <FavoriteButton movie={movie} />
    </div>
  </motion.article>
);

export default MovieListItem;
