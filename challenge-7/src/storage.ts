import * as fs from 'fs';
import * as path from 'path';

// TODO: Definisikan path file untuk menyimpan data To-Do

// TODO: Buat fungsi untuk membaca To-Do dari file
// Hint: Gunakan try-catch untuk handle error saat membaca file

// TODO: Buat fungsi untuk menyimpan To-Do ke file
// Hint: Jangan lupa konversi ke JSON string sebelum disimpan

// TODO: Buat fungsi untuk inisialisasi storage (buat file kosong jika belum ada)

import type {StorageResult, Todo} from './types';
import {getErrorMessage, isTodoArray} from './utils';


//Lokasi penyimpanan data To-Do
export const DATA_DIR = path.join(process.cwd(),'data');

export const DATA_FILE = path.join(DATA_DIR,'todos.json');


//Inisialisasi storage: memastikan folder dan file tersedia
export function initStorage(): StorageResult<void> {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }

    if (!fs.existsSync(DATA_FILE)) {
      fs.writeFileSync(DATA_FILE, '[]', 'utf-8');
    }

    return { type: 'success', data: undefined };
  } catch (error: unknown) {
    return {
      type: 'io-error',
      message: `Gagal menyiapkan penyimpanan: ${getErrorMessage(error)}`,
    };
  }
}


//Membaca seluruh To-Do dari file
export function readTodos(): StorageResult<Todo[]> {
  let raw: string;

  try {
    if (!fs.existsSync(DATA_FILE)) {
      // File belum ada dianggap sebagai daftar kosong, bukan error.
      return { type: 'success', data: [] };
    }

    raw = fs.readFileSync(DATA_FILE, 'utf-8');
  } catch (error: unknown) {
    return {
      type: 'io-error',
      message: `Gagal membaca file data: ${getErrorMessage(error)}`,
    };
  }

  if (raw.trim().length === 0) {
    return { type: 'success', data: [] };
  }

  let parsed: unknown;

  try {
    parsed = JSON.parse(raw);
  } catch (error: unknown) {
    return {
      type: 'parse-error',
      message: `Isi file data bukan JSON yang valid: ${getErrorMessage(error)}`,
    };
  }

  if (!isTodoArray(parsed)) {
    return {
      type: 'invalid-data',
      message: 'Struktur data pada file tidak sesuai format To-Do.',
    };
  }

  return { type: 'success', data: parsed };
}

//Menyimpan seluruh To-Do ke file
export function writeTodos(todos: readonly Todo[]): StorageResult<void> {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }

    fs.writeFileSync(DATA_FILE, JSON.stringify(todos, null, 2), 'utf-8');

    return { type: 'success', data: undefined };
  } catch (error: unknown) {
    return {
      type: 'io-error',
      message: `Gagal menyimpan data: ${getErrorMessage(error)}`,
    };
  }
}