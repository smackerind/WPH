"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { toast } from "sonner";
import { login, register } from "@/features/auth/api/auth-api";
import { clearToken, getToken, setToken } from "@/lib/auth-cookie";
import { hydrateAuth, signedIn, signedOut } from "@/store/auth-slice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";

/**
 * Membaca cookie sekali saat aplikasi dibuka lalu menyalin hasilnya ke Redux.
 *
 * Dibutuhkan karena cookie hanya bisa dibaca di browser, sedangkan komponen
 * sudah mulai dirender di server. Sebelum ini selesai, `isReady` bernilai
 * false supaya navbar tidak sempat menampilkan tombol yang salah.
 */
export const useAuthBootstrap = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(hydrateAuth(Boolean(getToken())));
  }, [dispatch]);
};

/** Status login yang sudah siap dipakai komponen */
export const useAuth = () => useAppSelector((state) => state.auth);

export const useLogin = (redirectTo = "/") => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      setToken(data.token);
      dispatch(signedIn());
      // Bersihkan cache supaya data milik user sebelumnya tidak terbawa
      queryClient.clear();
      toast.success("Welcome back!");
      router.replace(redirectTo);
    },
    onError: (error: Error) => toast.error(error.message),
  });
};

export const useRegister = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: register,
    onSuccess: (data) => {
      setToken(data.token);
      dispatch(signedIn());
      queryClient.clear();
      toast.success("Your account is ready");
      router.replace("/");
    },
    onError: (error: Error) => toast.error(error.message),
  });
};

/**
 * API tidak punya endpoint logout, jadi cukup bersihkan sisi client:
 * hapus cookie, kosongkan cache, lalu kembali ke halaman login.
 */
export const useLogout = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const queryClient = useQueryClient();

  return () => {
    clearToken();
    dispatch(signedOut());
    queryClient.clear();
    router.replace("/login");
  };
};
