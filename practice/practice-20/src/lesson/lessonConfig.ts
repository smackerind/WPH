export interface LessonConfig {
  title: string
  shortTitle: string
  duration: string
}

export const lessonConfig: LessonConfig[] = [
  { title: 'Zod Schema', shortTitle: 'Schema', duration: '8 menit' },
  { title: 'Zod safeParse', shortTitle: 'safeParse', duration: '8 menit' },
  { title: 'React Hook Form', shortTitle: 'RHF Dasar', duration: '10 menit' },
  {
    title: 'Zod + React Hook Form',
    shortTitle: 'Resolver',
    duration: '10 menit',
  },
  { title: 'Motion Basics', shortTitle: 'Motion', duration: '7 menit' },
  { title: 'Motion Transition', shortTitle: 'Transition', duration: '6 menit' },
  { title: 'Exit Animation', shortTitle: 'Exit', duration: '7 menit' },
  { title: 'Rotating Element', shortTitle: 'Rotate', duration: '6 menit' },
]
