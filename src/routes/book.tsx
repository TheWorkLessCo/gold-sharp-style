import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/book")({
  head: () => ({
    meta: [
      { title: "Book Now — Ason To Us Kingdom Cuts | DFW Mobile Barber" },
      {
        name: "description",
        content:
          "Book your mobile barber appointment in Dallas–Fort Worth. Call or text 214-854-1477. Deposit required.",
      },
      { property: "og:title", content: "Book Now — Ason To Us Kingdom Cuts" },
      {
        property: "og:description",
        content: "Call or text 214-854-1477 to book your mobile cut anywhere in DFW.",
      },
    ],
  }),
  component: BookPage,
});

const PHONE = "214-854-1477";
const PHONE_TEL = "+12148541477";

function BookPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 md:px-8 md:py-24">
      <div className="text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-primary">Booking</p>
        <h1 className="mt-3 font-display text-5xl font-bold md:text-6xl">
          Book Your <span className="text-gold-gradient">Cut</span>
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
          Call or text — we'll confirm your time, location, and send you the deposit info.
        </p>
      </div>

      <div className="mt-12 grid gap-5 md:grid-cols-2">
        <a
          href={`tel:${PHONE_TEL}`}
          className="group rounded-2xl border border-primary/40 bg-gold-gradient p-8 text-center text-primary-foreground shadow-gold transition hover:scale-[1.02]"
        >
          <div className="text-4xl">📞</div>
          <div className="mt-3 font-display text-2xl font-bold">Call Now</div>
          <div className="mt-1 text-lg font-semibold">{PHONE}</div>
        </a>
        <a
          href={`sms:${PHONE_TEL}`}
          className="group rounded-2xl border border-primary/40 bg-card p-8 text-center transition hover:border-primary hover:shadow-gold"
        >
          <div className="text-4xl">💬</div>
          <div className="mt-3 font-display text-2xl font-bold text-primary">Text to Book</div>
          <div className="mt-1 text-lg font-semibold text-foreground">{PHONE}</div>
        </a>
      </div>

      <a
        href="https://instagram.com/asontouskingdomcuts"
        target="_blank"
        rel="noreferrer"
        className="mt-5 block rounded-2xl border border-border bg-card p-6 text-center transition hover:border-primary/60"
      >
        <div className="text-2xl">📷</div>
        <div className="mt-2 font-display text-lg font-semibold">DM on Instagram</div>
        <div className="text-sm text-primary">@asontouskingdomcuts</div>
      </a>

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        <div className="rounded-xl border border-border bg-card/60 p-6">
          <h2 className="font-display text-xl font-bold text-primary">Service Area</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            📍 Dallas, TX & all surrounding DFW areas. A flat $15 travel fee covers wherever you are
            in the metroplex.
          </p>
        </div>
        <div className="rounded-xl border border-border bg-card/60 p-6">
          <h2 className="font-display text-xl font-bold text-primary">Deposit Policy</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            A deposit is required to confirm every appointment and is applied toward your total. We'll
            share the deposit details when we confirm your booking.
          </p>
        </div>
      </div>

      <div className="mt-12 rounded-2xl border border-primary/30 bg-primary/5 p-8 text-center">
        <h2 className="font-display text-2xl font-bold">Quick Pricing</h2>
        <div className="mx-auto mt-4 grid max-w-xl grid-cols-2 gap-3 text-sm">
          {[
            ["Adult Cut", "$30"],
            ["Kid's Cut", "$20"],
            ["Beard", "$10"],
            ["Hair Wash", "$25"],
            ["Shave", "$30"],
            ["Travel Fee", "$15"],
          ].map(([n, p]) => (
            <div
              key={n}
              className="flex items-center justify-between rounded-md border border-border bg-card px-4 py-2"
            >
              <span className="text-muted-foreground">{n}</span>
              <span className="text-gold-gradient font-display font-bold">{p}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
