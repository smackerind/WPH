'use strict';

// saat kalian memikirkan comparison (perbandingan), kalian memikirkan pertyataan
// apakah pernyataan tersebut benar atau salah

// Sama persis (===)
{
  const result = 5 === 5; // true
  const result2 = 5 === '5'; // false
}

// Tidak sama persis (!==)
{
  const result = 5 !== 5; // pernyataannya benar atau salah?
  const result2 = 5 !== '5'; // true
  // console.log(result);
  // console.log(result2);
}

// Lebih besar dari (>)
{
  const result = 5 > 3; // true
  const result2 = 5 > 5; // false
}

// Lebih kecil dari (<)
{
  const result = 5 < 3; // false
  const result2 = 5 < 5; // false

  // console.log(result);
}

// Lebih besar atau sama dengan (>=)
{
  const result = 5 >= 3; // true -> lima lebih besar atau sama dengan tiga
  const result2 = 5 >= 5; // true

  // console.log(result);
}

// Lebih kecil atau sama dengan (<=)
{
  const result = 5 <= 3; // false -> lima lebih kecil atau sama dengan tiga
  const result2 = 5 <= 5; // true
}

// Perbandingan String
// Dalam JavaScript, string dibandingkan berdasarkan urutan karakter Unicode.
{
  const result1 = 'apple' > 'apple'; // false
  const result2 = 'apple' < 'banana'; // true
  const result3 = 'aaa' < 'aba'; // true
  console.log(result3);
}
