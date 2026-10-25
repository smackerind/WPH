"use client";

import { useInfiniteQuery } from "@tanstack/react-query";
import { getFeed } from "@/features/feed/api/feed-api";
import { getExplorePosts } from "@/features/post/api/post-api";
import { useAuth } from "@/features/auth/hooks/use-auth";
import { FEED_PAGE_SIZE } from "@/lib/constants";
import { nextPageParam } from "@/lib/post-cache";
import { queryKeys } from "@/lib/query-keys";

/**
 * Timeline utama: post sendiri + post orang yang diikuti.
 * Memakai useInfiniteQuery karena desain menambah post di bawah
 * (infinite scroll), bukan berganti halaman.
 */
export const useFeed = () => {
  const { isAuthenticated } = useAuth();

  return useInfiniteQuery({
    queryKey: queryKeys.feed.timeline,
    queryFn: ({ pageParam }) =>
      getFeed({ page: pageParam, limit: FEED_PAGE_SIZE }),
    initialPageParam: 1,
    getNextPageParam: nextPageParam,
    enabled: isAuthenticated,
  });
};

/**
 * Explore — seluruh post dari semua orang.
 *
 * Dipakai sebagai cadangan di halaman timeline: kalau user belum mengikuti
 * siapa pun, feed-nya kosong dan layar jadi hampa. Dalam keadaan itu daftar
 * Explore ditampilkan supaya user punya sesuatu untuk dilihat dan seseorang
 * untuk diikuti.
 */
export const useExplore = (enabled: boolean) =>
  useInfiniteQuery({
    queryKey: queryKeys.feed.explore,
    queryFn: ({ pageParam }) =>
      getExplorePosts({ page: pageParam, limit: FEED_PAGE_SIZE }),
    initialPageParam: 1,
    getNextPageParam: nextPageParam,
    enabled,
  });
