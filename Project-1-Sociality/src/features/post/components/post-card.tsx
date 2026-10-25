"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { MoreHorizontal } from "lucide-react";
import { useState } from "react";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Dialog } from "@/components/ui/dialog";
import { PostActions } from "@/features/post/components/post-actions";
import { PostCaption } from "@/features/post/components/post-caption";
import { useDeletePost } from "@/features/post/hooks/use-post";
import { useMe } from "@/features/profile/hooks/use-me";
import { formatRelativeTime } from "@/lib/utils";
import type { Post } from "@/features/post/types";

interface PostCardProps {
  post: Post;
  /** Prioritaskan pemuatan gambar pertama di timeline */
  priority?: boolean;
}

/**
 * Kartu post di timeline.
 *
 * Susunannya mengikuti desain: kepala (avatar, username, waktu), foto,
 * baris aksi, lalu caption. Menu "⋯" hanya muncul pada post milik sendiri
 * dan berisi aksi hapus — desain tidak menggambarkannya, tetapi API
 * menyediakan DELETE /api/posts/{id} dan tanpa ini post tidak bisa dihapus
 * dari mana pun.
 */
export const PostCard = ({ post, priority }: PostCardProps) => {
  const router = useRouter();
  const { data: me } = useMe();
  const [confirmOpen, setConfirmOpen] = useState(false);
  const { mutate: removePost, isPending } = useDeletePost();

  const isMine = me?.id === post.author.id;

  return (
    <article className="border-b border-neutral-900">
      {/* ---------- Kepala ---------- */}
      <div className="flex items-center gap-3 px-4 py-3">
        <Link
          href={`/profile/${encodeURIComponent(post.author.username)}`}
          className="flex min-w-0 items-center gap-3"
        >
          <Avatar
            src={post.author.avatarUrl}
            name={post.author.name}
            size={40}
          />
          <div className="flex min-w-0 flex-col">
            <span className="truncate text-sm font-bold text-neutral-25">
              {post.author.username}
            </span>
            <span className="text-xs text-neutral-400">
              {formatRelativeTime(post.createdAt)}
            </span>
          </div>
        </Link>

        {isMine && (
          <button
            type="button"
            onClick={() => setConfirmOpen(true)}
            aria-label="Post options"
            className="ml-auto cursor-pointer text-neutral-400 transition-colors hover:text-neutral-25"
          >
            <MoreHorizontal className="size-5" />
          </button>
        )}
      </div>

      {/* ---------- Foto ---------- */}
      <button
        type="button"
        onClick={() => router.push(`/posts/${post.id}`)}
        aria-label="Open post"
        className="relative block aspect-square w-full cursor-pointer overflow-hidden bg-neutral-900"
      >
        <Image
          src={post.imageUrl}
          alt={post.caption || `Post by ${post.author.username}`}
          fill
          priority={priority}
          sizes="(min-width: 640px) 600px, 100vw"
          className="object-cover"
        />
      </button>

      <PostActions post={post} />

      {post.caption && (
        <PostCaption username={post.author.username} caption={post.caption} />
      )}

      {/* ---------- Konfirmasi hapus ---------- */}
      <Dialog
        open={confirmOpen}
        onOpenChange={setConfirmOpen}
        title="Delete post"
        hideTitle={false}
      >
        <div className="flex flex-col gap-5">
          <p className="text-sm text-neutral-400">
            This post will be removed permanently and cannot be restored.
          </p>

          <div className="flex gap-3">
            <Button
              variant="outline"
              full
              onClick={() => setConfirmOpen(false)}
            >
              Cancel
            </Button>
            <Button
              variant="danger"
              full
              isLoading={isPending}
              onClick={() =>
                removePost(post.id, { onSuccess: () => setConfirmOpen(false) })
              }
            >
              Delete
            </Button>
          </div>
        </div>
      </Dialog>
    </article>
  );
};
