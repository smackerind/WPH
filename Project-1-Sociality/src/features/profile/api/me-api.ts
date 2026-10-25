import { api } from "@/lib/api/axios";
import type { ApiResponse, PageParams } from "@/types/api";
import {
  toPostList,
  toUserList,
  toUserProfile,
  type RawList,
} from "@/lib/api/normalize";
import type { UpdateProfilePayload } from "@/features/auth/types";
import type { PostListData } from "@/features/post/types";
import type { UserListData, UserProfile } from "@/features/user/types";

/** GET /api/me — profil sendiri beserta hitungan post/followers/following/likes */
export const getMe = async (): Promise<UserProfile> => {
  const { data } = await api.get<ApiResponse<UserProfile>>("/me");
  return toUserProfile(data.data);
};

/**
 * PATCH /api/me — ubah profil dasar.
 *
 * Dikirim sebagai multipart karena avatar berupa file. Field yang tidak
 * diisi sengaja tidak ikut dikirim supaya nilai lamanya tidak tertimpa.
 */
export const updateMe = async (
  payload: UpdateProfilePayload,
): Promise<UserProfile> => {
  const form = new FormData();

  if (payload.name !== undefined) form.append("name", payload.name);
  if (payload.username !== undefined) form.append("username", payload.username);
  if (payload.phone !== undefined) form.append("phone", payload.phone);
  if (payload.bio !== undefined) form.append("bio", payload.bio);
  if (payload.avatar) form.append("avatar", payload.avatar);

  const { data } = await api.patch<ApiResponse<UserProfile>>("/me", form, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return toUserProfile(data.data);
};

/** GET /api/me/posts — isi tab Gallery di profil sendiri */
export const getMyPosts = async (
  params: PageParams = {},
): Promise<PostListData> => {
  const { data } = await api.get<ApiResponse<RawList>>("/me/posts", {
    params,
  });
  return toPostList(data.data, params);
};

/** GET /api/me/likes — halaman My Likes */
export const getMyLikes = async (
  params: PageParams = {},
): Promise<PostListData> => {
  const { data } = await api.get<ApiResponse<RawList>>("/me/likes", {
    params,
  });
  return toPostList(data.data, params);
};

/** GET /api/me/saved — isi tab Saved di profil sendiri */
export const getMySaved = async (
  params: PageParams = {},
): Promise<PostListData> => {
  const { data } = await api.get<ApiResponse<RawList>>("/me/saved", {
    params,
  });
  return toPostList(data.data, params);
};

/** GET /api/me/followers */
export const getMyFollowers = async (
  params: PageParams = {},
): Promise<UserListData> => {
  const { data } = await api.get<ApiResponse<RawList>>("/me/followers", {
    params,
  });
  return toUserList(data.data, params);
};

/** GET /api/me/following */
export const getMyFollowing = async (
  params: PageParams = {},
): Promise<UserListData> => {
  const { data } = await api.get<ApiResponse<RawList>>("/me/following", {
    params,
  });
  return toUserList(data.data, params);
};
