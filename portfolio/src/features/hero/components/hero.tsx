"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { buttonVariants } from "@/components/ui/button-variants";
import { heroContent } from "@/features/hero/data";
import { EASE } from "@/lib/motion";
import { cn } from "@/lib/utils";

type PortraitVariant = "mobile" | "desktop";

/**
 * Foto Hero berlapis, disusun persis seperti layer Figma "ProfileImage"
 * (dari belakang ke depan):
 *
 *   1. blok hijau #91FF02 di sisi kanan  (ProfileImageBackground)
 *   2. foto Man1 dengan mix-blend luminosity — di atas hitam jadi abu-abu,
 *      di atas blok hijau jadi bersemu hijau (ImageMan)
 *   3. gradient transparan → hitam ke arah bawah (ProfileImageBackground)
 *   4. kartu rating 5.0
 *
 * UBAH: sebelumnya foto ada di dalam grid di bawah navbar dengan lapisan
 * primary-300 + mix-blend-color di separuh kanan.
 */
const Portrait = ({ variant }: { variant: PortraitVariant }) => {
  const { photo, rating } = heroContent;
  const isDesktop = variant === "desktop";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
      className={cn(
        "isolate overflow-hidden bg-base-black",
        /* UBAH: desktop — 660×874 menempel di kanan atas layar (left 780 @1440),
           jadi ikut naik ke belakang navbar yang transparan */
        isDesktop
          ? "absolute top-0 right-0 hidden aspect-[660/874] w-[min(660px,45.84vw)] lg:block"
          : /* UBAH: mobile — blok 393×513 di BAWAH teks (sebelumnya di atas teks) */
            "relative mx-auto aspect-[393/513] w-full max-w-[393px] lg:hidden",
      )}
    >
      {/* 1. Blok hijau sisi kanan — desktop 316/660, mobile 187/393 */}
      <span
        aria-hidden
        className={cn(
          "absolute bg-primary-200",
          isDesktop
            ? "top-0 right-0 h-[98.86%] w-[47.88%]"
            : "top-[2.34%] right-0 h-[90.84%] w-[47.58%]",
        )}
      />

      {/* 2. Foto, diputar 1,45° dan dicampur luminosity seperti desain */}
      <div
        className={cn(
          "absolute rotate-[1.45deg] mix-blend-luminosity",
          isDesktop
            ? "top-[-0.84%] left-[-1.49%] h-[99.77%] w-[99.7%]"
            : "top-[1.5%] left-[4.28%] h-[89.87%] w-[88.57%]",
        )}
      >
        <Image
          src={photo}
          alt="Portrait of Selamet Sumito"
          fill
          priority
          sizes={isDesktop ? "660px" : "393px"}
          className="object-cover object-top"
        />
      </div>

      {/* 3. Gradient transparan → hitam (nilai persis dari desain) */}
      <span
        aria-hidden
        className={cn(
          "absolute bg-[linear-gradient(180deg,rgba(0,0,0,0)_-92.59%,#000000_88.93%)]",
          isDesktop ? "inset-0" : "inset-x-0 top-[2.34%] h-[90.84%]",
        )}
      />

      {/* Motif kotak (Group1) di kiri foto — khusus mobile */}
      {!isDesktop && (
        <span aria-hidden className="deco-squares absolute top-[49.5%] left-0" />
      )}

      {/* 4. Kartu rating */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: EASE, delay: 0.5 }}
        className={cn(
          "absolute flex flex-col gap-2 border border-neutral-800 bg-base-black",
          /* UBAH: 240px/p-5 → 316×178, padding spacing-2xl 20px, radius-3xl (desain Frame1618873535) */
          isDesktop
            ? "top-[70.02%] left-[28.18%] w-[316px] rounded-3xl p-5"
            : /* UBAH: 220px → selebar foto 349px, padding spacing-xl 16px, radius-2xl */
              "top-[65.5%] left-[5.6%] w-[88.8%] rounded-2xl p-4",
        )}
      >
        {/* UBAH: "5.0" display-xs → display-xl bold di desktop */}
        <p
          className={cn(
            "font-bold text-neutral-25",
            isDesktop ? "text-display-xl" : "text-display-xs",
          )}
        >
          {rating.score}
        </p>
        <div
          className="flex"
          role="img"
          aria-label={`Rating ${rating.score} out of 5`}
        >
          {Array.from({ length: rating.stars }, (_, index) => (
            /* UBAH: bintang 20px → 32px desktop / 24px mobile, tanpa jarak (gap spacing-none) */
            <Image
              key={index}
              src="/icons/Star.png"
              alt=""
              width={32}
              height={32}
              className={isDesktop ? "size-8" : "size-6"}
            />
          ))}
        </div>
        {/* UBAH: text-sm → text-xl semibold desktop / text-md semibold mobile */}
        <p
          className={cn(
            "font-semibold text-neutral-25",
            isDesktop ? "text-xl" : "text-md",
          )}
        >
          {rating.caption}
        </p>
      </motion.div>
    </motion.div>
  );
};

/**
 * Bagian Hero — layar pertama yang dilihat pengunjung.
 *
 * Desktop: teks di kiri, foto menempel di pojok kanan atas layar dan
 * menembus ke belakang navbar transparan. Judul sengaja menimpa sisi kiri
 * foto, sama seperti desain.
 * Mobile: teks dulu, foto di bawahnya (mengikuti frame mobile).
 *
 * Animasi di sini memakai `animate` biasa, bukan `whileInView`, karena
 * bagian ini sudah terlihat begitu halaman dibuka.
 */
export const Hero = () => {
  const { greeting, titleStart, titleHighlight, titleEnd, description, ctaLabel, ctaHref } =
    heroContent;

  return (
    /* UBAH: tinggi desktop mengikuti min-h-screen → 874px tetap, ditutup
       garis neutral-800 (desain: Sidebar border-top di y=874) */
    <section
      id="home"
      className="relative overflow-hidden lg:h-[874px] lg:border-b lg:border-neutral-800"
    >
      {/* UBAH: tambah dua garis vertikal Line9 (x=375) & Line8 (x=707) */}
      <span
        aria-hidden
        className="absolute top-0 left-[26.04%] hidden h-full w-px bg-neutral-800 lg:block"
      />
      <span
        aria-hidden
        className="absolute top-0 left-[49.1%] hidden h-full w-px bg-neutral-800 lg:block"
      />

      {/* UBAH: motif kotak 2×32px → 3×46px tangga, menempel di kiri bawah (Group1 top 782) */}
      <span
        aria-hidden
        className="deco-squares absolute bottom-0 left-0 hidden lg:block"
      />

      <Portrait variant="desktop" />

      {/* ---------- Teks ---------- */}
      {/* UBAH: padding atas desktop 80px → 221px (HeroSection top 221),
          mobile 112px → 80px header + 40px; jarak isi→tombol 60px desktop / 40px mobile */}
      <motion.div
        initial="hidden"
        animate="show"
        variants={{ show: { transition: { staggerChildren: 0.12 } } }}
        className="container-page relative z-10 flex flex-col gap-10 pt-30 pb-10 lg:gap-[60px] lg:pt-[221px] lg:pb-0"
      >
        <div className="flex flex-col gap-4">
          {/* UBAH: text-sm/md → text-md mobile / text-xl desktop medium;
              garis 40px → 21px mobile / 114px desktop, jarak 8px / 16px */}
          <motion.p
            variants={{
              hidden: { opacity: 0, x: -16 },
              show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: EASE } },
            }}
            className="flex items-center gap-2 text-md font-medium text-neutral-25 lg:gap-4 lg:text-xl"
          >
            <span aria-hidden className="h-px w-[21px] shrink-0 bg-neutral-25 lg:w-[114px]" />
            {greeting}
          </motion.p>

          {/* UBAH: display-md → display-lg (36/48) di mobile; 80/80 di ≥1280px,
              60/72 di 1024–1279px agar tidak meluber; tracking -2% dihapus
              (HeroTitle letter-spacing 0%); lebar maks 807px */}
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 28 },
              show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
            }}
            className="text-display-lg font-extrabold uppercase lg:max-w-[807px] lg:text-display-3xl lg:tracking-normal xl:text-hero"
          >
            {titleStart}{" "}
            <span className="text-primary-200">{titleHighlight}</span>{" "}
            {titleEnd}
          </motion.h1>

          {/* UBAH: text-md → text-lg mobile / text-xl desktop medium; lebar 460px → 597px */}
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
            }}
            className="text-lg font-medium text-neutral-400 lg:max-w-[597px] lg:text-xl"
          >
            {description}
          </motion.p>
        </div>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
          }}
        >
          {/* UBAH: 232px → penuh di mobile (48px) / 300×56 di desktop */}
          <a
            href={ctaHref}
            className={buttonVariants({ size: "cta", className: "w-full lg:w-[300px]" })}
          >
            {ctaLabel}
          </a>
        </motion.div>
      </motion.div>

      <Portrait variant="mobile" />
    </section>
  );
};
