import { api } from "@/lib/api/axios";
import type { ApiResponse, PageParams } from "@/types/api";
import type {
  CreatePostPayload,
  Post,
  PostListData,
} from "@/features/post/types";

/**
 * GET /api/posts — "Explore", seluruh post dari semua orang.
 * Butuh token. Dipakai sebagai cadangan ketika timeline masih kosong
 * karena user belum mengikuti siapa pun.
 */
export const getExplorePosts = async (
  params: PageParams = {},
): Promise<PostListData> => {
  const { data } = await api.get<ApiResponse<PostListData>>("/posts", {
    params,
  });
  return data.data;
};

/** GET /api/posts/{id} — detail satu post, bisa dibuka tanpa login */
export const getPost = async (id: number): Promise<Post> => {
  const { data } = await api.get<ApiResponse<Post>>(`/posts/${id}`);
  return data.data;
};

/**
 * POST /api/posts — unggah satu gambar + caption.
 * Dikirim sebagai multipart karena ada file.
 */
export const createPost = async (payload: CreatePostPayload): Promise<Post> => {
  const form = new FormData();
  form.append("image", payload.image);
  if (payload.caption) form.append("caption", payload.caption);

  const { data } = await api.post<ApiResponse<Post>>("/posts", form, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return data.data;
};

/** DELETE /api/posts/{id} — hanya boleh untuk post milik sendiri */
export const deletePost = async (id: number): Promise<void> => {
  await api.delete(`/posts/${id}`);
};
