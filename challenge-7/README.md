# Assignment 7: Transform To-Do App using TypeScript

Selamat datang di challenge Week 7. Di sini kamu akan mengubah aplikasi To-Do dari JavaScript menjadi TypeScript yang fully typed.

## Tujuan Pembelajaran

Setelah menyelesaikan challenge ini, kamu akan memahami:

- Cara mendefinisikan tipe data dengan types dan interfaces
- Implementasi type guards untuk runtime validation
- Proper imports dan exports antar file
- Error handling yang type-safe
- Best practices dalam menulis kode TypeScript

## Struktur Folder

```
todo-app-typescript/
├── src/
│   ├── types.ts        # Definisi tipe data (interface, type)
│   ├── utils.ts        # Helper functions dan type guards
│   ├── storage.ts      # File handling (read/write JSON)
│   ├── todoService.ts  # Business logic (CRUD operations)
│   └── index.ts        # Entry point dan UI/menu
├── dist/               # Hasil compile TypeScript (auto-generated)
├── package.json
├── tsconfig.json
└── .gitignore
```

## Cara Memulai

1. Install dependencies:

   ```
   npm install
   ```

2. Compile TypeScript:

   ```
   npm run build
   ```

3. Jalankan aplikasi:

   ```
   npm start
   ```

   Atau langsung build dan run:

   ```
   npm run dev
   ```

## Panduan Pengembangan

### Step 1: Definisikan Types (types.ts)

Mulai dari yang paling dasar. Tentukan seperti apa bentuk data To-Do. Pikirkan:

- Apa saja properti yang dimiliki sebuah To-Do?
- Tipe data apa yang cocok untuk masing-masing properti?
- Apakah ada properti yang opsional?

### Step 2: Buat Utilities (utils.ts)

Type guards sangat penting ketika kita membaca data dari file JSON. Kita perlu memastikan data yang dibaca sesuai dengan tipe yang kita harapkan.

Contoh kasus: Saat membaca file JSON, TypeScript tidak tahu apakah isi file tersebut benar-benar array of To-Do. Type guard akan membantu memvalidasi ini.

### Step 3: Implementasi Storage (storage.ts)

File ini menangani operasi baca-tulis ke file system. Perhatikan:

- Gunakan module fs dari Node.js
- Handle error dengan try-catch
- Pastikan folder data dibuat otomatis jika belum ada

### Step 4: Business Logic (todoService.ts)

Ini inti dari aplikasi. Implementasikan semua operasi CRUD:

- Add: Buat To-Do baru dengan id unik
- Complete: Cari dan update status To-Do
- Delete: Hapus To-Do berdasarkan id
- List: Tampilkan semua dengan format rapi

Format tampilan yang diharapkan:

```
[ACTIVE] 1. Belajar TypeScript
[DONE]   2. Install Node.js
[ACTIVE] 3. Buat project baru
```

### Step 5: User Interface (index.ts)

Buat menu interaktif menggunakan readline. Aplikasi harus:

- Loop terus sampai user memilih exit
- Validasi input user
- Tampilkan pesan error yang jelas jika terjadi kesalahan

## Checklist Penyelesaian

Sebelum submit, pastikan:

- [ ] Semua file di-folder src sudah diisi
- [ ] Tidak ada error saat compile (npm run build)
- [ ] Tidak ada type errors (gunakan `npx tsc --noEmit` untuk cek)
- [ ] Fungsi add todo berjalan dengan baik
- [ ] Fungsi mark complete berjalan dengan baik
- [ ] Fungsi delete todo berjalan dengan baik
- [ ] Fungsi list todos menampilkan [ACTIVE] dan [DONE] dengan benar
- [ ] Type guards sudah diimplementasikan
- [ ] Error handling sudah ditangani dengan baik
- [ ] Imports dan exports sudah benar

## Kriteria Penilaian

| Kriteria | Bobot | Deskripsi |
|----------|-------|-----------|
| **Type Safety** | 25% | - Penggunaan TypeScript yang proper (no `any` types)<br>- Interface dan type definitions yang lengkap<br>- Type guards untuk validasi runtime |
| **Functionality** | 30% | - Fitur CRUD berjalan dengan baik<br>- Format tampilan sesuai spesifikasi<br>- Data persistence (read/write JSON) |
| **Code Quality** | 20% | - Struktur kode rapi dan modular<br>- Penamaan variabel/fungsi yang deskriptif<br>- Proper imports/exports antar module |
| **Error Handling** | 15% | - Try-catch untuk operasi file<br>- Validasi input user<br>- Error messages yang informatif |
| **Best Practices** | 10% | - Mengikuti panduan pengembangan<br>- No TypeScript compile errors<br>- Code yang maintainable |

### Detail Penilaian per File

| File | Poin Utama |
|------|-----------|
| `types.ts` | Interface Todo lengkap dengan tipe data yang sesuai |
| `utils.ts` | Type guards untuk validasi Todo dan Todo array |
| `storage.ts` | Error handling saat baca/tulis file, folder data otomatis dibuat |
| `todoService.ts` | CRUD operations dengan type-safe parameters |
| `index.ts` | Menu interaktif dengan validasi input dan loop sampai exit |

## Tips

1. Kerjakan satu file per waktu, mulai dari types.ts
2. Jika menemui error type, baca pesan error dengan teliti. TypeScript biasanya memberikan petunjuk yang jelas.
3. Gunakan fitur autocomplete di editor (VS Code), ini akan membantu menemukan properties dan methods yang tersedia.
4. Jika stuck, coba console.log untuk melihat bentuk data yang sebenarnya.
5. Ingat: TypeScript membantu kita menangkap error di tahap compile, bukan saat runtime.

## Resources

- TypeScript Handbook: https://www.typescriptlang.org/docs/
- Type Guards: https://www.typescriptlang.org/docs/handbook/2/narrowing.html
- Node.js File System: https://nodejs.org/api/fs.html

Selamat mengerjakan. Semangat belajarnya!

Henry Rivardo - Mentor Software Engineer
