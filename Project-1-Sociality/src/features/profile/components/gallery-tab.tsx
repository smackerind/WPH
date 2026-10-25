"use client";

import type { UseInfiniteQueryResult } from "@tanstack/react-query";
import { EmptyState } from "@/components/shared/empty-state";
import { ErrorState } from "@/components/shared/error-state";
import { LoadMore } from "@/components/shared/load-more";
import {
  PostGrid,
  PostGridSkeleton,
} from "@/features/post/components/post-grid";
import type { PostListData } from "@/features/post/types";

interface GalleryTabProps {
  /** Hasil useInfiniteQuery apa pun yang mengembalikan daftar post */
  query: UseInfiniteQueryResult<
    { pages: PostListData[]; pageParams: unknown[] },
    Error
  >;
  emptyTitle: string;
  emptyDescription: string;
  emptyAction?: React.ReactNode;
}

/**
 * Isi sebuah tab galeri.
 *
 * Tab Gallery, Saved, dan Liked semuanya menampilkan grid post dengan pola
 * yang sama — memuat, gagal, kosong, atau berisi — jadi keempat keadaan itu
 * ditangani sekali di sini. Yang berbeda hanya kalimat pada keadaan kosong.
 */
export const GalleryTab = ({
  query,
  emptyTitle,
  emptyDescription,
  emptyAction,
}: GalleryTabProps) => {
  const posts = query.data?.pages.flatMap((page) => page.posts) ?? [];

  if (query.isLoading) return <PostGridSkeleton />;

  if (query.isError) {
    return (
      <ErrorState message={query.error.message} onRetry={() => query.refetch()} />
    );
  }

  if (posts.length === 0) {
    return (
      <EmptyState
        title={emptyTitle}
        description={emptyDescription}
        action={emptyAction}
      />
    );
  }

  return (
    <>
      <PostGrid posts={posts} />
      <LoadMore
        hasNextPage={query.hasNextPage}
        isFetchingNextPage={query.isFetchingNextPage}
        onLoadMore={query.fetchNextPage}
      />
    </>
  );
};
