"use client";

import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

interface DialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  /** Wajib untuk pembaca layar, boleh disembunyikan secara visual */
  title: string;
  /** Sembunyikan judul tapi tetap umumkan ke pembaca layar */
  hideTitle?: boolean;
  children: React.ReactNode;
  className?: string;
  /** Posisi tombol tutup; sebagian frame menaruhnya di luar kartu */
  closeClassName?: string;
}

/**
 * Modal aplikasi, dibangun di atas Radix Dialog.
 *
 * Radix yang mengurus bagian yang mudah terlupakan: fokus terkunci di dalam
 * modal, Esc menutup, scroll halaman dikunci, dan latar belakang
 * disembunyikan dari pembaca layar.
 *
 * Tampilannya mengikuti desain: latar gelap pekat dengan blur, kartu
 * membulat, dan tombol silang di pojok kanan atas.
 */
export const Dialog = ({
  open,
  onOpenChange,
  title,
  hideTitle = true,
  children,
  className,
  closeClassName,
}: DialogProps) => (
  <DialogPrimitive.Root open={open} onOpenChange={onOpenChange}>
    <DialogPrimitive.Portal>
      <DialogPrimitive.Overlay className="data-[state=open]:animate-overlay-in fixed inset-0 z-50 bg-black/70 backdrop-blur-[2px]" />

      <DialogPrimitive.Content
        className={cn(
          "data-[state=open]:animate-dialog-in fixed top-1/2 left-1/2 z-50 w-[calc(100%-2rem)] max-w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-neutral-900 bg-neutral-950 p-4 outline-none",
          className,
        )}
      >
        {hideTitle ? (
          <DialogPrimitive.Title className="sr-only">
            {title}
          </DialogPrimitive.Title>
        ) : (
          <DialogPrimitive.Title className="mb-4 text-lg font-bold text-neutral-25">
            {title}
          </DialogPrimitive.Title>
        )}

        {children}

        <DialogPrimitive.Close
          aria-label="Close"
          className={cn(
            "absolute top-4 right-4 cursor-pointer text-neutral-25 transition-opacity hover:opacity-70",
            closeClassName,
          )}
        >
          <X className="size-5" />
        </DialogPrimitive.Close>
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  </DialogPrimitive.Root>
);
