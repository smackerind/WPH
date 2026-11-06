"use client";

import Image from "next/image";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Reveal } from "@/components/shared/reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { sendMessage } from "@/features/contact/api/send-message";
import {
  ResultModal,
  type ResultKind,
} from "@/features/contact/components/result-modal";
import { contactContent } from "@/features/contact/data";
import {
  contactSchema,
  type ContactFormValues,
} from "@/features/contact/schemas/contact-schema";
import { socialLinks, site } from "@/lib/site";

/**
 * Bagian "Let's Get In Touch".
 *
 * Kiri: foto, tautan media sosial, nama, dan penanda "Available for Work".
 * Kanan: formulir kontak.
 *
 * Alur pengiriman:
 *   1. Zod memeriksa isian — kalau ada yang salah, pesan merah muncul di
 *      bawah kolomnya (frame "Failed" versi inline pada desain).
 *   2. Kalau lolos, `sendMessage()` dipanggil. Saat ini fungsi itu hanya
 *      simulasi karena proyek ini tanpa API.
 *   3. Berhasil → modal hijau, formulir dikosongkan.
 *      Gagal   → modal merah, isian tetap ada supaya tidak perlu mengetik ulang.
 */
export const ContactSection = () => {
  const [result, setResult] = useState<ResultKind>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", message: "" },
  });

  const onSubmit = handleSubmit(async (values) => {
    try {
      await sendMessage(values);
      setResult("success");
      reset();
    } catch {
      setResult("failed");
    }
  });

  return (
    /* UBAH: padding 80/112px → mobile tanpa padding atas (foto langsung
       setelah FAQ) / desktop 80px atas + 120px bawah, garis atas neutral-800
       (desain ContactSection border-top) */
    <section
      id="contact"
      className="relative overflow-hidden pb-10 lg:border-t lg:border-neutral-800 lg:pt-20 lg:pb-30"
    >
      {/* UBAH: motif kotak 2×32px kiri atas → Group2 (180°) kiri atas +
          Group1 (0°) kanan bawah, masing-masing 3 kotak tangga */}
      <span
        aria-hidden
        className="deco-squares absolute top-0 left-0 hidden rotate-180 lg:block"
      />
      <span aria-hidden className="deco-squares absolute right-0 bottom-0" />

      {/* UBAH: kolom 1:1 → 421:641, jarak 64px → 122px (desain ContactSection gap) */}
      {/* relative z-10 agar motif kotak kanan bawah berada di belakang tombol */}
      <div className="container-page relative z-10 grid gap-10 lg:grid-cols-[421fr_641fr] lg:items-start lg:gap-[122px]">
        {/* ---------- Kiri: foto + sosial ---------- */}
        {/* UBAH: foto, ikon sosial, dan nama kini bertumpuk — ikon & nama
            menimpa bagian bawah foto yang memudar ke hitam (ContactContent).
            Mobile: blok selebar layar 393×514 (Background). */}
        <Reveal direction="left" className="-mx-4 lg:mx-0">
          <div className="relative mx-auto h-[514px] w-[393px] max-w-full lg:h-[675px] lg:w-full lg:max-w-[421px]">
            {/* Motif kotak Group1 (180°) di kiri atas foto — khusus mobile */}
            <span
              aria-hidden
              className="deco-squares absolute top-[11px] left-0 z-10 rotate-180 lg:hidden"
            />

            {/* Foto: Man1 luminosity di atas hitam (jadi abu-abu) + gradient ke hitam */}
            <div className="absolute top-[11.6px] left-[22px] isolate h-[462px] w-[349px] overflow-hidden bg-base-black lg:top-0 lg:left-0 lg:h-[557px] lg:w-full">
              <div className="absolute inset-0 rotate-[1.45deg] mix-blend-luminosity">
                <Image
                  src={contactContent.photo}
                  alt={`Portrait of ${site.name}`}
                  fill
                  sizes="(min-width: 1024px) 421px, 349px"
                  className="object-cover object-top"
                />
              </div>
              <span
                aria-hidden
                className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)_-92.59%,#000000_88.93%)]"
              />
            </div>

            {/* UBAH: posisi absolut di atas foto — mobile top 351 left 69,
                desktop top 519 left 82 (ContactHeader) */}
            <div className="absolute top-[351px] left-[69px] flex w-[256px] flex-col items-center gap-4 lg:top-[519px] lg:left-[82px] lg:gap-6">
              {/* UBAH: lingkaran 48px jarak 12px → 48px jarak 16px mobile /
                  64px jarak 24px desktop, latar hitam */}
              <ul className="flex items-center gap-4 lg:gap-6">
                {socialLinks.map((social) => (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="flex size-12 items-center justify-center rounded-full border border-neutral-800 bg-base-black transition-colors hover:border-primary-200 lg:size-16"
                    >
                      {/* UBAH: ikon 20px → 24px mobile / 32px desktop */}
                      <Image
                        src={social.icon}
                        alt=""
                        width={32}
                        height={32}
                        className="size-6 lg:size-8"
                      />
                    </a>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col items-center gap-1">
                {/* UBAH: text-lg → text-md mobile / text-xl desktop bold */}
                <p className="text-md font-bold text-base-white lg:text-xl">{site.name}</p>
                {/* UBAH: text-sm regular → text-sm mobile / text-md desktop
                    semibold; titik 8px → 12px, jarak 8px → 12px (ContactStatus) */}
                <p className="flex items-center gap-3 text-sm font-semibold text-neutral-400 lg:text-md">
                  <span
                    aria-hidden
                    className="size-3 rounded-full bg-primary-200"
                  />
                  {site.availability}
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* ---------- Kanan: formulir ---------- */}
        <Reveal direction="right">
          {/* UBAH: text-sm semibold → text-md mobile / text-lg desktop medium */}
          <p className="text-md font-medium text-primary-200 uppercase lg:text-lg">
            {contactContent.eyebrow}
          </p>
          {/* UBAH: display-sm/xl → display-md / display-2xl, jarak 12px → 8px */}
          <h2 className="mt-2 text-display-md font-extrabold uppercase lg:text-display-2xl">
            {contactContent.title}
          </h2>

          {/* UBAH: jarak header→form 32px → 24px mobile / 48px desktop;
              antarkolom 20px → 16px mobile / 24px desktop */}
          <form onSubmit={onSubmit} className="mt-6 flex flex-col gap-4 lg:mt-12 lg:gap-6" noValidate>
            <Input
              label={contactContent.fields.name.label}
              placeholder={contactContent.fields.name.placeholder}
              autoComplete="name"
              error={errors.name?.message}
              {...register("name")}
            />

            <Input
              label={contactContent.fields.email.label}
              type="email"
              placeholder={contactContent.fields.email.placeholder}
              autoComplete="email"
              error={errors.email?.message}
              {...register("email")}
            />

            <Textarea
              label={contactContent.fields.message.label}
              placeholder={contactContent.fields.message.placeholder}
              error={errors.message?.message}
              {...register("message")}
            />

            {/* UBAH: size lg → cta (48px text-sm mobile / 56px text-md desktop) */}
            <Button type="submit" full size="cta" isLoading={isSubmitting}>
              {contactContent.submitLabel}
            </Button>
          </form>
        </Reveal>
      </div>

      <ResultModal kind={result} onClose={() => setResult(null)} />
    </section>
  );
};
