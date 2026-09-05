import { Counter } from './materi/1-useState';
import { FetchTodos, TrafficLight } from './materi/2-useEffect';

function App() {
  return (
    <div>
      <h1>Overview 6 - Netherland</h1>

      <h2>Materi 1 - useState</h2>
      <Counter />

      <h2>Materi 2 - useEffect</h2>
      {/* <FetchTodos /> */}
      <TrafficLight />
    </div>
  );
}

export default App;
