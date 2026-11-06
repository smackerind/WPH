import type { VariantProps } from "class-variance-authority";
import { Loader2 } from "lucide-react";
import { buttonVariants } from "@/components/ui/button-variants";
import { cn } from "@/lib/utils";

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  /** Saat true tombol dinonaktifkan dan menampilkan ikon berputar */
  isLoading?: boolean;
}

/**
 * Tombol standar seluruh situs.
 *
 * Bentuk pill dengan cahaya hijau mengikuti desain. Untuk tautan yang
 * tampil seperti tombol, jangan bungkus <a> di dalam <button> — pakai
 * `className={buttonVariants({ ... })}` langsung pada <a> atau <Link>.
 */
export const Button = ({
  className,
  variant,
  size,
  full,
  isLoading,
  disabled,
  children,
  ...props
}: ButtonProps) => (
  <button
    className={cn(buttonVariants({ variant, size, full }), className)}
    disabled={disabled || isLoading}
    {...props}
  >
    {isLoading && <Loader2 className="size-4 animate-spin" aria-hidden />}
    {children}
  </button>
);
