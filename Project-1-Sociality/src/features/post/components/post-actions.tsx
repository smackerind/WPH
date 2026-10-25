"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useAuth } from "@/features/auth/hooks/use-auth";
import { useToggleLike } from "@/features/like/hooks/use-like";
import { useToggleSave } from "@/features/save/hooks/use-save";
import { useAppDispatch } from "@/store/hooks";
import { openLikes } from "@/store/ui-slice";
import { formatCount } from "@/lib/utils";
import type { Post } from "@/features/post/types";

interface PostActionsProps {
  post: Post;
  /** Dipakai halaman detail; di timeline tombol komentar membuka halamannya */
  onCommentClick?: () => void;
}

/**
 * Baris aksi di bawah foto: like, komentar, bagikan, dan simpan.
 *
 * Catatan desain: frame menampilkan angka di sebelah tombol bagikan, tetapi
 * API tidak punya data maupun endpoint share sama sekali. Menampilkan angka
 * karangan akan menyesatkan, jadi tombolnya dipertahankan sebagai "salin
 * tautan" dan angkanya dihilangkan.
 */
export const PostActions = ({ post, onCommentClick }: PostActionsProps) => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { isAuthenticated } = useAuth();

  const { mutate: toggleLike } = useToggleLike();
  const { mutate: toggleSave } = useToggleSave();

  const liked = Boolean(post.likedByMe);
  const saved = Boolean(post.savedByMe);

  /** Aksi privat butuh login — arahkan dengan membawa tujuan semula */
  const requireLogin = () => {
    if (isAuthenticated) return false;
    router.push(`/login?redirect=/posts/${post.id}`);
    return true;
  };

  const handleShare = async () => {
    const url = `${window.location.origin}/posts/${post.id}`;

    try {
      await navigator.clipboard.writeText(url);
      toast.success("Link copied");
    } catch {
      // Clipboard bisa ditolak browser; tampilkan tautannya supaya tetap berguna
      toast.message("Copy this link", { description: url });
    }
  };

  return (
    <div className="flex items-center gap-4 px-4 py-3">
      {/* ---------- Like ----------
          Ikonnya untuk menyukai, angkanya untuk melihat siapa saja yang
          menyukai — jadi keduanya dibuat sebagai tombol terpisah. */}
      <div className="flex items-center gap-1.5">
        <button
          type="button"
          onClick={() => {
            if (requireLogin()) return;
            toggleLike({ postId: post.id, liked });
          }}
          aria-label={liked ? "Unlike this post" : "Like this post"}
          aria-pressed={liked}
          className="flex cursor-pointer items-center transition-opacity hover:opacity-70"
        >
          <Image
            src={liked ? "/icons/LikeIconFull.png" : "/icons/LikeIcon.png"}
            alt=""
            width={24}
            height={24}
            className="size-6"
          />
        </button>

        <button
          type="button"
          onClick={() => dispatch(openLikes(post.id))}
          aria-label="See who liked this post"
          className="cursor-pointer text-sm text-neutral-25 transition-opacity hover:opacity-70"
        >
          {formatCount(post.likeCount)}
        </button>
      </div>

      {/* ---------- Komentar ---------- */}
      <button
        type="button"
        onClick={() => onCommentClick?.() ?? router.push(`/posts/${post.id}`)}
        aria-label="View comments"
        className="flex cursor-pointer items-center gap-1.5 transition-opacity hover:opacity-70"
      >
        <Image
          src="/icons/CommentIcon.png"
          alt=""
          width={24}
          height={24}
          className="size-6"
        />
        <span className="text-sm text-neutral-25">
          {formatCount(post.commentCount)}
        </span>
      </button>

      {/* ---------- Bagikan (salin tautan) ---------- */}
      <button
        type="button"
        onClick={handleShare}
        aria-label="Copy link to this post"
        className="flex cursor-pointer items-center transition-opacity hover:opacity-70"
      >
        <Image
          src="/icons/ShareIcon.png"
          alt=""
          width={24}
          height={24}
          className="size-6"
        />
      </button>

      {/* ---------- Simpan ---------- */}
      <button
        type="button"
        onClick={() => {
          if (requireLogin()) return;
          toggleSave({ postId: post.id, saved });
        }}
        aria-label={saved ? "Remove from saved" : "Save this post"}
        aria-pressed={saved}
        className="ml-auto cursor-pointer transition-opacity hover:opacity-70"
      >
        <Image
          src={saved ? "/icons/Saved.png" : "/icons/Save.png"}
          alt=""
          width={24}
          height={24}
          className="size-6"
        />
      </button>
    </div>
  );
};
