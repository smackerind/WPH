import Image from "next/image";
import { Reveal } from "@/components/shared/reveal";
import { SkillBar } from "@/features/skills/components/skill-bar";
import { skillBars, skillIcons, skillsContent } from "@/features/skills/data";

/**
 * Bagian "Skills".
 *
 * Kiri: judul + delapan ikon teknologi dalam lingkaran gelap.
 * Kanan: enam batang kemampuan yang tumbuh saat masuk layar.
 *
 * Di mobile keduanya bertumpuk; batang tetap bisa dibaca karena lebarnya
 * mengikuti lebar layar dan nama teknologi dipotong bila terlalu panjang.
 */
export const SkillsSection = () => (
  /* UBAH: padding 80/112px → 40px mobile / 80px desktop (SkillsSection) */
  <section id="skill" className="py-10 lg:py-20">
    {/* UBAH: kolom 1:1 → 524:602, jarak 64px → 40px mobile / 58px desktop */}
    <div className="container-page grid gap-10 lg:grid-cols-[524fr_602fr] lg:items-center lg:gap-[58px]">
      {/* ---------- Kiri: judul + ikon ---------- */}
      {/* UBAH: jarak judul→ikon 32px → 24px mobile / 58px desktop */}
      <div className="flex flex-col gap-6 lg:gap-[58px]">
        <Reveal>
          {/* UBAH: text-sm semibold → text-md mobile / text-lg desktop medium */}
          <p className="text-md font-medium text-primary-200 uppercase lg:text-lg">
            {skillsContent.eyebrow}
          </p>
          {/* UBAH: display-sm/xl → display-md / display-2xl, jarak 12px → 8px */}
          <h2 className="mt-2 text-display-md font-extrabold uppercase lg:text-display-2xl">
            {skillsContent.title}
          </h2>
        </Reveal>

        {/* UBAH: jarak ikon 16/20px → 24px (SkillItem gap 24) */}
        <ul className="grid w-fit grid-cols-4 gap-6">
          {skillIcons.map((item, index) => (
            <Reveal as="li" key={item.name} delay={index * 0.06}>
              {/* UBAH: lingkaran neutral-950 56/64px → cincin border neutral-800
                  48/64px berisi lingkaran hitam (desain Icon + TechIcon) */}
              <span
                title={item.name}
                className="flex size-12 items-center justify-center rounded-full border-[0.6px] border-neutral-800 p-[4.8px] transition-transform duration-300 hover:scale-110 lg:size-16 lg:border-[0.8px] lg:p-[6.4px]"
              >
                <span className="flex size-full items-center justify-center rounded-full bg-base-black">
                  <Image
                    src={item.icon}
                    alt={item.name}
                    width={36}
                    height={36}
                    className="size-6 object-contain lg:size-8"
                  />
                </span>
              </span>
            </Reveal>
          ))}
        </ul>
      </div>

      {/* ---------- Kanan: batang kemampuan ---------- */}
      {/* UBAH: jarak antarbatang 20px → 24px di desktop */}
      <ul className="flex flex-col gap-4 lg:gap-6">
        {skillBars.map((skill, index) => (
          <SkillBar
            key={skill.label}
            label={skill.label}
            value={skill.value}
            index={index}
          />
        ))}
      </ul>
    </div>
  </section>
);
