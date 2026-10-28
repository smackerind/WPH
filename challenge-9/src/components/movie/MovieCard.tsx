import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import MoviePoster from "@/components/movie/MoviePoster";
import Rating from "@/components/movie/Rating";
import type { Movie } from "@/types/movie";

interface MovieCardProps {
  movie: Movie;
  /** Nomor urut yang tampil di pojok poster (Trending Now) */
  rank?: number;
}

/** Kartu film vertikal: poster, judul, rating */
const MovieCard = ({ movie, rank }: MovieCardProps) => (
  <motion.article
    whileHover={{ y: -4 }}
    transition={{ duration: 0.2 }}
    className="group"
  >
    <Link to={`/movie/${movie.id}`} className="flex flex-col gap-2 lg:gap-3">
      <div className="relative aspect-[173/266] overflow-hidden rounded-xl bg-neutral-900 lg:aspect-[216/321]">
        <MoviePoster
          path={movie.poster_path}
          title={movie.title}
          className="size-full transition-transform duration-500 group-hover:scale-105"
        />

        {rank !== undefined && (
          <span className="absolute top-2 left-2 flex size-8 items-center justify-center rounded-full bg-surface-glass text-sm font-semibold text-neutral-25 backdrop-blur-[22px] lg:top-3 lg:left-3 lg:size-12 lg:text-lg">
            {rank}
          </span>
        )}
      </div>

      <div className="flex flex-col gap-0.5">
        <h3 className="line-clamp-1 text-md font-semibold text-neutral-25 lg:text-lg">
          {movie.title}
        </h3>
        <Rating value={movie.vote_average} />
      </div>
    </Link>
  </motion.article>
);

export default MovieCard;
