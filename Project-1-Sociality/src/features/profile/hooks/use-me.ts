"use client";

import {
  useInfiniteQuery,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { toast } from "sonner";
import {
  getMe,
  getMyFollowers,
  getMyFollowing,
  getMyLikes,
  getMyPosts,
  getMySaved,
  updateMe,
} from "@/features/profile/api/me-api";
import { useAuth } from "@/features/auth/hooks/use-auth";
import { GRID_PAGE_SIZE, LIST_PAGE_SIZE } from "@/lib/constants";
import { nextPageParam } from "@/lib/post-cache";
import { queryKeys } from "@/lib/query-keys";

/** Profil sendiri — hanya diambil kalau sudah login */
export const useMe = () => {
  const { isAuthenticated, isReady } = useAuth();

  return useQuery({
    queryKey: queryKeys.me.profile,
    queryFn: getMe,
    enabled: isReady && isAuthenticated,
    staleTime: 60 * 1000,
  });
};

export const useUpdateMe = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateMe,
    onSuccess: (user) => {
      queryClient.setQueryData(queryKeys.me.profile, user);
      // Username bisa berubah, jadi profil publik ikut ditandai usang
      queryClient.invalidateQueries({ queryKey: queryKeys.user.all });
      toast.success("Profile Success Update");
    },
    onError: (error: Error) => toast.error(error.message),
  });
};

/** Tab Gallery di profil sendiri */
export const useMyPosts = () => {
  const { isAuthenticated } = useAuth();

  return useInfiniteQuery({
    queryKey: queryKeys.me.posts,
    queryFn: ({ pageParam }) =>
      getMyPosts({ page: pageParam, limit: GRID_PAGE_SIZE }),
    initialPageParam: 1,
    getNextPageParam: nextPageParam,
    enabled: isAuthenticated,
  });
};

/** Tab Saved di profil sendiri */
export const useMySaved = (enabled = true) => {
  const { isAuthenticated } = useAuth();

  return useInfiniteQuery({
    queryKey: queryKeys.me.saved,
    queryFn: ({ pageParam }) =>
      getMySaved({ page: pageParam, limit: GRID_PAGE_SIZE }),
    initialPageParam: 1,
    getNextPageParam: nextPageParam,
    enabled: enabled && isAuthenticated,
  });
};

/** Halaman My Likes */
export const useMyLikes = () => {
  const { isAuthenticated } = useAuth();

  return useInfiniteQuery({
    queryKey: queryKeys.me.likes,
    queryFn: ({ pageParam }) =>
      getMyLikes({ page: pageParam, limit: GRID_PAGE_SIZE }),
    initialPageParam: 1,
    getNextPageParam: nextPageParam,
    enabled: isAuthenticated,
  });
};

export const useMyFollowers = (enabled = true) =>
  useInfiniteQuery({
    queryKey: queryKeys.me.followers,
    queryFn: ({ pageParam }) =>
      getMyFollowers({ page: pageParam, limit: LIST_PAGE_SIZE }),
    initialPageParam: 1,
    getNextPageParam: nextPageParam,
    enabled,
  });

export const useMyFollowing = (enabled = true) =>
  useInfiniteQuery({
    queryKey: queryKeys.me.following,
    queryFn: ({ pageParam }) =>
      getMyFollowing({ page: pageParam, limit: LIST_PAGE_SIZE }),
    initialPageParam: 1,
    getNextPageParam: nextPageParam,
    enabled,
  });
