[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/1AC7_bmM)
# Assignment 1 - Landing Page + Git

## Selamat Datang

Halo teman-teman, selamat datang di assignment pertama kalian. Di minggu ini kita akan mulai dari fondasi paling penting dalam web development, yaitu HTML semantic, CSS dasar, dan Git sebagai version control. Anggap saja assignment ini sebagai pemanasan sebelum kita masuk ke materi yang lebih kompleks di minggu-minggu berikutnya.

Tujuan saya memberikan assignment ini bukan sekadar agar kalian bisa menyelesaikan halaman web, tapi supaya kalian terbiasa dengan proses kerja seorang developer. Mulai dari membaca requirement, menulis struktur yang rapi, sampai mendokumentasikan progres kalian lewat commit Git.

## Konteks Assignment

Kalian akan membuat satu halaman landing page sederhana. Tidak perlu kompleks, yang penting struktur dan dasarnya benar. Halaman ini akan menjadi pijakan pertama kalian dalam memahami bagaimana sebuah web dibangun dari nol.

## Checklist yang Harus Diselesaikan

1. HTML semantic yang lengkap dan sesuai konteks isinya.
2. CSS untuk layout dasar dan typography yang konsisten.
3. Push ke GitHub dengan minimal 3 commit yang pesannya jelas dan bermakna.

## Arahan dari Saya

Saya tidak akan memberikan jawaban langsung, karena yang paling berharga dari assignment ini justru proses eksplorasinya. Tapi saya akan bantu arahkan agar kalian tidak tersesat.

### 1. Sebelum Menulis Kode

Luangkan waktu sebentar untuk berpikir dulu sebelum tangan kalian menyentuh keyboard. Pertanyaan yang bisa kalian tanyakan ke diri sendiri:

- Halaman ini sebenarnya mau menyampaikan pesan apa ke pembacanya?
- Bagian mana yang jadi pembuka, isi utama, dan penutup?
- Kalau saya hilangkan seluruh styling, apakah strukturnya masih masuk akal dibaca dari atas ke bawah?

Kalau jawaban dari pertanyaan ketiga adalah ya, berarti kalian sudah di jalur yang benar untuk HTML semantic.

### 2. Saat Menulis HTML

Kenali dulu tag-tag semantic yang tersedia. Coba pelajari perbedaan antara tag yang terlihat mirip tapi punya makna berbeda. Misalnya, kapan sebaiknya menggunakan `section` dan kapan menggunakan `article`. Apa bedanya `div` dengan tag semantic lainnya. Kenapa kita punya `header`, `main`, `nav`, dan `footer` padahal kita bisa saja pakai `div` untuk semuanya.

Pemahaman ini akan sangat berguna tidak hanya untuk SEO dan accessibility, tapi juga untuk kode yang lebih mudah dibaca oleh developer lain di tim kalian nantinya.

### 3. Saat Menulis CSS

Mulailah dari layout dasar dulu, baru masuk ke detail visual. Pahami box model sebelum kalian sibuk dengan warna dan font. Biasakan juga menulis CSS yang konsisten, misalnya satuan yang dipakai, penamaan class, dan urutan property.

Kalau kalian bingung harus mulai dari mana, coba pelajari konsep-konsep berikut satu per satu:

- Box model dan bagaimana margin, padding, border, dan content saling berinteraksi.
- Dasar layout dengan Flexbox.
- Dasar typography seperti font-family, font-size, line-height, dan font-weight.

### 4. Saat Menggunakan Git

Ini bagian yang sering diremehkan tapi justru sangat penting. Saya ingin kalian membiasakan diri untuk commit secara bertahap, bukan sekali commit di akhir.

Beberapa panduan yang bisa kalian pegang:

- Satu commit idealnya merepresentasikan satu perubahan yang jelas.
- Pesan commit harus bisa dimengerti oleh orang lain tanpa perlu membuka diff-nya.
- Hindari pesan commit yang generik seperti "update", "fix", atau "final".

Coba pikirkan pesan commit kalian seperti catatan untuk diri kalian sendiri tiga bulan ke depan. Apakah kalian akan mengerti apa yang kalian kerjakan hanya dari membaca pesan commit itu?

## Struktur Folder

Struktur awal yang sudah saya siapkan untuk kalian:

- `Css/style.css` untuk seluruh CSS yang akan kalian tulis.
- `index.html` untuk struktur HTML utama halaman kalian.

## Workflow yang Disarankan

1. Clone repository dari GitHub ke lokal kalian.
2. Baca dulu design atau referensi yang diberikan dengan teliti. Jangan langsung coding.
3. Bangun struktur HTML dari atas ke bawah sesuai alur kontennya.
4. Setelah struktur HTML terasa sudah solid, baru masuk ke styling CSS.
5. Commit setiap kali kalian menyelesaikan satu bagian yang bermakna.
6. Push ke GitHub dan pastikan semua commit kalian sudah naik.

## Kriteria Penilaian

Berikut bobot penilaian yang akan saya gunakan. Tujuannya supaya kalian tahu di bagian mana harus fokus dan bagaimana saya menilai hasil kerja kalian secara objektif.

| No  | Kriteria                                       | Bobot    |
| --- | ---------------------------------------------- | -------- |
| 1   | Penggunaan HTML Semantic yang tepat            | 30%      |
| 2   | Efektivitas CSS untuk layout dan typography    | 30%      |
| 3   | Keterbacaan dan kerapihan kode                 | 20%      |
| 4   | Kualitas commit dan pesan commit di Git        | 20%      |
|     | **Total**                                      | **100%** |

Penjelasan singkat dari masing-masing kriteria:

1. **HTML Semantic (30%)** saya menilai seberapa tepat kalian memilih tag sesuai maknanya, bukan hanya sekadar halaman jadi.
2. **CSS Layout dan Typography (30%)** saya melihat apakah kalian paham box model, hierarki visual, dan konsistensi styling.
3. **Keterbacaan Kode (20%)** indentasi, penamaan, dan struktur file yang rapi akan sangat membantu nilai di bagian ini.
4. **Git (20%)** minimal 3 commit dengan pesan yang jelas dan bermakna. Commit yang asal-asalan akan mengurangi nilai di bagian ini meskipun halaman kalian sudah bagus.

## Pesan Terakhir

Jangan takut salah. Assignment ini ada bukan untuk menguji kalian dengan standar developer senior, tapi untuk melihat sejauh mana kalian bisa bertanggung jawab terhadap proses belajar kalian sendiri. Kalau kalian buntu, berhenti sebentar, jalan-jalan, atau baca dokumentasi resmi. Biasakan mencari jawaban dari sumber utama, bukan sekadar menyalin dari jawaban orang lain di internet.

Kalau ada yang benar-benar tidak jelas setelah kalian coba dulu, datang ke saya dan kita diskusikan bersama. Saya jauh lebih senang membantu mentee yang sudah mencoba dan punya pertanyaan spesifik dibanding mentee yang diam saja karena takut salah.

Selamat mengerjakan. Saya percaya kalian bisa.

Mentor henry rivardo
