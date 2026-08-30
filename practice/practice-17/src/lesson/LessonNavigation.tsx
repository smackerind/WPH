import type { LessonConfig } from './lessonConfig'

interface LessonNavigationProps {
  activeLesson: number
  lessons: LessonConfig[]
  onLessonSelect: (lessonIndex: number) => void
  onPrevious: () => void
  onNext: () => void
}

function LessonNavigation({
  activeLesson,
  lessons,
  onLessonSelect,
  onPrevious,
  onNext,
}: LessonNavigationProps) {
  const isFirstLesson = activeLesson === 0
  const isLastLesson = activeLesson === lessons.length - 1
  const progress = ((activeLesson + 1) / lessons.length) * 100

  return (
    <aside className="self-start lg:sticky lg:top-6">
      <nav aria-label="Daftar lesson" className="rounded-xl border bg-white p-4 shadow-sm">
        <div className="flex items-center justify-between gap-3">
          <p className="font-semibold text-slate-900">Daftar lesson</p>
          <span className="text-sm text-slate-500">
            {activeLesson + 1}/{lessons.length}
          </span>
        </div>

        <div
          role="progressbar"
          aria-label="Progress lesson"
          aria-valuemin={1}
          aria-valuemax={lessons.length}
          aria-valuenow={activeLesson + 1}
          className="mt-3 h-2 overflow-hidden rounded-full bg-slate-200"
        >
          <div className="h-full rounded-full bg-blue-600" style={{ width: `${progress}%` }} />
        </div>

        <div className="mt-4 flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible">
          {lessons.map((lesson, index) => {
            const isActive = index === activeLesson

            return (
              <button
                key={lesson.title}
                type="button"
                aria-current={isActive ? 'step' : undefined}
                onClick={() => onLessonSelect(index)}
                className={`shrink-0 rounded-lg px-3 py-2 text-left text-sm font-medium ${
                  isActive
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {index + 1}. {lesson.shortTitle}
              </button>
            )
          })}
        </div>

        <div className="mt-3 grid grid-cols-2 gap-2 border-t pt-3">
          <button
            type="button"
            onClick={onPrevious}
            disabled={isFirstLesson}
            className="rounded-lg border px-3 py-2 text-sm font-medium hover:bg-slate-100 disabled:opacity-40"
          >
            Previous
          </button>
          <button
            type="button"
            onClick={onNext}
            disabled={isLastLesson}
            className="rounded-lg bg-slate-900 px-3 py-2 text-sm font-medium text-white hover:bg-slate-700 disabled:opacity-40"
          >
            Next
          </button>
        </div>
      </nav>
    </aside>
  )
}

export default LessonNavigation
