"use client";

import { Loader2 } from "lucide-react";
import { useEffect, useRef } from "react";

interface LoadMoreProps {
  hasNextPage: boolean;
  isFetchingNextPage: boolean;
  onLoadMore: () => void;
}

/**
 * Penanda akhir daftar untuk infinite scroll.
 *
 * Memakai IntersectionObserver bawaan browser, bukan library tambahan:
 * begitu elemen ini terlihat di layar, halaman berikutnya diminta.
 * `isFetchingNextPage` menjaga agar satu halaman tidak diminta dua kali.
 */
export const LoadMore = ({
  hasNextPage,
  isFetchingNextPage,
  onLoadMore,
}: LoadMoreProps) => {
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = sentinelRef.current;
    if (!element || !hasNextPage) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isFetchingNextPage) onLoadMore();
      },
      // Muat lebih awal supaya user tidak sempat melihat daftar berhenti
      { rootMargin: "400px" },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [hasNextPage, isFetchingNextPage, onLoadMore]);

  if (!hasNextPage) return null;

  return (
    <div ref={sentinelRef} className="flex justify-center py-6">
      {isFetchingNextPage && (
        <Loader2 className="size-5 animate-spin text-neutral-500" />
      )}
    </div>
  );
};
