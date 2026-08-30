import { useState } from 'react'

function ProfileWithDiv() {
  return (
    <div className="rounded-lg border-2 border-dashed border-red-300 p-4">
      <h3 className="text-xl font-bold text-slate-900">Henry Rivardo</h3>
      <p className="mt-1 text-slate-600">Software Engineer</p>
    </div>
  )
}

function ProfileWithFragment() {
  return (
    <>
      <h3 className="text-xl font-bold text-slate-900">Henry Rivardo</h3>
      <p className="mt-1 text-slate-600">Software Engineer</p>
    </>
  )
}

function FragmentLesson() {
  const [useFragment, setUseFragment] = useState(false)

  function handleWrapperToggle() {
    setUseFragment((currentValue) => !currentValue)
  }

  return (
    <article className="space-y-6">
      <section className="rounded-xl border bg-white p-6 shadow-sm">
        <p className="text-sm font-semibold text-blue-700">LESSON 6 DARI 7</p>
        <h2 className="mt-2 text-3xl font-bold text-slate-900">Fragment</h2>
        <p className="mt-3 max-w-3xl text-slate-600">
          Component harus mengembalikan satu kelompok elemen. Fragment mengelompokkan beberapa
          elemen TSX tanpa menambahkan wrapper HTML yang tidak diperlukan.
        </p>
      </section>

      <section className="rounded-xl border bg-white p-6 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h3 className="text-lg font-semibold text-slate-900">
              Bandingkan struktur hasil render
            </h3>
            <p className="mt-1 text-sm text-slate-600">Garis merah menandai div tambahan.</p>
          </div>
          <button
            type="button"
            onClick={handleWrapperToggle}
            className="rounded-lg bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700"
          >
            Gunakan {useFragment ? 'div' : 'Fragment'}
          </button>
        </div>

        <div className="mt-5 grid gap-4 md:grid-cols-2">
          <div className="rounded-lg bg-slate-100 p-5">
            <p className="text-sm font-semibold text-slate-600">HASIL TAMPILAN</p>
            <div className="mt-3 rounded-lg bg-white p-4" aria-live="polite">
              {useFragment ? <ProfileWithFragment /> : <ProfileWithDiv />}
            </div>
          </div>

          <div className="rounded-lg bg-slate-900 p-5 text-sm text-slate-100">
            <p className="font-semibold text-white">STRUKTUR HTML</p>
            {useFragment ? (
              <pre className="mt-3 overflow-x-auto text-emerald-300">
                <code>{`<section>
  <h3>Henry Rivardo</h3>
  <p>Software Engineer</p>
</section>`}</code>
              </pre>
            ) : (
              <pre className="mt-3 overflow-x-auto text-red-300">
                <code>{`<section>
  <div>
    <h3>Henry Rivardo</h3>
    <p>Software Engineer</p>
  </div>
</section>`}</code>
              </pre>
            )}
          </div>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border bg-white p-5 shadow-sm">
          <p className="font-semibold text-slate-900">Dengan wrapper div</p>
          <pre className="mt-3 overflow-x-auto rounded-lg bg-slate-900 p-4 text-sm text-red-300">
            <code>{`<div>
  <h2>Judul</h2>
  <p>Deskripsi</p>
</div>`}</code>
          </pre>
        </div>
        <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-5 shadow-sm">
          <p className="font-semibold text-emerald-900">Dengan Fragment</p>
          <pre className="mt-3 overflow-x-auto rounded-lg bg-slate-900 p-4 text-sm text-emerald-300">
            <code>{`<>
  <h2>Judul</h2>
  <p>Deskripsi</p>
</>`}</code>
          </pre>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border border-blue-200 bg-blue-50 p-5">
          <h3 className="font-semibold text-blue-900">Yang perlu diperhatikan</h3>
          <p className="mt-2 text-sm text-blue-800">
            Fragment bukan pengganti semua div. Tetap gunakan div ketika elemen tersebut memang
            dibutuhkan untuk layout, style, atau struktur semantik.
          </p>
        </div>
        <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-5">
          <h3 className="font-semibold text-emerald-900">Mini challenge</h3>
          <p className="mt-2 text-sm text-emerald-800">
            Buat component CourseSummary yang mengembalikan judul dan deskripsi dengan Fragment.
          </p>
        </div>
      </section>
    </article>
  )
}

export default FragmentLesson
