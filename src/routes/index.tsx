import { createFileRoute, Link } from "@tanstack/react-router";
import logoVan from "@/assets/logo-van.png";
import cut1 from "@/assets/cut-1.jpg";
import cut2 from "@/assets/cut-2.jpg";
import cut3 from "@/assets/cut-3.jpg";
import cut5 from "@/assets/cut-5.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "A Son To Us — Kingdom Cuts | DFW Mobile Barber" },
      {
        name: "description",
        content:
          "Premium mobile barber serving all of Dallas–Fort Worth. Fades, beards, shaves — booked to your door. Call 214-854-1477.",
      },
      { property: "og:title", content: "A Son To Us — Kingdom Cuts | DFW Mobile Barber" },
      {
        property: "og:description",
        content: "Premium mobile barber serving all of DFW. Call 214-854-1477.",
      },
    ],
  }),
  component: Home,
});

const PHONE_TEL = "+12148541477";

function CrossDivider() {
  return (
    <div className="flex items-center justify-center gap-4 py-8">
      <span className="h-px w-20 bg-gradient-to-r from-transparent via-primary/60 to-primary/60" />
      <span className="font-display text-2xl text-primary">✝</span>
      <span className="h-px w-20 bg-gradient-to-l from-transparent via-primary/60 to-primary/60" />
    </div>
  );
}

function Home() {
  const teaser = [
    { name: "Adult Haircut", price: "$30" },
    { name: "Kid's Haircut", price: "$20" },
    { name: "Beard Trim", price: "$10" },
    { name: "Hair Wash", price: "$25" },
    { name: "Shave", price: "$30" },
    { name: "Travel Fee", price: "$15" },
  ];

  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/50 to-background pointer-events-none" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-20 md:grid-cols-2 md:items-center md:px-8 md:py-32">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-primary">
              <span>👑</span> Mobile Barber Shop
            </div>
            <img
              src={logoVan}
              alt="A Son To Us — Kingdom Cuts"
              width={900}
              height={560}
              className="mt-6 w-full max-w-xl brightness-125 contrast-110 saturate-150 drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)] md:hidden"
            />
            <h1 className="sr-only">A Son To Us — Kingdom Cuts</h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground md:text-xl">
              Premium cuts, fades, and shaves — delivered to your door anywhere in Dallas–Fort Worth.
              Sit back. We bring the shop to you.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={`tel:${PHONE_TEL}`}
                className="group relative inline-flex items-center gap-3 rounded-md bg-gold-gradient px-7 py-4 text-base font-bold text-primary-foreground shadow-gold transition hover:scale-[1.02]"
              >
                📞 Call 214-854-1477
              </a>
              <Link
                to="/book"
                className="inline-flex items-center gap-2 rounded-md border border-primary/40 px-7 py-4 text-base font-semibold text-primary transition hover:bg-primary/10"
              >
                Book an Appointment →
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <span>📍 Dallas, TX & all surrounding areas</span>
              <span className="hidden h-4 w-px bg-border md:block" />
              <span>👑 Faith-driven service</span>
            </div>
          </div>
          <div className="hidden md:block md:-mr-12 lg:-mr-24">
            <img
              src={logoVan}
              alt="A Son To Us — Kingdom Cuts"
              width={900}
              height={560}
              className="w-full md:scale-125 lg:scale-[1.4] origin-center brightness-125 contrast-110 saturate-150 drop-shadow-[0_30px_60px_rgba(0,0,0,0.7)]"
            />
          </div>
        </div>
      </section>

      {/* SERVICES TEASER */}
      <section className="mx-auto max-w-7xl px-4 py-20 md:px-8">
        <div className="mb-12 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-primary">Pricing</p>
          <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">
            Sharp Service. <span className="text-gold-gradient">Honest Prices.</span>
          </h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {teaser.map((s) => (
            <div
              key={s.name}
              className="group relative overflow-hidden rounded-xl border border-border bg-card p-6 transition hover:border-primary/60 hover:shadow-gold"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 transition group-hover:opacity-100" />
              <div className="flex items-baseline justify-between">
                <h3 className="font-display text-xl font-semibold">{s.name}</h3>
                <span className="text-gold-gradient font-display text-2xl font-bold">{s.price}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
          >
            See full pricing & details →
          </Link>
        </div>
      </section>

      {/* GALLERY PREVIEW */}
      <section className="bg-card/40 py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-primary">The Work</p>
              <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">Recent Cuts</h2>
            </div>
            <Link to="/gallery" className="text-sm font-semibold text-primary hover:underline">
              View full gallery →
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            {[cut1, cut2, cut3, cut5].map((src, i) => (
              <div
                key={i}
                className="group relative aspect-[4/5] overflow-hidden rounded-lg border border-border"
              >
                <img
                  src={src}
                  alt={`Haircut sample ${i + 1}`}
                  width={800}
                  height={1000}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SCRIPTURE */}
      <section className="mx-auto max-w-4xl px-4 py-20 text-center md:px-8">
        <CrossDivider />
        <blockquote className="font-display text-2xl italic leading-relaxed text-foreground/90 md:text-3xl">
          "Whatever you do, work at it with all your heart, as working for the Lord, not for human masters."
        </blockquote>
        <p className="mt-4 text-sm uppercase tracking-[0.3em] text-primary">Colossians 3:23</p>
        <CrossDivider />
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 pb-24 md:px-8">
        <div className="border-gold-gradient relative overflow-hidden rounded-2xl p-10 text-center md:p-16">
          <h2 className="font-display text-4xl font-bold md:text-5xl">
            Ready for a <span className="text-gold-gradient">fresh cut?</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Call or text to lock in your time. A small deposit secures your appointment.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href={`tel:${PHONE_TEL}`}
              className="inline-flex items-center gap-2 rounded-md bg-gold-gradient px-7 py-4 font-bold text-primary-foreground shadow-gold"
            >
              📞 Call 214-854-1477
            </a>
            <a
              href="sms:+12148541477"
              className="inline-flex items-center gap-2 rounded-md border border-primary/40 px-7 py-4 font-semibold text-primary hover:bg-primary/10"
            >
              💬 Text to Book
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
