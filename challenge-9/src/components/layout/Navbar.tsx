import { useCallback, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "@/components/layout/Logo";
import MobileMenu from "@/components/layout/MobileMenu";
import NavbarSearch from "@/components/layout/NavbarSearch";
import { useFavoritesCount } from "@/store/movieStore";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Favorites", to: "/favorites" },
];

/**
 * Navbar tetap di atas layar walau halaman di-scroll.
 * Desktop: logo + menu + kotak pencarian.
 * Mobile: logo + ikon pencarian + tombol hamburger.
 */
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = useCallback(() => setIsMenuOpen(false), []);
  const favoritesCount = useFavoritesCount();

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-40 border-b border-neutral-900 bg-black/70 backdrop-blur-[40px]">
        <nav
          aria-label="Main navigation"
          className="container-page flex h-16 items-center justify-between lg:h-[90px]"
        >
          <div className="flex items-center gap-20">
            <Logo />

            {/* Menu teks hanya tampil mulai tablet ke atas */}
            <ul className="hidden items-center gap-12 md:flex">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    className={({ isActive }) =>
                      cn(
                        "flex items-center gap-2 text-md transition-colors hover:text-primary-200",
                        isActive ? "text-primary-200" : "text-white",
                      )
                    }
                  >
                    {link.label}
                    {link.to === "/favorites" && favoritesCount > 0 && (
                      <span className="rounded-full bg-primary-300 px-2 text-xs leading-5 font-semibold text-white">
                        {favoritesCount}
                      </span>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Kotak pencarian hanya di desktop */}
          <div className="hidden lg:block">
            <NavbarSearch />
          </div>

          <div className="flex items-center gap-6 lg:hidden">
            <Link
              to="/search"
              aria-label="Search movie"
              className="transition-opacity hover:opacity-70"
            >
              <img src="/icons/Search.png" alt="" className="size-6" />
            </Link>

            <button
              type="button"
              onClick={() => setIsMenuOpen(true)}
              aria-label="Open menu"
              aria-expanded={isMenuOpen}
              className="relative cursor-pointer transition-opacity hover:opacity-70 md:hidden"
            >
              <img src="/icons/Menu.png" alt="" className="size-6" />
              {favoritesCount > 0 && (
                <span className="absolute -top-1 -right-1 size-2 rounded-full bg-primary-300" />
              )}
            </button>
          </div>
        </nav>
      </header>

      <MobileMenu isOpen={isMenuOpen} onClose={closeMenu} />
    </>
  );
};

export default Navbar;
