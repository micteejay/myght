import { createFileRoute, Link } from "@tanstack/react-router";
import { WHATSAPP_URL } from "@/config/contact";

const SRC = "https://ghthealthcare.lovable.app/assets";
const IMG = {
  featured: `${SRC}/featured-stamina-BsxFQKVb.jpg`,
  diabetes: `${SRC}/card-diabetes-nc8yPOxC.jpg`,
  hypertension: `${SRC}/card-hypertension-Bfmt56O2.jpg`,
  infection: `${SRC}/card-infection-MFS2Li2E.jpg`,
  wellness: `${SRC}/card-wellness-D8JAixT7.jpg`,
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

function Arrow() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transition-transform group-hover/btn:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
  );
}

function CardInner({ c }: { c: Card }) {
  return (
    <>
      <div className="aspect-[4/5] overflow-hidden bg-[#f5efe3]">
        <img src={c.img} alt={c.title} loading="lazy" width={512} height={640}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <span className="font-display text-[10px] tracking-[0.3em] uppercase font-bold text-[#c9a24a] mb-2">No. {c.no}</span>
        <h3 className="font-display font-bold text-xl text-[#0b3a2e] mb-2">{c.title}</h3>
        <p className="text-sm text-[#2f5a4c] mb-4 flex-1">{c.blurb}</p>
        <span className="font-display text-xs font-black uppercase tracking-widest text-[#c9a24a] border-b-2 border-transparent group-hover:border-[#c9a24a] transition-all pb-1 w-fit">
          Read More →
        </span>
      </div>
    </>
  );
}

function Landing() {
  return (
    <main className="min-h-screen w-full bg-[#f5efe3] flex items-start md:items-center justify-center p-4 md:p-8 font-body text-[#0b3a2e]">
      <div className="w-full max-w-6xl bg-white border border-[#0b3a2e] shadow-[12px_12px_0px_#0b3a2e] md:shadow-[20px_20px_0px_#0b3a2e] overflow-hidden">
        {/* Masthead */}
        <header className="border-b border-[#0b3a2e] px-6 md:px-10 py-6 flex items-center justify-between gap-6">
          <h1 className="font-display font-extrabold uppercase tracking-tight text-[#0b3a2e] text-2xl md:text-4xl leading-none">
            Natural <span className="text-[#c9a24a]">Herbal</span> Remedy
          </h1>
          <span className="hidden md:inline font-display text-[10px] tracking-[0.3em] uppercase font-bold text-[#c9a24a]">
            Botanical Excellence · Established MMXXIV
          </span>
        </header>

        {/* Featured */}
        <section className="grid grid-cols-1 lg:grid-cols-12 border-b border-[#0b3a2e]">
          <div className="lg:col-span-7 aspect-video lg:aspect-auto lg:h-auto min-h-[320px] lg:min-h-[460px] border-b lg:border-b-0 lg:border-r border-[#0b3a2e] relative group overflow-hidden">
            <img src={IMG.featured} alt="Premium herbal stamina booster" width={1200} height={800}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute bottom-0 left-0 bg-[#0b3a2e] text-[#f5efe3] px-6 py-2 font-display font-bold text-xs uppercase tracking-widest">
              Featured Extract
            </div>
          </div>
          <div className="lg:col-span-5 p-8 md:p-12 flex flex-col justify-center bg-[#f5efe3]/30">
            <span className="font-display text-[10px] tracking-[0.3em] uppercase font-bold text-[#c9a24a] mb-4">Volume I — Issue 02</span>
            <h2 className="font-display text-4xl md:text-5xl font-extrabold text-[#0b3a2e] leading-none mb-6 tracking-tight">
              Say No To Small Pencil Size<br />&amp; Fast Pouring Madam
            </h2>
            <p className="text-[#2f5a4c] text-lg leading-relaxed mb-8">
              Long, gbola stronga and thicka — a concentrated fusion of organic maca root and wild-harvested botanicals designed to restore primal power, naturally.
            </p>
            <Link to="/fine-health"
              className="inline-flex items-center bg-[#0b3a2e] text-white px-8 md:px-10 py-4 font-display font-bold uppercase tracking-widest text-sm transition-colors hover:bg-[#c9a24a] w-fit group/btn">
              Read Full Article <Arrow />
            </Link>
          </div>
        </section>

        {/* Prostate feature row */}
        <section className="grid grid-cols-1 lg:grid-cols-12 border-b border-[#0b3a2e]">
          <div className="lg:col-span-5 p-8 md:p-12 flex flex-col justify-center bg-[#f5efe3]/30 order-2 lg:order-1 border-t lg:border-t-0 lg:border-r border-[#0b3a2e]">
            <span className="font-display text-[10px] tracking-[0.3em] uppercase font-bold text-[#c9a24a] mb-4">No. 01</span>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold text-[#0b3a2e] leading-none mb-6 tracking-tight">
              Prostate Care
            </h2>
            <p className="text-[#2f5a4c] text-lg leading-relaxed mb-8">
              Reclaim your nights and restore your flow — a 100% herbal formula for men 40+ with BPH symptoms.
            </p>
            <Link to="/prostate"
              className="inline-flex items-center bg-[#0b3a2e] text-white px-8 md:px-10 py-4 font-display font-bold uppercase tracking-widest text-sm transition-colors hover:bg-[#c9a24a] w-fit group/btn">
              Read Full Article <Arrow />
            </Link>
          </div>
          <div className="lg:col-span-7 aspect-video lg:aspect-auto lg:h-auto min-h-[320px] lg:min-h-[460px] relative group overflow-hidden order-1 lg:order-2">
            <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjCGrv7BUNKbXVHtJxz9xb3zABrxVzErr_PBivWoeAxfIwGP4H8Lnh0PizWpmsmmOQiyZXXLcOSEw1KKYLOfyVh6dcofL6FRsKFyUCVt9We09J_NBfsR0pTXrNlFQtSfqqtxaXff1-ca4ZBvzVfZwahUChRqPgIC8eTwXwhZ7sx9v6gtR-BI47FGguIz5o/s421/prostate%206%20bottles.png"
              alt="GHT Prostate herbal pack" width={1200} height={800}
              className="w-full h-full object-contain bg-white p-6 transition-transform duration-700 group-hover:scale-105" />
          </div>
        </section>

        {/* Cards grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c, i) => {
            const borders = `border-[#0b3a2e] border-b sm:[&:nth-child(odd)]:border-r lg:border-r ${i === cards.length - 1 ? "lg:border-r-0" : ""} sm:[&:nth-last-child(-n+2)]:border-b-0 lg:[&:nth-last-child(-n+4)]:border-b-0`;
            const cls = `group flex flex-col ${borders} hover:bg-[#f5efe3]/40 transition-colors`;
            return c.to ? (
              <Link key={c.no} to={c.to} className={cls}><CardInner c={c} /></Link>
            ) : (
              <a key={c.no} href={c.href} target="_blank" rel="noopener noreferrer" className={cls}><CardInner c={c} /></a>
            );
          })}
        </section>

        {/* Footer */}
        <footer className="border-t border-[#0b3a2e] px-6 md:px-10 py-6 flex flex-wrap items-center justify-between gap-4 bg-[#f5efe3]/40">
          <span className="font-display text-[10px] tracking-[0.3em] uppercase font-bold text-[#0b3a2e]">
            © {new Date().getFullYear()} GHT Healthcare
          </span>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
            className="font-display text-[10px] tracking-[0.3em] uppercase font-bold text-[#c9a24a] hover:text-[#0b3a2e] transition-colors">
            Chat on WhatsApp →
          </a>
        </footer>
      </div>
    </main>
  );
}
