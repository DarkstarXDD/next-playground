import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/Table"

export default function PeoplePage() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Id</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Address</TableHead>
          <TableHead>Contact Number</TableHead>
          <TableHead>Role</TableHead>
          <TableHead className="text-right">Status</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        <TableRow>
          <TableCell>1</TableCell>
          <TableCell>John Doe</TableCell>
          <TableCell>221, Baker Street, London</TableCell>
          <TableCell>8005550175</TableCell>
          <TableCell>Admin</TableCell>
          <TableCell>Active</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>2</TableCell>
          <TableCell>Jane Smith</TableCell>
          <TableCell>742 Evergreen Terrace, Springfield</TableCell>
          <TableCell>8005550123</TableCell>
          <TableCell>Manager</TableCell>
          <TableCell>Inactive</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>3</TableCell>
          <TableCell>Michael Johnson</TableCell>
          <TableCell>10 Downing Street, London</TableCell>
          <TableCell>8005550456</TableCell>
          <TableCell>Employee</TableCell>
          <TableCell>Active</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>4</TableCell>
          <TableCell>Emily Davis</TableCell>
          <TableCell>1600 Pennsylvania Ave, Washington, D.C.</TableCell>
          <TableCell>8005550789</TableCell>
          <TableCell>HR</TableCell>
          <TableCell>Inactive</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>5</TableCell>
          <TableCell>Robert Brown</TableCell>
          <TableCell>Broadway, New York</TableCell>
          <TableCell>8005550990</TableCell>
          <TableCell>Supervisor</TableCell>
          <TableCell>Active</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>6</TableCell>
          <TableCell>Sarah Wilson</TableCell>
          <TableCell>5th Avenue, New York</TableCell>
          <TableCell>8005551122</TableCell>
          <TableCell>Finance</TableCell>
          <TableCell>Active</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>7</TableCell>
          <TableCell>David Martinez</TableCell>
          <TableCell>Rue de Rivoli, Paris</TableCell>
          <TableCell>8005551345</TableCell>
          <TableCell>Technician</TableCell>
          <TableCell>Inactive</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>8</TableCell>
          <TableCell>Olivia Taylor</TableCell>
          <TableCell>Market Street, San Francisco</TableCell>
          <TableCell>8005551567</TableCell>
          <TableCell>Support</TableCell>
          <TableCell>Active</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}
