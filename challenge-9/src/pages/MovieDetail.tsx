import { motion } from "framer-motion";
import { ArrowLeft, Calendar } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import CastCard from "@/components/movie/CastCard";
import FavoriteButton from "@/components/movie/FavoriteButton";
import MoviePoster from "@/components/movie/MoviePoster";
import SimilarMovies from "@/components/movie/SimilarMovies";
import StateMessage from "@/components/movie/StateMessage";
import TrailerDialog from "@/components/movie/TrailerDialog";
import PageTransition from "@/components/layout/PageTransition";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useMovieDetails } from "@/hooks/useMovies";
import { IMAGE_SIZES, MAX_CAST_DISPLAYED } from "@/lib/constants";
import {
  findTrailer,
  formatRating,
  formatReleaseDate,
  formatRuntime,
  getAgeLimit,
  getImageUrl,
} from "@/lib/utils";

/** Kotak statistik kecil: Rating, Genre, Age Limit */
const StatBox = ({
  icon,
  label,
  value,
}: {
  icon: string;
  label: string;
  value: string;
}) => (
  <div className="flex flex-1 items-center gap-2 rounded-xl border border-neutral-900 bg-neutral-950 p-3 lg:max-w-[276px] lg:flex-col lg:items-start lg:gap-2 lg:rounded-2xl lg:p-6">
    <img src={icon} alt="" className="size-6 shrink-0 lg:size-8" />
    <div className="min-w-0 lg:w-full">
      <p className="text-xs text-neutral-400 lg:text-md">{label}</p>
      <p className="truncate text-lg font-semibold text-neutral-25 lg:text-xl">
        {value}
      </p>
    </div>
  </div>
);

const MovieDetail = () => {
  const { id } = useParams<{ id: string }>();
  const movieId = Number(id);

  const { data: movie, isLoading, isError, error, refetch } = useMovieDetails(movieId);

  if (isLoading) {
    return (
      <div className="flex flex-col gap-6">
        <Skeleton className="h-[320px] w-full rounded-none" />
        <div className="container-page flex flex-col gap-4">
          <Skeleton className="h-8 w-2/3" />
          <Skeleton className="h-11 w-full rounded-full" />
          <Skeleton className="h-24 w-full" />
        </div>
      </div>
    );
  }

  if (isError || !movie) {
    return (
      <div className="container-page py-6">
        <StateMessage
          title="Film tidak ditemukan"
          description={error?.message ?? "Data film tidak tersedia."}
          action={
            <div className="flex gap-3">
              <Button onClick={() => refetch()}>Coba Lagi</Button>
              <Button variant="secondary" asChild>
                <Link to="/">Back to Home</Link>
              </Button>
            </div>
          }
        />
      </div>
    );
  }

  const trailerKey = findTrailer(movie.videos.results)?.key ?? null;
  const cast = movie.credits.cast.slice(0, MAX_CAST_DISPLAYED);
  const similar = movie.similar.results.slice(0, 12);

  return (
    <PageTransition>
      {/* ---------- Backdrop ---------- */}
      <div className="relative h-[320px] w-full overflow-hidden md:h-[480px] lg:h-[810px]">
        {movie.backdrop_path ? (
          <img
            src={getImageUrl(movie.backdrop_path, IMAGE_SIZES.backdrop.original)}
            alt=""
            className="size-full object-cover object-top"
          />
        ) : (
          <div className="size-full bg-neutral-900" />
        )}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black to-transparent" />

        <Link
          to="/"
          aria-label="Back to home"
          className="absolute top-4 left-4 flex size-10 items-center justify-center rounded-full border border-neutral-900 bg-surface-glass text-neutral-25 backdrop-blur-[40px] transition-colors hover:bg-neutral-900"
        >
          <ArrowLeft className="size-5" />
        </Link>
      </div>

      <article className="relative z-10 container-page -mt-14 flex flex-col gap-6 pb-6 lg:-mt-[380px] lg:gap-12 lg:pb-12">
        {/* ---------- Poster, judul, aksi, statistik ---------- */}
        <div className="flex flex-col gap-6 lg:flex-row lg:gap-6">
          <MoviePoster
            path={movie.poster_path}
            title={movie.title}
            size={IMAGE_SIZES.poster.large}
            className="hidden shrink-0 rounded-xl shadow-lg lg:block lg:h-[384px] lg:w-[260px]"
          />

          <div className="flex flex-col gap-6 lg:flex-1 lg:gap-8">
            <header className="flex items-end gap-4 lg:items-start">
              <MoviePoster
                path={movie.poster_path}
                title={movie.title}
                className="h-[156px] w-[104px] shrink-0 rounded-lg shadow-lg lg:hidden"
              />
              <div className="flex flex-col gap-1 lg:gap-2">
                <h1 className="text-xl font-bold text-neutral-25 drop-shadow-lg md:text-display-sm lg:text-display-xl lg:tracking-[-0.02em]">
                  {movie.title}
                </h1>
                <p className="flex items-center gap-1.5 text-sm text-neutral-400 lg:text-md">
                  <Calendar className="size-5 lg:size-6" />
                  {formatReleaseDate(movie.release_date)}
                </p>
              </div>
            </header>

            {/* ---------- Aksi ---------- */}
            <div className="flex items-center gap-4 lg:gap-5">
              <TrailerDialog
                movieId={movie.id}
                title={movie.title}
                trailerKey={trailerKey}
                className="flex-1 lg:h-13 lg:w-[220px] lg:flex-none lg:text-md"
              />
              <FavoriteButton movie={movie} />
            </div>

            {/* ---------- Statistik ---------- */}
            <div className="flex gap-3 lg:gap-5">
          <StatBox
            icon="/icons/Star.png"
            label="Rating"
            value={formatRating(movie.vote_average)}
          />
          <StatBox
            icon="/icons/Video.png"
            label="Genre"
            value={movie.genres[0]?.name ?? "-"}
          />
          <StatBox
            icon="/icons/Vuesax.png"
            label="Age Limit"
            value={getAgeLimit(movie.release_dates)}
          />
            </div>
          </div>
        </div>

        {/* ---------- Overview ---------- */}
        <section className="flex flex-col gap-2 lg:gap-4">
          <h2 className="text-xl font-bold text-neutral-25 lg:text-display-md">
            Overview
          </h2>
          <p className="text-sm text-neutral-400 lg:text-md">
            {movie.overview || "Sinopsis belum tersedia untuk film ini."}
          </p>
          {movie.runtime ? (
            <p className="text-sm text-neutral-400">
              Durasi: {formatRuntime(movie.runtime)}
            </p>
          ) : null}
        </section>

        {/* ---------- Cast & Crew ---------- */}
        {cast.length > 0 && (
          <section className="flex flex-col gap-4 lg:gap-6">
            <h2 className="text-xl font-bold text-neutral-25 lg:text-display-md">
              Cast &amp; Crew
            </h2>
            <ul className="flex flex-col gap-4 md:grid md:grid-cols-2 lg:grid-cols-3">
              {cast.map((person, index) => (
                <motion.div
                  key={`${person.id}-${person.character}`}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25, delay: index * 0.04 }}
                >
                  <CastCard person={person} />
                </motion.div>
              ))}
            </ul>
          </section>
        )}

        {/* ---------- Film serupa ---------- */}
        {similar.length > 0 && <SimilarMovies movies={similar} />}
      </article>
    </PageTransition>
  );
};

export default MovieDetail;
