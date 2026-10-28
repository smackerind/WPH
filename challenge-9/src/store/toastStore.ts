import { create } from "zustand";

export interface Toast {
  id: number;
  message: string;
  /** success memakai ikon centang, error memakai ikon silang */
  variant: "success" | "error";
}

interface ToastState {
  toasts: Toast[];
  showToast: (message: string, variant?: Toast["variant"]) => void;
  dismissToast: (id: number) => void;
}

/** Toast hilang sendiri setelah 2,5 detik */
const TOAST_DURATION = 2500;

let nextId = 0;

/**
 * Store kecil untuk notifikasi melayang.
 * Dipisah dari store favorites karena urusannya beda: yang satu data,
 * yang satu tampilan sementara.
 */
export const useToastStore = create<ToastState>((set) => ({
  toasts: [],

  showToast: (message, variant = "success") => {
    const id = nextId++;
    set((state) => ({ toasts: [...state.toasts, { id, message, variant }] }));

    setTimeout(() => {
      set((state) => ({
        toasts: state.toasts.filter((toast) => toast.id !== id),
      }));
    }, TOAST_DURATION);
  },

  dismissToast: (id) =>
    set((state) => ({ toasts: state.toasts.filter((toast) => toast.id !== id) })),
}));

/** Dipakai komponen yang hanya perlu memunculkan toast */
export const useShowToast = () => useToastStore((state) => state.showToast);
