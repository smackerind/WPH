import { Button } from "@/components/ui/button";
import { Dialog } from "radix-ui";


export function HeadlessConceptLesson() {
  return (
    <div>
      <header>
        <p className="text-sm font-semibold text-blue-600">Lesson 02</p>
        <h2 id="lesson-title-headless-concept" className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">Konsep Headless Component</h2>
        <p className="mt-3 max-w-2xl leading-7 text-slate-600">Headless bukan berarti tidak memiliki UI. Headless itu fungsi nya atau behavior nya ready tanpa memaksakan UI.</p>
      </header>


      <section className="space-y-4" aria-labelledby="headless-component-title">
        {/* Button Native HTML Dasar */}
        <article className="rounded-xl border border-slate-20 p-5">
          <span className="text-sm font-bold uppercase tracking-wider text-slate-400">Native</span>
          <h3 className="mt-3 font-semibold">HTML behavior dasar</h3>
          <p className="mt-2 min-h-16 text-sm leading-6 text-slate-600">Cocok untuk interaksi dan belajar HTML dasar.</p>
          <button type="button" className="mt-5 rounded border px-3 py-1.5 text-sm">Native button</button>
        </article>

        
        {/* Radix Primitives */}
        <article className="rounded-xl border border-indigo-300 bg-indigo-100/50 p-5">
        <span className="text-sm font-bold uppercase tracking-wider text-slate-400">Radix Primitives</span>
        <h3 className="mt-3 font-semibold">Behavior + accessibility</h3>
        <p className="mt-2 min-h-16 text-sm leading-6 text-slate-600">Dialog kompleks, menggunakan radix ui dengan styling custom.</p>


        <Dialog.Root>
		     <Dialog.Trigger asChild>
          <button type="button" className="mt-5 border px-4 py-1.5 text-sm bg-indigo-500 text-white">Radix Headless</button>
         </Dialog.Trigger>
		      <Dialog.Portal>
			   <Dialog.Overlay className="fixed inset-0 z-40 bg-black/30" />
			   <Dialog.Content className="fixed left-1/2 top-1/2 z-50 w-72 -translate-x-1/2 -translate-y-1/2 border bg-white p-4 shadow-lg">
				<Dialog.Title className="font-semibold">Dialog Headless</Dialog.Title>
				<Dialog.Description className="mt-2 text-sm text-slate-600" >Behavior sudah bekerja sebelum desain akhirnya dibuat</Dialog.Description>
				<Dialog.Close asChild>
          <button type="button" className="mt-4 border pc-3 py-1 text-sm">Tutup</button>
        </Dialog.Close>
			 </Dialog.Content>
		  </Dialog.Portal>
	   </Dialog.Root>
        </article>


        {/* shadcn button */}

        <article className="rounded-xl border border-slate-200 p-5">
          <span className="text-sm font-bold uppercase tracking-wider text-emerald-400">Shadcn</span>
          <h3 className="mt-3 font-semibold">Source dan styling darI Shadcn</h3>
          <p className="mt-2 min-h-16 text-sm leading-6 text-slate-600">Component source siap pakai, tapi masih bisa dicustom</p>
          <Button type="button" className="mt-5 bg-amber-400 hover:bg-amber-700">Shadcn Button</Button>
        </article>


      </section>
    </div>
  )
}
