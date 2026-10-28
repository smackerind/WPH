import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

/** Logo "Movie" — ikon TV + teks, dipakai di navbar dan footer */
const Logo = ({ className }: { className?: string }) => (
  <Link
    to="/"
    className={cn("inline-flex items-center gap-1 lg:gap-[7px]", className)}
    aria-label="Movie Explorer — home"
  >
    <img src="/icons/bxs_tv.png" alt="" className="size-7 lg:size-10" />
    <span className="font-display text-[19.91px] leading-[24.89px] font-semibold tracking-[-0.04em] text-neutral-25 lg:text-[28.44px] lg:leading-[35.56px]">
      Movie
    </span>
  </Link>
);

export default Logo;
