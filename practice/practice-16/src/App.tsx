import { useState } from 'react'
import StateLesson from './lesson/01-state/StateLesson'
import EventHandlingLesson from './lesson/02-event-handling/EventHandlingLesson'
import ControlledInputLesson from './lesson/03-controlled-input/ControlledInputLesson'
import ConditionalRenderingLesson from './lesson/04-conditional-rendering/ConditionalRenderingLesson'
import ListRenderingLesson from './lesson/05-list-rendering/ListRenderingLesson'
import FragmentLesson from './lesson/06-fragment/FragmentLesson'
import LessonNavigation from './lesson/LessonNavigation'

const lessonTitles = [
  'State & Rendering',
  'Event Handling',
  'Controlled Input',
  'Conditional Rendering',
  'List Rendering',
  'Fragment',
]

function App() {
  const [activeLesson, setActiveLesson] = useState(0)

  function handleLessonSelect(lessonIndex: number) {
    setActiveLesson(lessonIndex)
  }

  function handlePreviousLesson() {
    setActiveLesson((currentLesson) => Math.max(0, currentLesson - 1))
  }

  function handleNextLesson() {
    setActiveLesson((currentLesson) => Math.min(lessonTitles.length - 1, currentLesson + 1))
  }

  function renderLesson() {
    if (activeLesson === 0) {
      return <StateLesson />
    }

    if (activeLesson === 1) {
      return <EventHandlingLesson />
    }

    if (activeLesson === 2) {
      return <ControlledInputLesson />
    }

    if (activeLesson === 3) {
      return <ConditionalRenderingLesson />
    }

    if (activeLesson === 4) {
      return <ListRenderingLesson />
    }

    if (activeLesson === 5) {
      return <FragmentLesson />
    }
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="border-b bg-white">
        <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6">
          <p className="text-sm font-semibold text-blue-700">Henry Rivardo • Software Engineer</p>
          <div className="mt-2 flex flex-wrap items-end justify-between gap-3">
            <div>
              <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">
                State &amp; Rendering - Meet 16
              </h1>
              <p className="mt-2 text-slate-600">
                React State Management and Conditional Rendering
              </p>
            </div>
            <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-800">
              React + TypeScript
            </span>
          </div>
        </div>
      </header>

      <main className="mx-auto grid max-w-6xl gap-6 px-4 py-8 sm:px-6 lg:grid-cols-4">
        <LessonNavigation
          activeLesson={activeLesson}
          lessonTitles={lessonTitles}
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
              Lesson {activeLesson + 1} dari {lessonTitles.length}
            </p>
            <button
              type="button"
              onClick={handleNextLesson}
              disabled={activeLesson === lessonTitles.length - 1}
              className="rounded-lg bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700 disabled:opacity-40"
            >
              Next →
            </button>
          </nav>
        </div>
      </main>

      <footer className="border-t bg-white py-5 text-center text-sm text-slate-500">
        Materi Meet 16 - Semangat Team
      </footer>
    </div>
  )
}

export default App
