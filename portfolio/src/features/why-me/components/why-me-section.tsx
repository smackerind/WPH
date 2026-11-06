import Image from "next/image";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { buttonVariants } from "@/components/ui/button-variants";
import { others, strengths, whyMeContent } from "@/features/why-me/data";
import { cn } from "@/lib/utils";

interface ComparisonColumnProps {
  heading: string;
  items: readonly string[];
  /** Kolom "saya" tampil lebih terang daripada kolom pembanding */
  highlighted: boolean;
  avatar: React.ReactNode;
  className?: string;
}

/** Satu kolom perbandingan: judul, avatar bulat, lalu daftar poin */
const ComparisonColumn = ({
  heading,
  items,
  highlighted,
  avatar,
  className,
}: ComparisonColumnProps) => (
  /* UBAH: jarak isi kolom 24px → 24px mobile / 32px desktop (ExperienceItem gap 32) */
  <div className={cn("flex flex-col items-center gap-6 lg:gap-8", className)}>
    {/* UBAH: extrabold → bold; display-xs → display-sm di desktop (Title) */}
    <h3 className="text-xl font-bold uppercase lg:text-display-sm">
      {heading}
    </h3>
    {avatar}

    <ul className="w-full">
      {items.map((item, index) => (
        /* UBAH: padding 16px → 12px mobile (gap 24); baris terakhir tanpa garis */
        <Reveal
          as="li"
          key={item}
          delay={index * 0.06}
          className="flex items-center gap-3 border-b border-neutral-800 py-3 last:border-b-0 lg:py-4"
        >
          {/* UBAH: ikon 20px → 24px mobile / 32px desktop (Vector) */}
          <Image
            src="/icons/Vector.png"
            alt=""
            width={32}
            height={32}
            className={cn("size-6 shrink-0 lg:size-8", !highlighted && "opacity-40")}
          />
          {/* UBAH: text-sm/md → text-md mobile; desktop text-xl bold (kiri) /
              display-xs regular (kanan) */}
          <span
            className={cn(
              "text-md",
              highlighted
                ? "font-bold text-neutral-25 lg:text-xl"
                : "text-neutral-400 lg:text-display-xs",
            )}
          >
            {item}
          </span>
        </Reveal>
      ))}
    </ul>
  </div>
);

/**
 * Bagian "Why Choose Me?".
 *
 * Dua kolom bersanding di desktop, bertumpuk di mobile — kolom "Working
 * with me" selalu lebih dulu supaya pesan utamanya terbaca lebih awal
 * di layar kecil.
 */
export const WhyMeSection = () => (
  /* UBAH: padding 80/112px → 40px mobile / 80px desktop (ExperienceSection) */
  <section className="py-10 lg:py-20">
    <div className="container-page">
      <SectionHeading
        eyebrow={whyMeContent.eyebrow}
        title={whyMeContent.title}
      />

      {/* UBAH: jarak header→kolom 48/64px → 24px mobile / 48px desktop;
          antarkolom 64px → 80px desktop */}
      <div className="mt-6 grid gap-6 lg:mt-12 lg:grid-cols-2 lg:gap-20">
        <ComparisonColumn
          heading="Working With Me"
          items={strengths}
          highlighted
          avatar={
            /* UBAH: foto bulat 64px → lingkaran neutral-950 60/80px berisi
               potret Man1 yang sedikit diputar (Frame1618873582) */
            <span className="relative size-15 overflow-hidden rounded-full bg-neutral-950 lg:size-20">
              <Image
                src="/images/Man1.png"
                alt=""
                width={68}
                height={90}
                className="absolute top-[5%] left-[2.5%] w-[85%] rotate-[1.45deg] object-cover object-top"
              />
            </span>
          }
        />

        <ComparisonColumn
          heading="Another Talent"
          items={others}
          highlighted={false}
          /* UBAH: garis pemisah antar kolom di mobile (Line11) */
          className="border-t border-neutral-800 pt-6 lg:border-t-0 lg:pt-0"
          avatar={
            /* UBAH: ikon lucide User → gambar frame.png 45/60px dari desain */
            <span className="flex size-15 items-center justify-center rounded-full bg-neutral-950 lg:size-20">
              <Image
                src="/images/frame.png"
                alt=""
                width={60}
                height={60}
                className="size-[45px] lg:size-15"
              />
            </span>
          }
        />
      </div>

      {/* UBAH: jarak 48/64px → 24px mobile / 48px desktop */}
      <Reveal className="mt-6 flex justify-center lg:mt-12">
        {/* UBAH: lebar 232px → penuh (48px) mobile / 240×56 desktop */}
        <a
          href={whyMeContent.ctaHref}
          className={buttonVariants({ size: "cta", className: "w-full lg:w-[240px]" })}
        >
          {whyMeContent.ctaLabel}
        </a>
      </Reveal>
    </div>
  </section>
);
