let nama: any = 'Ucupp';
nama = 20;
console.log(nama);

function sayHi(nama: any) {
  console.log(nama);
}

let value: unknown;
value = 'Dicky';

function printValue(value: unknown) {
  if (typeof value === 'string') console.log(value.toUpperCase());
}

printValue(20);
