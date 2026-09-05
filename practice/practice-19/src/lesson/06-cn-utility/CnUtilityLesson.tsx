import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useState } from "react";


export function CnUtilityLesson() {

  const [isCompleted, setIsCompleted] = useState(false)  

  const statusClassName = cn(
    "rounded-full px-3 py-1 text-sm font-medium",
    isCompleted ? "bg-green-100 text-green-700" : "bg-slate-100 text-slate-600"
  )

  return (
    <div>
       <header>
        <p className="text-sm font-semibold text-blue-600">Lesson 06</p>
        <h2 id="lesson-title-cn-utility" className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">Utility cn()</h2>
        <p className="mt-3 max-w-3xl leading-7 text-slate-600">
          <code>clsx</code> menggabungkan class berdasarkan kondisi, <code>tailwind-merge</code> menyelesaikan konflik utility Tailwind, dan <code>cn()</code> menggabungkan keduanya.
        </p>
      </header>


      <section className="grid gap-5 lg:grid-cols-2" aria-label="Demo shadcn components">
        <Card>
          <CardHeader>
            <CardTitle>Class berdasarkan kondisi</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
             <div className="flex flex-wrap items-center gap-4">
                  <span className={statusClassName}> {isCompleted ? "selesai" : "belum selesai"} </span>
                    <Button type="button" variant="outline" onClick={() => setIsCompleted((current) => !current)}>Ubah Status</Button>
                    <code className="block rounded-lg bg-slate-950 p-3 text-xs leading-5 text-slate-100">{statusClassName}</code>
             </div>
               
               
          </CardContent>
          
        </Card>
      </section>
    </div>
  )
}
