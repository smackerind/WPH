'use strict';

// Selama kondisi adalah truthy, kode di dalam loop body akan dieksekusi.
{
  // while (condition) {
  //   // kode
  //   // yang disebut "loop body"
  // }

  let i = 0;

  while (i < 3) {
    // console.log(i);
    i++;
  }
}

{
  let i = 3;
  while (i) {
    // console.log(i);
    i--;
  }
}

// 2. The do…while Loop
// Pemeriksaan kondisi dapat dipindahkan di bawah loop body menggunakan sintaks do..while:
{
  let i = 6;
  while (i <= 5) {
    console.log(i);
    i++;
  }

  // menjamin ada satu kali eksekusi loop tidak peduli apakah kondisi benar atau salah
  let j = 6;
  do {
    // console.log(j);
    j++;
  } while (j <= 5);
}

for (let i = 0; i <= 5; i++) {
  // console.log(i);
}

for (let i = 0; i < 10; i++) {
  // jika benar, lewati sisa bagian dari body
  if (i % 2 === 0) continue;
  // console.log(i); // 1, lalu 3, 5, 7, 9
}

// nested for looping

for (let x = 1; x <= 5; x++) {
  let combined = '';
  for (let y = 1; y <= x; y++) {
    combined += y;
  }
  console.log(combined);
}

// pengulangan 1
{
  let combined = '';
  combined += 1;
}

// pengulangan 2
{
  let combined = '';
  combined += 1;
  combined += 2;
}

// pengulangan 3
{
  let combined = '';
  combined += 1;
  combined += 2;
  combined += 3;
}

// pengulangan 4
{
  let combined = '';
  combined += 1;
  combined += 2;
  combined += 3;
  combined += 4;
}

// pengulangan 5
{
  let combined = '';
  combined += 1;
  combined += 2;
  combined += 3;
  combined += 4;
  combined += 5;
}
