import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { LinkGrid } from "@/components/site/LinkGrid";

export const Route = createFileRoute("/residents")({
  head: () => ({
    meta: [
      { title: "Residents — City of Conway, SC" },
      {
        name: "description",
        content:
          "Trash and recycling schedules, water billing, parks and recreation, public notices, and neighborhood programs for Conway residents.",
      },
      { property: "og:title", content: "Residents — City of Conway, SC" },
      {
        property: "og:description",
        content: "Everyday services and public notices for people who live in Conway.",
      },
    ],
  }),
  component: ResidentsPage,
});

function ResidentsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Living in Conway"
        title="Residents"
        intro="Everything for the routine stuff: your pickup day, your water bill, your park, your neighborhood."
        crumbs={[{ label: "Residents" }]}
      />
      <LinkGrid
        heading="Everyday services"
        items={[
          { title: "Trash & Recycling", desc: "Look up your pickup day, bulk item rules, and holiday schedules.", to: "/residents" },
          { title: "Water Billing", desc: "Pay online, set up autopay, start or stop service, or report a leak.", to: "/i-want-to" },
          { title: "Parks & Recreation", desc: "Register for programs and reserve shelters, fields, and facilities.", to: "/residents" },
        ]}
      />
      <div className="bg-muted">
        <LinkGrid
          heading="Stay informed & get involved"
          items={[
            { title: "Public Notices", desc: "Hearings, bid notices, and required legal advertisements.", to: "/residents" },
            { title: "Neighborhood Programs", desc: "Community grants, cleanups, and neighborhood watch groups.", to: "/residents" },
            { title: "Volunteer & Serve", desc: "Openings on City boards, commissions, and volunteer teams.", to: "/government" },
            { title: "Emergency Alerts", desc: "Sign up for text and email alerts about storms and outages.", to: "/departments" },
            { title: "FAQs", desc: "Answers to the questions City Hall hears most often.", to: "/residents" },
            { title: "Report a Problem", desc: "Potholes, streetlights, drainage, overgrown lots, and more.", to: "/i-want-to" },
          ]}
        />
      </div>
    </>
  );
}
