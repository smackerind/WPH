import { cva } from "class-variance-authority";

/**
 * Varian tombol dipisah dari komponennya.
 *
 * Alasannya dua: (1) aturan eslint melarang satu file mengekspor komponen
 * dan nilai biasa sekaligus, (2) varian ini juga dipakai oleh <Link> yang
 * ingin tampil seperti tombol, tanpa harus merender <button>.
 */
export const buttonVariants = cva(
  /* UBAH: hapus tracking-wide (desain: letter-spacing 0%) */
  "inline-flex cursor-pointer items-center justify-center gap-2 rounded-full font-bold uppercase transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-200 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        /* Tombol utama hijau dengan cahaya di bawahnya — HIRE ME, Send Message */
        primary:
          "bg-primary-200 text-base-black shadow-glow hover:shadow-glow-lg hover:brightness-110",
        /* Tombol garis tipis — panah carousel */
        outline:
          "border border-neutral-800 bg-transparent text-neutral-25 hover:border-primary-200 hover:text-primary-200",
        /* Tombol putih bulat — VISIT di kartu portofolio */
        white: "bg-base-white text-base-black hover:bg-primary-200",
        ghost: "text-neutral-25 hover:text-primary-200",
      },
      size: {
        sm: "h-10 px-5 text-xs",
        md: "h-12 px-8 text-sm",
        /* UBAH: text-sm → text-md (desain Button "Large": 56px, text-md bold) */
        lg: "h-14 px-10 text-md",
        /* UBAH: varian baru — "Small" 48px/text-sm di mobile, "Large" 56px/text-md di desktop */
        cta: "h-12 px-8 text-sm lg:h-14 lg:px-10 lg:text-md",
        icon: "size-11 shrink-0 p-0",
      },
      full: { true: "w-full" },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);
