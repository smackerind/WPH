import { useEffect, useState } from 'react'

function UseEffectCleanupLesson() {
  const [seconds, setSeconds] = useState(0)
  const [isRunning, setIsRunning] = useState(false)

  useEffect(() => {
    if (!isRunning) {
      return
    }

    // Setup membuat satu proses eksternal yang berjalan setiap satu detik.
    const intervalId = window.setInterval(() => {
      // Functional update selalu menerima seconds terbaru tanpa menjadikannya dependency.
      setSeconds((currentSeconds) => currentSeconds + 1)
    }, 1000)

    // Cleanup menghentikan interval lama agar tidak terjadi timer ganda atau memory leak.
    return () => {
      window.clearInterval(intervalId)
    }
    // Effect hanya perlu setup ulang ketika status running berubah.
  }, [isRunning])

  function handleStartTimer() {
    setIsRunning(true)
  }

  function handlePauseTimer() {
    setIsRunning(false)
  }

  function handleResetTimer() {
    // Reset menghentikan proses sekaligus mengembalikan nilai tampilannya.
    setIsRunning(false)
    setSeconds(0)
  }

  return (
    <article className="space-y-6">
      <section className="rounded-xl border bg-white p-6 shadow-sm">
        <p className="text-sm font-semibold text-blue-700">LESSON 3 DARI 8</p>
        <h2 className="mt-2 text-3xl font-bold text-slate-900">Cleanup Function</h2>
        <p className="mt-3 max-w-3xl text-slate-600">
          Effect menyalakan interval ketika timer berjalan. Cleanup mematikannya sebelum effect
          berikutnya atau ketika component dilepas dari layar.
        </p>
        <p className="mt-4 rounded-lg bg-slate-100 p-4 text-sm text-slate-700">
          <strong>Tujuan:</strong> memahami pasangan setup-cleanup dan membuat timer tanpa interval
          ganda atau memory leak.
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border border-blue-200 bg-blue-50 p-6 shadow-sm">
          <p className="text-sm font-semibold text-blue-800">TIMER SESI</p>
          <p className="my-4 text-6xl font-bold text-blue-950" aria-live="polite">
            {seconds}s
          </p>
          <p className="font-medium text-blue-900">
            {isRunning ? 'Timer berjalan' : 'Timer berhenti'}
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={handleStartTimer}
              disabled={isRunning}
              className="rounded-lg bg-blue-600 px-4 py-2 font-medium text-white disabled:opacity-40"
            >
              Start
            </button>
            <button
              type="button"
              onClick={handlePauseTimer}
              disabled={!isRunning}
              className="rounded-lg border bg-white px-4 py-2 font-medium disabled:opacity-40"
            >
              Pause
            </button>
            <button
              type="button"
              onClick={handleResetTimer}
              className="rounded-lg border border-red-200 bg-white px-4 py-2 font-medium text-red-700"
            >
              Reset
            </button>
          </div>
        </div>

        <div className="rounded-xl border bg-slate-900 p-5 text-slate-100 shadow-sm">
          <p className="font-semibold">Pola aman</p>
          <pre className="mt-3 overflow-x-auto text-sm text-blue-200">
            <code>{`useEffect(() => {
  if (!isRunning) return;

  const intervalId = window.setInterval(() => {
    setSeconds((current) => current + 1);
  }, 1000);

  return () => {
    window.clearInterval(intervalId);
  };
}, [isRunning]);`}</code>
          </pre>
        </div>
      </section>

      <section className="rounded-xl border bg-white p-5 shadow-sm">
        <h3 className="font-semibold text-slate-900">Siklus setup dan cleanup</h3>
        <div className="mt-4 flex flex-wrap items-center gap-2 text-sm font-medium">
          <span className="rounded bg-blue-100 px-3 py-2">Start</span>
          <span>→</span>
          <span className="rounded bg-emerald-100 px-3 py-2">Setup interval</span>
          <span>→</span>
          <span className="rounded bg-slate-100 px-3 py-2">Tick tiap detik</span>
          <span>→</span>
          <span className="rounded bg-red-100 px-3 py-2">Cleanup saat pause/unmount</span>
        </div>
        <p className="mt-4 text-sm text-slate-600">
          Functional state update membaca detik terbaru sehingga <code>seconds</code> tidak perlu
          menjadi dependency effect.
        </p>
        <p className="mt-4 border-l-4 border-blue-500 pl-4 text-sm text-slate-700">
           Kalau effect menyalakan sesuatu, tanyakan apakah sesuatu itu perlu
          dimatikan.
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        <div className="rounded-xl border border-blue-200 bg-blue-50 p-5">
          <h3 className="font-semibold text-blue-900">Yang perlu diperhatikan</h3>
          <p className="mt-2 text-sm text-blue-800">
            Cleanup berjalan sebelum setup berikutnya dan saat component unmount. Pindah lesson
            ketika timer aktif untuk mengujinya.
          </p>
        </div>
        <div className="rounded-xl border border-red-200 bg-red-50 p-5">
          <h3 className="font-semibold text-red-900">Kesalahan umum</h3>
          <p className="mt-2 text-sm text-red-800">
            Membuat interval di event handler tanpa menyimpan dan membersihkan interval tersebut.
          </p>
        </div>
        <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-5">
          <h3 className="font-semibold text-emerald-900">Mini challenge</h3>
          <p className="mt-2 text-sm text-emerald-800">
            Pastikan Reset kembali ke nol dan status langsung menjadi “Timer berhenti”.
          </p>
        </div>
      </section>
    </article>
  )
}

export default UseEffectCleanupLesson
