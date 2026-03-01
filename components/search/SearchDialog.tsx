"use client";

import { useEffect, useRef, useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import { Search, X, MapPin, Globe, ChevronRight, Ban } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Country, Region } from "@/lib/types/plans.types";
import Image from "next/image";
import { Button } from "@base-ui/react";
import { useIsMobile } from "@/hooks/use-mobile";

type Variant = "bar" | "icon";

type Props = {
  popularCountries: Country[];
  regions: Region[];
  variant?: Variant;
};

type MatchedCountry = {
  country: Country;
  regionName: string;
  regionSlug: string;
};

type MatchedRegion = {
  region: Region;
};

export function SearchDialog({
  popularCountries,
  regions,
  variant = "icon",
}: Props) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const isMobile = useIsMobile();

  // Focus input when dialog opens
  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 80);
    } else {
      setQuery("");
    }
  }, [open]);

  // Flat list: every country with its region info
  const allCountriesWithRegion = useMemo<MatchedCountry[]>(
    () =>
      regions.flatMap((r) =>
        (r.countries ?? []).map((c) => ({
          country: c,
          regionName: r.name,
          regionSlug: r.slug,
        })),
      ),
    [regions],
  );

  // Search: countries first, then unique regions that contain them
  const { matchedCountries, matchedRegions } = useMemo(() => {
    if (!query.trim()) return { matchedCountries: [], matchedRegions: [] };
    const q = query.toLowerCase();

    const countries = allCountriesWithRegion.filter(
      ({ country }) =>
        country.name.toLowerCase().includes(q) ||
        country.code.toLowerCase().includes(q),
    );

    // Deduplicated regions from the matched countries
    const regionMap = new Map<string, MatchedRegion>();
    for (const { regionSlug } of countries) {
      if (!regionMap.has(regionSlug)) {
        const region = regions.find((r) => r.slug === regionSlug);
        if (region) regionMap.set(regionSlug, { region });
      }
    }

    return {
      matchedCountries: countries,
      matchedRegions: [...regionMap.values()],
    };
  }, [query, allCountriesWithRegion, regions]);

  const hasQuery = query.trim().length > 0;
  const noResults =
    hasQuery && matchedCountries.length === 0 && matchedRegions.length === 0;

  function navigate(path: string) {
    router.push(path);
    setOpen(false);
  }

  return (
    <>
      {/* ── Trigger ─────────────────────────────────────────── */}
      {variant === "bar" ? (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="flex w-full max-w-xl items-center gap-2 rounded-2xl border border-border bg-card p-1.5 shadow-lg shadow-muted/50 text-left cursor-pointer hover:border-primary/40 hover:ring-2 hover:ring-accent transition-all group"
          aria-label="Open search"
        >
          <Search className="ml-2 h-4 w-4 shrink-0 text-muted-foreground group-hover:text-primary transition-colors" />
          <span className="flex-1 py-2 text-sm text-muted-foreground select-none">
            Search by country or region…
          </span>
          <span className="rounded-xl bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground">
            Search
          </span>
        </button>
      ) : (
        <Button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Search destinations"
          className="flex items-center gap-2 border border-foreground rounded-full px-4 py-1 text-foreground cursor-pointer hover:bg-foreground hover:text-background transition-colors"
        >
          <Search className="h-4 w-4" />
          <span>Destinations</span>
        </Button>
      )}

      {/* ── Dialog ──────────────────────────────────────────── */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-[540px] h-[540px] md:max-w-[640px]! p-0 gap-0 flex flex-col overflow-hidden rounded-2xl border-border shadow-2xl">
          <DialogHeader className="px-5 pt-5 pb-0">
            <DialogTitle className="text-lg font-bold text-foreground">
              Where?
            </DialogTitle>
          </DialogHeader>

          {/* Search Input */}
          <div className="px-5 pt-3 pb-2 shrink-0">
            <div className="flex items-center gap-2 rounded-xl border border-border bg-muted/30 px-3 py-2.5 focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/10 transition-all">
              <Search className="h-4 w-4 shrink-0 text-muted-foreground" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Enter your destination"
                className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none"
              />
              {query && (
                <button
                  onClick={() => setQuery("")}
                  className="rounded-md p-0.5 text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              )}
            </div>
          </div>

          {/* Results */}
          <div className="flex-1 overflow-y-auto px-3 pb-4">
            {/* ── NO RESULTS ── */}
            {noResults && (
              <div className="flex flex-col items-center gap-1 py-2 text-center">
                <p className="flex items-center gap-2 text-sm font-semibold text-foreground mt-3">
                  <Ban className="h-4 w-4 shrink-0 text-muted-foreground" />
                  <span className="text-muted-foreground">
                    Nothing matches your search
                  </span>
                </p>
              </div>
            )}

            {/* ── SEARCH RESULTS: countries first ── */}
            {hasQuery && matchedCountries.length > 0 && (
              <ul>
                {matchedCountries.map(({ country, regionName }) => (
                  <li key={country.id}>
                    <button
                      onClick={() => navigate(`/${country.slug}`)}
                      className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left hover:bg-muted group transition-colors"
                    >
                      <img
                        src={country.flag}
                        alt={country.name}
                        className="h-6 w-8 shrink-0 rounded object-cover"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-foreground">
                          {country.name}
                        </p>
                        <p className="text-[11px] text-muted-foreground">
                          {regionName}
                        </p>
                      </div>
                      <ChevronRight className="h-3.5 w-3.5 text-muted-foreground/50 -translate-x-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </button>
                  </li>
                ))}
              </ul>
            )}

            {/* ── SEARCH RESULTS: "Also available in…" regions ── */}
            {hasQuery && matchedRegions.length > 0 && (
              <div className="pt-1">
                <p className="px-3 pb-1 pt-2 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                  Also available in…
                </p>
                <ul>
                  {matchedRegions.map(({ region }) => (
                    <li key={region.id}>
                      <button
                        onClick={() => navigate(`/regions/${region.slug}`)}
                        className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left hover:bg-muted group transition-colors"
                      >
                        <div className="flex h- w-8 shrink-0 items-center justify-center">
                          <Image
                            src={region.flag}
                            alt={region.name}
                            width={32}
                            height={32}
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-foreground">
                            {region.name}
                          </p>
                          <p className="text-[11px] text-muted-foreground">
                            Region · {region.countries?.length ?? 0} countries
                          </p>
                        </div>
                        <ChevronRight className="h-3.5 w-3.5 text-muted-foreground/50 -translate-x-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* ── POPULAR DESTINATIONS (default or after no-results) ── */}
            {(!hasQuery || noResults) && (
              <div>
                <p className="px-3 pb-1 pt-2 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                  Most popular destinations
                </p>
                <ul>
                  {popularCountries.map((country) => (
                    <li key={country.id}>
                      <button
                        onClick={() => navigate(`/${country.slug}`)}
                        className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left hover:bg-muted group transition-colors"
                      >
                        <img
                          src={country.flag}
                          alt={country.name}
                          className="h-6 w-8 shrink-0 rounded object-cover"
                        />
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-foreground">
                            {country.name}
                          </p>
                        </div>
                        <ChevronRight className="h-3.5 w-3.5 text-muted-foreground/50 -translate-x-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
