import { createFileRoute } from "@tanstack/react-router";
import { Breadcrumbs } from "@/components/site/PageHeader";

export const Route = createFileRoute("/visitors/christmas")({
  head: () => ({
    meta: [
      { title: "Christmas in Conway — Conway, SC" },
      {
        name: "description",
        content:
          "Christmas in Conway: tree lighting, the holiday parade, downtown market, and the Wonderland of Lights along the Waccamaw riverfront.",
      },
      { property: "og:title", content: "Christmas in Conway — Conway, SC" },
      {
        property: "og:description",
        content: "Tree lighting, holiday parade, market, and riverfront lights all December.",
      },
    ],
  }),
  component: ChristmasPage,
});

const schedule = [
  { date: "Nov 27", title: "Tree Lighting & Sing-Along", where: "City Hall lawn, 6 p.m." },
  { date: "Nov 28", title: "Wonderland of Lights opens", where: "Riverwalk, nightly to Jan 2" },
  { date: "Dec 5", title: "Christmas in Conway Parade", where: "Main Street, 3 p.m." },
  { date: "Dec 12", title: "Holiday Market on Main", where: "Downtown, 10 a.m.–4 p.m." },
  { date: "Dec 19", title: "Santa on the Riverwalk", where: "Riverfront Park, 5 p.m." },
];

function ChristmasPage() {
  return (
    <>
      <section className="bg-primary-deep text-primary-foreground">
        <div className="container-civic py-10 md:py-16">
          <div className="[&_a]:text-primary-foreground/80 [&_span]:text-primary-foreground">
            <Breadcrumbs
              items={[
                { label: "Visitors & Events", to: "/visitors" },
                { label: "Christmas in Conway" },
              ]}
            />
          </div>
          <p className="eyebrow mt-6 text-christmas">The holidays downtown</p>
          <h1 className="mt-2 text-primary-foreground">Christmas in Conway</h1>
          <p className="mt-4 max-w-2xl text-lg text-primary-foreground/90">
            Six weeks of lights along the Waccamaw, a hometown parade, and a market full of Horry
            County makers.
          </p>
          <div className="mt-8 inline-flex items-center gap-3 rounded-md bg-christmas px-5 py-3 font-semibold text-primary-foreground">
            Tree lighting: Friday, November 27
          </div>
        </div>
      </section>

      <section className="section-pad" aria-labelledby="xmas-schedule">
        <div className="container-civic">
          <h2 id="xmas-schedule">2026 schedule</h2>
          <ul className="mt-8 space-y-3">
            {schedule.map((s) => (
              <li
                key={s.title}
                className="flex items-center gap-5 rounded-lg border border-border bg-card p-5 shadow-card"
              >
                <span className="grid w-20 shrink-0 place-items-center rounded-md bg-christmas px-2 py-2 text-sm font-bold text-primary-foreground">
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

      <section className="bg-muted section-pad" aria-labelledby="xmas-plan">
        <div className="container-civic">
          <h2 id="xmas-plan">Know before you go</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              { t: "Parade route & closures", d: "Main Street closes at 1 p.m. on December 5. Shuttle runs from the Laurel Street lot." },
              { t: "Accessibility", d: "Accessible viewing area at 4th Avenue; the Riverwalk light path is fully paved and lit." },
              { t: "Market applications", d: "Vendor applications for the Holiday Market open October 1 and close November 7." },
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
