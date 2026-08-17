type ProductType = {
  name: string;
  price: number;
  discount?: number;
};

interface ProductInterface {
  name: string;
  price: number;
  discount?: number;
}

type Status = 'process' | 'canceled';

function printProduct(product: ProductType | ProductInterface): void {
  console.log(`========Dicky Electronic========`);
  console.log(`Name : ${product.name}`);
  console.log(`Price : ${product.price}`);

  if (product.discount !== undefined) {
    console.log(`Discount : ${product.discount}%`);
  }
}

const laptop: ProductType = {
  name: 'Laptop',
  price: 10_000_000,
  discount: 10,
};

printProduct(laptop);

const handphone: ProductInterface = {
  name: 'Handphone',
  price: 5_000_000,
};
printProduct(handphone);
