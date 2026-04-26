import { createFileRoute } from "@tanstack/react-router";
import cut1 from "@/assets/cut-1.jpg";
import cut2 from "@/assets/cut-2.jpg";
import cut3 from "@/assets/cut-3.jpg";
import cut4 from "@/assets/cut-4.jpg";
import cut5 from "@/assets/cut-5.jpg";
import cut6 from "@/assets/cut-6.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Ason To Us Kingdom Cuts" },
      {
        name: "description",
        content:
          "See the work — sharp fades, beards, shaves, and clean lineups from Ason To Us mobile barber in DFW.",
      },
      { property: "og:title", content: "Gallery — Ason To Us Kingdom Cuts" },
      { property: "og:description", content: "Recent cuts and styles from Ason To Us mobile barber." },
    ],
  }),
  component: GalleryPage,
});

const photos = [
  { src: cut1, alt: "Sharp fade with clean line-up" },
  { src: cut2, alt: "Classic side-part with faded beard" },
  { src: cut3, alt: "Kid's haircut" },
  { src: cut5, alt: "Clean back fade" },
  { src: cut6, alt: "Hot towel shave" },
  { src: cut4, alt: "Premium barber tools" },
];

function GalleryPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
      <div className="mb-12 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-primary">Gallery</p>
        <h1 className="mt-3 font-display text-5xl font-bold md:text-6xl">
          The <span className="text-gold-gradient">Work</span>
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm text-muted-foreground">
          A look at the craft — fades, lineups, beards, and shaves. Real client photos coming soon.
          Follow{" "}
          <a
            href="https://instagram.com/asontouskingdomcuts"
            target="_blank"
            rel="noreferrer"
            className="text-primary hover:underline"
          >
            @asontouskingdomcuts
          </a>{" "}
          for the latest.
        </p>
      </div>

      <div className="columns-2 gap-4 md:columns-3 lg:columns-3">
        {photos.map((p, i) => (
          <div
            key={i}
            className="mb-4 break-inside-avoid overflow-hidden rounded-xl border border-border transition hover:border-primary/60 hover:shadow-gold"
          >
            <img
              src={p.src}
              alt={p.alt}
              width={800}
              height={1000}
              loading="lazy"
              className="h-auto w-full object-cover transition duration-700 hover:scale-[1.03]"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
