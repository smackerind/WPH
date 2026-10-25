"use client";

import {
  useInfiniteQuery,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { toast } from "sonner";
import {
  getPostLikes,
  likePost,
  unlikePost,
} from "@/features/like/api/like-api";
import { LIST_PAGE_SIZE } from "@/lib/constants";
import { nextPageParam, patchPostEverywhere } from "@/lib/post-cache";
import { queryKeys } from "@/lib/query-keys";

/**
 * Tombol like dengan optimistic UI.
 *
 * Urutannya: angka di layar diubah lebih dulu (onMutate) supaya terasa
 * seketika, permintaan dikirim, lalu kalau server menolak perubahannya
 * dikembalikan (onError). Setelah selesai, data dibiarkan apa adanya —
 * endpoint like bersifat idempotent, jadi tidak perlu refetch tambahan.
 */
export const useToggleLike = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ postId, liked }: { postId: number; liked: boolean }) =>
      liked ? unlikePost(postId) : likePost(postId),

    onMutate: async ({ postId, liked }) => {
      await queryClient.cancelQueries({ queryKey: queryKeys.post.detail(postId) });

      patchPostEverywhere(queryClient, postId, (post) => ({
        ...post,
        likedByMe: !liked,
        likeCount: Math.max(0, post.likeCount + (liked ? -1 : 1)),
      }));

      return { postId, liked };
    },

    onError: (error: Error, _variables, context) => {
      // Kembalikan ke keadaan semula
      if (context) {
        patchPostEverywhere(queryClient, context.postId, (post) => ({
          ...post,
          likedByMe: context.liked,
          likeCount: Math.max(0, post.likeCount + (context.liked ? 1 : -1)),
        }));
      }
      toast.error(error.message);
    },

    onSettled: (_data, _error, { postId }) => {
      // Daftar peliké dan halaman My Likes ikut berubah
      queryClient.invalidateQueries({ queryKey: queryKeys.post.likes(postId) });
      queryClient.invalidateQueries({ queryKey: queryKeys.me.likes });
    },
  });
};

/** Daftar orang yang menyukai sebuah post — isi modal "Likes" */
export const usePostLikes = (postId: number | null) =>
  useInfiniteQuery({
    queryKey: queryKeys.post.likes(postId ?? 0),
    queryFn: ({ pageParam }) =>
      getPostLikes(postId as number, { page: pageParam, limit: LIST_PAGE_SIZE }),
    initialPageParam: 1,
    getNextPageParam: nextPageParam,
    enabled: postId !== null,
  });
