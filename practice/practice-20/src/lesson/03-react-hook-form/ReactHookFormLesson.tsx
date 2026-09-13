import { useState } from 'react'
import { useForm } from 'react-hook-form'

interface BasicFormData {
  fullName: string
  email: string
}

export function ReactHookFormLesson() {
  const [submittedData, setSubmittedData] = useState<BasicFormData | null>(null)
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<BasicFormData>({
    defaultValues: { fullName: '', email: '' },
  })

  function handleValidSubmit(data: BasicFormData) {
    setSubmittedData(data)
  }

  function handleResetForm() {
    reset()
    setSubmittedData(null)
  }

  return (
    <article className="space-y-5">
      <div className="grid gap-4 md:grid-cols-2">
        <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <h3 className="font-semibold">Controlled form biasa</h3>
          <pre className="mt-3 rounded-lg bg-slate-100 p-4 text-sm text-slate-700">
            <code>{`useState
+ value
+ onChange
+ validation manual`}</code>
          </pre>
        </section>
        <section className="rounded-xl border border-blue-200 bg-blue-50 p-5 shadow-sm">
          <h3 className="font-semibold text-blue-950">
            Dengan React Hook Form
          </h3>
          <pre className="mt-3 rounded-lg bg-white p-4 text-sm text-blue-900">
            <code>{`register
+ handleSubmit
+ formState.errors`}</code>
          </pre>
        </section>
      </div>

      <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
        <h3 className="text-lg font-bold">Form dasar tanpa Zod</h3>
        <p className="mt-1 text-sm text-slate-600">
          Pada lesson ini, aturan validasi masih ditulis langsung di{' '}
          <code>register</code>.
        </p>

        <form
          onSubmit={handleSubmit(handleValidSubmit)}
          className="mt-5 max-w-xl space-y-4"
          noValidate
        >
          <div>
            <label
              htmlFor="basic-full-name"
              className="mb-1.5 block text-sm font-semibold"
            >
              Nama lengkap
            </label>

            <input
              id="basic-full-name"
              type="text"
              {...register('fullName', {
                required: 'Nama wajib diisi',
                minLength: { value: 2, message: 'Nama minimal 2 karakter' },
              })}
              aria-invalid={Boolean(errors.fullName)}
              aria-describedby={
                errors.fullName ? 'basic-full-name-error' : undefined
              }
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-900 focus:border-blue-600"
            />

            {errors.fullName?.message && (
              <p
                id="basic-full-name-error"
                role="alert"
                className="mt-1.5 text-sm font-medium text-red-700"
              >
                Error: {errors.fullName.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="basic-email"
              className="mb-1.5 block text-sm font-semibold"
            >
              Email
            </label>

            <input
              id="basic-email"
              type="email"
              {...register('email', {
                required: 'Email wajib diisi',
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: 'Format email tidak valid',
                },
              })}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? 'basic-email-error' : undefined}
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-900 focus:border-blue-600"
            />

            {errors.email?.message && (
              <p
                id="basic-email-error"
                role="alert"
                className="mt-1.5 text-sm font-medium text-red-700"
              >
                Error: {errors.email.message}
              </p>
            )}
          </div>

          <div className="flex flex-wrap gap-3 pt-1">
            <button
              type="submit"
              className="rounded-lg bg-blue-700 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-800"
            >
              Kirim form
            </button>
            <button
              type="button"
              onClick={handleResetForm}
              className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold hover:bg-slate-50"
            >
              Reset
            </button>
          </div>
        </form>

        {submittedData && (
          <div
            className="mt-5 rounded-lg border border-emerald-200 bg-emerald-50 p-4"
            aria-live="polite"
          >
            <p className="font-semibold text-emerald-900">
              Callback submit menerima:
            </p>
            <pre className="mt-2 overflow-x-auto text-sm text-emerald-950">
              <code>{JSON.stringify(submittedData, null, 2)}</code>
            </pre>
          </div>
        )}
      </section>

      <aside className="rounded-xl border-l-4 border-blue-600 bg-blue-50 p-5 text-blue-950">
        <p>
          <strong>register</strong> menghubungkan input dengan React Hook Form.
        </p>
        <p className="mt-2">
          <strong>handleSubmit</strong> menjalankan validasi sebelum callback
          submit.
        </p>
        <p className="mt-2 text-sm">
          React Hook Form banyak memakai pendekatan uncontrolled input, jadi
          kita tidak perlu membuat satu state dan onChange untuk setiap field.
        </p>
      </aside>
    </article>
  )
}
