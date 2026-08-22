function syncTest() {
  return 10;
}

console.log(syncTest());

async function asyncTest() {
  return 10;
}

console.log(asyncTest());

async function contoh() {
  try {
    console.log('Start');

    const data = await Promise.reject(42);

    console.log(data);
    console.log('End');
  } catch (error) {
    console.error(error);
  }
}
contoh();

async function getA() {
  try {
    const data = await Promise.resolve('A');
    return data;
  } catch (error) {
    console.error(error);
  }
}
async function getB() {
  try {
    const data = await Promise.resolve('B');
    return data;
  } catch (error) {
    console.error(error);
  }
}
async function getC() {
  try {
    const data = await Promise.resolve('C');
    return data;
  } catch (error) {
    console.error(error);
  }
}

Promise.allSettled([getA, getB, getC]).then((res) => console.log(res));
