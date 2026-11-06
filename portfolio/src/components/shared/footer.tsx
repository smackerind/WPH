import { site } from "@/lib/site";

/**
 * Baris hak cipta paling bawah halaman.
 * Dipisah dari bagian Contact karena di desain ada garis pemisah di antaranya.
 */
export const Footer = () => (
  /* UBAH: padding 32px → tinggi tetap 64px mobile / 80px desktop (Footer) */
  <footer className="flex h-16 items-center border-t border-neutral-800 lg:h-20">
    {/* UBAH: text-sm → text-xs mobile / text-md desktop */}
    <div className="container-page text-center text-xs text-neutral-400 lg:text-md">
      © {site.year} {site.name}. All rights reserved.
    </div>
  </footer>
);
