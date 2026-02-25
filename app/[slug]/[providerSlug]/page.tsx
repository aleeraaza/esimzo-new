import { ProviderPackagesCard } from "@/components/cards/ProviderPackagesCard";
import { ProviderDetails } from "@/components/sections/ProviderDetails";
import ProviderPackageHeader from "@/components/sections/ProviderPackageHeader";
import {
  getCountryCode,
  getProviderBySearchParams,
} from "@/lib/services/plans/plans.services";
import React from "react";

type PropType = {
  params: {
    slug: Promise<string>;
    providerSlug: Promise<string>;
  };
};

export default async function page({ params }: PropType) {
  const { slug, providerSlug } = await params;
  const countryCode = await getCountryCode(slug);
  const data = await getProviderBySearchParams(countryCode, providerSlug);

  return (
    <main className="container py-8 flex flex-col gap-8">
      {/* Header spanning full width */}
      <ProviderPackageHeader providerName={providerSlug} countryName={slug} />

      {/* Main Grid Content */}
      <section className="grid grid-cols-1 xl:grid-cols-[380px_1fr] gap-8 items-start">
        
        {/* Left Side: Sticky Details */}
        <aside className="xl:sticky xl:top-24">
          <ProviderDetails />
          {/* You can add your Promo Code component here later */}
        </aside>

        {/* Right Side: Packages List */}
        <div className="flex flex-col gap-4 w-full">
          {data.map((item) => (
            <ProviderPackagesCard key={item.id} data={item} />
          ))}
        </div>
        
      </section>
    </main>
  );
}
