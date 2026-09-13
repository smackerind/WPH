import { z } from 'zod'

export const registrationSchema = z.object({
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

export type RegistrationData = z.infer<typeof registrationSchema>
