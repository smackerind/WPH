"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import {
  createPost,
  deletePost,
  getPost,
} from "@/features/post/api/post-api";
import { removePostEverywhere } from "@/lib/post-cache";
import { queryKeys } from "@/lib/query-keys";

/** Detail satu post — dipakai halaman komentar dan tampilan ukuran penuh */
export const usePost = (id: number) =>
  useQuery({
    queryKey: queryKeys.post.detail(id),
    queryFn: () => getPost(id),
    enabled: Number.isInteger(id) && id > 0,
  });

/**
 * Unggah post baru.
 * Setelah berhasil, timeline dan galeri profil ditandai usang supaya post
 * yang baru langsung muncul di keduanya.
 */
export const useCreatePost = () => {
  const router = useRouter();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createPost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.feed.all });
      queryClient.invalidateQueries({ queryKey: queryKeys.me.posts });
      queryClient.invalidateQueries({ queryKey: queryKeys.me.profile });
      toast.success("Success Post");
      router.push("/");
    },
    onError: (error: Error) => toast.error(error.message),
  });
};

/**
 * Hapus post sendiri.
 * Post langsung dibuang dari semua daftar di cache, jadi tidak perlu
 * memuat ulang halaman.
 */
export const useDeletePost = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deletePost,
    onSuccess: (_data, postId) => {
      removePostEverywhere(queryClient, postId);
      queryClient.invalidateQueries({ queryKey: queryKeys.me.profile });
      toast.success("Post deleted");
    },
    onError: (error: Error) => toast.error(error.message),
  });
};
