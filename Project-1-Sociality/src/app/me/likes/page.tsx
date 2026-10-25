import type { Metadata } from "next";
import { AppShell } from "@/components/shared/app-shell";
import { MyLikesContent } from "@/features/profile/components/my-likes-content";

export const metadata: Metadata = { title: "My Likes — Sociality" };

/**
 * Halaman My Likes.
 * Tidak digambarkan di desain, tetapi diminta oleh panduan MVP dan didukung
 * endpoint GET /api/me/likes.
 */
export default function MyLikesPage() {
  return (
    <AppShell>
      <div className="container-feed">
        <MyLikesContent />
      </div>
    </AppShell>
  );
}
