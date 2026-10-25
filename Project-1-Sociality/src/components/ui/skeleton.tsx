import { cn } from "@/lib/utils";

/** Kotak gelap berkedip sebagai pengganti sementara saat data belum datang */
export const Skeleton = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    aria-hidden
    className={cn("animate-pulse rounded-xl bg-neutral-900", className)}
    {...props}
  />
);
