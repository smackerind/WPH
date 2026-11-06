import Image from "next/image";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { serviceContent, services } from "@/features/service/data";

/**
 * Bagian "My Service Expertise".
 *
 * Tiga kartu layanan bernomor. Di desktop sejajar tiga kolom, di mobile
 * bertumpuk satu kolom. Tiap kartu muncul berurutan dengan jeda 0,1 detik
 * supaya terasa mengalir, bukan serentak.
 *
 * Ini Server Component — tidak ada state maupun event, animasinya ditangani
 * oleh <Reveal> yang sudah "use client" di dalamnya.
 */
export const ServiceSection = () => (
  /* UBAH: padding 80/112px → 40px mobile / 120px desktop (desain ServiceSection) */
  <section id="service" className="py-10 lg:py-30">
    <div className="container-page">
      <SectionHeading
        eyebrow={serviceContent.eyebrow}
        title={serviceContent.title}
        description={serviceContent.description}
        layout="split"
      />

      {/* UBAH: jarak header→kartu 48px → 24px mobile / 64px desktop; antarkartu 40/32px → 24px mobile / 40px desktop */}
      <ul className="mt-6 grid gap-6 md:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-10">
        {services.map((service, index) => (
          <Reveal as="li" key={service.title} delay={index * 0.1}>
            {/* UBAH: jarak isi kartu 16px → 12px mobile / 24px desktop */}
            <article className="flex flex-col gap-3 lg:gap-6">
              {/* Nomor urut + garis pemisah, mengikuti desain */}
              {/* UBAH: nomor regular → semibold, text-xl di desktop */}
              <span className="text-md font-semibold text-neutral-400 lg:text-xl">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span aria-hidden className="h-px w-full bg-neutral-800" />

              <Image
                src="/icons/Computer.png"
                alt=""
                width={32}
                height={32}
                /* UBAH: ikon 28px → 32px (desain Monitor1 32×32) */
                className="size-8"
              />

              {/* UBAH: text-xl medium → text-xl semibold mobile / display-sm semibold desktop */}
              <h3 className="text-xl font-semibold text-neutral-25 lg:text-display-sm">
                {service.title}
              </h3>
              {/* UBAH: text-md → text-xl di desktop */}
              <p className="text-md text-neutral-400 lg:text-xl">{service.description}</p>
            </article>
          </Reveal>
        ))}
      </ul>
    </div>
  </section>
);
