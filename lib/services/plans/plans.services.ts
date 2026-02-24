import {
  GetCountrySlugResponse,
  GetPopularResponse,
  GetRegionsResponse,
} from "@/lib/types/plans.types";
import { api } from "../api";

export async function getCountries() {
  try {
    const response = await api<GetPopularResponse>("/countries/popular");
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function getRegions() {
  try {
    const response = await api<GetRegionsResponse>("/regions");
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function getCountryBySlug(slug: string) {
  try {
    const response = await api<GetCountrySlugResponse>(
      `/countries/${slug}/plans`,
    );
    return response.data;
  } catch (error) {
    throw error;
  }
}
export async function getCountryCode(slug: Promise<string>) {
  const countryRes = await fetch(
    `https://restcountries.com/v3.1/name/${slug}?fullText=true`,
  );
  const countryData = await countryRes.json();

  const countryCode = countryData[0]?.cca2;
  return countryCode;
}

export async function getProviderBySearchParams(
  countryCode: string,
  providerSlug: Promise<string>,
) {
  try {
    const response = await api<GetCountrySlugResponse>(
      `/plans?country=${countryCode}&provider=${providerSlug}`,
    );
    return response.data;
  } catch (error) {
    throw error;
  }
}
