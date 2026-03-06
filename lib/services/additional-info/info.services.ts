import { GetAdditionalCountryInfoResponse } from "@/lib/types/info.types";
import { api } from "../api";

export async function getAdditionalCountryInfo(slug: string) {
  try {
    const response = await api<GetAdditionalCountryInfoResponse>(
      `/additional-info/country/${slug}`,
    );
    return response.data;
  } catch (error) {
    console.error(`Error fetching provider by search params:`, error);
    throw error;
  }
}
