'use strict';

// function namaFunction() {
// yang akan dijalankan oleh function
// }

{
  function showMessage() {
    console.log('Hello World');
    console.log('Hello World');
  }

  // showMessage();
  // showMessage();
  // showMessage();
}

// Local variables
// Variable yang dideklarasikan di dalam function hanya bisa digunakan di dalam function tersebut
{
  function showMessage() {
    let message = "Hello, I'm javascript";
  }

  showMessage();
  // console.log(message);
}

// Outer variables
// Function dapat mengakses variable yang dideklarasikan di luar function tersebut
{
  let userName = 'John';

  function showMessage() {
    let message = 'Hello, ' + userName;

    // console.log(message);
  }

  showMessage();
}

// Function memiliki akses ke variable yang dideklarasikan di luar function tersebut dan dapat mengubah value nya
{
  let userName = 'John';

  function showMessage() {
    userName = 'Bob';
  }

  showMessage();
  // console.log(userName); // Bob
}

// Jika ada variable yang sama di dalam function dan di luar function, maka function akan menggunakan variable yang dideklarasikan di dalam function
{
  let userName = 'John';

  function showMessage() {
    let userName = 'Bob';
    let message = 'Hello, ' + userName;
    // console.log(message);
  }

  showMessage();
}

// Parameters
// Kita dapat pass data ke fungsi menggunakan parameter. Parameter adalah variabel yang dideklarasikan dalam tanda kurung pada deklarasi fungsi.

{
  // function namaFunction(paramater1, parameter2, parameter3) {
  // yang akan dijalankan oleh function
  // }
  function showMessage(from, text) {
    console.log(from + ': ' + text);
  }

  // showMessage('Ann', 'Hello!');
  // showMessage('John', 'How are you?');
}

// Default parameters
// Kita dapat memberikan nilai default untuk parameter. Jika parameter tidak diisi, maka nilai default akan digunakan.
{
  function showMessage(from, text = 'no text given') {
    const fullText = from + ': ' + text;
    // console.log(fullText);
  }

  showMessage('Ann', 'Hello');
}

// Return a value
// Kita dapat menggunakan statement return untuk mereturn value dari function menggunakan keyword return.
// Value yang di return akan dikembalikan kepada pemanggil functionnya
{
  function sum(a, b, c, d) {
    return a + b + c + d;
  }

  let result = sum(1, 2, 3, 4);

  // console.log(result);

  function logging() {
    // console.log('Hello');
  }

  let result2 = logging();
  // console.log(result2);
}

// Return a value
// Kita dapat menggunakan statement return untuk mereturn value dari function menggunakan keyword return.
// Value yang di return akan dikembalikan kepada pemanggil functionnya
{
  function sum(a, b) {
    return a + b;
    console.log('hello everyone');
  }

  // console.log(sum(1, 2));
}

// return bisa digunakan untuk menghentikan eksekusi
function doSomething(execute, text) {
  if (!execute) return;

  console.log(text);
}

doSomething(true, 'Hello');
