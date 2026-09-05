import { useState } from "react"


export function TailwindReviewLesson() {
  const [isActive, setIsActive] = useState(false)
  const buttonClass = isActive ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-700"

  return (
    <div className="space-y-8">
      <header>
        <p className="text-sm font-semibold text-blue-600">Lesson 01</p>
        <h2 id="lesson-title-tailwind-review" className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
          Tailwind CSS di dalam React
        </h2>
        <p className="mt-3 max-w-2xl leading-7 text-slate-600">
          React memakai <code>className</code> untuk mengirim class CSS ke element. Utility Tailwind kemudian menentukan spacing, warna, bentuk, dan state visualnya.
        </p>
      </header>

      <div className="rounded-xl border border-blue-200 bg-blue-50 p-4 text-blue-950">
        <p className="font-semibold">React menentukan state dan behavior. Tailwind menentukan tampilan.</p>
      </div>

      <section className="space-y-4" aria-labelledby="native-button-title">
        <div>
          <h3 id="native-button-title" className="text-lg font-semibold">Native button + utility classes</h3>
          <p className="mt-1 text-sm text-slate-500">Perhatikan padding, warna, radius, hover, dan perubahan ukuran teks.</p>
        </div>
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 sm:p-6">
          <button type="button" className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 sm:text-base">
            Simpan
          </button>
          <pre className="mt-4 overflow-x-auto rounded-lg bg-slate-950 p-4 text-sm leading-6 text-slate-100">
            <code>{`<button className="rounded-md bg-blue-600 px-4 py-2 text-white">
  Simpan
</button>`}</code>
          </pre>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="conditional-class-title">
        <div>
          <h3 id="conditional-class-title" className="text-lg font-semibold">Conditional class dari state</h3>
          <p className="mt-1 text-sm text-slate-500">Klik tombol untuk melihat React memilih class berdasarkan state.</p>
        </div>
        <div className="grid gap-4 rounded-xl border border-slate-200 p-5 sm:grid-cols-[auto_1fr] sm:items-center">
          <button
            type="button"
            aria-pressed={isActive}
            onClick={() => setIsActive((current) => !current)}
            className={`rounded-lg px-4 py-2 font-medium transition-colors ${buttonClass}`}
          >
            {isActive ? "Aktif" : "Belum aktif"}
          </button>
          <p className="text-sm leading-6 text-slate-600">
            State saat ini: <strong>{String(isActive)}</strong>. Class warna berubah, tetapi element dan behavior tetap milik React.
          </p>
        </div>
      </section>
    </div>
  )
}
