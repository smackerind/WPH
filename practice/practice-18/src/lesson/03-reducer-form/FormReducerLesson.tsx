import { ChangeEvent, useReducer } from "react";


type Role = "Student" | "Mentor"

interface FormState {
  name:string;
  email:string;
  role:Role
}


type FormAction =
  | {type: "nameChanged"; payload:string}
  | {type: "emailChanged"; payload:string}
  | {type: "roleChanged"; payload:Role}
  | {type:  "reset" };

const initialFormState:FormState = {
  name:"",
  email:"",
  role: "Student"
}

function formReducer(state:FormState, action:FormAction): FormState{
  switch(action.type){
    case "nameChanged":
      return {
        ...state,
        name:action.payload
      };

    case "emailChanged":
      return {
        ...state,
        email:action.payload
      };
    
    case "roleChanged":
      return {
        ...state,
        role:action.payload
      };

    case "reset":
      return initialFormState

    default:
      return state
  }
}

function FormReducerLesson() {
  const [state,dispatch] = useReducer(formReducer, initialFormState)


  function handleRoleChange(event: ChangeEvent<HTMLSelectElement>){
    const nextRole:Role = event.target.value === "mentor" ? "Mentor" : "Student"

    dispatch({type:"roleChanged", payload:nextRole})
  }



  return (
    <div className="grid gap-5">
      <section className="grid gap-5 rounded-xl border bg-white p-5 shadow-sm lg:grid-cols-2">
        <form className="grid content-start gap-4" onSubmit={(event) => event.preventDefault()}>
            <div>
              <label htmlFor="mentee-name" className="mb-1 block font-semibold text-slate-700">
                Nama Mentee
              </label>
 
              <input onChange={(event) => dispatch({type:"nameChanged", payload:event.target.value})} placeholder="Contoh: Nadia" value={state.name} id="mentee-name" className="w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-900"/>
            </div>

            <div>
              <label htmlFor="mentee-email" className="mb-1 block font-semibold text-slate-700">
                Email
              </label>
 
              <input onChange={(event) => dispatch({type:"emailChanged", payload:event.target.value})} placeholder="nama@email.com" value={state.email} id="mentee-email" className="w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-900"/>
            </div>

            <div>
              <label htmlFor="mentee-role" className="mb-1 block font-semibold text-slate-700">
               Role
              </label>
 
             <select onChange={handleRoleChange} id="mentee-role" value={state.role} className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2">

              <option value="student">Student</option>
              <option value="mentor">Mentor</option>

             </select>
            </div>


            <button className="rounded-lg border border-red-200 px-4 py-2 font-semibold text-red-700 hover:bg-red-50" type="button" onClick={() => dispatch({type:"reset"})}>Reset Form</button>
        </form> 
      </section>
    </div>
  )
}

export default FormReducerLesson;
