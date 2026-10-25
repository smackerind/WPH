import type { Pagination } from "@/types/api";

/**
 * Bentuk ringkas user — dipakai di hasil pencarian, daftar peliké,
 * followers/following, dan sebagai penulis sebuah post atau komentar.
 *
 * Tiga flag terakhir hanya dikirim API kalau permintaan menyertakan token.
 */
export interface UserSummary {
  id: number;
  username: string;
  name: string;
  avatarUrl: string | null;
  isFollowedByMe?: boolean;
  isMe?: boolean;
  followsMe?: boolean;
}

/** Angka pada baris statistik di halaman profil */
export interface UserCounts {
  post: number;
  followers: number;
  following: number;
  likes: number;
}

/** Profil lengkap dari GET /api/users/{username} dan GET /api/me */
export interface UserProfile {
  id: number;
  name: string;
  username: string;
  bio: string | null;
  avatarUrl: string | null;
  email: string;
  phone: string | null;
  counts: UserCounts;
  isFollowing: boolean;
  isMe: boolean;
}

/** Isi `data` pada GET /api/users/search */
export interface UserSearchData {
  users: UserSummary[];
  pagination: Pagination;
}

/** Isi `data` pada daftar followers / following */
export interface UserListData {
  users: UserSummary[];
  pagination: Pagination;
}
