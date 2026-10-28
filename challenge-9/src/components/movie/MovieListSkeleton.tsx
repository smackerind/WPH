import { Skeleton } from "@/components/ui/skeleton";

/** Placeholder baris film (Favorites & hasil pencarian) */
const MovieListSkeleton = ({ count = 3 }: { count?: number }) => (
  <div className="flex flex-col gap-8">
    {Array.from({ length: count }).map((_, index) => (
      <div key={index} className="flex flex-col gap-6">
        <div className="flex gap-4">
          <Skeleton className="h-[156px] w-[104px] shrink-0" />
          <div className="flex w-full flex-col gap-2">
            <Skeleton className="h-6 w-2/3" />
            <Skeleton className="h-5 w-24" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
          </div>
        </div>
        <Skeleton className="h-11 w-full rounded-full" />
      </div>
    ))}
  </div>
);

export default MovieListSkeleton;
