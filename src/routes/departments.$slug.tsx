import { createFileRoute, notFound } from "@tanstack/react-router";
import { DepartmentPage } from "@/components/site/DepartmentPage";
import { departments } from "@/components/site/department-data";

export const Route = createFileRoute("/departments/$slug")({
  loader: ({ params }) => {
    const dept = departments[params.slug];
    if (!dept) throw notFound();
    return { dept };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Department not found — City of Conway, SC" }, { name: "robots", content: "noindex" }],
      };
    }
    const { dept } = loaderData;
    const title = `${dept.name} — City of Conway, SC`;
    return {
      meta: [
        { title },
        { name: "description", content: dept.metaDescription },
        { property: "og:title", content: title },
        { property: "og:description", content: dept.metaDescription },
      ],
    };
  },
  component: DepartmentRoute,
});

function DepartmentRoute() {
  const { dept } = Route.useLoaderData();
  return <DepartmentPage dept={dept} />;
}
