import { api } from "@/lib/api/axios";

/**
 * Simpan / batal simpan sebuah post (bookmark).
 * Sama seperti like, keduanya idempotent di sisi API.
 */
export const savePost = async (postId: number): Promise<void> => {
  await api.post(`/posts/${postId}/save`);
};

export const unsavePost = async (postId: number): Promise<void> => {
  await api.delete(`/posts/${postId}/save`);
};
