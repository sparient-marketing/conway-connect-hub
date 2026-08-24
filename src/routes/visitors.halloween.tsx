import { createFileRoute } from "@tanstack/react-router";
import { Breadcrumbs } from "@/components/site/PageHeader";

export const Route = createFileRoute("/visitors/halloween")({
  head: () => ({
    meta: [
      { title: "City of Halloween — Conway, SC" },
      {
        name: "description",
        content:
          "Conway is the City of Halloween: parade, trick-or-treating on Main Street, haunted river tours, and a month of family events every October.",
      },
      { property: "og:title", content: "City of Halloween — Conway, SC" },
      {
        property: "og:description",
        content: "Parade, Main Street trick-or-treating, and haunted river tours all October.",
      },
    ],
  }),
  component: HalloweenPage,
});

const schedule = [
  { date: "Oct 3", title: "Kickoff & Pumpkin Lighting", where: "Riverfront Park, 6 p.m." },
  { date: "Oct 10", title: "Haunted River Tours begin", where: "Riverwalk Landing, nightly" },
  { date: "Oct 18", title: "Monster Mash Street Dance", where: "Main Street, 7 p.m." },
  { date: "Oct 25", title: "Hallow Fest Parade", where: "Main Street, 5 p.m." },
  { date: "Oct 31", title: "Trick-or-Treat on Main", where: "Downtown, 4–7 p.m." },
];

function HalloweenPage() {
  return (
    <>
      <section className="bg-primary-deep text-primary-foreground">
        <div className="container-civic py-10 md:py-16">
          <div className="[&_a]:text-primary-foreground/80 [&_span]:text-primary-foreground">
            <Breadcrumbs
              items={[{ label: "Visitors & Events", to: "/visitors" }, { label: "City of Halloween" }]}
            />
          </div>
          <p className="eyebrow mt-6 text-halloween">October in Conway</p>
          <h1 className="mt-2 text-primary-foreground">City of Halloween</h1>
          <p className="mt-4 max-w-2xl text-lg text-primary-foreground/90">
            For one full month, the rivertown turns into South Carolina's Halloween headquarters —
            free, family-friendly, and right downtown.
          </p>
          <div className="mt-8 inline-flex items-center gap-3 rounded-md bg-halloween px-5 py-3 font-semibold text-primary-deep">
            43 days until the 2026 kickoff
          </div>
        </div>
      </section>

      <section className="section-pad" aria-labelledby="schedule-heading">
        <div className="container-civic">
          <h2 id="schedule-heading">2026 schedule</h2>
          <ul className="mt-8 space-y-3">
            {schedule.map((s) => (
              <li
                key={s.title}
                className="flex items-center gap-5 rounded-lg border border-border bg-card p-5 shadow-card"
              >
                <span className="grid w-20 shrink-0 place-items-center rounded-md bg-halloween px-2 py-2 text-sm font-bold text-primary-deep">
                  {s.date}
                </span>
                <span className="min-w-0">
                  <span className="block font-display text-xl font-semibold">{s.title}</span>
                  <span className="block text-sm text-muted-foreground">{s.where}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-muted section-pad" aria-labelledby="plan-heading">
        <div className="container-civic">
          <h2 id="plan-heading">Plan your visit</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              { t: "Parking & street closures", d: "Main Street closes to traffic from 3 p.m. on parade day. Free parking at City Hall lots." },
              { t: "Accessibility", d: "ADA seating is reserved at 3rd Avenue. Service animals welcome; quiet zone at Riverfront Park." },
              { t: "Vendor & event permits", d: "Food and craft vendors must apply by September 12 through the special event permit portal." },
            ].map((c) => (
              <article key={c.t} className="rounded-lg border border-border bg-card p-6 shadow-card">
                <h3 className="text-xl">{c.t}</h3>
                <p className="mt-2 text-muted-foreground">{c.d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
