import { cva } from "class-variance-authority";

/**
 * Varian style tombol, disesuaikan dengan design system Figma:
 * - primary  : tombol merah #961200 (Watch Trailer, Explore Movie)
 * - secondary: panel gelap transparan + blur (See Detail, Load More)
 * - icon     : tombol bulat untuk ikon hati
 *
 * Dipisah dari button.tsx agar file komponen hanya mengekspor komponen
 * (syarat React Fast Refresh).
 */
export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-colors cursor-pointer disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-200",
  {
    variants: {
      variant: {
        primary: "bg-primary-300 text-neutral-25 hover:bg-primary-400",
        secondary:
          "border border-neutral-900 bg-surface-glass text-neutral-25 backdrop-blur-[40px] hover:border-neutral-800 hover:bg-neutral-950",
        ghost: "text-neutral-25 hover:bg-neutral-900",
        icon: "border border-neutral-900 bg-surface-glass backdrop-blur-[40px] hover:border-primary-300",
      },
      size: {
        default: "h-11 px-4 text-sm",
        lg: "h-12 px-6 text-md",
        icon: "size-11 shrink-0 p-0",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);
