'use strict';

{
  let a = 100;

  switch (a) {
    case 3:
      // console.log('Terlalu kecil');
      break;
    case 4:
      // console.log('Tepat!');
      break;
    case 5:
      // console.log('Terlalu besar');
      break;
    default:
    // console.log('Nilai tidak diketahui');
  }
}

let fruit = 'apple';

switch (fruit) {
  case 'banana':
    // console.log('This is a banana.');
    break;
  case 'apple':
    // console.log('This is an apple.');
    break;
  case 'orange':
  case 'lemon':
    // console.log('This is a citrus fruit.');
    break;
  default:
  // console.log('Unknown fruit.');
}

{
  // the data type must be the same
  // let a = 3;
  let a = '3';

  switch (a) {
    case 4:
      console.log('Right!');
      break;

    case 3: // (*) mengelompokkan dua kasus
    case 5:
      console.log('Wrong!');
      console.log("Why don't you take a math class?");
      break;

    default:
      console.log('The result is strange. Really.');
  }
}
