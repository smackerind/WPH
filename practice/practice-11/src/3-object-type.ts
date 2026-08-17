const userObj: {
  nama: string;
  umur: number;
  alamat?: string;
} = {
  nama: 'Ucup',
  umur: 20,
  alamat: 'Jl Untung Jawa',
};

console.log(userObj.alamat);
console.log(userObj.nama);
console.log(userObj.umur);

function printProduct(product: {
  name: string;
  price: number;
  discount?: number;
}): void {
  console.log(`========Dicky Electronic========`);
  console.log(`Name : ${product.name}`);
  console.log(`Price : ${product.price}`);

  if (product.discount !== undefined) {
    console.log(`Discount : ${product.discount}%`);
  }
}

const laptop: { name: string; price: number; discount?: number } = {
  name: 'Laptop',
  price: 10_000_000,
  discount: 10,
};

printProduct(laptop);

const handphone: { name: string; price: number; discount?: number } = {
  name: 'Handphone',
  price: 5_000_000,
};
printProduct(handphone);
