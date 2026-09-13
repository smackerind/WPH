import { useState } from 'react'
import { ZodSchemaLesson } from './lesson/01-zod-schema/ZodSchemaLesson'
import { ZodSafeParseLesson } from './lesson/02-zod-safe-parse/ZodSafeParseLesson'
import { ReactHookFormLesson } from './lesson/03-react-hook-form/ReactHookFormLesson'
import { RegistrationFormLesson } from './lesson/04-zod-rhf-integration/RegistrationFormLesson'
import { MotionBasicsLesson } from './lesson/05-motion-basics/MotionBasicsLesson'
import { MotionTransitionLesson } from './lesson/05-motion-basics/MotionTransitionLesson'
import { ExitAnimationLesson } from './lesson/06-exit-animation/ExitAnimationLesson'
import { RotatingElementLesson } from './lesson/06-exit-animation/RotatingElementLesson'
import { LessonNavigation } from './lesson/LessonNavigation'
import { lessonConfig } from './lesson/lessonConfig'

function getLessonComponent(index: number) {
  switch (index) {
    case 0:
      return <ZodSchemaLesson />
    case 1:
      return <ZodSafeParseLesson />
    case 2:
      return <ReactHookFormLesson />
    case 3:
      return <RegistrationFormLesson />
    case 4:
      return <MotionBasicsLesson />
    case 5:
      return <MotionTransitionLesson />
    case 6:
      return <ExitAnimationLesson />
    case 7:
      return <RotatingElementLesson />
    default:
      return <ZodSchemaLesson />
  }
}

function App() {
  const [activeLessonIndex, setActiveLessonIndex] = useState(0)
  const activeLesson = lessonConfig[activeLessonIndex]

  function handleSelectLesson(index: number) {
    setActiveLessonIndex(index)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  function handlePreviousLesson() {
    handleSelectLesson(Math.max(0, activeLessonIndex - 1))
  }

  function handleNextLesson() {
    handleSelectLesson(Math.min(lessonConfig.length - 1, activeLessonIndex + 1))
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-5 sm:px-6">
          <div>
            <p className="text-sm font-semibold text-blue-700">
              React Practice Lab
            </p>
            <h1 className="text-xl font-bold tracking-tight sm:text-2xl">
              Form Handling + Motion
            </h1>
          </div>
          <div className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-600">
            Meet 20
          </div>
        </div>
      </header>

      <main className="mx-auto grid max-w-7xl gap-6 px-4 py-6 sm:px-6 lg:grid-cols-[18rem_1fr]">
        <LessonNavigation
          activeLessonIndex={activeLessonIndex}
          onSelectLesson={handleSelectLesson}
        />

        <section className="min-w-0" aria-labelledby="lesson-title">
          <div className="mb-4 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold text-blue-700">
                Lesson {activeLessonIndex + 1} dari {lessonConfig.length}
              </p>
              <h2
                id="lesson-title"
                className="mt-1 text-2xl font-bold tracking-tight"
              >
                {activeLesson.title}
              </h2>
            </div>
            <span className="hidden text-sm text-slate-500 sm:block">
              {activeLesson.duration}
            </span>
          </div>

          {getLessonComponent(activeLessonIndex)}

          <nav
            className="mt-6 flex items-center justify-between gap-3"
            aria-label="Navigasi antar lesson"
          >
            <button
              type="button"
              onClick={handlePreviousLesson}
              disabled={activeLessonIndex === 0}
              className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold disabled:cursor-not-allowed disabled:opacity-40"
            >
              ← Previous
            </button>
            <button
              type="button"
              onClick={handleNextLesson}
              disabled={activeLessonIndex === lessonConfig.length - 1}
              className="rounded-lg bg-blue-700 px-4 py-2 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:opacity-40"
            >
              Next →
            </button>
          </nav>
        </section>
      </main>
    </div>
  )
}

export default App
