import { getPopularCountries, getRegions } from "@/lib/services/plans/plans.services";
import { SearchDialog } from "./SearchDialog";

type Variant = "bar" | "icon";

export default async function SearchList({ variant = "icon" }: { variant?: Variant }) {
  const [popularCountries, regions] = await Promise.all([
    getPopularCountries(),
    getRegions(),
  ]);

  return (
    <SearchDialog
      popularCountries={popularCountries}
      regions={regions}
      variant={variant}
    />
  );
}
