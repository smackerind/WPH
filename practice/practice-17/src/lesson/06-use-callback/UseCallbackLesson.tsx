function UseCallbackLesson() {
  return (
    <section className="rounded-xl border bg-white p-6 shadow-sm">
      <p className="text-sm font-semibold text-blue-700">LESSON 6 DARI 8</p>
        <h2 className="mt-2 text-3xl font-bold text-slate-900">useCallback</h2>
        <p className="mt-3 max-w-3xl text-slate-600">
          Function juga merupakan value dan mempunyai identity. <code>useCallback</code> menjaga
          referensi function tetap sama selama dependency tidak berubah.
        </p>
        <p className="mt-4 rounded-lg bg-slate-100 p-4 text-sm text-slate-700">
          <strong>Tujuan:</strong> melihat kapan callback stabil berguna untuk child yang dibungkus
          <code> memo</code>.
        </p>
    </section>
  )
}

export default UseCallbackLesson
