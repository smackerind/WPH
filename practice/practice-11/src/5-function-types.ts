// 1. Typing Parameter
function sayHi(nama: string): void {
  console.log(nama);
}
sayHi('Ucup');

// 2. Typing Return Value
function tambahAngka(a: number, b: number): number {
  return a + b;
}
console.log(tambahAngka(10, 2));

// 3. Type Inference
function bagiAngka(a: number, b: number) {
  return a / b;
}

console.log(bagiAngka(10, 2));

// 4. Optional Parameter
function salam(nama: string, age?: number): void {
  if (age) {
    console.log(`${nama} is ${age}`);
  } else {
    console.log(`Hello, ${nama}`);
  }
}
salam('Ucup', 20);

// 5. Void Function
function logMessage(msg: string): void {
  console.log(msg);
}
logMessage('haii udah tidur belom?');

// Contoh
function calculator(
  a: number,
  b: number,
  operation: '+' | '-' | '*' | '/'
): number | void | string {
  if (operation === '+') {
    return a + b;
  } else if (operation === '-') {
    return a - b;
  } else if (operation === '*') {
    return a * b;
  } else if (operation === '/') {
    if (b !== 0) {
      return a / b;
    } else {
      return `${b} tidak boleh 0`;
    }
  }
}

console.log(calculator(10, 2, '+'));
