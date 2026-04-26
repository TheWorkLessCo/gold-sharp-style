import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services & Pricing — A Son To Us Kingdom Cuts" },
      {
        name: "description",
        content:
          "Mobile barber services in DFW. Adult haircut $30, Kid's $20, Beard $10, Hair wash $25, Shave $30, Travel $15. Deposit required.",
      },
      { property: "og:title", content: "Services & Pricing — A Son To Us Kingdom Cuts" },
      {
        property: "og:description",
        content: "Transparent mobile barber pricing across all of Dallas–Fort Worth.",
      },
    ],
  }),
  component: ServicesPage,
});

const services = [
  { name: "Adult Haircut", price: 30, desc: "Custom cut, fade, line-up & style. Tailored to you." },
  { name: "Kid's Haircut", price: 20, desc: "Fresh cuts for the young kings. Patient, friendly service." },
  { name: "Beard Trim", price: 10, desc: "Shape, line, and detail your beard to perfection." },
  { name: "Hair Wash", price: 25, desc: "Deep cleanse & scalp refresh. Add to any service." },
  { name: "Shave", price: 30, desc: "Classic clean shave with hot towel finish." },
  { name: "Travel Fee", price: 15, desc: "We bring the full shop experience to your location in DFW." },
];

function ServicesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
      <div className="mb-14 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-primary">Services</p>
        <h1 className="mt-3 font-display text-5xl font-bold md:text-6xl">
          Premium Cuts. <span className="text-gold-gradient">Mobile Convenience.</span>
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          Every service comes to you — at home, the office, anywhere in Dallas–Fort Worth.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <div
            key={s.name}
            className="group relative overflow-hidden rounded-xl border border-border bg-card p-7 transition hover:border-primary/60 hover:shadow-gold"
          >
            <div className="flex items-start justify-between gap-4">
              <h2 className="font-display text-2xl font-semibold">{s.name}</h2>
              <div className="shrink-0 rounded-md bg-gold-gradient px-3 py-1 font-display text-xl font-bold text-primary-foreground">
                ${s.price}
              </div>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">{s.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 rounded-2xl border border-primary/30 bg-primary/5 p-8 text-center">
        <h3 className="font-display text-2xl font-bold text-primary">Deposit Required</h3>
        <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
          A small deposit is required to lock in every appointment. The deposit goes toward your total
          service. Call or text <span className="font-semibold text-foreground">214-854-1477</span> and
          we'll send you the deposit details.
        </p>
        <Link
          to="/book"
          className="mt-6 inline-flex items-center gap-2 rounded-md bg-gold-gradient px-6 py-3 font-semibold text-primary-foreground shadow-gold"
        >
          Book Now →
        </Link>
      </div>
    </div>
  );
}
