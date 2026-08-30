import { useState } from 'react'

function StateLesson() {
  const [count, setCount] = useState(0)
  let regularCount = 0

  function handleRegularIncrement() {
    regularCount = regularCount + 1
  }

  function handleIncrement() {
    setCount((currentCount) => currentCount + 1)
  }

  function handleDecrement() {
    setCount((currentCount) => Math.max(0, currentCount - 1))
  }

  function handleReset() {
    setCount(0)
  }

  return (
    <article className="space-y-6">
      <section className="rounded-xl border bg-white p-6 shadow-sm">
        <p className="text-sm font-semibold text-blue-700">LESSON 1 DARI 7</p>
        <h2 className="mt-2 text-3xl font-bold text-slate-900">State dan Rendering</h2>
        <p className="mt-3 max-w-3xl text-slate-600">
          Regular variable dapat berubah, tetapi perubahan itu tidak memberi tahu React untuk
          memperbarui layar. Setter state menyimpan nilai sekaligus meminta React melakukan render
          ulang.
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border bg-white p-5 shadow-sm">
          <p className="font-semibold text-slate-900">Regular variable</p>
          <code className="mt-2 block text-sm text-slate-500">let regularCount = 0</code>
          <p className="my-5 text-5xl font-bold text-slate-400">{regularCount}</p>
          <button
            type="button"
            onClick={handleRegularIncrement}
            className="rounded-lg border px-4 py-2 font-medium hover:bg-slate-100"
          >
            Ubah variable
          </button>
          <p className="mt-3 text-sm text-slate-500">
            Klik tombolnya. Nilai berubah di event handler, tetapi layar tetap menampilkan 0.
          </p>
        </div>

        <div className="rounded-xl border border-blue-200 bg-blue-50 p-5 shadow-sm">
          <p className="font-semibold text-blue-900">React state</p>
          <code className="mt-2 block text-sm text-blue-700">
            const [count, setCount] = useState(0)
          </code>
          <p className="my-5 text-5xl font-bold text-blue-700" aria-live="polite">
            {count}
          </p>
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={handleIncrement}
              className="rounded-lg bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700"
            >
              Tambah
            </button>
            <button
              type="button"
              onClick={handleDecrement}
              disabled={count === 0}
              className="rounded-lg border bg-white px-4 py-2 font-medium disabled:opacity-50"
            >
              Kurang
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="rounded-lg border bg-white px-4 py-2 font-medium hover:bg-slate-100"
            >
              Reset
            </button>
          </div>
          <p className="mt-3 text-sm text-blue-800">
            Setter state membuat angka di layar ikut berubah.
          </p>
        </div>
      </section>

      <section className="rounded-xl border bg-white p-5 shadow-sm">
        <p className="font-semibold text-slate-900">Alur perubahan state</p>
        <div className="mt-4 flex flex-wrap items-center gap-2 text-sm font-medium text-slate-700">
          <span className="rounded bg-slate-100 px-3 py-2">User Action</span>
          <span>→</span>
          <span className="rounded bg-slate-100 px-3 py-2">Event Handler</span>
          <span>→</span>
          <span className="rounded bg-blue-100 px-3 py-2">State Changes</span>
          <span>→</span>
          <span className="rounded bg-blue-100 px-3 py-2">Re-render</span>
          <span>→</span>
          <span className="rounded bg-emerald-100 px-3 py-2">UI Updates</span>
        </div>
        <p className="mt-4 text-sm text-slate-600">
          Functional update membaca nilai state terbaru melalui parameter
          <code className="mx-1 rounded bg-slate-100 px-1">currentCount</code>, lalu menghasilkan
          nilai berikutnya.
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border border-blue-200 bg-blue-50 p-5">
          <h3 className="font-semibold text-blue-900">Yang perlu diperhatikan</h3>
          <p className="mt-2 text-sm text-blue-800">
            Jangan mengubah state secara langsung. Selalu gunakan setter seperti
            <code className="mx-1 rounded bg-white px-1">setCount</code> agar React tahu kapan UI
            perlu diperbarui.
          </p>
        </div>
        <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-5">
          <h3 className="font-semibold text-emerald-900">Mini challenge</h3>
          <p className="mt-2 text-sm text-emerald-800">
            Tambahkan tombol “+5” dengan functional update, lalu pastikan tombol Kurang tetap tidak
            dapat menghasilkan angka negatif.
          </p>
        </div>
      </section>
    </article>
  )
}

export default StateLesson
