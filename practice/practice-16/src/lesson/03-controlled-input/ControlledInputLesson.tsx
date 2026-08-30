import { useState } from 'react'
import type { ChangeEvent } from 'react'

function ControlledInputLesson() {
  const [name, setName] = useState('')

  function handleNameChange(event: ChangeEvent<HTMLInputElement>) {
    setName(event.target.value)
  }

  function handleClearName() {
    setName('')
  }

  const previewName = name.trim() || 'teman'

  return (
    <article className="space-y-6">
      <section className="rounded-xl border bg-white p-6 shadow-sm">
        <p className="text-sm font-semibold text-blue-700">LESSON 3 DARI 7</p>
        <h2 className="mt-2 text-3xl font-bold text-slate-900">onChange dan Controlled Input</h2>
        <p className="mt-3 max-w-3xl text-slate-600">
          Controlled input mengambil nilai dari state dan memperbaruinya melalui onChange. React
          menjadi sumber kebenaran untuk nilai yang terlihat di input.
        </p>
      </section>

      <section className="rounded-xl border bg-white p-6 shadow-sm">
        <label htmlFor="mentee-name" className="font-semibold text-slate-900">
          Nama mentee
        </label>
        <div className="mt-3 flex flex-col gap-3 sm:flex-row">
          <input
            id="mentee-name"
            type="text"
            value={name}
            onChange={handleNameChange}
            placeholder="Contoh: Henry"
            className="min-w-0 flex-1 rounded-lg border px-4 py-3 text-slate-900"
          />
          <button
            type="button"
            onClick={handleClearName}
            disabled={name.length === 0}
            className="rounded-lg border px-4 py-3 font-medium hover:bg-slate-100 disabled:opacity-40"
          >
            Kosongkan input
          </button>
        </div>

        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          <div className="rounded-lg bg-blue-50 p-4" aria-live="polite">
            <p className="text-sm font-medium text-blue-700">Preview langsung</p>
            <p className="mt-1 text-2xl font-bold text-blue-900">Halo, {previewName}!</p>
          </div>
          <div className="rounded-lg bg-slate-100 p-4" aria-live="polite">
            <p className="text-sm font-medium text-slate-600">Jumlah karakter</p>
            <p className="mt-1 text-2xl font-bold text-slate-900">{name.length}</p>
          </div>
        </div>
      </section>

      <section className="rounded-xl border bg-white p-5 shadow-sm">
        <p className="font-semibold text-slate-900">Alur controlled input</p>
        <div className="mt-4 flex flex-wrap items-center gap-2 text-sm font-medium text-slate-700">
          <span className="rounded bg-slate-100 px-3 py-2">Mengetik</span>
          <span>→</span>
          <span className="rounded bg-slate-100 px-3 py-2">onChange</span>
          <span>→</span>
          <span className="rounded bg-blue-100 px-3 py-2">setState</span>
          <span>→</span>
          <span className="rounded bg-blue-100 px-3 py-2">Re-render</span>
          <span>→</span>
          <span className="rounded bg-emerald-100 px-3 py-2">UI berubah</span>
        </div>
        <pre className="mt-4 overflow-x-auto rounded-lg bg-slate-900 p-4 text-sm text-slate-100">
          <code>{`<input
  value={name}
  onChange={handleNameChange}
/>`}</code>
        </pre>
      </section>

      <section className="rounded-xl border border-emerald-200 bg-emerald-50 p-5">
        <p className="mt-2 text-sm text-emerald-800">
          Satu state mengontrol nilai input sekaligus memperbarui preview dan jumlah karakter. Kita
          tidak perlu mengubah setiap bagian layar secara manual.
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border border-blue-200 bg-blue-50 p-5">
          <h3 className="font-semibold text-blue-900">Yang perlu diperhatikan</h3>
          <p className="mt-2 text-sm text-blue-800">
            Tipe <code className="rounded bg-white px-1">ChangeEvent&lt;HTMLInputElement&gt;</code>{' '}
            membantu TypeScript memahami bahwa event berasal dari elemen input.
          </p>
        </div>
        <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-5">
          <h3 className="font-semibold text-emerald-900">Mini challenge</h3>
          <p className="mt-2 text-sm text-emerald-800">
            Tampilkan pesan “Nama cukup panjang” hanya dengan nilai turunan ketika nama memiliki
            lebih dari 10 karakter.
          </p>
        </div>
      </section>
    </article>
  )
}

export default ControlledInputLesson
