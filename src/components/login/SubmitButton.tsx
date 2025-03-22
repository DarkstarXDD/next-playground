import { Button } from "@/components/ui/Button"
import { useFormStatus } from "react-dom"

export default function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <Button
      className="cursor-pointer"
      disabled={pending}
      onClick={() => console.log("Button Clicked")}
    >
      Click Me
    </Button>
  )
}
