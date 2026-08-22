'use strict';

// Function Constructor adalah sebuah function yang digunakan untuk membuat object
// Rules:
// 1. Nama constructor function dimulai dengan huruf kapital.
// 2. Constructor function dijalankan dengan operator new.
{
  function User(name) {
    this.name = name;
    this.isAdmin = false;
  }

  let user = new User('John');

  // console.log(user);

  let user2 = new User('Vincent');

  // console.log(user2);
}

// Dengan kata lain constructor function adalah function yang digunakan sebagai blueprint untuk membuat objek baru.
// Dengan kata lain, new User(...) melakukan sesuatu seperti ini:
{
  function User(name) {
    // this = {};  (secara implisit)

    // menambahkan properti ke this
    this.name = name;
    this.isAdmin = false;

    // return this;  (secara implisit)
  }
}

{
  function User(name) {
    this.name = name;
    // bisa juga method
    this.sayHi = function () {
      console.log('My name is: ' + this.name);
    };
  }

  let john = new User('John');

  john.sayHi();
}
