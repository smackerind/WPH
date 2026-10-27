import type { Testimonial } from "../../types";

interface TestimonialCardProps {
  testimonial: Testimonial;
  isActive: boolean;
  onSelect: () => void;
}

const TestimonialCard = ({ testimonial, isActive, onSelect }: TestimonialCardProps) => {
  return (
    <figure
      onClick={isActive ? undefined : onSelect}
      aria-hidden={!isActive}
      className={`relative flex w-[var(--card-w)] shrink-0 flex-col gap-4 rounded-2xl border border-neutral-200 bg-white px-4 pt-4 pb-12 text-center transition-opacity duration-500 lg:gap-6 lg:px-6 lg:pt-6 dark:border-neutral-900 dark:bg-neutral-950 ${
        isActive ? "opacity-100" : "cursor-pointer opacity-50 hover:opacity-70"
      }`}
    >
      <img
        src="/icon/tdesign_quote-filled.png"
        alt="Quote icon"
        className="absolute -top-6 left-4 size-16 lg:-top-8 lg:left-6 lg:size-20"
      />

      <div className="flex flex-col items-center gap-3">
        <img
          src="/icon/Rating.png"
          alt={`Rated ${testimonial.rating} out of 5`}
          width={136}
          height={24}
          className="h-6 w-[136px]"
        />
        <blockquote className="text-sm font-semibold text-neutral-950 lg:text-lg dark:text-neutral-25">
          {testimonial.message}
        </blockquote>
      </div>

      <figcaption className="text-sm font-semibold lg:text-lg">
        <span className="block text-neutral-950 dark:text-neutral-25">{testimonial.name}</span>
        <span className="block text-primary-200">{testimonial.position}</span>
      </figcaption>

      {/* Avatar menempel di tepi bawah card */}
      <img
        src={testimonial.avatar}
        alt={testimonial.name}
        width={75}
        height={75}
        loading="lazy"
        className="absolute -bottom-[30px] left-1/2 size-[60px] -translate-x-1/2 rounded-full lg:-bottom-[37px] lg:size-[75px]"
      />
    </figure>
  );
};

export default TestimonialCard;
