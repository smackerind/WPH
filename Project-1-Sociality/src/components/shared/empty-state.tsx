interface EmptyStateProps {
  title: string;
  description?: string;
  action?: React.ReactNode;
  className?: string;
}

/**
 * Tampilan untuk keadaan kosong — dipakai di galeri tanpa post, komentar
 * kosong, hasil pencarian nihil, dan timeline yang belum berisi apa pun.
 *
 * Teksnya sengaja diatur dari luar supaya tiap halaman bisa memberi kalimat
 * yang sesuai konteksnya, bukan satu kalimat umum untuk semua.
 */
export const EmptyState = ({
  title,
  description,
  action,
  className,
}: EmptyStateProps) => (
  <div
    className={`flex flex-col items-center justify-center gap-2 px-6 py-16 text-center ${className ?? ""}`}
  >
    <h2 className="text-md font-bold text-neutral-25">{title}</h2>
    {description && (
      <p className="max-w-[320px] text-sm text-neutral-400">{description}</p>
    )}
    {action && <div className="mt-4">{action}</div>}
  </div>
);
