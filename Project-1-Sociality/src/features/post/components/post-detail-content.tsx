"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Loader2, MoreHorizontal, X } from "lucide-react";
import { useState } from "react";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Dialog } from "@/components/ui/dialog";
import { Skeleton } from "@/components/ui/skeleton";
import { EmptyState } from "@/components/shared/empty-state";
import { ErrorState } from "@/components/shared/error-state";
import { LoadMore } from "@/components/shared/load-more";
import { CommentComposer } from "@/features/comment/components/comment-composer";
import { CommentItem } from "@/features/comment/components/comment-item";
import {
  useComments,
  useDeleteComment,
} from "@/features/comment/hooks/use-comment";
import { PostActions } from "@/features/post/components/post-actions";
import { useDeletePost, usePost } from "@/features/post/hooks/use-post";
import { useMe } from "@/features/profile/hooks/use-me";
import { formatRelativeTime } from "@/lib/utils";

interface PostDetailContentProps {
  postId: number;
}

/**
 * Halaman detail post berikut komentarnya.
 *
 * Desain desktop membaginya dua kolom — foto di kiri, keterangan dan
 * komentar di kanan — sedangkan mobile menumpuknya ke bawah. Tombol silang
 * di pojok kanan atas mengembalikan user ke halaman sebelumnya, sesuai
 * kesan "overlay" pada frame.
 */
export const PostDetailContent = ({ postId }: PostDetailContentProps) => {
  const router = useRouter();
  const { data: me } = useMe();
  const [confirmOpen, setConfirmOpen] = useState(false);

  const post = usePost(postId);
  const comments = useComments(postId);
  const { mutate: removePost, isPending: isDeletingPost } = useDeletePost();
  const { mutate: removeComment } = useDeleteComment(postId);

  const commentList = comments.data?.pages.flatMap((page) => page.comments) ?? [];
  const isMyPost = Boolean(post.data && me?.id === post.data.author.id);

  if (post.isLoading) {
    return (
      <div className="flex flex-col gap-4 p-4 lg:flex-row">
        <Skeleton className="aspect-square w-full lg:w-[500px]" />
        <div className="flex flex-1 flex-col gap-3">
          <Skeleton className="h-10 w-48" />
          <Skeleton className="h-24 w-full" />
        </div>
      </div>
    );
  }

  if (post.isError || !post.data) {
    return (
      <ErrorState
        message={post.error?.message ?? "This post is no longer available."}
        onRetry={() => post.refetch()}
      />
    );
  }

  const data = post.data;

  return (
    <div className="relative mx-auto flex w-full max-w-[1100px] flex-col lg:flex-row lg:gap-6 lg:p-6">
      {/* ---------- Tombol tutup ---------- */}
      <button
        type="button"
        onClick={() => router.back()}
        aria-label="Close post"
        className="absolute top-4 right-4 z-10 cursor-pointer rounded-full bg-black/60 p-1.5 text-neutral-25 transition-opacity hover:opacity-70"
      >
        <X className="size-5" />
      </button>

      {/* ---------- Foto ---------- */}
      <div className="relative aspect-square w-full shrink-0 bg-neutral-900 lg:w-[500px] lg:self-start lg:rounded-2xl lg:overflow-hidden">
        <Image
          src={data.imageUrl}
          alt={data.caption || `Post by ${data.author.username}`}
          fill
          priority
          sizes="(min-width: 1024px) 500px, 100vw"
          className="object-cover"
        />
      </div>

      {/* ---------- Keterangan + komentar ---------- */}
      <div className="flex min-w-0 flex-1 flex-col">
        <div className="flex items-center gap-3 px-4 py-3">
          <Link
            href={`/profile/${encodeURIComponent(data.author.username)}`}
            className="flex min-w-0 items-center gap-3"
          >
            <Avatar
              src={data.author.avatarUrl}
              name={data.author.name}
              size={40}
            />
            <div className="flex min-w-0 flex-col">
              <span className="truncate text-sm font-bold text-neutral-25">
                {data.author.name || data.author.username}
              </span>
              <span className="text-xs text-neutral-400">
                {formatRelativeTime(data.createdAt)}
              </span>
            </div>
          </Link>

          {isMyPost && (
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

        {data.caption && (
          <p className="px-4 pb-4 text-sm whitespace-pre-wrap text-neutral-25">
            {data.caption}
          </p>
        )}

        <div className="border-t border-neutral-900">
          <h2 className="px-4 pt-4 text-md font-bold text-neutral-25">
            Comments
          </h2>

          <div className="px-4">
            {comments.isLoading && (
              <div className="flex justify-center py-8">
                <Loader2 className="size-5 animate-spin text-neutral-500" />
              </div>
            )}

            {comments.isError && (
              <ErrorState
                message={comments.error.message}
                onRetry={() => comments.refetch()}
              />
            )}

            {!comments.isLoading &&
              !comments.isError &&
              commentList.length === 0 && (
                <EmptyState
                  title="No Comments yet"
                  description="Start the conversation"
                />
              )}

            {commentList.map((comment) => (
              <CommentItem
                key={comment.id}
                comment={comment}
                // Pemilik komentar atau pemilik post boleh menghapus
                canDelete={
                  Boolean(me) &&
                  (me?.id === comment.author.id || isMyPost)
                }
                onDelete={removeComment}
              />
            ))}

            <LoadMore
              hasNextPage={comments.hasNextPage}
              isFetchingNextPage={comments.isFetchingNextPage}
              onLoadMore={comments.fetchNextPage}
            />
          </div>
        </div>

        {/* Baris aksi diletakkan di atas kotak komentar, seperti di desain */}
        <div className="mt-auto border-t border-neutral-900">
          <PostActions post={data} onCommentClick={() => undefined} />
          <CommentComposer postId={postId} />
        </div>
      </div>

      {/* ---------- Konfirmasi hapus post ---------- */}
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
            <Button variant="outline" full onClick={() => setConfirmOpen(false)}>
              Cancel
            </Button>
            <Button
              variant="danger"
              full
              isLoading={isDeletingPost}
              onClick={() =>
                removePost(postId, {
                  onSuccess: () => {
                    setConfirmOpen(false);
                    router.replace("/");
                  },
                })
              }
            >
              Delete
            </Button>
          </div>
        </div>
      </Dialog>
    </div>
  );
};
