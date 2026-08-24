import { useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  CalendarDays,
  MapPin,
  Clock,
  Ticket,
  Users,
  Megaphone,
  Camera,
  Info,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Breadcrumbs, Pill } from "@/components/site/PageHeader";
import mapTeaser from "@/assets/map-teaser.jpg";
import type { EventCategory, EventLanding, SeasonEvent } from "@/components/site/event-data";

const filters = ["All", "Family", "Downtown", "Ticketed", "Free"] as const;
type Filter = (typeof filters)[number];

const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

/** Seasonal accent is scoped to this wrapper only — never to header, footer, or nav. */
function accentStyle(accent: EventLanding["accent"]) {
  return { "--seasonal": `var(--${accent})` } as React.CSSProperties;
}

export function EventLandingPage({ data }: { data: EventLanding }) {
  const [filter, setFilter] = useState<Filter>("All");
  const [sort, setSort] = useState<"date" | "title">("date");
  const [location, setLocation] = useState("All");
  const [scope, setScope] = useState<"event" | "citywide">("event");

  const locations = useMemo(
    () => ["All", ...Array.from(new Set(data.events.map((e) => e.location)))],
    [data.events],
  );

  const seasonEvents = data.events.filter((e) => !e.citywide);

  const visible = useMemo(() => {
    let list: SeasonEvent[] = seasonEvents;
    if (filter !== "All") list = list.filter((e) => e.categories.includes(filter as EventCategory));
    if (location !== "All") list = list.filter((e) => e.location === location);
    return [...list].sort((a, b) =>
      sort === "date" ? a.day - b.day : a.title.localeCompare(b.title),
    );
  }, [seasonEvents, filter, location, sort]);

  const calendarEvents = scope === "event" ? seasonEvents : data.events;
  const byDay = useMemo(() => {
    const m = new Map<number, SeasonEvent[]>();
    for (const e of calendarEvents) m.set(e.day, [...(m.get(e.day) ?? []), e]);
    return m;
  }, [calendarEvents]);

  const cells: (number | null)[] = [
    ...Array.from({ length: data.calendar.firstWeekday }, () => null),
    ...Array.from({ length: data.calendar.daysInMonth }, (_, i) => i + 1),
  ];

  return (
    <div style={accentStyle(data.accent)}>
      {/* 1. Hero */}
      <section className="relative isolate" aria-labelledby="event-hero-heading">
        <img
          src={data.hero}
          alt={data.heroAlt}
          width={1920}
          height={1080}
          className="absolute inset-0 -z-10 size-full object-cover"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-gradient-to-r from-primary-deep/95 via-primary-deep/85 to-primary-deep/55"
        />
        <div className="container-civic py-16 md:py-24">
          <div className="[&_a]:text-primary-foreground/80 [&_span]:text-primary-foreground">
            <Breadcrumbs
              items={[{ label: "Visitors & Events", to: "/visitors" }, { label: data.crumbLabel }]}
            />
          </div>

          <div className="mt-8 max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-[var(--seasonal)] px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary-foreground">
              <Sparkles aria-hidden="true" className="size-3.5" />
              {data.eyebrow}
            </span>
            <div aria-hidden="true" className="mt-5 h-1 w-24 rounded-full bg-[var(--seasonal)]" />
            <h1 id="event-hero-heading" className="mt-5 text-primary-foreground">
              {data.title}
            </h1>
            <p className="mt-4 text-lg text-primary-foreground/90">{data.subhead}</p>

            {/* Featured countdown — same pattern as the alert banner, scaled up */}
            <div className="mt-8 inline-flex items-center gap-4 rounded-xl border-l-4 border-[var(--seasonal)] bg-background/95 px-5 py-4 shadow-card">
              <span className="grid size-14 shrink-0 place-items-center rounded-lg bg-[var(--seasonal)] font-display text-2xl font-bold text-primary-foreground">
                {data.countdown.days}
              </span>
              <span>
                <span className="block font-display text-xl font-semibold leading-tight">
                  {data.countdown.days} {data.countdown.label}
                </span>
                <span className="block text-sm text-muted-foreground">
                  Add it to your calendar and we'll remind you.
                </span>
              </span>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <a href="#full-schedule">View Full Schedule</a>
              </Button>
              <Button asChild size="lg" variant="onDark">
                <a href="#get-involved">Get Event Alerts</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Quick facts */}
      <section className="border-b border-border bg-background py-8" aria-labelledby="facts-heading">
        <div className="container-civic">
          <h2 id="facts-heading" className="sr-only">
            At a glance
          </h2>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {data.quickFacts.map((f) => (
              <li
                key={f.label}
                className="rounded-lg border border-border border-t-4 border-t-[var(--seasonal)] bg-card p-5 shadow-card"
              >
                <p className="eyebrow">{f.label}</p>
                <p className="mt-2 font-display text-2xl font-semibold">{f.value}</p>
                <p className="mt-1 text-sm text-muted-foreground">{f.note}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 3. Featured events this season */}
      <section id="full-schedule" className="section-pad bg-muted" aria-labelledby="season-events">
        <div className="container-civic">
          <p className="eyebrow">This season</p>
          <h2 id="season-events" className="mt-2">
            Featured events
          </h2>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            <div className="flex flex-wrap gap-2" role="group" aria-label="Filter events by category">
              {filters.map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => setFilter(c)}
                  aria-pressed={filter === c}
                  className={`rounded-full border px-4 py-1.5 text-sm font-semibold transition-colors ${
                    filter === c
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border bg-card text-foreground hover:border-primary"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-3 sm:ml-auto">
              <label className="text-sm font-semibold" htmlFor="event-location">
                Location
              </label>
              <select
                id="event-location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="h-10 rounded-md border border-input bg-card px-3 text-sm"
              >
                {locations.map((l) => (
                  <option key={l} value={l}>
                    {l}
                  </option>
                ))}
              </select>
              <label className="text-sm font-semibold" htmlFor="event-sort">
                Sort
              </label>
              <select
                id="event-sort"
                value={sort}
                onChange={(e) => setSort(e.target.value as "date" | "title")}
                className="h-10 rounded-md border border-input bg-card px-3 text-sm"
              >
                <option value="date">By date</option>
                <option value="title">By name</option>
              </select>
            </div>
          </div>

          {visible.length === 0 ? (
            <p className="mt-8 text-muted-foreground">
              No events match those filters — try clearing the location or category.
            </p>
          ) : (
            <ul className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {visible.map((e) => (
                <li key={e.title}>
                  <article className="flex h-full flex-col overflow-hidden rounded-xl border border-[var(--seasonal)]/40 bg-card shadow-card">
                    <img
                      src={e.image}
                      alt={e.alt}
                      loading="lazy"
                      width={1024}
                      height={640}
                      className="h-44 w-full object-cover"
                    />
                    <div className="flex flex-1 flex-col p-6">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="rounded-full bg-[var(--seasonal)]/12 px-3 py-1 text-xs font-bold uppercase tracking-wide text-[var(--seasonal)]">
                          {e.categories[0]}
                        </span>
                        <Pill tone="tan">{e.location}</Pill>
                      </div>
                      <h3 className="mt-3 text-xl">{e.title}</h3>
                      <p className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground">
                        <span className="inline-flex items-center gap-1.5">
                          <CalendarDays aria-hidden="true" className="size-4" />
                          {e.date}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <Clock aria-hidden="true" className="size-4" />
                          {e.time}
                        </span>
                      </p>
                      <Link
                        to="/visitors"
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

      {/* 4. Calendar */}
      <section className="section-pad bg-background" aria-labelledby="calendar-heading">
        <div className="container-civic">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow">Month view</p>
              <h2 id="calendar-heading" className="mt-2">
                {data.calendar.monthLabel} calendar
              </h2>
            </div>
            <div className="flex gap-2" role="group" aria-label="Calendar scope">
              {(
                [
                  ["event", `${data.title} only`],
                  ["citywide", "All citywide events"],
                ] as const
              ).map(([value, label]) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => setScope(value)}
                  aria-pressed={scope === value}
                  className={`rounded-full border px-4 py-1.5 text-sm font-semibold transition-colors ${
                    scope === value
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border bg-card text-foreground hover:border-primary"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8 overflow-hidden rounded-xl border border-border bg-card shadow-card">
            <div className="grid grid-cols-7 border-b border-border bg-muted">
              {weekdays.map((d) => (
                <div key={d} className="px-2 py-3 text-center text-xs font-bold uppercase tracking-wide text-muted-foreground">
                  <span aria-hidden="true">{d.slice(0, 1)}</span>
                  <span className="sr-only">{d}</span>
                  <span className="hidden sm:inline" aria-hidden="true">
                    {d.slice(1)}
                  </span>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-7">
              {cells.map((day, i) => {
                const dayEvents = day ? (byDay.get(day) ?? []) : [];
                return (
                  <div
                    key={i}
                    className="min-h-24 border-b border-r border-border p-1.5 last:border-r-0 sm:min-h-28"
                  >
                    {day ? (
                      <>
                        <span
                          className={`inline-grid size-6 place-items-center rounded-full text-xs font-semibold ${
                            dayEvents.length
                              ? "bg-[var(--seasonal)] text-primary-foreground"
                              : "text-muted-foreground"
                          }`}
                        >
                          {day}
                        </span>
                        <ul className="mt-1 space-y-1">
                          {dayEvents.map((e) => (
                            <li key={e.title}>
                              <span className="block truncate rounded bg-muted px-1.5 py-1 text-[11px] font-semibold leading-tight">
                                {e.title}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </>
                    ) : null}
                  </div>
                );
              })}
            </div>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            Filter the citywide calendar by date, category, location, department, and audience on the{" "}
            <Link to="/visitors" className="font-semibold text-primary underline underline-offset-4">
              full events calendar
            </Link>
            .
          </p>
        </div>
      </section>

      {/* 5. Event map */}
      <section className="section-pad bg-muted" aria-labelledby="event-map-heading">
        <div className="container-civic grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:items-center">
          <div>
            <p className="eyebrow">Event logistics</p>
            <h2 id="event-map-heading" className="mt-2">
              {data.title} map
            </h2>
            <p className="mt-4 text-muted-foreground">
              Pre-filtered to this event: parade route, road closures during event hours, parking,
              venues, and public restrooms.
            </p>
            <ul className="mt-6 grid gap-2 sm:grid-cols-2">
              {data.mapLayers.map((l) => (
                <li key={l} className="flex items-center gap-2 text-sm">
                  <MapPin aria-hidden="true" className="size-4 text-[var(--seasonal)]" />
                  {l}
                </li>
              ))}
            </ul>
            <Button asChild size="lg" className="mt-8">
              <Link to="/visitors">Open the full interactive map</Link>
            </Button>
          </div>
          <div className="relative overflow-hidden rounded-xl border border-border shadow-card">
            <img
              src={mapTeaser}
              alt={`Map of downtown Conway showing the ${data.title} route, closures, and parking`}
              loading="lazy"
              width={1280}
              height={800}
              className="w-full object-cover"
            />
            {data.mapPins.map((p) => (
              <span
                key={p.label}
                className="absolute -translate-x-1/2 -translate-y-full"
                style={{ top: p.top, left: p.left }}
              >
                <span className="flex items-center gap-1 rounded-full bg-[var(--seasonal)] px-2.5 py-1 text-xs font-semibold text-primary-foreground shadow-card">
                  <MapPin aria-hidden="true" className="size-3.5" />
                  {p.label}
                </span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Plan your visit + get involved */}
      <section id="get-involved" className="section-pad bg-background" aria-labelledby="plan-heading">
        <div className="container-civic grid gap-10 lg:grid-cols-2">
          <div>
            <h2 id="plan-heading">Plan your visit</h2>
            <dl className="mt-6 space-y-4">
              {data.visitInfo.map((v) => (
                <div key={v.heading} className="rounded-lg border border-border bg-card p-5 shadow-card">
                  <dt className="flex items-center gap-2 font-display text-lg font-semibold">
                    <Info aria-hidden="true" className="size-5 text-[var(--seasonal)]" />
                    {v.heading}
                  </dt>
                  <dd className="mt-2 text-muted-foreground">{v.body}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div>
            <h2>Get involved</h2>
            <p className="mt-3 text-muted-foreground">
              Vendors, sponsors, volunteers, and registration for ticketed sub-events.
            </p>
            <ul className="mt-6 space-y-3">
              {data.getInvolved.map((g, i) => (
                <li key={g.label}>
                  <Link
                    to={g.to}
                    className="flex items-center gap-4 rounded-lg border border-border bg-card p-5 shadow-card transition-colors hover:border-[var(--seasonal)] hover:bg-accent"
                  >
                    <span className="grid size-11 shrink-0 place-items-center rounded-md bg-primary text-primary-foreground">
                      {i === 0 ? (
                        <Megaphone aria-hidden="true" className="size-5" />
                      ) : i === 1 ? (
                        <Users aria-hidden="true" className="size-5" />
                      ) : (
                        <Ticket aria-hidden="true" className="size-5" />
                      )}
                    </span>
                    <span className="min-w-0">
                      <span className="block font-display text-lg font-semibold leading-tight">
                        {g.label}
                      </span>
                      <span className="block text-sm text-muted-foreground">{g.desc}</span>
                    </span>
                    <ArrowRight aria-hidden="true" className="ml-auto size-5 shrink-0 text-primary" />
                  </Link>
                </li>
              ))}
            </ul>

            <form
              className="mt-6 rounded-lg border border-border bg-muted p-5"
              onSubmit={(e) => e.preventDefault()}
            >
              <label htmlFor="event-alerts" className="font-display text-lg font-semibold">
                Get event alerts
              </label>
              <p className="mt-1 text-sm text-muted-foreground">
                Schedule changes, road closures, and weather delays for {data.title}.
              </p>
              <div className="mt-3 flex flex-col gap-2 sm:flex-row">
                <input
                  id="event-alerts"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="h-11 w-full rounded-md border border-input bg-background px-3 text-sm"
                />
                <Button type="submit" className="h-11 shrink-0">
                  Sign up
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* 7. Gallery & press */}
      <section className="section-pad bg-muted" aria-labelledby="gallery-heading">
        <div className="container-civic">
          <p className="eyebrow">From last season</p>
          <h2 id="gallery-heading" className="mt-2 flex items-center gap-3">
            <Camera aria-hidden="true" className="size-6 text-[var(--seasonal)]" />
            Photo gallery
          </h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {data.gallery.map((g) => (
              <li key={g.caption}>
                <figure className="overflow-hidden rounded-xl border border-border bg-card shadow-card">
                  <img
                    src={g.src}
                    alt={g.alt}
                    loading="lazy"
                    width={1024}
                    height={640}
                    className="h-52 w-full object-cover"
                  />
                  <figcaption className="border-t-2 border-[var(--seasonal)] px-4 py-3 text-sm font-semibold">
                    {g.caption}
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>

          <div className="mt-10 rounded-xl border border-border bg-card p-6 shadow-card">
            <p className="eyebrow">As seen in</p>
            <ul className="mt-3 flex flex-wrap gap-x-8 gap-y-2 text-sm font-semibold text-muted-foreground">
              {data.press.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 8. Related news */}
      <section className="section-pad bg-background" aria-labelledby="event-news-heading">
        <div className="container-civic">
          <h2 id="event-news-heading">{data.title} news &amp; notices</h2>
          <ul className="mt-8 grid gap-6 md:grid-cols-3">
            {data.news.map((n) => (
              <li key={n.title}>
                <article className="flex h-full flex-col rounded-xl border border-border bg-card p-6 shadow-card">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full bg-[var(--seasonal)]/12 px-3 py-1 text-xs font-bold uppercase tracking-wide text-[var(--seasonal)]">
                      {n.tag}
                    </span>
                    <span className="text-sm text-muted-foreground">{n.date}</span>
                  </div>
                  <h3 className="mt-3 text-xl">{n.title}</h3>
                  <p className="mt-2 flex-1 text-muted-foreground">{n.excerpt}</p>
                  <Link
                    to="/residents"
                    className="mt-4 inline-flex items-center gap-1 font-semibold text-primary underline underline-offset-4"
                  >
                    Read more<span className="sr-only"> about {n.title}</span>
                    <ArrowRight aria-hidden="true" className="size-4" />
                  </Link>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 9. Sibling event cross-link */}
      <section className="pb-16" aria-labelledby="sibling-heading">
        <div className="container-civic">
          <div className="flex flex-wrap items-center justify-between gap-6 rounded-xl bg-primary px-6 py-8 text-primary-foreground">
            <div>
              <h2 id="sibling-heading" className="text-primary-foreground">
                {data.sibling.title}
              </h2>
              <p className="mt-2 text-primary-foreground/90">{data.sibling.blurb}</p>
            </div>
            <Button asChild size="lg" variant="onDark">
              <Link to={data.sibling.to}>{data.sibling.cta}</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
