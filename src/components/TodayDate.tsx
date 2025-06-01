"use client"

import { format } from "date-fns"
// import { useState, useEffect } from "react"

export default function TodayDate() {
  const today = new Date()
  const formattedDate = format(today, "EEEE, MMMM do, yyyy")
  const formattedTime = format(today, "HH:mm a")

  // const [date, setDate] = useState(formattedDate)

  // useEffect(() => setDate(formattedDate), [formattedDate])

  return (
    <div className="grid gap-4">
      <p className="text-2xl font-medium text-zinc-300">{formattedDate}</p>
      <p
        suppressHydrationWarning={true}
        className="text-2xl font-medium text-zinc-300"
      >
        {formattedTime}
      </p>
    </div>
  )
}
