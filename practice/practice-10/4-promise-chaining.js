Promise.resolve(10)
  .then((angka) => {
    console.log(angka);
    return angka + 2;
  })
  .then((angka) => {
    console.log(angka);
    return angka + 2;
  })
  .then((angka) => console.log(angka));

function fetchUser(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id, name: 'User' + id });
    }, 1000);
  });
}

fetchUser(1)
  .then((user) => {
    console.log(user.name);
    return fetchUser(2);
  })
  .then((user) => {
    console.log(user.name);
  });

Promise.resolve(10)
  .then((num) => {
    throw new Error('Error di step 1');
  })
  .then((num) => {
    console.log('Tidak akan jalan');
  })
  .catch((err) => {
    console.error('Caught :', err.message);
  });

