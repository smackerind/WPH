const wrongExample = `function Profile({ isLoggedIn }: ProfileProps) {
  if (isLoggedIn) {
    const [name, setName] = useState("");
  }

  return <p>Profile</p>;
}`;

const correctExample = `function Profile({ isLoggedIn }: ProfileProps) {
  const [name, setName] = useState("");

  if (!isLoggedIn) {
    return <p>Silakan login.</p>;
  }

  return <p>Halo, {name}</p>;
}`;

interface QuizItem {
  question: string;
  answer: string;
}

const quizItems: QuizItem[] = [
  {
    question: "Apakah Hook boleh dipanggil di event handler?",
    answer:
      "Tidak. Hook harus dipanggil di top level component atau custom Hook, bukan di event handler.",
  },
  {
    question: "Apakah dispatch boleh dipanggil di event handler?",
    answer:
      "Boleh. dispatch adalah function biasa yang diberikan React, bukan sebuah Hook.",
  },
  {
    question: "Apakah Hook boleh dipanggil setelah conditional return?",
    answer:
      "Tidak aman. Pada render tertentu return bisa terjadi lebih dulu sehingga urutan Hook berubah.",
  },
];

function RulesOfHooksLesson() {
  return (
    <div className="grid gap-5">
      <section className="rounded-xl border bg-white p-5 shadow-sm">
        <h3 className="text-xl font-bold text-slate-900">Dua aturan utama</h3>
        <ol className="mt-4 grid gap-3 sm:grid-cols-2">
          <li className="rounded-lg border border-blue-200 bg-blue-50 p-4">
            <span className="font-bold text-blue-800">1. Hanya di top level</span>
            <p className="mt-2 text-sm text-slate-700">
              Jangan panggil Hook di dalam if, loop, nested function, atau event handler.
            </p>
          </li>
          <li className="rounded-lg border border-blue-200 bg-blue-50 p-4">
            <span className="font-bold text-blue-800">2. Hanya di function React</span>
            <p className="mt-2 text-sm text-slate-700">
              Panggil Hook hanya dari React component atau custom Hook.
            </p>
          </li>
        </ol>
        <blockquote className="mt-4 rounded-lg border-l-4 border-blue-600 bg-slate-50 p-4 text-slate-700">
          React mengandalkan urutan pemanggilan Hooks yang konsisten pada setiap render.
        </blockquote>
      </section>

      <section className="grid gap-4 xl:grid-cols-2">
        <article className="min-w-0 rounded-xl border border-red-200 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between gap-3">
            <h3 className="font-bold text-red-700">Salah · Hook conditional</h3>
            <span className="rounded bg-red-100 px-2 py-1 text-xs font-semibold text-red-700">
              Preview statis
            </span>
          </div>
          <pre className="mt-4 overflow-x-auto rounded-lg bg-slate-900 p-4 text-sm text-slate-100">
            <code>{wrongExample}</code>
          </pre>
        </article>

        <article className="min-w-0 rounded-xl border border-emerald-200 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between gap-3">
            <h3 className="font-bold text-emerald-700">Benar · Hook selalu dipanggil</h3>
            <span className="rounded bg-emerald-100 px-2 py-1 text-xs font-semibold text-emerald-700">
              Urutan konsisten
            </span>
          </div>
          <pre className="mt-4 overflow-x-auto rounded-lg bg-slate-900 p-4 text-sm text-slate-100">
            <code>{correctExample}</code>
          </pre>
        </article>
      </section>

      <section className="rounded-xl border bg-white p-5 shadow-sm">
        <h3 className="text-xl font-bold text-slate-900">Yang perlu dihindari</h3>
        <ul className="mt-4 grid gap-2 text-slate-700 sm:grid-cols-2">
          <li className="rounded-lg bg-slate-100 p-3">Hook di dalam if</li>
          <li className="rounded-lg bg-slate-100 p-3">Hook di dalam loop</li>
          <li className="rounded-lg bg-slate-100 p-3">Hook di nested function</li>
          <li className="rounded-lg bg-slate-100 p-3">Hook di event handler</li>
          <li className="rounded-lg bg-slate-100 p-3">Hook di function JavaScript biasa</li>
        </ul>
        <p className="mt-4 rounded-lg bg-emerald-50 p-4 font-semibold text-emerald-800">
          AHA: Bukan <code>if</code> yang dilarang. Hook-nya yang tidak boleh dipanggil
          secara conditional.
        </p>
      </section>

      <section className="rounded-xl border bg-white p-5 shadow-sm">
        <h3 className="text-xl font-bold text-slate-900">Quiz kecil</h3>
        <div className="mt-4 grid gap-3">
          {quizItems.map((item) => (
            <details key={item.question} className="rounded-lg border bg-slate-50 p-4">
              <summary className="cursor-pointer font-semibold text-slate-800">
                {item.question}
              </summary>
              <p className="mt-3 text-sm text-slate-600">{item.answer}</p>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}

export default RulesOfHooksLesson;
