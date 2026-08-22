const nama = 'Ucup';
console.log(nama);

const arrayOfObject = [
  { id: 1, nama: 'Ucup' },
  { id: 2, nama: 'Unyil' },
  { id: 3, nama: 'Udin' },
  { id: 4, nama: 'Udut' },
];

const listContainer = document.getElementById('list');
let listItem = '';

async function fetchData() {
  try {
    const data = await fetch('https://jsonplaceholder.typicode.com/post/1');
    if (!data.ok) {
      throw new Error('Data nya error...', data.status);
    }

    const result = await data.json();

    result.forEach((item) => {
      listItem += `
            <li style="margin-bottom: 10px;">
                <h3>${item.title}</h3>
                <p>id: ${item.id}</p>
            </li>
        `;
    });

    listContainer.innerHTML = listItem;
  } catch (error) {
    console.error(error.message);
  }
}

fetchData();
