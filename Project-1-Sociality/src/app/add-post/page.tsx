import type { Metadata } from "next";
import { AppShell } from "@/components/shared/app-shell";
import { AddPostForm } from "@/features/post/components/add-post-form";

export const metadata: Metadata = { title: "Add Post — Sociality" };

/**
 * Halaman unggah post.
 * Navigasi bawah disembunyikan supaya tidak menutupi tombol Share.
 */
export default function AddPostPage() {
  return (
    <AppShell hideBottomNav>
      <AddPostForm />
    </AppShell>
  );
}
