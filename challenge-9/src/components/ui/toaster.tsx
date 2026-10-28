import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useToastStore } from "@/store/toastStore";

/**
 * Menampilkan semua toast yang aktif di tengah atas layar.
 * Dipasang sekali di Layout, lalu komponen mana pun bisa memunculkan
 * toast lewat useShowToast() tanpa perlu prop drilling.
 */
const Toaster = () => {
  const toasts = useToastStore((state) => state.toasts);
  const dismissToast = useToastStore((state) => state.dismissToast);

  return (
    <div
      role="status"
      aria-live="polite"
      className="pointer-events-none fixed inset-x-0 top-20 z-50 flex flex-col items-center gap-2 px-4 lg:top-[114px]"
    >
      <AnimatePresence>
        {toasts.map((toast) => (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            onClick={() => dismissToast(toast.id)}
            className="pointer-events-auto flex h-13 w-full max-w-[531px] cursor-pointer items-center justify-center gap-3 rounded-2xl bg-black/25 px-6 backdrop-blur-[40px]"
          >
            {toast.variant === "success" ? (
              <img src="/icons/Check.png" alt="" className="size-6 shrink-0" />
            ) : (
              <X className="size-6 shrink-0 text-primary-200" />
            )}
            <p className="text-sm font-medium text-white lg:text-md">
              {toast.message}
            </p>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default Toaster;
