'use strict';

{
  let user = {
    name: 'John',
    age: 30,
    sayHi() {
      console.log('Hello');
    },
    // sayHi: function () {
    //   console.log('Hello');
    // },
  };

  // user.sayHi = function () {
  //   console.log('Hello');
  // };

  // user.sayHi();
}

// this keyword
// Methods often need to access the data stored within the object they belong to. This is where the this keyword comes into play.

// The value of this is the object "before the dot" – the object that the method is being called on.
{
  let user = {
    name: 'John',
    age: 30,
    sayHi() {
      console.log(this.name);
    },
  };

  // user.sayHi();
}

// Why use this?
{
  let user = {
    name: 'John',
    age: 30,
    sayHi() {
      console.log(this.name);
    },
  };

  let admin = user;
  user = null;

  // admin.sayHi();
}

// "this" is Not Bound

{
  let user = { name: 'John' };
  let admin = { name: 'Admin' };

  function sayHi() {
    console.log(this.name);
  }

  user.sayHi = sayHi;
  admin.sayHi = sayHi;

  // user.sayHi();
  // admin.sayHi();
}

// Calling Without an Object: this = undefined
{
  function sayHi() {
    console.log(this);
  }

  sayHi();
}
