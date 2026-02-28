import { GetProvidersResponse } from "@/lib/types/providers.types";
import { api } from "../api";


export async function getProviders() {
  try {
    const response = await api<GetProvidersResponse>("/providers");
    return response.data;
  } catch (error) {
    console.error("Error fetching providers:", error);
    return [];
  }
}