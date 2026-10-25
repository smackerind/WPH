"use client";

import Link from "next/link";
import { Avatar } from "@/components/ui/avatar";
import { FollowButton } from "@/components/shared/follow-button";
import type { UserSummary } from "@/features/user/types";

interface UserRowProps {
  user: UserSummary;
  /** Sembunyikan tombol follow, misalnya pada hasil pencarian */
  hideFollow?: boolean;
  onNavigate?: () => void;
}

/**
 * Satu baris user: avatar, nama, username, dan tombol follow di kanan.
 *
 * Bentuk yang sama dipakai di modal Likes, hasil pencarian, dan daftar
 * followers/following — jadi cukup satu komponen untuk ketiganya.
 */
export const UserRow = ({ user, hideFollow, onNavigate }: UserRowProps) => (
  <div className="flex items-center gap-3 py-2">
    <Link
      href={`/profile/${encodeURIComponent(user.username)}`}
      onClick={onNavigate}
      className="flex min-w-0 flex-1 items-center gap-3"
    >
      <Avatar src={user.avatarUrl} name={user.name} size={40} />

      <div className="flex min-w-0 flex-col">
        <span className="truncate text-sm font-bold text-neutral-25">
          {user.name}
        </span>
        <span className="truncate text-sm text-neutral-400">
          {user.username}
        </span>
      </div>
    </Link>

    {!hideFollow && (
      <FollowButton
        username={user.username}
        isFollowing={Boolean(user.isFollowedByMe)}
        isMe={user.isMe}
      />
    )}
  </div>
);
