'use strict';

// primitive data types
// number
const age = 30;
const pi = 3.14159;
// console.log(typeof pi);

// string
const name = 'Alice';
const message = 'Hello, world!';

// boolean
const isStudent = true;
const hasGraduated = false;

// undefined
let x;
// console.log(x);

// null
const y = null;
// console.log(y);

// non primitive

// Object
// salah
// const personFirstName = 'John';
// const personLastName = 'Doe';
// const personAge = 30;

// benar
const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
  hobby: 'gaming',
  isStudent: true,
};

// console.log(person.age);

// Array
const colors = ['red', 'green', 'blue', 0, true, 100];
console.log(colors[5]);

const numbers = [
  [1, 2, 3],
  [10, 20, 30],
  [100, 200, 300],
];

// Function
const greet = function (name) {
  return `Hello, ${name}`;
};
