import { companyInfo } from "../../data/company";

interface LogoProps {
  href?: string;
  className?: string;
}

/** Logo symbol + "Your Logo" — 32px di mobile, 36px di desktop */
const Logo = ({ href = "#top", className = "" }: LogoProps) => {
  return (
    <a
      href={href}
      aria-label={`${companyInfo.name} — back to top`}
      className={`inline-flex shrink-0 items-center gap-2 lg:gap-2.5 ${className}`}
    >
      <img
        src={companyInfo.logo}
        alt=""
        width={30}
        height={32}
        className="h-7 w-auto lg:h-8"
      />
      <span className="text-[21.33px] leading-8 font-semibold text-neutral-950 lg:text-2xl lg:leading-9 dark:text-white">
        {companyInfo.name}
      </span>
    </a>
  );
};

export default Logo;
