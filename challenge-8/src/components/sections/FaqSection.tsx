import { Fragment, useState } from "react";
import type { FaqItem } from "../../types";
import ConsultationCard from "../ui/ConsultationCard";
import FaqAccordionItem from "../ui/FaqAccordionItem";

interface FaqSectionProps {
  faqs: FaqItem[];
  ctaHref: string;
}

const FaqSection = ({ faqs, ctaHref }: FaqSectionProps) => {
  // Pertanyaan pertama terbuka secara default.
  const [openId, setOpenId] = useState<number | null>(faqs[0]?.id ?? null);

  const handleToggle = (id: number) => {
    setOpenId((current) => (current === id ? null : id));
  };

  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="container-page flex flex-col gap-6 py-10 lg:max-w-[calc(1200px+2rem)] lg:gap-12 lg:py-20"
    >
      <header className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <h2
          id="faq-title"
          className="max-w-[331px] font-display text-display-sm font-bold tracking-[-0.02em] text-neutral-950 lg:text-display-xl dark:text-neutral-25"
        >
          Need Help? Start Here.
        </h2>
        <p className="text-sm font-medium text-neutral-600 lg:max-w-[245px] lg:text-right lg:text-lg dark:text-neutral-400">
          Everything you need to know — all in one place.
        </p>
      </header>

      <hr className="border-neutral-200 dark:border-neutral-800" />

      <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-[73px]">
        <div className="flex flex-1 flex-col gap-7">
          {faqs.map((faq, index) => (
            <Fragment key={faq.id}>
              {index > 0 && <hr className="border-neutral-200 dark:border-neutral-800" />}
              <FaqAccordionItem
                faq={faq}
                isOpen={openId === faq.id}
                onToggle={() => handleToggle(faq.id)}
              />
            </Fragment>
          ))}
        </div>

        <div className="lg:w-[329px] lg:shrink-0">
          <ConsultationCard ctaHref={ctaHref} />
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
