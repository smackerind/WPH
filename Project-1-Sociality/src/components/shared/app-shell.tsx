"use client";

import { BottomNav } from "@/components/shared/bottom-nav";
import { Navbar } from "@/components/shared/navbar";
import { useAuthBootstrap } from "@/features/auth/hooks/use-auth";
import { FollowListDialog } from "@/features/follow/components/follow-list-dialog";
import { LikesDialog } from "@/features/like/components/likes-dialog";

interface AppShellProps {
  children: React.ReactNode;
  /** Sembunyikan navigasi bawah, misalnya pada halaman Add Post */
  hideBottomNav?: boolean;
  /** Halaman yang memasang MobilePageHeader sendiri (mis. profil) */
  hideNavbarOnMobile?: boolean;
}

/**
 * Kerangka halaman: bilah atas, isi, navigasi bawah, dan modal global.
 *
 * Modal "Likes" serta "Followers/Following" sengaja dipasang di sini — satu
 * kali untuk seluruh aplikasi — karena keduanya bisa dibuka dari banyak
 * tempat dan statusnya disimpan di Redux.
 *
 * Padding bawah disediakan supaya pill navigasi tidak menutupi isi halaman.
 */
export const AppShell = ({
  children,
  hideBottomNav,
  hideNavbarOnMobile,
}: AppShellProps) => {
  useAuthBootstrap();

  return (
    <>
      <Navbar hideOnMobile={hideNavbarOnMobile} />

      <main className="flex-1 pb-28">{children}</main>

      {!hideBottomNav && <BottomNav />}

      <LikesDialog />
      <FollowListDialog />
    </>
  );
};
