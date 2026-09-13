import { useState } from 'react'
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

const validData: RegistrationData = {
  fullName: 'Budi Santoso',
  email: 'budi@example.com',
  learningGoal: 'Belajar membuat form react',
}

const invalidData = {
  fullname: 'B',
  email: 'bukan-email',
  learningGoal: 'React',
}

type ValidationResult =
  | { success: true; data: RegistrationData }
  | { success: false; issues: { field: string; message: string }[] }

export function ZodSafeParseLesson() {
  const [validationResult, setValidationResult] =
    useState<ValidationResult | null>(null)

  function handleValidate(data: unknown) {
    const result = registrationSchema.safeParse(data)

    if (!result.success) {
      setValidationResult({
        success: false,
        issues: result.error.issues.map((issue) => ({
          field: issue.path.join('.') || 'data',
          message: issue.message,
        })),
      })
      return
    }

    setValidationResult({ success: true, data: result.data })
  }

  function handleResetResult() {
    setValidationResult(null)
  }

  return (
    <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
        <p className="text-slate-600">
          <code className="rounded bg-slate-100 px-1.5 py-0.5 text-blue-800">
            safeParse
          </code>{' '}
          mengembalikan hasil berhasil atau gagal tanpa membuat aplikasi
          down/tanpa melempar error
        </p>

        <div className="mt-5 flex flex-wrap gap-4">
          {/* validasi data benar */}
          <button
            onClick={() => handleValidate(validData)}
            type="button"
            className="rounded-lg bg-emerald-700 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-800"
          >
            Validasi data benar
          </button>

          {/* validasi data salah */}
          <button
            onClick={() => handleValidate(invalidData)}
            type="button"
            className="rounded-lg bg-red-700 px-4 py-2 text-sm font-semibold text-white hover:bg-red-800"
          >
            Validasi data salah
          </button>

          {/* reset hasil */}
          <button
            onClick={handleResetResult}
            type="button"
            className="rounded-lg bg-slate-300 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-50 hover:text-black"
          >
            Reset hasilr
          </button>
        </div>
      </section>

      <section
        aria-live="polite"
        className="min-h-56 rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
      >
        <h3 className="font-semibold">Hasil validasi</h3>

        {!validationResult && (
          <div className="mt-4 rounded-lg border border-dashed border-slate-300 p-8 text-center text-sm text-slate-500">
            Pilih salah satu data untk menjalankan safeParse
          </div>
        )}

        {/* sukses data */}
        {validationResult?.success && (
          <div className="mt-4 rounded-lg border border-emerald-200 bg-emerald-50 p-4">
            <p className="font-semibold text-emerald-900">Success: true</p>
            <p className="mt-1 text-sm text-emerald-800">
              Data aman dibaca melalui <code>result.data</code>
            </p>

            <pre className="mt-3 overflow-x-auto text-sm text-emerald-950">
              <code>{JSON.stringify(validationResult.data, null, 2)}</code>
            </pre>
          </div>
        )}

        {/* data gagal */}

        {validationResult && !validationResult.success && (
          <div className="mt-4 rounded-lg border border-red-200 bg-red-50 p-4">
            <p className="font-semibold text-red-900">success: false</p>
            <p className="mt-1 text-sm text-red-800">
              Baca daftar masalah melalui <code>result.error.issues</code>.
            </p>
            <ul className="mt-3 space-y-2">
              {validationResult.issues.map((issue) => (
                <li
                  key={issue.field}
                  className="rounded border border-red-200 bg-white p-3 text-sm"
                >
                  <span className="font-semibold text-red-900">
                    {issue.field}
                  </span>
                  <span className="text-red-800"> — {issue.message}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>
    </article>
  )
}
