"use client"

import { ColumnDef } from "@tanstack/react-table"

export type Member = {
  id: string
  name: string
  address: string
  contactNumber: number
  role: "Admin" | "Employee" | "HR" | "Supervisor"
  status: "Active" | "Inactive"
}

export const columns: ColumnDef<Member>[] = [
  {
    accessorKey: "id",
    header: "Header",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "address",
    header: "Address",
  },
  {
    accessorKey: "contactNumber",
    header: "Contact Number",
  },
  {
    accessorKey: "role",
    header: "Role",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
]
