// console.log('Start');

// setTimeout(() => {
//   console.log('Async');
// }, 1000);

// console.log('End');

// function sayHello(name, callback) {
//   console.log('Hello, ', name);
//   callback();
// }

// sayHello();

// setTimeout(() => {
//   console.log('Hello');
// }, 1000);

setTimeout(() => {
  console.log('Langkah 1');
  setTimeout(() => {
    console.log('Langkah 2');
    setTimeout(() => {
      console.log('Langkah 3');
    }, 3000);
  }, 2000);
}, 1000);
