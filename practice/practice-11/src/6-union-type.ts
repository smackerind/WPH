// 1. Union Primitive
let id: number | string;
id = 123;
console.log(id);
id = 'ucup';
console.log(id);

// 2. Union Literal
type Status = 'success' | 'error' | 'pending';
let responseStatus: Status;

responseStatus = 'success';
responseStatus = 'error';
responseStatus = 'pending';

// 3. Union Function
function printId(id: string | number): void | number | string {
  console.log(id);
}
printId(12);

// 4. Union Type Narrowing
function printId2(id: string | number) {
  if (typeof id === 'string') {
    console.log(id.toUpperCase());
  } else {
    console.log(id.toFixed(2));
  }
}
printId2(19);
printId2('Ucup');

// 5. Union Object
type SuccessResponse = {
  status: 'success';
  data: string;
};
type ErrorResponse = {
  status: 'error';
  message: string;
};

type APIResponse = SuccessResponse | ErrorResponse;
