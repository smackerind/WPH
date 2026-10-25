import { api } from "@/lib/api/axios";
import type { ApiResponse, PageParams } from "@/types/api";
import { toUserProfile } from "@/lib/api/normalize";
import type { PostListData } from "@/features/post/types";
import type {
  UserListData,
  UserProfile,
  UserSearchData,
} from "@/features/user/types";

/** GET /api/users/search — mencari berdasarkan nama atau username */
export const searchUsers = async (
  q: string,
  params: PageParams = {},
): Promise<UserSearchData> => {
  const { data } = await api.get<ApiResponse<UserSearchData>>("/users/search", {
    params: { q, ...params },
  });
  return data.data;
};

/** GET /api/users/{username} — profil publik, bisa dibuka tanpa login */
export const getUserProfile = async (
  username: string,
): Promise<UserProfile> => {
  const { data } = await api.get<ApiResponse<UserProfile>>(
    `/users/${encodeURIComponent(username)}`,
  );
  return toUserProfile(data.data);
};

/** GET /api/users/{username}/posts — isi tab Gallery pada profil orang lain */
export const getUserPosts = async (
  username: string,
  params: PageParams = {},
): Promise<PostListData> => {
  const { data } = await api.get<ApiResponse<PostListData>>(
    `/users/${encodeURIComponent(username)}/posts`,
    { params },
  );
  return data.data;
};

/** GET /api/users/{username}/likes — isi tab Liked pada profil orang lain */
export const getUserLikes = async (
  username: string,
  params: PageParams = {},
): Promise<PostListData> => {
  const { data } = await api.get<ApiResponse<PostListData>>(
    `/users/${encodeURIComponent(username)}/likes`,
    { params },
  );
  return data.data;
};

/** GET /api/users/{username}/followers */
export const getUserFollowers = async (
  username: string,
  params: PageParams = {},
): Promise<UserListData> => {
  const { data } = await api.get<ApiResponse<UserListData>>(
    `/users/${encodeURIComponent(username)}/followers`,
    { params },
  );
  return data.data;
};

/** GET /api/users/{username}/following */
export const getUserFollowing = async (
  username: string,
  params: PageParams = {},
): Promise<UserListData> => {
  const { data } = await api.get<ApiResponse<UserListData>>(
    `/users/${encodeURIComponent(username)}/following`,
    { params },
  );
  return data.data;
};
