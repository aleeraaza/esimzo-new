import Link from "next/link";
import { ArrowRight } from "lucide-react";
import globe from "@/assets/svgs/globe.png"
import Image from "next/image";


type Props = {
  label?: string;
  href?: string;
  description?: string;
};

export default function GlobalRegionCard({
  label = "Global",
  href = "/global",
  description = "All regions",
}: Props) {
  return (
    <Link
      href={href}
      className="group relative flex items-center gap-4 rounded-2xl border border-border bg-secondary/10 p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-ring/40 hover:shadow-md hover:shadow-primary/5"
    >
      {/* Globe icon in the same size slot as the flag */}
     <div className="relative h-12 w-12 shrink-0 flex items-center justify-center">
        <Image src={globe} alt="globe" fill className="object-cover" />
     </div>

      {/* Label */}
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-semibold text-card-foreground">{label}</p>
        <p className="truncate text-xs text-muted-foreground">{description}</p>
      </div>

      {/* Arrow */}
      <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground/40 transition-all group-hover:translate-x-0.5 group-hover:text-primary" />
    </Link>
  );
}
