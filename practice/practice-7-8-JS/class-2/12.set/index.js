'use strict';

// const arr = [1, 2, 3, 4, 5];
// arr.push(6);
// arr.push(3);
// arr.push(5);
// console.log(arr);

const uniqueList = [1, 2, 3, 4, 5];

function addItem(item) {
  if (!uniqueList.includes(item)) {
    uniqueList.push(item);
  }
}

addItem(6);
addItem(3);
addItem(5);
// console.log(uniqueList);

// utilizing set
const set = new Set([1, 2, 3, 4, 5]);
set.add(6);
set.add(3);
set.add(5);
set.delete(4);
// set.clear();
// console.log(set);

// for (const value of set) {
//   console.log(value);
// }

// set.forEach((value) => console.log(value));

const arr = [1, 2, 2, 3, 4, 4, 5];
const cleanArr = [...new Set(arr)];
console.log(cleanArr);
