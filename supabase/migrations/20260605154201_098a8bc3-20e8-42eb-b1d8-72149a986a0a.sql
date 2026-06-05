CREATE TABLE public.orders (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  product TEXT NOT NULL,
  pack TEXT,
  quantity INT NOT NULL DEFAULT 1,
  customer_name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT,
  address TEXT NOT NULL,
  state TEXT NOT NULL,
  notes TEXT,
  email_sent BOOLEAN NOT NULL DEFAULT false,
  email_error TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT INSERT ON public.orders TO anon, authenticated;
GRANT ALL ON public.orders TO service_role;
ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can submit an order" ON public.orders FOR INSERT TO anon, authenticated WITH CHECK (true);