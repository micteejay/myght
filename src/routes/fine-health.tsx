import { WHATSAPP_URL, WHATSAPP_TEL, WHATSAPP_DISPLAY } from "@/config/contact";
import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { OrderButton } from "@/components/OrderDialog";
import { Check, ShieldCheck, Leaf, Phone, MessageCircle, Star, ArrowRight, Sparkles, Flame, Heart, Droplets, Shield, Zap, Activity, Dumbbell, Pill } from "lucide-react";
import hero from "@/assets/fh/hero-couple-BAj9MjBO.jpg";
import bottle from "@/assets/fh/herbs-flatlay-E3vW8wHx.jpg";
import coupleGarden from "@/assets/fh/couple-garden-CRaiJ1KJ.jpg";
import manConfident from "@/assets/fh/man-confident-DrsJvUMu.jpg";
import pack2 from "@/assets/fh/pack-2-CLKONyzA.jpg";
import pack3 from "@/assets/fh/pack-3-BgO4PPtO.jpg";
import pack4 from "@/assets/fh/pack-4-B9Qzi51I.jpg";
import pack6 from "@/assets/fh/pack-6-Bf0XYqh2.jpg";

export const Route = createFileRoute("/fine-health")({
  component: FineHealthPage,
  head: () => ({
    meta: [
      { title: "Fine Health — Natural Vitality & Stamina for Men | Herbal Pack" },
      { name: "description", content: "Reclaim your power naturally. Fine Health's premium herbal pack supports stamina, firmness, libido and confidence — no side effects, pay on delivery in Nigeria." },
      { property: "og:title", content: "Fine Health — Reclaim Your Power. Renew Her Joy." },
      { property: "og:description", content: "A premium herbal pack formulated to restore lasting performance — trusted by 1,000,000+ men." },
      { property: "og:image", content: hero },
    ],
  }),
});

const WA = WHATSAPP_URL;

const benefits = [
  { i: Zap, t: "Lasting Stamina", d: "From a minute to 40+ minutes per round." },
  { i: Heart, t: "Healthy Libido", d: "Reignite the desire you used to know." },
  { i: Droplets, t: "Strong Blood Flow", d: "For firm, dependable erections." },
  { i: Shield, t: "Immune Support", d: "Plant antioxidants protect your body." },
  { i: Leaf, t: "100% Herbal", d: "No chemicals. No harsh additives." },
  { i: Activity, t: "Healthy Hormones", d: "Supports natural testosterone." },
  { i: Dumbbell, t: "Energy & Endurance", d: "Wake up strong, perform stronger." },
  { i: Pill, t: "Prostate Care", d: "Daily support for prostate health." },
];

const peCauses = ["Temporary depression", "Stress", "Guilt", "Performance expectations", "Sexual repression history", "Lack of confidence", "Relationship issues", "Lifestyle factors", "Infection", "Substance abuse"];
const weCauses = ["Heart disease", "Atherosclerosis", "High cholesterol", "High blood pressure", "Diabetes", "Obesity", "Parkinson's disease", "Certain medications", "Tobacco use", "Alcohol abuse", "Sleep disorders", "Prostate treatments"];

const packs = [
  { tag: "Starter", b: 2, focus: "Premature Ejaculation", now: "36,500", was: "48,500", img: pack2 },
  { tag: "Popular", b: 3, focus: "Premature Ejaculation + Low Libido", now: "47,500", was: "60,000", img: pack3 },
  { tag: "Best Value", b: 4, focus: "Premature Ejaculation + Back Pain", now: "60,500", was: "75,000", img: pack4 },
  { tag: "Best Seller", b: 6, focus: "Weak Erection + Spermatogenesis", now: "93,500", was: "110,500", featured: true, img: pack6 },
  { tag: "Premium", b: 8, focus: "Strong Erection + Impotence + Circulation", now: "130,500", was: "145,000", img: pack6 },
];

const testimonials = [
  { q: "After just one pack, my confidence returned. My wife noticed the difference within days. This is the real deal.", n: "Tunde A.", c: "Lagos" },
  { q: "I had given up trying products. Fine Health changed that. Stronger, longer, calmer — exactly what I needed.", n: "Emeka O.", c: "Abuja" },
  { q: "Discreet delivery, easy payment, and the herbal blend actually works. I'm now on my third pack.", n: "Ibrahim S.", c: "Port Harcourt" },
  { q: "Two packs in and I feel 25 again. My energy and stamina are completely different.", n: "Bola A.", c: "Ibadan" },
  { q: "Real, lasting performance. My wife noticed the difference within the first week.", n: "Tobi & Ada", c: "Lagos" },
  { q: "Discreet packaging, fast delivery, and it actually works. 10/10.", n: "Samuel O.", c: "Benin" },
];

const faqs = [
  { q: "Does the product really work?", a: "Yes — with a 97% success rate within two weeks. Over 1,000,000 men have used Fine Health to restore lasting performance." },
  { q: "Are there any side effects?", a: "None. Fine Health is a 100% herbal blend of plant extracts — no synthetic chemicals or harsh additives." },
  { q: "How many packs do I need?", a: "Most men see results within one pack. For deeper concerns (weak erection, impotence), the 6 or 8-bottle packs deliver the full reset." },
  { q: "Can I combine it with my current medication?", a: "No. Use Fine Health alone so its effectiveness is fully visible. If you're on critical medication, speak to our consultant first." },
  { q: "Is it approved?", a: "Yes — 100% NAFDAC registered. The registration number is printed on every bottle." },
  { q: "How will I receive usage instructions?", a: "Once your pack is delivered, a personalized guide and dietary tips are sent via WhatsApp, with phone monitoring throughout." },
];

function FineHealthPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteNav
        brand="Fine Health"
        orderProduct="Fine Health Vitality"
        sectionLinks={[
          { label: "Packs", href: "#packs" },
          { label: "FAQ", href: "#faq" },
        ]}
        pageLinks={[
          { label: "Prostate", href: "/" },
          { label: "Diabetes", href: "/diabetes" },
          { label: "Hypertension", href: "/hypertension" },
          { label: "Vitality", href: "/fine-health" },
        ]}
      />


      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-soft)" }} />
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full -z-10 opacity-40 blur-3xl" style={{ background: "var(--gradient-hero)" }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-12 sm:pt-16 pb-20 sm:pb-24 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 backdrop-blur px-4 py-1.5 text-xs font-medium text-muted-foreground mb-8">
              <Sparkles className="w-3.5 h-3.5 text-accent" />
              Trusted by 1,000,000+ men · NAFDAC approved
            </div>
            <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-semibold leading-[1.05] sm:leading-[1.02] tracking-tight">
              Reclaim your power.<br />
              <span className="italic text-accent">Renew her joy.</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
              Fine Health's premium herbal pack helps men go from one minute to 40+ minutes per round — naturally restoring stamina, firmness and confidence, without side effects.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a href="#packs" className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground shadow-[var(--shadow-elegant)] hover:-translate-y-0.5 transition">
                Order now — pay on delivery <ArrowRight className="w-4 h-4" />
              </a>
              <a href={WA} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-7 py-3.5 text-sm font-medium hover:bg-secondary transition">
                <MessageCircle className="w-4 h-4 text-accent" /> Talk to a consultant
              </a>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-6 max-w-md">
              <div>
                <div className="font-display text-3xl font-semibold text-accent">1M+</div>
                <div className="text-xs text-muted-foreground mt-1">Men helped</div>
              </div>
              <div>
                <div className="font-display text-3xl font-semibold text-accent">100%</div>
                <div className="text-xs text-muted-foreground mt-1">Herbal</div>
              </div>
              <div>
                <div className="font-display text-3xl font-semibold text-accent">0</div>
                <div className="text-xs text-muted-foreground mt-1">Side effects</div>
              </div>
            </div>
          </div>

          <div className="relative animate-float-soft">
            <div className="relative rounded-3xl overflow-hidden shadow-[var(--shadow-elegant)]">
              <img src={hero} alt="Confident man with natural herbs — Fine Health vitality" width={1280} height={1280} className="w-full h-auto object-cover aspect-square animate-spin-slow" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-card rounded-2xl shadow-[var(--shadow-card)] p-5 max-w-[280px] border border-border">
              <div className="flex items-center gap-2 mb-2">
                <ShieldCheck className="w-4 h-4 text-accent" />
                <span className="text-xs font-medium uppercase tracking-wider text-accent">97% report results</span>
              </div>
              <p className="text-sm font-medium leading-snug">Of users feel renewed intimacy within 2 weeks. Discreet packaging nationwide.</p>
            </div>
          </div>
        </div>

        <div className="border-y border-border/60 bg-card/40">
          <div className="max-w-7xl mx-auto px-6 py-4 flex flex-wrap items-center justify-center gap-x-10 gap-y-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">
            <span>✓ Pay on delivery</span>
            <span>✓ Discreet packaging</span>
            <span>✓ Nationwide delivery</span>
            <span>✓ NAFDAC registered</span>
          </div>
        </div>
      </section>

      {/* THE PROBLEM */}
      <section className="py-16 sm:py-24 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-accent font-medium mb-4">The problem</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold mb-8">You both deserve a joyful sex life.</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            A weak erection — often called erectile dysfunction — is the difficulty getting or keeping an erection firm enough for satisfying intimacy. Occasional issues are common, but if the problem keeps coming back, it's a signal worth addressing.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-10">
            Too often she suffers in silence while he tries fix after fix — and intimacy slowly fades. Sex was designed to be enjoyed by both partners. If yours isn't, you're in the right place.
          </p>
          <a href="#packs" className="inline-flex items-center gap-2 text-accent font-medium hover:gap-3 transition-all">
            Start healing today <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* CAUSES */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-secondary/40">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <p className="text-sm uppercase tracking-[0.2em] text-accent font-medium mb-4">Why it happens</p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold">Common causes — and why they don't have to stay.</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-3xl bg-card border border-border p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-accent/10 grid place-items-center text-2xl">⏱️</div>
                <h3 className="font-display text-2xl font-semibold">Premature Ejaculation</h3>
              </div>
              <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2 text-sm text-muted-foreground">
                {peCauses.map(c => <li key={c} className="flex items-start gap-2"><span className="text-accent mt-1">•</span>{c}</li>)}
              </ul>
            </div>
            <div className="rounded-3xl bg-card border border-border p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-accent/10 grid place-items-center text-2xl">💔</div>
                <h3 className="font-display text-2xl font-semibold">Weak Erection</h3>
              </div>
              <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2 text-sm text-muted-foreground">
                {weCauses.map(c => <li key={c} className="flex items-start gap-2"><span className="text-accent mt-1">•</span>{c}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* INSIDE THE BOTTLE */}
      <section className="py-16 sm:py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="rounded-3xl overflow-hidden shadow-[var(--shadow-card)]">
            <img src={bottle} alt="Fine Health herbal supplement bottle" width={1280} height={1024} loading="lazy" className="w-full h-auto" />
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-accent font-medium mb-4">Inside every bottle</p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold mb-6">Pure plants. Proven results.</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              A blend of traditional African and Asian herbs — ginseng, tribulus, ginger root and more — formulated for modern men who want lasting performance without compromise.
            </p>
            <div className="space-y-3">
              {["100% herbal — no synthetic chemicals", "NAFDAC registered formulation", "Safe for long-term, daily use", "Phone-monitored protocol & dietary guide"].map(x => (
                <div key={x} className="flex items-center gap-3 text-sm">
                  <div className="w-5 h-5 rounded-full bg-accent grid place-items-center flex-shrink-0">
                    <Check className="w-3 h-3 text-accent-foreground" strokeWidth={3} />
                  </div>
                  <span>{x}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-secondary/40">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <p className="text-sm uppercase tracking-[0.2em] text-accent font-medium mb-4">What you get</p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold">8 real benefits from day one.</h2>
            <p className="mt-4 text-muted-foreground">Each bottle supports male performance from multiple angles — stamina, libido, blood flow and overall vitality.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {benefits.map(b => (
              <div key={b.t} className="group rounded-2xl bg-card border border-border p-6 hover:-translate-y-1 hover:shadow-[var(--shadow-card)] transition-all duration-300">
                <div className="w-11 h-11 rounded-xl bg-accent/10 grid place-items-center mb-5">
                  <b.i className="w-5 h-5 text-accent" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-2">{b.t}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{b.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PACKS */}
      <section id="packs" className="py-16 sm:py-24 px-4 sm:px-6 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-3xl opacity-20" style={{ background: "var(--color-gold)" }} />
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-[0.2em] font-medium mb-4" style={{ color: "var(--gold)" }}>Choose your pack</p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-6xl font-semibold">Bigger bundles, bigger savings.</h2>
            <p className="mt-4 text-primary-foreground/70 max-w-xl mx-auto">Pay on delivery anywhere in Nigeria. Every pack is 100% herbal and side-effect free.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {packs.map(p => {
              const featured = p.featured;
              const msg = encodeURIComponent(
                `Hello Fine Health, I'd like to order the ${p.tag} pack.\n\n• Bottles: ${p.b}\n• Focus: ${p.focus}\n• Price: ₦${p.now}\n\nPlease confirm delivery details. Thank you.`
              );
              const waLink = `${WA}?text=${msg}`;
              return (
                <div key={p.b} className={`relative rounded-3xl p-7 border ${featured ? "bg-[var(--gold)] text-foreground border-[var(--gold)] lg:scale-105" : "bg-primary-foreground/5 border-primary-foreground/10 backdrop-blur"}`}>
                  <div className={`rounded-2xl overflow-hidden mb-5 aspect-square ${featured ? "bg-foreground/5" : "bg-primary-foreground/5"}`}>
                    <img src={p.img} alt={`${p.tag} pack — ${p.b} bottles`} loading="lazy" className="w-full h-full object-cover" />
                  </div>
                  <span className={`inline-block text-[10px] tracking-[0.18em] uppercase font-medium mb-3 ${featured ? "text-foreground/70" : "text-primary-foreground/60"}`}>
                    {featured && "⭐ "}{p.tag}
                  </span>
                  <div className="flex items-baseline gap-1 mb-1">
                    <span className="font-display text-5xl font-semibold">{p.b}</span>
                    <span className={`text-xs ${featured ? "text-foreground/60" : "text-primary-foreground/60"}`}>bottles</span>
                  </div>
                  <p className={`text-xs leading-snug mb-6 min-h-[2.5rem] ${featured ? "text-foreground/70" : "text-primary-foreground/60"}`}>{p.focus}</p>
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="font-display text-3xl font-semibold">₦{p.now}</span>
                  </div>
                  <div className={`text-xs line-through mb-6 ${featured ? "text-foreground/50" : "text-primary-foreground/50"}`}>Was ₦{p.was}</div>
                  <div className="space-y-2">
                    <OrderButton
                      product="Fine Health Vitality"
                      pack={`${p.tag} · ${p.b} bottles · ₦${p.now}`}
                      className="inline-flex w-full items-center justify-center gap-1.5 rounded-full bg-[#25D366] text-white py-3 text-xs font-medium hover:opacity-90 transition"
                    >
                      <MessageCircle className="w-3.5 h-3.5" /> Order now
                    </OrderButton>
                    <a href={waLink} target="_blank" rel="noopener noreferrer"
                      className={`inline-flex w-full items-center justify-center gap-1.5 rounded-full py-3 text-xs font-medium transition ${featured ? "bg-foreground text-background hover:opacity-90" : "bg-primary-foreground text-primary hover:bg-primary-foreground/90"}`}>
                      WhatsApp →
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-16 sm:py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <p className="text-sm uppercase tracking-[0.2em] text-accent font-medium mb-4">Real stories</p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold">A million men. A million reasons to smile.</h2>
          </div>

          {/* Video testimonial */}
          <div className="mb-10 rounded-3xl overflow-hidden border border-border shadow-[var(--shadow-elegant)] bg-card">
            <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/hluZ-lqVOg8"
                title="Fine Health customer testimonial"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>

          {/* Story GIFs */}
          <div className="grid sm:grid-cols-3 gap-5 mb-12">
            {[
              "https://finehealth.lovable.app/assets/story-aaaa-CGmNK-Z-.gif",
              "https://finehealth.lovable.app/assets/story-gif-CU7ywdZc.gif",
              "https://finehealth.lovable.app/assets/story-bbbb-DKFuqPNF.gif",
            ].map((src, i) => (
              <div key={src} className="rounded-2xl overflow-hidden border border-border bg-card shadow-[var(--shadow-card)]">
                <img src={src} alt={`Customer story ${i + 1}`} loading="lazy" className="w-full h-auto block" />
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {testimonials.map(t => (
              <div key={t.n} className="rounded-2xl bg-card border border-border p-7 shadow-[var(--shadow-card)]">
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-[var(--gold)] text-[var(--gold)]" />)}
                </div>
                <p className="text-base leading-relaxed mb-5">"{t.q}"</p>
                <div className="text-sm font-medium">{t.n} <span className="text-muted-foreground font-normal">· {t.c}</span></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 sm:py-24 px-4 sm:px-6 bg-secondary/40">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm uppercase tracking-[0.2em] text-accent font-medium mb-4">Questions</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold mb-12">Frequently asked.</h2>
          <div className="divide-y divide-border border-y border-border">
            {faqs.map(f => (
              <details key={f.q} className="group py-6">
                <summary className="cursor-pointer flex items-center justify-between gap-6 list-none">
                  <h3 className="font-display text-xl font-medium">{f.q}</h3>
                  <span className="w-8 h-8 rounded-full border border-border grid place-items-center group-open:bg-accent group-open:text-accent-foreground group-open:rotate-45 transition flex-shrink-0">
                    +
                  </span>
                </summary>
                <p className="mt-4 text-muted-foreground leading-relaxed pr-12">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto rounded-3xl p-10 md:p-14 relative overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
          <div className="relative z-10 text-primary-foreground">
            <p className="text-sm uppercase tracking-[0.2em] font-medium mb-4" style={{ color: "var(--gold)" }}>⚠️ Before you order</p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold mb-6 max-w-2xl">Order only when you're ready to receive.</h2>
            <ul className="space-y-2 text-primary-foreground/80 mb-10 max-w-2xl">
              <li>— Funds available to pay on delivery within 0–2 days.</li>
              <li>— You will be reachable by phone after ordering.</li>
              <li>— You are 30+ and not traveling before delivery.</li>
            </ul>
            <div className="flex flex-wrap gap-4">
              <OrderButton product="Fine Health Vitality"
                className="inline-flex items-center gap-2 rounded-full bg-primary-foreground text-primary px-8 py-4 text-sm font-medium hover:opacity-90 transition">
                Open order form <ArrowRight className="w-4 h-4" />
              </OrderButton>
              <a href={WHATSAPP_TEL} className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 px-8 py-4 text-sm font-medium hover:bg-primary-foreground/10 transition">
                <Phone className="w-4 h-4" /> {WHATSAPP_DISPLAY}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-6">
          <Link to="/fine-health" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl grid place-items-center" style={{ background: "var(--gradient-hero)" }}>
              <Flame className="w-5 h-5 text-primary-foreground" strokeWidth={2.5} />
            </div>
            <span className="font-display text-xl font-semibold">Fine Health<span className="text-accent">.</span></span>
          </Link>
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Fine Health. Natural support for healthy male performance.</p>
          <div className="flex gap-4">
            <a href={WA} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-secondary grid place-items-center hover:bg-accent hover:text-accent-foreground transition">
              <MessageCircle className="w-4 h-4" />
            </a>
            <a href={WHATSAPP_TEL} className="w-10 h-10 rounded-full bg-secondary grid place-items-center hover:bg-accent hover:text-accent-foreground transition">
              <Phone className="w-4 h-4" />
            </a>
          </div>
        </div>
      </footer>

      <a href={WA} target="_blank" rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 rounded-full bg-[#25D366] text-white px-5 py-3.5 shadow-[var(--shadow-elegant)] hover:scale-105 transition">
        <MessageCircle className="w-5 h-5" />
        <span className="text-sm font-medium hidden sm:inline">Chat on WhatsApp</span>
      </a>
    </main>
  );
}
