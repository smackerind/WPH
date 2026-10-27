import type { FaqItem } from "../../types";

interface FaqAccordionItemProps {
  faq: FaqItem;
  isOpen: boolean;
  onToggle: () => void;
}

const FaqAccordionItem = ({ faq, isOpen, onToggle }: FaqAccordionItemProps) => {
  const panelId = `faq-panel-${faq.id}`;

  return (
    <div>
      <h3>
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={isOpen}
          aria-controls={panelId}
          className="group flex w-full cursor-pointer items-start justify-between gap-4 text-left"
        >
          <span className="text-lg font-bold text-neutral-950 transition-colors group-hover:text-primary-200 lg:font-display lg:text-display-xs dark:text-neutral-25">
            {faq.question}
          </span>
          <img
            src={isOpen ? "/icon/Icon-.png" : "/icon/Icon+.png"}
            alt=""
            className="mt-1 size-6 shrink-0 invert lg:mt-1.5 dark:invert-0"
          />
        </button>
      </h3>

      <div
        id={panelId}
        role="region"
        className={`grid transition-[grid-template-rows] duration-300 ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <p className="overflow-hidden text-sm font-medium text-neutral-600 lg:text-xl dark:text-neutral-400">
          <span className="block pt-4">{faq.answer}</span>
        </p>
      </div>
    </div>
  );
};

export default FaqAccordionItem;
