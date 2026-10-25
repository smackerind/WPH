"use client";

import * as TabsPrimitive from "@radix-ui/react-tabs";
import Image from "next/image";
import { cn } from "@/lib/utils";

export interface TabItem {
  value: string;
  label: string;
  /** Ikon dari folder public/icons */
  icon: string;
}

interface ProfileTabsProps {
  items: TabItem[];
  value: string;
  onValueChange: (value: string) => void;
  children: React.ReactNode;
}

/**
 * Tab pada halaman profil (Gallery / Saved / Liked).
 *
 * Tab yang aktif ditandai garis putih tebal di bawahnya, sesuai desain.
 * Memakai Radix Tabs supaya panah kiri/kanan di keyboard bekerja.
 */
export const ProfileTabs = ({
  items,
  value,
  onValueChange,
  children,
}: ProfileTabsProps) => (
  <TabsPrimitive.Root value={value} onValueChange={onValueChange}>
    <TabsPrimitive.List className="flex w-full border-b border-neutral-900">
      {items.map((item) => (
        <TabsPrimitive.Trigger
          key={item.value}
          value={item.value}
          className={cn(
            "flex flex-1 cursor-pointer items-center justify-center gap-2 border-b-2 pb-3 text-sm font-bold transition-colors",
            value === item.value
              ? "border-neutral-25 text-neutral-25"
              : "border-transparent text-neutral-500 hover:text-neutral-300",
          )}
        >
          <Image
            src={item.icon}
            alt=""
            width={20}
            height={20}
            className={cn(
              "size-5",
              value === item.value ? "opacity-100" : "opacity-50",
            )}
          />
          {item.label}
        </TabsPrimitive.Trigger>
      ))}
    </TabsPrimitive.List>

    {children}
  </TabsPrimitive.Root>
);

export const TabPanel = TabsPrimitive.Content;
