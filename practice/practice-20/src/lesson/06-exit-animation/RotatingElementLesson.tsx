import { useState } from 'react'
import { motion } from 'motion/react'

const ROTATION_STEP = 90

export function RotatingElementLesson() {
  const [rotation, setRotation] = useState(0)
  const completedTurns = Math.floor(rotation / 360)
  const isFullTurn = rotation > 0 && rotation % 360 === 0

  function handleRotateElement() {
    setRotation((currentRotation) => currentRotation + ROTATION_STEP)
  }

  function handleResetRotation() {
    setRotation(0)
  }

  return (
    <article className="space-y-5">
      <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
        <h3 className="text-lg font-bold">State menentukan tujuan gerakan</h3>
        <p className="mt-2 text-slate-600">
          Setiap klik menambah nilai rotasi sebesar 90°. Saat nilai pada{' '}
          <code>animate</code> berubah, Motion menggerakkan element menuju sudut
          baru.
        </p>
      </section>

      <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_20rem]">
        <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex min-h-64 items-center justify-center rounded-xl bg-slate-100 p-6">
            <motion.div
              role="img"
              aria-label="Elemen geometris yang dapat diputar"
              animate={{
                rotate: rotation,
                scale: isFullTurn ? 1.05 : 1,
              }}
              transition={{ duration: 0.45, ease: 'easeInOut' }}
              className="relative size-44 rounded-3xl border-4 border-white bg-blue-700 shadow-lg"
            >
              <span className="absolute top-4 left-4 size-5 rounded-full bg-blue-200" />
              <span className="absolute top-4 right-4 size-5 rounded-full bg-emerald-300" />
              <span className="absolute bottom-4 left-4 size-5 rounded-full bg-emerald-300" />
              <span className="absolute right-4 bottom-4 size-5 rounded-full bg-blue-200" />
              <span className="absolute inset-10 grid place-items-center rounded-2xl bg-white">
                <span className="size-9 rotate-45 rounded-lg bg-slate-900" />
              </span>
            </motion.div>
          </div>

          <div className="mt-4 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={handleRotateElement}
              className="rounded-lg bg-blue-700 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-800"
            >
              Putar 90°
            </button>
            <button
              type="button"
              onClick={handleResetRotation}
              disabled={rotation === 0}
              className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold disabled:cursor-not-allowed disabled:opacity-40"
            >
              Reset rotasi
            </button>
          </div>

          <p className="mt-4 text-sm text-slate-600" aria-live="polite">
            Rotasi sekarang:{' '}
            <strong className="text-slate-900">{rotation}°</strong>
            {' · '}
            {completedTurns} putaran penuh
          </p>
        </section>

        <section className="rounded-xl bg-slate-900 p-5 text-slate-100 shadow-sm">
          <pre className="overflow-x-auto text-sm leading-6">
            <code>{`const [rotation, setRotation] =
  useState(0);

function handleRotateElement() {
  setRotation((current) =>
    current + 90
  );
}

<motion.div
  animate={{ rotate: rotation }}
  transition={{
    duration: 0.45,
    ease: "easeInOut",
  }}
/>`}</code>
          </pre>
          <dl className="mt-5 space-y-3 border-t border-slate-700 pt-5 text-sm">
            <div>
              <dt className="font-semibold text-white">rotate</dt>
              <dd className="text-slate-300">Sudut rotasi dalam derajat.</dd>
            </div>
            <div>
              <dt className="font-semibold text-white">React state</dt>
              <dd className="text-slate-300">
                Menjadi sumber target animasi berikutnya.
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-white">Motion</dt>
              <dd className="text-slate-300">
                Mengisi frame di antara sudut lama dan baru.
              </dd>
            </div>
          </dl>
        </section>
      </div>

      <aside className="rounded-xl border-l-4 border-blue-600 bg-blue-50 p-5 text-blue-950">
        <p className="mt-1">
          React state menentukan target, lalu Motion membuat perpindahannya
          terasa halus.
        </p>
      </aside>
    </article>
  )
}
