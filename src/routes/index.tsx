import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { WHATSAPP_URL } from "@/config/contact";

const SRC = "https://ghthealthcare.lovable.app/assets";
const IMG = {
  featured: `${SRC}/featured-stamina-BsxFQKVb.jpg`,
  diabetes: `${SRC}/card-diabetes-nc8yPOxC.jpg`,
  hypertension: `${SRC}/card-hypertension-Bfmt56O2.jpg`,
  infection: `${SRC}/card-infection-MFS2Li2E.jpg`,
  wellness: `${SRC}/card-wellness-D8JAixT7.jpg`,
};

// Refined botanical palette
const C = {
  bg: "#f4ede0",       // warm ivory
  ink: "#0d3529",      // deep forest
  inkSoft: "#3d5a4d",  // sage
  accent: "#b8863b",   // aged brass
  paper: "#ffffff",
};

export const Route = createFileRoute("/")({
  component: Landing,
  head: () => ({
    meta: [
      { title: "GHT Healthcare — Natural Herbal Remedies" },
      { name: "description", content: "Botanical excellence for men and women. Explore GHT's herbal formulas for prostate, diabetes, hypertension, infections and holistic wellness." },
      { property: "og:title", content: "GHT Healthcare — Natural Herbal Remedies" },
      { property: "og:description", content: "Botanical excellence for men and women. Explore GHT's herbal formulas for prostate, diabetes, hypertension, infections and holistic wellness." },
      { property: "og:image", content: IMG.featured },
    ],
  }),
});

type Card = {
  no: string;
  title: string;
  blurb: string;
  img: string;
  to?: string;
  href?: string;
};

const cards: Card[] = [
  { no: "02", title: "Diabetes Care", blurb: "Glycemic harmony through ancient leaf traditions.", img: IMG.diabetes, to: "/diabetes" },
  { no: "03", title: "Hypertension Care", blurb: "Vascular support with organic cardiac-calm blends.", img: IMG.hypertension, to: "/hypertension" },
  { no: "04", title: "Infection Treatment", blurb: "Nature's own antimicrobial defense system.", img: IMG.infection, href: "https://ghtinfectiontreat.blogspot.com/2026/02/blog-post.html" },
  { no: "05", title: "Holistic Wellness", blurb: "Complete cellular restoration for everyday life.", img: IMG.wellness, to: "/fine-health" },
];

const navLinks = [
  { label: "Prostate", to: "/prostate" as const },
  { label: "Diabetes", to: "/diabetes" as const },
  { label: "Hypertension", to: "/hypertension" as const },
  { label: "Wellness", to: "/fine-health" as const },
];

function Arrow() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transition-transform group-hover/btn:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
  );
}

function SiteNav() {
  const [open, setOpen] = useState(false);
  return (
    <nav
      className="border-b px-4 sm:px-6 md:px-10 py-4 flex items-center justify-between gap-4"
      style={{ borderColor: C.ink, background: C.paper }}
    >
      <Link to="/" className="flex items-center gap-2 min-w-0">
        <span
          className="grid place-items-center w-9 h-9 font-display font-black text-sm shrink-0"
          style={{ background: C.ink, color: C.bg }}
        >
          G
        </span>
        <span className="font-display font-extrabold uppercase tracking-widest text-sm truncate" style={{ color: C.ink }}>
          GHT<span style={{ color: C.accent }}>.</span>Healthcare
        </span>
      </Link>

      <div className="hidden md:flex items-center gap-7 text-[11px] font-display font-bold uppercase tracking-[0.2em]">
        {navLinks.map(l => (
          <Link
            key={l.to}
            to={l.to}
            className="transition-colors hover:opacity-70"
            style={{ color: C.ink }}
            activeProps={{ style: { color: C.accent } }}
          >
            {l.label}
          </Link>
        ))}
      </div>

      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="hidden sm:inline-flex items-center px-4 py-2 font-display font-bold uppercase tracking-widest text-[10px] transition-colors hover:opacity-90"
        style={{ background: C.ink, color: C.paper }}
      >
        Order Now
      </a>

      <button
        type="button"
        aria-label="Toggle menu"
        onClick={() => setOpen(v => !v)}
        className="md:hidden w-10 h-10 grid place-items-center border shrink-0"
        style={{ borderColor: C.ink, color: C.ink }}
      >
        {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {open && (
        <div
          className="md:hidden absolute left-0 right-0 top-full border-b z-30 flex flex-col"
          style={{ background: C.paper, borderColor: C.ink }}
        >
          {navLinks.map(l => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="px-6 py-4 font-display font-bold uppercase tracking-widest text-xs border-t"
              style={{ color: C.ink, borderColor: C.ink }}
            >
              {l.label}
            </Link>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="px-6 py-4 font-display font-bold uppercase tracking-widest text-xs border-t text-center"
            style={{ background: C.ink, color: C.paper, borderColor: C.ink }}
          >
            Order Now
          </a>
        </div>
      )}
    </nav>
  );
}

function CardInner({ c }: { c: Card }) {
  return (
    <>
      <div className="aspect-[4/5] overflow-hidden" style={{ background: C.bg }}>
        <img src={c.img} alt={c.title} loading="lazy" width={512} height={640}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
      </div>
      <div className="p-5 sm:p-6 flex-1 flex flex-col">
        <span className="font-display text-[10px] tracking-[0.3em] uppercase font-bold mb-2" style={{ color: C.accent }}>No. {c.no}</span>
        <h3 className="font-display font-bold text-lg sm:text-xl mb-2" style={{ color: C.ink }}>{c.title}</h3>
        <p className="text-sm mb-4 flex-1" style={{ color: C.inkSoft }}>{c.blurb}</p>
        <span className="font-display text-xs font-black uppercase tracking-widest border-b-2 border-transparent group-hover:border-current transition-all pb-1 w-fit" style={{ color: C.accent }}>
          Read More →
        </span>
      </div>
    </>
  );
}

function Landing() {
  return (
    <main
      className="min-h-screen w-full flex items-start md:items-center justify-center p-3 sm:p-4 md:p-8 font-body"
      style={{ background: C.bg, color: C.ink }}
    >
      <div
        className="w-full max-w-6xl border overflow-hidden shadow-[6px_6px_0px_#0d3529] sm:shadow-[12px_12px_0px_#0d3529] md:shadow-[20px_20px_0px_#0d3529] relative"
        style={{ background: C.paper, borderColor: C.ink }}
      >
        <SiteNav />

        {/* Masthead */}
        <header
          className="border-b px-4 sm:px-6 md:px-10 py-5 sm:py-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3"
          style={{ borderColor: C.ink }}
        >
          <h1
            className="font-display font-extrabold uppercase tracking-tight text-xl sm:text-2xl md:text-4xl leading-none"
            style={{ color: C.ink }}
          >
            Natural <span style={{ color: C.accent }}>Herbal</span> Remedy
          </h1>
          <span
            className="font-display text-[9px] sm:text-[10px] tracking-[0.25em] sm:tracking-[0.3em] uppercase font-bold"
            style={{ color: C.accent }}
          >
            Botanical Excellence · Est. MMXXIV
          </span>
        </header>

        {/* Featured */}
        <section className="grid grid-cols-1 lg:grid-cols-12 border-b" style={{ borderColor: C.ink }}>
          <div
            className="lg:col-span-7 aspect-[4/3] lg:aspect-auto lg:h-auto lg:min-h-[460px] border-b lg:border-b-0 lg:border-r relative group overflow-hidden"
            style={{ borderColor: C.ink }}
          >
            <img src={IMG.featured} alt="Premium herbal stamina booster" width={1200} height={800}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div
              className="absolute bottom-0 left-0 px-4 sm:px-6 py-2 font-display font-bold text-[10px] sm:text-xs uppercase tracking-widest"
              style={{ background: C.ink, color: C.bg }}
            >
              Featured Extract
            </div>
          </div>
          <div className="lg:col-span-5 p-6 sm:p-8 md:p-12 flex flex-col justify-center" style={{ background: `${C.bg}4d` }}>
            <span className="font-display text-[10px] tracking-[0.3em] uppercase font-bold mb-3 sm:mb-4" style={{ color: C.accent }}>Volume I — Issue 02</span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-5xl font-extrabold leading-tight mb-4 sm:mb-6 tracking-tight" style={{ color: C.ink }}>
              Say No To Small Pencil Size<br />&amp; Fast Pouring Madam
            </h2>
            <p className="text-base sm:text-lg leading-relaxed mb-6 sm:mb-8" style={{ color: C.inkSoft }}>
              Long, gbola stronga and thicka — a concentrated fusion of organic maca root and wild-harvested botanicals designed to restore primal power, naturally.
            </p>
            <Link to="/fine-health"
              className="inline-flex items-center px-6 sm:px-8 md:px-10 py-3 sm:py-4 font-display font-bold uppercase tracking-widest text-xs sm:text-sm transition-colors w-fit group/btn hover:opacity-90"
              style={{ background: C.ink, color: C.paper }}
            >
              Read Full Article <Arrow />
            </Link>
          </div>
        </section>

        {/* Prostate feature row */}
        <section className="grid grid-cols-1 lg:grid-cols-12 border-b" style={{ borderColor: C.ink }}>
          <div
            className="lg:col-span-5 p-6 sm:p-8 md:p-12 flex flex-col justify-center order-2 lg:order-1 border-t lg:border-t-0 lg:border-r"
            style={{ background: `${C.bg}4d`, borderColor: C.ink }}
          >
            <span className="font-display text-[10px] tracking-[0.3em] uppercase font-bold mb-3 sm:mb-4" style={{ color: C.accent }}>No. 01</span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight mb-4 sm:mb-6 tracking-tight" style={{ color: C.ink }}>
              Prostate Care
            </h2>
            <p className="text-base sm:text-lg leading-relaxed mb-6 sm:mb-8" style={{ color: C.inkSoft }}>
              Reclaim your nights and restore your flow — a 100% herbal formula for men 40+ with BPH symptoms.
            </p>
            <Link to="/prostate"
              className="inline-flex items-center px-6 sm:px-8 md:px-10 py-3 sm:py-4 font-display font-bold uppercase tracking-widest text-xs sm:text-sm transition-colors w-fit group/btn hover:opacity-90"
              style={{ background: C.ink, color: C.paper }}
            >
              Read Full Article <Arrow />
            </Link>
          </div>
          <div className="lg:col-span-7 aspect-[4/3] lg:aspect-auto lg:h-auto lg:min-h-[460px] relative group overflow-hidden order-1 lg:order-2" style={{ background: C.paper }}>
            <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjCGrv7BUNKbXVHtJxz9xb3zABrxVzErr_PBivWoeAxfIwGP4H8Lnh0PizWpmsmmOQiyZXXLcOSEw1KKYLOfyVh6dcofL6FRsKFyUCVt9We09J_NBfsR0pTXrNlFQtSfqqtxaXff1-ca4ZBvzVfZwahUChRqPgIC8eTwXwhZ7sx9v6gtR-BI47FGguIz5o/s421/prostate%206%20bottles.png"
              alt="GHT Prostate herbal pack" width={1200} height={800}
              className="w-full h-full object-contain p-4 sm:p-6 transition-transform duration-700 group-hover:scale-105" />
          </div>
        </section>

        {/* Cards grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c, i) => {
            const borders = `border-b sm:[&:nth-child(odd)]:border-r lg:border-r ${i === cards.length - 1 ? "lg:border-r-0" : ""} sm:[&:nth-last-child(-n+2)]:border-b-0 lg:[&:nth-last-child(-n+4)]:border-b-0`;
            const cls = `group flex flex-col ${borders} transition-colors hover:bg-[var(--tint)]`;
            const style = { borderColor: C.ink, ["--tint" as any]: `${C.bg}66` };
            return c.to ? (
              <Link key={c.no} to={c.to} className={cls} style={style}><CardInner c={c} /></Link>
            ) : (
              <a key={c.no} href={c.href} target="_blank" rel="noopener noreferrer" className={cls} style={style}><CardInner c={c} /></a>
            );
          })}
        </section>

        {/* Footer */}
        <footer
          className="border-t px-4 sm:px-6 md:px-10 py-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
          style={{ borderColor: C.ink, background: `${C.bg}66` }}
        >
          <div className="flex flex-wrap gap-x-5 gap-y-2 font-display text-[10px] tracking-[0.25em] uppercase font-bold">
            {navLinks.map(l => (
              <Link key={l.to} to={l.to} className="transition-opacity hover:opacity-60" style={{ color: C.ink }}>
                {l.label}
              </Link>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 font-display text-[10px] tracking-[0.25em] uppercase font-bold">
            <span style={{ color: C.ink }}>© {new Date().getFullYear()} GHT Healthcare</span>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
              className="transition-colors hover:opacity-70" style={{ color: C.accent }}>
              WhatsApp →
            </a>
          </div>
        </footer>
      </div>
    </main>
  );
}
