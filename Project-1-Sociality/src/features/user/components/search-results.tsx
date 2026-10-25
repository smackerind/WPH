"use client";

import { Loader2 } from "lucide-react";
import { EmptyState } from "@/components/shared/empty-state";
import { ErrorState } from "@/components/shared/error-state";
import { LoadMore } from "@/components/shared/load-more";
import { UserRow } from "@/components/shared/user-row";
import { useSearchUsers } from "@/features/user/hooks/use-user";

interface SearchResultsProps {
  /** Kata kunci yang sudah melewati debounce */
  query: string;
  onSelect: () => void;
}

/**
 * Daftar hasil pencarian user.
 *
 * Dipakai dua kali dengan tampilan berbeda: sebagai dropdown di bawah kotak
 * pencarian pada desktop, dan sebagai isi layar penuh pada mobile.
 */
export const SearchResults = ({ query, onSelect }: SearchResultsProps) => {
  const {
    data,
    isLoading,
    isError,
    error,
    refetch,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  } = useSearchUsers(query);

  const users = data?.pages.flatMap((page) => page.users) ?? [];

  if (!query.trim()) {
    return (
      <EmptyState
        title="Search for people"
        description="Type a name or username to find someone."
      />
    );
  }

  if (isLoading) {
    return (
      <div className="flex justify-center py-10">
        <Loader2 className="size-5 animate-spin text-neutral-500" />
      </div>
    );
  }

  if (isError) {
    return <ErrorState message={error.message} onRetry={() => refetch()} />;
  }

  if (users.length === 0) {
    return (
      <EmptyState title="No results found" description="Change your keyword" />
    );
  }

  return (
    <div className="flex flex-col px-4 pb-4">
      {users.map((user) => (
        <UserRow key={user.id} user={user} onNavigate={onSelect} hideFollow />
      ))}

      <LoadMore
        hasNextPage={hasNextPage}
        isFetchingNextPage={isFetchingNextPage}
        onLoadMore={fetchNextPage}
      />
    </div>
  );
};
