interface LessonNavigationProps {
  activeLesson: number
  lessonTitles: string[]
  onLessonSelect: (lessonIndex: number) => void
  onPrevious: () => void
  onNext: () => void
}

function LessonNavigation({
  activeLesson,
  lessonTitles,
  onLessonSelect,
  onPrevious,
  onNext,
}: LessonNavigationProps) {
  const isFirstLesson = activeLesson === 0
  const isLastLesson = activeLesson === lessonTitles.length - 1

  return (
    <aside className="self-start lg:sticky lg:top-6">
      <nav aria-label="Daftar lesson" className="rounded-xl border bg-white p-4 shadow-sm">
        <div className="mb-3 flex items-center justify-between">
          <p className="font-semibold text-slate-900">Daftar lesson</p>
          <span className="text-sm text-slate-500">
            {activeLesson + 1}/{lessonTitles.length}
          </span>
        </div>

        <div className="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible">
          {lessonTitles.map((title, index) => {
            const isActive = index === activeLesson

            return (
              <button
                key={title}
                type="button"
                aria-current={isActive ? 'step' : undefined}
                onClick={() => onLessonSelect(index)}
                className={`shrink-0 rounded-lg px-3 py-2 text-left text-sm font-medium ${
                  isActive
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {index + 1}. {title}
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
