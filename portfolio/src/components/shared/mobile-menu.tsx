"use client";

import { X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect } from "react";
import { navItems, site } from "@/lib/site";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

/**
 * Menu layar penuh untuk mobile (frame "Mobile Menu Design").
 *
 * Masuk dengan geser dari kanan, lalu tiap item menu muncul berurutan.
 * Saat terbuka, scroll halaman dikunci supaya latar belakang tidak ikut
 * bergeser, dan tombol Esc bisa menutupnya.
 */
export const MobileMenu = ({ open, onClose }: MobileMenuProps) => {
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-60 bg-base-black lg:hidden"
        >
          {/* ---------- Kepala: logo + tombol tutup ---------- */}
          <div className="container-page flex h-18 items-center justify-between border-b border-neutral-800">
            <span className="flex items-center gap-3">
              <span aria-hidden className="h-px w-8 bg-neutral-25" />
              <span className="text-lg font-bold text-primary-200">
                {site.brand}
              </span>
            </span>

            <button
              type="button"
              onClick={onClose}
              aria-label="Close menu"
              className="cursor-pointer text-neutral-25 transition-colors hover:text-primary-200"
            >
              <X className="size-7" />
            </button>
          </div>

          {/* ---------- Daftar menu ---------- */}
          <motion.ul
            initial="hidden"
            animate="show"
            variants={{ show: { transition: { staggerChildren: 0.06, delayChildren: 0.15 } } }}
            className="container-page flex flex-col gap-10 pt-12"
          >
            {navItems.map((item) => (
              <motion.li
                key={item.href}
                variants={{
                  hidden: { opacity: 0, x: 24 },
                  show: { opacity: 1, x: 0 },
                }}
              >
                <a
                  href={item.href}
                  onClick={onClose}
                  className="text-display-xs text-neutral-25 transition-colors hover:text-primary-200"
                >
                  {item.label}
                </a>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
