import { createFileRoute, Link } from "@tanstack/react-router";
import { CreditCard, FileText, Briefcase, Megaphone, CalendarDays, Users } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import svcHero from "@/assets/page-services.jpg";

export const Route = createFileRoute("/i-want-to")({
  head: () => ({
    meta: [
      { title: "I Want To… — City of Conway, SC" },
      {
        name: "description",
        content:
          "Fast links for Conway residents: pay a bill, apply for a permit, find a job, report a problem, view agendas, and contact City Council.",
      },
      { property: "og:title", content: "I Want To… — City of Conway, SC" },
      {
        property: "og:description",
        content: "The shortcut hub for the City of Conway's most-requested services.",
      },
    ],
  }),
  component: IWantToPage,
});

const tasks = [
  { title: "Pay a bill", desc: "Water and sewer, property taxes, business license, and parking tickets.", Icon: CreditCard },
  { title: "Apply for a permit", desc: "Building, sign, special event, and film permits with online tracking.", Icon: FileText },
  { title: "Find a job", desc: "Current openings with the City, benefits, and the application portal.", Icon: Briefcase },
  { title: "Report a problem", desc: "Potholes, streetlights, drainage, missed pickup, or code concerns.", Icon: Megaphone },
  { title: "View agendas", desc: "Council and board agendas, packets, minutes, and meeting video.", Icon: CalendarDays },
  { title: "Contact council", desc: "Reach the Mayor or your district representative directly.", Icon: Users },
];

function IWantToPage() {
  return (
    <>
      <PageHeader
        image={svcHero}
        imageAlt="A resident filling out a city form"
        eyebrow="Citizen services"
        title="I Want To…"
        intro="The tasks Conway residents start most often, all in one place."
        crumbs={[{ label: "I Want To…" }]}
      />
      <section className="section-pad" aria-labelledby="tasks-heading">
        <div className="container-civic">
          <h2 id="tasks-heading" className="sr-only">
            Popular tasks
          </h2>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {tasks.map(({ title, desc, Icon }) => (
              <li key={title}>
                <Link
                  to="/i-want-to"
                  className="flex h-full flex-col gap-3 rounded-lg border border-border bg-card p-6 shadow-card transition-colors hover:border-primary hover:bg-muted"
                >
                  <span className="grid size-11 place-items-center rounded-md bg-secondary/10 text-secondary">
                    <Icon aria-hidden="true" className="size-5" />
                  </span>
                  <h3 className="text-xl">{title}</h3>
                  <p className="text-muted-foreground">{desc}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="bg-muted section-pad" aria-labelledby="help-heading">
        <div className="container-civic max-w-3xl text-center">
          <h2 id="help-heading">Still can't find it?</h2>
          <p className="mt-3 text-muted-foreground">
            Call City Hall at (843) 248-2920, Monday through Friday, 8:00 a.m. to 5:00 p.m. — or ask
            our assistant using the “Ask Conway” button in the corner of any page.
          </p>
        </div>
      </section>
    </>
  );
}
