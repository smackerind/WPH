export interface LessonItem {
  id: string
  number: number
  title: string
  shortTitle: string
}

export const lessonConfig: LessonItem[] = [
  { id: "tailwind-review", number: 1, title: "Tailwind dalam React", shortTitle: "Tailwind Review" },
  { id: "headless-concept", number: 2, title: "Konsep Headless Component", shortTitle: "Headless Component" },
  { id: "radix-dialog", number: 3, title: "Raw Radix Dialog", shortTitle: "Radix Dialog" },
  { id: "radix-dropdown", number: 4, title: "Raw Radix Dropdown Menu", shortTitle: "Radix Dropdown" },
  { id: "shadcn-components", number: 5, title: "shadcn/ui Components", shortTitle: "shadcn/ui" },
  { id: "cn-utility", number: 6, title: "Utility cn()", shortTitle: "cn() Utility" },
]
