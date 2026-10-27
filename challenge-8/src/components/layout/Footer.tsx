import type { NavItem, SocialLink } from "../../types";
import Logo from "../ui/Logo";

interface FooterProps {
  items: NavItem[];
  socials: SocialLink[];
}

/** Footer "LET'S DISCUSS YOUR IDEAS" + menu + social media */
const Footer = ({ items, socials }: FooterProps) => {
  return (
    <footer className="container-page py-6 lg:py-10">
      <div className="flex flex-col gap-6 rounded-3xl border border-neutral-200 bg-neutral-50 p-5 lg:gap-8 lg:p-10 dark:border-neutral-800 dark:bg-neutral-950">
        <div className="flex flex-col gap-6 lg:flex-row-reverse lg:items-start lg:justify-between">
          <Logo className="self-start" />
          <p className="max-w-[281px] font-display text-display-sm font-bold tracking-[-0.02em] text-neutral-950 lg:text-display-lg dark:text-neutral-25">
            LET&apos;S DISCUSS YOUR IDEAS
          </p>
        </div>

        <hr className="border-neutral-200 dark:border-neutral-800" />

        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <nav aria-label="Footer navigation">
            <ul className="flex flex-col gap-2 lg:flex-row lg:gap-0">
              {items.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="block rounded-full py-1 text-sm font-medium text-neutral-950 transition-colors hover:text-primary-200 lg:px-4 lg:text-md dark:text-neutral-25"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <ul className="flex items-center gap-4">
            {socials.map((social) => (
              <li key={social.id}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex size-10 items-center justify-center rounded-full border border-neutral-200 transition-colors hover:border-primary-200 hover:bg-primary-200/10 dark:border-neutral-800"
                >
                  <img
                    src={social.icon}
                    alt=""
                    className="max-h-5 max-w-5 invert dark:invert-0"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
