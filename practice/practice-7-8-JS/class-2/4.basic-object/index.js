'use strict';

// Object adalah entitas
let user = {
  name: 'John',
  age: 30,
};

// Property pada object dapat diakses menggunakan dot notation
// console.log(user.name);
// console.log(user.age);

// Nilai property dapat berupa tipe data apa saja
// Property baru dapat ditambahkan dengan dot notation setelah deklarasi object
user.isAdmin = true;
user.hobby = 'Gaming';

delete user.hobby;

// console.log(user);

{
  function makeUser(name, age) {
    return {
      name,
      age,
    };
  }

  let user = makeUser('John', 30);
  // console.log(user);
}

// Nama properti yang terdiri dari lebih dari satu kata harus diapit dengan tanda kutip:

{
  let user = {
    name: 'John',
    age: 30,
    'likes birds': true,
  };

  // console.log(user['likes birds']);

  // Kita juga dapat menggunakan variabel untuk mengakses properti:
  let key = 'likes birds';
  // console.log(user[key]);
}

// Computed properties
// Property yang keynya dibuat dari variable
{
  const fruit = 'orange';

  const bag = {
    [fruit]: 5,
  };

  // console.log(bag);
}

// Operator "in" dan Pengujian Eksistensi Properti
// JavaScript memungkinkan kita untuk mengakses properti apa pun dari objek, bahkan jika properti tersebut tidak ada. Jika properti tidak ada, hasilnya adalah undefined. Kita dapat menggunakan operator "in" untuk memeriksa apakah properti ada dalam objek.
{
  let user = { name: 'John', age: 30 };

  // console.log('name' in user);
}

// Looping dengan "for..in"
// Untuk iterasi atas semua kunci dalam objek, kita dapat menggunakan loop for..in:
{
  let user = {
    name: 'John',
    age: 30,
    isAdmin: true,
  };

  for (let key in user) {
    console.log(key + ': ' + user[key]);
  }
}
