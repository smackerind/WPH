import type { VariantProps } from "class-variance-authority";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button-variants";

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
}

/**
 * Tombol standar aplikasi.
 * Saat `isLoading`, tombol menonaktifkan dirinya sendiri dan menampilkan
 * spinner — jadi pemanggil tidak perlu mengurus keduanya.
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
    className={cn(
      buttonVariants({ variant, size, full }),
      !disabled && !isLoading && "cursor-pointer",
      className,
    )}
    disabled={disabled || isLoading}
    {...props}
  >
    {isLoading && <Loader2 className="size-4 animate-spin" aria-hidden />}
    {children}
  </button>
);
