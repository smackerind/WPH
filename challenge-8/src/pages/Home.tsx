import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/NavBar";
import ContactSection from "../components/sections/ContactSection";
import FaqSection from "../components/sections/FaqSection";
import HeroSection from "../components/sections/HeroSection";
import IndustrySection from "../components/sections/IndustrySection";
import PortfolioSection from "../components/sections/PortfolioSection";
import ProcessSection from "../components/sections/ProcessSection";
import ServicesSection from "../components/sections/ServicesSection";
import StatsSection from "../components/sections/StatsSection";
import TestimonialsSection from "../components/sections/TestimonialsSection";
import TrustedBySection from "../components/sections/TrustedBySection";
import { faqs } from "../data/faqs";
import { industries } from "../data/industries";
import { CONTACT_HREF, navItems, socialLinks } from "../data/navigation";
import { portfolioItems } from "../data/portfolio";
import { processSteps } from "../data/process";
import { serviceOptions, services } from "../data/services";
import { stats } from "../data/stats";
import { testimonials } from "../data/testimonials";

/** Halaman utama: menyusun semua section dan mengoper data lewat props */
const Home = () => {
  return (
    <div className="min-h-screen overflow-x-clip bg-white dark:bg-black">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[70] focus:rounded-full focus:bg-primary-200 focus:px-4 focus:py-2 focus:text-sm focus:font-bold"
      >
        Skip to content
      </a>

      <Navbar items={navItems} ctaHref={CONTACT_HREF} />

      <main id="main">
        <HeroSection ctaHref={CONTACT_HREF} />
        <TrustedBySection />
        <StatsSection stats={stats} />
        <ProcessSection steps={processSteps} />
        <ServicesSection services={services} />
        <IndustrySection industries={industries} />
        <PortfolioSection items={portfolioItems} />
        <TestimonialsSection testimonials={testimonials} />
        <FaqSection faqs={faqs} ctaHref={CONTACT_HREF} />
        <ContactSection serviceOptions={serviceOptions} />
      </main>

      <Footer items={navItems} socials={socialLinks} />
    </div>
  );
};

export default Home;
