import { useState } from 'react'

interface Topic {
  id: number
  title: string
}

const topics: Topic[] = [
  { id: 1, title: 'useState' },
  { id: 2, title: 'Event Handling' },
  { id: 3, title: 'Conditional Rendering' },
]

function ListRenderingLesson() {
  const [selectedTopicId, setSelectedTopicId] = useState<number | null>(null)

  function HandleTopicSelect(topicId: number) {
    setSelectedTopicId(topicId)
  }

  return (
    <article className="space-y-6">
      <section className="rounded-xl border bg-white p-6 shadow-sm">
        <p className="text-sm font-semibold text-blue-700">LESSON 5 DARI 7</p>
        <h2 className="mt-2 text-3xl font-bold text-slate-900">List Rendering</h2>
        <div className="mt-6 rounded-xl border border-dashed bg-slate-50 p-6">
          <p className="font-semibold text-slate-900">
            {' '}
            Method map membaca setiap item dalam array lalu mengubahnya menjadi TSX. Satu sumber
            data dapat menghasilkan seluruh daftar tanpa menulis elemen yang sama berulang kali.
          </p>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border bg-white p-5 shadow-sm">
          <h3 className="font-semibold text-slate-900">Sumber data: satu array</h3>
          <pre className="mt-3 overflow-x-auto rounded-lg bg-slate-900 p-4 text-sm text-slate-100">
            <code>
              {`const topics: Topic[] = [
        { id: 1, title: 'useState' },
        { id: 2, title: 'Event Handling' },
        { id: 3, title: 'Conditional Rendering' },
      ]`}
            </code>
          </pre>
        </div>

        <div className="rounded-xl border bg-white p-5 shadow-sm">
          <h3 className="font-semibold text-slate-900">Hasil map tiga data bohongan</h3>
          <ul className="mt-3 space-y-2">
            {topics.map((topic) => {
              const isSelected = topic.id === selectedTopicId

              return (
                <li key={topic.id}>
                  <button
                    className={`flex w-full items-center justify-between rounded-lg border px-4 py-3 text-left ${isSelected ? 'border-blue-500 bg-blue-50' : 'hover:bg-slate-50'}`}
                    type="button"
                    onClick={() => HandleTopicSelect(topic.id)}
                  >
                    <span className="font-medium text-slate-900">{topic.title}</span>
                    <span className="text-sm text-slate-500"> ID: {topic.id}</span>
                  </button>
                </li>
              )
            })}
          </ul>
          <p className="mt-3 text-sm text-slate-500">
            {selectedTopicId === null
              ? 'Klik salah satu topik.'
              : `Topik dengan ID ${selectedTopicId} dipilih`}
          </p>
        </div>
      </section>
    </article>
  )
}

export default ListRenderingLesson
