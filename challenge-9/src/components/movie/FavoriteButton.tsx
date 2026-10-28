import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useMovieStore } from "@/store/movieStore";
import { useShowToast } from "@/store/toastStore";
import type { Movie, MovieDetails } from "@/types/movie";

interface FavoriteButtonProps {
  movie: Movie | MovieDetails;
  className?: string;
}

/**
 * Tombol favorit. Ikonnya mengikuti desain: Heart.png saat belum favorit,
 * berubah jadi Love.png begitu film disimpan.
 */
const FavoriteButton = ({ movie, className }: FavoriteButtonProps) => {
  // Subscribe ke satu film saja supaya tombol lain tidak ikut render ulang
  const isFavorite = useMovieStore((state) =>
    state.favorites.some((item) => item.id === movie.id),
  );
  const toggleFavorite = useMovieStore((state) => state.toggleFavorite);
  const showToast = useShowToast();

  const handleClick = () => {
    toggleFavorite(movie);
    showToast(
      isFavorite ? "Removed from Favorites" : "Success Add to Favorites",
    );
  };

  return (
    <Button
      variant="icon"
      size="icon"
      className={cn("lg:size-13", className)}
      asChild
    >
      <motion.button
        type="button"
        whileTap={{ scale: 0.85 }}
        onClick={handleClick}
        aria-pressed={isFavorite}
        aria-label={
          isFavorite
            ? `Remove ${movie.title} from favorites`
            : `Add ${movie.title} to favorites`
        }
      >
        <motion.img
          key={isFavorite ? "love" : "heart"}
          initial={{ scale: 0.6 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 500, damping: 18 }}
          src={isFavorite ? "/icons/Love.png" : "/icons/Heart.png"}
          alt=""
          className="size-6"
        />
      </motion.button>
    </Button>
  );
};

export default FavoriteButton;
