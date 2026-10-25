"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { buttonVariants } from "@/components/ui/button-variants";
import { GalleryTab } from "@/features/profile/components/gallery-tab";
import { useMyLikes } from "@/features/profile/hooks/use-me";

/**
 * Daftar post yang pernah saya sukai.
 *
 * Bentuknya mengikuti tab "Liked" pada profil orang lain — grid tiga kolom —
 * supaya terasa satu keluarga dengan halaman profil, meski frame-nya sendiri
 * tidak ada di desain.
 */
export const MyLikesContent = () => {
  const router = useRouter();
  const likes = useMyLikes();

  return (
    <>
      <div className="flex items-center gap-3 px-4 py-4">
        <button
          type="button"
          onClick={() => router.back()}
          aria-label="Go back"
          className="cursor-pointer text-neutral-25 transition-opacity hover:opacity-70"
        >
          <ArrowLeft className="size-5" />
        </button>
        <h1 className="text-lg font-bold text-neutral-25">My Likes</h1>
      </div>

      <GalleryTab
        query={likes}
        emptyTitle="No liked posts yet"
        emptyDescription="Posts you like will be collected here."
        emptyAction={
          <Link href="/" className={buttonVariants()}>
            Back to Timeline
          </Link>
        }
      />
    </>
  );
};
