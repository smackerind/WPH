import { useState } from "react";
import LessonNavigation from "./lesson/LessonNavigation";
import { lessons } from "./lesson/lessonConfig";
import RulesOfHooksLesson from "./lesson/01-rules-of-hooks/RulesOfHooksLesson";
import CounterReducerLesson from "./lesson/02-reducer-counter/CounterReducerLesson";
import FormReducerLesson from "./lesson/03-reducer-form/FormReducerLesson";
import ThemeContextLesson from "./lesson/04-theme-context/ThemeContextLesson";


function App() {
  const [activeLessonIndex, setActiveLessonIndex] = useState(0);
  const activeLesson = lessons[activeLessonIndex];
  const isFirstLesson = activeLessonIndex === 0;
  const isLastLesson = activeLessonIndex === lessons.length - 1;

  function handlePreviousLesson() {
    setActiveLessonIndex((currentIndex) => Math.max(0, currentIndex - 1));
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function handleNextLesson() {
    setActiveLessonIndex((currentIndex) =>
      Math.min(lessons.length - 1, currentIndex + 1),
    );
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function handleLessonSelect(lessonIndex: number) {
    setActiveLessonIndex(lessonIndex);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function renderActiveLesson() {
    switch (activeLesson.id) {
      case "rules-of-hooks":
        return <RulesOfHooksLesson />;
      case "reducer-counter":
        return <CounterReducerLesson />;
      case "reducer-form":
        return <FormReducerLesson />;
      case "theme-context":
        return <ThemeContextLesson />;
      default:
        return null;
    }
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="border-b bg-slate-900 text-white">
        <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
          <p className="text-sm font-semibold text-blue-300">REACT · MEET 18</p>
          <h1 className="mt-2 text-3xl font-bold sm:text-4xl">
            Reducer &amp; Context
          </h1>
          <p className="mt-3 max-w-2xl text-slate-300">
            Dari action lokal menuju mini global store yang tetap mudah ditelusuri.
          </p>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6">
        <section
          className="mb-6 rounded-xl border bg-white p-4 shadow-sm"
          aria-label="Progress lesson"
        >
          <div className="flex items-center justify-between gap-4 text-sm">
            <span className="font-semibold text-slate-700">
              Lesson {activeLessonIndex + 1} dari {lessons.length}
            </span>
            <span className="text-slate-500">
              {Math.round(((activeLessonIndex + 1) / lessons.length) * 100)}%
            </span>
          </div>
          <progress
            className="mt-3 h-2 w-full accent-blue-600"
            max={lessons.length}
            value={activeLessonIndex + 1}
          >
            {activeLessonIndex + 1} dari {lessons.length}
          </progress>
        </section>

        <div className="grid gap-6 lg:grid-cols-4">
          <aside className="lg:col-span-1">
            <LessonNavigation
              lessons={lessons}
              activeLessonIndex={activeLessonIndex}
              onLessonSelect={handleLessonSelect}
            />
          </aside>

          <main className="min-w-0 lg:col-span-3">
            <section className="mb-5 rounded-xl border bg-white p-5 shadow-sm">
              <p className="text-sm font-semibold text-blue-600">
                LESSON {activeLessonIndex + 1}
              </p>
              <h2 className="mt-1 text-2xl font-bold text-slate-900">
                {activeLesson.title}
              </h2>
              <p className="mt-2 text-slate-600">{activeLesson.description}</p>
            </section>

            {renderActiveLesson()}

            <div className="mt-6 flex items-center justify-between gap-3 rounded-xl border bg-white p-4">
              <button
                className="rounded-lg border px-4 py-2 font-semibold text-slate-700 hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-40"
                type="button"
                disabled={isFirstLesson}
                onClick={handlePreviousLesson}
              >
                ← Previous
              </button>
              <span className="hidden text-sm text-slate-500 sm:block">
                {activeLesson.shortTitle}
              </span>
              <button
                className="rounded-lg bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-40"
                type="button"
                disabled={isLastLesson}
                onClick={handleNextLesson}
              >
                Next →
              </button>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
