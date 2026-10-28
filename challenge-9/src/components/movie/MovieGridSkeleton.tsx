import { Skeleton } from "@/components/ui/skeleton";

/** Placeholder kartu film selagi data dimuat */
const MovieGridSkeleton = ({ count = 6 }: { count?: number }) => (
  <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6">
    {Array.from({ length: count }).map((_, index) => (
      <div key={index} className="flex flex-col gap-2">
        <Skeleton className="aspect-[173/266] w-full" />
        <Skeleton className="h-5 w-3/4" />
        <Skeleton className="h-4 w-1/2" />
      </div>
    ))}
  </div>
);

export default MovieGridSkeleton;
