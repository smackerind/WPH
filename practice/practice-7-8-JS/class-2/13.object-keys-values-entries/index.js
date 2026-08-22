'use strict';

// Object.keys(obj) – returns an array of keys.
// Object.values(obj) – returns an array of values.
// Object.entries(obj) – returns an array of [key, value] pairs.

{
  let user = {
    name: 'John',
    age: 30,
  };

  // console.log(Object.keys(user));
  // console.log(Object.values(user));
  // console.log(Object.entries(user));
}

// Mengiterasi Nilai dengan Object.values
{
  let user = {
    name: 'John',
    age: 30,
  };

  // for (let value of Object.values(user)) {
  //   console.log(value);
  // }

  // Object.values(user).forEach((value) => console.log(value));
}

// Objek tidak memiliki banyak method yang ada pada array, seperti map, filter, dan lainnya. Jika kita ingin menerapkan metode-metode tersebut pada objek, kita bisa menggunakan kombinasi Object.entries dan Object.fromEntries.
{
  let prices = {
    banana: 1,
    orange: 2,
    lemon: 3,
  };

  let transformedPrices = Object.entries(prices);
  let transformedDoublePrices = transformedPrices.map(([key, value]) => [
    key,
    value * 2,
  ]);
  let transformedBackPrices = Object.fromEntries(transformedDoublePrices);
  // console.log(transformedBackPrices);

  let doublePrices = Object.fromEntries(
    Object.entries(prices).map(([key, value]) => [key, value * 2]),
  );

  console.log(doublePrices);
}
