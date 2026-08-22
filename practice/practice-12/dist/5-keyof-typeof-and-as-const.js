"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getValue(obj, key) {
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
const dicky = {
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
const user1 = {
    id: 2,
    role: 'manusia-biasa',
};
console.log(user1);
//# sourceMappingURL=5-keyof-typeof-and-as-const.js.map