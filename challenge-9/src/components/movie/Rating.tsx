import { cn, formatRating } from "@/lib/utils";

interface RatingProps {
  value: number;
  className?: string;
}

/** Ikon bintang + nilai rating, misal "7.9/10" */
const Rating = ({ value, className }: RatingProps) => (
  <p
    className={cn(
      "flex items-center gap-1 text-sm text-neutral-400 lg:text-md",
      className,
    )}
  >
    <img src="/icons/Star.png" alt="" className="size-[18px] lg:size-5" />
    {formatRating(value)}
  </p>
);

export default Rating;
