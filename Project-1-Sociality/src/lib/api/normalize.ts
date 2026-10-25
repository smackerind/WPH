import type { Comment } from "@/features/comment/types";
import type { Post } from "@/features/post/types";
import type { PageParams, Pagination } from "@/types/api";
import type {
  UserCounts,
  UserProfile,
  UserSummary,
} from "@/features/user/types";

/**
 * Penyelaras bentuk data.
 *
 * Swagger Sociality tidak mendokumentasikan satu pun bentuk response, jadi
 * beberapa nama field baru ketahuan saat dipanggil. Fungsi di sini menerima
 * beberapa kemungkinan nama lalu mengembalikan bentuk tunggal yang dipakai
 * seluruh aplikasi — sehingga perbedaan di server cukup ditangani di satu
 * tempat, bukan di setiap komponen.
 */

/** Bentuk mentah yang mungkin dikirim server untuk seorang user */
interface RawUser {
  id?: number;
  username?: string;
  name?: string;
  avatarUrl?: string | null;
  avatar?: string | null;
  isFollowedByMe?: boolean;
  isMe?: boolean;
  followsMe?: boolean;
}

export const toUserSummary = (raw: RawUser | undefined): UserSummary => ({
  id: raw?.id ?? 0,
  username: raw?.username ?? "",
  name: raw?.name ?? raw?.username ?? "",
  avatarUrl: raw?.avatarUrl ?? raw?.avatar ?? null,
  isFollowedByMe: raw?.isFollowedByMe,
  isMe: raw?.isMe,
  followsMe: raw?.followsMe,
});

/** Bentuk mentah komentar — penulisnya bisa bernama `author` atau `user` */
interface RawComment {
  id?: number;
  text?: string;
  comment?: string;
  createdAt?: string;
  author?: RawUser;
  user?: RawUser;
}

export const toComment = (raw: RawComment): Comment => ({
  id: raw.id ?? 0,
  text: raw.text ?? raw.comment ?? "",
  createdAt: raw.createdAt ?? new Date().toISOString(),
  author: toUserSummary(raw.author ?? raw.user),
});

/** Angka statistik mentah — nama field bisa tunggal atau jamak */
interface RawCounts {
  post?: number;
  posts?: number;
  followers?: number;
  following?: number;
  likes?: number;
}

/**
 * Bentuk mentah profil.
 *
 * GET /api/users/{username} mengirim profil datar dengan `counts`, sedangkan
 * GET /api/me ("profile + quick stats") bisa membungkus profil di `user` /
 * `profile` dan menaruh angkanya di `stats`.
 */
interface RawProfile extends Omit<Partial<UserProfile>, "counts"> {
  counts?: RawCounts;
  stats?: RawCounts;
  user?: RawProfile;
  profile?: RawProfile;
}

const toCounts = (raw: RawCounts | undefined): UserCounts => ({
  post: raw?.post ?? raw?.posts ?? 0,
  followers: raw?.followers ?? 0,
  following: raw?.following ?? 0,
  likes: raw?.likes ?? 0,
});

export const toUserProfile = (raw: RawProfile | undefined): UserProfile => {
  const base = raw?.user ?? raw?.profile ?? raw;

  return {
    id: base?.id ?? 0,
    name: base?.name ?? base?.username ?? "",
    username: base?.username ?? "",
    bio: base?.bio ?? null,
    avatarUrl: base?.avatarUrl ?? null,
    email: base?.email ?? "",
    phone: base?.phone ?? null,
    counts: toCounts(
      base?.counts ?? base?.stats ?? raw?.counts ?? raw?.stats,
    ),
    isFollowing: base?.isFollowing ?? false,
    isMe: base?.isMe ?? false,
  };
};

/**
 * Daftar berhalaman.
 *
 * Endpoint publik selalu mengirim `{ posts | users, pagination }`, tapi
 * endpoint yang butuh token (/feed, /me/*) tidak terdokumentasi dan bisa
 * memakai nama field lain, mengirim array langsung, atau membungkus tiap
 * item (mis. `{ post: {...} }` pada daftar saved/likes). Semua variasi itu
 * diseragamkan di sini; item tanpa `id` dibuang supaya komponen tidak crash.
 */
export type RawList = Record<string, unknown> | unknown[] | null | undefined;

const pickArray = (raw: RawList, keys: string[]): unknown[] => {
  if (Array.isArray(raw)) return raw;
  for (const key of keys) {
    const value = raw?.[key];
    if (Array.isArray(value)) return value;
  }
  return [];
};

const unwrap = <T extends { id: number }>(
  items: unknown[],
  wrapperKeys: string[],
): T[] =>
  items
    .map((item) => {
      const record = item as Record<string, unknown> | null;
      for (const key of wrapperKeys) {
        if (record?.[key] && typeof record[key] === "object") {
          return record[key];
        }
      }
      return record;
    })
    .filter((item): item is T => Boolean((item as T | null)?.id));

const toPagination = (
  raw: RawList,
  params: PageParams,
  count: number,
): Pagination =>
  (!Array.isArray(raw) && (raw?.pagination as Pagination | undefined)) || {
    page: params.page ?? 1,
    limit: params.limit ?? count,
    total: count,
    totalPages: 1,
  };

export const toPostList = (raw: RawList, params: PageParams = {}) => {
  const posts = unwrap<Post>(
    pickArray(raw, ["posts", "items", "feed", "data"]),
    ["post"],
  );
  return { posts, pagination: toPagination(raw, params, posts.length) };
};

export const toUserList = (raw: RawList, params: PageParams = {}) => {
  const users = unwrap<UserSummary>(
    pickArray(raw, ["users", "items", "followers", "following", "data"]),
    ["user", "follower", "following"],
  ).map(toUserSummary);
  return { users, pagination: toPagination(raw, params, users.length) };
};
