import { ArrowLeft, ArrowRight, Check } from "lucide-react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { lessonConfig } from "@/lesson/lessonConfig"

interface LessonNavigationProps {
  currentLesson: number
  onLessonChange: (lessonIndex: number) => void
  onNext: () => void
  onPrevious: () => void
}

export function LessonNavigation({
  currentLesson,
  onLessonChange,
  onNext,
  onPrevious,
}: LessonNavigationProps) {
  return (
    <aside className="h-fit rounded-2xl border border-slate-200 bg-white p-4 shadow-sm lg:sticky lg:top-6">
      <div className="mb-4">
        <p className="text-sm font-semibold text-slate-950">Daftar lesson</p>
        <p className="mt-1 text-xs leading-5 text-slate-500">Pilih topik tanpa React Router.</p>
      </div>

      <ol className="grid gap-2 sm:grid-cols-2 lg:grid-cols-1">
        {lessonConfig.map((lesson, index) => {
          const isActive = index === currentLesson
          const isCompleted = index < currentLesson

          return (
            <li key={lesson.id}>
              <button
                type="button"
                aria-current={isActive ? "step" : undefined}
                onClick={() => onLessonChange(index)}
                className={cn(
                  "flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm transition-colors",
                  isActive
                    ? "bg-indigo-50 font-semibold text-indigo-700 ring-1 ring-indigo-200"
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-950",
                )}
              >
                <span
                  className={cn(
                    "flex size-7 shrink-0 items-center justify-center rounded-full text-xs font-bold",
                    isActive
                      ? "bg-indigo-600 text-white"
                      : isCompleted
                        ? "bg-emerald-100 text-emerald-700"
                        : "bg-slate-100 text-slate-500",
                  )}
                >
                  {isCompleted ? <Check className="size-3.5" aria-hidden="true" /> : lesson.number}
                </span>
                <span>{lesson.shortTitle}</span>
              </button>
            </li>
          )
        })}
      </ol>

      <div className="mt-5 grid grid-cols-2 gap-2 border-t border-slate-100 pt-4">
        <Button type="button" variant="outline" onClick={onPrevious} disabled={currentLesson === 0} className="justify-center">
          <ArrowLeft data-icon="inline-start" aria-hidden="true" />
          Previous
        </Button>
        <Button type="button" onClick={onNext} disabled={currentLesson === lessonConfig.length - 1} className="justify-center bg-indigo-600 hover:bg-indigo-700">
          Next
          <ArrowRight data-icon="inline-end" aria-hidden="true" />
        </Button>
      </div>
    </aside>
  )
}
