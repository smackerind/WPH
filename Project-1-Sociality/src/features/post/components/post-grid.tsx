import Image from "next/image";
import Link from "next/link";
import { Skeleton } from "@/components/ui/skeleton";
import type { Post } from "@/features/post/types";

interface PostGridProps {
  posts: Post[];
}

/**
 * Galeri tiga kolom pada halaman profil.
 *
 * Tanpa jarak antar sel dan semua sel persegi, sesuai desain. Setiap sel
 * menuju halaman detail post.
 */
export const PostGrid = ({ posts }: PostGridProps) => (
  <div className="grid grid-cols-3 gap-0.5">
    {posts.map((post) => (
      <Link
        key={post.id}
        href={`/posts/${post.id}`}
        className="relative aspect-square overflow-hidden bg-neutral-900"
      >
        <Image
          src={post.imageUrl}
          alt={post.caption || "Post"}
          fill
          sizes="(min-width: 640px) 200px, 33vw"
          className="object-cover transition-opacity hover:opacity-80"
        />
      </Link>
    ))}
  </div>
);

/** Bentuk kasar galeri selama data belum tiba */
export const PostGridSkeleton = ({ count = 9 }: { count?: number }) => (
  <div className="grid grid-cols-3 gap-0.5">
    {Array.from({ length: count }, (_, index) => (
      <Skeleton key={index} className="aspect-square rounded-none" />
    ))}
  </div>
);
