'use strict';

{
  let arr = ['I', 'study', 'Javascript'];
  const deletedItems = arr.splice(1, 2);
  // console.log(arr);
  // console.log('deletedItems:', deletedItems);
}

// Metode arr.slice membuat subarray dari array asli, tanpa mengubah array asli itu sendiri.
{
  let arr = ['t', 'e', 's', 't'];

  // console.log(arr.slice(1, 3));
  // console.log(arr.slice(-2));

  // console.log('original array', arr);
}

// karena kita di materi ini kita akan menggabungkan string dengan variable mari belajar sebentar
// const brand = 'Toyota';
// const color = 'Merah';
// const year = 2020;

// kita sudah mempelajari '' (kutip satu) dan "" (kutip dua), tapi ada satu kutip lagi yaitu `` (kutip miring)
// kegunaan kutip miring adalah supaya kita bisa memasukkan variable di dalam string.
// const car = `Mobil ${brand} berwarna ${color} tahun ${year}`;
// console.log(car);

// Iterasi: forEach;
// Metode arr.forEach memungkinkan kita untuk menjalankan fungsi pada setiap elemen array.
// arr.forEach(function (item, index, array) {
// ... lakukan sesuatu dengan item
// });

// callback adalah function yang diserahkan ke function lain untuk dijalankan di function lain tersebut.
const callback = (item, index, array) => {
  console.log(`${index}: ${item} dalam array ${array}`);
};

const arr = ['Bilbo', 'Gandalf', 'Nazgul'];

// arr.forEach(callback);

// Mencari dalam Array
// indexOf/lastIndexOf dan includes
// let arr = [1, 0, false, 'hello'];

// console.log(arr.indexOf('hello'));
// console.log(arr.indexOf('blabla'));
// console.log(arr.includes('hello'));

{
  let users = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Pete' },
    { id: 3, name: 'Mary' },
  ];

  let user = users.find((item) => item.id === 2);
  console.log(user);
}

// Transformasi Array
// map
// Metode arr.map digunakan untuk membuat array baru dengan menerapkan fungsi pada setiap elemen dari array asli.
{
  // let result = arr.map(function (item, index, array) {
  //   // kembalikan nilai baru sebagai pengganti item
  // });

  const numbers = [1, 2, 3];

  const doubleNumbers = numbers.map((item) => item * 2);
  // console.log(doubleNumbers);
}

{
  let arr1 = [1, 15, 10];
  arr1.sort((a, b) => a - b);
  // console.log(arr1);

  let arr2 = [1, 15, 10];
  arr2.sort((a, b) => b - a);
  // console.log(arr2);
}

// Metode arr.reverse() digunakan untuk membalik urutan elemen dalam array.
{
  let arr = ['I', 'am', 'Tony', 'Stark'];
  arr.reverse();
  // console.log(arr);
}

// str.split(delim) membagi string menjadi array berdasarkan pembatas delim.
{
  let names = 'Bilbo, Gandalf, Nazgul';
  let arr = names.split(', ');
  // console.log(arr); // ["Bilbo", "Gandalf", "Nazgul"]
}

// arr.join(glue) menggabungkan elemen array menjadi string, dipisahkan oleh glue.
{
  let arr = ['Bilbo', 'Gandalf', 'Nazgul'];
  let str = arr.join(';');
  // console.log(str); // Bilbo;Gandalf;Nazgul
}

{
  // let value = arr.reduce(
  //   function (accumulator, item, index, array) {
  //     // ...
  //   },
  //   [initial],
  // );

  let arr = [1, 2, 3, 4, 5];
  let result = arr.reduce((sum, current) => sum + current, 0);

  // 1. sum = 0, current = 1, new sum = 0 + 1 = 1
  // 2. sum = 1, current = 2, new sum = 1 + 2 = 3
  // 3. sum = 3, current = 3, new sum = 3 + 3 = 6
  // 4. sum = 6, current = 4, new sum = 6 + 4 = 10
  // 5. sum = 10, current = 5, new sum = 10 + 5 = 15

  // console.log(result);
}
