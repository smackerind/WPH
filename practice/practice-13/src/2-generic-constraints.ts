function getLength<T extends { length: number }>(value: T): number {
  return value.length;
}

console.log(getLength('Typescript'));
console.log(getLength('100'));
console.log(getLength([100, 200, 300]));

// Step 1 - Constraint Union
function printId<T extends string | number>(id: T): string {
  return `ID: ${id}`;
}

console.log(printId<number>(101));
console.log(printId('011200012026'));

// Step 2 - Constraint Interface
interface HasId {
  id: number;
}

function findById<T extends HasId>(items: T[], id: number): T | undefined {
  return items.find((item) => item.id === id);
}

const users = [
  { id: 1, name: 'Ucup' },
  { id: 2, name: 'Renday' },
  { id: 3, name: 'Budi' },
];

console.log(findById(users, 3));

// Step 3 - Constraint dengan keyof
function getProperty<T, K extends keyof T>(object: T, key: K): T[K] {
  return object[key];
}

const product = { id: 1, name: 'Keyboard', price: 20_000_000 };

const productName = getProperty(product, 'name');
const productPrice = getProperty(product, 'price');

console.log(productName, productPrice);

// Step 4 - Constraint Record
function objectKeys<T extends Record<string, unknown>>(obj: T): (keyof T)[] {
  return Object.keys(obj) as (keyof T)[];
}

const keys = objectKeys({ name: 'Ucup', age: 22 });
console.log(keys);
