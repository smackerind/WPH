import { useContext } from "react";
import { ThemeContext, ThemeProvider } from "./ThemeContext";



function ThemeToggle(){
  const context = useContext(ThemeContext)

  if(context === null){
    throw new Error("ThemeToggle harus digunakan di dalam ThemeProvider")
  }

  return (
    <button type="button" onClick={context.toggleTheme} className="rounded-lg bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-900">
      Ganti ke tema {context.theme === "light" ? "gelap" : "terang"}
    </button>
  )
}


function ThemePreview() {
  const context = useContext(ThemeContext)

  if(context === null){
    throw new Error("ThemeToggle harus digunakan di dalam ThemeProvider")
  }

  const isDark = context.theme === "dark"

  return (
    <article className={`rounded-xl border p-6 shadow-sm ${
      isDark
      ? "border-slate-700 bg-slate-900 text-white"
      : "border-slate-200 bg-white text-slate-900"
    }`}>
        <p className={isDark ? "text-blue-300" : "text-blue-700"}>Theme Preview</p>
        <h3 className="mt-2 text-2xl font-bold">Tema {isDark ? "Gelap" : "Terang"}</h3>
        <p className={`mt-3 ${isDark ? "text-slate-300" : "text-slate-600"}`}>Component ini membaca theme yang sama tanpa menerima prop dari parent</p>
    </article>
  )
}

function ThemeStatus(){
  const context = useContext(ThemeContext)


  if(context === null){
    throw new Error("ThemeToggle harus digunakan di dalam ThemeProvider")
  }

  return (
    <p className="rounded-lg bg-slate-100 p-3 text-sm text-slate-700">ThemeStatus juga membaca context: <strong>{context.theme}</strong></p>
  )
}

function ThemeContextDemo() {
  return (
    <div className="grid gap-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <ThemeStatus/>
        <ThemeToggle/>
      </div>
      <ThemePreview/>
    </div>
  )
}

function ThemeContextLesson() {
  return (
    <div className="grid gap-5">
        <section>
         
          <ThemeProvider>
             <ThemeContextDemo/>
          </ThemeProvider>
        
        </section>
    </div>
  )
}

export default ThemeContextLesson;
