// Step 1 - Pilih Tipe Berdasarkan Input
type ApiData<T> = T extends 'list' ? string[] : string;

type ListData = ApiData<'list'>;
type DetailData = ApiData<'detail'>;

// Step 2 - Memeriksa Bentuk Object
type WithId<T> = T extends { id: number } ? T : never;

type User = WithId<{ id: number; name: string }>;
type Invalid = WithId<{ name: string }>;

// Step 3 - Filter Union
type OnlyString<T> = T extends string ? T : never;
type Mixed = string | number | boolean;
type StringOnly = OnlyString<Mixed>;

// Step 4 - Distribusi dengan Literal Union
type EventName = 'click' | 'submit' | 404;
type ValidEvent<T> = T extends string ? `on${Capitalize<T>}` : never;

type HandlerName = ValidEvent<EventName>;

// Step 5 - Mencegah Distribusi
type IsEntirelyString<T> = [T] extends [string] ? true : false;
type Test1 = IsEntirelyString<string>;
type Test2 = IsEntirelyString<string | number>;
