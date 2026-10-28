import { useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { movieService } from "@/services/movieService";
import { findTrailer } from "@/lib/utils";
import { useShowToast } from "@/store/toastStore";

interface TrailerDialogProps {
  movieId: number;
  title: string;
  /** Kunci YouTube kalau sudah tersedia (halaman detail), agar tidak fetch lagi */
  trailerKey?: string | null;
  className?: string;
}

/**
 * Tombol "Watch Trailer".
 * Alurnya: klik → ambil data video (kalau belum ada) → kalau trailer ketemu
 * dialog terbuka, kalau tidak ada muncul toast, kalau gagal muncul pesan error.
 */
const TrailerDialog = ({
  movieId,
  title,
  trailerKey,
  className,
}: TrailerDialogProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [resolvedKey, setResolvedKey] = useState<string | null>(
    trailerKey ?? null,
  );

  const queryClient = useQueryClient();
  const showToast = useShowToast();

  const handleClick = async () => {
    // Halaman detail sudah membawa trailer lewat props, langsung buka
    if (resolvedKey) {
      setIsOpen(true);
      return;
    }

    setIsLoading(true);

    try {
      // fetchQuery memakai cache React Query yang sama dengan hook lain,
      // jadi film yang trailernya sudah pernah diambil tidak di-request ulang
      const data = await queryClient.fetchQuery({
        queryKey: ["movie", movieId, "videos"],
        queryFn: () => movieService.getMovieVideos(movieId),
        staleTime: 5 * 60 * 1000,
      });

      const key = findTrailer(data.results)?.key ?? null;

      if (key) {
        setResolvedKey(key);
        setIsOpen(true);
      } else {
        showToast("Haven't Trailers", "error");
      }
    } catch (error) {
      showToast(
        error instanceof Error ? error.message : "Gagal memuat trailer",
        "error",
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Button onClick={handleClick} disabled={isLoading} className={className}>
        {isLoading ? "Loading…" : "Watch Trailer"}
        <img src="/icons/Play.svg" alt="" className="size-[18px] lg:size-6" />
      </Button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent>
          <DialogTitle className="sr-only">{`${title} — trailer`}</DialogTitle>
          <DialogDescription className="sr-only">
            Video trailer resmi dari YouTube.
          </DialogDescription>

          <div className="aspect-video w-full overflow-hidden rounded-xl bg-black">
            {resolvedKey && (
              <iframe
                src={`https://www.youtube.com/embed/${resolvedKey}?autoplay=1`}
                title={`${title} trailer`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="size-full"
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default TrailerDialog;
