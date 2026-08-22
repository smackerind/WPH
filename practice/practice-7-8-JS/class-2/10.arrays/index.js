'use strict';

let fruits = ['Apple', 'Banana', 'Cherry'];
// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);

fruits[2] = 'Pear';
// console.log(fruits);
fruits[3] = 'Lemon';
// console.log(fruits);

// console.log(fruits.length);

// Array Dapat Menyimpan Elemen dari Tipe Data Apapun
// Array dapat menyimpan elemen dari berbagai tipe data, termasuk objek, boolean, bahkan fungsi:
let arr = [
  'Apple',
  { name: 'John' },
  true,
  function () {
    console.log('Hello');
  },
];

// arr[3]();

// console.log(arr[1].name);
// arr[3]();

// let fruits = ['Apple', 'Orange', 'Plum'];
// console.log(fruits.at(-1));

// pop/push, shift/unshift
// pop: Menghapus elemen terakhir dari array dan mengembalikannya.
{
  let fruits = ['Apple', 'Orange', 'Plum'];
  // console.log(fruits.pop()); // Menghapus elemen terakhir dari array dan mengembalikannya.
  // console.log(fruits);
}

// push: Menambahkan elemen ke akhir array.let fruits = ["Apple", "Orange"];
{
  let fruits = ['Apple', 'Orange'];
  fruits.push('Pear');
  // console.log(fruits);
}

// shift: Menghapus elemen pertama dari array dan mengembalikannya.
{
  let fruits = ['Apple', 'Orange', 'Plum'];
  // console.log(fruits.shift()); // Menghapus elemen pertama dari array dan mengembalikannya.
  // console.log(fruits);
}

// unshift: Menambahkan elemen di awal array.let fruits = ["Orange", "Pear"];
{
  let fruits = ['Orange', 'Pear'];
  // fruits.unshift('Apple');
  // console.log(fruits);
}

// Metode push dan unshift juga dapat menambahkan beberapa elemen sekaligus:
{
  let fruits = ['Apple'];
  // fruits.push('Orange', 'Peach');
  // fruits.unshift('Pineapple', 'Lemon');
  // console.log(fruits); // ["Pineapple", "Lemon", "Apple", "Orange", "Peach"]
}

{
  let fruits = ['Apple', 'Orange', 'Pear'];

  for (let i = 0; i < fruits.length; i++) {
    // console.log(fruits[i]);
  }
}

{
  let fruits = ['Apple', 'Orange', 'Pear'];

  for (let fruit of fruits) {
    // console.log(fruit);
  }
}

// function getDecimal(number) {
//   return number - Math.floor(number);
// }

// console.log(getDecimal(2.54));
