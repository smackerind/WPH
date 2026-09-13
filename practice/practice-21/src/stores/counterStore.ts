import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

export type CounterStore = {
  // State
  count: number;

  // Action
  increment: () => void;
  decrement: () => void;
  reset: () => void;
  printDouble: () => void;
};

export const useCounterStore = create<CounterStore>()(
  devtools((set, get) => ({
    count: 0,
    increment: () =>
      set((state) => {
        console.log('Current Count:', state.count);
        const nextCount = state.count + 1;
        console.log('Next Count:', nextCount);
        return {
          count: nextCount,
        };
      }),
    decrement: () =>
      set((state) => ({
        count: state.count - 1,
      })),
    reset: () =>
      set({
        count: 0,
      }),
    printDouble: () => {
      const count = get().count;
      console.log(count * 2);
    },
  }))
);
