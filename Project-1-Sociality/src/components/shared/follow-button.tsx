"use client";

import { CircleCheck } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/features/auth/hooks/use-auth";
import { useToggleFollow } from "@/features/follow/hooks/use-follow";
import { cn } from "@/lib/utils";

interface FollowButtonProps {
  username: string;
  isFollowing: boolean;
  /** Tombol disembunyikan kalau ini akun sendiri */
  isMe?: boolean;
  size?: "sm" | "md" | "lg";
  full?: boolean;
  className?: string;
}

/**
 * Tombol Follow / Following.
 *
 * Dipakai di tiga tempat sekaligus (profil, modal Likes, daftar user), jadi
 * logikanya ditaruh di satu komponen: belum login -> diarahkan ke login,
 * sudah login -> tombol berubah seketika lewat optimistic UI.
 */
export const FollowButton = ({
  username,
  isFollowing,
  isMe,
  size = "sm",
  full,
  className,
}: FollowButtonProps) => {
  const router = useRouter();
  const { isAuthenticated } = useAuth();
  const { mutate: toggleFollow, isPending } = useToggleFollow();

  if (isMe) return null;

  const handleClick = () => {
    if (!isAuthenticated) {
      router.push(`/login?redirect=/profile/${encodeURIComponent(username)}`);
      return;
    }
    toggleFollow({ username, isFollowing });
  };

  return (
    <Button
      type="button"
      size={size}
      full={full}
      variant={isFollowing ? "outline" : "primary"}
      onClick={handleClick}
      disabled={isPending}
      className={cn("min-w-[104px]", className)}
    >
      {isFollowing && <CircleCheck className="size-4" aria-hidden />}
      {isFollowing ? "Following" : "Follow"}
    </Button>
  );
};
