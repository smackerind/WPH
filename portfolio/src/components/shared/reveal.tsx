"use client";

import { motion } from "motion/react";
import { fadeUp, fadeLeft, fadeRight, VIEWPORT } from "@/lib/motion";
import { cn } from "@/lib/utils";

type Direction = "up" | "left" | "right";

interface RevealProps {
  children: React.ReactNode;
  /** Arah datangnya elemen. Bawaan: naik dari bawah. */
  direction?: Direction;
  /** Jeda sebelum animasi mulai, dalam detik. Untuk efek berurutan. */
  delay?: number;
  className?: string;
  /** Tag HTML yang dipakai, misal "li" atau "section". Bawaan "div". */
  as?: "div" | "section" | "li" | "article";
}

const VARIANTS = { up: fadeUp, left: fadeLeft, right: fadeRight };

/**
 * Pembungkus animasi "scroll reveal".
 *
 * Isinya tersembunyi sampai elemen masuk layar, lalu muncul sambil bergeser.
 * Dipakai di hampir semua bagian supaya gerakannya seragam — kalau mau
 * mengubah gaya animasi seluruh halaman, cukup ubah varian di lib/motion.ts.
 *
 * Catatan: memakai whileInView dengan `once: true`, jadi animasi hanya
 * berjalan sekali dan tidak mengulang saat halaman digulir naik-turun.
 */
export const Reveal = ({
  children,
  direction = "up",
  delay = 0,
  className,
  as = "div",
}: RevealProps) => {
  const MotionTag = motion[as];

  return (
    <MotionTag
      initial="hidden"
      whileInView="show"
      viewport={VIEWPORT}
      variants={VARIANTS[direction]}
      transition={{ delay }}
      className={cn(className)}
    >
      {children}
    </MotionTag>
  );
};
