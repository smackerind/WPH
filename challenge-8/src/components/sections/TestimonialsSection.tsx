import { useRef, useState } from "react";
import type { TouchEvent } from "react";
import type { Testimonial } from "../../types";
import SectionHeader from "../ui/SectionHeader";
import TestimonialCard from "../ui/TestimonialCard";

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

const CARD_GAP = 20; // px, sama dengan gap-5
const SWIPE_THRESHOLD = 50; // px

/**
 * Slider testimonial: card aktif selalu di tengah layar.
 * Pindah slide lewat dot pagination, klik card samping, atau swipe (mobile).
 */
const TestimonialsSection = ({ testimonials }: TestimonialsSectionProps) => {
  // Mulai dari card kedua, sesuai desain Figma
  const [activeIndex, setActiveIndex] = useState(
    Math.min(1, testimonials.length - 1),
  );
  const touchStartX = useRef<number | null>(null);

  const goTo = (index: number) => {
    const last = testimonials.length - 1;
    setActiveIndex(Math.max(0, Math.min(index, last)));
  };

  const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    if (deltaX < -SWIPE_THRESHOLD) goTo(activeIndex + 1);
    if (deltaX > SWIPE_THRESHOLD) goTo(activeIndex - 1);
    touchStartX.current = null;
  };

  // Track digeser agar card aktif berada di tengah (--card-w diatur via class)
  const trackOffset = `translateX(calc(-1 * (var(--card-w) / 2 + ${activeIndex} * (var(--card-w) + ${CARD_GAP}px))))`;

  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-title"
      aria-roledescription="carousel"
      className="flex flex-col gap-6 py-10 lg:gap-10 lg:py-20"
    >
      <SectionHeader
        className="container-page"
        titleId="testimonials-title"
        title="What Partners Say About Working With Us"
        subtitle="Trusted voices. Real experiences. Proven results."
      />

      <div
        className="relative overflow-hidden pt-8 pb-12 [--card-w:min(361px,calc(100vw-32px))] lg:pt-10 lg:pb-14 lg:[--card-w:594px]"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex items-stretch gap-5 pl-[50%] transition-transform duration-500 ease-out"
          style={{ transform: trackOffset }}
        >
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              isActive={index === activeIndex}
              onSelect={() => goTo(index)}
            />
          ))}
        </div>

        {/* Gradient hitam di kiri & kanan (tablet / desktop) */}
        <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-[20%] bg-gradient-to-r from-white to-transparent md:block lg:w-[29%] dark:from-black" />
        <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[20%] bg-gradient-to-l from-white to-transparent md:block lg:w-[29%] dark:from-black" />
      </div>

      <div className="flex justify-center gap-1.5" role="group" aria-label="Choose testimonial">
        {testimonials.map((testimonial, index) => (
          <button
            key={testimonial.id}
            type="button"
            onClick={() => goTo(index)}
            aria-label={`Show testimonial from ${testimonial.name}`}
            aria-current={index === activeIndex}
            className={`size-2 cursor-pointer rounded-full transition-colors lg:size-3 ${
              index === activeIndex
                ? "bg-primary-200"
                : "bg-neutral-300 hover:bg-neutral-500 dark:bg-neutral-900 dark:hover:bg-neutral-600"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
