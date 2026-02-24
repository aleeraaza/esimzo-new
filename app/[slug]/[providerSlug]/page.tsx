import { ProviderPackagesCard } from "@/components/cards/ProviderPackagesCard";
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
    <main className="container flex flex-col gap-4">
      <ProviderPackageHeader providerName={providerSlug} countryName={slug} />
      {data.map((item) => (
        <ProviderPackagesCard key={item.id} data={item} />
      ))}
    </main>
  )
}
