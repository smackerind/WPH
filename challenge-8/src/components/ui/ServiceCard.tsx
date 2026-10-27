import type { ServiceItem } from "../../types";

interface ServiceCardProps {
  service: ServiceItem;
}

const ServiceCard = ({ service }: ServiceCardProps) => {
  return (
    <article className="group relative h-full rounded-2xl border border-neutral-200 bg-white px-5 pt-12 pb-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary-200/60 lg:pt-16 dark:border-neutral-900 dark:bg-neutral-950">
      {/* Icon sedikit keluar dari atas card, sesuai desain */}
      <img
        src={service.icon}
        alt=""
        width={80}
        height={80}
        loading="lazy"
        className="absolute -top-4 left-5 size-16 transition-transform duration-300 group-hover:scale-110 lg:size-20"
      />
      <h3 className="text-md font-bold tracking-[-0.02em] text-neutral-950 lg:text-xl lg:tracking-normal dark:text-neutral-25">
        {service.title}
      </h3>
      <p className="mt-1 text-sm font-medium text-neutral-600 lg:text-md dark:text-neutral-400">
        {service.description}
      </p>
    </article>
  );
};

export default ServiceCard;
