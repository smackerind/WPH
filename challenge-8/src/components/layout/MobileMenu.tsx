import { useEffect } from "react";
import type { NavItem } from "../../types";
import Button from "../ui/Button";
import Logo from "../ui/Logo";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  items: NavItem[];
  ctaHref: string;
}

/** Menu layar penuh yang muncul saat tombol hamburger diklik */
const MobileMenu = ({ isOpen, onClose, items, ctaHref }: MobileMenuProps) => {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    // Tutup otomatis jika layar dilebarkan ke ukuran desktop
    const desktopQuery = window.matchMedia("(min-width: 1024px)");
    const handleResize = () => {
      if (desktopQuery.matches) onClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    desktopQuery.addEventListener("change", handleResize);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      desktopQuery.removeEventListener("change", handleResize);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      id="mobile-menu"
      role="dialog"
      aria-modal="true"
      aria-label="Menu"
      className="fixed inset-0 z-[60] overflow-y-auto bg-white animate-fade-in lg:hidden dark:bg-black"
    >
      <div className="container-page flex h-16 items-center justify-between border-b border-neutral-200 dark:border-neutral-900">
        <Logo href="#top" />
        <button
          type="button"
          onClick={onClose}
          aria-label="Close menu"
          autoFocus
          className="flex size-10 cursor-pointer items-center justify-center rounded-full -mr-2 transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-900"
        >
          <img src="/icon/x-close.png" alt="Close menu" className="size-6 invert dark:invert-0" />
        </button>
      </div>

      <nav aria-label="Mobile navigation" className="container-page pt-4 animate-slide-down">
        <ul className="flex flex-col gap-3">
          {items.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={onClose}
                className="block py-1 text-sm font-semibold text-neutral-950 transition-colors hover:text-primary-200 dark:text-neutral-25"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <Button href={ctaHref} onClick={onClose} fullWidth className="mt-3">
          Let’s Talk
        </Button>
      </nav>
    </div>
  );
};

export default MobileMenu;
