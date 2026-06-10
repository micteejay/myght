import { WHATSAPP_URL, WHATSAPP_TEL, WHATSAPP_DISPLAY } from "@/config/contact";
import { createFileRoute } from "@tanstack/react-router";
import { Check, ShieldCheck, Leaf, Phone, MessageCircle, Star, ArrowRight, Sparkles, Clock, HeartPulse } from "lucide-react";
import { SiteNav } from "@/components/SiteNav";
import { OrderButton } from "@/components/OrderDialog";

// Source-of-truth images from the official GHT blog
const BLOG = {
  bladder: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjjBRgJHFihsxKmGazC5t-9Vz3AWTB17PWLlIb4RndNmEr5VRYtI_oQBEN_-TIJH7nJ33rGCypWysgLIg7tdyqMhVIKXpuoMYERX_G2lAsS_nT7XhYaSc-2igrES6Dd3YPN63SCKizFlNWd_fp2ej5dGv8kbiMh6l8MCXTCT4hrEgZopfzv2U-jxWx1zRE/s720/BLADDER.jpg",
  hold: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi0STNyd3N_vAihaUtKgd5FNNbZOt42QcuT61vQlbRgJHiKb4-BXtGtNMaHgEhl6UQFYVo8roPAFxL4mP_Br2AJGfsRaQmUhZnpYdqIAb5qi-W2jHAQnUvAwJA6wgL-3yG8NebpmHg7Ko_WxflsHkj9_oE3cd2Cao6hRW7mxzyjCAypSUCoru2pIKkQGtU/s355/HOLD.png",
  hold2: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjhyCzUwpQ5ct0sUh95vZfB-9TyNC8XI3KjYYMSdZtcjEXCiSlrnXqSXefBZn5A9jQS-5nJBeajxqpzvSFWMw1A2U7Wcb581fBMdhvyRY1lMXpfbloaFe_iATg9d43Lb3avujJWCDVInV-rG9H646s7i_yuLJEc3UxMsQVV5snfldByPGPEtq2Z2lYIVRg/s1600/HOLD2.jpg",
  bphMan: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjY5d8HE-16rXef5hDfg6ulb6a6b5wqnXfsf1dOMt-zspWPZx6joNq3Q7fQKaLHlN92pbjMJhKnye91edbB5DxIzYyvpoeZMrUT2dvdkP5-wq6HmYF1CfKVLsggAhWupkOgx7ENYY8QwKh3JRoL1vMys_OkeUcr3HFS5Cv4Pc7nrLhk2wWc1dGchRXM8SI/s1280/image.jpg",
  prostateDiagram: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj5yXntbumb5yU08rCQfJ4VJOlFLxaAlel9L3f6s2Oo6cnELBuanJ1pj0N2oIUxTOWuvgQa0SrX0BuA18bL6FBOpH3kaD0lKNBayndg_Uw4FDM-gSRO3XAEhjaSI-mXpiEZHlor3dN88jnQ8MG3ykE7N709GPOGj7wTfNpwwiudkcwNz89ucP70L_RkIyc/s742/unnamed.jpg",
  pack2: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgSS7X2IpcZecUOz8aVg823hS75GJZI6F7BzL1UoQ79sKlrzF4qWaxHgdm2oW-GxHYgNT2RZIlYOJQCRV518m-xj925-d2fpaJWaTa3BxeTkIy0WDyGyiGkHrJwxpnKUGMn-nvhHNNdjZNJTVDEnb7nGx8EcREo1tJ8imrHLeeMkjyTmCvvsSJG-TCxj1Q/s267/prostate%202%20bottle.png",
  pack3: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj5XTP2aD4318G0nwIzajKeR5O-wQU9Tc7QS4OohYaLSDO2vZdD3S7aixnEvMCgeW_yORfW91TFhDr8KGRplAt3eLjv2uQG37fPJd1-9wDd5mqcJkJNweuPY3Rm2XA6EsTeUJ5K5Oq37Z267KuAAmKsayrAV1ikplCLoPc6YYNQR9zc0qw_p-v-mPDv74k/s398/prostate%203%20bottle.png",
  pack4: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi3VtXRquIcjtotK5-cuswZWwULlXOp_hyIaZduTuHwLq3yH3rgxPgtNFrZjE0wpq09dJzqneWDlH9UkxosGlo78oPTM_OI3Vsi5gNUlhLZVp4VEfi1sRStED3bdpumUUNEQr4lQkB4_-nKiaPNBZJ4RPXxP-DTJmw2TnhvWJHrFyXmCYEu1MLIZmUpXNY/s481/prostate%204%20bottles.png",
  pack5: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiNSToo4WoZv12g3hl1yhJ19ch0HXOdoHAxpC1UBnAwfgGj3tAVm6APrFET6dKY1svvZmQiIXbxe7gd_iAM-umWUT-K5qyOJjElsYYafciAwmwCU1UFe-qTAp3FOXLXAxCA8Us13m1t4xwh5VSpIIri2tT-m1omG8TOXJMfoC_v-WVQIbbQ48iTyZfeUN4/s423/prostate%205%20bottless.png",
  pack6: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjCGrv7BUNKbXVHtJxz9xb3zABrxVzErr_PBivWoeAxfIwGP4H8Lnh0PizWpmsmmOQiyZXXLcOSEw1KKYLOfyVh6dcofL6FRsKFyUCVt9We09J_NBfsR0pTXrNlFQtSfqqtxaXff1-ca4ZBvzVfZwahUChRqPgIC8eTwXwhZ7sx9v6gtR-BI47FGguIz5o/s421/prostate%206%20bottles.png",
  pack10: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEghpFEv-HkgvkZlSJiQJkj2cR4uuY72QLRSbTlTpvytd10Qs6OLDY4sLXCh52isXUzFlpTySbk9BVNovggVn67IPToP4XJmuh_iObFcntw5B-kx28A3-cOCzTF1C4JlEnx8eAv5D1yT8VoDYAyjCoK85uDG42SN5clBpZDZvdIJ9TQ9mQey8MRsFfi4W04/s1500/SEVERE%20STAGE%204%20PROSTATE%20CANCER%20SOLUTION%20PACK.jpg",
  nafdac: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhBlNf6fqvmxX0K2aG2-gsVT_FtECJZ4DdcPz7SGbuBo4Y6U_WBE5bOWM5zzxuoxWINWDptLPyH0ltS69oQBsVTLT5LQ-iGIkpTN6ODBWdgo9K7DA2f1QmOT_MyfTZFYjXQQmMZ5bgXaHp5J6MXkLhXYNFKdFQt560qWj_VwAicyo6RBCf5-TQa0R2pXZY/s264/unnamed.png",
  testimony1: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjwlXCPmfhHu_8btnJ6drM_PjBSQ5sdI88SzBRp174AAi0hAH_L6Hj8Xtau9-ty8V9XrT_9qryBRCQ7L4xI3Yh7oTTSKM4cZx2ApVn7WO35dlQXVTyqh3HTwduUj78QBku8pGijqiIOWB7kzV82m55onIEuH26KC7djynAb85QRwMdmVAJlFMFlZSWLVf8/s638/testimony.jpg",
  testimony2: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgFY-IQn5g3jiLu_tf0_m_JK__ve8u7Lx53XsQ_uhudeJX002mvjw5OyEvIqhKYtRLDulQV770MVRzAz0WGYXoTnEGBZie9CzwEImYdxGLvuWb_lQAEw4uU_ApfP4FG4SGi9ezqgbdB8wAy26FvK2CN0BjBlo3GDaqCEUHVCl1lyWknfz-WC3fa0_POu1I/s1280/testimony%202.jpg",
  testimony3: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEihY7XousqzshXrBsypvgBOQ2X-IKnSFWfpXptTJoPJD8A4Av1YqI_GVtmh4MCgAUMV-BNgfUEHoVdCuPU_0lfFfpj6Kkn2SDcMENNhHVccKMi6ZebgLfW8M4bXH96Ikaq1d8eJwSbWMVjqgNZdyVtki_M47HF3jlGh1C-ZPe_DoC3eo2wRplPuawucvAw/s1280/testimony%203.jpg",
};

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "GHT Prostate — Natural Herbal Relief for Men 40+" },
      { name: "description", content: "GHT is a 100% herbal prostate care formula designed to relieve BPH symptoms naturally — without harsh side effects. Trusted across Africa." },
      { property: "og:image", content: BLOG.pack6 },
    ],
  }),
});

const WA_URL = WHATSAPP_URL;

const symptoms = [
  { t: "Hesitation", d: "You stand at the toilet, muscles tense, and nothing comes." },
  { t: "Weak Flow", d: "A flow that starts, stops, dribbles — never quite right." },
  { t: "Urgency", d: "Constant pressure, even minutes after using the bathroom." },
  { t: "Nocturia", d: "Waking up two, three, four times a night to urinate." },
  { t: "Dribbling", d: "Embarrassing leaks throughout the day, staining clothes." },
  { t: "Retention", d: "The bladder never feels truly empty, no matter what." },
];

const packs = [
  { bottles: 2, days: "15 days", was: "55,500", now: "45,500", img: BLOG.pack2 },
  { bottles: 3, days: "20 days", was: "80,500", now: "67,500", tag: "Popular", img: BLOG.pack3 },
  { bottles: 4, days: "25 days", was: "95,500", now: "87,500", img: BLOG.pack4 },
  { bottles: 5, days: "30 days", was: "118,500", now: "103,500", img: BLOG.pack5 },
  { bottles: 6, days: "1 month +", was: "140,500", now: "133,500", tag: "Best Value", img: BLOG.pack6 },
  { bottles: 10, days: "2 months — full treatment", was: "250,500", now: "217,500", tag: "Full Treatment", img: BLOG.pack10 },
];

const faqs = [
  { q: "Does the product really work?", a: "Yes. Over 1,500 customers across Africa have used GHT with reported results. Most users feel a difference within the first pack." },
  { q: "Are there any side effects?", a: "None. GHT is a 100% pure herbal and plant-extract blend. No synthetic chemicals." },
  { q: "How many packs do I need?", a: "One pack works for most. For more advanced cases, 2–3 packs over 2–3 months is recommended — that's why bundle discounts are significant." },
  { q: "Does it help erectile function?", a: "Yes. Restoring prostate health often resolves related erectile concerns in our customers." },
];

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteNav
        orderProduct="GHT Prostate"
        sectionLinks={[
          { label: "Symptoms", href: "#symptoms" },
          { label: "Product", href: "#product" },
          { label: "Pricing", href: "#pricing" },
          { label: "FAQ", href: "#faq" },
        ]}
        pageLinks={[
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
              100% herbal · No side effects · Trusted across Africa
            </div>
            <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-semibold leading-[1.05] sm:leading-[1.02] tracking-tight">
              Reclaim your nights.<br />
              <span className="italic text-accent">Restore</span> your flow.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
              You don't need Duodart, Contiflo, Tamsulocin — or surgery — to ease prostate challenges. GHT is a clinically inspired herbal formula built for men 40+ who want real relief, naturally.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a href="#pricing" className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground shadow-[var(--shadow-elegant)] hover:translate-y-[-2px] transition">
                See pricing <ArrowRight className="w-4 h-4" />
              </a>
              <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-7 py-3.5 text-sm font-medium hover:bg-secondary transition">
                <MessageCircle className="w-4 h-4 text-accent" /> Chat on WhatsApp
              </a>
            </div>
            <div className="mt-10 flex items-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-accent" /> Certified urologists</div>
              <div className="flex items-center gap-2"><HeartPulse className="w-4 h-4 text-accent" /> 1,500+ customers</div>
            </div>
          </div>

          <div className="relative animate-float-soft">
            <div className="relative rounded-3xl overflow-hidden shadow-[var(--shadow-elegant)]">
              <img src={BLOG.hold2} alt="Healthy active man in his 60s" width={1280} height={1280} className="w-full h-auto object-cover aspect-[4/5] animate-spin-slow" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-card rounded-2xl shadow-[var(--shadow-card)] p-5 max-w-[240px] border border-border">
              <div className="flex gap-0.5 mb-2">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-[var(--gold)] text-[var(--gold)]" />)}
              </div>
              <p className="text-sm font-medium leading-snug">"I sleep through the night again. First time in 8 years."</p>
              <p className="text-xs text-muted-foreground mt-2">— Verified customer, Lagos</p>
            </div>
            <div className="absolute -top-4 -right-4 bg-card rounded-full shadow-[var(--shadow-card)] px-5 py-3 flex items-center gap-2 border border-border">
              <Leaf className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium">100% Herbal</span>
            </div>
          </div>
        </div>
      </section>

      {/* VIDEO */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-secondary/30">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <p className="text-sm uppercase tracking-[0.2em] text-accent font-medium mb-3">Watch</p>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold">See how GHT Prostate works</h2>
          </div>
          <div className="relative w-full overflow-hidden rounded-3xl shadow-[var(--shadow-elegant)] aspect-video bg-black">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/hk1c7PHvvwc"
              title="GHT Prostate product"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
          <div className="mt-8 rounded-3xl overflow-hidden bg-card border border-border p-4 sm:p-6">
            <img src={BLOG.bladder} alt="Normal, inflamed and enlarged prostate gland" loading="lazy" className="w-full h-auto rounded-2xl" />
            <p className="text-center text-sm text-muted-foreground mt-3">Normal prostate · Inflamed prostate · Enlarged prostate</p>
          </div>
        </div>
      </section>


      {/* SYMPTOMS */}
      <section id="symptoms" className="py-16 sm:py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between flex-wrap gap-6 mb-14">
            <div className="max-w-2xl">
              <p className="text-sm uppercase tracking-[0.2em] text-accent font-medium mb-4">The signs</p>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold">If you're a man in your 40s, 50s, 60s or 70s — read this.</h2>
            </div>
            <p className="text-muted-foreground max-w-md">An enlarged prostate (BPH) shows up quietly. Most men ignore the early warnings until it becomes an emergency.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {symptoms.map((s, i) => (
              <div key={s.t} className="group relative rounded-2xl bg-card border border-border p-7 hover:shadow-[var(--shadow-card)] hover:-translate-y-1 transition-all duration-300">
                <div className="text-6xl font-display text-accent/15 absolute top-4 right-6 group-hover:text-accent/30 transition">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="font-display text-2xl font-semibold mb-2">{s.t}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REAL-LIFE IMAGES */}
      <section className="py-12 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 gap-6">
          <figure className="rounded-3xl overflow-hidden border border-border bg-card">
            <img src={BLOG.hold} alt="Man struggling with urinary urgency near the toilet" loading="lazy" className="w-full h-72 object-cover" />
            <figcaption className="p-5 text-sm text-muted-foreground">The constant urgency and hesitation rob you of normal life — at home, at work, on the road.</figcaption>
          </figure>
          <figure className="rounded-3xl overflow-hidden border border-border bg-card">
            <img src={BLOG.bphMan} alt="Man relying on a catheter due to severe prostate enlargement" loading="lazy" className="w-full h-72 object-cover" />
            <figcaption className="p-5 text-sm text-muted-foreground">Ignored long enough, BPH ends in catheters, infections and surgery. It doesn't have to.</figcaption>
          </figure>
        </div>
      </section>


      {/* PRODUCT */}
      <section id="product" className="py-16 sm:py-24 px-4 sm:px-6 bg-secondary/40">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute inset-0 rounded-full blur-3xl opacity-30" style={{ background: "var(--gradient-hero)" }} />
            <img src={BLOG.prostateDiagram} alt="GHT herbal prostate formula bottle" width={1024} height={1024} loading="lazy" className="relative w-full rounded-3xl shadow-[var(--shadow-elegant)]" />
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-accent font-medium mb-4">Meet GHT</p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold mb-6">A formula made from <em className="text-accent not-italic">plants,</em> not chemicals.</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Conventional drugs like Duodart, Contiflo and Tamsulocin can cause dizziness, fatigue, decreased libido, erectile dysfunction and lowered blood cell counts. GHT delivers relief from BPH symptoms with a pure herbal and plant-extract blend — zero synthetic chemicals.
            </p>
            <ul className="space-y-3 mb-10">
              {["Shrinks inflamed prostate tissue naturally", "Restores normal urine flow within weeks", "Improves nighttime sleep — no more nocturia", "Supports erectile function as a side benefit"].map(b => (
                <li key={b} className="flex items-start gap-3">
                  <div className="mt-1 w-5 h-5 rounded-full bg-accent grid place-items-center flex-shrink-0">
                    <Check className="w-3 h-3 text-accent-foreground" strokeWidth={3} />
                  </div>
                  <span className="text-foreground">{b}</span>
                </li>
              ))}
            </ul>
            <div className="flex gap-3 flex-wrap">
              <a href="#pricing" className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground hover:opacity-90 transition">
                Choose your pack <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ANATOMY EDUCATIONAL STRIP */}
      <section className="py-16 sm:py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-2 rounded-3xl overflow-hidden bg-secondary/40 p-8">
            <img src={BLOG.bladder} alt="Prostate anatomy illustration" width={1024} height={768} loading="lazy" className="w-full h-auto" />
          </div>
          <div className="lg:col-span-3">
            <p className="text-sm uppercase tracking-[0.2em] text-accent font-medium mb-4">Why it happens</p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold mb-6">Two paths the prostate can take.</h2>
            <div className="space-y-6">
              <div className="border-l-2 border-accent pl-6">
                <h3 className="font-display text-2xl mb-2">Benign Enlargement (BPH)</h3>
                <p className="text-muted-foreground leading-relaxed">The prostate keeps growing through life. For most men, this slow growth eventually presses on the urethra — restricting flow, weakening the stream, and disrupting sleep.</p>
              </div>
              <div className="border-l-2 border-coral pl-6">
                <h3 className="font-display text-2xl mb-2">Prostate Cancer</h3>
                <p className="text-muted-foreground leading-relaxed">One of the most common cancers in men. Early-stage symptoms can be silent, which is why early intervention with natural support matters.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-16 sm:py-24 px-4 sm:px-6 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-3xl opacity-20" style={{ background: "var(--color-gold)" }} />
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-[0.2em] text-[var(--gold)] font-medium mb-4">Choose your treatment</p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-6xl font-semibold">Discounted bundles, Nigerian pricing.</h2>
            <p className="mt-4 text-primary-foreground/70 max-w-xl mx-auto">Pay on delivery. Bundles save more — most chronic cases need 2–3 months of consistent use.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {packs.map(p => (
              <div key={p.bottles} className={`relative rounded-3xl p-8 border ${p.tag === "Best Value" ? "bg-[var(--gold)] text-foreground border-[var(--gold)]" : "bg-primary-foreground/5 border-primary-foreground/10 backdrop-blur"}`}>
                {p.tag && (
                  <span className={`absolute -top-3 left-8 text-xs px-3 py-1 rounded-full font-medium ${p.tag === "Best Value" ? "bg-foreground text-background" : "bg-[var(--coral)] text-white"}`}>
                    {p.tag}
                  </span>
                )}
                <div className={`mb-6 -mx-2 rounded-2xl p-3 flex items-center justify-center ${p.tag === "Best Value" ? "bg-foreground/5" : "bg-primary-foreground/10"}`}>
                  <img src={p.img} alt={`GHT Prostate ${p.bottles}-bottle pack`} loading="lazy" className="h-40 w-auto object-contain" />
                </div>
                <div className="flex items-baseline justify-between mb-2">
                  <h3 className="font-display text-3xl font-semibold">{p.bottles} bottles</h3>
                  <Clock className="w-4 h-4 opacity-60" />
                </div>
                <p className={`text-sm mb-8 ${p.tag === "Best Value" ? "text-foreground/70" : "text-primary-foreground/60"}`}>{p.days}</p>
                <div className="flex items-baseline gap-3 mb-8">
                  <span className="font-display text-4xl font-semibold">₦{p.now}</span>
                  <span className={`text-sm line-through ${p.tag === "Best Value" ? "text-foreground/40" : "text-primary-foreground/40"}`}>₦{p.was}</span>
                </div>
                <OrderButton
                  product="GHT Prostate"
                  pack={`${p.bottles} bottles · ${p.days} · ₦${p.now}`}
                  className={`inline-flex w-full items-center justify-center gap-2 rounded-full py-3 text-sm font-medium transition ${p.tag === "Best Value" ? "bg-foreground text-background hover:opacity-90" : "bg-primary-foreground text-primary hover:bg-primary-foreground/90"}`}
                >
                  Order pack <ArrowRight className="w-4 h-4" />
                </OrderButton>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-16 sm:py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-sm uppercase tracking-[0.2em] text-accent font-medium mb-4">Real stories</p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold">1,500+ men, one common reaction.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { n: "Chief A.", l: "Abuja", q: "Within ten days the night trips stopped. I had given up before trying GHT." },
              { n: "Mr. O.", l: "Port Harcourt", q: "My PSA dropped after the second pack. My urologist was surprised." },
              { n: "Engr. K.", l: "Lagos", q: "Flow is strong again. No dribbling. I feel twenty years younger." },
            ].map(t => (
              <figure key={t.n} className="rounded-3xl bg-card border border-border p-8 shadow-[var(--shadow-card)]">
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-[var(--gold)] text-[var(--gold)]" />)}
                </div>
                <blockquote className="font-display text-xl leading-snug mb-6">"{t.q}"</blockquote>
                <figcaption className="text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">{t.n}</span> · {t.l}
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-6 items-start">
            <figure className="rounded-3xl bg-card border border-border p-4 shadow-[var(--shadow-card)]">
              <img src={BLOG.testimony1} alt="WhatsApp testimony from a verified GHT customer" loading="lazy" className="w-full h-auto rounded-2xl" />
              <figcaption className="text-center text-sm text-muted-foreground mt-3">Real WhatsApp message from a verified customer.</figcaption>
            </figure>
            <figure className="rounded-3xl bg-card border border-border p-6 shadow-[var(--shadow-card)] flex flex-col items-center justify-center text-center">
              <img src={BLOG.nafdac} alt="NAFDAC certificate of listing for GHT Prostbeta Tablets" loading="lazy" className="w-full h-auto rounded-2xl" />
              <figcaption className="text-sm text-muted-foreground mt-4">
                <span className="font-medium text-foreground">NAFDAC certified.</span> Listing No. A7-100594L — issued to SD GHT Health Care Nig Ltd.
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 sm:py-24 px-4 sm:px-6 bg-secondary/40">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm uppercase tracking-[0.2em] text-accent font-medium mb-4">Questions answered</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold mb-12">Before you order.</h2>
          <div className="divide-y divide-border border-y border-border">
            {faqs.map(f => (
              <details key={f.q} className="group py-6">
                <summary className="cursor-pointer flex items-center justify-between gap-6 list-none">
                  <h3 className="font-display text-xl font-medium">{f.q}</h3>
                  <span className="w-8 h-8 rounded-full border border-border grid place-items-center group-open:bg-accent group-open:text-accent-foreground group-open:rotate-45 transition">
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
      <section className="py-16 sm:py-24 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto rounded-3xl p-10 md:p-14 relative overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
          <div className="relative z-10 text-primary-foreground">
            <p className="text-sm uppercase tracking-[0.2em] text-[var(--gold)] font-medium mb-4">A note before ordering</p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold mb-6 max-w-2xl">Only fill the form if you are serious.</h2>
            <ul className="space-y-2 text-primary-foreground/80 mb-10 max-w-2xl">
              <li>— You're 30 years or older with a related health concern.</li>
              <li>— You can pay on delivery at your stated address.</li>
              <li>— You know when you'll be available to receive the package.</li>
            </ul>
            <div className="flex flex-wrap gap-4">
              <OrderButton product="GHT Prostate"
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
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl grid place-items-center" style={{ background: "var(--gradient-hero)" }}>
              <Leaf className="w-5 h-5 text-primary-foreground" strokeWidth={2.5} />
            </div>
            <span className="font-display text-xl font-semibold">GHT<span className="text-accent">.</span></span>
          </div>
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} GHT Products Care. Herbal wellness for men.</p>
          <div className="flex gap-4">
            <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-secondary grid place-items-center hover:bg-accent hover:text-accent-foreground transition">
              <MessageCircle className="w-4 h-4" />
            </a>
            <a href={WHATSAPP_TEL} className="w-10 h-10 rounded-full bg-secondary grid place-items-center hover:bg-accent hover:text-accent-foreground transition">
              <Phone className="w-4 h-4" />
            </a>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a href={WA_URL} target="_blank" rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 rounded-full bg-accent text-accent-foreground px-5 py-3.5 shadow-[var(--shadow-elegant)] hover:scale-105 transition">
        <MessageCircle className="w-5 h-5" />
        <span className="text-sm font-medium hidden sm:inline">Chat with us</span>
      </a>
    </main>
  );
}
