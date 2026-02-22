import { useQuery } from "@tanstack/react-query";
import { api } from "@/lib/services/api";
import type { GetCountrySlugResponse, Plan } from "@/lib/types/plans.types";

export function usePlans(slug: string, initialData?: Plan[]) {
  return useQuery({
    queryKey: ["plans", slug],
    queryFn: async () => {
      const res = await api<GetCountrySlugResponse>(`/countries/${slug}/plans`);
      return res.data;
    },
    initialData,
    staleTime: 5 * 60 * 1000,
  });
}
