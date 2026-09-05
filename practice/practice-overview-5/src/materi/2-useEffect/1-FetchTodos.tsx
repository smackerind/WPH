import { useState, useEffect } from 'react';

type FetchTodosType = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

function FetchTodos() {
  const [todos, setTodos] = useState<FetchTodosType[]>([]);
  const [refresh, setRefresh] = useState(true);

  useEffect(() => {
    console.log('Mounted');
    async function fetchTodos() {
      try {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/todos'
        );

        if (!response.ok) {
          throw new Error('API gak bisa nich..');
        }
        const data = await response.json();
        setTodos(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchTodos();
  }, [refresh]);
  console.log(todos);

  return (
    <div>
      <button onClick={() => setRefresh((refresh) => !refresh)} type="button">
        Refresh
      </button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.id} | {todo.title} |{' '}
            <span
              style={{
                color: todo.completed ? 'white' : 'black',
                backgroundColor: todo.completed ? 'green' : 'red',
              }}
            >
              {todo.completed ? '[COMPLETED]' : '[NOT COMPLETED]'}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FetchTodos;
