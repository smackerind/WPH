const bioUser = {
  nama: 'Ucup',
  umur: 27,
};

console.log(bioUser);
console.log(bioUser.nama);
console.log(bioUser.umur);

let nama = 'Ucup';
console.log(nama.toUpperCase());

const sayHello = function () {
  console.log('Haiiiiii');
};

const sayHello2 = function () {
  console.log('Haiiiiii');

  return;
};

const sayHello3 = function () {
  console.log('Haiiiiii');

  return 'hello';
};

console.log(sayHello());
console.log('------------');
console.log(sayHello2());
console.log('------------');
console.log(sayHello3());

function execute(fn) {
  fn();
}

function jalan() {
  console.log('dijalankan!');
}

execute(jalan);

const data = [
  { id: 1, nama: 'Dicky' },
  { id: 2, nama: 'Ucup' },
  { id: 3, nama: 'Renday' },
];

function detailData(data) {
  console.log(data.id, data.nama);
}

data.forEach(detailData);

function createGreeting() {
  return function () {
    console.log('Helo dari dalam');
  };
}

const greet = createGreeting();
greet();

function test() {}
console.log(typeof test);
console.log(test instanceof Object);

function salam(name) {
  return 'Hello, ' + name;
}
salam.bahasa = 'Indonesia';
salam.language = 'Inggris';

console.log(salam);

console.log(salam('Ucup'));
console.log(salam.bahasa);

console.log(salam.language.length);
console.log(salam.bahasa.length);
console.log(salam.length);
