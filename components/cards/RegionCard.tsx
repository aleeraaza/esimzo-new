import { Region } from "@/lib/types/plans.types";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type PropType = {
  region: Region;
};

export default function RegionCard({ region }: PropType) {
  const { name, flag, slug } = region;

  return (
    <Link
      href={`/region/${slug}`}
      className="group relative flex items-center gap-4 rounded-2xl border border-border bg-secondary/10 p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-ring/40 hover:shadow-md hover:shadow-primary/5"
    >
      {/* Flag Container */}
      <div className="relative h-10 w-14 shrink-0 overflow-hidden rounded-md">
        <Image
          src={flag}
          alt={name}
          fill
          sizes="64px"
          className="object-cover"
        />
      </div>

      {/* Country Name */}
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-semibold text-card-foreground">
          {name}
        </p>
      </div>

      {/* Arrow */}
      <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground/40 transition-all group-hover:translate-x-0.5 group-hover:text-primary" />
    </Link>
  );
}
