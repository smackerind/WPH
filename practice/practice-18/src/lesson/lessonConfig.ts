export interface LessonConfig {
  id: string;
  shortTitle: string;
  title: string;
  description: string;
  optionalInShortPath?: boolean;
}

export const lessons: LessonConfig[] = [
  {
    id: "rules-of-hooks",
    shortTitle: "Rules of Hooks",
    title: "Rules of Hooks",
    description: "Menjaga urutan pemanggilan Hook tetap konsisten.",
  },
  {
    id: "reducer-counter",
    shortTitle: "Reducer Counter",
    title: "Counter dengan useReducer",
    description: "Mengenal state, action, dispatch, dan reducer.",
  },
  {
    id: "reducer-form",
    shortTitle: "Reducer Form",
    title: "Controlled Form dengan Reducer",
    description: "Mengelola beberapa perubahan form di satu tempat.",
    optionalInShortPath: true,
  },
  {
    id: "theme-context",
    shortTitle: "Theme Context",
    title: "Berbagi Theme dengan Context",
    description: "Membagikan value ke descendant tanpa prop drilling.",
  },
];
