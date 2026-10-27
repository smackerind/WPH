import { useState } from "react";
import type { ProcessStep } from "../../types";
import SectionHeader from "../ui/SectionHeader";
import ProcessStepCard from "../ui/ProcessStepCard";

interface ProcessSectionProps {
  steps: ProcessStep[];
}

const ProcessSection = ({ steps }: ProcessSectionProps) => {
  // Hanya satu step yang terbuka dalam satu waktu (null = semua tertutup)
  const [openStepId, setOpenStepId] = useState<number | null>(null);

  const handleToggle = (id: number) => {
    setOpenStepId((current) => (current === id ? null : id));
  };

  return (
    <section
      aria-labelledby="process-title"
      className="container-page flex flex-col gap-6 py-10 lg:gap-16 lg:py-20"
    >
      <SectionHeader
        titleId="process-title"
        title="Our Process"
        subtitle="Clear steps. Smart execution. Results you can count on."
      />

      <ol className="relative flex flex-col gap-4">
        {/* Garis timeline di belakang nomor */}
        <span
          aria-hidden="true"
          className="absolute inset-y-6 left-5 w-px bg-neutral-200 lg:left-1/2 lg:-translate-x-1/2 dark:bg-neutral-900"
        />

        {steps.map((step, index) => {
          // Desktop: zig-zag kiri / kanan
          const isLeft = index % 2 === 0;

          return (
            <li
              key={step.id}
              className="relative grid grid-cols-[40px_1fr] items-center gap-3 lg:grid-cols-[1fr_48px_1fr] lg:gap-6"
            >
              <span
                aria-hidden="true"
                className="col-start-1 row-start-1 flex size-10 items-center justify-center self-start rounded-full bg-primary-200 text-xs font-bold text-white ring-4 ring-white lg:col-start-2 lg:size-12 lg:self-center lg:text-md dark:ring-black"
              >
                {step.id}
              </span>
              <div
                className={`col-start-2 row-start-1 ${
                  isLeft ? "lg:col-start-1" : "lg:col-start-3"
                }`}
              >
                <ProcessStepCard
                  step={step}
                  isOpen={openStepId === step.id}
                  onToggle={() => handleToggle(step.id)}
                />
              </div>
            </li>
          );
        })}
      </ol>
    </section>
  );
};

export default ProcessSection;
