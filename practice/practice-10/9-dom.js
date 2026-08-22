// const document= {
//   html: {
//     head: {
//       title = 'Hello world',
//     },
//     body: {
//       h1 = 'Hello',
//       p = 'World'
//     }
//   }
// }

// 1. DOM Selection

/**
 * Macam-macam DOM Selection :
 * -. getElementById() -> mengambil property id
 * -. getElementsByClassName() -> mengambil property class
 * -. getElementsByTagName() -> mengambil tag HTML
 * -. querySelector()
 * -. querySelectorAll()
 */

const container = document.getElementById('container');
console.log(container);

const list = document.getElementsByTagName('li');
console.log(list);

const paragraph = document.querySelectorAll('p');
console.log(paragraph);

// 2. DOM Manipulation
// -. Mengubah Konten
container.innerHTML = '<h1>Hello World</h1>';
list[0].textContent = 'HAHAHAH';
// -. Mengubah Attribute
container.setAttribute('class', 'new-class');

const body = document.getElementById('body');
body.setAttribute('class', 'dark');

function ubahTema() {
  body.removeAttribute('class');
}

// -. Mengubah Style
container.style.color = 'red';

// 3. Membuat & Menghapus Element
const span = document.createElement('span');

span.innerText = 'INI ADALAH SPAN';
span.style.backgroundColor = 'yellow';
span.style.color = 'black';
span.style.width = '100%';
span.style.height = '150px';
span.style.display = 'block';
span.style.textAlign = 'center';
span.style.lineHeight = '150px';
span.style.boxShadow = '1px 1px red';

body.appendChild(span);

body.removeChild(span);

const btnSubmit = document.getElementById('submit');
btnSubmit.setAttribute('type', 'submit');

btnSubmit.addEventListener('click', () => {
  alert('sudah submit yaa');
});
