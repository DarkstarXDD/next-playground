import { cn } from "@/lib/utils"

export default function Filters({ className }: { className?: string }) {
  return (
    <div
      className={cn("grid gap-4 rounded border border-zinc-400 p-4", className)}
    >
      <h2 className="text-base font-bold">Filters</h2>
      <div className="flex flex-col gap-2 border md:flex-row">
        <p>Filter 1</p>
        <p>Filter 1</p>
        <p>Filter 1</p>
      </div>
    </div>
  )
}
