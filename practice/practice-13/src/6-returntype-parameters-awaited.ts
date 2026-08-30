// Step 1 - ReturnType
function createProduct() {
  return {
    id: 1,
    name: 'Keyboard',
    price: 75_000,
  };
}

type Product = ReturnType<typeof createProduct>;

const product: Product = createProduct();
console.log(product.name);

// Step 2 - Paramaters
function calculateTotal(price: number, quantity: number, discount = 0) {
  return price * quantity - discount;
}

type CalculateArgs = Parameters<typeof calculateTotal>;

const args: CalculateArgs = [100_000, 5, 2000];
console.log(calculateTotal(...args));

// Step 3 - Awaited
async function fetchUser() {
  return {
    id: 1,
    name: 'Ucup',
    email: 'ucup@gmail.com',
  };
}

type FetchUserPromise = ReturnType<typeof fetchUser>;
type User = Awaited<FetchUserPromise>;

const user: User = await fetchUser();
console.log(user.email);

// Step 4 - Awaited pada Nested Promise
type FinalValue = Awaited<Promise<Promise<String>>>;

type MaybePromise = Awaited<string | Promise<number>>;

// Step 5 - Wrapper Function dengan Parameters and ReturnType
function withLogging<T extends (...args: any[]) => any>(fn: T) {
  return (...args: Parameters<T>): ReturnType<T> => {
    console.log('Arguments', args);
    return fn(...args);
  };
}

function add(a: number, b: number): number {
  return a + b;
}

const loggedAdd = withLogging(add);
console.log(loggedAdd(6, 8));
