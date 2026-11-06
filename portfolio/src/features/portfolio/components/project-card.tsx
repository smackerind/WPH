"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import type { Project } from "@/features/portfolio/data";

interface ProjectCardProps {
  project: Project;
  /** Dipakai next/image untuk memuat kartu pertama lebih awal */
  priority?: boolean;
}

/**
 * Satu kartu proyek.
 *
 * Kalau `url` terisi, SELURUH kartu (gambar, judul, deskripsi) menjadi
 * tautan yang membuka tab baru, dan tombol bundar "VISIT" muncul di atas
 * gambar. Kapan VISIT muncul:
 *
 *   - mouse    : saat kursor di mana pun pada kartu; klik langsung membuka
 *   - sentuhan : sentuhan pertama memunculkan VISIT tanpa membuka tautan,
 *                sentuhan kedua membuka situs; sentuh di luar kartu → hilang
 *   - keyboard : saat kartu difokus dengan Tab; Enter membuka
 *
 * Kalau `url` null, kartu tetap tampil tetapi tidak bisa diklik dan
 * tombolnya tidak dirender.
 *
 * `rel="noopener noreferrer"` wajib menyertai `target="_blank"`: tanpa itu,
 * halaman tujuan bisa mengakses `window.opener` milik situs ini.
 */
export const ProjectCard = ({ project, priority }: ProjectCardProps) => {
  const { title, description, image, url } = project;

  /* UBAH: efek VISIT dikendalikan state (dulu whileHover pada gambar saja)
     supaya bisa dipicu dari seluruh kartu, sentuhan, dan fokus keyboard */
  const [active, setActive] = useState(false);
  const cardRef = useRef<HTMLAnchorElement>(null);
  /** Jenis penunjuk terakhir yang menekan kartu: "mouse", "touch", atau "pen" */
  const pointerTypeRef = useRef<string | null>(null);

  /* Sentuhan di luar kartu menyembunyikan VISIT lagi */
  useEffect(() => {
    if (!active) return;

    const handleOutside = (event: PointerEvent) => {
      if (!cardRef.current?.contains(event.target as Node)) setActive(false);
    };
    document.addEventListener("pointerdown", handleOutside);
    return () => document.removeEventListener("pointerdown", handleOutside);
  }, [active]);

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const isTouch = pointerTypeRef.current !== null && pointerTypeRef.current !== "mouse";
    /* Sentuhan pertama hanya memunculkan VISIT; sentuhan kedua baru membuka */
    if (isTouch && !active) {
      event.preventDefault();
      setActive(true);
    }
  };

  const thumbnail = (
    <motion.div
      initial="rest"
      animate={active ? "hover" : "rest"}
      /* UBAH: rasio 4/3 → 381/284; radius-3xl → radius-2xl di mobile (Image 361×270) */
      className="group relative aspect-[381/284] w-full overflow-hidden rounded-2xl bg-neutral-950 lg:rounded-3xl"
    >
      <motion.div
        variants={{ rest: { scale: 1 }, hover: { scale: 1.05 } }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0"
      >
        <Image
          src={image}
          alt={title}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
        />
      </motion.div>

      {url && (
        <>
          {/* Lapisan gelap tipis agar tombol VISIT tetap terbaca */}
          <motion.span
            aria-hidden
            variants={{ rest: { opacity: 0 }, hover: { opacity: 1 } }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-base-black/40"
          />
          <motion.span
            aria-hidden
            variants={{
              rest: { opacity: 0, scale: 0.6 },
              hover: { opacity: 1, scale: 1 },
            }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            /* UBAH: 80px text-sm → 100px text-lg bold, latar neutral-25 (Frame1618873562) */
            className="absolute top-1/2 left-1/2 flex size-25 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-neutral-25 text-lg font-bold text-neutral-950 uppercase"
          >
            Visit
          </motion.span>
        </>
      )}
    </motion.div>
  );

  const details = (
    /* UBAH: jarak judul–deskripsi 8px → 12px mobile / 16px desktop */
    <div className="flex flex-col gap-3 lg:gap-4">
      {/* UBAH: text-xl → display-xs bold di desktop */}
      <h3 className="text-xl font-bold text-neutral-25 lg:text-display-xs">{title}</h3>
      {/* UBAH: text-md → text-sm di mobile */}
      <p className="text-sm text-neutral-400 lg:text-md">{description}</p>
    </div>
  );

  return (
    <article>
      {url ? (
        /* UBAH: tautan dulu hanya membungkus gambar → kini membungkus
           gambar + judul + deskripsi, dengan pemicu mouse/sentuh/keyboard;
           jarak 16px → 12px di mobile */
        <a
          ref={cardRef}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open ${title} in a new tab`}
          onPointerDown={(event) => {
            pointerTypeRef.current = event.pointerType;
          }}
          onPointerEnter={(event) => {
            if (event.pointerType === "mouse") setActive(true);
          }}
          onPointerLeave={(event) => {
            if (event.pointerType === "mouse") setActive(false);
          }}
          onFocus={(event) => {
            /* Hanya fokus dari keyboard (Tab). Sentuhan juga memberi fokus,
               dan tanpa cek ini sentuhan pertama langsung membuka tautan. */
            if (event.currentTarget.matches(":focus-visible")) setActive(true);
          }}
          onBlur={() => setActive(false)}
          onClick={handleClick}
          className="flex flex-col gap-3 rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-200 lg:gap-4 lg:rounded-3xl"
        >
          {thumbnail}
          {details}
        </a>
      ) : (
        <div className="flex flex-col gap-3 lg:gap-4">
          {thumbnail}
          {details}
        </div>
      )}
    </article>
  );
};
