import PlansClientPage from "@/components/plans/PlansClientPage";
import CountriesHeader from "@/components/sections/CountriesHeader";
import NoPackagesState from "@/components/sections/NoPackagesFound";
import { getCountryBySlug } from "@/lib/services/plans/plans.services";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function page({ params }: PageProps) {
  const { slug } = await params;

  try {
    const packages = await getCountryBySlug(slug);

    if (!packages || packages.length === 0) {
      return <NoPackagesState />;
    }

    return (
      <div>
        <CountriesHeader slug={slug} />
        <PlansClientPage slug={slug} initialData={packages} />
      </div>
    );
  } catch (error) {
    console.error("Failed to load packages for slug:", slug, error);
    return <NoPackagesState />;
  }
}
