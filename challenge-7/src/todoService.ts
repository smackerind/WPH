// TODO: Import tipe-tipe yang sudah didefinisikan di types.ts

// TODO: Import fungsi storage untuk baca/tulis file

// TODO: Buat fungsi untuk menambahkan To-Do baru
// - Generate id yang unik (bisa pakai timestamp atau counter)
// - Pastikan text tidak kosong
// - Set default status sebagai active

// TODO: Buat fungsi untuk menandai To-Do sebagai selesai
// - Cari To-Do berdasarkan id
// - Ubah statusnya menjadi completed
// - Handle kasus jika id tidak ditemukan

// TODO: Buat fungsi untuk menghapus To-Do
// - Filter To-Do berdasarkan id
// - Handle kasus jika id tidak ditemukan

// TODO: Buat fungsi untuk menampilkan semua To-Do
// - Tampilkan dengan format yang rapi
// - Tambahkan status [ACTIVE] atau [DONE] di depan setiap To-Do
// - Berikan nomor urut untuk memudahkan user memilih

// TODO: Buat fungsi untuk mencari To-Do berdasarkan keyword


import type { Result, StorageResult, Todo } from './types';
import { readTodos, writeTodos } from './storage';
import {
  assertNever,
  formatTodoList,
  isNonEmptyString,
  sanitizeInput,
} from './utils';

// untuk Menerjemahkan hasil storage menjadi `Result<T>` dengan pesan yang ditampilkan ke user
function toResult<T>(storageResult: StorageResult<T>): Result<T> {
  switch (storageResult.type) {
    case 'success':
      return { type: 'success', data: storageResult.data };

    case 'io-error':
      return {
        type: 'error',
        message: `Masalah pada file penyimpanan. ${storageResult.message}`,
      };

    case 'parse-error':
      return {
        type: 'error',
        message: `File data rusak. ${storageResult.message}`,
      };

    case 'invalid-data':
      return {
        type: 'error',
        message: `Data tidak dikenali. ${storageResult.message}`,
      };

    default:
      return assertNever(storageResult);
  }
}

// Membuat id unik: timestamp + komponen acak agar tidak bentrok
function generateId(): string {
  const waktu = Date.now().toString(36);
  const acak = Math.random().toString(36).slice(2, 8);
  return `todo_${waktu}_${acak}`;
}

// memuat seluruh aplikasi to-do dan menterjemahkan langsung apabila ada kegagalan
function loadTodos(): Result<Todo[]> {
  return toResult(readTodos());
}

// Menyimpan dan menerjemahkan error/kesalahan
function saveTodos(todos: readonly Todo[]): Result<void> {
  return toResult(writeTodos(todos));
}

// mengubah nomor urut menjadi index array
function resolveIndex(todos: readonly Todo[], nomor: number): Result<number> {
  if (!Number.isInteger(nomor) || nomor < 1) {
    return {
      type: 'error',
      message: 'Nomor harus berupa bilangan bulat mulai dari 1.',
    };
  }

  if (nomor > todos.length) {
    return {
      type: 'error',
      message:
        todos.length === 0
          ? 'Daftar To-Do masih kosong, tidak ada nomor yang bisa dipilih.'
          : `Nomor ${nomor} tidak ditemukan. Nomor yang tersedia: 1-${todos.length}.`,
    };
  }

  return { type: 'success', data: nomor - 1 };
}

// create, menambah to-do baru
export function addTodo(text: string): Result<Todo> {
  if (!isNonEmptyString(text)) {
    return { type: 'error', message: 'Teks To-Do tidak boleh kosong.' };
  }

  const loaded = loadTodos();
  if (loaded.type === 'error') {
    return loaded;
  }

  const todoBaru: Todo = {
    id: generateId(),
    text: sanitizeInput(text),
    completed: false,
    createdAt: new Date().toISOString(),
  };

  const saved = saveTodos([...loaded.data, todoBaru]);
  if (saved.type === 'error') {
    return saved;
  }

  return { type: 'success', data: todoBaru };
}

// update, penanda to-do pada nomor urut tertentu sebagai yang sudah selesai
export function completeTodo(nomor: number): Result<Todo> {
  const loaded = loadTodos();
  if (loaded.type === 'error') {
    return loaded;
  }

  const todos = loaded.data;
  const resolved = resolveIndex(todos, nomor);
  if (resolved.type === 'error') {
    return resolved;
  }

  const index = resolved.data;
  const target = todos[index];

  if (target.completed) {
    return {
      type: 'error',
      message: `To-Do nomor ${nomor} ("${target.text}") sudah berstatus selesai.`,
    };
  }

  const todoTerbaru: Todo = { ...target, completed: true };
  const daftarBaru = todos.map((todo, i) => (i === index ? todoTerbaru : todo));

  const saved = saveTodos(daftarBaru);
  if (saved.type === 'error') {
    return saved;
  }

  return { type: 'success', data: todoTerbaru };
}

// delete, menghapus To-Do pada nomor urut tertentu
export function deleteTodo(nomor: number): Result<Todo> {
  const loaded = loadTodos();
  if (loaded.type === 'error') {
    return loaded;
  }

  const todos = loaded.data;
  const resolved = resolveIndex(todos, nomor);
  if (resolved.type === 'error') {
    return resolved;
  }

  const index = resolved.data;
  const todoTerhapus = todos[index];
  const daftarBaru = todos.filter((_, i) => i !== index);

  const saved = saveTodos(daftarBaru);
  if (saved.type === 'error') {
    return saved;
  }

  return { type: 'success', data: todoTerhapus };
}

// membaca, mengambil keseluruhan to-do yang ada
export function getTodos(): Result<Todo[]> {
  return loadTodos();
}

// mengambil semua to-do dlm bentuk teks, sperti:
//   [ACTIVE] 1. Belajar TScript
//   [DONE]   2. Install Node.js
//   [ACTIVE] 3. Buat new project
export function listTodos(): Result<string> {
  const loaded = loadTodos();
  if (loaded.type === 'error') {
    return loaded;
  }

  if (loaded.data.length === 0) {
    return { type: 'success', data: 'Belum ada To-Do. Tambahkan lewat menu 1.' };
  }

  return { type: 'success', data: formatTodoList(loaded.data) };
}

// search dr to-do list dan menampilkannya
export function searchTodos(keyword: string): Result<Todo[]>;
export function searchTodos(nomor: number): Result<Todo>;
export function searchTodos(query: string | number): Result<Todo[] | Todo> {
  const loaded = loadTodos();
  if (loaded.type === 'error') {
    return loaded;
  }

  const todos = loaded.data;

  if (typeof query === 'number') {
    const resolved = resolveIndex(todos, query);
    if (resolved.type === 'error') {
      return resolved;
    }
    return { type: 'success', data: todos[resolved.data] };
  }

  if (!isNonEmptyString(query)) {
    return { type: 'error', message: 'Kata kunci pencarian tidak boleh kosong.' };
  }

  const kataKunci = sanitizeInput(query).toLowerCase();
  const hasil = todos.filter((todo) =>
    todo.text.toLowerCase().includes(kataKunci),
  );

  return { type: 'success', data: hasil };
}

// pencarian pada nomor tertentu pada menu complete/delete
export function searchTodosWithNumber(
  keyword: string,
): Result<Array<{ nomor: number; todo: Todo }>> {
  const loaded = loadTodos();
  if (loaded.type === 'error') {
    return loaded;
  }

  if (!isNonEmptyString(keyword)) {
    return { type: 'error', message: 'Kata kunci pencarian tidak boleh kosong.' };
  }

  const kataKunci = sanitizeInput(keyword).toLowerCase();

  const hasil = loaded.data
    .map((todo, index) => ({ nomor: index + 1, todo }))
    .filter((item) => item.todo.text.toLowerCase().includes(kataKunci));

  return { type: 'success', data: hasil };
}
