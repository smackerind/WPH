import { cva } from "class-variance-authority";

/**
 * Varian tombol dipisah dari komponennya supaya file button.tsx hanya
 * mengekspor komponen — aturan eslint react-refresh melarang satu file
 * mengekspor komponen dan nilai biasa sekaligus.
 *
 * Semua tombol berbentuk pill (rounded-full) sesuai desain.
 */
export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-full font-bold transition-colors disabled:cursor-not-allowed disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-200",
  {
    variants: {
      variant: {
        /** Aksi utama: ungu penuh */
        primary: "bg-primary-300 text-white hover:bg-primary-200",
        /** Aksi sekunder: transparan dengan garis tepi tipis */
        outline:
          "border border-neutral-800 bg-transparent text-neutral-25 hover:bg-neutral-900",
        /** Tanpa garis tepi, untuk aksi ringan di dalam kartu */
        ghost: "text-neutral-25 hover:bg-neutral-900",
        /** Aksi merusak, misalnya hapus post */
        danger: "bg-accent-red text-white hover:opacity-90",
      },
      size: {
        sm: "h-9 px-4 text-sm",
        md: "h-11 px-6 text-sm",
        lg: "h-12 px-8 text-md",
        icon: "size-10 shrink-0 p-0",
      },
      full: {
        true: "w-full",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);
