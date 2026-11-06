"use client";

import * as Accordion from "@radix-ui/react-accordion";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { faqContent, faqs } from "@/features/faq/data";
import { EASE } from "@/lib/motion";

/**
 * Bagian FAQ berbentuk accordion.
 *
 * Memakai Radix Accordion supaya urusan aksesibilitas (peran ARIA,
 * navigasi panah, Home/End) sudah benar tanpa ditulis sendiri. Yang
 * ditambahkan di sini hanya animasinya:
 *
 * Radix biasanya melepas isi panel dari DOM saat tertutup, sehingga tidak
 * ada yang bisa dianimasikan ketika menutup. Karena itu dipakai
 * `forceMount` bersama `AnimatePresence` — Radix tetap merender, sementara
 * motion yang mengatur tinggi panel dari 0 ke auto dan sebaliknya.
 *
 * Nilainya dikendalikan lewat state supaya `AnimatePresence` tahu kapan
 * sebuah panel keluar.
 */
export const FaqSection = () => {
  const [openId, setOpenId] = useState<string>(faqContent.defaultOpenId);

  return (
    /* UBAH: padding 80/112px → 40px mobile / 80px desktop (FAQSection) */
    <section id="faq" className="py-10 lg:py-20">
      <div className="container-page">
        <SectionHeading eyebrow={faqContent.eyebrow} title={faqContent.title} />

        <Accordion.Root
          type="single"
          collapsible
          value={openId}
          onValueChange={setOpenId}
          /* UBAH: jarak header 48px → 24px mobile; antarkolom 64px → 80px (40 + garis + 40) */
          className="mt-6 grid gap-x-20 lg:mt-16 lg:grid-cols-2"
        >
          {faqs.map((faq, index) => {
            const isOpen = openId === faq.id;

            return (
              <Reveal key={faq.id} delay={(index % 2) * 0.08}>
                <Accordion.Item
                  value={faq.id}
                  className="border-b border-neutral-800"
                >
                  <Accordion.Header>
                    {/* UBAH: padding 24px → 16px di mobile */}
                    <Accordion.Trigger className="group flex w-full cursor-pointer items-start gap-3 py-4 text-left lg:py-6">
                      {/* Ikon bintang hijau; berputar saat panel terbuka */}
                      <motion.span
                        animate={{ rotate: isOpen ? 90 : 0, scale: isOpen ? 1.1 : 1 }}
                        transition={{ duration: 0.3, ease: EASE }}
                        className="mt-1 shrink-0 lg:mt-0.5"
                      >
                        <Image
                          src="/icons/Vector.png"
                          alt=""
                          width={32}
                          height={32}
                          /* UBAH: ikon 20px → 24px mobile / 32px desktop (Vektor) */
                          className="size-6 lg:size-8"
                        />
                      </motion.span>

                      {/* UBAH: text-lg → display-xs bold di desktop */}
                      <span className="flex-1 text-lg font-bold text-neutral-25 transition-colors group-hover:text-primary-200 lg:text-display-xs">
                        {faq.question}
                      </span>
                    </Accordion.Trigger>
                  </Accordion.Header>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <Accordion.Content forceMount asChild>
                        <motion.div
                          key="content"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.32, ease: EASE }}
                          className="overflow-hidden"
                        >
                          {/* UBAH: indent 32px dihapus (jawaban rata kiri di bawah ikon);
                              text-md regular → text-sm mobile / text-md desktop medium */}
                          <p className="pb-4 text-sm font-medium text-neutral-400 lg:pb-6 lg:text-md">
                            {faq.answer}
                          </p>
                        </motion.div>
                      </Accordion.Content>
                    )}
                  </AnimatePresence>
                </Accordion.Item>
              </Reveal>
            );
          })}
        </Accordion.Root>
      </div>
    </section>
  );
};
