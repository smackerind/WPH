import { useCounterStore } from '../../stores/counterStore';

function CounterControls() {
  const decrement = useCounterStore((state) => state.decrement);
  const increment = useCounterStore((state) => state.increment);
  const reset = useCounterStore((state) => state.reset);
  const printDouble = useCounterStore((state) => state.printDouble);
  return (
    <div>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>reset</button>
      <button onClick={increment}>+</button>
      <button onClick={printDouble}>Double</button>
    </div>
  );
}

export default CounterControls;
