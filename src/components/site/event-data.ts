import heroHalloween from "@/assets/event-hero-halloween.jpg";
import heroChristmas from "@/assets/event-hero-christmas.jpg";
import evKickoff from "@/assets/event-halloween.jpg";
import evTrunk from "@/assets/ev-trunk-or-treat.jpg";
import evPumpkin from "@/assets/ev-pumpkin-walk.jpg";
import evCostume from "@/assets/ev-costume-contest.jpg";
import evTour from "@/assets/ev-haunted-tour.jpg";
import evMarket from "@/assets/event-market.jpg";
import evCouncil from "@/assets/event-council.jpg";
import evTreeLighting from "@/assets/ev-tree-lighting.jpg";
import evCelebrationLights from "@/assets/ev-celebration-lights.jpg";
import evSantaPhotos from "@/assets/ev-santa-photos.jpg";
import evChristmasParade from "@/assets/ev-christmas-parade.jpg";
import evHolidayMarket from "@/assets/ev-holiday-market.jpg";
import mapTeaser from "@/assets/map-teaser.jpg";
import prideRiver from "@/assets/pride-river.jpg";
import prideMural from "@/assets/pride-mural.jpg";
import prideUniversity from "@/assets/pride-university.jpg";

export type EventCategory = "Family" | "Downtown" | "Ticketed" | "Free";

export type SeasonEvent = {
  title: string;
  /** ISO day within the season month, used by the calendar grid */
  day: number;
  date: string;
  time: string;
  location: string;
  categories: EventCategory[];
  image: string;
  alt: string;
  /** True for general citywide events that appear only in the citywide calendar view */
  citywide?: boolean;
};

export type EventLanding = {
  slug: string;
  /** Seasonal accent token name defined in styles.css */
  accent: "halloween" | "christmas";
  crumbLabel: string;
  eyebrow: string;
  title: string;
  subhead: string;
  metaDescription: string;
  hero: string;
  heroAlt: string;
  countdown: { days: number; label: string };
  quickFacts: { label: string; value: string; note: string }[];
  /** Calendar month rendered by default */
  calendar: { monthLabel: string; year: number; monthIndex: number; daysInMonth: number; firstWeekday: number };
  events: SeasonEvent[];
  mapPins: { label: string; top: string; left: string }[];
  mapLayers: string[];
  visitInfo: { heading: string; body: string }[];
  getInvolved: { label: string; desc: string; to: string }[];
  gallery: { src: string; alt: string; caption: string }[];
  press: string[];
  news: { tag: string; date: string; title: string; excerpt: string }[];
  sibling: { title: string; blurb: string; to: string; cta: string };
};

const citywide: SeasonEvent[] = [
  {
    title: "Rivertown Farmers Market",
    day: 10,
    date: "Saturday, October 10",
    time: "8 a.m. – 1 p.m.",
    location: "Riverwalk Landing",
    categories: ["Family", "Free", "Downtown"],
    image: evMarket,
    alt: "Produce stalls along the Conway Riverwalk on a sunny market morning",
    citywide: true,
  },
  {
    title: "City Council Regular Meeting",
    day: 13,
    date: "Tuesday, October 13",
    time: "6 p.m.",
    location: "Council Chambers, City Hall",
    categories: ["Free"],
    image: evCouncil,
    alt: "Conway City Council chamber with wooden dais and flags",
    citywide: true,
  },
];

export const halloweenLanding: EventLanding = {
  slug: "halloween",
  accent: "halloween",
  crumbLabel: "City of Halloween",
  eyebrow: "Signature event · October",
  title: "City of Halloween",
  subhead:
    "South Carolina's home for Halloween — three weeks of free, family-friendly events in historic downtown Conway.",
  metaDescription:
    "City of Halloween in Conway, SC: kickoff, trunk-or-treat, the Pumpkin Walk, costume contest, downtown trick-or-treating, parking, road closures, and the full October schedule.",
  hero: heroHalloween,
  heroAlt:
    "Conway's historic Main Street decorated with pumpkins and warm string lights at dusk during City of Halloween",
  countdown: { days: 43, label: "days until City of Halloween Kickoff" },
  quickFacts: [
    { label: "Dates", value: "Oct 1 – Oct 31", note: "Three weeks of programming" },
    { label: "Events", value: "24 events", note: "Across 9 downtown venues" },
    { label: "Where", value: "Downtown Conway", note: "Main Street & Riverwalk" },
    { label: "Cost", value: "Free to attend", note: "Two ticketed tours" },
  ],
  calendar: {
    monthLabel: "October 2026",
    year: 2026,
    monthIndex: 9,
    daysInMonth: 31,
    firstWeekday: 4,
  },
  events: [
    {
      title: "Halloween Kickoff & Pumpkin Lighting",
      day: 3,
      date: "Friday, October 3",
      time: "6 p.m. – 9 p.m.",
      location: "Riverfront Park",
      categories: ["Family", "Free", "Downtown"],
      image: evKickoff,
      alt: "Historic downtown street decorated with pumpkins and string lights at dusk",
    },
    {
      title: "Trunk-or-Treat",
      day: 8,
      date: "Wednesday, October 8",
      time: "5:30 p.m. – 8 p.m.",
      location: "City Hall lot, 229 Main Street",
      categories: ["Family", "Free"],
      image: evTrunk,
      alt: "Decorated car trunks handing out candy to costumed children at dusk",
    },
    {
      title: "Riverwalk Pumpkin Walk",
      day: 17,
      date: "Friday, October 17",
      time: "7 p.m. – 10 p.m.",
      location: "Conway Riverwalk",
      categories: ["Family", "Free", "Downtown"],
      image: evPumpkin,
      alt: "Boardwalk lined with hundreds of glowing carved jack-o-lanterns",
    },
    {
      title: "Hometown Costume Contest",
      day: 24,
      date: "Saturday, October 24",
      time: "2 p.m. – 4 p.m.",
      location: "Main Street Stage",
      categories: ["Family", "Free", "Downtown"],
      image: evCostume,
      alt: "Children in homemade costumes on an outdoor community stage",
    },
    {
      title: "Haunted History Walking Tour",
      day: 22,
      date: "Thursday, October 22",
      time: "8 p.m. & 9 p.m.",
      location: "Departs Courthouse Square",
      categories: ["Ticketed", "Downtown"],
      image: evTour,
      alt: "Lantern-led walking tour group beside historic brick buildings at night",
    },
    {
      title: "Trick-or-Treat on Main",
      day: 31,
      date: "Saturday, October 31",
      time: "4 p.m. – 7 p.m.",
      location: "Main Street (closed to traffic)",
      categories: ["Family", "Free", "Downtown"],
      image: evKickoff,
      alt: "Families trick-or-treating along a closed downtown Main Street",
    },
    ...citywide,
  ],
  mapPins: [
    { label: "Parade route", top: "30%", left: "48%" },
    { label: "Road closure", top: "58%", left: "24%" },
    { label: "Free parking", top: "40%", left: "76%" },
    { label: "Restrooms", top: "70%", left: "58%" },
  ],
  mapLayers: [
    "Parade route (Main St, 3rd–9th)",
    "Road closures & detours",
    "Free event parking",
    "Public restrooms",
    "Event stages & venues",
    "Accessible viewing areas",
  ],
  visitInfo: [
    {
      heading: "Parking",
      body: "Free parking at the City Hall lots (229 Main St) and the Laurel Street deck. A free shuttle runs every 12 minutes on event nights.",
    },
    {
      heading: "Accessibility",
      body: "ADA viewing areas are reserved at 3rd Avenue and at the Main Street Stage. Routes are paved and lit; service animals are welcome. A quiet, low-stimulation zone is open at Riverfront Park.",
    },
    {
      heading: "What to bring",
      body: "Candy buckets, a light jacket for river breeze, and a flashlight for the Pumpkin Walk. Coolers and glass containers are not permitted downtown.",
    },
    {
      heading: "Weather policy",
      body: "Events run rain or shine. Lightning within 10 miles pauses outdoor programming; cancellations post here and to city social channels by 2 p.m. the day of.",
    },
  ],
  getInvolved: [
    { label: "Become a vendor", desc: "Food & craft applications close September 12", to: "/business" },
    { label: "Sponsor the season", desc: "Packages from $500 to presenting sponsor", to: "/business" },
    { label: "Volunteer", desc: "Route marshals, setup crews, and greeters", to: "/i-want-to" },
    { label: "Buy tour tickets", desc: "Haunted History Walking Tour — $12", to: "/visitors" },
    { label: "Register a trunk", desc: "Trunk-or-Treat vehicle spaces are free", to: "/i-want-to" },
  ],
  gallery: [
    { src: evPumpkin, alt: "Glowing jack-o-lanterns lining the Riverwalk boardwalk", caption: "Pumpkin Walk, 2025" },
    { src: evCostume, alt: "Children in costume at the hometown costume contest", caption: "Costume Contest, 2025" },
    { src: evTrunk, alt: "Trunk-or-treat vehicles decorated in a downtown lot", caption: "Trunk-or-Treat, 2025" },
    { src: evTour, alt: "Lantern-lit walking tour along a historic street", caption: "Haunted History Tour" },
    { src: prideMural, alt: "Colorful mural on a historic brick wall downtown", caption: "Downtown murals" },
    { src: prideRiver, alt: "Kayakers on the Waccamaw River at sunset", caption: "The Waccamaw" },
  ],
  press: [
    "Southern Living — “Best Small-Town Halloween in the Carolinas”",
    "WPDE News 15 — Season preview",
    "SC Living Magazine — October cover feature",
  ],
  news: [
    {
      tag: "Schedule update",
      date: "August 20, 2026",
      title: "Second Haunted History Tour added for October 22",
      excerpt: "A 9 p.m. departure was added after the 8 p.m. tour sold out in under a week.",
    },
    {
      tag: "Road closure",
      date: "August 14, 2026",
      title: "Main Street closes at 3 p.m. on October 31",
      excerpt: "Detours route through 4th Avenue and Elm Street. Business access is maintained.",
    },
    {
      tag: "Weather",
      date: "August 6, 2026",
      title: "Rain date policy published for outdoor programming",
      excerpt: "Outdoor events move to the following Sunday when lightning is within 10 miles.",
    },
  ],
  sibling: {
    title: "Looking for Christmas in Conway?",
    blurb: "Tree lighting, the holiday parade, and six weeks of riverfront lights every December.",
    to: "/visitors/christmas",
    cta: "Visit Christmas in Conway",
  },
};

export const christmasLanding: EventLanding = {
  slug: "christmas",
  accent: "christmas",
  crumbLabel: "Christmas in Conway",
  eyebrow: "Signature event · December",
  title: "Christmas in Conway",
  subhead:
    "Six weeks of lights along the Waccamaw, a hometown parade, and a market full of Horry County makers — celebrating Conway as a Hallmark Channel “Merriest Christmas Town.”",
  metaDescription:
    "Christmas in Conway: tree lighting, holiday parade, Celebration of Lights driving tour, downtown market, photos with Santa, parking, road closures, and the full December schedule.",
  hero: heroChristmas,
  heroAlt: "Conway's Main Street at dusk with strings of lights crisscrossing above the road and garland-wrapped lampposts",
  countdown: { days: 95, label: "days until the Tree Lighting & Sing-Along" },
  quickFacts: [
    { label: "Dates", value: "Nov 27 – Jan 2", note: "Six weeks of programming" },
    { label: "Events", value: "18 events", note: "Plus nightly light displays" },
    { label: "Where", value: "Downtown Conway", note: "City Hall lawn & Riverwalk" },
    { label: "Cost", value: "Free to attend", note: "Market vendors accept cards" },
  ],
  calendar: {
    monthLabel: "December 2026",
    year: 2026,
    monthIndex: 11,
    daysInMonth: 31,
    firstWeekday: 2,
  },
  events: [
    {
      title: "Tree Lighting & Sing-Along",
      day: 4,
      date: "Friday, December 4",
      time: "6 p.m.",
      location: "City Hall lawn",
      categories: ["Family", "Free", "Downtown"],
      image: evTreeLighting,
      alt: "Crowd gathered around a lit Christmas tree on the City Hall lawn",
    },
    {
      title: "Celebration of Lights Driving Tour",
      day: 5,
      date: "Nightly from December 5",
      time: "5 p.m. – 10 p.m.",
      location: "Conway Riverwalk & Riverfront Park",
      categories: ["Family", "Free", "Downtown"],
      image: evCelebrationLights,
      alt: "Cars driving beneath a canopy of colorful holiday lights along a riverfront road",
    },
    {
      title: "Christmas in Conway Parade",
      day: 12,
      date: "Saturday, December 12",
      time: "3 p.m.",
      location: "Main Street",
      categories: ["Family", "Free", "Downtown"],
      image: evChristmasParade,
      alt: "Families lining Main Street for the hometown holiday parade",
    },
    {
      title: "Holiday Market on Main",
      day: 12,
      date: "Saturday, December 12",
      time: "10 a.m. – 4 p.m.",
      location: "Main Street",
      categories: ["Family", "Free", "Downtown"],
      image: evHolidayMarket,
      alt: "White vendor tents lining a downtown street at the holiday market",
    },
    {
      title: "Photos with Santa",
      day: 19,
      date: "Saturday, December 19",
      time: "5 p.m. – 8 p.m.",
      location: "Riverfront Park gazebo",
      categories: ["Family", "Free"],
      image: evSantaPhotos,
      alt: "Santa greeting a child in a decorated downtown park gazebo",
    },
    {
      title: "Candlelight Historic Home Tour",
      day: 18,
      date: "Friday, December 18",
      time: "6 p.m. & 7:30 p.m.",
      location: "Departs Courthouse Square",
      categories: ["Ticketed", "Downtown"],
      image: evTour,
      alt: "Lantern-lit evening tour beside historic homes",
    },
  ],
  mapPins: [
    { label: "Parade route", top: "30%", left: "48%" },
    { label: "Road closure", top: "58%", left: "24%" },
    { label: "Free parking", top: "40%", left: "76%" },
    { label: "Light trail", top: "70%", left: "58%" },
  ],
  mapLayers: [
    "Parade route (Main St, 3rd–9th)",
    "Road closures & detours",
    "Free event parking",
    "Public restrooms",
    "Celebration of Lights driving route",
    "Accessible viewing areas",
  ],
  visitInfo: [
    {
      heading: "Parking",
      body: "Free parking at the City Hall lots and the Laurel Street deck. A free shuttle runs from the Laurel Street lot on parade day beginning at 1 p.m.",
    },
    {
      heading: "Accessibility",
      body: "An accessible parade viewing area is reserved at 4th Avenue. The Celebration of Lights route and Riverwalk are fully paved, lit, and stroller- and wheelchair-friendly end to end.",
    },
    {
      heading: "What to bring",
      body: "Warm layers for river wind, folding chairs for the parade route (curbside only), and cash or card for market vendors.",
    },
    {
      heading: "Weather policy",
      body: "The parade runs in light rain. Severe weather moves it to the following Saturday; updates post here and to city social channels by noon.",
    },
  ],
  getInvolved: [
    { label: "Holiday Market vendors", desc: "Applications open Oct 1, close Nov 7", to: "/business" },
    { label: "Sponsor the season", desc: "Light-trail and parade sponsorships available", to: "/business" },
    { label: "Volunteer", desc: "Parade marshals, décor crews, and greeters", to: "/i-want-to" },
    { label: "Enter the parade", desc: "Float and walking-unit registration", to: "/i-want-to" },
    { label: "Home tour tickets", desc: "Candlelight Historic Home Tour — $15", to: "/visitors" },
  ],
  gallery: [
    { src: heroChristmas, alt: "Main Street decorated with wreaths and lights at dusk", caption: "Main Street, 2025" },
    { src: evCelebrationLights, alt: "Cars beneath a canopy of holiday lights along the riverfront", caption: "Celebration of Lights" },
    { src: evHolidayMarket, alt: "White vendor tents at the holiday market", caption: "Holiday Market" },
    { src: evChristmasParade, alt: "Families watching the hometown holiday parade", caption: "Parade, 2025" },
    { src: evTreeLighting, alt: "Crowd around the lit Christmas tree on the City Hall lawn", caption: "Tree Lighting" },
    { src: evSantaPhotos, alt: "Santa greeting a child in a decorated gazebo", caption: "Photos with Santa" },
  ],
  press: [
    "Hallmark Channel — “Merriest Christmas Town” recognition",
    "The Post and Courier — Holiday travel guide",
    "WMBF News — Tree lighting live coverage",
  ],
  news: [
    {
      tag: "Schedule update",
      date: "August 18, 2026",
      title: "Holiday Market expands to 90 vendor booths",
      excerpt: "The market adds a second block on Main Street to accommodate Horry County makers.",
    },
    {
      tag: "Road closure",
      date: "August 11, 2026",
      title: "Main Street closes at 1 p.m. on parade day",
      excerpt: "Detours route via 4th Avenue. Shuttle service runs from the Laurel Street lot.",
    },
    {
      tag: "Weather",
      date: "August 4, 2026",
      title: "Parade rain date set for December 19",
      excerpt: "Severe weather moves the parade one week; the market runs as scheduled under tents.",
    },
  ],
  sibling: {
    title: "Looking for City of Halloween?",
    blurb: "Three weeks of pumpkins, parades, and haunted history tours every October.",
    to: "/visitors/halloween",
    cta: "Visit City of Halloween",
  },
};
