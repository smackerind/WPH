"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, Search, X } from "lucide-react";
import { useEffect, useState } from "react";
import { buttonVariants } from "@/components/ui/button-variants";
import { cn } from "@/lib/utils";
import { UserMenu } from "@/components/shared/user-menu";
import { SearchResults } from "@/features/user/components/search-results";
import { useAuth } from "@/features/auth/hooks/use-auth";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  closeMenu,
  closeSearch,
  openSearch,
  setSearchQuery,
  toggleMenu,
} from "@/store/ui-slice";

const SEARCH_DEBOUNCE_MS = 400;

/**
 * Bilah atas aplikasi.
 *
 * Tiga keadaan sesuai desain:
 *   belum login  -> tombol Login & Register (desktop) / hamburger (mobile)
 *   sudah login  -> avatar dan nama
 *   mencari      -> dropdown hasil di bawah kotak (desktop) atau layar
 *                   penuh (mobile)
 */
interface NavbarProps {
  /** Sembunyikan di mobile, saat halaman punya MobilePageHeader sendiri */
  hideOnMobile?: boolean;
}

export const Navbar = ({ hideOnMobile }: NavbarProps) => {
  const dispatch = useAppDispatch();
  const { isAuthenticated, isReady } = useAuth();

  const { isSearchOpen, searchQuery, isMenuOpen } = useAppSelector(
    (state) => state.ui,
  );

  // Kata kunci ditahan sebentar supaya API tidak dipanggil tiap huruf
  const [debouncedQuery, setDebouncedQuery] = useState("");

  useEffect(() => {
    const timer = setTimeout(
      () => setDebouncedQuery(searchQuery),
      SEARCH_DEBOUNCE_MS,
    );
    return () => clearTimeout(timer);
  }, [searchQuery]);

  const handleCloseSearch = () => {
    dispatch(closeSearch());
    setDebouncedQuery("");
  };

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-30 border-b border-neutral-900 bg-neutral-950",
          hideOnMobile && "hidden lg:block",
        )}
      >
        <div className="mx-auto flex h-16 w-full max-w-[1200px] items-center gap-4 px-4">
          {/* ---------- Logo ---------- */}
          <Link href="/" className="flex shrink-0 items-center gap-2">
            <Image
              src="/icons/Logo.png"
              alt=""
              width={30}
              height={30}
              className="size-7"
            />
            <span className="text-xl font-bold text-neutral-25">Sociality</span>
          </Link>

          {/* ---------- Pencarian (desktop) ---------- */}
          <div className="relative mx-auto hidden w-full max-w-[400px] lg:block">
            <Search
              aria-hidden
              className="pointer-events-none absolute top-1/2 left-4 size-4 -translate-y-1/2 text-neutral-500"
            />
            <input
              type="text"
              inputMode="search"
              value={searchQuery}
              onFocus={() => dispatch(openSearch())}
              onChange={(event) => dispatch(setSearchQuery(event.target.value))}
              placeholder="Search"
              aria-label="Search people"
              className="h-10 w-full rounded-full border border-neutral-900 bg-neutral-900/60 pr-10 pl-10 text-sm text-neutral-25 outline-none transition-colors placeholder:text-neutral-500 focus:border-neutral-700"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={handleCloseSearch}
                aria-label="Clear search"
                className="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer text-neutral-500 hover:text-neutral-25"
              >
                <X className="size-4" />
              </button>
            )}

            {/* Dropdown hasil, hanya di desktop */}
            {isSearchOpen && searchQuery.trim().length > 0 && (
              <div className="absolute top-12 left-0 max-h-[60vh] w-full overflow-y-auto rounded-2xl border border-neutral-900 bg-neutral-950 py-2 shadow-xl">
                <SearchResults
                  query={debouncedQuery}
                  onSelect={handleCloseSearch}
                />
              </div>
            )}
          </div>

          {/* ---------- Sisi kanan ---------- */}
          <div className="ml-auto flex items-center gap-3">
            {/* Tombol pencarian versi mobile */}
            <button
              type="button"
              onClick={() => dispatch(openSearch())}
              aria-label="Search"
              className="cursor-pointer text-neutral-25 lg:hidden"
            >
              <Search className="size-5" />
            </button>

            {!isReady ? (
              // Jaga tinggi bilah supaya tidak melompat saat cookie dibaca
              <div className="size-10" />
            ) : isAuthenticated ? (
              <UserMenu showName />
            ) : (
              <>
                <div className="hidden items-center gap-3 lg:flex">
                  <Link
                    href="/login"
                    className={buttonVariants({
                      variant: "outline",
                      size: "sm",
                    })}
                  >
                    Login
                  </Link>
                  <Link
                    href="/register"
                    className={buttonVariants({ size: "sm" })}
                  >
                    Register
                  </Link>
                </div>

                <button
                  type="button"
                  onClick={() => dispatch(toggleMenu())}
                  aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                  aria-expanded={isMenuOpen}
                  className="cursor-pointer text-neutral-25 lg:hidden"
                >
                  {isMenuOpen ? (
                    <X className="size-5" />
                  ) : (
                    <Menu className="size-5" />
                  )}
                </button>
              </>
            )}
          </div>
        </div>

        {/* ---------- Dropdown menu mobile (belum login) ---------- */}
        {isMenuOpen && !isAuthenticated && (
          <div className="border-t border-neutral-900 bg-neutral-950 px-4 py-4 lg:hidden">
            <div className="flex gap-3">
              <Link
                href="/login"
                onClick={() => dispatch(closeMenu())}
                className={buttonVariants({ variant: "outline", full: true })}
              >
                Login
              </Link>
              <Link
                href="/register"
                onClick={() => dispatch(closeMenu())}
                className={buttonVariants({ full: true })}
              >
                Register
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* ---------- Pencarian layar penuh (mobile) ---------- */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-50 flex flex-col bg-neutral-950 lg:hidden">
          <div className="flex items-center gap-3 border-b border-neutral-900 px-4 py-3">
            <div className="relative flex-1">
              <Search
                aria-hidden
                className="pointer-events-none absolute top-1/2 left-4 size-4 -translate-y-1/2 text-neutral-500"
              />
              <input
                type="text"
                inputMode="search"
                autoFocus
                value={searchQuery}
                onChange={(event) =>
                  dispatch(setSearchQuery(event.target.value))
                }
                placeholder="Search"
                aria-label="Search people"
                className="h-10 w-full rounded-full border border-neutral-900 bg-neutral-900/60 pr-4 pl-10 text-sm text-neutral-25 outline-none placeholder:text-neutral-500"
              />
            </div>

            <button
              type="button"
              onClick={handleCloseSearch}
              aria-label="Close search"
              className="cursor-pointer text-neutral-25"
            >
              <X className="size-6" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto">
            <SearchResults
              query={debouncedQuery}
              onSelect={handleCloseSearch}
            />
          </div>
        </div>
      )}
    </>
  );
};
