import { useReducer } from "react"

interface CounterState {
  count: number
}


type CounterAction = 
  | {type: "increment"}
  | {type: "decrement"}
  | {type: "reset"}

function counterReducer (
  state: CounterState,
  action:CounterAction,
) : CounterState {
  switch(action.type){
    case "increment":
      return {count: state.count + 1}

      case "decrement":
        return  {
         count: Math.max(0, state.count - 1)
        } 

        case "reset":
          return {count: 0}

        default:
          return state
  }
}

function CounterReducerLesson() {
  const [state, dispatch] = useReducer(counterReducer, {count:0})

  return  (
    <div className="grid gap-5">
      <section className="rounded-xl border bg-white p-5 shadow-sm">
        <p className="text-slate-600">Contoh counter sederhana dibuat dengan useState, kita menggunakan reducer untuk mempelajari pola action dan state yang barubah</p>

        <div className="mt-5 rounded-xl border border-blue-200 bg-blue-50 p-6 text-center">
          <p className="text-sm font-semibold text-blue-700">Nilai counter</p>
          <output className="mt-2 block text-6xl font-bold text-slate-900">{state.count}</output>
        </div>

        <div className="mt-5 flex flex-wrap justify-center gap-3">
          <button type="button" onClick={() => dispatch({type:"decrement"})} className="rounded-lg border px-4 py-2 font-semibold disabled:opacity-40 bg-white text-slate-700 hover:bg-slate-700 hover:text-white">Kurangi</button>
          <button type="button" onClick={() => dispatch({type:"increment"})} className="rounded-lg border px-4 py-2 font-semibold disabled:opacity-40 bg-blue-600 text-white hover:bg-blue-900">Tambah</button>
          <button type="button" onClick={() => dispatch({type:"reset"})} className="rounded-lg border px-4 py-2 font-semibold disabled:opacity-40 hover:text-white bg-red-200 text-red-700 hover:bg-red-900">Reset</button>
        </div>

      </section>
    </div>
  )
}

export default CounterReducerLesson;
