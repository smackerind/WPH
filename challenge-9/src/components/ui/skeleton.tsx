import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

/** Placeholder abu-abu berdenyut selagi data dimuat */
const Skeleton = ({ className, ...props }: ComponentProps<"div">) => (
  <div
    className={cn("animate-pulse rounded-xl bg-neutral-900", className)}
    aria-hidden="true"
    {...props}
  />
);

export { Skeleton };
