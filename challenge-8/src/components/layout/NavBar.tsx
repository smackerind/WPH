import { useCallback, useMemo, useState } from "react";
import type { NavItem } from "../../types";
import useActiveSection from "../../hooks/useActiveSection";
import Button from "../ui/Button";
import Logo from "../ui/Logo";
import MobileMenu from "./MobileMenu";

interface NavbarProps {
  items: NavItem[];
  ctaHref: string;
}

/** Navbar fixed di atas — menu horizontal di desktop, hamburger di mobile */
const Navbar = ({ items, ctaHref }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = useCallback(() => setIsMenuOpen(false), []);

  // "#about" -> "about"
  const sectionIds = useMemo(
    () => items.map((item) => item.href.replace("#", "")),
    [items],
  );
  const activeId = useActiveSection(sectionIds);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-neutral-200 bg-white/40 backdrop-blur-[40px] dark:border-neutral-900 dark:bg-black/40">
        <nav
          aria-label="Main navigation"
          className="container-page flex h-16 items-center justify-between lg:h-[84px]"
        >
          <Logo />

          {/* Desktop menu */}
          <ul className="hidden items-center gap-3 lg:flex">
            {items.map((item) => {
              const isActive = activeId === item.href.replace("#", "");
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    aria-current={isActive ? "true" : undefined}
                    className={`block rounded-full px-4 py-[3px] text-md font-semibold transition-colors hover:bg-neutral-100 hover:text-primary-200 dark:hover:bg-neutral-900 ${
                      isActive ? "text-primary-200" : "text-neutral-950 dark:text-neutral-25"
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="hidden lg:block">
            <Button href={ctaHref} className="w-[197px]">
              Let’s Talk
            </Button>
          </div>

          {/* Hamburger (mobile & tablet) */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            className="flex size-10 cursor-pointer items-center justify-center rounded-full -mr-2 transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-900 lg:hidden"
          >
            <img
              src="/icon/Icon-Humberger.svg"
              alt="Hamburger icon"
              className="h-3 w-[18px] invert dark:invert-0"
            />
          </button>
        </nav>
      </header>

      <MobileMenu
        isOpen={isMenuOpen}
        onClose={closeMenu}
        items={items}
        ctaHref={ctaHref}
      />
    </>
  );
};

export default Navbar;
