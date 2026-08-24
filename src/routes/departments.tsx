import { createFileRoute, Outlet, useMatches } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import deptHero from "@/assets/page-departments.jpg";
import { LinkGrid } from "@/components/site/LinkGrid";

export const Route = createFileRoute("/departments")({
  head: () => ({
    meta: [
      { title: "Departments — City of Conway, SC" },
      {
        name: "description",
        content:
          "Contact Conway city departments: police, fire, public works, water and sewer, planning and zoning, parks and recreation, and more.",
      },
      { property: "og:title", content: "Departments — City of Conway, SC" },
      {
        property: "og:description",
        content: "Staff directories, hours, and services for every City of Conway department.",
      },
    ],
  }),
  component: DepartmentsLayout,
});

function DepartmentsLayout() {
  const matches = useMatches();
  const isChild = matches.some((m) => m.routeId === "/departments/$slug");
  if (isChild) return <Outlet />;
  return <DepartmentsIndex />;
}

function DepartmentsIndex() {
  return (
    <>
      <PageHeader
        image={deptHero}
        imageAlt="Aerial view of Conway at golden hour"
        eyebrow="Who does what"
        title="Departments"
        intro="Every City department, with direct phone numbers, hours, and the services each one handles."
        crumbs={[{ label: "Departments" }]}
      />
      <LinkGrid
        heading="Public safety"
        items={[
          { title: "Police Department", desc: "Non-emergency (843) 248-1790. Records, patrol districts, and community programs.", to: "/departments/police" },
          { title: "Fire Department", desc: "Five stations, fire inspections, smoke alarm program, and burn permits.", to: "/departments/fire" },
          { title: "Emergency Management", desc: "Hurricane preparedness, flood zones, and CodeRED alert sign-up.", to: "/residents" },
        ]}
      />
      <div className="bg-muted">
        <LinkGrid
          heading="City services"
          items={[
            { title: "Public Works", desc: "Streets, drainage, sanitation, and right-of-way maintenance.", to: "/residents" },
            { title: "Water & Sewer", desc: "New service, billing questions, leaks, and water quality reports.", to: "/residents" },
            { title: "Planning & Zoning", desc: "Zoning maps, land use, historic district review, and annexation.", to: "/business" },
            { title: "Parks & Recreation", desc: "Facilities, athletics, camps, and park shelter reservations.", to: "/departments/parks-recreation" },
            { title: "Building & Codes", desc: "Permits, inspections, and property maintenance enforcement.", to: "/business" },
            { title: "Finance & Business License", desc: "Business licenses, hospitality tax, and accounts payable.", to: "/departments/finance" },
          ]}
        />
      </div>
    </>
  );
}
