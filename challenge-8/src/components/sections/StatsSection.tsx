import type { StatItem } from "../../types";
import SectionHeader from "../ui/SectionHeader";

interface StatsSectionProps {
  stats: StatItem[];
}

const StatsSection = ({ stats }: StatsSectionProps) => {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="container-page flex flex-col gap-6 py-20 lg:gap-16"
    >
      <SectionHeader
        titleId="about-title"
        title="End-to-End IT Solutions That Drive Results"
        subtitle="From strategy to execution, we deliver solutions that grow your business."
      />

      <ul className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:gap-5">
        {stats.map((stat) => (
          <li
            key={stat.id}
            className="flex aspect-square flex-col items-center justify-center gap-1.5 rounded-full border border-neutral-200 bg-white p-4 text-center transition-colors hover:border-primary-200/60 dark:border-neutral-900 dark:bg-neutral-950"
          >
            <span className="font-display text-display-lg font-bold tracking-[-0.02em] text-primary-200 lg:text-display-2xl">
              {stat.value}
            </span>
            <span className="text-sm font-semibold text-neutral-950 lg:text-xl dark:text-neutral-25">
              {stat.label}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default StatsSection;
