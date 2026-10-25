"use client";

import * as DropdownPrimitive from "@radix-ui/react-dropdown-menu";
import { cn } from "@/lib/utils";

interface DropdownMenuProps {
  trigger: React.ReactNode;
  children: React.ReactNode;
  align?: "start" | "center" | "end";
}

/**
 * Menu dropdown kecil.
 *
 * Radix yang mengurus perilaku yang mudah terlupakan: menutup saat diklik di
 * luar atau Esc ditekan, navigasi dengan panah atas/bawah, dan fokus kembali
 * ke tombol pemicunya setelah ditutup.
 */
export const DropdownMenu = ({
  trigger,
  children,
  align = "end",
}: DropdownMenuProps) => (
  <DropdownPrimitive.Root>
    <DropdownPrimitive.Trigger asChild>{trigger}</DropdownPrimitive.Trigger>

    <DropdownPrimitive.Portal>
      <DropdownPrimitive.Content
        align={align}
        sideOffset={8}
        className="z-50 min-w-[180px] overflow-hidden rounded-xl border border-neutral-800 bg-neutral-950 py-1.5 shadow-xl"
      >
        {children}
      </DropdownPrimitive.Content>
    </DropdownPrimitive.Portal>
  </DropdownPrimitive.Root>
);

interface DropdownItemProps {
  onSelect?: () => void;
  danger?: boolean;
  children: React.ReactNode;
  asChild?: boolean;
}

export const DropdownItem = ({
  onSelect,
  danger,
  children,
  asChild,
}: DropdownItemProps) => (
  <DropdownPrimitive.Item
    asChild={asChild}
    onSelect={onSelect}
    className={cn(
      "block cursor-pointer px-4 py-2.5 text-sm outline-none select-none data-[highlighted]:bg-neutral-900",
      danger ? "text-accent-red" : "text-neutral-25",
    )}
  >
    {children}
  </DropdownPrimitive.Item>
);
