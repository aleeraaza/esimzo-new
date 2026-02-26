import { getRegions } from "@/lib/services/plans/plans.services";
import RegionsCards from "./RegionsCards";

export default async function RegionGrid() {
  const regions = await getRegions();

  return (
    <div className="grid grid-cols-2 gap-8">
      {regions.map((region) => (
        <RegionsCards key={region.id} region={region} />
      ))}
    </div>
  );
}
