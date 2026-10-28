import { useGenres } from "@/hooks/useMovies";
import { cn } from "@/lib/utils";

interface GenreFilterProps {
  activeGenre: number | null;
  onChange: (genreId: number | null) => void;
}

/** Filter genre berbentuk chip yang bisa digeser horizontal */
const GenreFilter = ({ activeGenre, onChange }: GenreFilterProps) => {
  const { data, isLoading } = useGenres();

  if (isLoading || !data) return null;

  const chipClass = (isActive: boolean) =>
    cn(
      "shrink-0 cursor-pointer rounded-full border px-4 py-1.5 text-sm transition-colors",
      isActive
        ? "border-primary-300 bg-primary-300 text-neutral-25"
        : "border-neutral-800 text-neutral-400 hover:border-neutral-600 hover:text-neutral-25",
    );

  return (
    <div
      role="group"
      aria-label="Filter by genre"
      className="no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4"
    >
      <button
        type="button"
        onClick={() => onChange(null)}
        aria-pressed={activeGenre === null}
        className={chipClass(activeGenre === null)}
      >
        All
      </button>

      {data.genres.map((genre) => (
        <button
          key={genre.id}
          type="button"
          onClick={() => onChange(genre.id)}
          aria-pressed={activeGenre === genre.id}
          className={chipClass(activeGenre === genre.id)}
        >
          {genre.name}
        </button>
      ))}
    </div>
  );
};

export default GenreFilter;
