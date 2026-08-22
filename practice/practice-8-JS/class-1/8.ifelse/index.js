'use strict';

// 1. Pernyataan if
{
  // if (kondisi) {
  // kode yang akan dijalankan jika kondisi benar
  // }

  if (true) {
    //   console.log('truthy');
  }

  if (1) {
    // console.log('keluar');
  }

  if (3) {
    // console.log('keluar');
  }

  if (0) {
    // console.log('keluar');
  }

  if ('hello') {
    // console.log('keluar');
  }

  if ('') {
    // console.log('keluar');
  }

  if (null) {
    // console.log('keluar');
  }

  if (undefined) {
    // console.log('keluar');
  }

  // 0
  // ''
  // null
  // undefined
  // itu semua akan di convert oleh if menjadi false
}

// 2. Pernyataan if...else
// Pernyataan if...else digunakan untuk menjalankan satu blok kode jika kondisi benar dan blok kode lain jika kondisi salah (false).

{
  // if (kondisi) {
  // kode yang akan dijalankan jika kondisi benar
  // } else {
  // kode yang akan dijalankan jika kondisi salah
  // }

  const age = 16;

  if (age < 16) {
    // console.log('Hello');
  } else {
    // console.log('Greetings');
  }
}

// 3. Pernyataan if...else if...else
// Pernyataan if...else if...else digunakan untuk menguji beberapa kondisi.
{
  // if (kondisi1) {
  // kode yang akan dijalankan jika kondisi1 benar
  // } else if (kondisi2) {
  // kode yang akan dijalankan jika kondisi2 benar
  // } else if (kondisi3) {
  // kode yang akan dijalankan jika kondisi3 benar
  // } else {
  // kode yang akan dijalankan jika semua kondisi di atas salah
  // }

  const age = 20;

  if (age < 13) {
    // console.log('hello');
  } else if (age >= 13 && age <= 20) {
    // console.log('greetings');
  } else {
    // console.log('hi');
  }
}

// 4. Operator Kondisional ? (Ternary Operator)
// Operator kondisional ? memungkinkan kita untuk menulis ekspresi kondisional dalam satu baris. Ini juga disebut sebagai operator "tanda tanya".
{
  // kondisi ? ekspresi1 : ekspresi2;

  const age = 18;
  const message = age >= 18 ? 'Hello' : 'Greetings';
  // console.log(message);
}

// 5. Operator Logika || (or)
// Operator || digunakan untuk memeriksa beberapa kondisi dan mengembalikan true jika salah satu kondisi benar.
{
  // kondisi1 || kondisi2;

  const isWeekend = true;
  const isHoliday = false;

  if (isWeekend || isHoliday) {
    // console.log('You can relax today');
  } else {
    // console.log('You have to work today');
  }

  const age = 25;
  const hasID = true;

  if (age >= 18 && hasID) {
    console.log('You are allowed to enter.');
  } else {
    console.log('You are not allowed to enter.');
  }
}
