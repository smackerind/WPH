import { useState } from 'react'
import UseEffectMountLesson from './lesson/01-use-effect-mount/UseEffectMountLesson'
import UseEffectDependenciesLesson from './lesson/02-use-effect-dependencies/UseEffectDependenciesLesson'
import UseEffectCleanupLesson from './lesson/03-use-effect-cleanup/UseEffectCleanupLesson'
import UseRefLesson from './lesson/04-use-ref/UseRefLesson'
import UseMemoLesson from './lesson/05-use-memo/UseMemoLesson'
import UseCallbackLesson from './lesson/06-use-callback/UseCallbackLesson'
import LiftingStateLesson from './lesson/07-lifting-state/LiftingStateLesson'
import LessonNavigation from './lesson/LessonNavigation'
import { lessonConfig } from './lesson/lessonConfig'

function App() {
  const [activeLesson, setActiveLesson] = useState(0)

  function handleLessonSelect(lessonIndex: number) {
    setActiveLesson(lessonIndex)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  function handlePreviousLesson() {
    setActiveLesson((currentLesson) => Math.max(0, currentLesson - 1))
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  function handleNextLesson() {
    setActiveLesson((currentLesson) => Math.min(lessonConfig.length - 1, currentLesson + 1))
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  function renderLesson() {
    switch (activeLesson) {
      case 0:
        return <UseEffectMountLesson />
      case 1:
        return <UseEffectDependenciesLesson />
      case 2:
        return <UseEffectCleanupLesson />
      case 3:
        return <UseRefLesson />
      case 4:
        return <UseMemoLesson />
      case 5:
        return <UseCallbackLesson />
      case 6:
        return <LiftingStateLesson />
    }
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="border-b bg-white">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6">
          <p className="text-sm font-semibold text-blue-700">Henry Rivardo • Software Engineer</p>
          <div className="mt-2 flex flex-wrap items-end justify-between gap-3">
            <div>
              <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">
                Hooks Lanjutan — Meet 17
              </h1>
              <p className="mt-2 text-slate-600">Advanced React Hooks</p>
            </div>
            <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-800">
              React + TypeScript
            </span>
          </div>
        </div>
      </header>

      <main className="mx-auto grid max-w-7xl gap-6 px-4 py-8 sm:px-6 lg:grid-cols-4">
        <LessonNavigation
          activeLesson={activeLesson}
          lessons={lessonConfig}
          onLessonSelect={handleLessonSelect}
          onPrevious={handlePreviousLesson}
          onNext={handleNextLesson}
        />

        <div className="min-w-0 lg:col-span-3">
          {renderLesson()}

          <nav
            aria-label="Navigasi lesson bawah"
            className="mt-6 flex items-center justify-between gap-4"
          >
            <button
              type="button"
              onClick={handlePreviousLesson}
              disabled={activeLesson === 0}
              className="rounded-lg border bg-white px-4 py-2 font-medium hover:bg-slate-100 disabled:opacity-40"
            >
              ← Previous
            </button>
            <p className="hidden text-sm text-slate-500 sm:block">
              Lesson {activeLesson + 1} dari {lessonConfig.length}
            </p>
            <button
              type="button"
              onClick={handleNextLesson}
              disabled={activeLesson === lessonConfig.length - 1}
              className="rounded-lg bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700 disabled:opacity-40"
            >
              Next →
            </button>
          </nav>
        </div>
      </main>

      <footer className="border-t bg-white py-5 text-center text-sm text-slate-500">
        Materi Meet 17 — Belajar hook selangkah demi selangkah
      </footer>
    </div>
  )
}

export default App
