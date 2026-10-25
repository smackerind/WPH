"use client";

import { Loader2 } from "lucide-react";
import { Dialog } from "@/components/ui/dialog";
import { EmptyState } from "@/components/shared/empty-state";
import { ErrorState } from "@/components/shared/error-state";
import { LoadMore } from "@/components/shared/load-more";
import { UserRow } from "@/components/shared/user-row";
import { usePostLikes } from "@/features/like/hooks/use-like";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { closeLikes } from "@/store/ui-slice";

/**
 * Modal "Likes" — daftar orang yang menyukai sebuah post, lengkap dengan
 * tombol Follow di tiap baris.
 *
 * Dipasang sekali di AppShell dan dikendalikan lewat Redux, supaya kartu
 * post mana pun di halaman mana pun bisa membukanya tanpa menyalin modal
 * ini berkali-kali.
 */
export const LikesDialog = () => {
  const dispatch = useAppDispatch();
  const postId = useAppSelector((state) => state.ui.likesPostId);

  const {
    data,
    isLoading,
    isError,
    error,
    refetch,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  } = usePostLikes(postId);

  const users = data?.pages.flatMap((page) => page.users) ?? [];

  return (
    <Dialog
      open={postId !== null}
      onOpenChange={(open) => !open && dispatch(closeLikes())}
      title="Likes"
      hideTitle={false}
      className="max-h-[70vh] overflow-hidden"
    >
      <div className="max-h-[55vh] overflow-y-auto">
        {isLoading && (
          <div className="flex justify-center py-10">
            <Loader2 className="size-5 animate-spin text-neutral-500" />
          </div>
        )}

        {isError && (
          <ErrorState message={error.message} onRetry={() => refetch()} />
        )}

        {!isLoading && !isError && users.length === 0 && (
          <EmptyState
            title="No likes yet"
            description="Be the first to like this post."
          />
        )}

        {users.map((user) => (
          <UserRow
            key={user.id}
            user={user}
            onNavigate={() => dispatch(closeLikes())}
          />
        ))}

        <LoadMore
          hasNextPage={hasNextPage}
          isFetchingNextPage={isFetchingNextPage}
          onLoadMore={fetchNextPage}
        />
      </div>
    </Dialog>
  );
};
