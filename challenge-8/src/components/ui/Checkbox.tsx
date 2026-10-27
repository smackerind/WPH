interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

/**
 * Custom checkbox: input asli disembunyikan (tetap bisa di-tab & dibaca
 * screen reader), tampilan kotak dibuat dengan <span>.
 */
const Checkbox = ({ label, checked, onChange }: CheckboxProps) => {
  return (
    <label className="group inline-flex cursor-pointer items-center gap-3 text-sm font-medium text-neutral-950 lg:text-md dark:text-neutral-25">
      <input
        type="checkbox"
        className="peer sr-only"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
      <span
        aria-hidden="true"
        className={[
          "flex size-5 shrink-0 items-center justify-center rounded-md border transition-colors",
          "peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-primary-200",
          checked
            ? "border-primary-200 bg-primary-200"
            : "border-neutral-300 group-hover:border-neutral-400 dark:border-neutral-800 dark:group-hover:border-neutral-600",
        ].join(" ")}
      >
        {checked && <img src="/icon/Checkbox.png" alt="" className="size-5" />}
      </span>
      {label}
    </label>
  );
};

export default Checkbox;
