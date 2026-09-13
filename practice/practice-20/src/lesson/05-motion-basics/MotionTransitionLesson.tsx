import { useState } from 'react'
import { motion } from 'motion/react'

type EaseName = 'linear' | 'easeOut' | 'easeInOut'

interface TransitionOption {
  label: string
  description: string
  duration: number
  ease: EaseName
}

const transitionOptions: TransitionOption[] = [
  {
    label: 'Cepat',
    description: 'Feedback singkat seperti notifikasi kecil.',
    duration: 0.15,
    ease: 'easeOut',
  },
  {
    label: 'Seimbang',
    description: 'Pilihan aman untuk kebanyakan card UI.',
    duration: 0.3,
    ease: 'easeOut',
  },
  {
    label: 'Santai',
    description: 'Mudah diamati, tetapi jangan dipakai berlebihan.',
    duration: 0.8,
    ease: 'easeInOut',
  },
]

export function MotionTransitionLesson() {
  const [selectedIndex, setSelectedIndex] = useState(1)
  const [replayKey, setReplayKey] = useState(0)
  const selectedTransition = transitionOptions[selectedIndex]

  function handleSelectTransition(index: number) {
    setSelectedIndex(index)
    setReplayKey((currentKey) => currentKey + 1)
  }

  function handleReplayAnimation() {
    setReplayKey((currentKey) => currentKey + 1)
  }

  return (
    <article className="space-y-5">
      <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
        <h3 className="text-lg font-bold">Gerakan sama, rasa berbeda</h3>
        <p className="mt-2 text-slate-600">
          Prop <code>transition</code> mengatur bagaimana nilai berpindah. Ubah
          durasi dan easing sambil mempertahankan target animasi yang sama.
        </p>
      </section>

      <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_20rem]">
        <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <fieldset>
            <legend className="font-semibold">Pilih karakter transition</legend>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              {/* Satu sumber data menghasilkan tiga tombol dengan pola UI yang sama. */}
              {transitionOptions.map((option, index) => {
                const isSelected = selectedIndex === index

                return (
                  <button
                    key={option.label}
                    type="button"
                    onClick={() => handleSelectTransition(index)}
                    aria-pressed={isSelected}
                    className={`rounded-lg border p-3 text-left text-sm ${
                      isSelected
                        ? 'border-blue-600 bg-blue-50 text-blue-950'
                        : 'border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    <span className="block font-semibold">{option.label}</span>
                    <span className="mt-1 block text-xs text-slate-600">
                      {option.duration} detik · {option.ease}
                    </span>
                  </button>
                )
              })}
            </div>
          </fieldset>

          <div
            className="mt-5 min-h-40 rounded-lg bg-slate-100 p-5"
            aria-live="polite"
          >
            <motion.div
              key={replayKey}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: selectedTransition.duration,
                ease: selectedTransition.ease,
              }}
              className="rounded-lg border border-blue-200 bg-white p-4 shadow-sm"
            >
              <p className="font-semibold text-slate-900">
                {selectedTransition.label}: {selectedTransition.duration} detik
              </p>
              <p className="mt-1 text-sm text-slate-600">
                {selectedTransition.description}
              </p>
            </motion.div>
          </div>

          <button
            type="button"
            onClick={handleReplayAnimation}
            className="mt-4 rounded-lg bg-blue-700 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-800"
          >
            Ulangi animasi
          </button>
        </section>

        <section className="rounded-xl bg-slate-900 p-5 text-slate-100 shadow-sm">
          <pre className="overflow-x-auto text-sm leading-6">
            <code>{`<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{
    duration: 0.3,
    ease: "easeOut",
  }}
/>`}</code>
          </pre>
          <dl className="mt-5 space-y-3 border-t border-slate-700 pt-5 text-sm">
            <div>
              <dt className="font-semibold text-white">duration</dt>
              <dd className="text-slate-300">Lama perpindahan dalam detik.</dd>
            </div>
            <div>
              <dt className="font-semibold text-white">ease</dt>
              <dd className="text-slate-300">
                Pola perubahan kecepatan animasi.
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-white">key</dt>
              <dd className="text-slate-300">
                Key baru me-remount card agar enter animation terulang.
              </dd>
            </div>
          </dl>
        </section>
      </div>

      <aside className="rounded-xl border-l-4 border-blue-600 bg-blue-50 p-5 text-blue-950">
        <p className="mt-1">
          Target animasinya dapat sama, tetapi duration dan ease mengubah rasa
          gerakannya.
        </p>
      </aside>
    </article>
  )
}
