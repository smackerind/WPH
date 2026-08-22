const BASE_URL = 'https://jsonplaceholder.typicode.com/todos/1';

fetch(BASE_URL)
  .then((response) => {
    return response.json();
  })
  .then((result) => {
    console.log(result);
  })
  .catch((err) => console.error(err.message));

async function ambilData() {
  try {
    const response = await fetch(BASE_URL);

    // Validasi bahwa response API berjalan normal
    if (!response.ok) {
      throw new Error('HTTP', response.status);
    }

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
}

ambilData();

fetch(BASE_URL, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ name: 'Budi' }),
});
