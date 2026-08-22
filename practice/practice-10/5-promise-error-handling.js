// Cara error muncul

// 1. Explicit Reject
// new Promise((resolve, reject) => {
//   reject(new Error('Gagal'));
// });

// 2. Throw error di .then()
// Promise.resolve()
//   .then(() => {
//     throw new Error('Boom');
//   })
//   .catch((err) => console.error(err.massage));

Promise.reject(new Error('Error 1 ')).catch((err) =>
  console.error(err.message)
);

Promise.resolve()
  .then(() => {
    throw new Error('Step 1 error');
  })
  .then(() => {
    console.log('Step 2'); // tidak jalan
  })
  .catch((err) => {
    console.error('Handle error : ', err.message);
    throw new Error('Error lagii');
  })
  .catch((err) => {
    console.error(err.message);
  })
  .finally(() => {
    console.log('Wajib jalan');
  });
