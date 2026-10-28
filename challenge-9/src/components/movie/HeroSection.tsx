import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import TrailerDialog from "@/components/movie/TrailerDialog";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { IMAGE_SIZES } from "@/lib/constants";
import { getImageUrl } from "@/lib/utils";
import type { Movie } from "@/types/movie";

interface HeroSectionProps {
  movie?: Movie;
  isLoading: boolean;
}

/** Banner besar di atas halaman Home, memakai film trending teratas */
const HeroSection = ({ movie, isLoading }: HeroSectionProps) => {
  if (isLoading || !movie) {
    return (
      <section className="relative h-[560px] w-full lg:h-[810px]">
        <Skeleton className="size-full rounded-none" />
      </section>
    );
  }

  return (
    <section className="relative w-full" aria-labelledby="hero-title">
      <div className="relative h-[560px] w-full overflow-hidden lg:h-[810px]">
        <img
          src={getImageUrl(movie.backdrop_path, IMAGE_SIZES.backdrop.original)}
          alt=""
          fetchPriority="high"
          className="size-full object-cover object-top"
        />
        {/* Gradient hitam agar teks tetap terbaca di atas gambar */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="container-page absolute inset-x-0 bottom-8 flex flex-col gap-6 lg:bottom-auto lg:top-[298px] lg:gap-12"
      >
        <div className="flex max-w-xl flex-col gap-1.5 lg:max-w-[635px] lg:gap-4">
          <h1
            id="hero-title"
            className="font-display text-display-xs font-bold tracking-[-0.02em] text-neutral-25 lg:text-display-2xl"
          >
            {movie.title}
          </h1>
          <p className="line-clamp-5 text-sm text-neutral-400 lg:line-clamp-3 lg:text-md">
            {movie.overview}
          </p>
        </div>

        <div className="flex max-w-xl flex-col gap-4 sm:flex-row lg:gap-4">
          <TrailerDialog
            movieId={movie.id}
            title={movie.title}
            className="w-full sm:w-auto sm:px-8 lg:h-13 lg:w-[230px] lg:text-md"
          />
          <Button
            variant="secondary"
            asChild
            className="w-full sm:w-auto sm:px-8 lg:h-13 lg:w-[230px] lg:text-md"
          >
            <Link to={`/movie/${movie.id}`}>See Detail</Link>
          </Button>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
