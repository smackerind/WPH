"use client";

import { Eye, EyeOff } from "lucide-react";
import { useId, useState } from "react";
import { cn } from "@/lib/utils";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  /** Pesan kesalahan; mengubah warna garis tepi menjadi merah */
  error?: string;
  /** Tambahkan ikon mata untuk memperlihatkan isi password */
  revealable?: boolean;
}

/**
 * Input bergaya desain: label tebal di atas kotak, kotak gelap dengan garis
 * tepi tipis, dan baris pesan kesalahan di bawahnya.
 *
 * Error dihubungkan ke input lewat aria-invalid + aria-describedby supaya
 * terbaca pembaca layar, bukan sekadar berubah warna.
 */
export const Input = ({
  label,
  error,
  revealable,
  className,
  id,
  type = "text",
  ...props
}: InputProps) => {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  const [revealed, setRevealed] = useState(false);

  const inputType = revealable && revealed ? "text" : type;

  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label
          htmlFor={inputId}
          className="text-sm font-bold text-neutral-25"
        >
          {label}
        </label>
      )}

      <div className="relative">
        <input
          id={inputId}
          type={inputType}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${inputId}-error` : undefined}
          className={cn(
            "h-12 w-full rounded-xl border bg-neutral-950 px-4 text-sm text-neutral-25 outline-none transition-colors placeholder:text-neutral-500",
            error
              ? "border-accent-red focus:border-accent-red"
              : "border-neutral-800 focus:border-primary-200",
            revealable && "pr-12",
            className,
          )}
          {...props}
        />

        {revealable && (
          <button
            type="button"
            onClick={() => setRevealed((value) => !value)}
            aria-label={revealed ? "Hide password" : "Show password"}
            className="absolute top-1/2 right-4 -translate-y-1/2 cursor-pointer text-neutral-400 transition-colors hover:text-neutral-25"
          >
            {revealed ? (
              <EyeOff className="size-5" />
            ) : (
              <Eye className="size-5" />
            )}
          </button>
        )}
      </div>

      {error && (
        <p
          id={`${inputId}-error`}
          role="alert"
          className="text-xs text-accent-red"
        >
          {error}
        </p>
      )}
    </div>
  );
};
