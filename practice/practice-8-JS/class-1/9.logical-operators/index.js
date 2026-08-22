'use strict';

// 1. Operator || (OR)
// Operator || (OR) mengembalikan nilai true jika salah satu dari operandnya true. Jika semua operand adalah false, maka mengembalikan false. Operator ini mengevaluasi operand dari kiri ke kanan dan mengembalikan operand pertama yang true.
// console.log(true || true); // true
// console.log(false || true); // true
// console.log(true || false); // true
// console.log(false || false); // false

{
  let hour = 12;
  let isWeekend = true;

  if (hour < 10 || hour > 18 || isWeekend) {
    // console.log('The office is closed.'); // it is the weekend
  }
}

// console.log(1 || 0); // 1
// console.log(null || 1); // 1
// console.log(null || 0 || 1); // 1
// console.log(undefined || null || 0); // 0
// console.log(undefined || 0 || 'hello' || null || 123); // hello

// 2. Operator && (AND)
// Operator && (AND) mengembalikan true hanya jika semua operandnya true. Jika salah satu operand adalah false, maka mengembalikan false.
// console.log(true && true); // true
// console.log(false && true); // false
// console.log(true && false); // false
// console.log(false && false); // false

// Contoh dalam if:
{
  let hour = 12;
  let minute = 30;

  if (hour == 12 && minute == 30) {
    // console.log('The time is 12:30');
  }
}

// console.log(1 && 0); // 0
// console.log(1 && 5); // 5
// console.log(null && 5); // null
// console.log(0 && 'no matter what'); // 0
// console.log(1 && 2 && null && 3); // null
// console.log(1 && 2 && 3); // 3

// false || console.log('printed');
// false && console.log('not printed');

// Operator ! (NOT)
// Operator ! (NOT) mengembalikan nilai kebalikan dari operandnya. Jika operandnya true, maka mengembalikan false. Jika operandnya false, maka mengembalikan true.
// console.log(!true);
// console.log(!0);

// console.log(!!0); // false
// console.log(!!'non-empty string'); // true
// console.log(!!null); // false

const dataFromDatabase = 'hello';

// !!dataFromDatabase && console.log(dataFromDatabase);

(a && b) || (c && d);
// console.log(5 + 3 * 2);
