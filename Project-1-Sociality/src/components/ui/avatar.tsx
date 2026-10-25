"use client";

import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { cn, initialOf } from "@/lib/utils";

interface AvatarProps {
  src?: string | null;
  name?: string | null;
  /** Ukuran sisi dalam piksel */
  size?: number;
  className?: string;
}

/**
 * Foto profil bulat.
 *
 * Memakai Radix Avatar supaya huruf awal nama otomatis tampil ketika
 * gambarnya kosong atau gagal dimuat — kejadian yang sering terjadi di sini
 * karena `avatarUrl` dari API bisa bernilai null.
 */
export const Avatar = ({ src, name, size = 40, className }: AvatarProps) => (
  <AvatarPrimitive.Root
    style={{ width: size, height: size }}
    className={cn(
      "inline-flex shrink-0 overflow-hidden rounded-full bg-neutral-800 align-middle select-none",
      className,
    )}
  >
    {src && (
      <AvatarPrimitive.Image
        src={src}
        alt={name ?? ""}
        className="size-full object-cover"
      />
    )}
    <AvatarPrimitive.Fallback
      delayMs={src ? 300 : 0}
      className="flex size-full items-center justify-center bg-neutral-800 font-bold text-neutral-25"
      style={{ fontSize: Math.max(12, size * 0.4) }}
    >
      {initialOf(name)}
    </AvatarPrimitive.Fallback>
  </AvatarPrimitive.Root>
);
