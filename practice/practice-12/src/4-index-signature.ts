type Dictionary = {
  [key: string]: string;
};

type UserMap = {
  [key: string]: string;
};

type UserType = {
  user1: string;
  user2: string;
  user3: string;
};

const users: UserMap = {
  user1: 'Adit',
  user2: 'Ucup',
  user3: 'Ucup',
};

type ScoreMap = {
  [key: string]: number;
};

const scores: ScoreMap = {
  math: 90,
  english: 90,
  science: 100,
};

type Product = {
  name: string;
  price: number;
  [key: string]: string | number;
};

const product: Product = {
  name: 'Laptop',
  price: 20_000_000,
  brand: 'ROG Strix',
  ram: '32 GB',
  storage: '1 TB',
};
