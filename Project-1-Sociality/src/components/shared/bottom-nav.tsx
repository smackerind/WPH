"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Plus } from "lucide-react";
import { useAuth } from "@/features/auth/hooks/use-auth";
import { cn } from "@/lib/utils";

/**
 * Navigasi utama berbentuk pill mengambang di bawah layar.
 *
 * Desain memakainya di desktop maupun mobile (bukan sidebar), jadi
 * komponen ini tampil di semua ukuran layar. Tombol tengah berwarna ungu
 * untuk membuat post baru.
 */
export const BottomNav = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { isAuthenticated } = useAuth();

  const isHome = pathname === "/";
  const isProfile = pathname.startsWith("/me");

  /** Membuat post butuh login */
  const handleAdd = () => {
    router.push(isAuthenticated ? "/add-post" : "/login?redirect=/add-post");
  };

  return (
    <nav
      aria-label="Main navigation"
      className="fixed bottom-6 left-1/2 z-40 -translate-x-1/2"
    >
      <div className="surface-glass flex items-center gap-2 rounded-full px-3 py-2">
        <Link
          href="/"
          aria-current={isHome ? "page" : undefined}
          className={cn(
            "flex w-[72px] flex-col items-center gap-0.5 rounded-full px-3 py-1.5 text-xs font-bold transition-colors",
            isHome ? "text-primary-200" : "text-neutral-25 hover:text-neutral-300",
          )}
        >
          <Image
            src="/icons/Home.png"
            alt=""
            width={20}
            height={20}
            className="size-5"
          />
          Home
        </Link>

        <button
          type="button"
          onClick={handleAdd}
          aria-label="Create a new post"
          className="flex size-11 cursor-pointer items-center justify-center rounded-full bg-primary-300 text-white transition-colors hover:bg-primary-200"
        >
          <Plus className="size-5" />
        </button>

        <Link
          href={isAuthenticated ? "/me" : "/login?redirect=/me"}
          aria-current={isProfile ? "page" : undefined}
          className={cn(
            "flex w-[72px] flex-col items-center gap-0.5 rounded-full px-3 py-1.5 text-xs font-bold transition-colors",
            isProfile
              ? "text-primary-200"
              : "text-neutral-25 hover:text-neutral-300",
          )}
        >
          <Image
            src="/icons/Profile.png"
            alt=""
            width={20}
            height={20}
            className="size-5"
          />
          Profile
        </Link>
      </div>
    </nav>
  );
};
