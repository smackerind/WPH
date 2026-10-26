// TODO: Implementasikan type guards di sini
// Hint: Type guard berguna untuk memastikan tipe data saat runtime

// TODO: Buat fungsi untuk memvalidasi apakah suatu objek adalah To-Do yang valid

// TODO: Buat fungsi helper untuk menampilkan tanggal/waktu dengan format yang bagus

// TODO: Buat fungsi untuk memastikan input dari user adalah string yang valid


import type { Todo, TodoStatus } from './types';

// apabila menangani kondisi yang error saat compile bukan saat runtime
export function assertNever(value: never): never {
  throw new Error(`Kondisi tidak tertangani: ${JSON.stringify(value)}`);
}

// Memastikan sebuah nilai adalah object biasa , bukan null, bukan array
function isPlainObject(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

// untuk memvalidasi input user dan field text pada To-Do
export function isNonEmptyString(value: unknown): value is string {
  return typeof value === 'string' && value.trim().length > 0;
}

// memeriksa setiap urutan tipe nilai property
export function isTodo(value: unknown): value is Todo {
  if (!isPlainObject(value)) {
    return false;
  }

  return (
    'id' in value &&
    isNonEmptyString(value.id) &&
    'text' in value &&
    isNonEmptyString(value.text) &&
    'completed' in value &&
    typeof value.completed === 'boolean' &&
    'createdAt' in value &&
    typeof value.createdAt === 'string'
  );
}

// array to-do
export function isTodoArray(value: unknown): value is Todo[] {
  return Array.isArray(value) && value.every(isTodo);
}

// label status completed
export function getStatus(todo: Todo): TodoStatus {
  return todo.completed ? 'done' : 'active';
}

// memberikan label suatu status pd to-do status
export const STATUS_LABEL = {
  active: '[ACTIVE]',
  done: '[DONE]',
} as const satisfies Record<TodoStatus, string>;

//untuk lebar kolom Active dan Done
const LABEL_WIDTH = 8;

// mengembalikan yang tidak jelas jika string tanggal tidak valid
export function formatDateTime(isoString: string): string {
  const date = new Date(isoString);

  if (Number.isNaN(date.getTime())) {
    return '(tanggal tidak valid)';
  }

  const pad = (n: number): string => String(n).padStart(2, '0');

  const tanggal = `${pad(date.getDate())}/${pad(date.getMonth() + 1)}/${date.getFullYear()}`;
  const waktu = `${pad(date.getHours())}:${pad(date.getMinutes())}`;

  return `${tanggal} ${waktu}`;
}

// menampilkan status setiap baris tampilan To-do
export function formatTodoLine(todo: Todo, nomor: number): string {
  const label = STATUS_LABEL[getStatus(todo)].padEnd(LABEL_WIDTH, ' ');
  return `${label} ${nomor}. ${todo.text}`;
}


// nomor urut dr posisi dlm array yg diberikan
export function formatTodoList(todos: readonly Todo[]): string {
  return todos
    .map((todo, index) => formatTodoLine(todo, index + 1))
    .join('\n');
}

// memvalidasi input user
// input user menjadi string
export function sanitizeInput(value: string): string {
  return value.trim().replace(/\s+/g, ' ');
}


// Fungsi untuk memparsing input nomor dari user menjadi angka
export function parseNomor(value: string): number | undefined {
  const trimmed = value.trim();

  if (!/^\d+$/.test(trimmed)) {
    return undefined;
  }

  const nomor = Number(trimmed);
  return Number.isInteger(nomor) && nomor >= 1 ? nomor : undefined;
}

// Fungsi untuk mendapatkan pesan error dari objek error yang mungkin tidak diketahui
export function getErrorMessage(error: unknown): string {
  return error instanceof Error ? error.message : 'Kesalahan tidak diketahui';
}
