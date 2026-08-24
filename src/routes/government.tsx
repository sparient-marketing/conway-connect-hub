import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import govHero from "@/assets/page-government.jpg";
import { LinkGrid } from "@/components/site/LinkGrid";

export const Route = createFileRoute("/government")({
  head: () => ({
    meta: [
      { title: "Government — City of Conway, SC" },
      {
        name: "description",
        content:
          "Mayor and City Council, boards and commissions, meeting agendas and minutes, ordinances, and the annual budget for Conway, South Carolina.",
      },
      { property: "og:title", content: "Government — City of Conway, SC" },
      {
        property: "og:description",
        content: "Council members, agendas and minutes, ordinances, and city budget documents.",
      },
    ],
  }),
  component: GovernmentPage,
});

function GovernmentPage() {
  return (
    <>
      <PageHeader
        image={govHero}
        imageAlt="Conway City Hall on a clear day"
        eyebrow="Open & accountable"
        title="Government"
        intro="Conway operates under a council-manager form of government, with a Mayor and six Council members elected by district."
        crumbs={[{ label: "Government" }]}
      />
      <LinkGrid
        heading="City leadership"
        items={[
          { title: "Mayor & City Council", desc: "Meet your elected officials and find district maps and contact details.", to: "/government" },
          { title: "City Administrator", desc: "Day-to-day operations, staff leadership, and the office of the city clerk.", to: "/government" },
          { title: "Boards & Commissions", desc: "Planning Commission, Board of Zoning Appeals, and volunteer openings.", to: "/government" },
        ]}
      />
      <div className="bg-muted">
        <LinkGrid
          heading="Meetings & public records"
          items={[
            { title: "Agendas & Minutes", desc: "Council and board packets, posted at least 24 hours before each meeting.", to: "/government" },
            { title: "Ordinances & Code", desc: "Search the municipal code and recently adopted ordinances.", to: "/government" },
            { title: "Budget & Finance", desc: "Adopted budgets, audited financial statements, and millage history.", to: "/government" },
            { title: "FOIA Requests", desc: "Submit a Freedom of Information Act request and track its status.", to: "/i-want-to" },
            { title: "Elections", desc: "Municipal election dates, districts, and candidate filing information.", to: "/government" },
            { title: "Watch Meetings", desc: "Live stream and archived video of City Council meetings.", to: "/government" },
          ]}
        />
      </div>
    </>
  );
}
