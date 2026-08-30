function LiftingStateLesson() {
  return (
    <section className="rounded-xl border bg-white p-6 shadow-sm">
      <p className="text-sm font-semibold text-blue-700">LESSON 7 DARI 8</p>
        <h2 className="mt-2 text-3xl font-bold text-slate-900">Lifting State</h2>
        <p className="mt-3 max-w-3xl text-slate-600">
          Saat beberapa sibling membutuhkan data yang sama, simpan state pada common parent
          terdekat. Data turun melalui props, event naik melalui callback.
        </p>
        <p className="mt-4 rounded-lg bg-slate-100 p-4 text-sm text-slate-700">
          <strong>Tujuan:</strong> membuat satu sumber data untuk SearchInput, TopicList, dan
          ResultSummary.
        </p>
    </section>
  )
}

export default LiftingStateLesson
