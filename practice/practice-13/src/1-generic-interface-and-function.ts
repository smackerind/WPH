interface Box<T> {
  value: T;
}

const scoreBox: Box<number> = {
  value: 95,
};

const nameBox: Box<string> = {
  value: 'Dicky',
};

console.log(scoreBox.value);
console.log(nameBox.value);

// Step 1 - Generic Function Dasar
function identity<T>(value: T): T {
  return value;
}

const resultNumber = identity<number>(100);
const resultString = identity<string>('Typescript');

console.log(resultNumber);
console.log(resultString);

// Step 2 - Type Inference
const active = identity(true);
const username = identity('Ucup');

// active.toUpperCase();
// username.toUpperCase();

console.log(active, username);

// Step 3 - Mengambil Elemen Pertama
function getFirst<T>(items: T[]): T | undefined {
  return items[0];
}

const firstScore = getFirst([90, 10, 20]);
console.log(firstScore);
const firstStudent = getFirst(['Ucup', 'Renday', 'Budi']);
console.log(firstStudent);
const emptyResult = getFirst<number>([]);
console.log(emptyResult);

// Step 4 - Generic dengan Dua Parameter Tipe
interface ApiResponse<TData, TMeta> {
  data: TData;
  meta: TMeta;
}

type User = { id: number; name: string };
type Pagination = { page: number; total: number };

const response: ApiResponse<User[], Pagination> = {
  data: [{ id: 1, name: 'Ucup' }],
  meta: { page: 1, total: 1 },
};

console.log(response.data[0]?.name);
console.log(response.meta.page);
