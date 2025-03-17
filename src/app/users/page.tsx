import { Member, columns } from "@/components/Staff/Columns"
import { DataTable } from "@/components/Staff/DataTable"

async function getData(): Promise<Member[]> {
  // Fetch data from your API here.
  return [
    {
      id: "1",
      name: "John Doe",
      address: "221, Baker Street, London",
      contactNumber: 8005550175,
      role: "Admin",
      status: "Active",
    },
  ]
}

export default async function UsersPage() {
  const data = await getData()

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}
