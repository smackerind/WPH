function identity<T>(value: T): T {
  return value;
}

identity<string>('Helloo');
identity<number>(19);

// Step 1 - Tanpa Generic
function wrapString(value: string): string {
  return value;
}
wrapString('Hello');
wrapString(20);

// Step 2 - Dengan any
function wrapStringAny(value: any): any {
  return value;
}
wrapStringAny('Hello');
wrapStringAny(20);

// Step 3 - Generic
function wrapStringGeneric<T>(value: T): T {
  return value;
}
wrapStringGeneric<string>('Hello');
wrapStringGeneric<number>(20);

function wrapInArray<T>(value: T): T[] {
  return [value];
}

const a = wrapInArray(1);
const b = wrapInArray('Helo');
