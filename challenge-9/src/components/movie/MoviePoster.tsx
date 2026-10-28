import { IMAGE_SIZES } from "@/lib/constants";
import { cn, getImageUrl } from "@/lib/utils";

interface MoviePosterProps {
  path: string | null;
  title: string;
  size?: string;
  className?: string;
}

/**
 * Poster film. Kalau TMDB tidak punya poster (poster_path null),
 * tampilkan kotak placeholder agar layout tidak rusak.
 */
const MoviePoster = ({
  path,
  title,
  size = IMAGE_SIZES.poster.medium,
  className,
}: MoviePosterProps) => {
  if (!path) {
    return (
      <div
        className={cn(
          "flex items-center justify-center bg-neutral-900 p-2 text-center text-xs text-neutral-500",
          className,
        )}
      >
        No poster
      </div>
    );
  }

  return (
    <img
      src={getImageUrl(path, size)}
      alt={`${title} poster`}
      loading="lazy"
      className={cn("object-cover", className)}
    />
  );
};

export default MoviePoster;
