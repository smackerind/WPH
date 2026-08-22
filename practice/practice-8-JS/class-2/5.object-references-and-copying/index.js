'use strict';

// Primitives: Copy by value
let message = 'Hello';
let phrase = message;

phrase = 'World';

// console.log(message);

// Objects: Copy by reference
let user = { name: 'John' };
let admin = user;
admin.name = 'Pete';
// console.log(user.name);

{
  let a = {};
  let b = a;

  // console.log(a === b);
}

{
  let a = {};
  let b = {};

  console.log(a === b);
}
