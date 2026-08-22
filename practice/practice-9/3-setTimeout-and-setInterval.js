// console.log('Start');
// setTimeout(() => {
//   console.log('Process');
// }, 3000);
// console.log('End');

let detik = 0;

const timer = setInterval(() => {
  detik++;

  console.log(`Waktu berjalan : ${detik} detik`);

  if (detik === 5) {
    clearInterval(timer);
    console.log('Timer Dihentikan');
  }
}, 1000);
