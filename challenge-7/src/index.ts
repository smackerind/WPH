// TODO: Import readline untuk membaca input dari command line

// TODO: Import fungsi-fungsi dari todoService

// TODO: Import fungsi-fungsi dari utils (termasuk type guards)

// TODO: Buat fungsi untuk menampilkan menu utama
// Tampilkan opsi seperti:
// 1. Add new todo
// 2. Mark todo as complete
// 3. Delete todo
// 4. List all todos
// 5. Search todos
// 6. Exit

// TODO: Buat fungsi untuk handle input dari user
// Gunakan readline.question untuk menerima input

// TODO: Buat fungsi main yang akan menjalankan aplikasi secara loop
// Hint: Gunakan recursive function atau while loop

// TODO: Jalankan fungsi main
//console.log('Welcome to TypeScript To-Do App!');
//console.log('Start building your app here...');
import * as readline from 'readline/promises';
import { stdin as input, stdout as output } from 'process';

import type { MenuAction, Todo } from './types';
import { initStorage } from './storage';
import {
  addTodo,
  completeTodo,
  deleteTodo,
  listTodos,
  searchTodosWithNumber,
} from './todoService';
import {
  assertNever,
  formatDateTime,
  formatTodoLine,
  getErrorMessage,
  parseNomor,
  sanitizeInput,
} from './utils';

//pmetaan menu
const MENU = {
    '1': 'add',
    '2': 'complete',
    '3': 'delete',
    '4': 'list',
    '5': 'search',
    '6': 'exit',
} as const satisfies Record<string, MenuAction>;

type MenuKey = keyof typeof MENU;

//memeriksa inputan user apakah termasuk dlm pulihan
function isMenuKey(value: string): value is MenuKey {
  return Object.prototype.hasOwnProperty.call(MENU, value);
}

function tampilkanMenu(): void {
  console.log('\n===================================');
  console.log('        TO-DO LIST APP');
  console.log('===================================');
  console.log('1. Add new todo');
  console.log('2. Mark todo as complete');
  console.log('3. Delete todo');
  console.log('4. List all todos');
  console.log('5. Search todos');
  console.log('6. Exit');
  console.log('-----------------------------------');
}

// menampilkan pesan setiap inputan
function sukses(pesan: string): void {
  console.log(`\n[OK] ${pesan}`);
}

function gagal(pesan: string): void {
  console.log(`\n[GAGAL] ${pesan}`);
}

function ringkasTodo(todo: Todo): string {
  return `"${todo.text}" (dibuat ${formatDateTime(todo.createdAt)})`;
}

// menampilkan daftar to-do terupdate agar user tahu nomor berapa yg dipilih
function tampilkanDaftar(): void {
  const hasil = listTodos();

  if (hasil.type === 'error') {
    gagal(hasil.message);
    return;
  }

  console.log('\n--- DAFTAR TO-DO ---');
  console.log(hasil.data);
}


// handle setiap aksi menu pilihan
async function handleAdd(rl: readline.Interface): Promise<void> {
  const jawaban = await rl.question('\nTeks To-Do baru: ');
  const teks = sanitizeInput(jawaban);

  const hasil = addTodo(teks);

  if (hasil.type === 'error') {
    gagal(hasil.message);
    return;
  }

  sukses(`To-Do ditambahkan: ${ringkasTodo(hasil.data)}`);
}


async function handleComplete(rl: readline.Interface): Promise<void> {
  tampilkanDaftar();

  const jawaban = await rl.question('\nNomor To-Do yang selesai: ');
  const nomor = parseNomor(jawaban);

  if (nomor === undefined) {
    gagal('Masukkan nomor yang valid (bilangan bulat mulai dari 1).');
    return;
  }

  const hasil = completeTodo(nomor);

  if (hasil.type === 'error') {
    gagal(hasil.message);
    return;
  }

  sukses(`Ditandai selesai: ${ringkasTodo(hasil.data)}`);
}


async function handleDelete(rl: readline.Interface): Promise<void> {
  tampilkanDaftar();

  const jawaban = await rl.question('\nNomor To-Do yang dihapus: ');
  const nomor = parseNomor(jawaban);

  if (nomor === undefined) {
    gagal('Masukkan nomor yang valid (bilangan bulat mulai dari 1).');
    return;
  }

  const konfirmasi = await rl.question(`Yakin menghapus nomor ${nomor}? (y/n): `);

  if (konfirmasi.trim().toLowerCase() !== 'y') {
    console.log('\nPenghapusan dibatalkan.');
    return;
  }

  const hasil = deleteTodo(nomor);

  if (hasil.type === 'error') {
    gagal(hasil.message);
    return;
  }

  sukses(`To-Do dihapus: ${ringkasTodo(hasil.data)}`);
}


function handleList(): void {
  tampilkanDaftar();
}


async function handleSearch(rl: readline.Interface): Promise<void> {
  const jawaban = await rl.question('\nKata kunci pencarian: ');
  const hasil = searchTodosWithNumber(jawaban);

  if (hasil.type === 'error') {
    gagal(hasil.message);
    return;
  }

  if (hasil.data.length === 0) {
    console.log(`\nTidak ada To-Do yang cocok dengan "${sanitizeInput(jawaban)}".`);
    return;
  }

  console.log(`\n--- HASIL PENCARIAN (${hasil.data.length} ditemukan) ---`);
  for (const item of hasil.data) {
    console.log(formatTodoLine(item.todo, item.nomor));
  }
}


// menjalankan aksi dalam menu
async function jalankanAksi(
aksi: MenuAction,
rl: readline.Interface,
): Promise<boolean> {
switch (aksi) {
    case 'add':
        await handleAdd(rl);
        return true;
    
    case 'complete':
        await handleComplete(rl);
        return true;

    case 'delete':
        await handleDelete(rl);
        return true;

    case 'list':
        handleList();
        return true;

    case 'search':
        await handleSearch(rl);
        return true;
    
    case 'exit':
        console.log('\n Terima Kasih. Sampai Jumpa!');
        return false;

    default:
      return assertNever(aksi);
}
}


async function main(): Promise<void> {
  console.log('Welcome to TypeScript To-Do App!');

  const init = initStorage();
  if (init.type !== 'success') {
    console.error(`\n[GAGAL] ${init.message}`);
    console.error('Aplikasi dihentikan karena penyimpanan tidak siap.');
    process.exitCode = 1;
    return;
  }

  const rl = readline.createInterface({ input, output });

  try {
    let berjalan = true;

    while (berjalan) {
      tampilkanMenu();
      const pilihan = (await rl.question('Pilih menu (1-6): ')).trim();

      if (!isMenuKey(pilihan)) {
        gagal(`Pilihan "${pilihan}" tidak dikenali. Masukkan angka 1 sampai 6.`);
        continue;
      }

      berjalan = await jalankanAksi(MENU[pilihan], rl);
    }
  } catch (error: unknown) {
    console.error(`\n[GAGAL] Terjadi kesalahan tak terduga: ${getErrorMessage(error)}`);
    process.exitCode = 1;
  } finally {
    rl.close();
  }
}

void main();