import Filters from "./Filters"
import FiltersDisclosure from "./FiltersDisclosures"

export default function Issue() {
  return (
    <div className="flex">
      <input placeholder="Search by Name" className="border-2" />

      <FiltersDisclosure title="Filters">
        <Filters />
      </FiltersDisclosure>
    </div>
  )
}
