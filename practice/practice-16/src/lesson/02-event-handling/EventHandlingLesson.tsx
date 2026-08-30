import { useState } from 'react'

function EventHandlingLesson() {
  const [mood, setMood] = useState('Belum dipilih')
  const [clickCount, setClickCount] = useState(0)

  function handlePracticeClick() {
    setClickCount((currentCount) => currentCount + 1)
  }

  function handleMoodSelect(selectedMood: string) {
    setMood(selectedMood)
  }

  return (
    <article className="space-y-6">
      <section className="rounded-xl border bg-white p-6 shadow-sm">
        <p className="text-sm font-semibold text-blue-700">LESSON 2 DARI 7</p>
        <h2 className="mt-2 text-3xl font-bold text-slate-900">Event Handling dengan onClick</h2>
        <p className="mt-3 max-w-3xl text-slate-600">
          Event handler adalah function yang React jalankan setelah pengguna melakukan aksi. Untuk
          <code className="mx-1 rounded bg-slate-100 px-1">onClick</code>, kirim referensi function
          tanpa tanda kurung.
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-5">
          <p className="font-semibold text-emerald-900">Benar: kirim function</p>
          <pre className="mt-3 overflow-x-auto rounded-lg bg-slate-900 p-4 text-sm text-slate-100">
            <code>{'<button onClick={handleClick}>\n  Klik saya\n</button>'}</code>
          </pre>
          <p className="mt-3 text-sm text-emerald-800">
            Function menunggu sampai tombol benar-benar diklik.
          </p>
        </div>

        <div className="rounded-xl border border-red-200 bg-red-50 p-5">
          <p className="font-semibold text-red-900">Salah: panggil function</p>
          <pre className="mt-3 overflow-x-auto rounded-lg bg-slate-900 p-4 text-sm text-slate-100">
            <code>{'<button onClick={handleClick()}>\n  Klik saya\n</button>'}</code>
          </pre>
          <p className="mt-3 text-sm text-red-800">
            Tanda kurung memanggil function saat proses render.
          </p>
        </div>
      </section>

      <section className="rounded-xl border bg-white p-6 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold text-slate-900">Demo referensi function</h3>
            <p className="mt-1 text-sm text-slate-600">
              Tombol mengirim handlePracticeClick ke onClick.
            </p>
          </div>
          <button
            type="button"
            onClick={handlePracticeClick}
            className="rounded-lg bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700"
          >
            Klik saya
          </button>
        </div>
        <p
          className="mt-4 rounded-lg bg-blue-50 p-4 font-semibold text-blue-900"
          aria-live="polite"
        >
          Tombol sudah diklik {clickCount} kali.
        </p>
      </section>

      <section className="rounded-xl border bg-white p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-slate-900">Demo mengirim argument</h3>
        <p className="mt-1 text-sm text-slate-600">
          Arrow function menunggu klik, lalu mengirim nilai mood ke handler.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => handleMoodSelect('Semangat')}
            className="rounded-lg border px-4 py-2 font-medium hover:bg-emerald-50"
          >
            Semangat
          </button>
          <button
            type="button"
            onClick={() => handleMoodSelect('Fokus')}
            className="rounded-lg border px-4 py-2 font-medium hover:bg-blue-50"
          >
            Fokus
          </button>
          <button
            type="button"
            onClick={() => handleMoodSelect('Butuh istirahat')}
            className="rounded-lg border px-4 py-2 font-medium hover:bg-slate-100"
          >
            Butuh istirahat
          </button>
        </div>
        <div className="mt-4 rounded-lg bg-slate-900 p-5 text-white" aria-live="polite">
          <p className="text-sm text-slate-300">Mood yang dipilih</p>
          <p className="mt-1 text-2xl font-bold">{mood}</p>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border border-blue-200 bg-blue-50 p-5">
          <h3 className="font-semibold text-blue-900">Yang perlu diperhatikan</h3>
          <p className="mt-2 text-sm text-blue-800">
            Gunakan <code className="rounded bg-white px-1">onClick={'{handleClick}'}</code> tanpa
            tanda kurung. Gunakan arrow function ketika handler memerlukan argument.
          </p>
        </div>
        <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-5">
          <h3 className="font-semibold text-emerald-900">Mini challenge</h3>
          <p className="mt-2 text-sm text-emerald-800">
            Tambahkan pilihan mood “Penasaran” dan kirim string tersebut ke handleMoodSelect.
          </p>
        </div>
      </section>
    </article>
  )
}

export default EventHandlingLesson
