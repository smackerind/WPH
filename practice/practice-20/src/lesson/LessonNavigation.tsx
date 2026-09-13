import { lessonConfig } from './lessonConfig'

interface LessonNavigationProps {
  activeLessonIndex: number
  onSelectLesson: (index: number) => void
}

export function LessonNavigation({
  activeLessonIndex,
  onSelectLesson,
}: LessonNavigationProps) {
  const progress = ((activeLessonIndex + 1) / lessonConfig.length) * 100

  return (
    <aside className="self-start rounded-xl border border-slate-200 bg-white p-4 shadow-sm lg:sticky lg:top-6">
      <div className="mb-4">
        <div className="mb-2 flex justify-between text-xs font-semibold text-slate-600">
          <span>Progress belajar</span>
          <span>{Math.round(progress)}%</span>
        </div>
        <div
          className="h-2 overflow-hidden rounded-full bg-slate-200"
          role="progressbar"
          aria-label="Progress lesson"
          aria-valuemin={1}
          aria-valuemax={lessonConfig.length}
          aria-valuenow={activeLessonIndex + 1}
        >
          <div
            className="h-full rounded-full bg-blue-600 transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <nav aria-label="Daftar lesson">
        <ol className="grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-1">
          {lessonConfig.map((lesson, index) => {
            const isActive = index === activeLessonIndex

            return (
              <li key={lesson.title}>
                <button
                  type="button"
                  onClick={() => onSelectLesson(index)}
                  aria-current={isActive ? 'step' : undefined}
                  className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-blue-50 text-blue-800'
                      : 'text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  <span
                    className={`grid size-7 shrink-0 place-items-center rounded-full text-xs font-bold ${
                      isActive ? 'bg-blue-700 text-white' : 'bg-slate-200 text-slate-600'
                    }`}
                    aria-hidden="true"
                  >
                    {index + 1}
                  </span>
                  <span className="truncate">{lesson.shortTitle}</span>
                </button>
              </li>
            )
          })}
        </ol>
      </nav>
    </aside>
  )
}
