import { createContext, useContext, useState, ReactNode, FormEvent } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { ArrowRight, MessageCircle, Mail, ShieldCheck } from "lucide-react";

export const ORDER_EMAIL = "gbengafaboya@gmail.com";
export const ORDER_WA = "2349131541263";

type OrderCtx = {
  open: (product?: string, pack?: string) => void;
};
const Ctx = createContext<OrderCtx | null>(null);

export function useOrder() {
  const c = useContext(Ctx);
  if (!c) throw new Error("OrderProvider missing");
  return c;
}

const NG_STATES = [
  "Abia","Adamawa","Akwa Ibom","Anambra","Bauchi","Bayelsa","Benue","Borno","Cross River","Delta",
  "Ebonyi","Edo","Ekiti","Enugu","FCT - Abuja","Gombe","Imo","Jigawa","Kaduna","Kano","Katsina",
  "Kebbi","Kogi","Kwara","Lagos","Nasarawa","Niger","Ogun","Ondo","Osun","Oyo","Plateau","Rivers",
  "Sokoto","Taraba","Yobe","Zamfara",
];

export function OrderProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [product, setProduct] = useState("GHT Product");
  const [pack, setPack] = useState("");

  const open = (p?: string, pk?: string) => {
    if (p) setProduct(p);
    if (pk !== undefined) setPack(pk);
    setIsOpen(true);
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const data = {
      name: f.get("name") as string,
      phone: f.get("phone") as string,
      email: (f.get("email") as string) || "—",
      address: f.get("address") as string,
      state: f.get("state") as string,
      product,
      pack: (f.get("pack") as string) || pack || "—",
      qty: f.get("qty") as string,
      notes: (f.get("notes") as string) || "—",
    };

    const lines = [
      "🛒 *NEW ORDER REQUEST*",
      "",
      `*Product:* ${data.product}`,
      `*Pack:* ${data.pack}`,
      `*Quantity:* ${data.qty}`,
      "",
      "👤 *Customer*",
      `Name: ${data.name}`,
      `Phone: ${data.phone}`,
      `Email: ${data.email}`,
      "",
      "📍 *Delivery*",
      `Address: ${data.address}`,
      `State: ${data.state}`,
      "",
      `📝 Notes: ${data.notes}`,
    ].join("\n");

    const waUrl = `https://wa.me/${ORDER_WA}?text=${encodeURIComponent(lines)}`;
    const subject = `New Order — ${data.product} (${data.pack})`;
    const mailUrl = `mailto:${ORDER_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines)}`;

    // Fire both: open WhatsApp in new tab, then trigger email client
    window.open(waUrl, "_blank", "noopener,noreferrer");
    setTimeout(() => {
      const a = document.createElement("a");
      a.href = mailUrl;
      a.click();
    }, 400);
    setIsOpen(false);
  };

  const field = "w-full rounded-xl bg-secondary/60 border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition";

  return (
    <Ctx.Provider value={{ open }}>
      {children}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-xl bg-card border-border max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-accent font-medium mb-2">
              <ShieldCheck className="w-3.5 h-3.5" /> Pay on delivery · Nationwide
            </div>
            <DialogTitle className="font-display text-2xl md:text-3xl">Complete your order</DialogTitle>
            <DialogDescription className="text-muted-foreground">
              {product}{pack ? ` · ${pack}` : ""}. We'll send your details to our team via WhatsApp and email.
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={onSubmit} className="space-y-3 mt-2">
            <div className="grid sm:grid-cols-2 gap-3">
              <input name="name" required placeholder="Full name" className={field} />
              <input name="phone" required type="tel" placeholder="Phone (WhatsApp)" className={field} />
            </div>
            <input name="email" type="email" placeholder="Email (optional)" className={field} />
            <input name="address" required placeholder="Delivery address" className={field} />
            <div className="grid sm:grid-cols-2 gap-3">
              <select name="state" required defaultValue="" className={field}>
                <option value="" disabled>State</option>
                {NG_STATES.map(s => <option key={s} value={s}>{s}</option>)}
              </select>
              <input name="qty" required type="number" min={1} defaultValue={1} placeholder="Quantity" className={field} />
            </div>
            {pack ? (
              <input type="hidden" name="pack" value={pack} />
            ) : (
              <input name="pack" placeholder="Pack / preferred bundle" className={field} />
            )}
            <textarea name="notes" rows={2} placeholder="Notes (best delivery time, landmark...)" className={field} />

            <div className="rounded-xl bg-secondary/40 border border-border p-3 text-xs text-muted-foreground">
              Submitting will open WhatsApp <span className="text-accent">+234 913 154 1263</span> and email <span className="text-accent">{ORDER_EMAIL}</span> with your details. Please send both for fastest confirmation.
            </div>

            <div className="flex flex-col sm:flex-row gap-2 pt-1">
              <button type="submit" className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground shadow-[var(--shadow-elegant)] hover:opacity-90 transition">
                <MessageCircle className="w-4 h-4" /> Send order <ArrowRight className="w-4 h-4" />
              </button>
              <button type="button" onClick={() => setIsOpen(false)} className="rounded-full border border-border px-6 py-3.5 text-sm font-medium hover:bg-secondary transition">
                Cancel
              </button>
            </div>
            <p className="text-[11px] text-muted-foreground text-center flex items-center justify-center gap-1.5 pt-1">
              <Mail className="w-3 h-3" /> A copy is sent to {ORDER_EMAIL}
            </p>
          </form>
        </DialogContent>
      </Dialog>
    </Ctx.Provider>
  );
}

/** Convenience button that opens the order dialog */
export function OrderButton({
  product,
  pack,
  className = "",
  children,
}: {
  product: string;
  pack?: string;
  className?: string;
  children?: ReactNode;
}) {
  const { open } = useOrder();
  return (
    <button
      type="button"
      onClick={() => open(product, pack)}
      className={className || "inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground hover:opacity-90 transition"}
    >
      {children ?? (<>Order now <ArrowRight className="w-4 h-4" /></>)}
    </button>
  );
}
