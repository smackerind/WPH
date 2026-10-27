import type { ChangeEvent } from "react";

interface TextFieldProps {
  id: string;
  label: string;
  value: string;
  placeholder: string;
  onChange: (value: string) => void;
  type?: "text" | "email";
  multiline?: boolean;
  required?: boolean;
  error?: string;
}

/** Input / textarea dengan label — style mengikuti komponen Input di Figma */
const TextField = ({
  id,
  label,
  value,
  placeholder,
  onChange,
  type = "text",
  multiline = false,
  required = false,
  error,
}: TextFieldProps) => {
  const fieldClasses = [
    "w-full rounded-xl border bg-transparent px-4 py-2 text-md font-medium text-neutral-950 dark:text-neutral-25",
    "placeholder:text-neutral-500 transition-colors outline-none",
    "focus:border-primary-200",
    error
      ? "border-primary-200"
      : "border-neutral-300 hover:border-neutral-400 dark:border-neutral-800 dark:hover:border-neutral-600",
  ].join(" ");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => onChange(e.target.value);

  const errorId = `${id}-error`;

  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-bold text-neutral-950 dark:text-neutral-25">
        {label}
      </label>

      {multiline ? (
        <textarea
          id={id}
          name={id}
          value={value}
          placeholder={placeholder}
          onChange={handleChange}
          required={required}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? errorId : undefined}
          rows={4}
          className={`${fieldClasses} h-[134px] resize-none`}
        />
      ) : (
        <input
          id={id}
          name={id}
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={handleChange}
          required={required}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? errorId : undefined}
          className={`${fieldClasses} h-12`}
        />
      )}

      {error && (
        <p id={errorId} className="text-xs font-medium text-primary-200">
          {error}
        </p>
      )}
    </div>
  );
};

export default TextField;
