const kolamBerenangUmum = 'Kolam Renang Umum';

// {
//   const kolamBerenangDicky = 'Kolam Renang Dicky';
//   console.log(kolamBerenangDicky);
//   console.log(kolamBerenangUmum);
//   {
//     const kolamBerenangUdin = 'Kolam Renang Udin';
//     console.log(kolamBerenangUdin);
//     console.log(kolamBerenangDicky);
//     console.log(kolamBerenangUmum);
//   }
// }

// {
//   const kolamBerenangUcup = 'Kolam Renang Ucup';
//   console.log(kolamBerenangUcup);
//   console.log(kolamBerenangUmum);
// }

// {
//   const kolamBerenangRenday = 'Kolam Renang Renday';
//   console.log(kolamBerenangRenday);
//   console.log(kolamBerenangUmum);
// }

// function Contoh() {}
// if (kondisi) {
// }
// switch (expression) {
// }
// class{

// }

// const globalVar = 'Global';

// function outer() {
//   const outerVar = 'Outer';
//   function inner() {
//     const innerVar = 'Inner';
//     console.log(globalVar, outerVar, innerVar);
//   }
//   inner();
// }
// outer();

function makeCounter() {
  let count = 10;
  return function () {
    count = count + 1;
    return count;
  };
}

const counter = makeCounter();
console.log(counter());
console.log(counter());
console.log(counter());
