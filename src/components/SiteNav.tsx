import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Menu, X, Leaf, ChevronDown } from "lucide-react";
import { useOrder } from "@/components/OrderDialog";

export type NavLink = { label: string; href: string; external?: boolean };

type Props = {
  brand?: string;
  brandAccent?: string;
  sectionLinks?: NavLink[];
  pageLinks?: NavLink[];
  ctaLabel?: string;
  /** Product name passed to OrderDialog when the CTA is clicked. */
  orderProduct: string;
};

export function SiteNav({
  brand = "GHT",
  brandAccent = ".",
  sectionLinks = [],
  pageLinks = [],
  ctaLabel = "Order now",
  orderProduct,
}: Props) {
  const [open, setOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const { open: openOrder } = useOrder();

  const triggerOrder = () => {
    openOrder(orderProduct);
    setOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-background/80 border-b border-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        {/* Brand */}
        <Link to="/" className="flex items-center gap-2 flex-shrink-0">
          <div className="w-9 h-9 rounded-xl grid place-items-center" style={{ background: "var(--gradient-hero)" }}>
            <Leaf className="w-5 h-5 text-primary-foreground" strokeWidth={2.5} />
          </div>
          <span className="font-display text-lg sm:text-xl font-semibold tracking-tight">
            {brand}<span className="text-accent">{brandAccent}</span>
          </span>
        </Link>

        {/* Desktop nav — sections inline, Products as dropdown */}
        <nav className="hidden lg:flex items-center gap-7 text-sm text-muted-foreground">
          {sectionLinks.map(l => (
            <a key={l.href} href={l.href} className="hover:text-foreground transition story-link">{l.label}</a>
          ))}
          {pageLinks.length > 0 && (
            <div
              className="relative"
              onMouseEnter={() => setProductsOpen(true)}
              onMouseLeave={() => setProductsOpen(false)}
            >
              <button className="inline-flex items-center gap-1 hover:text-foreground transition">
                Products <ChevronDown className="w-3.5 h-3.5" />
              </button>
              {productsOpen && (
                <div className="absolute right-0 top-full pt-3 w-56">
                  <div className="rounded-2xl border border-border bg-card/95 backdrop-blur-md shadow-[var(--shadow-card)] p-2">
                    {pageLinks.map(l => (
                      <a key={l.href} href={l.href}
                        className="block px-4 py-2.5 rounded-xl text-sm text-muted-foreground hover:bg-secondary hover:text-foreground transition">
                        {l.label}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </nav>

        {/* CTA + mobile toggle */}
        <div className="flex items-center gap-2">
          <button
            onClick={triggerOrder}
            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90 transition shadow-[var(--shadow-elegant)]"
          >
            {ctaLabel} <ArrowRight className="w-4 h-4" />
          </button>
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen(v => !v)}
            className="lg:hidden w-10 h-10 rounded-full border border-border bg-card grid place-items-center"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="lg:hidden border-t border-border/60 bg-background/95 backdrop-blur">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-col gap-1">
            {sectionLinks.length > 0 && (
              <>
                <p className="px-3 pt-2 pb-1 text-[10px] uppercase tracking-[0.2em] text-muted-foreground/70">On this page</p>
                {sectionLinks.map(l => (
                  <a key={l.href} href={l.href} onClick={() => setOpen(false)}
                    className="py-2.5 px-3 rounded-lg text-sm text-foreground hover:bg-secondary transition">{l.label}</a>
                ))}
              </>
            )}
            {pageLinks.length > 0 && (
              <>
                <p className="px-3 pt-3 pb-1 text-[10px] uppercase tracking-[0.2em] text-muted-foreground/70">Products</p>
                {pageLinks.map(l => (
                  <a key={l.href} href={l.href} onClick={() => setOpen(false)}
                    className="py-2.5 px-3 rounded-lg text-sm text-muted-foreground hover:bg-secondary hover:text-foreground transition">{l.label}</a>
                ))}
              </>
            )}
            <button onClick={triggerOrder}
              className="mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground">
              {ctaLabel} <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
