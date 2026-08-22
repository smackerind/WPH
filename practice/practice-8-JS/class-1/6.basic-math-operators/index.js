'use strict';

// 1. Unary, Binary, dan Operand
// Unary: Operator yang hanya membutuhkan 1 operand
{
  let x = 1;
  x = -x;
  // console.log(x);
}

// Binary: Operator yang membutuhkan 2 operand
{
  let x = 1;
  let y = 3;
  let z = x + y;
  // console.log(z);
}

// ---------------------------------
// 2. Operator Aritmatika
// Penjumlahan (+): Menambahkan dua angka
{
  const a = 5;
  const b = 3;
  const result = a + b; // 8
}

// Pengurangan (-): Mengurangi angka pertama dengan angka kedua
{
  const a = 5;
  const b = 3;
  const result = a - b; // 2
}

// Perkalian (*): Mengalikan dua angka
{
  const a = 5;
  const b = 3;
  const result = a * b; // 15
}

// Pembagian (/): Membagi angka pertama dengan angka kedua
{
  const a = 5;
  const b = 3;
  const result = a / b; // 1.6666666666666667
}

// Modulus (%): Menghitung sisa pembagian
{
  const a = 7;
  const b = 3;
  const result = a % b;
  // console.log(result);
  // turn 1 -> 7 - 3 = 4
  // turn 2 -> 4 - 3 = 1 -> hasilnya
  // turn 3 -> 1 - 3 = tidak bisa diambil lagi
}

// Eksponensial (**): Menaikkan angka ke pangkat tertentu.
const a = 2;
const b = 3;
const result = a ** b; // 8
// console.log(result);

// ---------------------------------

// 3. Assignment Operator
{
  let x = 10;
}

// Assignment Tambah (+=): Menambahkan nilai ke variabel dan menetapkan hasilnya ke variabel tersebut.
{
  let x = 10;
  // let x = x + 10;
  x += 10;
  // console.log(x);
}

// Assignment Kurang (-=): Mengurangi nilai variabel dengan nilai tertentu dan menetapkan hasilnya ke variabel tersebut.
{
  let x = 10;
  x -= 5;
  // console.log(x);
}

// Assignment Kali (*=): Mengalikan nilai variabel dengan nilai tertentu dan menetapkan hasilnya ke variabel tersebut.
{
  let x = 10;
  x *= 5;
  // console.log(x);
}

// Assignment Bagi (/=): Membagi nilai variabel dengan nilai tertentu dan menetapkan hasilnya ke variabel tersebut.
{
  let x = 10;
  x /= 5;
  // console.log(x);
}

// Assignment Modulus (%=): Menghitung sisa pembagian nilai variabel dengan nilai tertentu dan menetapkan hasilnya ke variabel tersebut.
{
  let x = 10;
  x %= 5;
  // console.log(x);
}

// 4. Operator Increment dan Decrement
// Operator ++ dan -- digunakan untuk menambah atau mengurangi nilai variabel dengan satu.

// Postfix increment (counter++): Mengembalikan nilai sebelum penambahan
{
  let counter = 5;
  // counter++;
  // counter++;
  // console.log(counter++);
  // console.log(counter);
}

// Prefix increment (++counter): Mengembalikan nilai setelah penambahan
{
  let counter = 5;
  // console.log(++counter);
  // console.log(counter);
}

// Postfix Decrement (counter--): Mengembalikan nilai sebelum pengurangan.
{
  let counter = 5;
  // console.log(counter--); // 5
  // console.log(counter); // 4
}

// Prefix Decrement (--counter): Mengurangi nilai dan mengembalikan nilai setelah pengurangan.
{
  let counter = 5;
  // console.log(--counter); // 4
}

// Contoh penggunaan berbagai operator

{
  let n = 2;

  n += 5;
  n *= 2;

  // console.log(n);

  let counter = 5;
  console.log(counter++); // 5
  console.log(counter); // 6

  counter = 5;
  console.log(++counter); // 6
}
