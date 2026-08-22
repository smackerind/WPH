const user = { name: 'Budi' };
const copy = user;

copy.name = 'Renday';
console.log(copy.name);

console.log(user.name);

const original = {
  name: 'Budi',
  tags: ['Indonesia', 'Inggris'],
};
console.log(original);

const shallow = { ...original };
shallow.name = 'Renday';
shallow.tags.push('Jepang');

console.log(shallow);
console.log(original);

const deep = structuredClone(original);
console.log(deep);
deep.name = 'Ucup';
deep.tags.push('Jerman');

console.log('-------------------');
console.log(deep);
console.log('-------------------');
console.log(shallow);
console.log('-------------------');
console.log(original);
