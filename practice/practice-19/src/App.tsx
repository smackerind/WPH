import { useState } from "react"
import { BookOpen, Layers3 } from "lucide-react"

import { LessonNavigation } from "@/lesson/LessonNavigation"
import { lessonConfig } from "@/lesson/lessonConfig"
import { TailwindReviewLesson } from "@/lesson/01-tailwind-review/TailwindReviewLesson"
import { HeadlessConceptLesson } from "@/lesson/02-headless-concept/HeadlessConceptLesson"
import { RadixDialogLesson } from "@/lesson/03-radix-dialog/RadixDialogLesson"
import { RadixDropdownLesson } from "@/lesson/04-radix-dropdown/RadixDropdownLesson"
import { ShadcnComponentsLesson } from "@/lesson/05-shadcn-components/ShadcnComponentsLesson"
import { CnUtilityLesson } from "@/lesson/06-cn-utility/CnUtilityLesson"

const lessonComponents = [
  TailwindReviewLesson,
  HeadlessConceptLesson,
  RadixDialogLesson,
  RadixDropdownLesson,
  ShadcnComponentsLesson,
  CnUtilityLesson,
]

function App() {
  const [currentLesson, setCurrentLesson] = useState(0)
  const ActiveLesson = lessonComponents[currentLesson]
  const lesson = lessonConfig[currentLesson]

  function handlePreviousLesson() {
    setCurrentLesson((current) => Math.max(0, current - 1))
  }

  function handleNextLesson() {
    setCurrentLesson((current) => Math.min(lessonConfig.length - 1, current + 1))
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-950">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-6 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-sm">
              <Layers3 className="size-5" aria-hidden="true" />
            </div>
            <div>
              <p className="text-sm font-semibold text-indigo-600">React Meet 19</p>
              <h1 className="text-xl font-bold tracking-tight sm:text-2xl">
                Radix UI + shadcn/ui
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-2 self-start rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm text-slate-600 lg:self-auto">
            <BookOpen className="size-4 text-blue-600" aria-hidden="true" />
            <span>
              Lesson {lesson.number} dari {lessonConfig.length}
            </span>
          </div>
        </div>
      </header>

      <main className="mx-auto grid max-w-7xl gap-6 px-4 py-6 sm:px-6 lg:grid-cols-[17rem_minmax(0,1fr)] lg:gap-8 lg:px-8 lg:py-8">
        <LessonNavigation
          currentLesson={currentLesson}
          onLessonChange={setCurrentLesson}
          onNext={handleNextLesson}
          onPrevious={handlePreviousLesson}
        />

        <section
          id="lesson-content"
          aria-labelledby={`lesson-title-${lesson.id}`}
          className="min-w-0 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8"
        >
          <ActiveLesson />
        </section>
      </main>
    </div>
  )
}

export default App
