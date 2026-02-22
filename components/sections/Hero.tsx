import Link from "next/link";
import { Search, Zap, Wifi, Shield } from "lucide-react";
import ConfusedPeopleSVG from "./ConfusedPeopleSVG";

const popularDestinations = [
  { flag: "🇫🇷", name: "France" },
  { flag: "🇪🇸", name: "Spain" },
  { flag: "🇺🇸", name: "USA" },
  { flag: "🇯🇵", name: "Japan" },
  { flag: "🇬🇧", name: "UK" },
  { flag: "🇦🇪", name: "UAE" },
];

const badges = [
  { icon: Zap, label: "Instant Activation" },
  { icon: Wifi, label: "190+ Countries" },
  { icon: Shield, label: "No Hidden Fees" },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-linear-to-br from-background via-secondary/40 to-background pt-20 pb-20"
    >
      <div className="container relative">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* ── Left: copy + CTA ── */}
          <div className="flex flex-col items-start gap-6">
            {/* Heading */}
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Compare & find the{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-primary">best eSIM</span>
                <span className="absolute inset-x-0 bottom-1 -z-10 h-3 rounded-sm bg-accent" />
              </span>{" "}
              plan for any country
            </h1>

            {/* Subtext */}
            <p className="max-w-lg text-lg leading-relaxed text-muted-foreground">
              Stop scrolling through dozens of providers. We instantly compare{" "}
              <span className="font-semibold text-foreground">
                200,000+ data plans
              </span>{" "}
              so you always get the best deal — without overpaying.
            </p>

            {/* Search bar */}
            <div className="w-full max-w-xl">
              <div className="flex items-center gap-2 rounded-2xl border border-border bg-card p-1.5 shadow-lg shadow-muted/50 focus-within:border-primary focus-within:ring-2 focus-within:ring-accent transition-all">
                <Search className="ml-2 h-4 w-4 shrink-0 text-muted-foreground" />
                <input
                  id="hero-search-input"
                  type="text"
                  placeholder="Search by country or region…"
                  className="flex-1 bg-transparent py-2 text-sm text-foreground placeholder-muted-foreground outline-none"
                />
                <Link
                  href="#plans"
                  id="hero-search-btn"
                  className="rounded-xl bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 active:scale-95"
                >
                  Search
                </Link>
              </div>

              {/* Popular tags */}
              <div className="mt-3 flex flex-wrap items-center gap-2">
                <span className="text-xs text-muted-foreground">Popular:</span>
                {popularDestinations.map((d) => (
                  <button
                    key={d.name}
                    id={`hero-tag-${d.name.toLowerCase()}`}
                    className="flex items-center gap-1 rounded-full border border-border bg-card px-2.5 py-0.5 text-xs font-medium text-card-foreground transition-all hover:border-ring hover:bg-secondary hover:text-primary"
                  >
                    <span>{d.flag}</span> {d.name}
                  </button>
                ))}
              </div>
            </div>

            {/* CTA link */}
            <Link
              href="#plans"
              id="hero-discover-btn"
              className="group flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/20 active:scale-95"
            >
              Discover eSIM plans
              <span className="inline-block transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>

          {/* ── Right: SVG illustration ── */}
          <div className="relative flex items-center justify-center lg:justify-end">
            {/* Soft glow behind illustration */}
            <div className="absolute inset-0 m-auto h-[360px] w-[360px] rounded-full bg-linear-to-br from-accent to-secondary opacity-40 blur-3xl" />

            <div className="relative z-10 w-full max-w-lg">
              <ConfusedPeopleSVG />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
