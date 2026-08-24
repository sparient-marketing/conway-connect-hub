import {
  TreePine,
  ShieldCheck,
  Flame,
  CreditCard,
  Ticket,
  Tent,
  Waves,
  Dumbbell,
  Siren,
  Users,
  BookOpen,
  Truck,
  FileSpreadsheet,
  Receipt,
  Landmark,
  type LucideIcon,
} from "lucide-react";
import deptParks from "@/assets/dept-parks.jpg";
import deptPolice from "@/assets/dept-police.jpg";
import deptFire from "@/assets/dept-fire.jpg";
import deptFinance from "@/assets/dept-finance.jpg";

export type DeptSection = { id: string; label: string };

export type Department = {
  slug: string;
  name: string;
  tagline: string;
  metaDescription: string;
  hero: string;
  heroAlt: string;
  overview: string;
  popular: { label: string; to: string }[];
  /** CMS module: program / service cards */
  programsHeading: string;
  programs: { name: string; desc: string; Icon: LucideIcon }[];
  /** CMS module: documents & forms */
  documentsHeading: string;
  documents: { title: string; date: string; size: string }[];
  /** CMS module: staff directory */
  staff: { name: string; title: string; phone: string; email: string }[];
  /** CMS module: department news */
  news: { date: string; title: string; excerpt: string }[];
  contact: {
    address: string;
    phone: string;
    email: string;
    hours: string;
    extra?: string;
  };
};

export const departmentSections: DeptSection[] = [
  { id: "overview", label: "Overview" },
  { id: "programs", label: "Programs & Registration" },
  { id: "documents", label: "Forms & Documents" },
  { id: "staff", label: "Staff Directory" },
  { id: "news", label: "News & Announcements" },
  { id: "contact", label: "Contact" },
];

export const departmentIcons: Record<string, LucideIcon> = {
  "parks-recreation": TreePine,
  police: ShieldCheck,
  fire: Flame,
  finance: CreditCard,
};

export const departments: Record<string, Department> = {
  "parks-recreation": {
    slug: "parks-recreation",
    name: "Parks & Recreation",
    tagline: "Ballfields, riverfront trails, summer camps, and 14 city parks.",
    metaDescription:
      "Register for programs, reserve a shelter, and find park hours, staff contacts, and forms from Conway Parks & Recreation.",
    hero: deptParks,
    heroAlt: "A Conway city park with a playground, ballfield, and shaded walking trail",
    overview:
      "Parks & Recreation maintains 14 parks, the Riverwalk, and the Smith Jones Recreation Center. We run youth and adult athletics, summer camps, and senior programs year-round. Facilities and shelters can be reserved online or by phone.",
    popular: [
      { label: "Register for a program", to: "/i-want-to" },
      { label: "Reserve a facility", to: "/i-want-to" },
      { label: "View park hours", to: "/residents" },
      { label: "Youth sports schedules", to: "/residents" },
    ],
    programsHeading: "Programs & services",
    programs: [
      { name: "Youth athletics", desc: "Baseball, soccer, basketball, and flag football for ages 4–14.", Icon: Ticket },
      { name: "Summer day camp", desc: "Nine weeks of camp at the recreation center, June through August.", Icon: Tent },
      { name: "Riverwalk & trails", desc: "Two miles of boardwalk and paved trail along the Waccamaw.", Icon: Waves },
      { name: "Adult fitness", desc: "Drop-in gym hours, pickleball leagues, and senior wellness classes.", Icon: Dumbbell },
    ],
    documentsHeading: "Forms & documents",
    documents: [
      { title: "Facility & shelter reservation form", date: "Updated Jul 2026", size: "PDF · 240 KB" },
      { title: "Youth athletics registration packet", date: "Updated Aug 2026", size: "PDF · 1.1 MB" },
      { title: "Park rules & ordinance summary", date: "Updated Mar 2026", size: "PDF · 180 KB" },
      { title: "2026 park master plan", date: "Adopted Feb 2026", size: "PDF · 6.4 MB" },
    ],
    staff: [
      { name: "Dana Whitmore", title: "Director of Parks & Recreation", phone: "(843) 248-1760", email: "dwhitmore@conwaysc.gov" },
      { name: "Marcus Lail", title: "Athletics Coordinator", phone: "(843) 248-1762", email: "mlail@conwaysc.gov" },
      { name: "Renée Baxter", title: "Facilities & Reservations", phone: "(843) 248-1764", email: "rbaxter@conwaysc.gov" },
      { name: "Tyrell Odom", title: "Grounds Superintendent", phone: "(843) 248-1766", email: "todom@conwaysc.gov" },
    ],
    news: [
      {
        date: "August 19, 2026",
        title: "Fall youth soccer registration opens September 1",
        excerpt: "Residents register first; open registration begins September 8 while spots remain.",
      },
      {
        date: "August 4, 2026",
        title: "Riverwalk boardwalk repairs complete",
        excerpt: "The section between Laurel Street and the marina has reopened to walkers and cyclists.",
      },
      {
        date: "July 22, 2026",
        title: "New pickleball courts at Collins Park",
        excerpt: "Four lighted courts are open daily from 7 a.m. to 10 p.m., first come first served.",
      },
    ],
    contact: {
      address: "1515 Mill Pond Road, Conway, SC 29526",
      phone: "(843) 248-1760",
      email: "parks@conwaysc.gov",
      hours: "Mon–Fri, 8:00 a.m. – 5:00 p.m. · Rec center open until 8 p.m.",
      extra: "Park grounds open dawn to dusk unless posted otherwise.",
    },
  },

  police: {
    slug: "police",
    name: "Police Department",
    tagline: "Community policing, records, and 24-hour non-emergency response.",
    metaDescription:
      "Conway Police Department: non-emergency dispatch, records requests, patrol districts, community programs, and staff contacts.",
    hero: deptPolice,
    heroAlt: "A Conway police patrol car parked outside a brick municipal building",
    overview:
      "The Conway Police Department serves the city with patrol, investigations, and community outreach around the clock. Call 911 for emergencies and (843) 248-1790 for non-emergency assistance. Reports and records requests can be submitted online.",
    popular: [
      { label: "File an online report", to: "/i-want-to" },
      { label: "Request a police record", to: "/government" },
      { label: "Find my patrol district", to: "/residents" },
      { label: "Report a non-emergency", to: "/i-want-to" },
    ],
    programsHeading: "Divisions & programs",
    programs: [
      { name: "Patrol division", desc: "Four districts with 24-hour coverage and dedicated shift supervisors.", Icon: Siren },
      { name: "Criminal investigations", desc: "Detectives handling property, violent, and financial crime cases.", Icon: ShieldCheck },
      { name: "Community outreach", desc: "Neighborhood watch, Coffee with a Cop, and school resource officers.", Icon: Users },
      { name: "Records & reports", desc: "Accident reports, background letters, and FOIA requests.", Icon: BookOpen },
    ],
    documentsHeading: "Reports & records",
    documents: [
      { title: "Records request form", date: "Updated Jun 2026", size: "PDF · 160 KB" },
      { title: "Annual crime statistics report 2025", date: "Published Mar 2026", size: "PDF · 3.2 MB" },
      { title: "Use of force policy", date: "Updated Jan 2026", size: "PDF · 420 KB" },
      { title: "Citizen complaint & commendation form", date: "Updated Jan 2026", size: "PDF · 140 KB" },
    ],
    staff: [
      { name: "Chief Alvin Rutledge", title: "Chief of Police", phone: "(843) 248-1790", email: "arutledge@conwaysc.gov" },
      { name: "Capt. Nina Sowell", title: "Patrol Commander", phone: "(843) 248-1792", email: "nsowell@conwaysc.gov" },
      { name: "Lt. Grady Pearson", title: "Criminal Investigations", phone: "(843) 248-1794", email: "gpearson@conwaysc.gov" },
      { name: "Angela Ford", title: "Records Supervisor", phone: "(843) 248-1796", email: "aford@conwaysc.gov" },
    ],
    news: [
      {
        date: "August 15, 2026",
        title: "Coffee with a Cop returns to Main Street",
        excerpt: "Meet your district officers the first Thursday of each month, 8–10 a.m.",
      },
      {
        date: "July 30, 2026",
        title: "Two new school resource officers sworn in",
        excerpt: "Officers will be assigned to Conway Middle and Whittemore Park Middle this fall.",
      },
    ],
    contact: {
      address: "3416 Second Avenue, Conway, SC 29527",
      phone: "(843) 248-1790",
      email: "police@conwaysc.gov",
      hours: "Lobby: Mon–Fri, 8:00 a.m. – 5:00 p.m. · Dispatch 24/7",
      extra: "For emergencies always dial 911.",
    },
  },

  fire: {
    slug: "fire",
    name: "Fire Department",
    tagline: "Five stations, fire prevention, inspections, and burn permits.",
    metaDescription:
      "Conway Fire Department: stations, inspections, burn permits, smoke alarm program, and fire prevention resources.",
    hero: deptFire,
    heroAlt: "A red fire engine parked inside an open Conway fire station bay",
    overview:
      "Conway Fire responds to fires, medical calls, and river rescues from five stations across the city. The prevention division handles commercial inspections, plan review, and burn permits. Residents can request a free smoke alarm installation.",
    popular: [
      { label: "Request a burn permit", to: "/i-want-to" },
      { label: "Schedule an inspection", to: "/business" },
      { label: "Free smoke alarm request", to: "/residents" },
      { label: "Station locations", to: "/departments" },
    ],
    programsHeading: "Divisions & programs",
    programs: [
      { name: "Fire suppression", desc: "Five stations staffed around the clock with engine and ladder companies.", Icon: Flame },
      { name: "Fire prevention", desc: "Commercial inspections, plan review, and public education visits.", Icon: ShieldCheck },
      { name: "Smoke alarm program", desc: "Free alarm installation for Conway residents, scheduled by appointment.", Icon: Users },
      { name: "Burn permits", desc: "Seasonal open-burn permits and land-clearing approvals.", Icon: Truck },
    ],
    documentsHeading: "Permits & documents",
    documents: [
      { title: "Open burn permit application", date: "Updated Aug 2026", size: "PDF · 130 KB" },
      { title: "Commercial inspection checklist", date: "Updated May 2026", size: "PDF · 260 KB" },
      { title: "Fire code adoption ordinance", date: "Adopted Nov 2025", size: "PDF · 780 KB" },
      { title: "Annual department report 2025", date: "Published Feb 2026", size: "PDF · 2.8 MB" },
    ],
    staff: [
      { name: "Chief Warren Doyle", title: "Fire Chief", phone: "(843) 248-1740", email: "wdoyle@conwaysc.gov" },
      { name: "Deputy Chief Mona Ellerbe", title: "Operations", phone: "(843) 248-1742", email: "mellerbe@conwaysc.gov" },
      { name: "Marshal Peter Kinlaw", title: "Fire Marshal", phone: "(843) 248-1744", email: "pkinlaw@conwaysc.gov" },
      { name: "Shanika Reaves", title: "Community Risk Reduction", phone: "(843) 248-1746", email: "sreaves@conwaysc.gov" },
    ],
    news: [
      {
        date: "August 10, 2026",
        title: "Station 3 apparatus replacement approved",
        excerpt: "A new engine funded in the FY2027 budget will arrive next spring.",
      },
      {
        date: "July 12, 2026",
        title: "Hurricane season readiness checklist",
        excerpt: "Generator safety, evacuation routes, and what to keep in your go-bag.",
      },
    ],
    contact: {
      address: "301 Main Street, Conway, SC 29526",
      phone: "(843) 248-1740",
      email: "fire@conwaysc.gov",
      hours: "Administration: Mon–Fri, 8:00 a.m. – 5:00 p.m.",
      extra: "For emergencies always dial 911.",
    },
  },

  finance: {
    slug: "finance",
    name: "Finance",
    tagline: "Utility billing, business licenses, budget, and procurement.",
    metaDescription:
      "Conway Finance Department: pay a utility bill, business licenses, hospitality tax, annual budget documents, and procurement.",
    hero: deptFinance,
    heroAlt: "A resident being helped at the Conway city finance service counter",
    overview:
      "Finance handles utility billing, business licenses, hospitality and accommodations tax, purchasing, and the city's annual budget and audit. Payments can be made online, by phone, by mail, or at the City Hall counter.",
    popular: [
      { label: "Pay a utility bill", to: "/i-want-to" },
      { label: "Renew a business license", to: "/business" },
      { label: "View the annual budget", to: "/government" },
      { label: "Current bid opportunities", to: "/business" },
    ],
    programsHeading: "Services",
    programs: [
      { name: "Utility billing", desc: "Water, sewer, and sanitation accounts, drafts, and payment plans.", Icon: Receipt },
      { name: "Business licensing", desc: "New applications, renewals, and contractor registration.", Icon: FileSpreadsheet },
      { name: "Budget & audit", desc: "Adopted budgets, comprehensive annual financial reports, and millage.", Icon: Landmark },
      { name: "Procurement", desc: "Bids, RFPs, vendor registration, and purchasing thresholds.", Icon: CreditCard },
    ],
    documentsHeading: "Financial documents",
    documents: [
      { title: "FY2027 adopted budget", date: "Adopted Aug 2026", size: "PDF · 8.9 MB" },
      { title: "Annual comprehensive financial report FY2025", date: "Published Jan 2026", size: "PDF · 5.1 MB" },
      { title: "Business license application", date: "Updated Jul 2026", size: "PDF · 210 KB" },
      { title: "Hospitality tax remittance form", date: "Updated Jul 2026", size: "PDF · 150 KB" },
    ],
    staff: [
      { name: "Carla Sanderson", title: "Finance Director", phone: "(843) 248-1720", email: "csanderson@conwaysc.gov" },
      { name: "Devon Marsh", title: "Utility Billing Manager", phone: "(843) 248-1722", email: "dmarsh@conwaysc.gov" },
      { name: "Priya Nathan", title: "Business License Official", phone: "(843) 248-1724", email: "pnathan@conwaysc.gov" },
      { name: "Ken Abrams", title: "Procurement Officer", phone: "(843) 248-1726", email: "kabrams@conwaysc.gov" },
    ],
    news: [
      {
        date: "August 21, 2026",
        title: "FY2027 budget adopted with no millage increase",
        excerpt: "The budget funds fire apparatus, riverwalk repairs, and expanded recycling.",
      },
      {
        date: "June 30, 2026",
        title: "Business license renewals due August 31",
        excerpt: "Renew online to avoid the 5% monthly late penalty.",
      },
    ],
    contact: {
      address: "229 Main Street, Conway, SC 29526",
      phone: "(843) 248-1720",
      email: "finance@conwaysc.gov",
      hours: "Mon–Fri, 8:00 a.m. – 5:00 p.m.",
      extra: "Drop box available at the Main Street entrance after hours.",
    },
  },
};

export const departmentList = Object.values(departments);
