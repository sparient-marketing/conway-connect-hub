import { createFileRoute } from "@tanstack/react-router";
import { EventLandingPage } from "@/components/site/EventLandingPage";
import { halloweenLanding } from "@/components/site/event-data";

export const Route = createFileRoute("/visitors/halloween")({
  head: () => ({
    meta: [
      { title: "City of Halloween — Conway, SC" },
      { name: "description", content: halloweenLanding.metaDescription },
      { property: "og:title", content: "City of Halloween — Conway, SC" },
      {
        property: "og:description",
        content:
          "Three weeks of free family events in downtown Conway: kickoff, trunk-or-treat, the Pumpkin Walk, and trick-or-treat on Main.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HalloweenPage,
});

function HalloweenPage() {
  return <EventLandingPage data={halloweenLanding} />;
}
