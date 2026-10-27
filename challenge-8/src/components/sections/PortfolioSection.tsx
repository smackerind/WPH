import { useEffect, useRef, useState } from "react";
import type { PortfolioItem } from "../../types";
import SectionHeader from "../ui/SectionHeader";

interface PortfolioSectionProps {
  items: PortfolioItem[];
}

// Rentang tablet (768–1023px) yang memakai slider geser
const TABLET_QUERY = "(min-width: 768px) and (max-width: 1023px)";

/**
 * Mobile: 1 kolom, desktop: grid 3 kolom.
 * Tablet: slider scroll-snap, card aktif di tengah + dot pagination seperti Testimonial.
 */
const PortfolioSection = ({ items }: PortfolioSectionProps) => {
  // Mulai dari card kedua agar card pertama & ketiga terlihat di kiri-kanan
  const [activeIndex, setActiveIndex] = useState(
    Math.min(1, items.length - 1),
  );
  const listRef = useRef<HTMLUListElement>(null);
  const itemRefs = useRef<(HTMLLIElement | null)[]>([]);

  const scrollToIndex = (index: number, behavior: ScrollBehavior = "smooth") => {
    const list = listRef.current;
    const item = itemRefs.current[index];
    if (!list || !item) return;
    list.scrollTo({
      left: item.offsetLeft - (list.clientWidth - item.clientWidth) / 2,
      behavior,
    });
  };

  // Posisikan card aktif di tengah saat masuk ke ukuran tablet
  useEffect(() => {
    const mql = window.matchMedia(TABLET_QUERY);
    const centerActive = () => {
      if (mql.matches) scrollToIndex(activeIndex, "instant");
    };
    centerActive();
    mql.addEventListener("change", centerActive);
    return () => mql.removeEventListener("change", centerActive);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Card yang paling dekat dengan tengah slider menjadi card aktif
  const handleScroll = () => {
    const list = listRef.current;
    if (!list) return;
    const center = list.scrollLeft + list.clientWidth / 2;
    let nearest = 0;
    let minDistance = Infinity;
    itemRefs.current.forEach((item, index) => {
      if (!item) return;
      const distance = Math.abs(item.offsetLeft + item.clientWidth / 2 - center);
      if (distance < minDistance) {
        minDistance = distance;
        nearest = index;
      }
    });
    setActiveIndex(nearest);
  };

  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="container-page flex flex-col gap-6 py-10 lg:gap-16 lg:py-20"
    >
      <SectionHeader
        titleId="projects-title"
        title="From Vision to Launch! Projects We’re Proud Of"
        subtitle="Take a closer look at our recent work powering startups, enterprises, and everything in between."
      />

      <ul
        ref={listRef}
        onScroll={handleScroll}
        className="relative grid gap-5 md:-mx-4 md:flex md:snap-x md:snap-mandatory md:overflow-x-auto md:px-[15%] md:scrollbar-none md:[&::-webkit-scrollbar]:hidden lg:mx-0 lg:grid lg:grid-cols-3 lg:overflow-visible lg:px-0"
      >
        {items.map((item, index) => (
          <li
            key={item.id}
            ref={(el) => {
              itemRefs.current[index] = el;
            }}
            className="md:w-[85%] md:shrink-0 md:snap-center lg:w-auto"
          >
            <article className="group flex flex-col gap-2 lg:gap-3">
              <div className="overflow-hidden rounded-2xl">
                <img
                  src={item.image}
                  alt={`${item.title} — ${item.category} preview`}
                  width={373}
                  height={373}
                  loading="lazy"
                  className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div>
                <p className="text-sm font-medium text-primary-200 lg:text-md">
                  {item.category}
                </p>
                <h3 className="text-md font-bold tracking-[-0.02em] text-neutral-950 lg:text-xl lg:tracking-normal dark:text-neutral-25">
                  {item.title}
                </h3>
              </div>
            </article>
          </li>
        ))}
      </ul>

      {/* Dot pagination hanya untuk tablet, sama seperti Testimonial */}
      <div
        className="hidden justify-center gap-1.5 md:flex lg:hidden"
        role="group"
        aria-label="Choose project"
      >
        {items.map((item, index) => (
          <button
            key={item.id}
            type="button"
            onClick={() => scrollToIndex(index)}
            aria-label={`Show ${item.title}`}
            aria-current={index === activeIndex}
            className={`size-2 cursor-pointer rounded-full transition-colors ${
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

export default PortfolioSection;
