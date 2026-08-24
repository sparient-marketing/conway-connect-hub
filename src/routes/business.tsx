import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import bizHero from "@/assets/page-business.jpg";
import { LinkGrid } from "@/components/site/LinkGrid";

export const Route = createFileRoute("/business")({
  head: () => ({
    meta: [
      { title: "Business — City of Conway, SC" },
      {
        name: "description",
        content:
          "Business licenses, permits and inspections, bids and procurement, GIS data, and downtown development in Conway, South Carolina.",
      },
      { property: "og:title", content: "Business — City of Conway, SC" },
      {
        property: "og:description",
        content: "Start, grow, or do business with the City of Conway.",
      },
    ],
  }),
  component: BusinessPage,
});

function BusinessPage() {
  return (
    <>
      <PageHeader
        image={bizHero}
        imageAlt="Downtown Conway storefronts at sunrise"
        eyebrow="Open for business"
        title="Business"
        intro="Licensing, permitting, and procurement — plus the people who can help you open a storefront downtown."
        crumbs={[{ label: "Business" }]}
      />
      <LinkGrid
        heading="Start & grow"
        items={[
          { title: "Business Licenses", desc: "Apply or renew online. Renewals are due April 30 each year.", to: "/business" },
          { title: "Permits & Inspections", desc: "Building, electrical, sign, and certificate of occupancy requests.", to: "/business" },
          { title: "Downtown Development", desc: "Facade grants, Main Street program, and available storefronts.", to: "/business" },
        ]}
      />
      <div className="bg-muted">
        <LinkGrid
          heading="Working with the City"
          items={[
            { title: "Bids & Procurement", desc: "Open solicitations, vendor registration, and award notices.", to: "/business" },
            { title: "Economic Development", desc: "Incentives, site selection, and workforce partnerships with CCU.", to: "/business" },
            { title: "GIS Data & Maps", desc: "Download zoning, parcel, utility, and flood layers.", to: "/business" },
            { title: "Special Event Permits", desc: "Street closures, vendor permits, and festival applications.", to: "/visitors" },
            { title: "Hospitality Tax", desc: "File and remit monthly hospitality and accommodations tax.", to: "/business" },
            { title: "Planning & Zoning", desc: "Rezoning requests, variances, and site plan review timelines.", to: "/departments" },
          ]}
        />
      </div>
    </>
  );
}
