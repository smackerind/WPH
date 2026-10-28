import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

/** Input teks — style mengikuti SearchBox di Figma */
const Input = ({ className, type = "text", ...props }: ComponentProps<"input">) => {
  return (
    <input
      type={type}
      className={cn(
        "h-11 w-full rounded-xl border border-neutral-800 bg-surface-glass px-4 text-sm text-neutral-25 backdrop-blur-[40px] outline-none transition-colors",
        "placeholder:text-neutral-500 focus:border-primary-300",
        className,
      )}
      {...props}
    />
  );
};

export { Input };
