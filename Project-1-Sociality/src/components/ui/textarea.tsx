"use client";

import { useId } from "react";
import { cn } from "@/lib/utils";

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

/** Kotak teks panjang — dipakai untuk Caption dan Bio */
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
    <div className="flex flex-col gap-1">
      {label && (
        <label
          htmlFor={textareaId}
          className="text-sm font-bold text-neutral-25"
        >
          {label}
        </label>
      )}

      <textarea
        id={textareaId}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${textareaId}-error` : undefined}
        className={cn(
          "min-h-[100px] w-full resize-none rounded-xl border bg-neutral-950 p-4 text-sm text-neutral-25 outline-none transition-colors placeholder:text-neutral-500",
          error
            ? "border-accent-red focus:border-accent-red"
            : "border-neutral-800 focus:border-primary-200",
          className,
        )}
        {...props}
      />

      {error && (
        <p
          id={`${textareaId}-error`}
          role="alert"
          className="text-xs text-accent-red"
        >
          {error}
        </p>
      )}
    </div>
  );
};
