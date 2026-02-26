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

export async function getRegionalPackagesBySlug(slug: string) {
  try {
    const response = await api<GetCountrySlugResponse>(
      `/regions/${slug}/plans`,
    );
    return response.data || [];
  } catch (error) {
    console.error(`Error fetching regional packages for slug ${slug}:`, error);
    return [];
  }
}

export async function getCountryPackagesBySlug(slug: string) {
  try {
    const response = await api<GetCountrySlugResponse>(
      `/countries/${slug}/plans`,
    );
    return response.data || [];
  } catch (error) {
    console.error(`Error fetching country packages for slug ${slug}:`, error);
    return [];
  }
}

export async function getProviderBySearchParams(
  countryCode: string,
  providerSlug: string,
) {
  try {
    const response = await api<GetCountrySlugResponse>(
      `/plans?country=${countryCode}&provider=${providerSlug}`,
    );
    return response.data || [];
  } catch (error) {
    console.error(`Error fetching provider by search params:`, error);
    return [];
  }
}
