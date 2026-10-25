import { Button } from "@/components/ui/button";

interface ErrorStateProps {
  /** Pesan apa adanya dari API — lebih berguna daripada kalimat umum */
  message?: string;
  onRetry?: () => void;
}

/** Tampilan ketika permintaan ke server gagal, dengan tombol coba lagi */
export const ErrorState = ({ message, onRetry }: ErrorStateProps) => (
  <div className="flex flex-col items-center justify-center gap-3 px-6 py-16 text-center">
    <h2 className="text-md font-bold text-neutral-25">Something went wrong</h2>
    {message && (
      <p className="max-w-[320px] text-sm text-neutral-400">{message}</p>
    )}
    {onRetry && (
      <Button variant="outline" size="sm" onClick={onRetry} className="mt-2">
        Try Again
      </Button>
    )}
  </div>
);
