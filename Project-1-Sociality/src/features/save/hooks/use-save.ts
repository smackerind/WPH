"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { savePost, unsavePost } from "@/features/save/api/save-api";
import { patchPostEverywhere } from "@/lib/post-cache";
import { queryKeys } from "@/lib/query-keys";

/**
 * Tombol simpan (bookmark) dengan optimistic UI, pola yang sama dengan like.
 *
 * Catatan: API belum terbukti mengirim flag `savedByMe` pada data post,
 * jadi status tersimpan dipegang di cache sisi client. Halaman Saved tetap
 * diambil ulang dari server setelah aksi, sehingga sumber kebenarannya
 * tetap di sana.
 */
export const useToggleSave = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ postId, saved }: { postId: number; saved: boolean }) =>
      saved ? unsavePost(postId) : savePost(postId),

    onMutate: async ({ postId, saved }) => {
      patchPostEverywhere(queryClient, postId, (post) => ({
        ...post,
        savedByMe: !saved,
      }));

      return { postId, saved };
    },

    onError: (error: Error, _variables, context) => {
      if (context) {
        patchPostEverywhere(queryClient, context.postId, (post) => ({
          ...post,
          savedByMe: context.saved,
        }));
      }
      toast.error(error.message);
    },

    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.me.saved });
    },
  });
};
