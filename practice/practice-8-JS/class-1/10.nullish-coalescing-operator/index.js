'use strict';

{
  let user = 'null';

  // console.log(user ?? 'Guest'); // kalau user null atau undefined, maka 'Guest' akan dipakai
}

// Kita juga bisa menggunakan rangkaian ?? untuk memilih nilai pertama dari daftar yang bukan null/undefined.
{
  let firstName = null;
  let lastName = null;
  let nickName = 'Supercoder';

  // console.log(firstName ?? lastName ?? nickName ?? 'Anonymous');
}

let height = 20;
let width = null;

let area = (height ?? 100) * (width ?? 50);
console.log(area);
