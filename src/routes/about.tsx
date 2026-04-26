import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — A Son To Us Kingdom Cuts" },
      {
        name: "description",
        content:
          "A faith-driven mobile barber serving Dallas–Fort Worth. Quality cuts, honest service, and a commitment to working as if for the Lord.",
      },
      { property: "og:title", content: "About — A Son To Us Kingdom Cuts" },
      {
        property: "og:description",
        content: "Meet the mobile barber bringing premium cuts to all of DFW.",
      },
    ],
  }),
  component: AboutPage,
});

function CrossDivider() {
  return (
    <div className="flex items-center justify-center gap-4 py-6">
      <span className="h-px w-24 bg-gradient-to-r from-transparent to-primary/60" />
      <span className="font-display text-2xl text-primary">✝</span>
      <span className="h-px w-24 bg-gradient-to-l from-transparent to-primary/60" />
    </div>
  );
}

function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 md:px-8 md:py-24">
      <div className="text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-primary">About</p>
        <h1 className="mt-3 font-display text-5xl font-bold md:text-6xl">
          More Than a <span className="text-gold-gradient">Haircut</span>
        </h1>
      </div>

      <div className="mt-12 space-y-6 text-lg leading-relaxed text-foreground/90">
        <p>
          <span className="text-gold-gradient font-display text-xl font-semibold">A Son To Us — Kingdom Cuts </span>
          is a mobile barber service born out of faith, family, and craftsmanship. We bring the
          full barbershop experience straight to your door — whether you're at home, the office, or
          anywhere across the Dallas–Fort Worth metroplex.
        </p>
        <p>
          Every cut, every line-up, every shave is handled with care, patience, and pride. We believe
          how you do one thing is how you do everything — so we show up sharp, on time, and ready to
          give you our best work.
        </p>
      </div>

      <div className="my-14 rounded-2xl border border-primary/30 bg-card p-10 text-center">
        <CrossDivider />
        <blockquote className="font-display text-2xl italic leading-relaxed text-foreground md:text-3xl">
          "Whatever you do, work at it with all your heart, as working for the Lord, not for human masters."
        </blockquote>
        <p className="mt-4 text-sm uppercase tracking-[0.3em] text-primary">Colossians 3:23</p>
        <CrossDivider />
      </div>

      <div className="rounded-2xl border border-border bg-card/60 p-8 text-center">
        <h2 className="font-display text-2xl font-bold">Stay Connected</h2>
        <p className="mt-2 text-muted-foreground">
          Follow on Instagram for the latest work, daily availability, and DFW pop-up locations.
        </p>
        <a
          href="https://instagram.com/asontouskingdomcuts"
          target="_blank"
          rel="noreferrer"
          className="mt-5 inline-flex items-center gap-2 rounded-md bg-gold-gradient px-6 py-3 font-semibold text-primary-foreground shadow-gold"
        >
          📷 @asontouskingdomcuts
        </a>
      </div>

      <div className="mt-10 text-center">
        <Link
          to="/book"
          className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
        >
          Book your cut →
        </Link>
      </div>
    </div>
  );
}
