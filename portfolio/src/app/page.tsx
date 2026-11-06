import { Footer } from "@/components/shared/footer";
import { Navbar } from "@/components/shared/navbar";
import { AboutSection } from "@/features/about/components/about-section";
import { ContactSection } from "@/features/contact/components/contact-section";
import { ExperienceSection } from "@/features/experience/components/experience-section";
import { FaqSection } from "@/features/faq/components/faq-section";
import { Hero } from "@/features/hero/components/hero";
import { PortfolioSection } from "@/features/portfolio/components/portfolio-section";
import { ServiceSection } from "@/features/service/components/service-section";
import { SkillsSection } from "@/features/skills/components/skills-section";
import { TestimonialsSection } from "@/features/testimonials/components/testimonials-section";
import { WhyMeSection } from "@/features/why-me/components/why-me-section";

/**
 * Halaman utama — portofolio satu halaman.
 *
 * Urutan bagian mengikuti desain dari atas ke bawah. Menu di navbar
 * menggulir ke `id` masing-masing bagian:
 *   #home (Hero) · #about · #skill · #projects · #faq · #contact
 *
 * Menambah atau menukar urutan bagian cukup dilakukan di berkas ini.
 */
export default function HomePage() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <ServiceSection />
        <AboutSection />
        <SkillsSection />
        <WhyMeSection />
        <ExperienceSection />
        <PortfolioSection />
        <TestimonialsSection />
        <FaqSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
}
