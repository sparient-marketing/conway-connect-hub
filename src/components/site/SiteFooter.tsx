import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Youtube, MapPin, Phone, Mail, Apple, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import conwayLogo from "@/assets/conway-logo.png.asset.json";

const quickLinks = [
  { label: "Departments", to: "/departments" },
  { label: "Agendas & Minutes", to: "/government" },
  { label: "Ordinances", to: "/government" },
  { label: "Employment", to: "/i-want-to" },
];

const resources = [
  { label: "Forms", to: "/i-want-to" },
  { label: "FAQs", to: "/residents" },
  { label: "Public Notices", to: "/residents" },
  { label: "GIS Data", to: "/business" },
  { label: "Procurement", to: "/business" },
];

export function SiteFooter() {
  return (
    <footer className="mt-auto bg-primary text-primary-foreground">
      <div className="container-civic grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="inline-flex rounded-lg bg-background p-3">
            <img
              src={conwayLogo.url}
              alt="City of Conway, South Carolina"
              width={599}
              height={333}
              loading="lazy"
              className="h-16 w-auto"
            />
          </div>
          <address className="mt-4 space-y-2 text-sm not-italic text-primary-foreground/90">
            <span className="flex gap-2">
              <MapPin aria-hidden="true" className="mt-0.5 size-4 shrink-0" />
              229 Main Street, Conway, SC 29526
            </span>
            <span className="flex gap-2">
              <Phone aria-hidden="true" className="mt-0.5 size-4 shrink-0" />
              <a href="tel:+18432482920" className="underline underline-offset-4">
                (843) 248-2920
              </a>
            </span>
            <span className="flex gap-2">
              <Mail aria-hidden="true" className="mt-0.5 size-4 shrink-0" />
              <a href="mailto:info@conwaysc.gov" className="underline underline-offset-4">
                info@conwaysc.gov
              </a>
            </span>
          </address>
          <p className="mt-4 text-sm text-primary-foreground/80">
            City Hall hours: Mon–Fri, 8:00 a.m. – 5:00 p.m.
          </p>
        </div>

        <nav aria-label="Quick links">
          <h2 className="font-display text-lg text-primary-foreground">Quick Links</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {quickLinks.map((l) => (
              <li key={l.label}>
                <Link to={l.to} className="text-primary-foreground/90 underline-offset-4 hover:underline">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Resources">
          <h2 className="font-display text-lg text-primary-foreground">Resources</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {resources.map((l) => (
              <li key={l.label}>
                <Link to={l.to} className="text-primary-foreground/90 underline-offset-4 hover:underline">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="font-display text-lg text-primary-foreground">Connect</h2>
          <ul className="mt-4 flex gap-2">
            {[
              { Icon: Facebook, label: "Conway on Facebook" },
              { Icon: Instagram, label: "Conway on Instagram" },
              { Icon: Youtube, label: "Conway on YouTube" },
            ].map(({ Icon, label }) => (
              <li key={label}>
                <a
                  href="#"
                  aria-label={label}
                  className="grid size-11 place-items-center rounded-md border border-primary-foreground/40 transition-colors hover:bg-primary-foreground/15"
                >
                  <Icon aria-hidden="true" className="size-5" />
                </a>
              </li>
            ))}
          </ul>

          <form
            className="mt-5"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <label htmlFor="newsletter" className="block text-sm font-semibold">
              City newsletter
            </label>
            <div className="mt-2 flex gap-2">
              <input
                id="newsletter"
                type="email"
                required
                placeholder="you@example.com"
                className="h-11 w-full rounded-md border border-primary-foreground/40 bg-primary-deep px-3 text-sm text-primary-foreground placeholder:text-primary-foreground/60"
              />
              <Button type="submit" variant="secondary" size="sm" className="h-11 shrink-0">
                Sign up
              </Button>
            </div>
          </form>

          <p className="mt-5 text-sm font-semibold">Download our app</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {[
              { Icon: Apple, label: "App Store" },
              { Icon: Smartphone, label: "Google Play" },
            ].map(({ Icon, label }) => (
              <a
                key={label}
                href="#"
                className="inline-flex items-center gap-2 rounded-md border border-primary-foreground/40 px-3 py-2 text-xs font-semibold transition-colors hover:bg-primary-foreground/15"
              >
                <Icon aria-hidden="true" className="size-4" />
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/20">
        <div className="container-civic flex flex-wrap items-center justify-between gap-3 py-5 text-sm text-primary-foreground/85">
          <p>© {new Date().getFullYear()} City of Conway, South Carolina. All rights reserved.</p>
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            {["Accessibility Statement", "Privacy Policy", "Sitemap", "ADA Compliance"].map((l) => (
              <li key={l}>
                <a href="#" className="underline-offset-4 hover:underline">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
