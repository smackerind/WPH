"use client";

import { ErrorState } from "@/components/shared/error-state";

/**
 * Jaring pengaman kalau ada kesalahan tak terduga saat merender halaman.
 * Next memberikan fungsi `reset` untuk mencoba merender ulang.
 */
export default function GlobalError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <main className="flex min-h-screen items-center justify-center px-4">
      <ErrorState message={error.message} onRetry={reset} />
    </main>
  );
}
