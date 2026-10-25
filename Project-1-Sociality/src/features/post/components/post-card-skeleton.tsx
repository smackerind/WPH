import { Skeleton } from "@/components/ui/skeleton";

/** Bentuk kasar PostCard selama timeline belum dimuat */
export const PostCardSkeleton = () => (
  <div className="border-b border-neutral-900">
    <div className="flex items-center gap-3 px-4 py-3">
      <Skeleton className="size-10 rounded-full" />
      <div className="flex flex-col gap-1.5">
        <Skeleton className="h-3 w-24" />
        <Skeleton className="h-2.5 w-16" />
      </div>
    </div>

    <Skeleton className="aspect-square w-full rounded-none" />

    <div className="flex gap-4 px-4 py-3">
      <Skeleton className="h-6 w-12" />
      <Skeleton className="h-6 w-12" />
      <Skeleton className="h-6 w-6" />
    </div>
  </div>
);

export const FeedSkeleton = ({ count = 2 }: { count?: number }) => (
  <>
    {Array.from({ length: count }, (_, index) => (
      <PostCardSkeleton key={index} />
    ))}
  </>
);
