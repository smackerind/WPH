import { notFound } from "next/navigation";
import { AppShell } from "@/components/shared/app-shell";
import { PostDetailContent } from "@/features/post/components/post-detail-content";

/**
 * Halaman detail post.
 *
 * Bisa dibuka tanpa login — GET /api/posts/{id} dan daftar komentarnya
 * memang publik. Aksi privat (like, simpan, komentar) akan mengarahkan ke
 * halaman login lebih dulu.
 *
 * Di Next 16 `params` berupa Promise, jadi harus di-await.
 */
export default async function PostDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const postId = Number(id);

  if (!Number.isInteger(postId) || postId <= 0) notFound();

  return (
    <AppShell>
      <PostDetailContent postId={postId} />
    </AppShell>
  );
}
