"use client";

import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import {
  getUserFollowers,
  getUserFollowing,
  getUserLikes,
  getUserPosts,
  getUserProfile,
  searchUsers,
} from "@/features/user/api/user-api";
import { GRID_PAGE_SIZE, LIST_PAGE_SIZE } from "@/lib/constants";
import { nextPageParam } from "@/lib/post-cache";
import { queryKeys } from "@/lib/query-keys";

/**
 * Pencarian user.
 *
 * Kata kunci sudah di-debounce di komponennya, jadi hook ini cukup menolak
 * kata kunci kosong lewat `enabled`.
 */
export const useSearchUsers = (q: string) =>
  useInfiniteQuery({
    queryKey: queryKeys.user.search(q),
    queryFn: ({ pageParam }) =>
      searchUsers(q, { page: pageParam, limit: LIST_PAGE_SIZE }),
    initialPageParam: 1,
    getNextPageParam: nextPageParam,
    enabled: q.trim().length > 0,
  });

/** Profil publik orang lain */
export const useUserProfile = (username: string) =>
  useQuery({
    queryKey: queryKeys.user.profile(username),
    queryFn: () => getUserProfile(username),
    enabled: username.length > 0,
  });

/** Tab Gallery pada profil orang lain */
export const useUserPosts = (username: string, enabled = true) =>
  useInfiniteQuery({
    queryKey: queryKeys.user.posts(username),
    queryFn: ({ pageParam }) =>
      getUserPosts(username, { page: pageParam, limit: GRID_PAGE_SIZE }),
    initialPageParam: 1,
    getNextPageParam: nextPageParam,
    enabled: enabled && username.length > 0,
  });

/** Tab Liked pada profil orang lain */
export const useUserLikes = (username: string, enabled = true) =>
  useInfiniteQuery({
    queryKey: queryKeys.user.likes(username),
    queryFn: ({ pageParam }) =>
      getUserLikes(username, { page: pageParam, limit: GRID_PAGE_SIZE }),
    initialPageParam: 1,
    getNextPageParam: nextPageParam,
    enabled: enabled && username.length > 0,
  });

export const useUserFollowers = (username: string, enabled = true) =>
  useInfiniteQuery({
    queryKey: queryKeys.user.followers(username),
    queryFn: ({ pageParam }) =>
      getUserFollowers(username, { page: pageParam, limit: LIST_PAGE_SIZE }),
    initialPageParam: 1,
    getNextPageParam: nextPageParam,
    enabled: enabled && username.length > 0,
  });

export const useUserFollowing = (username: string, enabled = true) =>
  useInfiniteQuery({
    queryKey: queryKeys.user.following(username),
    queryFn: ({ pageParam }) =>
      getUserFollowing(username, { page: pageParam, limit: LIST_PAGE_SIZE }),
    initialPageParam: 1,
    getNextPageParam: nextPageParam,
    enabled: enabled && username.length > 0,
  });
