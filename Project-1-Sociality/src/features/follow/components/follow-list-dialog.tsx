"use client";

import { Loader2 } from "lucide-react";
import { Dialog } from "@/components/ui/dialog";
import { EmptyState } from "@/components/shared/empty-state";
import { ErrorState } from "@/components/shared/error-state";
import { LoadMore } from "@/components/shared/load-more";
import { UserRow } from "@/components/shared/user-row";
import {
  useUserFollowers,
  useUserFollowing,
} from "@/features/user/hooks/use-user";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { closeFollowList } from "@/store/ui-slice";

/**
 * Modal daftar Followers / Following.
 *
 * Catatan desain: frame tidak menggambarkan halaman ini, tetapi API
 * menyediakan empat endpoint untuknya dan angka Followers/Following di
 * profil memang mengundang untuk diklik. Tampilannya karena itu meminjam
 * bentuk modal "Likes" supaya tetap selaras dengan desain yang ada.
 *
 * Endpoint publik `/users/{username}/followers` dipakai untuk semua orang,
 * termasuk diri sendiri, sehingga hanya perlu satu jalur kode.
 */
export const FollowListDialog = () => {
  const dispatch = useAppDispatch();
  const target = useAppSelector((state) => state.ui.followList);

  const username = target?.username ?? "";
  const isFollowers = target?.tab === "followers";

  const followersQuery = useUserFollowers(username, isFollowers);
  const followingQuery = useUserFollowing(username, !isFollowers);
  const query = isFollowers ? followersQuery : followingQuery;

  const users = query.data?.pages.flatMap((page) => page.users) ?? [];

  return (
    <Dialog
      open={target !== null}
      onOpenChange={(open) => !open && dispatch(closeFollowList())}
      title={isFollowers ? "Followers" : "Following"}
      hideTitle={false}
      className="max-h-[70vh] overflow-hidden"
    >
      <div className="max-h-[55vh] overflow-y-auto">
        {query.isLoading && (
          <div className="flex justify-center py-10">
            <Loader2 className="size-5 animate-spin text-neutral-500" />
          </div>
        )}

        {query.isError && (
          <ErrorState
            message={query.error.message}
            onRetry={() => query.refetch()}
          />
        )}

        {!query.isLoading && !query.isError && users.length === 0 && (
          <EmptyState
            title={isFollowers ? "No followers yet" : "Not following anyone"}
            description={
              isFollowers
                ? "Share your posts so people can find you."
                : "Find people to follow from search or explore."
            }
          />
        )}

        {users.map((user) => (
          <UserRow
            key={user.id}
            user={user}
            onNavigate={() => dispatch(closeFollowList())}
          />
        ))}

        <LoadMore
          hasNextPage={query.hasNextPage}
          isFetchingNextPage={query.isFetchingNextPage}
          onLoadMore={query.fetchNextPage}
        />
      </div>
    </Dialog>
  );
};
