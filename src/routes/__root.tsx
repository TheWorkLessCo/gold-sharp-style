import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <SiteLayout>
      <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
        <h1 className="text-gold-gradient text-7xl font-bold">404</h1>
        <h2 className="mt-4 font-display text-2xl">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">This page took a different route.</p>
        <Link
          to="/"
          className="mt-6 inline-flex items-center justify-center rounded-md bg-gold-gradient px-6 py-3 text-sm font-semibold text-primary-foreground shadow-gold transition hover:opacity-90"
        >
          Go home
        </Link>
      </div>
    </SiteLayout>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "A Son To Us — Kingdom Cuts | DFW Mobile Barber" },
      {
        name: "description",
        content:
          "Premium mobile barber serving Dallas, Fort Worth & surrounding areas. Haircuts, beard trims, shaves — we come to you. Call 214-854-1477.",
      },
      { name: "author", content: "A Son To Us — Kingdom Cuts" },
      { property: "og:title", content: "A Son To Us — Kingdom Cuts | DFW Mobile Barber" },
      {
        property: "og:description",
        content: "Premium mobile barber serving all of DFW. Call 214-854-1477.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700;800;900&family=Inter:wght@400;500;600;700&display=swap",
      },
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <SiteLayout>
      <Outlet />
    </SiteLayout>
  );
}

const PHONE = "214-854-1477";
const PHONE_TEL = "+12148541477";

function CrownIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M3 8l4 3 5-7 5 7 4-3-2 11H5L3 8zm3 13h12v1.5H6V21z" />
    </svg>
  );
}

function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col pb-16 md:pb-0">
      <header className="sticky top-0 z-40 border-b border-border/50 bg-background/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">
          <Link to="/" className="flex items-center gap-2 group" aria-label="A Son To Us — Kingdom Cuts">
            <CrownIcon className="h-6 w-6 text-primary transition group-hover:scale-110" />
            <span className="font-display text-lg font-bold tracking-tight">
              A Son To Us <span className="text-gold-gradient">Kingdom Cuts</span>
            </span>
          </Link>
          <nav className="hidden items-center gap-7 md:flex">
            <Link to="/" activeProps={{ className: "text-primary" }} activeOptions={{ exact: true }} className="text-sm font-medium text-foreground/80 transition hover:text-primary">Home</Link>
            <Link to="/services" activeProps={{ className: "text-primary" }} className="text-sm font-medium text-foreground/80 transition hover:text-primary">Services</Link>
            <Link to="/gallery" activeProps={{ className: "text-primary" }} className="text-sm font-medium text-foreground/80 transition hover:text-primary">Gallery</Link>
            <Link to="/about" activeProps={{ className: "text-primary" }} className="text-sm font-medium text-foreground/80 transition hover:text-primary">About</Link>
            <Link to="/book" activeProps={{ className: "text-primary" }} className="text-sm font-medium text-foreground/80 transition hover:text-primary">Book</Link>
            <a
              href={`tel:${PHONE_TEL}`}
              className="ml-2 inline-flex items-center gap-2 rounded-md bg-gold-gradient px-4 py-2 text-sm font-semibold text-primary-foreground shadow-gold transition hover:opacity-90"
            >
              📞 {PHONE}
            </a>
          </nav>
        </div>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="border-t border-border/50 bg-background/60">
        <div className="mx-auto max-w-7xl px-4 py-12 md:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <div className="flex items-center gap-2">
                <CrownIcon className="h-6 w-6 text-primary" />
                <span className="font-display text-base font-bold">
                  A Son To Us <span className="text-gold-gradient">Kingdom Cuts</span>
                </span>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">
                DFW's premium mobile barber experience. We bring the chair to you.
              </p>
            </div>
            <div className="text-sm">
              <h3 className="font-display text-base font-semibold text-primary">Contact</h3>
              <ul className="mt-3 space-y-2 text-muted-foreground">
                <li>
                  <a href={`tel:${PHONE_TEL}`} className="hover:text-primary">📞 {PHONE}</a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/asontouskingdomcuts/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 hover:text-primary"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
                      <path d="M12 2.2c3.2 0 3.6 0 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.25.07 1.62.07 4.85s0 3.6-.07 4.85c-.05 1.17-.25 1.8-.41 2.23a3.7 3.7 0 0 1-.9 1.38 3.7 3.7 0 0 1-1.38.9c-.42.16-1.06.36-2.23.41-1.25.06-1.62.07-4.85.07s-3.6 0-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.2 15.6 2.2 15.23 2.2 12s0-3.6.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.4 2.2 8.77 2.2 12 2.2zm0 1.8c-3.17 0-3.5 0-4.74.07-.99.05-1.53.21-1.89.35-.47.18-.81.4-1.16.76-.36.35-.58.69-.76 1.16-.14.36-.3.9-.35 1.89C3.04 8.5 3 8.83 3 12s0 3.5.07 4.74c.05.99.21 1.53.35 1.89.18.47.4.81.76 1.16.35.36.69.58 1.16.76.36.14.9.3 1.89.35C8.5 20.97 8.83 21 12 21s3.5 0 4.74-.07c.99-.05 1.53-.21 1.89-.35.47-.18.81-.4 1.16-.76.36-.35.58-.69.76-1.16.14-.36.3-.9.35-1.89.07-1.24.07-1.57.07-4.74s0-3.5-.07-4.74c-.05-.99-.21-1.53-.35-1.89a3.13 3.13 0 0 0-.76-1.16 3.13 3.13 0 0 0-1.16-.76c-.36-.14-.9-.3-1.89-.35C15.5 4.04 15.17 4 12 4zm0 3.05a4.95 4.95 0 1 1 0 9.9 4.95 4.95 0 0 1 0-9.9zm0 1.8a3.15 3.15 0 1 0 0 6.3 3.15 3.15 0 0 0 0-6.3zm5.15-2.04a1.16 1.16 0 1 1 0 2.32 1.16 1.16 0 0 1 0-2.32z"/>
                    </svg>
                    @asontouskingdomcuts
                  </a>
                </li>
                <li>📍 Dallas, TX & surrounding areas</li>
              </ul>
            </div>
            <div className="text-sm">
              <h3 className="font-display text-base font-semibold text-primary">Faith</h3>
              <p className="mt-3 italic text-muted-foreground">
                "Whatever you do, work at it with all your heart, as working for the Lord, not for human masters."
              </p>
              <p className="mt-1 text-xs text-muted-foreground/80">— Colossians 3:23</p>
            </div>
          </div>
          <div className="mt-10 border-t border-border/40 pt-6 text-center text-xs text-muted-foreground">
            © {new Date().getFullYear()} A Son To Us — Kingdom Cuts. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Mobile sticky call bar */}
      <a
        href={`tel:${PHONE_TEL}`}
        className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-center gap-2 bg-gold-gradient py-3 text-sm font-bold text-primary-foreground shadow-gold md:hidden"
      >
        📞 Call Now — {PHONE}
      </a>
    </div>
  );
}
