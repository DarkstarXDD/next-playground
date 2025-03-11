import Label from "@/components/ui/Label"
import Input from "@/components/ui/Input"
// import FieldError from "@/components/ui/FieldError"
// import { FieldErrorContext } from "@/components/ui/FieldError"
import { InputContext } from "@/components/ui/Input"

export default function Home() {
  return (
    <main>
      <InputContext.Provider value={{ className: "border-red-400" }}>
        <Label>Username</Label>
        <Input />
      </InputContext.Provider>
    </main>
  )
}
