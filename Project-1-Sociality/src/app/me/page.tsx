import type { Metadata } from "next";
import { AppShell } from "@/components/shared/app-shell";
import { MyProfileContent } from "@/features/profile/components/my-profile-content";

export const metadata: Metadata = { title: "My Profile — Sociality" };

export default function MyProfilePage() {
  return (
    <AppShell hideNavbarOnMobile>
      <div className="container-feed">
        <MyProfileContent />
      </div>
    </AppShell>
  );
}
