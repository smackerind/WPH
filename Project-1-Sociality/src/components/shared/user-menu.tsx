"use client";

import Link from "next/link";
import { Avatar } from "@/components/ui/avatar";
import { DropdownItem, DropdownMenu } from "@/components/ui/dropdown-menu";
import { useLogout } from "@/features/auth/hooks/use-auth";
import { useMe } from "@/features/profile/hooks/use-me";
import { cn } from "@/lib/utils";

interface UserMenuProps {
  /** Tampilkan nama di samping avatar (hanya di desktop) */
  showName?: boolean;
}

/**
 * Avatar + nama di bilah atas. Diklik -> dropdown My Profile, Edit Profile,
 * dan Logout. Dipakai Navbar dan MobilePageHeader supaya perilakunya sama.
 */
export const UserMenu = ({ showName }: UserMenuProps) => {
  const { data: me } = useMe();
  const logout = useLogout();

  return (
    <DropdownMenu
      trigger={
        <button
          type="button"
          aria-label="Account menu"
          className="flex cursor-pointer items-center gap-2 rounded-full transition-opacity hover:opacity-80"
        >
          <Avatar src={me?.avatarUrl} name={me?.name} size={36} />
          <span
            className={cn(
              "hidden text-sm font-bold text-neutral-25",
              showName && "lg:inline",
            )}
          >
            {me?.name ?? "Profile"}
          </span>
        </button>
      }
    >
      <DropdownItem asChild>
        <Link href="/me">My Profile</Link>
      </DropdownItem>
      <DropdownItem asChild>
        <Link href="/me/edit">Edit Profile</Link>
      </DropdownItem>
      <DropdownItem danger onSelect={logout}>
        Logout
      </DropdownItem>
    </DropdownMenu>
  );
};
