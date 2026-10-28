import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "@/components/layout/Logo";
import { useFavoritesCount } from "@/store/movieStore";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuItems = [
  { label: "Home", to: "/" },
  { label: "Favorites", to: "/favorites" },
];

/** Menu layar penuh yang muncul saat ikon hamburger ditekan */
const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  const favoritesCount = useFavoritesCount();

  // Kunci scroll halaman & tutup dengan tombol Escape selama menu terbuka
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          className="fixed inset-0 z-50 bg-black md:hidden"
        >
          <div className="container-page flex h-16 items-center justify-between">
            <Logo />
            <button
              type="button"
              onClick={onClose}
              aria-label="Close menu"
              autoFocus
              className="flex size-10 cursor-pointer items-center justify-center rounded-full transition-colors hover:bg-neutral-900"
            >
              <img src="/icons/X-Close.png" alt="" className="size-6" />
            </button>
          </div>

          <nav aria-label="Mobile navigation" className="container-page pt-6">
            <ul className="flex flex-col gap-4">
              {menuItems.map((item, index) => (
                <motion.li
                  key={item.to}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * index + 0.1 }}
                >
                  <Link
                    to={item.to}
                    onClick={onClose}
                    className="flex items-center gap-2 py-2 text-md text-white transition-colors hover:text-primary-200"
                  >
                    {item.label}
                    {item.to === "/favorites" && favoritesCount > 0 && (
                      <span className="rounded-full bg-primary-300 px-2 text-xs leading-5 font-semibold text-white">
                        {favoritesCount}
                      </span>
                    )}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
