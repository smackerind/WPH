import type { Variants } from "motion/react";

/**
 * Kumpulan varian animasi yang dipakai berulang di banyak bagian.
 * Dikumpulkan di satu file supaya gerakannya konsisten dan mudah diatur
 * dari satu tempat.
 */

/** Durasi dan kurva standar seluruh halaman */
export const EASE = [0.22, 1, 0.36, 1] as const;

/** Muncul sambil naik — dipakai komponen <Reveal> */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
};

/** Muncul dari kiri — kartu timeline sisi kiri */
export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -32 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: EASE } },
};

/** Muncul dari kanan — kartu timeline sisi kanan */
export const fadeRight: Variants = {
  hidden: { opacity: 0, x: 32 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: EASE } },
};

/**
 * Induk daftar: anak-anaknya muncul berurutan, bukan serentak.
 * Pakai bersama `fadeUp` pada tiap anak.
 */
export const stagger = (gap = 0.08): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren: gap } },
});

/** Animasi masuk untuk modal (Success / Failed) */
export const modalPop: Variants = {
  hidden: { opacity: 0, scale: 0.94, y: 8 },
  show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.28, ease: EASE } },
  exit: { opacity: 0, scale: 0.96, transition: { duration: 0.18 } },
};

/**
 * Kapan animasi mulai dijalankan.
 * `amount: 0.15` artinya cukup 15% elemen terlihat — angka kecil dipilih
 * supaya kartu yang tinggi tetap muncul tepat waktu, bukan setelah
 * separuhnya melewati layar. `once: true` membuat animasi tidak diulang
 * saat halaman digulir naik-turun.
 */
export const VIEWPORT = { once: true, amount: 0.15 } as const;
