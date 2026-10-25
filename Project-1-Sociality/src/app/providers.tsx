"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import { Provider as ReduxProvider } from "react-redux";
import { Toaster } from "sonner";
import { store } from "@/store";

/**
 * Semua provider yang harus berjalan di browser dikumpulkan di sini supaya
 * layout.tsx tetap menjadi Server Component.
 *
 * Pembagian tugasnya:
 *   TanStack Query -> seluruh data dari server (post, user, komentar, dll)
 *   Redux Toolkit  -> state milik client saja (modal terbuka, kata kunci
 *                     pencarian, tab aktif)
 *
 * QueryClient dibuat lewat useState — kalau dibuat di luar komponen, satu
 * instance akan dipakai bersama oleh semua pengunjung di server.
 */
export function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 30 * 1000,
            gcTime: 5 * 60 * 1000,
            refetchOnWindowFocus: false,
            retry: 1,
          },
        },
      }),
  );

  return (
    <ReduxProvider store={store}>
      <QueryClientProvider client={queryClient}>
        {children}
        <Toaster
          position="top-center"
          richColors
          closeButton
          theme="dark"
          toastOptions={{ className: "text-sm" }}
        />
      </QueryClientProvider>
    </ReduxProvider>
  );
}
