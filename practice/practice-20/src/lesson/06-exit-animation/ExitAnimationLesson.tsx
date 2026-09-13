import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'

export function ExitAnimationLesson() {
  const [isVisible, setIsVisible] = useState(false)

  function handleToggleNotification() {
    setIsVisible((currentValue) => !currentValue)
  }
  return (
    <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
        <h3 className="text-lg font-bold">Mengapa exit tidak cukup?</h3>
        <p className="mt-2 text-slate-600">
          Conditional rendering ingin langsung menghapus element.{' '}
          <code>AnimatePresence</code> menahannya sebentar agar animasi keluar
          selesai.
        </p>
        <pre className="mt-4 overflow-x-auto rounded-lg bg-slate-100 p-4 text-sm leading-6 text-slate-700">
          <code>{`Element masuk
→ initial
→ animate

Element keluar
→ exit
→ dihapus dari React tree`}</code>
        </pre>
      </section>

      <div className="grid gap-5 lg:grid-cols-2">
        <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <h3 className="font-semibold">Enter animation and exit animation</h3>
          <p className="mt-1 text-sm text-slate-600">
            Sembunyikan lalu tampilkan kembali untuk mengulang animasi masuk
          </p>
          <button
            onClick={handleToggleNotification}
            className="mt-4 rounded-lg bg-blue-700 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700"
            type="button"
            aria-expanded={isVisible}
          >
            {isVisible ? 'Hapus notikasi' : 'Tampilkan Notifikasi'}
          </button>

          <div className="mt-5 min-h-28" aria-live="polite">
            <AnimatePresence>
              {isVisible && (
                <motion.div
                  key="notification"
                  exit={{ opacity: 0, y: 12 }}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="rounded-lg border border-emerald-200 bg-emerald-50 p-4 text-emerald-950"
                >
                  <p className="font-semibold">konten berhasil masuk.</p>
                  <p className="mt1 text-sm">
                    Gerakannnya singkat agar tidak mengganggu pembaca
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>
      </div>
    </article>
  )
}
