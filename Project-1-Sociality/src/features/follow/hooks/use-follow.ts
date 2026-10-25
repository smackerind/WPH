"use client";

import type { InfiniteData } from "@tanstack/react-query";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { followUser, unfollowUser } from "@/features/follow/api/follow-api";
import { queryKeys } from "@/lib/query-keys";
import type { UserListData, UserProfile } from "@/features/user/types";

/**
 * Follow / unfollow dengan optimistic UI.
 *
 * Tombol follow muncul di tiga tempat: halaman profil, modal "Likes", dan
 * daftar followers/following. Supaya ketiganya berubah bersamaan, hook ini
 * menyunting dua bentuk cache sekaligus — profil tunggal dan daftar user.
 */
export const useToggleFollow = () => {
  const queryClient = useQueryClient();

  /**
   * Ubah status follow pada semua daftar user yang sedang di-cache.
   *
   * Prefiks ["user"] juga mencakup profil tunggal, daftar post, dan hasil
   * lain yang bentuknya bukan daftar user — cache seperti itu dilewati,
   * kalau tidak `.map` dipanggil pada undefined dan follow gagal.
   */
  const patchUserLists = (username: string, isFollowing: boolean) => {
    const patch = (old: unknown) => {
      const data = old as InfiniteData<UserListData> | undefined;
      if (!Array.isArray(data?.pages)) return old;
      if (!data.pages.every((page) => Array.isArray(page?.users))) return old;

      return {
        ...data,
        pages: data.pages.map((page) => ({
          ...page,
          users: page.users.map((user) =>
            user.username === username
              ? { ...user, isFollowedByMe: isFollowing }
              : user,
          ),
        })),
      };
    };

    queryClient.setQueriesData({ queryKey: queryKeys.user.all }, patch);
    queryClient.setQueriesData({ queryKey: ["post", "likes"] }, patch);
    queryClient.setQueriesData({ queryKey: queryKeys.me.all }, patch);
  };

  /** Ubah tombol dan angka followers pada halaman profil orang tersebut */
  const patchProfile = (username: string, isFollowing: boolean, delta: number) => {
    queryClient.setQueryData<UserProfile>(
      queryKeys.user.profile(username),
      (old) =>
        old?.counts
          ? {
              ...old,
              isFollowing,
              counts: {
                ...old.counts,
                followers: Math.max(0, old.counts.followers + delta),
              },
            }
          : old,
    );
  };

  return useMutation({
    mutationFn: ({
      username,
      isFollowing,
    }: {
      username: string;
      isFollowing: boolean;
    }) => (isFollowing ? unfollowUser(username) : followUser(username)),

    onMutate: async ({ username, isFollowing }) => {
      patchUserLists(username, !isFollowing);
      patchProfile(username, !isFollowing, isFollowing ? -1 : 1);
      return { username, isFollowing };
    },

    onError: (error: Error, _variables, context) => {
      if (context) {
        patchUserLists(context.username, context.isFollowing);
        patchProfile(
          context.username,
          context.isFollowing,
          context.isFollowing ? 1 : -1,
        );
      }
      toast.error(error.message);
    },

    onSettled: () => {
      // Jumlah "following" milik sendiri dan isi timeline ikut berubah
      queryClient.invalidateQueries({ queryKey: queryKeys.me.profile });
      queryClient.invalidateQueries({ queryKey: queryKeys.me.following });
      queryClient.invalidateQueries({ queryKey: queryKeys.feed.timeline });
    },
  });
};
