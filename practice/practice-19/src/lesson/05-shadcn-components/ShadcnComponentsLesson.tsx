import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export function ShadcnComponentsLesson() {
  const [profileName, setProfileName] = useState("Henry Rivardo")
  const [savedName, setSavedName] = useState("Henry Rivardo")

  return (
    <div>
       <header>
        <p className="text-sm font-semibold text-blue-600">Lesson 05</p>
        <h2 id="lesson-title-shadcn-components" className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">shadcn/ui Components</h2>
        <p className="mt-3 max-w-3xl leading-7 text-slate-600">
          CLI menambahkan source component ke <code>src/components/ui/</code>. Kita dapat membaca implementation, mengirim props biasa, dan menambahkan <code>className</code>.
        </p>
      </header>

      <section className="grid gap-5 lg:grid-cols-2" aria-label="Demo shadcn components">
        <Card className="border-blue-200 bg-blue-50">
          <CardHeader>
            <CardTitle>Profile</CardTitle>
            <CardDescription>Card ini dikustomisasi dari tempat shadcnnya</CardDescription>
          </CardHeader>

          <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="profile-name"> Nama Lengkap</Label>
                <Input onChange={(event) => setProfileName(event.target.value)} value={profileName} id="profile-name" className="bg-white focus-visible:border-blue-500 focus-visible:ring-blue-200"/>
              </div>
              <Button type="button" onClick={() => setSavedName(profileName)} className="bg-indigo-600 hover:bg-indigo-600">Simpan Profile</Button>
              <p aria-live="polite" className="text-sm text-slate-600">{savedName}</p>
          </CardContent>
          
        </Card>
      </section>

      {/* dialog */}
    </div>
  )
}
