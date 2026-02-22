import { getRegions } from "@/lib/services/plans/plans.services";
import CountryCard from "../cards/CountryCard";
import ExpandableGrid from "../cards/ExpandableGrid";

const VISIBLE_COUNT = 15;

export default async function RegionsSection() {
  const regions = await getRegions();

  return (
    <section id="regions" className="bg-background py-10">
      <div className="container">
        <div className="flex flex-col gap-12">
          {regions.map((region) => (
            <div key={region.id}>
              {/* Region heading */}
              <div className="mb-6 flex items-center justify-center gap-3">
                <span className="text-3xl">{region.flag}</span>
                <h2 className="text-center text-xl font-bold tracking-tight text-foreground">
                  {region.name}
                </h2>
              </div>

              {/* All cards rendered server-side; ExpandableGrid clips overflow */}
              <ExpandableGrid
                visibleCount={VISIBLE_COUNT}
                totalCount={region.countries.length}
              >
                {region.countries.map((country) => (
                  <CountryCard key={country.id} country={country} />
                ))}
              </ExpandableGrid>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
