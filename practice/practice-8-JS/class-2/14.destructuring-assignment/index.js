'use strict';

{
  let arr = ['John', 'Smith'];

  let [firstName, lastName] = arr;

  // console.log(firstName, lastName);
}

{
  // kita bisa ambil hanya beberapa saja
  let [first, second] = ['Julius', 'Caesar', 'Consul', 'of the Roman Republic'];

  // console.log('first', first);
  // console.log('second', second);

  // kalau ada yang mau kita tidak ambil bisa di skip menggunakan koma dikosongkan dan koma kembali
  let [firstName, , title] = [
    'Julius',
    'Caesar',
    'Consul',
    'of the Roman Republic',
  ];

  // console.log('firstName', firstName);
  // console.log('title', title);
}

{
  // tidak hanya array saja
  // string juga bisa di destructure
  let [a, b, c] = 'abc';
  // set juga bisa di destructure
  let [one, two, three] = new Set([1, 2, 3]);
}

let guest = 'Jane';
let admin = 'Pete';

// Tukar nilai
{
  [guest, admin] = [admin, guest];
  // console.log('guest', guest);
  // console.log('admin', admin);
}

// default values
// penjelasan default values
{
  let [name = 'Guest', surname = 'Anonymous'] = ['Julius'];
  // console.log('name', name);
  // console.log('surname', surname);
}

// Object Destructuring
{
  let options = {
    title: 'Menu',
    width: 100,
    height: 200,
  };

  // berbeda dengan array, urutan ditukar tidak masalah karena untuk object destructuringnya harus menggunakan nama property yang ada, tidak boleh nama sesukanya seperti pada destructuring array

  let { width, title, height } = options;

  // console.log('title', title);
  // console.log('width', width);
  // console.log('height', height);
}

// penggunaan alias pada destructuring
{
  let options = {
    title: 'Menu',
    width: 100,
    height: 200,
  };

  const width = 500;

  let { width: w, height: h, title } = options;
  // console.log(w);
  // console.log(h);
  // console.log(title);
}

// menggabungkan default values dengan alias berbeda
{
  let options = {
    title: 'Menu',
  };

  // const width = 300;

  let { width: w = 100, height: h = 200, title } = options;
  // console.log(title);
  // console.log(w);
  // console.log(h);
}

// rest pattern
{
  let options = {
    title: 'Menu',
    height: 200,
    width: 100,
  };

  // rest pattern akan mengambil semua sisanya yang tidak diambil (parameternya tidak ditulis pada saat destructuring)
  const { title, ...rest } = options;
  // tunjukkan apa yang ada di dalam rest
  // console.log(rest);
}

{
  function showMenu({
    title = 'Untitled',
    width = 200,
    height = 100,
    items = [],
  }) {
    console.log(`${title} ${width} ${height}`);
    console.log(items);
  }

  const object = { title: 'My menu', items: ['Item 1', 'Item 2'] };
  showMenu(object);
}
