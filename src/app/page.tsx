export default function Home() {
  return (
    <main className="grid gap-10 px-10 py-20 text-center">
      <div className="grid grid-cols-[repeat(auto-fit,minmax(0,auto))] items-center justify-center gap-2">
        {/* Top row */}
        <div className="col-start-1 row-start-1 size-9 bg-red-700">First</div>
        <div className="-col-start-1 row-start-1 size-9 bg-red-700">Last</div>

        {/* Bottom row */}
        {Array.from({ length: 7 }).map((_, i) => (
          <div
            key={i}
            className="row-start-2 flex size-9 items-center justify-center bg-orange-500 text-center"
          >
            {i + 1}
          </div>
        ))}
      </div>
    </main>
  )
}
