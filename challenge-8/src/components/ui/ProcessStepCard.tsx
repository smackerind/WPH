import type { ProcessStep } from "../../types";

interface ProcessStepCardProps {
  step: ProcessStep;
  isOpen: boolean;
  onToggle: () => void;
}

/** Card accordion untuk satu langkah di section Our Process */
const ProcessStepCard = ({ step, isOpen, onToggle }: ProcessStepCardProps) => {
  const panelId = `process-panel-${step.id}`;

  return (
    <div
      className={`rounded-2xl border bg-white transition-colors dark:bg-neutral-950 ${
        isOpen
          ? "border-primary-200/60"
          : "border-neutral-200 hover:border-neutral-300 dark:border-neutral-900 dark:hover:border-neutral-800"
      }`}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={panelId}
        className="flex w-full cursor-pointer items-start justify-between gap-4 p-4 text-left lg:p-6"
      >
        <span className="flex flex-col gap-1">
          <span className="text-md font-bold tracking-[-0.02em] text-neutral-950 lg:text-xl lg:tracking-normal dark:text-neutral-25">
            {step.title}
          </span>
          <span className="text-sm font-medium text-neutral-600 lg:text-md dark:text-neutral-400">
            {step.subtitle}
          </span>
        </span>
        <img
          src="/icon/chevron-up.png"
          alt="chevron icon"
          className={`mt-1 size-6 shrink-0 invert transition-transform duration-300 dark:invert-0 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Trik grid-rows 0fr -> 1fr untuk animasi tinggi otomatis */}
      <div
        id={panelId}
        role="region"
        className={`grid transition-[grid-template-rows] duration-300 ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <p className="overflow-hidden px-4 text-sm font-medium text-neutral-600 lg:px-6 lg:text-md dark:text-neutral-400">
          <span className="block pb-4 lg:pb-6">{step.description}</span>
        </p>
      </div>
    </div>
  );
};

export default ProcessStepCard;
