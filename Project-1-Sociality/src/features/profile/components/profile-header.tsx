"use client";

import Image from "next/image";
import { toast } from "sonner";
import { Avatar } from "@/components/ui/avatar";
import { useAppDispatch } from "@/store/hooks";
import { openFollowList } from "@/store/ui-slice";
import { formatCount } from "@/lib/utils";
import type { UserProfile } from "@/features/user/types";

interface ProfileHeaderProps {
  user: UserProfile;
  /** Tombol utama: "Edit Profile" di profil sendiri, "Follow" di profil orang */
  action: React.ReactNode;
}

/**
 * Kepala halaman profil: avatar, nama, tombol aksi, bio, lalu baris angka.
 *
 * Dipakai bersama oleh profil sendiri dan profil orang lain — yang berbeda
 * hanya tombol aksinya, jadi bagian itu dikirim dari luar lewat `action`.
 *
 * Angka Followers dan Following bisa diklik untuk membuka daftarnya. Desain
 * tidak menggambarkan halaman daftar itu, tetapi API menyediakannya dan
 * angka yang bisa diklik adalah hal yang diharapkan orang di aplikasi
 * semacam ini.
 */
export const ProfileHeader = ({ user, action }: ProfileHeaderProps) => {
  const dispatch = useAppDispatch();

  const handleShare = async () => {
    const url = `${window.location.origin}/profile/${encodeURIComponent(user.username)}`;

    try {
      await navigator.clipboard.writeText(url);
      toast.success("Link copied");
    } catch {
      toast.message("Copy this link", { description: url });
    }
  };

  return (
    <header className="flex flex-col gap-4 px-4 py-5">
      {/* ---------- Identitas ----------
          Mobile: dua baris (avatar + nama, lalu tombol aksi selebar layar)
          sesuai desain. Desktop: semuanya sebaris. */}
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
        <div className="flex min-w-0 items-center gap-4">
          <Avatar src={user.avatarUrl} name={user.name} size={64} />

          <div className="flex min-w-0 flex-col">
            <span className="truncate text-md font-bold text-neutral-25">
              {user.name}
            </span>
            <span className="truncate text-sm text-neutral-400">
              {user.username}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2 lg:ml-auto lg:shrink-0">
          {/* Tombol utama (Edit Profile / Follow) melebar di mobile */}
          <div className="flex flex-1 items-center gap-2 *:first:flex-1 lg:flex-none lg:*:first:flex-none">
            {action}
          </div>

          <button
            type="button"
            onClick={handleShare}
            aria-label="Copy link to this profile"
            className="flex size-10 cursor-pointer items-center justify-center rounded-full border border-neutral-800 transition-colors hover:bg-neutral-900"
          >
            <Image
              src="/icons/ShareIcon.png"
              alt=""
              width={18}
              height={18}
              className="size-[18px]"
            />
          </button>
        </div>
      </div>

      {/* ---------- Bio ---------- */}
      {user.bio && (
        <p className="text-sm whitespace-pre-wrap text-neutral-25">
          {user.bio}
        </p>
      )}

      {/* ---------- Angka ---------- */}
      <dl className="flex items-center">
        <div className="flex flex-1 flex-col items-center">
          <dt className="sr-only">Posts</dt>
          <dd className="text-md font-bold text-neutral-25">
            {formatCount(user.counts.post)}
          </dd>
          <span aria-hidden className="text-sm text-neutral-400">
            Post
          </span>
        </div>

        <button
          type="button"
          onClick={() =>
            dispatch(
              openFollowList({ username: user.username, tab: "followers" }),
            )
          }
          className="flex flex-1 cursor-pointer flex-col items-center border-l border-neutral-900 transition-opacity hover:opacity-70"
        >
          <span className="text-md font-bold text-neutral-25">
            {formatCount(user.counts.followers)}
          </span>
          <span className="text-sm text-neutral-400">Followers</span>
        </button>

        <button
          type="button"
          onClick={() =>
            dispatch(
              openFollowList({ username: user.username, tab: "following" }),
            )
          }
          className="flex flex-1 cursor-pointer flex-col items-center border-l border-neutral-900 transition-opacity hover:opacity-70"
        >
          <span className="text-md font-bold text-neutral-25">
            {formatCount(user.counts.following)}
          </span>
          <span className="text-sm text-neutral-400">Following</span>
        </button>

        <div className="flex flex-1 flex-col items-center border-l border-neutral-900">
          <dt className="sr-only">Likes</dt>
          <dd className="text-md font-bold text-neutral-25">
            {formatCount(user.counts.likes)}
          </dd>
          <span aria-hidden className="text-sm text-neutral-400">
            Likes
          </span>
        </div>
      </dl>
    </header>
  );
};
