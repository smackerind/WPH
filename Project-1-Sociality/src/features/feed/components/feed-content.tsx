"use client";

import Link from "next/link";
import { buttonVariants } from "@/components/ui/button-variants";
import { EmptyState } from "@/components/shared/empty-state";
import { ErrorState } from "@/components/shared/error-state";
import { LoadMore } from "@/components/shared/load-more";
import { PostCard } from "@/features/post/components/post-card";
import { FeedSkeleton } from "@/features/post/components/post-card-skeleton";
import { useExplore, useFeed } from "@/features/feed/hooks/use-feed";

/**
 * Isi halaman timeline.
 *
 * Timeline utama berisi post sendiri dan post orang yang diikuti. Kalau
 * hasilnya kosong — biasanya karena user baru dan belum mengikuti siapa pun
 * — halaman tidak dibiarkan hampa: daftar Explore ditampilkan sebagai
 * gantinya supaya ada yang bisa dilihat dan ada orang yang bisa diikuti.
 */
export const FeedContent = () => {
  const feed = useFeed();

  const feedPosts = feed.data?.pages.flatMap((page) => page.posts) ?? [];
  const feedIsEmpty = feed.isSuccess && feedPosts.length === 0;

  // Explore baru diminta kalau timeline memang terbukti kosong
  const explore = useExplore(feedIsEmpty);
  const explorePosts = explore.data?.pages.flatMap((page) => page.posts) ?? [];

  const active = feedIsEmpty ? explore : feed;
  const posts = feedIsEmpty ? explorePosts : feedPosts;

  if (feed.isLoading) {
    return <FeedSkeleton count={2} />;
  }

  if (feed.isError) {
    return (
      <ErrorState message={feed.error.message} onRetry={() => feed.refetch()} />
    );
  }

  if (feedIsEmpty && explore.isLoading) {
    return <FeedSkeleton count={2} />;
  }

  if (posts.length === 0) {
    return (
      <EmptyState
        title="Your timeline is quiet"
        description="Follow people or share your first post to fill this space."
        action={
          <Link href="/add-post" className={buttonVariants()}>
            Upload My First Post
          </Link>
        }
      />
    );
  }

  return (
    <>
      {feedIsEmpty && (
        <p className="border-b border-neutral-900 px-4 py-3 text-sm text-neutral-400">
          You aren&apos;t following anyone yet — here is what others are
          sharing.
        </p>
      )}

      {posts.map((post, index) => (
        <PostCard key={post.id} post={post} priority={index === 0} />
      ))}

      <LoadMore
        hasNextPage={active.hasNextPage}
        isFetchingNextPage={active.isFetchingNextPage}
        onLoadMore={active.fetchNextPage}
      />
    </>
  );
};
