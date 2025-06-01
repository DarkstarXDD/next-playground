"use client"

import { format } from "date-fns"
// import { useState, useEffect } from "react"

export default function TodayDate() {
  const today = new Date()
  const formattedDate = format(today, "EEEE, MMMM do, yyyy")

  // const [date, setDate] = useState(formattedDate)

  // useEffect(() => setDate(formattedDate), [formattedDate])

  return <p className="text-2xl font-medium text-zinc-300">{formattedDate}</p>
}
