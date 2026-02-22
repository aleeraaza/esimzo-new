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
