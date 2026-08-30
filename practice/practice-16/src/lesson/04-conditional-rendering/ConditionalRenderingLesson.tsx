import { useState } from 'react'

interface LoginStatusProps {
  isLoggedIn: boolean
}

function LoginStatus({ isLoggedIn }: LoginStatusProps) {
  if (isLoggedIn) {
    return (
      <div className="rounded-lg bg-emerald-100 text-emerald-900">
        <p className="font-semibold">Selamat datang!</p>
        <p className="mt-1 text-sm">Dashboard belajar siap digunakan</p>
      </div>
    )
  }

  return (
    <div className="rounded-lg bg-slate-100 p-4 text-slate-700">
      <p className="font-semibold">Silahkan Login</p>
      <p className="mt-1 text-sm">Dashboard belum bisa digunakan karena belum login</p>
    </div>
  )
}

function ConditionalRenderingLesson() {
  function handleLoginToggle() {
    setIsLoggedIn((currentStatus) => !currentStatus)
  }
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <article className="space-y-6">
      <section className="rounded-xl border bg-white p-6 shadow-sm">
        <p className="text-sm font-semibold text-blue-700">LESSON 4 DARI 7</p>
        <h2 className="mt-2 text-3xl font-bold text-slate-900">Conditional Rendering</h2>
        <div className="mt-6 rounded-xl border border-dashed bg-slate-50 p-6">
          <p className="font-semibold text-slate-900">
            {' '}
            React dapat memilih bagian UI berdasarkan kondisi. Pilih bentuk yang paling jelas: if
            untuk tampilan kompleks, ternary untuk dua pilihan, dan &amp;&amp; untuk elemen
            opsional.
          </p>
        </div>
      </section>

      <section className="rounded-xl border bg-white p-6 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-sm font-semibold text-blue-700">Menggunakan IF</p>
            <h3 className="font-bld mt-1 text-xl text-slate-900">Status login</h3>
          </div>

          <button
            onClick={handleLoginToggle}
            type="button"
            className="rounded-lg bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700"
          >
            {isLoggedIn ? 'Logout' : 'Login'}
          </button>
        </div>

        <div className="mt-4" aria-live="polite">
          <LoginStatus isLoggedIn={isLoggedIn} />
        </div>
        <p>Login status menggunakan if sebelum return karena kedua kondisi berbeda</p>
      </section>
    </article>
  )
}

export default ConditionalRenderingLesson
