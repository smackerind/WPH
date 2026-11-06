"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Reveal } from "@/components/shared/reveal";
import { aboutContent } from "@/features/about/data";
import { EASE, VIEWPORT } from "@/lib/motion";

/**
 * Posisi & ukuran gambar mengambang di desktop, urut sesuai `floatingImages`
 * (image1, image2, image3).
 *
 * UBAH: ukuran 170/175/140px → 238/117/250px sesuai desain (Image 238×178,
 * 117×88, 250×187); posisinya diukur dari Image-Desktop-DesktopDesign.png.
 */
const FLOAT_POSITIONS = [
  "left-[10.5%] -top-[87px] w-[238px]",
  "left-[66%] top-[151px] w-[117px]",
  "right-[4%] -top-[57px] w-[250px]",
] as const;

/**
 * UBAH: posisi gambar di mobile — sebelumnya disembunyikan di bawah `lg`.
 * Desain mobile (Frame1618873595, 393×288) menaruh ketiganya di bawah
 * paragraf: image1 170px, image2 132px, image3 134px.
 */
const MOBILE_POSITIONS = [
  "top-0 left-[40px] w-[170px]",
  "top-[164px] left-[144px] w-[132px]",
  "top-[45px] left-[224px] w-[134px]",
] as const;

/**
 * Bagian "About Me".
 *
 * Judul besar di tengah dengan tiga tangkapan layar kecil mengambang di
 * sekelilingnya (desktop), atau tersusun di bawah paragraf (mobile).
 * Gambar-gambar itu bergerak naik-turun pelan tanpa henti supaya halaman
 * terasa hidup.
 */
export const AboutSection = () => {
  const { eyebrow, titleTop, titleHighlight, titleBottom, description, floatingImages } =
    aboutContent;

  return (
    /* UBAH: padding 80/112px → 40px mobile (spacing-5xl) / 120px desktop */
    <section id="about" className="relative overflow-hidden py-10 lg:py-30">
      {/* UBAH: motif kotak kini 3 kotak tangga, diputar menghadap kanan,
          menempel di kiri bawah (desain Group1 angle -90°) */}
      <span
        aria-hidden
        className="deco-squares absolute bottom-[26px] -left-[23px] hidden rotate-90 lg:block"
      />

      <div className="container-page">
        <div className="relative">
          {/* ---------- Gambar mengambang (desktop) ---------- */}
          {floatingImages.map((image, index) => (
            <motion.div
              key={image.src}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{
                opacity: 1,
                scale: 1,
                y: [0, -10, 0],
              }}
              viewport={VIEWPORT}
              transition={{
                opacity: { duration: 0.6, ease: EASE, delay: index * 0.12 },
                scale: { duration: 0.6, ease: EASE, delay: index * 0.12 },
                y: {
                  duration: 5 + index,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.4,
                },
              }}
              /* UBAH: sudut rounded-xl dihapus (desain radius-none) */
              className={`pointer-events-none absolute hidden lg:block ${FLOAT_POSITIONS[index]}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={250}
                height={187}
                className="h-auto w-full object-cover"
              />
            </motion.div>
          ))}

          {/* ---------- Judul ---------- */}
          {/* UBAH: lebar 680px → 872px (AboutDescription) */}
          <div className="relative z-10 mx-auto flex max-w-[872px] flex-col items-center gap-4 text-center">
            <Reveal>
              {/* UBAH: text-sm semibold → text-md mobile / text-lg desktop medium */}
              <p className="text-md font-medium text-primary-200 uppercase lg:text-lg">
                {eyebrow}
              </p>
            </Reveal>

            <Reveal delay={0.08}>
              {/* UBAH: display-sm/xl → display-md mobile / display-2xl desktop;
                  di desktop tiap bagian satu baris, jarak 4px (AboutDetails gap 4) */}
              <h2 className="flex flex-col text-display-md font-extrabold uppercase lg:gap-1 lg:text-display-2xl">
                <span>{titleTop}</span>
                <span>
                  <span className="text-primary-200">{titleHighlight}</span>{" "}
                  <span className="lg:block">{titleBottom}</span>
                </span>
              </h2>
            </Reveal>
          </div>
        </div>

        <Reveal delay={0.16}>
          {/* UBAH: jarak 40/64px → 16px mobile / 64px desktop; text-md → text-xl
              medium di desktop; lebar 760px → 996px */}
          <p className="mx-auto mt-4 max-w-[996px] text-center text-md font-medium text-neutral-400 lg:mt-16 lg:text-xl">
            {description}
          </p>
        </Reveal>
      </div>

      {/* ---------- Gambar (mobile) ---------- */}
      {/* UBAH: blok baru 393×288 di bawah paragraf, sesuai frame mobile */}
      <div className="relative mx-auto mt-10 h-[288px] w-full max-w-[393px] lg:hidden">
        <span
          aria-hidden
          className="deco-squares absolute top-[192px] -left-[17px] rotate-90"
        />
        {floatingImages.map((image, index) => (
          <Reveal
            key={image.src}
            delay={index * 0.1}
            className={`absolute ${MOBILE_POSITIONS[index]}`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={170}
              height={127}
              className="h-auto w-full object-cover"
            />
          </Reveal>
        ))}
      </div>
    </section>
  );
};
