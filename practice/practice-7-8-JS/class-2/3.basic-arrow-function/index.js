'use strict';

// Function Declaration
// function sum(a, b) {
//   return a + b;
// }

// Function Expression
// const sum = function (a, b) {
//   return a + b;
// };

// Arrow Function
// const sum = (a, b) => a + b;

const age = 18;

let welcome =
  age < 18 ? () => console.log('Hello') : () => console.log('Greetings');

// welcome();

{
  let sum = (a, b) => {
    let result = a + b;
    console.log('resultnya adalah: ' + result);
    return result;
  };
}
