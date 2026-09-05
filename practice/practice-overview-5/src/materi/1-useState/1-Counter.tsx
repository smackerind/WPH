import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('Belum ada nama');
  return (
    <div>
      <h1>Hitungan ke : {count}</h1>
      <button
        onClick={function () {
          setCount((countPrev) => countPrev + 1);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          setCount((countPrev) => countPrev - 1);
        }}
      >
        -
      </button>

      <input
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />

      <h2>{name}</h2>
    </div>
  );
}

export default Counter;
