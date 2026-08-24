import { createFileRoute } from "@tanstack/react-router";
import { EventLandingPage } from "@/components/site/EventLandingPage";
import { christmasLanding } from "@/components/site/event-data";

export const Route = createFileRoute("/visitors/christmas")({
  head: () => ({
    meta: [
      { title: "Christmas in Conway — Conway, SC" },
      { name: "description", content: christmasLanding.metaDescription },
      { property: "og:title", content: "Christmas in Conway — Conway, SC" },
      {
        property: "og:description",
        content: "Tree lighting, holiday parade, market, and riverfront lights all December.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ChristmasPage,
});

function ChristmasPage() {
  return <EventLandingPage data={christmasLanding} />;
}
