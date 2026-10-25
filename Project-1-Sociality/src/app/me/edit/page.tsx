import type { Metadata } from "next";
import { AppShell } from "@/components/shared/app-shell";
import { EditProfileForm } from "@/features/profile/components/edit-profile-form";

export const metadata: Metadata = { title: "Edit Profile — Sociality" };

/** Navigasi bawah disembunyikan supaya tidak menutupi tombol Save Changes */
export default function EditProfilePage() {
  return (
    <AppShell hideBottomNav>
      <EditProfileForm />
    </AppShell>
  );
}
