"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { AnimatePresence, motion } from "motion/react";
import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { contactContent } from "@/features/contact/data";
import { modalPop } from "@/lib/motion";
import { cn } from "@/lib/utils";

export type ResultKind = "success" | "failed" | null;

interface ResultModalProps {
  kind: ResultKind;
  onClose: () => void;
}

/**
 * Modal hasil pengiriman pesan (frame "Success" dan "Failed").
 *
 * Satu komponen untuk dua keadaan karena bentuknya sama persis di desain;
 * hanya ikon, warna, dan teksnya yang berbeda.
 *
 * Radix Dialog dipakai supaya fokus terkunci di dalam modal, Esc menutup,
 * dan latar belakang tidak bisa di-tab — hal-hal yang mudah terlewat kalau
 * modal ditulis dari nol. Animasinya ditangani motion lewat `asChild`,
 * dengan `forceMount` agar animasi keluar sempat berjalan.
 */
export const ResultModal = ({ kind, onClose }: ResultModalProps) => {
  const isSuccess = kind === "success";
  const copy = isSuccess ? contactContent.success : contactContent.failed;

  return (
    <Dialog.Root open={kind !== null} onOpenChange={(open) => !open && onClose()}>
      <AnimatePresence>
        {kind !== null && (
          <Dialog.Portal forceMount>
            {/* Latar gelap */}
            <Dialog.Overlay asChild forceMount>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 z-70 bg-base-black/80 backdrop-blur-sm"
              />
            </Dialog.Overlay>

            <Dialog.Content asChild forceMount>
              <motion.div
                variants={modalPop}
                initial="hidden"
                animate="show"
                exit="exit"
                className="fixed top-1/2 left-1/2 z-80 w-[calc(100%-48px)] max-w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-3xl border border-neutral-800 bg-neutral-950 px-6 pt-14 pb-8 text-center"
              >
                {/* Ikon bulat yang setengah keluar dari kartu, seperti desain */}
                <motion.span
                  initial={{ scale: 0.4, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.1, type: "spring", stiffness: 260, damping: 18 }}
                  className={cn(
                    "absolute -top-10 left-1/2 flex size-20 -translate-x-1/2 items-center justify-center rounded-full",
                    isSuccess ? "bg-primary-200" : "bg-accent-error",
                  )}
                >
                  {isSuccess ? (
                    <Check className="size-9 text-base-black" aria-hidden />
                  ) : (
                    <X className="size-9 text-base-white" aria-hidden />
                  )}
                </motion.span>

                <Dialog.Title className="text-xl font-bold text-neutral-25">
                  {copy.title}
                </Dialog.Title>
                <Dialog.Description className="mt-2 text-sm text-neutral-400">
                  {copy.description}
                </Dialog.Description>

                <Dialog.Close asChild>
                  <Button full size="md" className="mt-6">
                    {copy.action}
                  </Button>
                </Dialog.Close>
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  );
};
