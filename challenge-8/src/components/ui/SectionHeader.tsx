import type { ReactNode } from "react";

interface SectionHeaderProps {
  title: ReactNode;
  subtitle?: string;
  align?: "center" | "left";
  /** id untuk dihubungkan dengan aria-labelledby pada <section> */
  titleId?: string;
  className?: string;
}

/** Judul + subjudul yang dipakai hampir di semua section */
const SectionHeader = ({
  title,
  subtitle,
  align = "center",
  titleId,
  className = "",
}: SectionHeaderProps) => {
  const alignClass = align === "center" ? "text-center" : "text-left";

  return (
    <header className={`flex flex-col gap-[11px] ${alignClass} ${className}`}>
      <h2
        id={titleId}
        className="font-display text-display-sm font-bold tracking-[-0.02em] text-neutral-950 lg:text-display-xl dark:text-neutral-25"
      >
        {title}
      </h2>
      {subtitle && (
        <p className="text-sm font-medium text-neutral-600 lg:text-lg dark:text-neutral-400">
          {subtitle}
        </p>
      )}
    </header>
  );
};

export default SectionHeader;
