import { createFileRoute, Link } from "@tanstack/react-router";
import {
  CreditCard,
  FileText,
  Megaphone,
  Briefcase,
  CalendarDays,
  Trash2,
  Droplets,
  ShieldCheck,
  Building2,
  TreePine,
  ArrowRight,
} from "lucide-react";
import heroImage from "@/assets/conway-riverwalk.jpg";
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

const services = [
  { label: "Pay a Bill", desc: "Water, sewer & taxes", Icon: CreditCard, to: "/i-want-to" },
  { label: "Report an Issue", desc: "Potholes, outages, code", Icon: Megaphone, to: "/i-want-to" },
  { label: "Permits & Forms", desc: "Apply and track online", Icon: FileText, to: "/business" },
  { label: "Agendas & Minutes", desc: "Council and boards", Icon: CalendarDays, to: "/government" },
  { label: "Trash & Recycling", desc: "Pickup day lookup", Icon: Trash2, to: "/residents" },
  { label: "Jobs at the City", desc: "Current openings", Icon: Briefcase, to: "/i-want-to" },
];

const news = [
  {
    tag: "Public Notice",
    date: "August 21, 2026",
    title: "Council adopts FY2027 budget with no millage increase",
    excerpt:
      "The adopted budget funds two new fire apparatus, riverwalk repairs, and expanded curbside recycling.",
  },
  {
    tag: "Public Works",
    date: "August 18, 2026",
    title: "Main Street resurfacing begins September 8",
    excerpt:
      "Expect lane shifts between 4th and 9th Avenue on weekdays. Business access will be maintained.",
  },
  {
    tag: "Water & Sewer",
    date: "August 12, 2026",
    title: "Annual water quality report now available",
    excerpt:
      "Conway's drinking water met or exceeded every state and federal standard for the 14th year running.",
  },
];

const events = [
  { date: "SEP 5", title: "Rivertown Farmers Market", where: "Conway Riverwalk", tone: "tan" as const },
  { date: "SEP 12", title: "City Council Regular Meeting", where: "City Hall Chambers", tone: "green" as const },
  { date: "OCT 3", title: "City of Halloween Kickoff", where: "Downtown Conway", tone: "tan" as const },
  { date: "DEC 5", title: "Christmas in Conway Parade", where: "Main Street", tone: "green" as const },
];

const departments = [
  { label: "Police Department", Icon: ShieldCheck },
  { label: "Public Works", Icon: Building2 },
  { label: "Water & Sewer", Icon: Droplets },
  { label: "Parks & Recreation", Icon: TreePine },
];

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate">
        <img
          src={heroImage}
          alt="The Conway Riverwalk at golden hour, with cypress trees along the Waccamaw River and historic brick storefronts downtown"
          width={1920}
          height={1080}
          className="absolute inset-0 -z-10 size-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-primary-deep/80" aria-hidden="true" />
        <div className="container-civic py-20 md:py-28">
          <div className="max-w-2xl">
            <p className="eyebrow text-primary-foreground/80">Historic river town since 1732</p>
            <h1 className="mt-3 text-primary-foreground">
              City services, made simple for every Conway resident
            </h1>
            <p className="mt-5 text-lg text-primary-foreground/90">
              Pay a bill, pull a permit, report a problem, or catch up on council business — plus
              everything happening along the Waccamaw this season.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link to="/i-want-to">Pay a bill</Link>
              </Button>
              <Button asChild size="lg" variant="onDark">
                <Link to="/visitors">Explore events</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick services */}
      <section className="section-pad bg-background" aria-labelledby="services-heading">
        <div className="container-civic">
          <h2 id="services-heading">Popular city services</h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            The six things residents ask for most — no digging through menus.
          </p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map(({ label, desc, Icon, to }) => (
              <li key={label}>
                <Link
                  to={to}
                  className="flex h-full items-start gap-4 rounded-lg border border-border bg-card p-5 shadow-card transition-colors hover:border-primary hover:bg-muted"
                >
                  <span className="grid size-11 shrink-0 place-items-center rounded-md bg-primary/10 text-primary">
                    <Icon aria-hidden="true" className="size-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block font-display text-lg font-semibold text-foreground">
                      {label}
                    </span>
                    <span className="block text-sm text-muted-foreground">{desc}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* News + events */}
      <section className="section-pad bg-muted" aria-labelledby="news-heading">
        <div className="container-civic grid gap-12 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
          <div>
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h2 id="news-heading">City news &amp; notices</h2>
              <Link
                to="/residents"
                className="inline-flex items-center gap-1 font-semibold text-primary underline underline-offset-4"
              >
                All notices <ArrowRight aria-hidden="true" className="size-4" />
              </Link>
            </div>
            <ul className="mt-6 space-y-4">
              {news.map((n) => (
                <li key={n.title}>
                  <article className="rounded-lg border border-border bg-card p-6 shadow-card">
                    <div className="flex flex-wrap items-center gap-3">
                      <Pill tone="tan">{n.tag}</Pill>
                      <span className="text-sm text-muted-foreground">{n.date}</span>
                    </div>
                    <h3 className="mt-3 text-xl">
                      <Link to="/residents" className="underline-offset-4 hover:underline">
                        {n.title}
                      </Link>
                    </h3>
                    <p className="mt-2 text-muted-foreground">{n.excerpt}</p>
                  </article>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl">Upcoming</h2>
            <ul className="mt-6 space-y-3">
              {events.map((e) => (
                <li key={e.title}>
                  <Link
                    to="/visitors"
                    className="flex items-center gap-4 rounded-lg border border-border bg-card p-4 shadow-card transition-colors hover:border-primary"
                  >
                    <span className="grid w-16 shrink-0 place-items-center rounded-md bg-primary px-2 py-2 text-center text-sm font-bold text-primary-foreground">
                      {e.date}
                    </span>
                    <span className="min-w-0">
                      <span className="block font-semibold">{e.title}</span>
                      <span className="block text-sm text-muted-foreground">{e.where}</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            <Button asChild variant="outline" className="mt-5 w-full">
              <Link to="/visitors">Full event calendar</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="section-pad bg-background" aria-labelledby="depts-heading">
        <div className="container-civic">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 id="depts-heading">Departments</h2>
              <p className="mt-3 max-w-xl text-muted-foreground">
                Twelve departments keep Conway running. Find staff directories, hours, and services.
              </p>
            </div>
            <Button asChild variant="outline">
              <Link to="/departments">All departments</Link>
            </Button>
          </div>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {departments.map(({ label, Icon }) => (
              <li key={label}>
                <Link
                  to="/departments"
                  className="flex h-full flex-col gap-3 rounded-lg border border-border bg-card p-6 shadow-card transition-colors hover:border-secondary"
                >
                  <Icon aria-hidden="true" className="size-6 text-secondary" />
                  <span className="font-display text-lg font-semibold">{label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Visitor bridge */}
      <section className="bg-primary text-primary-foreground" aria-labelledby="visit-heading">
        <div className="container-civic grid gap-8 py-16 md:grid-cols-2 md:items-center">
          <div>
            <p className="eyebrow text-primary-foreground/80">Visiting Conway</p>
            <h2 id="visit-heading" className="mt-2 text-primary-foreground">
              The City of Halloween. Christmas in Conway. And a riverwalk in between.
            </h2>
            <p className="mt-4 text-primary-foreground/90">
              Two signature seasons, a walkable historic downtown, and Coastal Carolina University
              right up the road.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 md:justify-end">
            <Button asChild variant="secondary" size="lg">
              <Link to="/visitors/halloween">City of Halloween</Link>
            </Button>
            <Button asChild variant="onDark" size="lg">
              <Link to="/visitors/christmas">Christmas in Conway</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
