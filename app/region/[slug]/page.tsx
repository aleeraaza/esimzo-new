import PlansClientPage from "@/components/plans/PlansClientPage";
import CountriesHeader from "@/components/sections/CountriesHeader";
import { getRegionalPackagesBySlug } from "@/lib/services/plans/plans.services";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function page({ params }: PageProps) {
  const { slug } = await params;
  const packages = await getRegionalPackagesBySlug(slug);
  return (
    <div>
      <CountriesHeader slug={slug} />
      <PlansClientPage slug={slug} initialData={packages} />
    </div>
  );
}
