"use client";

import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useRef, useState } from "react";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import {
  testimonials,
  testimonialsContent,
} from "@/features/testimonials/data";

/**
 * Bagian "People Says About Me".
 *
 * Carousel-nya tidak memakai library. Cukup satu grid yang bisa digeser
 * ke samping dengan scroll-snap:
 *
 *   - mobile  : `grid-rows-1` + kolom selebar 100%  → 1 kartu per layar
 *   - desktop : `grid-rows-2` + kolom selebar 50%   → 4 kartu (2×2) per layar
 *
 * `grid-flow-col` membuat kartu terisi menurun dulu baru ke kanan, jadi
 * susunan 2×2-nya persis seperti desain. Tombol panah menggeser sejauh
 * satu lebar tampilan, dan statusnya dimatikan saat sudah di ujung.
 *
 * Keuntungan cara ini: tetap bisa digeser dengan jari/trackpad, bekerja
 * tanpa JavaScript, dan tidak menambah paket apa pun ke bundle.
 */
export const TestimonialsSection = () => {
  const trackRef = useRef<HTMLUListElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  /** Perbarui status tombol panah setiap kali posisi geser berubah */
  const handleScroll = () => {
    const track = trackRef.current;
    if (!track) return;

    setAtStart(track.scrollLeft <= 8);
    setAtEnd(track.scrollLeft + track.clientWidth >= track.scrollWidth - 8);
  };

  const scrollByPage = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;

    track.scrollBy({ left: direction * track.clientWidth, behavior: "smooth" });
  };

  return (
    /* UBAH: padding 80/112px → 40px mobile / 80px desktop (TestimonialsSection) */
    <section className="py-10 lg:py-20">
      <div className="container-page">
        <SectionHeading
          eyebrow={testimonialsContent.eyebrow}
          title={testimonialsContent.title}
        />

        {/* UBAH: jarak header→kartu 48px → 24px di mobile */}
        <Reveal className="mt-6 lg:mt-16">
          <ul
            ref={trackRef}
            onScroll={handleScroll}
            /* UBAH: jarak kartu 24px → 16px mobile; baris desktop 24px → 35px (TestimonialsList gap 35) */
            className="no-scrollbar grid snap-x snap-mandatory auto-cols-[100%] grid-flow-col grid-rows-1 gap-4 overflow-x-auto pb-2 lg:auto-cols-[calc(50%-12px)] lg:grid-rows-2 lg:gap-x-6 lg:gap-y-[35px]"
          >
            {testimonials.map((item, index) => (
              <li
                key={`${item.name}-${index}`}
                /* UBAH: tanpa latar (desain hanya border); radius-2xl + 16px mobile, radius-3xl + 24px desktop */
                className="snap-start rounded-2xl border border-neutral-800 p-4 lg:rounded-3xl lg:p-6"
              >
                <article className="flex h-full flex-col gap-3">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      {/* UBAH: text-lg → text-xl bold di desktop */}
                      <p className="text-lg font-bold text-neutral-25 lg:text-xl">
                        {item.name}
                      </p>
                      {/* UBAH: text-sm → text-md mobile / text-lg medium desktop */}
                      <p className="text-md text-neutral-400 lg:text-lg lg:font-medium">{item.role}</p>
                    </div>
                    <Image
                      src={item.logo}
                      alt={item.company}
                      width={114}
                      height={48}
                      /* UBAH: logo tinggi 28px → 32px mobile / 48px desktop (companylogo) */
                      className="h-8 w-auto shrink-0 object-contain lg:h-12"
                    />
                  </div>

                  <div
                    /* UBAH: jarak bintang 4px → 0 (gap spacing-none) */
                    className="flex"
                    role="img"
                    aria-label={`Rated ${item.stars} out of 5`}
                  >
                    {Array.from({ length: item.stars }, (_, starIndex) => (
                      <Image
                        key={starIndex}
                        src="/icons/Star.png"
                        alt=""
                        width={32}
                        height={32}
                        /* UBAH: bintang 18px → 20px mobile / 32px desktop */
                        className="size-5 lg:size-8"
                      />
                    ))}
                  </div>

                  {/* UBAH: text-sm/md regular → text-md mobile / text-lg desktop medium */}
                  <p className="text-md font-medium text-neutral-25 lg:text-lg">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </article>
              </li>
            ))}
          </ul>
        </Reveal>

        {/* ---------- Tombol panah ---------- */}
        {/* UBAH: jarak 32px → 24px mobile / 40px desktop; antartombol 12px → 16px */}
        <div className="mt-6 flex justify-center gap-4 lg:mt-10">
          <Button
            variant="outline"
            size="icon"
            onClick={() => scrollByPage(-1)}
            disabled={atStart}
            aria-label="Previous testimonials"
            /* UBAH: tombol 44px → 48px mobile / 56px desktop; panah hijau saat aktif,
               neutral-800 saat di ujung (NavigationButton) */
            className="size-12 text-primary-200 disabled:text-neutral-800 disabled:opacity-100 lg:size-14"
          >
            <ArrowLeft className="size-5 lg:size-6" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() => scrollByPage(1)}
            disabled={atEnd}
            aria-label="Next testimonials"
            className="size-12 text-primary-200 disabled:text-neutral-800 disabled:opacity-100 lg:size-14"
          >
            <ArrowRight className="size-5 lg:size-6" />
          </Button>
        </div>
      </div>
    </section>
  );
};
