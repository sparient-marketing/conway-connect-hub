export type NavLink = { label: string; to: string; desc?: string };

export type NavItem = {
  label: string;
  to: string;
  groups?: { heading: string; links: NavLink[] }[];
};

export const primaryNav: NavItem[] = [
  {
    label: "Government",
    to: "/government",
    groups: [
      {
        heading: "City Leadership",
        links: [
          { label: "Mayor & City Council", to: "/government" },
          { label: "City Administrator", to: "/government" },
          { label: "Boards & Commissions", to: "/government" },
        ],
      },
      {
        heading: "Meetings & Records",
        links: [
          { label: "Agendas & Minutes", to: "/government" },
          { label: "Ordinances & Codes", to: "/government" },
          { label: "Budget & Finance", to: "/government" },
        ],
      },
    ],
  },
  {
    label: "Departments",
    to: "/departments",
    groups: [
      {
        heading: "Public Safety",
        links: [
          { label: "Police Department", to: "/departments" },
          { label: "Fire Department", to: "/departments" },
          { label: "Emergency Management", to: "/departments" },
        ],
      },
      {
        heading: "City Services",
        links: [
          { label: "Public Works", to: "/departments" },
          { label: "Water & Sewer", to: "/departments" },
          { label: "Planning & Zoning", to: "/departments" },
        ],
      },
    ],
  },
  {
    label: "Business",
    to: "/business",
    groups: [
      {
        heading: "Start & Grow",
        links: [
          { label: "Business Licenses", to: "/business" },
          { label: "Permits & Inspections", to: "/business" },
          { label: "Downtown Development", to: "/business" },
        ],
      },
      {
        heading: "Working With the City",
        links: [
          { label: "Bids & Procurement", to: "/business" },
          { label: "Economic Development", to: "/business" },
        ],
      },
    ],
  },
  {
    label: "Residents",
    to: "/residents",
    groups: [
      {
        heading: "Everyday Services",
        links: [
          { label: "Trash & Recycling", to: "/residents" },
          { label: "Water Billing", to: "/residents" },
          { label: "Parks & Recreation", to: "/residents" },
        ],
      },
      {
        heading: "Get Involved",
        links: [
          { label: "Neighborhood Programs", to: "/residents" },
          { label: "Volunteer & Boards", to: "/residents" },
          { label: "Public Notices", to: "/residents" },
        ],
      },
    ],
  },
  {
    label: "Visitors & Events",
    to: "/visitors",
    groups: [
      {
        heading: "Signature Events",
        links: [
          { label: "City of Halloween", to: "/visitors/halloween" },
          { label: "Christmas in Conway", to: "/visitors/christmas" },
          { label: "Full Event Calendar", to: "/visitors" },
        ],
      },
      {
        heading: "Explore Conway",
        links: [
          { label: "Historic Riverwalk", to: "/visitors" },
          { label: "Downtown & Dining", to: "/visitors" },
          { label: "Coastal Carolina University", to: "/visitors" },
        ],
      },
    ],
  },
];

export const iWantTo: NavLink[] = [
  { label: "Pay a bill", to: "/i-want-to", desc: "Water, sewer, taxes & tickets" },
  { label: "Apply for a permit", to: "/i-want-to", desc: "Building, sign & event permits" },
  { label: "Find a job", to: "/i-want-to", desc: "Current City openings" },
  { label: "Report a problem", to: "/i-want-to", desc: "Potholes, outages, code issues" },
  { label: "View agendas", to: "/government", desc: "Council & board meetings" },
  { label: "Contact council", to: "/government", desc: "Mayor & district members" },
];
