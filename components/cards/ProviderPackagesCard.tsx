import React from 'react';
import { Badge } from "@/components/ui/badge"; // Assuming Shadcn
import { Button } from "@/components/ui/button"; // Assuming Shadcn
import { Wifi, Clock, Zap, Info } from "lucide-react";
import { Plan } from '@/lib/types/plans.types';
import { formatData, formatPrice } from '@/lib/utils';



export const ProviderPackagesCard = ({data}: {data: Plan}) => {
    const {name, capacity, usdPrice, period} = data;
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-border bg-card p-5 transition-all hover:shadow-md hover:border-primary/50">
      {/* Title Header */}
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
          {name}
        </h3>
      </div>

      {/* Main Content Grid */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        
        {/* Data Amount */}
        <div className="flex flex-col">
          <span className="text-3xl font-bold tracking-tight text-foreground">
            {formatData(capacity)}
          </span>
          <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
            <Wifi size={14} className="text-secondary" />
            <span>High-speed Data</span>
          </div>
        </div>

        {/* Vertical Divider (Hidden on mobile) */}
        <div className="hidden md:block h-12 w-[1px] bg-border" />

        {/* Validity */}
        <div className="flex flex-col">
          <span className="text-xl font-semibold text-foreground">
            {period} {period === 1 ? "Day" : "Days"}
          </span>
          <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
            <Clock size={14} className="text-secondary" />
            <span>Validity Period</span>
          </div>
        </div>

        {/* Price Section */}
        <div className="flex flex-col">
          <span className="text-3xl font-bold text-primary">
            {formatPrice(usdPrice)}
          </span>
          <span className="text-[10px] text-muted-foreground uppercase font-medium">
            Total Price
          </span>
        </div>

        {/* Action Button */}
        <div className="flex flex-col gap-2 min-w-[140px]">
          <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold shadow-lg shadow-primary/20">
            Select Plan
          </Button>
          <button className="flex items-center justify-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors">
            <Info size={12} />
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};