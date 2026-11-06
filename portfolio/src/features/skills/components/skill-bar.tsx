"use client";

import { motion } from "motion/react";
import { EASE, VIEWPORT } from "@/lib/motion";

interface SkillBarProps {
  label: string;
  /** Persentase 0–100 */
  value: number;
  /** Urutan baris, dipakai untuk menunda animasi agar berurutan */
  index: number;
}

/**
 * Satu baris kemampuan: batang hijau + angka persen di kanan.
 *
 * Batangnya tumbuh dari lebar 0 ke nilainya ketika baris masuk layar.
 * Nilai persen juga ditulis di `aria-valuenow` supaya pembaca layar
 * tetap mendapat angkanya walau animasinya tidak terlihat.
 */
export const SkillBar = ({ label, value, index }: SkillBarProps) => (
  /* UBAH: jarak batang→persen 16px → 24px di desktop */
  <li className="flex items-center gap-4 lg:gap-6">
    {/* Rel batang. Lebarnya proporsional terhadap nilai tertinggi (100%). */}
    <div
      /* UBAH: tinggi 48px → 40px mobile / 64px desktop; rel maks 467px (SkillBarContent) */
      className="relative h-10 flex-1 lg:h-16 lg:max-w-[467px]"
      role="progressbar"
      aria-label={label}
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      {/* Garis tipis sebagai jalur penuh di belakang batang */}
      <span
        aria-hidden
        className="absolute top-1/2 left-0 h-px w-full -translate-y-1/2 bg-neutral-800"
      />

      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${value}%` }}
        viewport={VIEWPORT}
        transition={{ duration: 1, ease: EASE, delay: index * 0.1 }}
        /* UBAH: pill penuh → radius 13px mobile / radius-3xl desktop, padding 16/24px */
        className="relative flex h-10 items-center overflow-hidden rounded-[13px] px-4 bg-primary-300 lg:h-16 lg:rounded-3xl lg:px-6"
      >
        {/* Garis miring samar di dalam batang, mengikuti desain */}
        {/* UBAH: garis 45° tebal → garis tipis 1px bersudut 115°, opacity 8% (DiagonalLines) */}
        <span
          aria-hidden
          className="absolute inset-0 opacity-[0.08] [background-image:repeating-linear-gradient(25deg,transparent_0_15px,var(--color-neutral-25)_15px_16px)]"
        />
        {/* UBAH: regular → semibold, text-md → text-lg di desktop */}
        <span className="relative truncate text-sm font-semibold text-neutral-25 lg:text-lg">
          {label}
        </span>
      </motion.div>
    </div>

    {/* UBAH: regular → semibold, text-md → text-xl di desktop */}
    <span className="w-[43px] shrink-0 text-right text-sm font-semibold text-base-white lg:w-12 lg:text-left lg:text-xl">
      {value}%
    </span>
  </li>
);
