/**
 * Kumpulan query key TanStack Query.
 *
 * Dibuat terpusat supaya invalidateQueries tidak pernah salah ketik, dan
 * supaya mudah melihat data apa saja yang di-cache. Semua key diawali nama
 * fiturnya, jadi satu fitur bisa dibatalkan sekaligus lewat prefiks.
 */
export const queryKeys = {
  me: {
    all: ["me"] as const,
    profile: ["me", "profile"] as const,
    posts: ["me", "posts"] as const,
    likes: ["me", "likes"] as const,
    saved: ["me", "saved"] as const,
    followers: ["me", "followers"] as const,
    following: ["me", "following"] as const,
  },
  feed: {
    all: ["feed"] as const,
    timeline: ["feed", "timeline"] as const,
    explore: ["feed", "explore"] as const,
  },
  post: {
    all: ["post"] as const,
    detail: (id: number) => ["post", "detail", id] as const,
    likes: (id: number) => ["post", "likes", id] as const,
    comments: (id: number) => ["post", "comments", id] as const,
  },
  user: {
    all: ["user"] as const,
    search: (q: string) => ["user", "search", q] as const,
    profile: (username: string) => ["user", "profile", username] as const,
    posts: (username: string) => ["user", "posts", username] as const,
    likes: (username: string) => ["user", "likes", username] as const,
    followers: (username: string) => ["user", "followers", username] as const,
    following: (username: string) => ["user", "following", username] as const,
  },
} as const;
