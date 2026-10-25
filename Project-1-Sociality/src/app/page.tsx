import type { Metadata } from "next";
import { AppShell } from "@/components/shared/app-shell";
import { FeedContent } from "@/features/feed/components/feed-content";

export const metadata: Metadata = { title: "Timeline — Sociality" };

/**
 * Halaman utama.
 * proxy.ts sudah memastikan hanya user yang sudah login sampai ke sini.
 */
export default function TimelinePage() {
  return (
    <AppShell>
      <div className="container-feed">
        <FeedContent />
      </div>
    </AppShell>
  );
}
