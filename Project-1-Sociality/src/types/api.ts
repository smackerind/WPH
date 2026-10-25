/**
 * Bentuk umum response Sociality API.
 * Semua endpoint membungkus datanya dalam { success, message, data }.
 */
export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}

/** Response error — `errors` berisi pesan validasi per field bila ada */
export interface ApiErrorResponse {
  success: false;
  message: string;
  errors?: string[];
}

/** Info halaman untuk endpoint berhalaman */
export interface Pagination {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

/** Parameter berhalaman yang dipakai hampir semua daftar */
export interface PageParams {
  page?: number;
  limit?: number;
}
