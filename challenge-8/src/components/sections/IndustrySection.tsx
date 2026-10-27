import { useState } from "react";
import type { KeyboardEvent } from "react";
import type { Industry } from "../../types";
import SectionHeader from "../ui/SectionHeader";

interface IndustrySectionProps {
  industries: Industry[];
}

/** Tab industri: klik nama industri untuk mengganti deskripsi & gambar */
const IndustrySection = ({ industries }: IndustrySectionProps) => {
  const [activeId, setActiveId] = useState(industries[0]?.id ?? "");
  const activeIndustry = industries.find((item) => item.id === activeId);

  // Navigasi keyboard antar tab dengan tombol panah
  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    const keys = ["ArrowDown", "ArrowRight", "ArrowUp", "ArrowLeft"];
    if (!keys.includes(e.key)) return;
    e.preventDefault();

    const currentIndex = industries.findIndex((item) => item.id === activeId);
    const step = e.key === "ArrowDown" || e.key === "ArrowRight" ? 1 : -1;
    const next = industries[(currentIndex + step + industries.length) % industries.length];

    setActiveId(next.id);
    document.getElementById(`industry-tab-${next.id}`)?.focus();
  };

  return (
    <section
      aria-labelledby="industry-title"
      className="container-page flex flex-col gap-6 py-10 lg:gap-16 lg:py-20"
    >
      <SectionHeader
        align="left"
        titleId="industry-title"
        title="Built for Your Industry"
        subtitle="We’ve helped companies across industries launch smarter, faster, and more securely."
      />

      <div className="flex flex-col gap-6 lg:flex-row lg:gap-16">
        <div
          role="tablist"
          aria-label="Industries"
          aria-orientation="vertical"
          onKeyDown={handleKeyDown}
          className="flex shrink-0 flex-col items-start gap-3 lg:w-64 lg:gap-6"
        >
          {industries.map((industry) => {
            const isActive = industry.id === activeId;
            return (
              <button
                key={industry.id}
                id={`industry-tab-${industry.id}`}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls="industry-panel"
                tabIndex={isActive ? 0 : -1}
                onClick={() => setActiveId(industry.id)}
                className={`group flex cursor-pointer items-center gap-1.5 text-md font-bold tracking-[-0.02em] transition-colors lg:gap-2 lg:text-xl lg:tracking-normal ${
                  isActive
                    ? "text-neutral-950 dark:text-neutral-25"
                    : "text-neutral-500 hover:text-neutral-800 dark:text-neutral-600 dark:hover:text-neutral-400"
                }`}
              >
                <span
                  aria-hidden="true"
                  className={`h-6 w-1 rounded-full transition-colors lg:h-8 ${
                    isActive
                      ? "bg-primary-200"
                      : "bg-neutral-300 group-hover:bg-neutral-500 dark:bg-neutral-600 dark:group-hover:bg-neutral-400"
                  }`}
                />
                {industry.name}
              </button>
            );
          })}
        </div>

        {activeIndustry && (
          <div
            key={activeIndustry.id}
            id="industry-panel"
            role="tabpanel"
            aria-labelledby={`industry-tab-${activeIndustry.id}`}
            className="flex flex-1 animate-fade-in flex-col gap-5"
          >
            <p className="text-sm font-medium text-neutral-950 lg:text-lg dark:text-neutral-25">
              {activeIndustry.description}
            </p>
            <img
              src={activeIndustry.image}
              alt={`${activeIndustry.name} solution illustration`}
              loading="lazy"
              className="aspect-[361/200] w-full rounded-xl object-cover lg:aspect-[840/351] lg:rounded-3xl"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default IndustrySection;
