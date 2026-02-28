import {
  GetCountrySlugResponse,
  GetPopularResponse,
  GetRegionsResponse,
} from "@/lib/types/plans.types";
import { api } from "../api";

export async function getCountries() {
  try {
    const response = await api<GetPopularResponse>("/countries");
    return response.data;
  } catch (error) {
    console.error("Error fetching all countries:", error);
    return [];
  }
}
export async function getPopularCountries() {
  try {
    const response = await api<GetPopularResponse>("/countries/popular");
    return response.data;
  } catch (error) {
    console.error("Error fetching popular countries:", error);
    return [];
  }
}

export async function getRegions() {
  try {
    const response = await api<GetRegionsResponse>("/regions");
    return response.data;
  } catch (error) {
    console.error("Error fetching regions:", error);
    return [];
  }
}

export async function getCountryPackagesBySlug(slug: string) {
  try {
    const response = await api<GetCountrySlugResponse>(
      `/plans/country/${slug}`,
    );
    return response.data || [];
  } catch (error) {
    console.error(`Error fetching country packages for slug ${slug}:`, error);
    return [];
  }
}

export async function getRegionalPackagesBySlug(slug: string) {
  try {
    const response = await api<GetCountrySlugResponse>(`/plans/region/${slug}`);
    return response.data || [];
  } catch (error) {
    console.error(`Error fetching regional packages for slug ${slug}:`, error);
    return [];
  }
}
export async function getRegionalPackagesByProvider(
  regionSlug: string,
  providerSlug: string,
) {
  try {
    const response = await api<GetCountrySlugResponse>(
      `/plans/region/${regionSlug}/provider/${providerSlug}`,
    );
    return response.data || [];
  } catch (error) {
    console.error(
      `Error fetching regional packages for slug ${regionSlug} and provider ${providerSlug}:`,
      error,
    );
    return [];
  }
}

export async function getGlobalPackages() {
  try {
    const response = await api<GetCountrySlugResponse>(`/plans/global`);
    return response.data || [];
  } catch (error) {
    console.error(`Error fetching global packages:`, error);
    return [];
  }
}

export async function getGlobalPackagesBySlug(slug: string) {
  try {
    const response = await api<GetCountrySlugResponse>(
      `/plans/global/provider/${slug}`,
    );
    return response.data || [];
  } catch (error) {
    console.error(`Error fetching global packages:`, error);
    return [];
  }
}

export async function getProviderBySearchParams(
  countrySlug: string,
  providerSlug: string,
) {
  try {
    const response = await api<GetCountrySlugResponse>(
      `/plans/country/${countrySlug}/provider/${providerSlug}`,
    );
    return response.data || [];
  } catch (error) {
    console.error(`Error fetching provider by search params:`, error);
    return [];
  }
}
