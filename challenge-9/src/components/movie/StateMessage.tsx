import type { ReactNode } from "react";

interface StateMessageProps {
  title: string;
  description: string;
  /** Ikon besar di atas teks — beda untuk favorit kosong dan pencarian nihil */
  icon?: string;
  action?: ReactNode;
}

/** Tampilan untuk kondisi kosong maupun error */
const StateMessage = ({
  title,
  description,
  icon = "/icons/SearchEmpty.png",
  action,
}: StateMessageProps) => (
  <div className="flex flex-col items-center gap-6 py-16 text-center">
    <div className="flex flex-col items-center gap-3">
      <img src={icon} alt="" className="size-[200px] opacity-80" />
      <div className="flex flex-col gap-2">
        <p className="text-md font-semibold text-white lg:text-lg">{title}</p>
        <p className="max-w-xs text-sm text-neutral-400 lg:max-w-md lg:text-md">
          {description}
        </p>
      </div>
    </div>
    {action}
  </div>
);

export default StateMessage;
