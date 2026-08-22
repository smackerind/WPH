type User = {
  readonly nik: string;
  name: string;
};

const user: User = {
  nik: '10923810923810923090',
  name: 'Ucup',
};

console.log(user.nik);
// user.id = 2;
user.name = 'Rudi';

console.log(user.nik);
console.log(user.name);

const listStudent: readonly string[] = ['Ucup', 'Renday', 'Gilbert'];
// listStudent.push('Dicky');
