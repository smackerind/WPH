"use client";

import Image from "next/image";
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { useRef } from "react";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { experienceContent, experiences } from "@/features/experience/data";
import { cn } from "@/lib/utils";

/** Kartu satu pengalaman kerja */
const ExperienceCard = ({
  period,
  role,
  company,
  logo,
  description,
}: (typeof experiences)[number]) => (
  /* UBAH: latar neutral-950/60 → hitam; radius-2xl + padding 16px di mobile,
     radius-3xl + 24px di desktop; jarak isi 16px (WorkExperienceCard) */
  <article className="flex flex-col gap-4 rounded-2xl border border-neutral-800 bg-base-black p-4 lg:rounded-3xl lg:p-6">
    {/* UBAH: mobile — periode, jabatan, logo bertumpuk vertikal (Frame1618873567 vertical) */}
    <div className="flex flex-col gap-1 lg:flex-row lg:items-start lg:justify-between lg:gap-4">
      <div>
        {/* UBAH: text-sm → text-lg medium di desktop */}
        <p className="text-sm text-neutral-400 lg:text-lg lg:font-medium">{period}</p>
        {/* UBAH: text-lg → text-md mobile / display-xs desktop bold */}
        <h3 className="mt-1 text-md font-bold text-neutral-25 lg:text-display-xs">{role}</h3>
      </div>
      {/* UBAH: logo tinggi 28px → 32px mobile / 48px desktop (companylogo 76×32 / 114×48) */}
      <Image
        src={logo}
        alt={company}
        width={114}
        height={48}
        className="h-8 w-auto shrink-0 self-start object-contain lg:h-12"
      />
    </div>
    <p className="text-sm text-neutral-400 lg:text-md">{description}</p>
  </article>
);

/**
 * Bagian "Profesional Work" — timeline zig-zag.
 *
 * Di desktop kartu berselang-seling kiri dan kanan garis tengah; di mobile
 * semua kartu rata kanan dengan rel di tepi kiri, mengikuti frame mobile.
 *
 * Garis hijau di tengah "menggambar dirinya" mengikuti posisi gulir:
 * useScroll mengukur seberapa jauh bagian ini sudah dilewati, lalu
 * nilainya dipakai sebagai scaleY garis. useSpring membuat gerakannya
 * halus, tidak patah-patah mengikuti setiap piksel scroll.
 */
export const ExperienceSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 60%"],
  });
  const progress = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 20,
    restDelta: 0.001,
  });
  const scaleY = useTransform(progress, [0, 1], [0, 1]);

  return (
    // overflow-x-clip menahan kartu yang untuk sesaat berada di luar layar
    // karena animasi "masuk dari samping", agar tidak muncul scroll mendatar
    /* UBAH: padding 80/112px → 40px mobile / 80px desktop (WorkSection) */
    <section className="relative overflow-x-clip py-10 lg:py-20">
      {/* UBAH: tambah motif kotak di kanan bawah, menghadap kiri (desain WorkSection Group1 angle 90°) */}
      <span
        aria-hidden
        className="deco-squares absolute -right-[23px] bottom-[23px] hidden -rotate-90 lg:block"
      />
      <div className="container-page">
        <SectionHeading
          eyebrow={experienceContent.eyebrow}
          title={experienceContent.title}
        />

        {/* UBAH: jarak header→timeline 48/80px → 24px mobile / 64px desktop */}
        <div ref={containerRef} className="relative mt-6 lg:mt-16">
          {/* Rel abu-abu sebagai jalur penuh */}
          <span
            aria-hidden
            /* UBAH: rel mobile left 16px → 20px (tengah bulatan 40px) */
            className="absolute top-0 left-5 h-full w-px bg-neutral-800 lg:left-1/2 lg:-translate-x-1/2"
          />
          {/* Garis hijau yang tumbuh mengikuti gulir */}
          <motion.span
            aria-hidden
            style={{ scaleY }}
            className="absolute top-0 left-5 h-full w-px origin-top bg-primary-200 lg:left-1/2 lg:-translate-x-1/2"
          />

          {/* UBAH: jarak antarkartu mobile 40px → 16px */}
          <ol className="flex flex-col gap-4 lg:gap-16">
            {experiences.map((item, index) => {
              const isRight = index % 2 === 0;

              return (
                <li key={`${item.company}-${index}`} className="relative">
                  {/* Bulatan bernomor di atas garis */}
                  {/* UBAH: 32px border hijau teks putih → 40px mobile / 48px desktop,
                      border neutral-800, angka hijau bold (Frame1618873568); di
                      desktop sejajar tengah kartu */}
                  <span className="absolute top-0 left-5 z-10 flex size-10 -translate-x-1/2 items-center justify-center rounded-full border border-neutral-800 bg-base-black text-sm font-bold text-primary-200 lg:top-1/2 lg:left-1/2 lg:size-12 lg:-translate-y-1/2 lg:text-md">
                    {index + 1}
                  </span>

                  {/* Dua kolom di desktop; di mobile hanya kolom kanan yang
                      dipakai, jadi semua kartu rata kanan terhadap rel. */}
                  {/* UBAH: indent mobile 48px → 56px (bulatan 40 + gap 16);
                      jarak tengah desktop 64px → 176px agar kartu ±510px */}
                  <div className="pl-14 lg:grid lg:grid-cols-2 lg:gap-44 lg:pl-0">
                    {/* Kolom kiri — hanya terisi pada item bernomor genap */}
                    <div className="hidden lg:block">
                      {!isRight && (
                        <Reveal direction="left">
                          <ExperienceCard {...item} />
                        </Reveal>
                      )}
                    </div>

                    {/* Kolom kanan — terisi pada item ganjil, dan selalu
                        terisi di mobile */}
                    <div className={cn(!isRight && "lg:hidden")}>
                      <Reveal direction={isRight ? "right" : "left"}>
                        <ExperienceCard {...item} />
                      </Reveal>
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
};
