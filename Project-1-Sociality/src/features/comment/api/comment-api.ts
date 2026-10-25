import { api } from "@/lib/api/axios";
import { toComment } from "@/lib/api/normalize";
import type { ApiResponse, PageParams, Pagination } from "@/types/api";
import type { Comment, CommentListData } from "@/features/comment/types";

/** Bentuk mentah dari server sebelum diselaraskan */
interface RawCommentListData {
  comments: unknown[];
  pagination: Pagination;
}

/**
 * GET /api/posts/{id}/comments — bisa dibaca tanpa login.
 * Hasilnya diselaraskan dulu karena swagger tidak memerinci bentuknya.
 */
export const getComments = async (
  postId: number,
  params: PageParams = {},
): Promise<CommentListData> => {
  const { data } = await api.get<ApiResponse<RawCommentListData>>(
    `/posts/${postId}/comments`,
    { params },
  );

  return {
    comments: (data.data.comments ?? []).map((raw) => toComment(raw ?? {})),
    pagination: data.data.pagination,
  };
};

/** POST /api/posts/{id}/comments */
export const addComment = async (
  postId: number,
  text: string,
): Promise<Comment> => {
  const { data } = await api.post<ApiResponse<{ comment?: unknown }>>(
    `/posts/${postId}/comments`,
    { text },
  );

  // Sebagian API membungkus hasilnya dalam { comment }, sebagian langsung
  const raw = (data.data as { comment?: unknown })?.comment ?? data.data;
  return toComment((raw ?? {}) as Record<string, unknown>);
};

/** DELETE /api/comments/{id} — pemilik komentar atau pemilik post */
export const deleteComment = async (commentId: number): Promise<void> => {
  await api.delete(`/comments/${commentId}`);
};
