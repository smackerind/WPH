function delay(ms, val, isRunning) {
  return new Promise((resolve, reject) => {
    if (isRunning) {
      setTimeout(() => {
        resolve(val);
      }, ms);
    } else {
      reject('Ini error');
    }
  });
}

// 1. Promise.all()
// Promise.all([
//   delay(1000, 'A', true),
//   delay(2000, 'B', false),
//   delay(3000, 'C', true),
// ])
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.error(err.message);
//   });

// 2. Promise.race()
Promise.race([
  delay(1000, 'A', true),
  delay(2000, 'B', true),
  delay(3000, 'C', true),
]).then((result) => {
  console.log(result);
});

// 3. Promise.allSettled()
Promise.allSettled([
  delay(1000, 'A', true),
  delay(2000, 'B', false),
  delay(3000, 'C', true),
]).then((result) => {
  console.log(result);
});
