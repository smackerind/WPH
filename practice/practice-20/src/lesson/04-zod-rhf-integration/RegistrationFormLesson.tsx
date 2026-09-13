import { useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { registrationSchema, type RegistrationData } from './registrationSchema'
import { useForm } from 'react-hook-form'

export function RegistrationFormLesson() {
  const [submittedData, setSubmittedData] = useState<RegistrationData | null>(
    null,
  )
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm<RegistrationData>({
    resolver: zodResolver(registrationSchema),
    defaultValues: { fullName: '', email: '', learningGoal: '' },
  })

  function handleValidSubmit(data: RegistrationData) {
    setSubmittedData(data)
    reset()
  }

  return (
    <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <section className="rounded-xl border border-blue-200 bg-blue-50 p-5">
        <h3 className="font-semibold text-blue-950">Alur resolver</h3>
        <pre className="mt-3 overflow-x-auto text-sm leading-6 text-blue-900">
          <code>{`register mengumpulkan data
        ↓
handleSubmit dijalankan
        ↓
zodResolver memanggil schema
        ↓
errors atau valid data`}</code>
        </pre>
      </section>

      <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
        <div className="max-w-xl">
          <h3 className="text-lg font-bold">
            Form dengan satu source of truth
          </h3>

          <form
            onSubmit={handleSubmit(handleValidSubmit)}
            className="mt-5 space-y-4"
            noValidate
          >
            <div>
              <label
                htmlFor="resolver-full-name"
                className="mb-1.5 block text-sm font-semibold"
              >
                Nama lengkap
              </label>

              <input
                id="resolver-full-name"
                type="text"
                {...register('fullName')}
                aria-invalid={Boolean(errors.fullName)}
                aria-describedby={
                  errors.fullName ? 'basic-full-name-error' : undefined
                }
                className={`w-full resize-y rounded-lg border px-3 py-2 focus:border-blue-600 ${errors.learningGoal ? 'border-red-500 bg-red-50' : 'border-slate-300'}`}
              />

              {errors.fullName?.message && (
                <p
                  id="resolver-full-name-error"
                  role="alert"
                  className="mt-1.5 text-sm font-medium text-red-700"
                >
                  Error: {errors.fullName.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="resolver-email"
                className="mb-1.5 block text-sm font-semibold"
              >
                Email
              </label>

              <input
                id="resolver-email"
                type="email"
                {...register('email')}
                aria-invalid={Boolean(errors.email)}
                aria-describedby={
                  errors.email ? 'resolver-email-error' : undefined
                }
                className={`w-full resize-y rounded-lg border px-3 py-2 focus:border-blue-600 ${errors.learningGoal ? 'border-red-500 bg-red-50' : 'border-slate-300'}`}
              />

              {errors.email?.message && (
                <p
                  id="resolver-email-error"
                  role="alert"
                  className="mt-1.5 text-sm font-medium text-red-700"
                >
                  Error: {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="resolver-learning-goal"
                className="mb-1.5 block text-sm font-semibold"
              >
                Learning Goal
              </label>

              <textarea
                id="resolver-learning-goal"
                rows={3}
                {...register('learningGoal')}
                aria-invalid={Boolean(errors.learningGoal)}
                aria-describedby={
                  errors.learningGoal ? 'resolver-learning-goal' : undefined
                }
                className={`w-full resize-y rounded-lg border px-3 py-2 focus:border-blue-600 ${errors.learningGoal ? 'border-red-500 bg-red-50' : 'border-slate-300'}`}
              />

              {errors.learningGoal?.message && (
                <p
                  id="resolver-learning-goal"
                  role="alert"
                  className="mt-1.5 text-sm font-medium text-red-700"
                >
                  Error: {errors.learningGoal.message}
                </p>
              )}
            </div>

            <button
              disabled={isSubmitting}
              type="submit"
              className="rounded-lg bg-blue-700 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-800"
            >
              {isSubmitting ? 'Memeriksa...' : 'Validasi dan kirim'}
            </button>

            {submittedData && isSubmitSuccessful && (
              <div
                className="mt-5 rounded-lg border border-emerald-200 bg-emerald-50 p-4"
                aria-live="polite"
              >
                <p className="font-semibold text-emerald-900">
                  Data lolos schema
                </p>
                <pre className="mt-2 overflow-x-auto text-sm text-emerald-950">
                  <code>{JSON.stringify(submittedData, null, 2)}</code>
                </pre>
              </div>
            )}
          </form>
        </div>
      </section>
    </article>
  )
}
