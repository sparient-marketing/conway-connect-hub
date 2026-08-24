import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  CreditCard,
  FileText,
  Megaphone,
  Briefcase,
  CalendarDays,
  ShieldCheck,
  Building2,
  TreePine,
  Droplets,
  Flame,
  Landmark,
  Scale,
  Bus,
  Library,
  ArrowRight,
  Search,
  Sparkles,
  PlayCircle,
  MapPin,
  X,
  AlertTriangle,
  Mail,
  Facebook,
  Instagram,
  Youtube,
} from "lucide-react";
import heroImage from "@/assets/conway-riverwalk.jpg";
import eventMarket from "@/assets/event-market.jpg";
import eventHalloween from "@/assets/event-halloween.jpg";
import eventCouncil from "@/assets/event-council.jpg";
import mapTeaser from "@/assets/map-teaser.jpg";
import mayorPhoto from "@/assets/mayor.jpg";
import prideUniversity from "@/assets/pride-university.jpg";
import prideMural from "@/assets/pride-mural.jpg";
import prideRiver from "@/assets/pride-river.jpg";
import { Button } from "@/components/ui/button";
import { Pill } from "@/components/site/PageHeader";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "City of Conway, SC — Official City Website" },
      {
        name: "description",
        content:
          "Pay a bill, apply for a permit, report an issue, view council agendas, and find events in Conway, South Carolina — a historic river town since 1732.",
      },
      { property: "og:title", content: "City of Conway, SC — Official City Website" },
      {
        property: "og:description",
        content:
          "City services, council agendas, permits, and signature events in historic Conway, South Carolina.",
      },
    ],
  }),
  component: Home,
});

const quickActions = [
  { label: "Pay Utility Bill", desc: "Water, sewer & sanitation", Icon: CreditCard, to: "/i-want-to" },
  { label: "Report a Problem", desc: "Potholes, outages, code", Icon: Megaphone, to: "/i-want-to" },
  { label: "Apply for a Permit", desc: "Building & business", Icon: FileText, to: "/business" },
  { label: "Agendas & Minutes", desc: "Council and boards", Icon: CalendarDays, to: "/government" },
  { label: "Employment", desc: "Current city openings", Icon: Briefcase, to: "/i-want-to" },
] as const;

const homeAlerts = [
  {
    id: "boil",
    severity: "warning" as const,
    label: "Advisory",
    text: "Fourth Avenue water main repair — brief service interruptions Tuesday, 9am–2pm.",
  },
];

const eventCategories = ["All", "Halloween", "Christmas in Conway", "Community", "Government Meetings"] as const;
type Category = (typeof eventCategories)[number];

const featuredEvents = [
  {
    title: "Rivertown Farmers Market",
    date: "Saturday, September 5",
    category: "Community" as Category,
    image: eventMarket,
    alt: "Produce stalls along the Conway Riverwalk on a sunny market morning",
    to: "/visitors" as const,
    seasonal: false,
  },
  {
    title: "City of Halloween Kickoff",
    date: "Friday, October 3",
    category: "Halloween" as Category,
    image: eventHalloween,
    alt: "Historic downtown street decorated with pumpkins and string lights at dusk",
    to: "/visitors/halloween" as const,
    seasonal: true,
  },
  {
    title: "City Council Regular Meeting",
    date: "Monday, September 12",
    category: "Government Meetings" as Category,
    image: eventCouncil,
    alt: "Conway City Council chamber with wooden dais and flags",
    to: "/government" as const,
    seasonal: false,
  },
];

const news = [
  {
    tag: "Public Notice",
    Icon: Landmark,
    date: "August 21, 2026",
    title: "Council adopts FY2027 budget with no millage increase",
    excerpt:
      "The adopted budget funds two new fire apparatus, riverwalk repairs, and expanded curbside recycling.",
  },
  {
    tag: "Public Works",
    Icon: Building2,
    date: "August 18, 2026",
    title: "Main Street resurfacing begins September 8",
    excerpt:
      "Expect lane shifts between 4th and 9th Avenue on weekdays. Business access will be maintained.",
  },
  {
    tag: "Water & Sewer",
    Icon: Droplets,
    date: "August 12, 2026",
    title: "Annual water quality report now available",
    excerpt:
      "Conway's drinking water met or exceeded every state and federal standard for the 14th year running.",
  },
];

const mapPins = [
  { label: "City Hall", top: "38%", left: "22%" },
  { label: "Riverwalk", top: "63%", left: "44%" },
  { label: "Downtown", top: "28%", left: "52%" },
  { label: "Event Grounds", top: "55%", left: "72%" },
];

const departments = [
  { label: "Administration", Icon: Landmark, to: "/departments" },
  { label: "Fire Department", Icon: Flame, to: "/departments/fire" },
  { label: "Police Department", Icon: ShieldCheck, to: "/departments/police" },
  { label: "Public Works", Icon: Building2, to: "/departments" },
  { label: "Parks & Recreation", Icon: TreePine, to: "/departments/parks-recreation" },
  { label: "Water & Sewer", Icon: Droplets, to: "/departments" },
  { label: "Planning & Zoning", Icon: FileText, to: "/departments" },
  { label: "Municipal Court", Icon: Scale, to: "/departments" },
  { label: "Transit & Parking", Icon: Bus, to: "/departments" },
  { label: "Library Services", Icon: Library, to: "/departments" },
  { label: "Finance", Icon: CreditCard, to: "/departments/finance" },
  { label: "Human Resources", Icon: Briefcase, to: "/departments" },
];

const prideImages = [
  { src: prideUniversity, alt: "Coastal Carolina University campus quad on a sunny afternoon", caption: "Coastal Carolina University" },
  { src: prideMural, alt: "Colorful mural painted on a historic brick wall downtown", caption: "Downtown murals" },
  { src: prideRiver, alt: "Kayakers on the Waccamaw River at sunset beneath cypress trees", caption: "Waccamaw River" },
];

function Home() {
  const [category, setCategory] = useState<Category>("All");
  const [dismissed, setDismissed] = useState<string[]>([]);
  const alerts = homeAlerts.filter((a) => !dismissed.includes(a.id));
  const visibleEvents =
    category === "All" ? featuredEvents : featuredEvents.filter((e) => e.category === category);

  return (
    <>
      {/* 1. Hero */}
      <section className="relative isolate overflow-hidden" aria-labelledby="hero-heading">
        {/* Split panels: civic (left/top) + destination (right/bottom) */}
        <div className="absolute inset-0 -z-10" aria-hidden="true">
          <img
            src={heroCivic}
            alt=""
            width={1280}
            height={1280}
            className="absolute inset-0 size-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary-deep/90 via-primary-deep/80 to-primary/70 md:bg-gradient-to-r" />
          <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent_38%,black_62%)] md:[mask-image:linear-gradient(100deg,transparent_40%,black_60%)]">
            <img
              src={heroFestive}
              alt=""
              width={1280}
              height={1280}
              className="absolute inset-0 size-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-primary-deep/85 to-primary-deep/80 mix-blend-multiply md:bg-gradient-to-l" />
            <div className="absolute inset-0 bg-[var(--halloween)] opacity-25 mix-blend-soft-light" />
          </div>
          {/* Skyline silhouette bridging the seam */}
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="absolute inset-x-0 bottom-0 h-24 w-full text-primary-foreground opacity-[0.10] md:h-32"
            fill="currentColor"
          >
            <path d="M0 120V96h60l14-14 14 14h52V70h30V52h14l10-22 10 22h14v18h30v26h70V64l40-30 40 30v56h64V78h34l12-18 12 18h34v42h72V58h26V36h12l12-20 12 20h12v22h26v62h74V88h52l16-16 16 16h52v32h58V72h30V54h20v18h30v48h74V96h48l18-18 18 18h44v24z" />
          </svg>
        </div>
        <div className="container-civic py-20 md:py-28">
          <div className="mx-auto max-w-2xl text-center">

            <h1 id="hero-heading" className="text-primary-foreground">
              Welcome to Conway
            </h1>
            <p className="mt-3 font-display text-xl text-primary-foreground/90">
              Historic Rivertown · Est. 1732
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" variant="secondary">
                <Link to="/visitors">Explore the City</Link>
              </Button>
              <Button asChild size="lg" variant="onDark">
                <Link to="/government">
                  <PlayCircle aria-hidden="true" className="size-5" />
                  Watch Our Story
                </Link>
              </Button>
            </div>

            {/* Embedded AI search */}
            <form
              className="mt-10 rounded-xl bg-background p-2 shadow-card"
              onSubmit={(e) => e.preventDefault()}
              role="search"
            >
              <label htmlFor="hero-search" className="sr-only">
                Ask a question or search Conway city services
              </label>
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
                <div className="flex min-w-0 flex-1 items-center gap-2 px-3">
                  <Sparkles aria-hidden="true" className="size-5 shrink-0 text-secondary" />
                  <input
                    id="hero-search"
                    type="search"
                    placeholder="Ask a question or search for a service, form, or event..."
                    className="min-w-0 flex-1 bg-transparent py-3 text-base text-foreground outline-none placeholder:text-muted-foreground"
                  />
                </div>
                <Button type="submit" size="lg" className="sm:w-auto">
                  <Search aria-hidden="true" className="size-4" />
                  Search
                </Button>
              </div>
            </form>
            <p className="mt-2 text-sm text-primary-foreground/80">
              Try: “When is my trash picked up?” or “How do I get a business license?”
            </p>
          </div>
        </div>
      </section>

      {/* 2. Quick actions */}
      <section className="bg-background py-10" aria-labelledby="quick-heading">
        <div className="container-civic">
          <h2 id="quick-heading" className="sr-only">
            Quick actions
          </h2>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {quickActions.map(({ label, desc, Icon, to }) => (
              <li key={label}>
                <Link
                  to={to}
                  className="flex h-full flex-col gap-3 rounded-lg border-2 border-border bg-card p-5 shadow-card transition-colors hover:border-primary hover:bg-accent"
                >
                  <span className="grid size-11 place-items-center rounded-md bg-primary text-primary-foreground">
                    <Icon aria-hidden="true" className="size-5" />
                  </span>
                  <span className="font-display text-lg font-semibold leading-tight">{label}</span>
                  <span className="text-sm text-muted-foreground">{desc}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 3. Alerts & notices strip */}
      {alerts.length > 0 && (
        <section className="pb-4" aria-label="Active alerts and notices">
          <div className="container-civic space-y-2">
            {alerts.map((a) => (
              <div
                key={a.id}
                className="flex items-start gap-3 rounded-lg border-l-4 border-secondary bg-muted px-4 py-3"
              >
                <AlertTriangle aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-secondary" />
                <p className="min-w-0 flex-1 text-sm">
                  <span className="font-semibold">{a.label}: </span>
                  {a.text}
                </p>
                <button
                  type="button"
                  onClick={() => setDismissed((d) => [...d, a.id])}
                  className="shrink-0 rounded p-1 text-muted-foreground hover:bg-background hover:text-foreground"
                  aria-label={`Dismiss alert: ${a.label}`}
                >
                  <X aria-hidden="true" className="size-4" />
                </button>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 4. Featured events */}
      <section className="section-pad bg-muted" aria-labelledby="events-heading">
        <div className="container-civic">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow text-secondary">City calendar</p>
              <h2 id="events-heading" className="mt-2">
                Featured events
              </h2>
            </div>
            <Link
              to="/visitors"
              className="inline-flex items-center gap-1 font-semibold text-primary underline underline-offset-4"
            >
              View full calendar <ArrowRight aria-hidden="true" className="size-4" />
            </Link>
          </div>

          <div className="mt-6 flex flex-wrap gap-2" role="group" aria-label="Filter events by category">
            {eventCategories.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setCategory(c)}
                aria-pressed={category === c}
                className={`rounded-full border px-4 py-1.5 text-sm font-semibold transition-colors ${
                  category === c
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-card text-foreground hover:border-primary"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          {visibleEvents.length === 0 ? (
            <p className="mt-8 text-muted-foreground">
              No events in this category right now — check the full calendar.
            </p>
          ) : (
            <ul className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {visibleEvents.map((e) => (
                <li key={e.title}>
                  <article
                    className={`flex h-full flex-col overflow-hidden rounded-xl border bg-card shadow-card ${
                      e.seasonal ? "border-halloween/60" : "border-border"
                    }`}
                  >
                    <img
                      src={e.image}
                      alt={e.alt}
                      loading="lazy"
                      width={1024}
                      height={640}
                      className="h-44 w-full object-cover"
                    />
                    <div className="flex flex-1 flex-col p-6">
                      <div className="flex flex-wrap items-center gap-3">
                        {e.seasonal ? (
                          <span className="rounded-full bg-halloween/15 px-3 py-1 text-xs font-bold uppercase tracking-wide text-halloween">
                            {e.category}
                          </span>
                        ) : (
                          <Pill tone="tan">{e.category}</Pill>
                        )}
                        <span className="text-sm text-muted-foreground">{e.date}</span>
                      </div>
                      <h3 className="mt-3 text-xl">{e.title}</h3>
                      <Link
                        to={e.to}
                        className="mt-4 inline-flex items-center gap-1 font-semibold text-primary underline underline-offset-4"
                      >
                        See details
                        <ArrowRight aria-hidden="true" className="size-4" />
                        <span className="sr-only"> about {e.title}</span>
                      </Link>
                    </div>
                  </article>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      {/* 5. Latest news */}
      <section className="section-pad bg-background" aria-labelledby="news-heading">
        <div className="container-civic">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 id="news-heading">Latest news</h2>
            <Link
              to="/residents"
              className="inline-flex items-center gap-1 font-semibold text-primary underline underline-offset-4"
            >
              All news &amp; notices <ArrowRight aria-hidden="true" className="size-4" />
            </Link>
          </div>
          <ul className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {news.map(({ tag, Icon, date, title, excerpt }) => (
              <li key={title}>
                <article className="relative flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card p-6 shadow-card">
                  <Icon
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-4 -top-4 size-24 text-primary/5"
                  />
                  <div className="flex flex-wrap items-center gap-3">
                    <Pill tone="green">{tag}</Pill>
                    <span className="text-sm text-muted-foreground">{date}</span>
                  </div>
                  <h3 className="mt-3 text-xl">{title}</h3>
                  <p className="mt-2 flex-1 text-muted-foreground">{excerpt}</p>
                  <Link
                    to="/residents"
                    className="mt-4 inline-flex items-center gap-1 font-semibold text-primary underline underline-offset-4"
                  >
                    Read more<span className="sr-only"> about {title}</span>
                    <ArrowRight aria-hidden="true" className="size-4" />
                  </Link>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 6. Interactive map teaser */}
      <section className="section-pad bg-muted" aria-labelledby="map-heading">
        <div className="container-civic grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:items-center">
          <div>
            <p className="eyebrow text-secondary">Find your way</p>
            <h2 id="map-heading" className="mt-2">
              Explore Conway on the interactive map
            </h2>
            <p className="mt-4 text-muted-foreground">
              Layers for parking, road closures, public restrooms, parks, attractions, and event
              footprints — all in one place.
            </p>
            <ul className="mt-6 grid gap-2 sm:grid-cols-2">
              {["Parking & garages", "Road closures", "Public restrooms", "Parks & attractions"].map(
                (l) => (
                  <li key={l} className="flex items-center gap-2 text-sm">
                    <MapPin aria-hidden="true" className="size-4 text-primary" />
                    {l}
                  </li>
                ),
              )}
            </ul>
            <Button asChild size="lg" className="mt-8">
              <Link to="/visitors">Explore the interactive map</Link>
            </Button>
          </div>
          <div className="relative overflow-hidden rounded-xl border border-border shadow-card">
            <img
              src={mapTeaser}
              alt="Stylized map of Conway showing downtown streets, parks, and the Waccamaw River"
              loading="lazy"
              width={1280}
              height={800}
              className="w-full object-cover"
            />
            {mapPins.map((p) => (
              <span
                key={p.label}
                className="absolute -translate-x-1/2 -translate-y-full"
                style={{ top: p.top, left: p.left }}
              >
                <span className="flex items-center gap-1 rounded-full bg-primary px-2.5 py-1 text-xs font-semibold text-primary-foreground shadow-card">
                  <MapPin aria-hidden="true" className="size-3.5" />
                  {p.label}
                </span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Departments grid */}
      <section className="section-pad bg-background" aria-labelledby="depts-heading">
        <div className="container-civic">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 id="depts-heading">City departments</h2>
              <p className="mt-3 max-w-xl text-muted-foreground">
                Staff directories, hours, services, and contacts for every department.
              </p>
            </div>
            <Button asChild variant="outline">
              <Link to="/departments">All departments</Link>
            </Button>
          </div>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {departments.map(({ label, Icon, to }) => (
              <li key={label}>
                <Link
                  to={to}
                  className="flex h-full items-center gap-3 rounded-lg border border-border bg-card p-5 shadow-card transition-colors hover:border-secondary hover:bg-accent"
                >
                  <Icon aria-hidden="true" className="size-6 shrink-0 text-secondary" />
                  <span className="font-display text-base font-semibold">{label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 8. Mayor's welcome */}
      <section className="bg-accent py-14" aria-labelledby="mayor-heading">
        <div className="container-civic">
          <div className="grid gap-6 rounded-xl border border-border bg-card p-6 shadow-card sm:grid-cols-[auto_minmax(0,1fr)] sm:items-center md:p-8">
            <img
              src={mayorPhoto}
              alt="Mayor of Conway standing in front of City Hall"
              loading="lazy"
              width={800}
              height={800}
              className="size-28 rounded-full object-cover sm:size-32"
            />
            <div className="min-w-0">
              <h2 id="mayor-heading" className="text-2xl">
                A welcome from the Mayor
              </h2>
              <blockquote className="mt-3 text-muted-foreground">
                “Conway has been a river town for nearly three centuries. Whether you've lived here
                your whole life or you're visiting for the first time, our job is to make city
                services simple and our downtown welcoming.”
              </blockquote>
              <p className="mt-3 font-semibold">
                Barbara Blain-Bellamy
                <span className="block text-sm font-normal text-muted-foreground">
                  Mayor, City of Conway
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Community pride */}
      <section className="section-pad bg-background" aria-labelledby="pride-heading">
        <div className="container-civic">
          <p className="eyebrow text-secondary">Community pride</p>
          <h2 id="pride-heading" className="mt-2">
            A destination worth the drive
          </h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-3">
            {prideImages.map((p) => (
              <li key={p.caption} className="overflow-hidden rounded-xl border border-border shadow-card">
                <figure>
                  <img
                    src={p.src}
                    alt={p.alt}
                    loading="lazy"
                    width={800}
                    height={1000}
                    className="h-64 w-full object-cover"
                  />
                  <figcaption className="bg-card px-4 py-3 font-display font-semibold">
                    {p.caption}
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 10. Newsletter / stay connected */}
      <section className="bg-primary text-primary-foreground" aria-labelledby="signup-heading">
        <div className="container-civic grid gap-8 py-14 md:grid-cols-2 md:items-center">
          <div>
            <h2 id="signup-heading" className="text-primary-foreground">
              Stay connected
            </h2>
            <p className="mt-3 text-primary-foreground/90">
              City news, council agendas, and event announcements in your inbox — no more than twice
              a month.
            </p>
            <div className="mt-5 flex gap-3">
              {[
                { Icon: Facebook, label: "Conway on Facebook" },
                { Icon: Instagram, label: "Conway on Instagram" },
                { Icon: Youtube, label: "Conway on YouTube" },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="https://www.cityofconway.com"
                  aria-label={label}
                  className="grid size-11 place-items-center rounded-md border border-primary-foreground/40 transition-colors hover:bg-primary-foreground/10"
                >
                  <Icon aria-hidden="true" className="size-5" />
                </a>
              ))}
            </div>
          </div>
          <form className="md:justify-self-end md:w-full" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="newsletter-email" className="block font-semibold">
              Email address
            </label>
            <div className="mt-2 flex flex-col gap-3 sm:flex-row">
              <div className="flex min-w-0 flex-1 items-center gap-2 rounded-md bg-background px-3">
                <Mail aria-hidden="true" className="size-4 shrink-0 text-muted-foreground" />
                <input
                  id="newsletter-email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="min-w-0 flex-1 bg-transparent py-3 text-foreground outline-none placeholder:text-muted-foreground"
                />
              </div>
              <Button type="submit" size="lg" variant="secondary">
                Sign up
              </Button>
            </div>
            <p className="mt-2 text-sm text-primary-foreground/80">
              We never sell your information. Unsubscribe anytime.
            </p>
          </form>
        </div>
      </section>
    </>
  );
}
