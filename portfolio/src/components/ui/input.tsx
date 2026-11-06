"use client";

import { useId } from "react";
import { cn } from "@/lib/utils";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  /** Pesan kesalahan; bila terisi, border berubah merah */
  error?: string;
}

/**
 * Kolom isian satu baris untuk formulir kontak.
 *
 * Label berada di atas kotak (bukan mengambang) mengikuti desain.
 * `aria-invalid` dan `aria-describedby` dipasang otomatis supaya pembaca
 * layar ikut mengumumkan pesan kesalahannya.
 */
export const Input = ({ label, error, className, id, ...props }: InputProps) => {
  const generatedId = useId();
  const inputId = id ?? generatedId;

  return (
    <div className="flex flex-col gap-2">
      {/* UBAH: medium → semibold, text-md di desktop (Label) */}
      <label htmlFor={inputId} className="text-sm font-semibold text-neutral-25 lg:text-md">
        {label}
      </label>

      <input
        id={inputId}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${inputId}-error` : undefined}
        className={cn(
          /* UBAH: 56px radius-xl latar neutral-950 → 48px radius-xl mobile /
             56px radius-2xl desktop, latar hitam (InputContainer) */
          "h-12 w-full rounded-xl border bg-base-black px-4 lg:h-14 lg:rounded-2xl text-md text-neutral-25 outline-none transition-colors placeholder:text-neutral-400",
          error
            ? "border-accent-error focus:border-accent-error"
            : "border-neutral-800 focus:border-primary-200",
          className,
        )}
        {...props}
      />

      {error && (
        <p id={`${inputId}-error`} role="alert" className="text-sm text-accent-error">
          {error}
        </p>
      )}
    </div>
  );
};
