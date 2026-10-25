import { api } from "@/lib/api/axios";

/**
 * Follow / unfollow berdasarkan username, bukan id — begitu API-nya dibuat.
 * Keduanya idempotent, jadi klik berulang tidak menimbulkan error.
 */
export const followUser = async (username: string): Promise<void> => {
  await api.post(`/follow/${encodeURIComponent(username)}`);
};

export const unfollowUser = async (username: string): Promise<void> => {
  await api.delete(`/follow/${encodeURIComponent(username)}`);
};
