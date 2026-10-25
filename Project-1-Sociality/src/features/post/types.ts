import type { Pagination } from "@/types/api";
import type { UserSummary } from "@/features/user/types";

/**
 * Satu post.
 *
 * `likedByMe` dan `savedByMe` hanya terisi kalau permintaan membawa token.
 * `savedByMe` belum terkonfirmasi ada di API, jadi ditandai opsional dan
 * tombol simpan tetap bekerja memakai tebakan optimistic.
 */
export interface Post {
  id: number;
  imageUrl: string;
  caption: string;
  createdAt: string;
  author: UserSummary;
  likeCount: number;
  commentCount: number;
  likedByMe?: boolean;
  savedByMe?: boolean;
}

/** Isi `data` pada endpoint yang mengembalikan daftar post */
export interface PostListData {
  posts: Post[];
  pagination: Pagination;
}

/** Body POST /api/posts — dikirim sebagai multipart/form-data */
export interface CreatePostPayload {
  image: File;
  caption?: string;
}
