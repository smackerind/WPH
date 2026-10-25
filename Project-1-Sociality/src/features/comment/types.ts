import type { Pagination } from "@/types/api";
import type { UserSummary } from "@/features/user/types";

/**
 * Satu komentar.
 *
 * Swagger tidak mendokumentasikan bentuk response komentar, jadi lapisan API
 * menormalkan dulu: apa pun nama field penulisnya di server (`author`,
 * `user`), di aplikasi ini selalu bernama `author`.
 */
export interface Comment {
  id: number;
  text: string;
  createdAt: string;
  author: UserSummary;
}

/** Isi `data` pada GET /api/posts/{id}/comments */
export interface CommentListData {
  comments: Comment[];
  pagination: Pagination;
}
