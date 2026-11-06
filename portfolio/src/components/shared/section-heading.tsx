import { Reveal } from "@/components/shared/reveal";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  /** Label kecil berwarna hijau di atas judul, misal "SERVICE" */
  eyebrow: string;
  /** Judul besar. Bisa berupa teks biasa atau JSX kalau ada kata berwarna. */
  title: React.ReactNode;
  /** Kalimat penjelas di bawah/di samping judul */
  description?: string;
  /** Rata tengah (bawaan) atau dua kolom judul-kiri penjelas-kanan */
  layout?: "center" | "split";
  className?: string;
}

/**
 * Kepala setiap bagian halaman.
 *
 * Desain memakai dua bentuk: rata tengah (Portfolio, Testimonials, FAQ)
 * dan dua kolom dengan judul di kiri (Service, Skills). Komponen ini
 * menangani keduanya lewat prop `layout`, supaya tidak perlu menulis
 * markup judul berulang-ulang di sembilan tempat.
 */
export const SectionHeading = ({
  eyebrow,
  title,
  description,
  layout = "center",
  className,
}: SectionHeadingProps) => {
  if (layout === "split") {
    return (
      <div
        className={cn(
          "flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between lg:gap-16",
          className,
        )}
      >
        {/* UBAH: jarak judul–penjelas mobile 24px → 16px; lebar judul 560px → 509px */}
        <Reveal className="lg:max-w-[509px]">
          {/* UBAH: text-sm semibold → text-md (mobile) / text-lg (desktop) medium, tanpa tracking */}
          <p className="text-md font-medium text-primary-200 uppercase lg:text-lg">
            {eyebrow}
          </p>
          {/* UBAH: display-sm/xl → display-md (32/46) mobile / display-2xl (48/60) desktop, jarak 12px → 8px */}
          <h2 className="mt-2 text-display-md font-extrabold uppercase lg:text-display-2xl">
            {title}
          </h2>
        </Reveal>

        {description && (
          <Reveal delay={0.1} className="lg:max-w-[504px]">
            {/* UBAH: text-md → text-md mobile / text-xl desktop medium, lebar 480px → 504px */}
            <p className="text-md font-medium text-neutral-400 lg:text-right lg:text-xl">
              {description}
            </p>
          </Reveal>
        )}
      </div>
    );
  }

  return (
    <div className={cn("flex flex-col items-center text-center", className)}>
      <Reveal>
        {/* UBAH: text-sm semibold → text-md (mobile) / text-lg (desktop) medium, tanpa tracking */}
          <p className="text-md font-medium text-primary-200 uppercase lg:text-lg">
          {eyebrow}
        </p>
      </Reveal>
      <Reveal delay={0.08}>
        {/* UBAH: display-sm/xl → display-md (32/46) mobile / display-2xl (48/60) desktop, jarak 12px → 8px */}
          <h2 className="mt-2 text-display-md font-extrabold uppercase lg:text-display-2xl">
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.16}>
          <p className="mt-4 max-w-[640px] text-md text-neutral-400">
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
};
