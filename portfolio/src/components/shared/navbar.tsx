"use client";

import Image from "next/image";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { useState } from "react";
import { MobileMenu } from "@/components/shared/mobile-menu";
import { navItems, site } from "@/lib/site";
import { cn } from "@/lib/utils";

/**
 * Navbar yang menempel di atas layar.
 *
 * Dua keadaan sesuai desain:
 *  - di puncak halaman: latar transparan
 *  - setelah digulir: latar hitam pekat + garis bawah tipis (frame "Scroll")
 *
 * Perubahan itu dipantau lewat useScroll dari motion, bukan event listener
 * manual, supaya tidak perlu mengurus pembersihan listener sendiri.
 */
export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (value) => {
    setScrolled(value > 24);
  });

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        /* UBAH: Di puncak halaman latarnya transparan supaya foto Hero yang naik ke belakang navbar terlihat. */
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
          scrolled ? "bg-base-black/90 backdrop-blur-md" : "bg-transparent",
        )}
      >
        {/* UBAH: tinggi mobile h-18 (72px) → h-20 (80px), desain HeaderMobile 80px */}
        <nav
          aria-label="Main navigation"
          className="container-page flex h-20 items-center justify-between"
        >
          {/* ---------- Logo ---------- */}
          {/* UBAH: garis 32px → 24px mobile / 40px desktop, jarak 12px → 8px,
              teks text-lg → text-md di mobile (desain Line5 & Label) */}
          <a href="#home" className="flex items-center gap-2">
            <span aria-hidden className="h-px w-6 bg-base-white lg:w-10" />
            <span className="text-md font-bold text-primary-200 lg:text-xl">
              {site.brand}
            </span>
          </a>

          {/* ---------- Menu desktop ---------- */}
          {/* UBAH: jarak antarmenu 32px → 8px + padding 8px tiap item (desain Menu) */}
          <ul className="hidden items-center gap-2 lg:flex">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="relative block p-2 text-md text-base-white transition-colors hover:text-primary-200"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* ---------- Tombol hamburger (mobile) ---------- */}
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            aria-expanded={menuOpen}
            /* UBAH: hover hijau → memudar, karena warna gambar PNG tidak bisa diubah lewat CSS */
            className="cursor-pointer transition-opacity hover:opacity-70 lg:hidden"
          >
            {/* UBAH: ikon lucide <Menu> 28px → gambar desain IconHumberger.png
                (garis bawah lebih pendek) di dalam kotak 24×24 (Menu-04) */}
            <span className="flex size-6 items-center justify-center">
              <Image
                src="/icons/IconHumberger.png"
                alt="humbergerbutton"
                width={20}
                height={14}
                className="h-3.5 w-5"
              />
            </span>
          </button>
        </nav>
      </motion.header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
};
