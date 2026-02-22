"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Wifi, ChevronDown } from "lucide-react";

const navLinks = [
  { label: "What's an eSIM?", href: "#" },
  { label: "eSIM Plans", href: "#plans" },
  { label: "Destinations", href: "#destinations" },
  { label: "Providers", href: "#" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 group"
          id="navbar-logo"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary shadow-md shadow-primary/20 transition-transform group-hover:scale-105">
            <Wifi
              className="h-4 w-4 text-primary-foreground"
              strokeWidth={2.5}
            />
          </div>
          <span className="text-xl font-bold tracking-tight text-foreground">
            esim<span className="text-primary">zo</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav
          className="hidden md:flex items-center gap-1"
          aria-label="Main navigation"
        >
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="relative group px-4 py-2 text-sm font-medium text-muted-foreground rounded-lg transition-colors hover:text-primary hover:bg-secondary"
            >
              {link.label}
              <span className="absolute inset-x-4 -bottom-px h-px bg-primary scale-x-0 transition-transform group-hover:scale-x-100 origin-left" />
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="#"
            id="navbar-explore-btn"
            className="flex items-center gap-1.5 rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground shadow-md shadow-primary/20 transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20 active:scale-95"
          >
            Explore Plans
            <ChevronDown className="h-3.5 w-3.5" />
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          id="navbar-mobile-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground hover:bg-muted transition-colors"
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-background px-4 pb-4 pt-2 shadow-lg">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-4 py-2.5 text-sm font-medium text-muted-foreground hover:bg-secondary hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-2 pt-2 border-t border-border">
              <Link
                href="#"
                id="navbar-mobile-explore-btn"
                className="flex items-center justify-center gap-1.5 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground"
              >
                Explore Plans
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
