import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Menu, X, Leaf } from "lucide-react";

export type NavLink = { label: string; href: string; external?: boolean };

type Props = {
  brand?: string;
  brandAccent?: string;
  sectionLinks?: NavLink[];
  pageLinks?: NavLink[];
  ctaLabel?: string;
  ctaHref: string;
};

export function SiteNav({
  brand = "GHT",
  brandAccent = ".",
  sectionLinks = [],
  pageLinks = [],
  ctaLabel = "Order now",
  ctaHref,
}: Props) {
  const [open, setOpen] = useState(false);
  const all = [...sectionLinks, ...pageLinks];

  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-background/70 border-b border-border/60">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-xl grid place-items-center" style={{ background: "var(--gradient-hero)" }}>
            <Leaf className="w-5 h-5 text-primary-foreground" strokeWidth={2.5} />
          </div>
          <span className="font-display text-xl font-semibold">
            {brand}<span className="text-accent">{brandAccent}</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          {all.map(l => (
            <a key={l.href} href={l.href} className="hover:text-foreground transition">{l.label}</a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a href={ctaHref} target={ctaHref.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90 transition">
            {ctaLabel} <ArrowRight className="w-4 h-4" />
          </a>
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen(v => !v)}
            className="md:hidden w-10 h-10 rounded-full border border-border bg-card grid place-items-center"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-border/60 bg-background/95 backdrop-blur">
          <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-1">
            {all.map(l => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-3 px-3 rounded-lg text-sm text-muted-foreground hover:bg-secondary hover:text-foreground transition"
              >
                {l.label}
              </a>
            ))}
            <a
              href={ctaHref}
              target={ctaHref.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground"
            >
              {ctaLabel} <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
