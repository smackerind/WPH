"use client";

import { useId } from "react";
import { cn } from "@/lib/utils";

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

/** Kolom isian banyak baris. Aturannya sama dengan <Input>. */
export const Textarea = ({
  label,
  error,
  className,
  id,
  ...props
}: TextareaProps) => {
  const generatedId = useId();
  const textareaId = id ?? generatedId;

  return (
    <div className="flex flex-col gap-2">
      {/* UBAH: medium → semibold, text-md di desktop (Label) */}
      <label htmlFor={textareaId} className="text-sm font-semibold text-neutral-25 lg:text-md">
        {label}
      </label>

      <textarea
        id={textareaId}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${textareaId}-error` : undefined}
        className={cn(
          /* UBAH: tinggi 160px → 120px mobile / 180px desktop, latar hitam,
             radius-2xl di desktop, padding 8/16px (InputContainer) */
          "min-h-[120px] w-full resize-none rounded-xl border bg-base-black px-4 py-2 lg:min-h-[180px] lg:rounded-2xl text-md text-neutral-25 outline-none transition-colors placeholder:text-neutral-400",
          error
            ? "border-accent-error focus:border-accent-error"
            : "border-neutral-800 focus:border-primary-200",
          className,
        )}
        {...props}
      />

      {error && (
        <p
          id={`${textareaId}-error`}
          role="alert"
          className="text-sm text-accent-error"
        >
          {error}
        </p>
      )}
    </div>
  );
};
