"use client";

import Link from "next/link";
import { MoreHorizontal } from "lucide-react";
import { useState } from "react";
import { buttonVariants } from "@/components/ui/button-variants";
import { DropdownItem, DropdownMenu } from "@/components/ui/dropdown-menu";
import { MobilePageHeader } from "@/components/shared/mobile-page-header";
import { Skeleton } from "@/components/ui/skeleton";
import { ProfileTabs, TabPanel } from "@/components/ui/tabs";
import { ErrorState } from "@/components/shared/error-state";
import { GalleryTab } from "@/features/profile/components/gallery-tab";
import { ProfileHeader } from "@/features/profile/components/profile-header";
import { useLogout } from "@/features/auth/hooks/use-auth";
import { useMe, useMyPosts, useMySaved } from "@/features/profile/hooks/use-me";

const TABS = [
  { value: "gallery", label: "Gallery", icon: "/icons/Grid.png" },
  { value: "saved", label: "Saved", icon: "/icons/Save.png" },
];

/**
 * Halaman profil sendiri.
 *
 * Tabnya Gallery dan Saved, mengikuti desain. Tab "Liked" sengaja tidak ada
 * di sini — pada profil sendiri desain menggantinya dengan Saved, dan post
 * yang pernah disukai punya halamannya sendiri di /me/likes (tautannya ada
 * di bawah baris tab).
 */
export const MyProfileContent = () => {
  const [tab, setTab] = useState("gallery");

  const me = useMe();
  const posts = useMyPosts();
  // Tab Saved baru diambil ketika benar-benar dibuka
  const saved = useMySaved(tab === "saved");
  const logout = useLogout();

  // Navbar disembunyikan di mobile, jadi header ini tampil di semua keadaan
  const mobileHeader = <MobilePageHeader title={me.data?.name} />;

  if (me.isLoading) {
    return (
      <>
        {mobileHeader}
        <div className="flex flex-col gap-4 p-4">
          <Skeleton className="h-16 w-full" />
          <Skeleton className="h-12 w-full" />
          <Skeleton className="h-64 w-full" />
        </div>
      </>
    );
  }

  if (me.isError || !me.data) {
    return (
      <>
        {mobileHeader}
        <ErrorState message={me.error?.message} onRetry={() => me.refetch()} />
      </>
    );
  }

  return (
    <>
      {mobileHeader}

      <ProfileHeader
        user={me.data}
        action={
          <>
            <Link
              href="/me/edit"
              className={buttonVariants({ variant: "outline", size: "sm" })}
            >
              Edit Profile
            </Link>

            {/* Menu "⋯" — sesuai frame "My Profile Menu" pada desain.
                My Likes dan Logout ditaruh di sini, bukan sebagai tombol di
                bawah halaman, karena pill navigasi melayang menutupi area
                itu sehingga tombolnya tidak bisa ditekan. */}
            <DropdownMenu
              trigger={
                <button
                  type="button"
                  aria-label="Profile menu"
                  className="flex size-10 cursor-pointer items-center justify-center rounded-full border border-neutral-800 text-neutral-25 transition-colors hover:bg-neutral-900"
                >
                  <MoreHorizontal className="size-5" />
                </button>
              }
            >
              <DropdownItem asChild>
                <Link href="/me/likes">My Likes</Link>
              </DropdownItem>
              <DropdownItem danger onSelect={logout}>
                Logout
              </DropdownItem>
            </DropdownMenu>
          </>
        }
      />

      <ProfileTabs items={TABS} value={tab} onValueChange={setTab}>
        <TabPanel value="gallery">
          <GalleryTab
            query={posts}
            emptyTitle="Your story starts here"
            emptyDescription="Share your first post and let the world see your moments, passions, and memories. Make this space truly yours."
            emptyAction={
              <Link href="/add-post" className={buttonVariants()}>
                Upload My First Post
              </Link>
            }
          />
        </TabPanel>

        <TabPanel value="saved">
          <GalleryTab
            query={saved}
            emptyTitle="Nothing saved yet"
            emptyDescription="Tap the bookmark on a post to keep it here for later."
          />
        </TabPanel>
      </ProfileTabs>
    </>
  );
};
