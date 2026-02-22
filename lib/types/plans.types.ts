export type GetCountriesResponse = {
  success: boolean;
  data: Country[];
};

export type GetPopularResponse = {
  success: boolean;
  data: Country[];
};

export type GetRegionsResponse = {
  success: boolean;
  data: Region[];
};

export type Region = {
  id: string;
  name: string;
  slug: string;
  code: string;
  flag: string;
  countries: Country[];
};

export type Country = {
  id: string;
  name: string;
  slug: string;
  code: string;
  flag: string;
  regionId: string;
  popularity: number;
};

export type NetworkGeneration = "2G" | "3G" | "4G" | "5G";

export type Network = {
  name: string;
  types: NetworkGeneration[];
};

export type Coverage = {
  code: string;
  name?: string;
  networks?: Network[];
};

export type Plan = {
  id: string;
  name: string;
  slug: string;
  usdPrice: number;
  capacity: number;
  period: number;
  isLowLatency: boolean;
  has5G: boolean;
  tethering: boolean;
  canTopUp: boolean;
  phoneNumber: boolean;
  subscription: boolean;
  payAsYouGo: boolean;
  newUserOnly: boolean;
  isConsecutive: boolean;
  eKYC: boolean;
  coverages: Coverage[];
  provider: {
    name: string;
    slug: string;
    image: string | null;
  };
};

export type GetCountrySlugResponse = {
  success: boolean;
  data: Plan[];
};
