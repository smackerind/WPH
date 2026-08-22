'use strict';

// Function Declaration
// function sayHi() {
//   console.log('Hello');
// }

// Function expression
const sayHi = function () {
  console.log('Hello');
};

// sayHi();
{
  // sayHi('John'); // Function Declaration boleh dipanggil sebelum deklarasi

  function sayHi(name) {
    console.log('Hello, ' + name);
  }
}

{
  sayHi('John'); // Function Expression tidak boleh dipanggil sebelum deklarasi
  const sayHi = function (name) {
    console.log('Hello, ' + name);
  };
}
