import { useMemo, useState, type ChangeEvent } from "react"

interface LearningTopic {
  id:number
  title:string 
  category: string
}


const initialTopics: LearningTopic[] = [
  { id: 1, title: 'Effect saat mount', category: 'useEffect' },
  { id: 2, title: 'Dependency array', category: 'useEffect' },
  { id: 3, title: 'Cleanup interval', category: 'useEffect' },
  { id: 4, title: 'Focus input', category: 'useRef' },
  { id: 5, title: 'Filter topik', category: 'useMemo' },
  { id: 6, title: 'Stable callback', category: 'useCallback' },
]

function UseMemoLesson() {

  const [topics] = useState<LearningTopic[]>(initialTopics)
  const [searchQuery, setSearchQuery] = useState('')

  const [themeCount, setThemeCount] = useState(0)

  const filteredTopics = useMemo(() => {
    return topics.filter((topic) => topic.title.toLowerCase().includes(searchQuery.toLowerCase()))
  }, [topics, searchQuery])

  function handleSearchChange(event: ChangeEvent<HTMLInputElement>){
    setSearchQuery(event.target.value)
  }

  function handleUnrelatedRender() {
    setThemeCount((currentCount) => (currentCount + 1 ))
  }


  return (
    <article className="space-y-6">
    <section className="rounded-xl border bg-white p-6 shadow-sm">
       <p className="text-sm font-semibold text-blue-700">LESSON 5 DARI 8</p>
        <h2 className="mt-2 text-3xl font-bold text-slate-900">useMemo</h2>
        <p className="mt-3 max-w-3xl text-slate-600">
          <code>useMemo</code> menyimpan hasil perhitungan murni dan menghitungnya kembali hanya
          saat dependency berubah. Di aplikasi kecil ini, penggunaannya khusus untuk mempelajari
          pola.
        </p>
        <p className="mt-4 rounded-lg bg-slate-100 p-4 text-sm text-slate-700">
          <strong>Tujuan:</strong> memisahkan render ulang component dari kebutuhan menghitung ulang
          hasil filter.
        </p>
    </section>

    <section className="grid gap-4 md:grid-cols-2">
      <div className="rounded-xl border bg-white p-5 shadow-sm">
        <label className="font-semibold text-slate-900" htmlFor="memo-search">Cari Judul Topik</label>

        <input type='search' id="memo-search"  value={searchQuery} onChange={handleSearchChange} placeholder="Contoh: effect" className="mt-3 ml-2 rounded-lg border px-4 py-2 font-medium hover:bg-slate-100" />

        <button onClick={handleUnrelatedRender} className="mt-3 rounded-lg border px-4 py-2 font-medium hover:bg-slate-100">Ubah state lain ({themeCount})</button>

        <p className="mt-3 text-sm text-slate-500">Tombol ini membuat render ulang, tetapi tidak mengubah topics atau search query</p>
      </div>

      <div className="rounded-xl border bg-white p-5 shadow-sm">
        <div className="flex items-center justify-between gap-3">
          <h3 className="font-semibold text-slate-900">Hasil filter </h3>
          <span className="rounded-full bg-blue-200 px-3 py-1 text-sm text-blue-300">
            {filteredTopics.length}
          </span>
        </div>

        {filteredTopics.length === 0 ? (
          <p className="mt-4 rounded-lg bg-red-200 p-4 text-sm text-red-800">Tidak ada topik yang cocok</p>
        ) : (
          <ul className="mt-4 space-y-2">
            {filteredTopics.map((topic) => (
                <li key={topic.id} className="rounded-lg border p-3 text-sm">
                      <span className="font-medium text-slate-900">{topic.title}</span>
                      <span className='ml-2 text-slate-500'>{topic.category}</span>
                </li>  
            ))}  
          </ul>
        )}
      </div>
    </section>
    </article>
  )
}

export default UseMemoLesson
