'use strict';

// explicit conversion

// string to number
{
  const str = '123';
  const num = Number(str);
  // console.log(typeof num);
}

// number to string
{
  const num = 123;
  const str = String(num);
  // console.log(typeof str);
}

// boolean to string
{
  const bool = true;
  const str = String(bool);
  // console.log(typeof bool);
}

// string to boolean
{
  const str = 'true';
  const bool = Boolean(str); // boolean
  // console.log(typeof bool);
}

// ----------

// implicit conversion
// string and number

// number to string
const result1 = '5' + 2;
// console.log(result1);

// string to number
const result2 = '5' * 2;
// console.log(result2);

// boolean
const result3 = true + 1;
// console.log(result3);

const result4 = false + 1;
// console.log(result4);

// undefined and null
const result5 = undefined + 1;
// console.log(result5);

const result6 = null + 1;
// console.log(result6);

// comparison non-strict equality (==)
// Bconsole.log(5 == '5');
// console.log(0 == false);
// console.log(null == undefined);

// comparison strict equality (==)
console.log(5 === '5');
console.log(0 === false);
console.log(null === undefined);
