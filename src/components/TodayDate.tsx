"use client"

import { format } from "date-fns"
import { useState, useEffect } from "react"

export default function TodayDate() {
  const [date, setDate] = useState<string | null>(null)
  const [time, setTime] = useState<string | null>(null)

  const today = new Date()
  const formattedDate = format(today, "EEEE, MMMM do, yyyy")
  const formattedTime = format(today, "HH:mm a")

  useEffect(() => {
    setDate(formattedDate)
    setTime(formattedTime)
  }, [formattedDate, formattedTime])

  return (
    <div className="grid justify-center gap-4">
      <p className="relative text-2xl font-medium text-zinc-300">
        {date ?? "-- -- --"}
      </p>
      <p className="text-2xl font-medium text-zinc-300">{time ?? "-- -- --"}</p>
    </div>
  )
}
