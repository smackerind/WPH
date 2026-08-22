// 1. keyof
type User = {
  id: number;
  name: string;
};

type UserKey = keyof User;
function getValue(obj: User, key: UserKey) {
  return obj[key];
}

const ucup = { id: 1, name: 'Ucup' };
console.log(getValue(ucup, 'id'));
const renday = { id: 2, name: 'Renday' };
console.log(getValue(renday, 'name'));

// 2. typeof
const user = {
  id: 1,
  name: 'Ucup',
};

type UserTypeOf = typeof user;

const dicky: UserTypeOf = {
  id: 2,
  name: 'Dicky',
};

// 3. as const
// const role = 'admin';
// type RoleNotAsConst = typeof role;
// const roleUserNotConst: RoleNotAsConst = 'test';
// console.log(roleUserNotConst);

// const roleAsConst = 'admin' as const;
// type Role = typeof roleAsConst;
// const roleUser: Role = 'user';
// console.log(roleUser);

const userNotAsConst = {
  id: 1,
  role: 'admin',
};

type UserNotAsConst = typeof userNotAsConst;
const user1: UserNotAsConst = {
  id: 2,
  role: 'manusia-biasa',
};

console.log(user1);

const userAsConst = {
  id: 1,
  role: 'admin',
} as const;

type UserAsConst = typeof userAsConst;
const user2: UserAsConst = {
  id: 1,
  role: 'admin',
};

const ROLES = ['admin', 'user', 'member'] as const;
type RolesType = (typeof ROLES)[number];
const admin: RolesType = 'admin';
console.log(admin);
