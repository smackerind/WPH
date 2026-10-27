import type { ReactNode } from "react";
import type { ButtonSize, ButtonVariant } from "../../types";

interface BaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  className?: string;
  children: ReactNode;
}

/** Jika `href` diisi → render sebagai <a>, selain itu render <button> */
interface LinkButtonProps extends BaseProps {
  href: string;
  onClick?: () => void;
}

interface NativeButtonProps extends BaseProps {
  href?: undefined;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  disabled?: boolean;
}

type ButtonProps = LinkButtonProps | NativeButtonProps;

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-primary-200 text-white shadow-button hover:bg-primary-300 focus-visible:outline-primary-200",
  light:
    "bg-white text-neutral-950 hover:bg-neutral-25/85 focus-visible:outline-white",
};

// sm = 44px (text-sm), md = 48px (text-md) — sesuai Figma
const sizeStyles: Record<ButtonSize, string> = {
  sm: "h-11 px-6 text-sm",
  md: "h-12 px-6 text-md tracking-[-0.02em]",
};

const Button = (props: ButtonProps) => {
  const {
    variant = "primary",
    size = "sm",
    fullWidth = false,
    className = "",
    children,
  } = props;

  const classes = [
    "inline-flex items-center justify-center gap-1 rounded-full font-bold",
    "transition-all duration-200 active:scale-[0.98] cursor-pointer",
    "focus-visible:outline-2 focus-visible:outline-offset-2",
    "disabled:cursor-not-allowed disabled:opacity-50",
    variantStyles[variant],
    sizeStyles[size],
    fullWidth ? "w-full" : "",
    className,
  ].join(" ");

  if (props.href !== undefined) {
    return (
      <a href={props.href} onClick={props.onClick} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button
      type={props.type ?? "button"}
      onClick={props.onClick}
      disabled={props.disabled}
      className={classes}
    >
      {children}
    </button>
  );
};

export default Button;
