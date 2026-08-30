import { useEffect, useState } from 'react'

// Union type membatasi nilai theme hanya pada dua pilihan yang valid.
type Theme = 'terang' | 'gelap'

function UseEffectDependenciesLesson() {
  // Dua state terpisah membantu menunjukkan bahwa setiap render tidak selalu memicu effect.
  const [completedCount, setCompletedCount] = useState(0)
  const [theme, setTheme] = useState<Theme>('terang')
  const [lastAction, setLastAction] = useState('Belum ada interaksi')

  // Effect membaca completedCount, sehingga value itu wajib menjadi dependency.
  useEffect(() => {
    document.title = `Topik selesai: ${completedCount}`

    // Cleanup merapikan judul sebelum setup berikutnya atau saat component dilepas.
    return () => {
      document.title = 'Hooks Lanjutan — Meet 17'
    }
  }, [completedCount])

  function handleAddCompleted() {
    // Functional update menjamin perhitungan memakai state paling baru.
    setCompletedCount((currentCount) => currentCount + 1)
    setLastAction('completedCount berubah → effect perlu sinkronisasi')
  }

  function handleRemoveCompleted() {
    setCompletedCount((currentCount) => Math.max(0, currentCount - 1))
    setLastAction('completedCount berubah → effect perlu sinkronisasi')
  }

  function handleToggleTheme() {
    setTheme((currentTheme) => (currentTheme === 'terang' ? 'gelap' : 'terang'))
    // Theme memicu render, tetapi bukan dependency effect document title.
    setLastAction('theme berubah → render ulang, effect title tidak perlu berjalan')
  }

  // Tampilan ini bisa dihitung langsung dari theme; tidak perlu state tambahan.
  const panelClass =
    theme === 'terang'
      ? 'border-blue-200 bg-blue-50 text-blue-950'
      : 'border-slate-700 bg-slate-900 text-white'

  return (
    <article className="space-y-6">
      <section className="rounded-xl border bg-white p-6 shadow-sm">
        <p className="text-sm font-semibold text-blue-700">LESSON 2 DARI 8</p>
        <h2 className="mt-2 text-3xl font-bold text-slate-900">Dependency Array</h2>
        <p className="mt-3 max-w-3xl text-slate-600">
          Dependency memberitahu React kapan sinkronisasi perlu diulang. Component boleh render
          ulang karena state lain tanpa menjalankan semua effect kembali.
        </p>
        <p className="mt-4 rounded-lg bg-slate-100 p-4 text-sm text-slate-700">
          <strong>Tujuan:</strong> membedakan effect tanpa array, dengan <code>[]</code>, dan dengan
          dependency tertentu.
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        <div className="rounded-xl border bg-white p-4 shadow-sm">
          <p className="font-semibold text-slate-900">Tanpa array</p>
          <code className="mt-2 block text-sm text-slate-600">useEffect(() =&gt; {'{ ... }'})</code>
          <p className="mt-2 text-sm text-slate-500">Setelah setiap render.</p>
        </div>
        <div className="rounded-xl border bg-white p-4 shadow-sm">
          <p className="font-semibold text-slate-900">Array kosong</p>
          <code className="mt-2 block text-sm text-slate-600">
            useEffect(() =&gt; {'{ ... }'}, [])
          </code>
          <p className="mt-2 text-sm text-slate-500">Saat component dipasang.</p>
        </div>
        <div className="rounded-xl border border-blue-200 bg-blue-50 p-4 shadow-sm">
          <p className="font-semibold text-blue-900">Dependency terpilih</p>
          <code className="mt-2 block text-sm text-blue-800">
            useEffect(() =&gt; {'{ ... }'}, [completedCount])
          </code>
          <p className="mt-2 text-sm text-blue-700">Saat completedCount berubah.</p>
        </div>
      </section>

      <section className={`rounded-xl border p-5 shadow-sm ${panelClass}`}>
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase">Demo dua state</p>
            <p className="mt-2 text-4xl font-bold">{completedCount}</p>
            <p className="text-sm">topik selesai • tema {theme}</p>
          </div>
          <span className="rounded-full bg-white px-3 py-1 text-sm font-medium text-slate-800">
            Tab: Topik selesai: {completedCount}
          </span>
        </div>
        <div className="mt-5 flex flex-wrap gap-2">
          <button
            type="button"
            onClick={handleAddCompleted}
            className="rounded-lg bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700"
          >
            Tambah selesai
          </button>
          <button
            type="button"
            onClick={handleRemoveCompleted}
            disabled={completedCount === 0}
            className="rounded-lg border bg-white px-4 py-2 font-medium text-slate-800 disabled:opacity-40"
          >
            Kurangi
          </button>
          <button
            type="button"
            onClick={handleToggleTheme}
            className="rounded-lg border bg-white px-4 py-2 font-medium text-slate-800 hover:bg-slate-100"
          >
            Ganti tema
          </button>
        </div>
        <p className="mt-4 rounded-lg bg-white p-3 text-sm text-slate-800" aria-live="polite">
          {lastAction}
        </p>
      </section>

      <section className="rounded-xl border bg-white p-5 shadow-sm">
        <h3 className="font-semibold text-slate-900">Visual dependency</h3>
        <div className="mt-4 flex flex-wrap items-center gap-2 text-sm font-medium">
          <span className="rounded bg-slate-100 px-3 py-2">State berubah</span>
          <span>→</span>
          <span className="rounded bg-blue-100 px-3 py-2">Component render</span>
          <span>→</span>
          <span className="rounded bg-emerald-100 px-3 py-2">Bandingkan dependency</span>
          <span>→</span>
          <span className="rounded bg-emerald-100 px-3 py-2">Effect jika diperlukan</span>
        </div>
        <p className="mt-4 border-l-4 border-blue-500 pl-4 text-sm text-slate-700">
          Component dapat render ulang, tetapi tidak semua effect harus
          dijalankan ulang.
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        <div className="rounded-xl border border-blue-200 bg-blue-50 p-5">
          <h3 className="font-semibold text-blue-900">Yang perlu diperhatikan</h3>
          <p className="mt-2 text-sm text-blue-800">
            Masukkan semua value reaktif yang dibaca effect. Jangan mematikan aturan dependency.
          </p>
        </div>
        <div className="rounded-xl border border-red-200 bg-red-50 p-5">
          <h3 className="font-semibold text-red-900">Kesalahan umum</h3>
          <p className="mt-2 text-sm text-red-800">
            Menggunakan effect untuk menghitung nilai turunan yang bisa dihitung langsung saat
            render.
          </p>
        </div>
        <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-5">
          <h3 className="font-semibold text-emerald-900">Mini challenge</h3>
          <p className="mt-2 text-sm text-emerald-800">
            Tambahkan nama sesi ke document title dan tentukan dependency yang benar.
          </p>
        </div>
      </section>
    </article>
  )
}

export default UseEffectDependenciesLesson
