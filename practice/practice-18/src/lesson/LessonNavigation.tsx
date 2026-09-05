import type { LessonConfig } from "./lessonConfig";

interface LessonNavigationProps {
  lessons: LessonConfig[];
  activeLessonIndex: number;
  onLessonSelect: (lessonIndex: number) => void;
}

function LessonNavigation({
  lessons,
  activeLessonIndex,
  onLessonSelect,
}: LessonNavigationProps) {
  return (
    <nav
      aria-label="Daftar lesson"
      className="rounded-xl border bg-white p-4 shadow-sm"
    >
      <p className="mb-3 text-sm font-semibold text-slate-500">DAFTAR LESSON</p>
      <ol className="grid gap-2 sm:grid-cols-2 lg:grid-cols-1">
        {lessons.map((lesson, index) => {
          const isActive = index === activeLessonIndex;

          return (
            <li key={lesson.id}>
              <button
                className={`w-full rounded-lg border p-3 text-left hover:border-blue-400 ${
                  isActive
                    ? "border-blue-600 bg-blue-50 text-blue-800"
                    : "border-slate-200 bg-white text-slate-700"
                }`}
                type="button"
                aria-current={isActive ? "step" : undefined}
                onClick={() => onLessonSelect(index)}
              >
                <span className="block text-xs font-semibold">
                  LESSON {index + 1}
                </span>
                <span className="mt-1 block font-semibold">
                  {lesson.shortTitle}
                </span>
                {lesson.optionalInShortPath ? (
                  <span className="mt-1 block text-xs text-slate-500">
                    Opsional untuk jalur 40 menit
                  </span>
                ) : null}
              </button>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export default LessonNavigation;
