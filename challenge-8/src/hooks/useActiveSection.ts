import { useEffect, useState } from "react";

/**
 * Scroll-spy: mengembalikan id section yang sedang terlihat di layar,
 * dipakai untuk menandai menu navbar yang aktif.
 */
const useActiveSection = (sectionIds: string[]): string => {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      // Section dianggap aktif saat melewati area tengah layar
      { rootMargin: "-45% 0px -50% 0px" },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [sectionIds]);

  return activeId;
};

export default useActiveSection;
