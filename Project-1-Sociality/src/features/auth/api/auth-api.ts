import { api } from "@/lib/api/axios";
import type { ApiResponse } from "@/types/api";
import type {
  AuthData,
  LoginPayload,
  RegisterPayload,
} from "@/features/auth/types";

/**
 * POST /api/auth/login
 * Mengembalikan token yang kemudian disimpan ke cookie.
 */
export const login = async (payload: LoginPayload): Promise<AuthData> => {
  const { data } = await api.post<ApiResponse<AuthData>>(
    "/auth/login",
    payload,
  );
  return data.data;
};

/**
 * POST /api/auth/register
 * API langsung mengembalikan token juga, jadi user tidak perlu login ulang.
 */
export const register = async (
  payload: RegisterPayload,
): Promise<AuthData> => {
  const { data } = await api.post<ApiResponse<AuthData>>(
    "/auth/register",
    payload,
  );
  return data.data;
};
