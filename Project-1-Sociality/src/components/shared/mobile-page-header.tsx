"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { UserMenu } from "@/components/shared/user-menu";
import { useAuth } from "@/features/auth/hooks/use-auth";

interface MobilePageHeaderProps {
  title?: string;
}

/**
 * Bilah atas versi mobile untuk halaman profil: tombol kembali, judul, dan
 * avatar sendiri di kanan — menggantikan navbar "Sociality" sesuai desain.
 * Hanya tampil di bawah breakpoint lg; desktop tetap memakai Navbar.
 */
export const MobilePageHeader = ({ title }: MobilePageHeaderProps) => {
  const router = useRouter();
  const { isAuthenticated } = useAuth();

  // Halaman dibuka langsung (tanpa riwayat) -> kembali ke timeline
  const handleBack = () => {
    if (window.history.length > 1) router.back();
    else router.push("/");
  };

  return (
    <header className="sticky top-0 z-30 border-b border-neutral-900 bg-neutral-950 lg:hidden">
      <div className="flex h-16 items-center gap-3 px-4">
        <button
          type="button"
          onClick={handleBack}
          aria-label="Go back"
          className="cursor-pointer text-neutral-25 transition-opacity hover:opacity-70"
        >
          <ArrowLeft className="size-5" />
        </button>

        <h1 className="truncate text-md font-bold text-neutral-25">{title}</h1>

        {isAuthenticated && (
          <div className="ml-auto shrink-0">
            <UserMenu />
          </div>
        )}
      </div>
    </header>
  );
};
