import type { InfiniteData, QueryClient } from "@tanstack/react-query";
import { queryKeys } from "@/lib/query-keys";
import type { Post, PostListData } from "@/features/post/types";

/**
 * Satu post bisa muncul di banyak tempat sekaligus: timeline, Explore,
 * galeri profil, halaman My Likes, dan halaman Saved. Ketika user menekan
 * like atau simpan, semua salinan itu harus ikut berubah seketika —
 * kalau tidak, angka like akan berbeda-beda antar halaman.
 *
 * Fungsi di sini menyunting seluruh salinan post di cache sekaligus,
 * sehingga hook optimistic cukup memanggil satu baris.
 */

/** Semua query key yang isinya daftar post berhalaman */
const POST_LIST_KEYS = [
  queryKeys.feed.all,
  queryKeys.me.posts,
  queryKeys.me.likes,
  queryKeys.me.saved,
  ["user", "posts"],
  ["user", "likes"],
] as const;

/** Terapkan perubahan ke satu post di semua daftar dan di halaman detail */
export const patchPostEverywhere = (
  queryClient: QueryClient,
  postId: number,
  patch: (post: Post) => Post,
) => {
  for (const key of POST_LIST_KEYS) {
    queryClient.setQueriesData<InfiniteData<PostListData>>(
      { queryKey: [...key] },
      (old) => {
        if (!old) return old;

        return {
          ...old,
          pages: old.pages.map((page) => ({
            ...page,
            posts: page.posts.map((post) =>
              post.id === postId ? patch(post) : post,
            ),
          })),
        };
      },
    );
  }

  queryClient.setQueryData<Post>(queryKeys.post.detail(postId), (old) =>
    old ? patch(old) : old,
  );
};

/** Buang satu post dari semua daftar — dipakai setelah post dihapus */
export const removePostEverywhere = (
  queryClient: QueryClient,
  postId: number,
) => {
  for (const key of POST_LIST_KEYS) {
    queryClient.setQueriesData<InfiniteData<PostListData>>(
      { queryKey: [...key] },
      (old) => {
        if (!old) return old;

        return {
          ...old,
          pages: old.pages.map((page) => ({
            ...page,
            posts: page.posts.filter((post) => post.id !== postId),
          })),
        };
      },
    );
  }

  queryClient.removeQueries({ queryKey: queryKeys.post.detail(postId) });
};

/** Hitung halaman berikutnya; undefined berarti sudah halaman terakhir */
export const nextPageParam = (lastPage: { pagination: { page: number; totalPages: number } }) =>
  lastPage.pagination.page < lastPage.pagination.totalPages
    ? lastPage.pagination.page + 1
    : undefined;
