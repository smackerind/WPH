"use client";

import {
  useInfiniteQuery,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { toast } from "sonner";
import {
  addComment,
  deleteComment,
  getComments,
} from "@/features/comment/api/comment-api";
import { COMMENT_PAGE_SIZE } from "@/lib/constants";
import { nextPageParam, patchPostEverywhere } from "@/lib/post-cache";
import { queryKeys } from "@/lib/query-keys";

/** Daftar komentar sebuah post, dimuat bertahap lewat tombol load-more */
export const useComments = (postId: number) =>
  useInfiniteQuery({
    queryKey: queryKeys.post.comments(postId),
    queryFn: ({ pageParam }) =>
      getComments(postId, { page: pageParam, limit: COMMENT_PAGE_SIZE }),
    initialPageParam: 1,
    getNextPageParam: nextPageParam,
    enabled: Number.isInteger(postId) && postId > 0,
  });

/**
 * Kirim komentar.
 *
 * Angka komentar pada kartu post dinaikkan lebih dulu supaya terasa
 * seketika; daftar komentarnya sendiri diambil ulang dari server agar id
 * dan waktu yang tampil benar-benar milik server.
 */
export const useAddComment = (postId: number) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (text: string) => addComment(postId, text),

    onMutate: () => {
      patchPostEverywhere(queryClient, postId, (post) => ({
        ...post,
        commentCount: post.commentCount + 1,
      }));
    },

    onError: (error: Error) => {
      patchPostEverywhere(queryClient, postId, (post) => ({
        ...post,
        commentCount: Math.max(0, post.commentCount - 1),
      }));
      toast.error(error.message);
    },

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.post.comments(postId),
      });
    },
  });
};

/** Hapus komentar — hanya pemilik komentar atau pemilik post */
export const useDeleteComment = (postId: number) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteComment,

    onSuccess: () => {
      patchPostEverywhere(queryClient, postId, (post) => ({
        ...post,
        commentCount: Math.max(0, post.commentCount - 1),
      }));
      queryClient.invalidateQueries({
        queryKey: queryKeys.post.comments(postId),
      });
      toast.success("Comment deleted");
    },

    onError: (error: Error) => toast.error(error.message),
  });
};
