import PlansClientPage from "@/components/plans/PlansClientPage";
import CountriesHeader from "@/components/sections/CountriesHeader";
import { getGlobalPackages } from "@/lib/services/plans/plans.services";

export default async function page() {
  const packages = await getGlobalPackages();
  return (
    <div>
      <CountriesHeader slug="global" />
      <PlansClientPage slug="global" initialData={packages} />
    </div>
  );
}
