let listStudent: (string | number)[] = ['Ucup', 'Otong', 'Ujang', 10];
console.log(listStudent);

listStudent.forEach((data) => {
  console.log(data);
});

let listUmurStudent: number[] = [20, 21, 22, 23];
console.log(listUmurStudent);

let listIsStudent: Array<boolean> = [true, false];
console.log(listIsStudent);

const emails: string[] = [
  'test@gmail.com',
  'halo@yahoo.com',
  'admin@outlook.com',
  'test2@gmail.com',
];

for (const email of emails) {
  if (email.includes('gmail')) {
    console.log(email.toUpperCase());
  }
}
