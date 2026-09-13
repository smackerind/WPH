import { useState } from 'react'
import { motion } from 'motion/react'

export function MotionBasicsLesson() {
  const [isVisible, setIsVisible] = useState(false)

  function handleToggleNotification() {
    setIsVisible((currentValue) => !currentValue)
  }

  return (
    <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
        <p className="text-slate-600">
          Package resminya sekarang bernama{' '}
          <strong className="text-slate-900">Motion</strong>. Component React
          di-import dari <code>motion/react</code>.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <code className="rounded-lg bg-slate-900 px-3 py-2 text-sm text-slate-100">
            npm install motion
          </code>
          <code className="rounded-lg bg-blue-50 px-3 py-2 text-sm text-blue-900">
            import {'{ motion }'} from &quot;motion/react&quot;
          </code>
        </div>
      </section>

      <div className="grid gap-5 lg:grid-cols-2">
        <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <h3 className="font-semibold">Enter animation</h3>
          <p className="mt-1 text-sm text-slate-600">
            Sembunyikan lalu tampilkan kembali untuk mengulang animasi masuk
          </p>
          <button
            onClick={handleToggleNotification}
            className="mt-4 rounded-lg bg-blue-700 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700"
            type="button"
            aria-expanded={isVisible}
          >
            {isVisible ? 'Sembunyikan notikasi' : 'Tampilkan Notifikasi'}
          </button>

          <div className="mt-5 min-h-28" aria-live="polite">
            {isVisible && (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="rounded-lg border border-emerald-200 bg-emerald-50 p-4 text-emerald-950"
              >
                <p className="font-semibold">konten berhasil masuk.</p>
                <p className="mt1 text-sm">
                  Gerakannnya singkat agar tidak mengganggu pembaca
                </p>
              </motion.div>
            )}
          </div>
        </section>
      </div>
    </article>
  )
}
