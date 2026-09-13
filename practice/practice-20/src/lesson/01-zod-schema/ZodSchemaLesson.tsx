import { z } from 'zod'

const registrationSchema = z.object({
  fullName: z.string().trim().min(2, {
    error: 'Nama minimal 2 karakter dan harus huruf',
  }),
  email: z.email({
    error: 'Format email tidak valid',
  }),
  learningGoal: z.string().trim().min(10, {
    error: 'Tujuan belajar minimal 10 karakter',
  }),
})

type RegistrationData = z.infer<typeof registrationSchema>

const exampleData: RegistrationData = {
  fullName: 'Budi Santoso',
  email: 'budi@example.com',
  learningGoal: 'Belajar membuat form react',
}

export function ZodSchemaLesson() {
  return (
    <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
        <p className="text-sm font-semibold text-blue-700">
          Pertanyaan pembuka
        </p>
        <h3 className="mt-2 text-xl font-bold">
          Apakah data dari input user selalu bisa dipercaya?
        </h3>
        <p className="mt-3 text-slate-600">
          Tidak. Schema adalah aturan yang memeriksa bentuk data sebelum
          aplikasi menggunakannya.
        </p>
      </div>

      <div className="grid gap-5 xl:grid-cols-2">
        <section className="rounded-xl bg-slate-900 p-5 text-slate-100 shadow-sm">
          <div className="mb-4 flex items-center justify-between gap-3">
            <h3 className="font-semibold">registrationSchema.ts</h3>
            <span className="rounded bg-blue-500/20 px-2 py-1 text-xs text-blue-200">
              ZOD
            </span>
          </div>
          <pre className="overflow-x-auto text-sm leading-6">
            <code>{`const registrationSchema = z.object({
  fullName: z.string().trim().min(2, {
    error: 'Nama minimal 2 karakter dan harus huruf',
  }),
  email: z.email({
    error: 'Format email tidak valid',
  }),
  learningGoal: z.string().trim().min(10, {
    error: 'Tujuan belajar minimal 10 karakter',
  }),
})`}</code>
          </pre>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <h3 className="font-semibold">Baca schema dari luar ke dalam</h3>
          <dl className="mt-4 space-y-3 text-sm">
            <div>
              <dt className="font-semibold text-slate-900">z.object</dt>
              <dd className="text-slate-600">Menentukan struktur object</dd>
            </div>
            <div>
              <dt className="font-semibold text-slate-900">z.string + trim</dt>
              <dd className="text-slate-600">
                Menerima string dan hapus spasi
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-slate-900">min + z.email</dt>
              <dd className="text-slate-600">
                Menerima panjang dan format email
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-slate-900">z.infer</dt>
              <dd className="text-slate-600">
                Menghasilkan typescript type dari schema
              </dd>
            </div>
          </dl>

          <div className="mt-5 rounded-lg border border-emerald-200 bg-emerald-50 p-4">
            <p className="text-xs font-bold tracking-wide text-emerald-500 uppercase">
              Contoh data bertipe
            </p>
            <p className="mt-2 text-sm text-emerald-950">
              {exampleData.fullName} . {exampleData.email}
            </p>
          </div>
        </section>
      </div>
    </section>
  )
}
