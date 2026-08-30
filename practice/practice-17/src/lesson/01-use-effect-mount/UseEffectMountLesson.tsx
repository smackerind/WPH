import { useEffect, useState } from 'react'

function UseEffectMountLesson() {
  // State ini hanya menyimpan judul yang dibaca saat pengguna menekan tombol.
  const [observedTitle, setObservedTitle] = useState('Belum diperiksa')

  // Effect berjalan setelah hasil render dipasang ke DOM browser.
  useEffect(() => {
    // Simpan nilai lama agar perubahan pada sistem eksternal dapat dipulihkan.
    const previousTitle = document.title
    document.title = 'Meet 17 — Hooks Lanjutan'

    // Cleanup dijalankan saat component dilepas, misalnya ketika pindah lesson.
    return () => {
      document.title = previousTitle
    }
    // Array kosong berarti effect tidak bergantung pada state atau props component.
  }, [])

  function handleCheckTitle() {
    // Berbeda dari effect, handler ini hanya berjalan karena aksi klik pengguna.
    setObservedTitle(document.title)
  }

  return (
    <article className="space-y-6">
      <section className="rounded-xl border bg-white p-6 shadow-sm">
        <p className="text-sm font-semibold text-blue-700">LESSON 1 DARI 8</p>
        <h2 className="mt-2 text-3xl font-bold text-slate-900">useEffect Saat Mount</h2>
        <p className="mt-3 max-w-3xl text-slate-600">
          Effect dipakai untuk menyinkronkan component dengan sistem di luar React. Pada demo ini,
          UI selesai diperbarui lebih dahulu, lalu effect mengubah judul tab browser.
        </p>
        <div className="mt-4 rounded-lg bg-slate-100 p-4 text-sm text-slate-700">
          <p className="font-semibold">Tujuan belajar</p>
          <p className="mt-1">
            Mengenali side effect, waktu effect berjalan, dan arti dependency array kosong.
          </p>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border bg-white p-5 shadow-sm">
          <h3 className="font-semibold text-slate-900">Demo document title</h3>
          <p className="mt-2 text-sm text-slate-600">
            Lihat judul tab browser, lalu gunakan tombol untuk membaca hasil sinkronisasinya.
          </p>
          <button
            type="button"
            onClick={handleCheckTitle}
            className="mt-4 rounded-lg bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700"
          >
            Periksa judul tab
          </button>
          <p className="mt-4 rounded-lg bg-blue-50 p-3 text-sm text-blue-900" aria-live="polite">
            Judul yang terbaca: <strong>{observedTitle}</strong>
          </p>
        </div>

        <div className="rounded-xl border bg-slate-900 p-5 text-slate-100 shadow-sm">
          <p className="font-semibold">Kode utama</p>
          <pre className="mt-3 overflow-x-auto text-sm text-blue-200">
            <code>{`useEffect(() => {
  document.title =
    "Meet 17 — Hooks Lanjutan";
}, []);`}</code>
          </pre>
          <p className="mt-3 text-sm text-slate-300">
            Cleanup pada demo juga mengembalikan judul sebelumnya ketika lesson ditinggalkan.
          </p>
        </div>
      </section>

      <section className="rounded-xl border bg-white p-5 shadow-sm">
        <h3 className="font-semibold text-slate-900">Alur effect saat mount</h3>
        <div className="mt-4 flex flex-wrap items-center gap-2 text-sm font-medium">
          <span className="rounded bg-slate-100 px-3 py-2">Component render</span>
          <span>↓</span>
          <span className="rounded bg-blue-100 px-3 py-2">UI diperbarui</span>
          <span>↓</span>
          <span className="rounded bg-emerald-100 px-3 py-2">Effect dijalankan</span>
          <span>↓</span>
          <span className="rounded bg-emerald-100 px-3 py-2">Document title berubah</span>
        </div>
        <p className="mt-4 border-l-4 border-blue-500 pl-4 text-sm text-slate-700">
          Event handler berjalan karena tindakan pengguna, sedangkan effect
          berjalan sebagai akibat dari render dan dependency.
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        <div className="rounded-xl border border-blue-200 bg-blue-50 p-5">
          <h3 className="font-semibold text-blue-900">Yang perlu diperhatikan</h3>
          <p className="mt-2 text-sm text-blue-800">
            Dalam development Strict Mode, React dapat menjalankan setup dan cleanup tambahan untuk
            membantu menemukan bug. Karena itu, jangan menyebut <code>[]</code> “pasti hanya
            sekali”.
          </p>
        </div>
        <div className="rounded-xl border border-red-200 bg-red-50 p-5">
          <h3 className="font-semibold text-red-900">Kesalahan umum</h3>
          <p className="mt-2 text-sm text-red-800">
            Menaruh perubahan document title di body component atau menganggap effect berjalan
            sebelum UI diperbarui.
          </p>
        </div>
        <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-5">
          <h3 className="font-semibold text-emerald-900">Mini challenge</h3>
          <p className="mt-2 text-sm text-emerald-800">
            Gunakan judul sesi pada document title, lalu simpan dan kembalikan judul sebelumnya
            melalui cleanup.
          </p>
        </div>
      </section>
    </article>
  )
}

export default UseEffectMountLesson
