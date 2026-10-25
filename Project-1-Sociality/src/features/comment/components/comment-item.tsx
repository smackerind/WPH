"use client";

import Link from "next/link";
import { Trash2 } from "lucide-react";
import { Avatar } from "@/components/ui/avatar";
import { formatRelativeTime } from "@/lib/utils";
import type { Comment } from "@/features/comment/types";

interface CommentItemProps {
  comment: Comment;
  /** Tombol hapus hanya tampil untuk pemilik komentar atau pemilik post */
  canDelete: boolean;
  onDelete: (commentId: number) => void;
}

/**
 * Satu komentar: avatar, nama, waktu, lalu isi komentarnya di baris baru —
 * sesuai desain.
 *
 * Tombol hapus tidak digambarkan di frame, tetapi API menyediakan
 * DELETE /api/comments/{id} dan tanpa tombol ini komentar tidak bisa
 * dihapus dari mana pun. Diletakkan di kanan dan hanya muncul saat
 * kartunya disentuh atau difokus, agar tidak mengganggu tampilan.
 */
export const CommentItem = ({
  comment,
  canDelete,
  onDelete,
}: CommentItemProps) => (
  <article className="group border-b border-neutral-900 py-4">
    <div className="flex items-center gap-3">
      <Link
        href={`/profile/${encodeURIComponent(comment.author.username)}`}
        className="flex min-w-0 items-center gap-3"
      >
        <Avatar
          src={comment.author.avatarUrl}
          name={comment.author.name}
          size={36}
        />
        <div className="flex min-w-0 flex-col">
          <span className="truncate text-sm font-bold text-neutral-25">
            {comment.author.name || comment.author.username}
          </span>
          <span className="text-xs text-neutral-400">
            {formatRelativeTime(comment.createdAt)}
          </span>
        </div>
      </Link>

      {canDelete && (
        <button
          type="button"
          onClick={() => onDelete(comment.id)}
          aria-label="Delete comment"
          className="ml-auto cursor-pointer text-neutral-500 opacity-0 transition-opacity group-hover:opacity-100 focus:opacity-100 hover:text-accent-red"
        >
          <Trash2 className="size-4" />
        </button>
      )}
    </div>

    <p className="mt-2 text-sm whitespace-pre-wrap text-neutral-25">
      {comment.text}
    </p>
  </article>
);
