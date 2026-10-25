import { notFound } from "next/navigation";
import { AppShell } from "@/components/shared/app-shell";
import { FriendProfileContent } from "@/features/user/components/friend-profile-content";

/**
 * Profil publik seseorang.
 * Bisa dibuka tanpa login — endpoint profil, post, dan likes milik user
 * memang publik di API.
 */
export default async function PublicProfilePage({
  params,
}: {
  params: Promise<{ username: string }>;
}) {
  const { username } = await params;
  const decoded = decodeURIComponent(username);

  if (!decoded) notFound();

  return (
    <AppShell hideNavbarOnMobile>
      <div className="container-feed">
        <FriendProfileContent username={decoded} />
      </div>
    </AppShell>
  );
}
