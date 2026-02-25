import React from 'react';
import { ExternalLink, BadgeCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import providerLogo from '@/assets/svgs/providerLogo.svg'
import Image from 'next/image';

export const ProviderDetails = () => {
  return (
    <section className="w-full rounded-3xl border border-border bg-card p-6 shadow-sm">
      <div className="flex flex-col items-start gap-6">
        
        {/* Logo and Title Group */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <div className="relative h-20 w-20 overflow-hidden rounded-2xl border border-border bg-muted p-2 shadow-inner">
            <Image
              src={providerLogo}
              alt="Roamless Logo"
              className="h-full w-full object-contain"
            />
          </div>
          
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <h1 className="text-3xl font-bold tracking-tight text-foreground">
                Roamless
              </h1>
              <BadgeCheck className="text-primary h-6 w-6 fill-primary/10" />
            </div>
            <p className="text-sm font-medium text-secondary-foreground uppercase tracking-wide">
              Verified Provider
            </p>
          </div>
        </div>

        {/* Description Section */}
        <div className="space-y-4">
          <p className="text-lg leading-relaxed text-muted-foreground">
            Roamless keeps travelers connected seamlessly in <span className="font-semibold text-foreground">200+ countries</span> through a single global eSIM. 
            Choose <span className="text-primary font-medium">FLEX</span> for pay-as-you-go data that never expires or <span className="text-primary font-medium">FIX</span> for 30-day prepaid plans.
          </p>
          <p className="text-md text-muted-foreground/80 italic">
            No SIM swaps, no hidden fees, no hassle—just simple, affordable internet wherever you go.
          </p>
        </div>

        {/* Action Button */}
        <Button 
          size="lg" 
          className="w-full sm:w-auto px-8 bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-xl transition-all hover:scale-[1.02] active:scale-[0.98]"
        >
          <a 
            href="https://roamless.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            Visit Official Website
            <ExternalLink size={18} />
          </a>
        </Button>

      </div>
    </section>
  );
};