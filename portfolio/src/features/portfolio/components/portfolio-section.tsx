import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { ProjectCard } from "@/features/portfolio/components/project-card";
import { portfolioContent, projects } from "@/features/portfolio/data";

/**
 * Bagian "Selected Work".
 *
 * Grid naik bertahap mengikuti lebar layar: 1 kolom di ponsel, 2 kolom
 * mulai `sm`, dan 3 kolom mulai `lg` sesuai desain desktop.
 */
export const PortfolioSection = () => (
  /* UBAH: padding 80/112px → 50px mobile / 80px desktop (PortfolioSection) */
  <section id="projects" className="relative overflow-hidden py-[50px] lg:py-20">
    {/* UBAH: motif kotak 2×32px desktop → 3 kotak tangga di kanan atas, khusus
        mobile (desain mobile Group1 angle 90°); versi desktop pindah ke Experience */}
    <span
      aria-hidden
      className="deco-squares absolute top-0 -right-[17px] -rotate-90 lg:hidden"
    />

    <div className="container-page">
      <SectionHeading
        eyebrow={portfolioContent.eyebrow}
        title={portfolioContent.title}
      />

      {/* UBAH: jarak header→grid 48px → 24px mobile; jarak kolom desktop 32px → 20px */}
      <ul className="mt-6 grid gap-8 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">
        {projects.map((project, index) => (
          <Reveal as="li" key={`${project.title}-${index}`} delay={(index % 3) * 0.1}>
            <ProjectCard project={project} priority={index === 0} />
          </Reveal>
        ))}
      </ul>
    </div>
  </section>
);
