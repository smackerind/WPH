import { api } from "@/lib/api/axios";
import type { ApiResponse, PageParams } from "@/types/api";
import type { UserListData } from "@/features/user/types";

/**
 * Like dan unlike bersifat idempotent di sisi API — menekan tombol berkali-kali
 * tidak akan menggandakan hitungan, jadi aman dipakai bersama optimistic UI.
 */
export const likePost = async (postId: number): Promise<void> => {
  await api.post(`/posts/${postId}/like`);
};

export const unlikePost = async (postId: number): Promise<void> => {
  await api.delete(`/posts/${postId}/like`);
};

/**
 * GET /api/posts/{id}/likes — daftar orang yang menyukai sebuah post.
 * Tanpa token tetap bisa dipanggil, tapi dengan token API menambahkan flag
 * isFollowedByMe / isMe / followsMe sehingga tombol Follow bisa ditampilkan.
 */
export const getPostLikes = async (
  postId: number,
  params: PageParams = {},
): Promise<UserListData> => {
  const { data } = await api.get<ApiResponse<UserListData>>(
    `/posts/${postId}/likes`,
    { params },
  );
  return data.data;
};
