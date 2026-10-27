import type { ServiceItem } from "../../types";
import SectionHeader from "../ui/SectionHeader";
import ServiceCard from "../ui/ServiceCard";

interface ServicesSectionProps {
  services: ServiceItem[];
}

const ServicesSection = ({ services }: ServicesSectionProps) => {
  return (
    <section
      id="services"
      aria-labelledby="services-title"
      className="container-page flex flex-col gap-10 py-10 lg:gap-16 lg:py-20"
    >
      <SectionHeader
        titleId="services-title"
        title="Smart IT Solutions That Grow With You"
        subtitle="Tailored tech to boost efficiency, security, and results."
      />

      <ul className="grid gap-10 md:grid-cols-2 md:gap-x-5 lg:grid-cols-3">
        {services.map((service) => (
          <li key={service.id}>
            <ServiceCard service={service} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ServicesSection;
