import type { UserProfile } from "@/features/user/types";

export interface LoginPayload {
  email: string;
  password: string;
}

export interface RegisterPayload {
  name: string;
  username: string;
  phone: string;
  email: string;
  password: string;
}

/**
 * Isi `data` pada login & register.
 *
 * Swagger tidak memerinci bentuknya, jadi `user` ditandai opsional:
 * yang benar-benar dibutuhkan aplikasi hanyalah token. Data profil
 * diambil ulang lewat GET /api/me setelah login berhasil.
 */
export interface AuthData {
  token: string;
  user?: UserProfile;
}

/** Body PATCH /api/me — dikirim sebagai multipart/form-data */
export interface UpdateProfilePayload {
  name?: string;
  username?: string;
  phone?: string;
  bio?: string;
  /** File avatar baru; kalau kosong, avatar lama dipertahankan */
  avatar?: File;
}
