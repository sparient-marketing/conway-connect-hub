import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { PageHeader } from "@/components/site/PageHeader";
import visHero from "@/assets/page-visitors.jpg";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/visitors/")({
  head: () => ({
    meta: [
      { title: "Visitors & Events — City of Conway, SC" },
      {
        name: "description",
        content:
          "Plan your visit to historic Conway, SC: the Riverwalk, downtown dining, City of Halloween, Christmas in Conway, and the full city event calendar.",
      },
      { property: "og:title", content: "Visitors & Events — City of Conway, SC" },
      {
        property: "og:description",
        content: "Signature events, the Riverwalk, and everything happening in downtown Conway.",
      },
    ],
  }),
  component: VisitorsPage,
});

const categories = ["All", "Festivals", "Markets", "City Meetings", "Arts", "Outdoors"] as const;

const events = [
  { date: "Sep 5, 2026", title: "Rivertown Farmers Market", cat: "Markets", where: "Conway Riverwalk" },
  { date: "Sep 12, 2026", title: "City Council Regular Meeting", cat: "City Meetings", where: "City Hall Chambers" },
  { date: "Sep 19, 2026", title: "Riverfest Concert Series", cat: "Festivals", where: "Riverfront Park" },
  { date: "Sep 26, 2026", title: "Conway Art Walk", cat: "Arts", where: "Main Street" },
  { date: "Oct 3, 2026", title: "City of Halloween Kickoff", cat: "Festivals", where: "Downtown Conway" },
  { date: "Oct 17, 2026", title: "Waccamaw Paddle Day", cat: "Outdoors", where: "Riverwalk Landing" },
  { date: "Dec 5, 2026", title: "Christmas in Conway Parade", cat: "Festivals", where: "Main Street" },
];

function VisitorsPage() {
  const [active, setActive] = useState<string>("All");
  const shown = active === "All" ? events : events.filter((e) => e.cat === active);

  return (
    <>
      <PageHeader
        image={visHero}
        imageAlt="Conway Riverwalk at sunset with kayaks"
        eyebrow="Visit the rivertown"
        title="Visitors & Events"
        intro="A walkable historic downtown on the Waccamaw River — plus two signature seasons Conway is known for."
        crumbs={[{ label: "Visitors & Events" }]}
      />

      <section className="section-pad" aria-labelledby="signature-heading">
        <div className="container-civic">
          <h2 id="signature-heading">Signature events</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <article className="flex flex-col rounded-lg border border-border bg-card p-8 shadow-card">
              <h3 className="text-2xl">City of Halloween</h3>
              <p className="mt-3 flex-1 text-muted-foreground">
                All October long: the Hallow Fest parade, trick-or-treating on Main Street, haunted
                river tours, and the pumpkin-lit Riverwalk.
              </p>
              <Button asChild className="mt-6 self-start">
                <Link to="/visitors/halloween">Explore City of Halloween</Link>
              </Button>
            </article>
            <article className="flex flex-col rounded-lg border border-border bg-card p-8 shadow-card">
              <h3 className="text-2xl">Christmas in Conway</h3>
              <p className="mt-3 flex-1 text-muted-foreground">
                Tree lighting, the Christmas parade, holiday market, and the Wonderland of Lights
                along the riverfront through December.
              </p>
              <Button asChild className="mt-6 self-start">
                <Link to="/visitors/christmas">Explore Christmas in Conway</Link>
              </Button>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-muted section-pad" aria-labelledby="calendar-heading">
        <div className="container-civic">
          <h2 id="calendar-heading">Event calendar</h2>
          <div
            className="mt-6 flex flex-wrap gap-2"
            role="group"
            aria-label="Filter events by category"
          >
            {categories.map((c) => (
              <button
                key={c}
                type="button"
                aria-pressed={active === c}
                onClick={() => setActive(c)}
                className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                  active === c
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-card text-foreground hover:border-primary"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
          <ul className="mt-6 space-y-3">
            {shown.map((e) => (
              <li
                key={e.title}
                className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 rounded-lg border border-border bg-card p-5 shadow-card sm:flex sm:justify-between"
              >
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-secondary">{e.date}</p>
                  <h3 className="text-xl">{e.title}</h3>
                  <p className="text-sm text-muted-foreground">{e.where}</p>
                </div>
                <span className="shrink-0 rounded-full border border-border bg-muted px-3 py-1 text-xs font-semibold text-muted-foreground">
                  {e.cat}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
