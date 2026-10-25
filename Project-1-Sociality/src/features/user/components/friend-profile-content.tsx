"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";
import { MobilePageHeader } from "@/components/shared/mobile-page-header";
import { Skeleton } from "@/components/ui/skeleton";
import { ProfileTabs, TabPanel } from "@/components/ui/tabs";
import { ErrorState } from "@/components/shared/error-state";
import { FollowButton } from "@/components/shared/follow-button";
import { GalleryTab } from "@/features/profile/components/gallery-tab";
import { ProfileHeader } from "@/features/profile/components/profile-header";
import {
  useUserLikes,
  useUserPosts,
  useUserProfile,
} from "@/features/user/hooks/use-user";

interface FriendProfileContentProps {
  username: string;
}

const TABS = [
  { value: "gallery", label: "Gallery", icon: "/icons/Grid.png" },
  { value: "liked", label: "Liked", icon: "/icons/LikeIcon.png" },
];

/**
 * Halaman profil orang lain.
 *
 * Tabnya Gallery dan Liked — keduanya publik menurut API, jadi halaman ini
 * tetap bisa dibuka tanpa login. Tombol Follow akan mengarahkan ke halaman
 * login lebih dulu kalau ditekan oleh pengunjung yang belum masuk.
 */
export const FriendProfileContent = ({
  username,
}: FriendProfileContentProps) => {
  const router = useRouter();
  const [tab, setTab] = useState("gallery");

  const profile = useUserProfile(username);
  const posts = useUserPosts(username, tab === "gallery");
  const likes = useUserLikes(username, tab === "liked");

  // Navbar disembunyikan di mobile, jadi header ini tampil di semua keadaan
  const mobileHeader = <MobilePageHeader title={profile.data?.name} />;

  if (profile.isLoading) {
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

  if (profile.isError || !profile.data) {
    return (
      <>
        {mobileHeader}
        <ErrorState
          message={profile.error?.message ?? "This profile does not exist."}
          onRetry={() => profile.refetch()}
        />
      </>
    );
  }

  const user = profile.data;

  return (
    <>
      {mobileHeader}

      {/* ---------- Kepala dengan tombol kembali (desktop) ---------- */}
      <div className="hidden items-center gap-3 px-4 py-4 lg:flex">
        <button
          type="button"
          onClick={() => router.back()}
          aria-label="Go back"
          className="cursor-pointer text-neutral-25 transition-opacity hover:opacity-70"
        >
          <ArrowLeft className="size-5" />
        </button>
        <h1 className="text-lg font-bold text-neutral-25">{user.name}</h1>
      </div>

      <ProfileHeader
        user={user}
        action={
          <FollowButton
            username={user.username}
            isFollowing={user.isFollowing}
            isMe={user.isMe}
          />
        }
      />

      <ProfileTabs items={TABS} value={tab} onValueChange={setTab}>
        <TabPanel value="gallery">
          <GalleryTab
            query={posts}
            emptyTitle="No posts yet"
            emptyDescription={`${user.name} hasn't shared anything so far.`}
          />
        </TabPanel>

        <TabPanel value="liked">
          <GalleryTab
            query={likes}
            emptyTitle="No liked posts"
            emptyDescription={`${user.name} hasn't liked any post yet.`}
          />
        </TabPanel>
      </ProfileTabs>
    </>
  );
};
