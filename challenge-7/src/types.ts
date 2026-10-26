// TODO: Definisikan tipe data untuk To-Do item di sini
// Hint: To-Do sebaiknya memiliki id, text, dan status completed

// TODO: Buat interface untuk To-Do item

// TODO: Buat tipe untuk status To-Do (active/done)

// TODO: Buat tipe untuk fungsi-fungsi yang akan digunakan


export interface Todo {
    id: string;
    text: string;
    completed: boolean;
    createdAt: string;
}

// status to-do dalam bentuk label
export type TodoStatus = 'active' | 'done';

// Payload untuk membuat To-Do baru
export type NewTodoInput = Pick<Todo, 'text'>;

// Payload untuk mengubah To-Do yang sudah ada
export type TodoUpdate = Partial<Omit<Todo, 'id' | 'createdAt'>>;

// hasil dari sebuah operasi apakah berhasil membawa data atau gagal membawa data dalam message
export type Result<T> =
  | { type: 'success'; data: T }
  | { type: 'error'; message: string };

// hasil operasi storage untuk menampilkan isi pesan error ke user
export type StorageResult<T> =
  | { type: 'success'; data: T }
  | { type: 'io-error'; message: string }
  | { type: 'parse-error'; message: string }
  | { type: 'invalid-data'; message: string };

// menu aksi pada aplikasi
export type MenuAction =
    | 'add'
    | 'complete'
    | 'delete'
    | 'list'
    | 'search'
    | 'exit';

// Menambahkan To-Do baru dari teks yang diberikan user
export type AddTodoFn = (text: string) => Result<Todo>;

// Menandai To-Do pada nomor urut tertentu sebagai selesai
export type CompleteTodoFn = (nomor: number) => Result<Todo>;

// Menghapus To-Do pada nomor urut tertentu
export type DeleteTodoFn = (nomor: number) => Result<Todo>;

// Mengambil seluruh To-Do yang tersimpan.
export type ListTodosFn = () => Result<Todo[]>;

