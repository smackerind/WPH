// Step 1 - Pick
type User = {
  id: number;
  name: string;
  age: number;
};

type UserPreview = Pick<User, 'id' | 'name'>;

const preview: UserPreview = {
  id: 1,
  name: 'Ucup',
};
console.log(preview);

// Step 2 - Omit
type UserOmit = {
  id: number;
  name: string;
  email: string;
  phone: string;
  password: string;
};
type PublicUser = Omit<UserOmit, 'password'>;
const publicUser: PublicUser = {
  id: 1,
  name: 'Alya',
  email: 'alya@gmail.com',
  phone: '0812312512',
};
console.log(publicUser);

// Step 3 - Partial
type UserData = {
  id: number;
  name: string;
  email: string;
  phone: string;
  password: string;
};

type UpdateUserPayload = Partial<Omit<UserData, 'id' | 'password'>>;

const changes: UpdateUserPayload = {
  name: 'Ucup',
};

function updateUser(user: UserData, changes: UpdateUserPayload): UserData {
  return { ...user, ...changes };
}

const userData: UserData = {
  id: 1,
  name: 'Udin',
  phone: '01931093102312',
  email: 'udin@gmali.com',
  password: 'hellodear',
};

console.log(userData);
console.log(updateUser(userData, changes));

// Step 4 - Required
type CompleteUser = Required<UpdateUserPayload>;
const completeUser: CompleteUser = {
  name: 'Alya',
  phone: '0198301912',
  email: 'alya@gmail.com',
};
console.log(completeUser);
