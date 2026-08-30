import { useRef, useState } from 'react'
import type { ChangeEvent } from 'react'

function UseRefLesson() {
  // searchQuery harus menjadi state karena nilainya ditampilkan kembali pada input dan preview.
  // Setiap kali state berubah, React melakukan render ulang agar UI menampilkan value terbaru.
  const [searchQuery, setSearchQuery] = useState('')

  // Generic HTMLInputElement memberi tahu TypeScript bahwa ref ini akan menunjuk ke elemen input.
  // Nilai awal null karena elemen DOM belum tersedia sebelum hasil render dipasang ke halaman.
  const inputRef = useRef<HTMLInputElement>(null)

  function handleSearchChange(event: ChangeEvent<HTMLInputElement>) {
    // Setiap ketikan menghasilkan event. Value terbaru disimpan ke state agar input dikontrol React.
    setSearchQuery(event.target.value)
  }

  function handleFocusInput() {
    // current berisi elemen input setelah render. Tanda ?. mencegah error jika current masih null.
    inputRef.current?.focus()
  }

  function handleClearAndFocus() {
    // State mengosongkan isi yang terlihat, kemudian ref memindahkan cursor ke input yang sama.
    // Mengubah ref tidak memicu render; perubahan UI pada contoh ini tetap berasal dari state.
    setSearchQuery('')
    inputRef.current?.focus()
  }

  return (
    <article className="space-y-6">
      <section className="rounded-xl border bg-white p-6 shadow-sm">
        <p className="text-sm font-semibold text-blue-700">LESSON 4 DARI 8</p>
        <h2 className="mt-2 text-3xl font-bold text-slate-900">useRef untuk Focus Input</h2>
        <p className="mt-3 max-w-3xl text-slate-600">
          Ref menghubungkan React dengan elemen DOM. Kita dapat memindahkan focus tanpa mencari
          elemen melalui <code>document.querySelector</code>.
        </p>
        <p className="mt-4 rounded-lg bg-slate-100 p-4 text-sm text-slate-700">
          <strong>Tujuan:</strong> membuat DOM reference bertipe aman dan memahami perbedaan ref
          dengan state.
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border bg-white p-5 shadow-sm">
          <label htmlFor="ref-search" className="font-semibold text-slate-900">
            Cari topik belajar
          </label>
          {/* Setelah input terpasang, React mengisi inputRef.current dengan elemen DOM ini. */}
          <input
            ref={inputRef}
            id="ref-search"
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Contoh: useEffect"
            className="mt-3 w-full rounded-lg border px-3 py-2 text-slate-900"
          />
          <div className="mt-3 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={handleFocusInput}
              className="rounded-lg bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700"
            >
              Fokus ke input
            </button>
            <button
              type="button"
              onClick={handleClearAndFocus}
              className="rounded-lg border px-4 py-2 font-medium hover:bg-slate-100"
            >
              Kosongkan dan fokus
            </button>
          </div>
          <p className="mt-4 rounded-lg bg-blue-50 p-3 text-sm text-blue-900" aria-live="polite">
            Preview: {searchQuery || 'Belum ada kata pencarian'}
          </p>
        </div>

        <div className="rounded-xl border bg-slate-900 p-5 text-slate-100 shadow-sm">
          <p className="font-semibold">Ref bertipe DOM element</p>
          <pre className="mt-3 overflow-x-auto text-sm text-blue-200">
            <code>{`const inputRef =
  useRef<HTMLInputElement>(null);

function handleFocusInput() {
  inputRef.current?.focus();
}

<input ref={inputRef} />`}</code>
          </pre>
          <p className="mt-3 text-sm text-slate-300">
            Optional chaining <code>?.</code> mencegah error ketika element belum tersedia.
          </p>
        </div>
      </section>

      <section className="rounded-xl border bg-white p-5 shadow-sm">
        <h3 className="font-semibold text-slate-900">State dan ref punya tugas berbeda</h3>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <div className="rounded-lg bg-blue-50 p-4 text-sm text-blue-900">
            <strong>State</strong>
            <p className="mt-1">Menyimpan searchQuery karena nilainya memengaruhi preview UI.</p>
          </div>
          <div className="rounded-lg bg-emerald-50 p-4 text-sm text-emerald-900">
            <strong>Ref</strong>
            <p className="mt-1">Menyimpan DOM reference tanpa menyebabkan render ulang.</p>
          </div>
        </div>
        <div className="mt-4 flex flex-wrap items-center gap-2 text-sm font-medium">
          <span className="rounded bg-slate-100 px-3 py-2">inputRef</span>
          <span>→</span>
          <span className="rounded bg-blue-100 px-3 py-2">.current</span>
          <span>→</span>
          <span className="rounded bg-emerald-100 px-3 py-2">elemen input</span>
          <span>→</span>
          <span className="rounded bg-emerald-100 px-3 py-2">focus()</span>
        </div>
        <p className="mt-4 border-l-4 border-blue-500 pl-4 text-sm text-slate-700">
          React dapat mengontrol UI melalui state dan mengakses elemen DOM
          secara langsung melalui ref.
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        <div className="rounded-xl border border-blue-200 bg-blue-50 p-5">
          <h3 className="font-semibold text-blue-900">Yang perlu diperhatikan</h3>
          <p className="mt-2 text-sm text-blue-800">
            Gunakan ref untuk DOM atau nilai yang tidak perlu tampil. Jangan membaca atau menulis
            <code> ref.current</code> saat render.
          </p>
        </div>
        <div className="rounded-xl border border-red-200 bg-red-50 p-5">
          <h3 className="font-semibold text-red-900">Kesalahan umum</h3>
          <p className="mt-2 text-sm text-red-800">
            Lupa memasang <code>ref={'{inputRef}'}</code> pada input atau memakai ref untuk data
            yang seharusnya memperbarui UI.
          </p>
        </div>
        <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-5">
          <h3 className="font-semibold text-emerald-900">Mini challenge</h3>
          <p className="mt-2 text-sm text-emerald-800">
            Setelah mengosongkan pencarian, pastikan cursor langsung kembali ke input.
          </p>
        </div>
      </section>
    </article>
  )
}

export default UseRefLesson
