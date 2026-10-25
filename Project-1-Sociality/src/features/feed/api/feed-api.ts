import { api } from "@/lib/api/axios";
import { toPostList, type RawList } from "@/lib/api/normalize";
import type { ApiResponse, PageParams } from "@/types/api";
import type { PostListData } from "@/features/post/types";

/**
 * GET /api/feed — timeline berisi post sendiri dan post orang yang diikuti.
 * Butuh token; pengunjung yang belum login dialihkan ke /login oleh proxy.ts.
 *
 * Bentuk response tidak terdokumentasi, jadi diselaraskan lewat toPostList.
 */
export const getFeed = async (
  params: PageParams = {},
): Promise<PostListData> => {
  const { data } = await api.get<ApiResponse<RawList>>(
    "/feed",
    { params },
  );
  return toPostList(data.data, params);
};
