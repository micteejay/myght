import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, ShieldCheck, Leaf, Phone, MessageCircle, Star, ArrowRight, Sparkles, HeartPulse, Activity, Brain, Pill, AlertTriangle } from "lucide-react";
import hero from "@/assets/hypertension-hero.jpg";
import bottles from "@/assets/hypertension-bottles.jpg";

export const Route = createFileRoute("/hypertension")({
  component: HypertensionPage,
  head: () => ({
    meta: [
      { title: "Lower Your Blood Pressure Naturally — HYPERFREE & CAERITE | GHT" },
      { name: "description", content: "Control hypertension and high blood pressure naturally with HYPERFREE + CAERITE — a 100% herbal protocol, no Lisinopril or Amlodipine needed." },
      { property: "og:title", content: "Natural Herbal Remedy for Hypertension — GHT" },
      { property: "og:description", content: "HYPERFREE and CAERITE: a plant-based pathway to balanced blood pressure and a stronger heart." },
      { property: "og:image", content: hero },
    ],
  }),
});

const ORDER_URL = "https://docs.google.com/forms/d/e/1FAIpQLScVxm7294TuXCZ9it5eodzNVkDE1Q-FTwhvjJxDU77J8hcQEg/viewform";
const WA_URL = "https://wa.me/2349131541263";

const dangers = [
  { i: HeartPulse, t: "Heart damage", d: "Constant pressure thickens the heart muscle, leading to failure, arrhythmia and cardiac arrest." },
  { i: Brain, t: "Brain & stroke", d: "Weakens brain vessels — raising risk of stroke, dementia and cognitive decline." },
  { i: Activity, t: "Kidney failure", d: "Damages renal vessels, driving chronic kidney disease and eventual failure." },
  { i: AlertTriangle, t: "Artery hardening", d: "Atherosclerosis narrows arteries, fueling aneurysms and heart attacks." },
];

const symptoms = [
  "Persistent headaches",
  "Chest tightness or palpitations",
  "Dizziness or blurred vision",
  "Shortness of breath",
  "Ringing in the ears",
  "Nosebleeds",
  "Anxiety & restlessness",
  "Fatigue & weakness",
  "Swollen ankles",
];

const causes = [
  { n: "01", t: "Primary", d: "90–95% of cases. Develops gradually with age, family history, weight, salt intake, alcohol, smoking and chronic stress." },
  { n: "02", t: "Secondary", d: "Caused by kidney disease, thyroid issues, sleep apnea, certain medications or pregnancy-related conditions." },
  { n: "03", t: "Lifestyle", d: "Sedentary days, processed diets low in potassium and high in sodium, and poor sleep keep pressure elevated." },
  { n: "04", t: "Hidden", d: "Vitamin D deficiency, insulin resistance, chronic pain, anxiety and depression all quietly raise the baseline." },
];

const protocol = [
  { i: HeartPulse, t: "HYPERFREE", s: "Pressure control & heart protection", b: ["Relaxes and dilates blood vessels", "Lowers systolic and diastolic levels", "Eases headaches, tightness and dizziness", "Supports kidney function, reduces fluid retention", "Calms stress-induced spikes"] },
  { i: Pill, t: "CAERITE", s: "Cardio-protective & cholesterol balance", b: ["Strengthens the heart muscle", "Lowers LDL, raises HDL cholesterol", "Detoxifies blood, keeps arteries elastic", "Prevents clotting, supports circulation", "Protects against stroke and heart attack"] },
];

const packs = [
  { d: "15 days", b: 3, was: "70,500", now: "60,500" },
  { d: "30 days", b: 6, was: "130,500", now: "115,000", tag: "Most Chosen" },
  { d: "45 days", b: 9, was: "190,500", now: "170,000", tag: "Full Protocol" },
];

const faqs = [
  { q: "Does the product really work?", a: "Yes — with a 99% success rate. Over 113,000 customers have testified to results." },
  { q: "Any side effects?", a: "None. HYPERFREE and CAERITE are a 99% pure herbal and plant-extract blend. No synthetic chemicals." },
  { q: "How many packs do I need?", a: "Two packs cover most cases. Critical or long-standing hypertension benefits from 2–3 months — that's why bundle pricing exists." },
  { q: "Will it reverse my hypertension?", a: "Yes. The protocol restores vessel elasticity and regulates pressure from the root cause." },
  { q: "How do I use the pack?", a: "Once delivered, a personalized guide and food tips are sent via WhatsApp, email or SMS, with phone monitoring throughout." },
  { q: "Can I combine with my current drugs?", a: "No. Use the protocol alone so its effectiveness is fully visible." },
  { q: "Is it NAFDAC / FDA approved?", a: "Yes — 100% registered. The registration number is printed on every package." },
];

function HypertensionPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-background/70 border-b border-border/60">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl grid place-items-center" style={{ background: "var(--gradient-hero)" }}>
              <Leaf className="w-5 h-5 text-primary-foreground" strokeWidth={2.5} />
            </div>
            <span className="font-display text-xl font-semibold">GHT<span className="text-accent">.</span></span>
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-foreground transition">Prostate</Link>
            <Link to="/diabetes" className="hover:text-foreground transition">Diabetes</Link>
            <Link to="/hypertension" className="text-foreground font-medium">Hypertension</Link>
            <a href="#protocol" className="hover:text-foreground transition">Protocol</a>
            <a href="#pricing" className="hover:text-foreground transition">Pricing</a>
            <a href="#faq" className="hover:text-foreground transition">FAQ</a>
          </nav>
          <a href={ORDER_URL} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90 transition">
            Order now <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-soft)" }} />
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full -z-10 opacity-40 blur-3xl" style={{ background: "var(--gradient-hero)" }} />

        <div className="max-w-7xl mx-auto px-6 pt-16 pb-24 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 backdrop-blur px-4 py-1.5 text-xs font-medium text-muted-foreground mb-8">
              <Sparkles className="w-3.5 h-3.5 text-accent" />
              No Lisinopril · No Amlodipine · 113,000+ users
            </div>
            <h1 className="font-display text-5xl md:text-7xl font-semibold leading-[1.02] tracking-tight">
              Quiet the<br />
              <span className="italic text-accent">silent killer.</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
              Hypertension damages organs long before you feel it. HYPERFREE and CAERITE work in tandem to relax vessels, strengthen the heart and bring pressure back to where it belongs — naturally.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a href="#pricing" className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground shadow-[var(--shadow-elegant)] hover:-translate-y-0.5 transition">
                See protocol pricing <ArrowRight className="w-4 h-4" />
              </a>
              <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-7 py-3.5 text-sm font-medium hover:bg-secondary transition">
                <MessageCircle className="w-4 h-4 text-accent" /> Speak to Dr Racheal
              </a>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-6 max-w-md">
              <div>
                <div className="font-display text-3xl font-semibold text-accent">113k+</div>
                <div className="text-xs text-muted-foreground mt-1">Customers served</div>
              </div>
              <div>
                <div className="font-display text-3xl font-semibold text-accent">99%</div>
                <div className="text-xs text-muted-foreground mt-1">Success rate</div>
              </div>
              <div>
                <div className="font-display text-3xl font-semibold text-accent">0</div>
                <div className="text-xs text-muted-foreground mt-1">Chemicals</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-[var(--shadow-elegant)]">
              <img src={hero} alt="Blood pressure monitor with hibiscus and herbs" width={1280} height={1280} className="w-full h-auto object-cover aspect-square" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-card rounded-2xl shadow-[var(--shadow-card)] p-5 max-w-[260px] border border-border">
              <div className="flex items-center gap-2 mb-2">
                <ShieldCheck className="w-4 h-4 text-accent" />
                <span className="text-xs font-medium uppercase tracking-wider text-accent">NAFDAC approved</span>
              </div>
              <p className="text-sm font-medium leading-snug">Plant-based formula. Safe for long-term, monitored use.</p>
            </div>
          </div>
        </div>
      </section>

      {/* DANGERS */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between flex-wrap gap-6 mb-14">
            <div className="max-w-2xl">
              <p className="text-sm uppercase tracking-[0.2em] text-accent font-medium mb-4">Why hypertension is dangerous</p>
              <h2 className="font-display text-4xl md:text-5xl font-semibold">It strikes quietly. Then everything at once.</h2>
            </div>
            <p className="text-muted-foreground max-w-md">Most people don't know they have it until a stroke, heart attack or kidney crisis announces it.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {dangers.map(d => (
              <div key={d.t} className="group relative rounded-2xl bg-card border border-border p-7 hover:shadow-[var(--shadow-card)] hover:-translate-y-1 transition-all duration-300">
                <div className="w-11 h-11 rounded-xl bg-accent/10 grid place-items-center mb-5">
                  <d.i className="w-5 h-5 text-accent" />
                </div>
                <h3 className="font-display text-2xl font-semibold mb-3">{d.t}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{d.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SYMPTOMS */}
      <section className="py-24 px-6 bg-secondary/40">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
          <div className="lg:sticky lg:top-24">
            <p className="text-sm uppercase tracking-[0.2em] text-accent font-medium mb-4">Signs to take seriously</p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold mb-6">If three or more sound familiar, don't wait.</h2>
            <p className="text-muted-foreground leading-relaxed mb-8">Hypertension rarely shouts. When symptoms do appear, the damage to vessels has often been building for years.</p>
            <div className="flex items-center gap-3 text-sm">
              <Activity className="w-4 h-4" style={{ color: "var(--coral)" }} />
              <span className="font-medium" style={{ color: "var(--coral)" }}>Untreated, it leads to stroke, heart attack and kidney failure.</span>
            </div>
          </div>
          <ul className="grid sm:grid-cols-2 gap-3">
            {symptoms.map(s => (
              <li key={s} className="flex items-start gap-3 rounded-2xl bg-card border border-border p-5">
                <div className="mt-0.5 w-7 h-7 rounded-full bg-accent/10 grid place-items-center flex-shrink-0">
                  <Check className="w-3.5 h-3.5 text-accent" strokeWidth={3} />
                </div>
                <span className="font-medium leading-snug">{s}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CAUSES */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <p className="text-sm uppercase tracking-[0.2em] text-accent font-medium mb-4">What's behind it</p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold">Four pressures that keep your blood pressure high.</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {causes.map(c => (
              <div key={c.t} className="rounded-2xl bg-card border border-border p-7">
                <div className="text-sm font-mono text-accent mb-4">{c.n}</div>
                <h3 className="font-display text-2xl font-semibold mb-3">{c.t}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROTOCOL */}
      <section id="protocol" className="py-24 px-6 bg-secondary/40">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-sm uppercase tracking-[0.2em] text-accent font-medium mb-4">The 2-part protocol</p>
            <h2 className="font-display text-4xl md:text-6xl font-semibold">HYPERFREE. CAERITE.</h2>
            <p className="mt-6 text-lg text-muted-foreground">Two herbal formulations engineered to work in synergy — one calms the pressure, the other defends the heart.</p>
          </div>

          <div className="rounded-3xl overflow-hidden mb-16">
            <img src={bottles} alt="HYPERFREE and CAERITE herbal bottles" width={1280} height={1024} loading="lazy" className="w-full h-auto" />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {protocol.map((p, i) => (
              <div key={p.t} className="rounded-3xl bg-card border border-border p-8 shadow-[var(--shadow-card)]">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-accent/10 grid place-items-center">
                    <p.i className="w-6 h-6 text-accent" strokeWidth={2} />
                  </div>
                  <span className="text-xs font-mono text-muted-foreground">0{i + 1}</span>
                </div>
                <h3 className="font-display text-3xl font-semibold mb-2">{p.t}</h3>
                <p className="text-sm text-accent font-medium mb-6">{p.s}</p>
                <ul className="space-y-3">
                  {p.b.map(b => (
                    <li key={b} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-16 rounded-3xl p-10 border border-border bg-card grid md:grid-cols-3 gap-6 text-sm">
            {["100% natural — no synthetic chemicals", "No addiction or withdrawal", "Safe for long-term use", "Prevents and reverses high BP", "Phone-monitored protocol", "NAFDAC registered formula"].map(x => (
              <div key={x} className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-accent grid place-items-center flex-shrink-0">
                  <Check className="w-3 h-3 text-accent-foreground" strokeWidth={3} />
                </div>
                <span>{x}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-24 px-6 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-3xl opacity-20" style={{ background: "var(--color-gold)" }} />
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-[0.2em] font-medium mb-4" style={{ color: "var(--gold)" }}>Choose your duration</p>
            <h2 className="font-display text-4xl md:text-6xl font-semibold">Pay on delivery. Heal on schedule.</h2>
            <p className="mt-4 text-primary-foreground/70 max-w-xl mx-auto">Long-standing hypertension typically needs 2–3 months of consistent use. Bundle pricing reflects that journey.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {packs.map(p => {
              const isFeatured = p.tag === "Full Protocol";
              const waMessage = encodeURIComponent(
                `Hello GHT, I'd like to order the HYPERFREE + CAERITE Hypertension Protocol.\n\n• Pack: ${p.d} (${p.b} bottles)\n• Price: ₦${p.now}\n\nPlease confirm delivery details. Thank you.`
              );
              const waLink = `${WA_URL}?text=${waMessage}`;
              return (
                <div key={p.b} className={`relative rounded-3xl p-10 border ${isFeatured ? "bg-[var(--gold)] text-foreground border-[var(--gold)]" : "bg-primary-foreground/5 border-primary-foreground/10 backdrop-blur"}`}>
                  {p.tag && (
                    <span className={`absolute -top-3 left-8 text-xs px-3 py-1 rounded-full font-medium ${isFeatured ? "bg-foreground text-background" : "bg-[var(--coral)] text-white"}`}>
                      {p.tag}
                    </span>
                  )}
                  <div className="flex items-center gap-2 mb-2">
                    <Pill className={`w-4 h-4 ${isFeatured ? "text-foreground/60" : "text-primary-foreground/60"}`} />
                    <span className={`text-sm ${isFeatured ? "text-foreground/70" : "text-primary-foreground/60"}`}>{p.b} bottles</span>
                  </div>
                  <h3 className="font-display text-4xl font-semibold mb-8">{p.d}</h3>
                  <div className="flex items-baseline gap-3 mb-2">
                    <span className="font-display text-5xl font-semibold">₦{p.now}</span>
                  </div>
                  <div className={`text-sm line-through mb-6 ${isFeatured ? "text-foreground/50" : "text-primary-foreground/50"}`}>Was ₦{p.was}</div>
                  <div className="space-y-3">
                    <a href={waLink} target="_blank" rel="noopener noreferrer"
                      className={`inline-flex w-full items-center justify-center gap-2 rounded-full py-3.5 text-sm font-medium transition ${isFeatured ? "bg-[#25D366] text-white hover:opacity-90" : "bg-[#25D366] text-white hover:opacity-90"}`}>
                      <MessageCircle className="w-4 h-4" /> Order on WhatsApp
                    </a>
                    <a href={ORDER_URL} target="_blank" rel="noopener noreferrer"
                      className={`inline-flex w-full items-center justify-center gap-2 rounded-full py-3.5 text-sm font-medium transition ${isFeatured ? "bg-foreground text-background hover:opacity-90" : "bg-primary-foreground text-primary hover:bg-primary-foreground/90"}`}>
                      Use order form <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL / DOCTOR */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto rounded-3xl bg-card border border-border p-10 md:p-14 shadow-[var(--shadow-card)]">
          <div className="flex gap-0.5 mb-6">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-[var(--gold)] text-[var(--gold)]" />)}
          </div>
          <blockquote className="font-display text-2xl md:text-4xl leading-tight mb-8">
            "Your heart deserves better. With HYPERFREE and CAERITE you don't just lower a number — you restore balance and defend your life."
          </blockquote>
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full grid place-items-center" style={{ background: "var(--gradient-hero)" }}>
              <span className="font-display text-xl font-semibold text-primary-foreground">DR</span>
            </div>
            <div>
              <div className="font-medium">Dr Racheal</div>
              <div className="text-sm text-muted-foreground">GHT Healthcare Provider · Hypertension protocol lead</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 px-6 bg-secondary/40">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm uppercase tracking-[0.2em] text-accent font-medium mb-4">Before you order</p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold mb-12">Answers to the questions customers ask most.</h2>
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

      {/* WARNING + CTA */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto rounded-3xl p-10 md:p-14 relative overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
          <div className="relative z-10 text-primary-foreground">
            <p className="text-sm uppercase tracking-[0.2em] font-medium mb-4" style={{ color: "var(--gold)" }}>A note before ordering</p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold mb-6 max-w-2xl">Order only when you're ready to receive.</h2>
            <ul className="space-y-2 text-primary-foreground/80 mb-10 max-w-2xl">
              <li>— Funds available to pay on delivery within 0–2 days.</li>
              <li>— You will be reachable by phone after ordering.</li>
              <li>— Not traveling or unavailable before delivery.</li>
            </ul>
            <div className="flex flex-wrap gap-4">
              <a href={ORDER_URL} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-primary-foreground text-primary px-8 py-4 text-sm font-medium hover:opacity-90 transition">
                Open order form <ArrowRight className="w-4 h-4" />
              </a>
              <a href="tel:+2349131541263" className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 px-8 py-4 text-sm font-medium hover:bg-primary-foreground/10 transition">
                <Phone className="w-4 h-4" /> +234 913 154 1263
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-6">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl grid place-items-center" style={{ background: "var(--gradient-hero)" }}>
              <Leaf className="w-5 h-5 text-primary-foreground" strokeWidth={2.5} />
            </div>
            <span className="font-display text-xl font-semibold">GHT<span className="text-accent">.</span></span>
          </Link>
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} GHT Products Care. Natural wellness, clinically guided.</p>
          <div className="flex gap-4">
            <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-secondary grid place-items-center hover:bg-accent hover:text-accent-foreground transition">
              <MessageCircle className="w-4 h-4" />
            </a>
            <a href="tel:+2349131541263" className="w-10 h-10 rounded-full bg-secondary grid place-items-center hover:bg-accent hover:text-accent-foreground transition">
              <Phone className="w-4 h-4" />
            </a>
          </div>
        </div>
      </footer>

      <a href={WA_URL} target="_blank" rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 rounded-full bg-accent text-accent-foreground px-5 py-3.5 shadow-[var(--shadow-elegant)] hover:scale-105 transition">
        <MessageCircle className="w-5 h-5" />
        <span className="text-sm font-medium hidden sm:inline">Chat with us</span>
      </a>
    </main>
  );
}
