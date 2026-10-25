import Image from "next/image";

interface AuthShellProps {
  children: React.ReactNode;
}

/**
 * Kerangka halaman Login & Register.
 *
 * Desainnya: layar hitam dengan cahaya ungu besar memancar dari bawah, dan
 * satu kartu kaca di tengah. Cahaya itu dibuat dengan gradien radial
 * (utility `auth-glow`), bukan file gambar, supaya tetap tajam di layar
 * berapa pun ukurannya.
 */
export const AuthShell = ({ children }: AuthShellProps) => (
  <main className="auth-glow flex min-h-screen items-center justify-center px-6 py-12">
    <div className="surface-glass flex w-full max-w-[360px] flex-col gap-4 rounded-2xl px-4 py-8">
      <div className="flex items-center justify-center gap-2">
        <Image
          src="/icons/Logo.png"
          alt=""
          width={30}
          height={30}
          className="size-7"
        />
        <span className="text-display-xs font-bold text-neutral-25">
          Sociality
        </span>
      </div>

      {children}
    </div>
  </main>
);
