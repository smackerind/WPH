let berhasil = false;

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // if (berhasil === true) {
    //   resolve('Berhasil nih');
    // } else {
    //   reject('Tidak berhasil');
    // }
    resolve('Berhasil');
  }, 1000);
});

promise
  .then((ucup) => {
    console.log(ucup);
    return ucup;
  })
  .then((ucup) => console.log(ucup + ' Yeay...'))
  .catch((err) => console.error(err))
  .finally(() => console.log('Wajib jalan'));
