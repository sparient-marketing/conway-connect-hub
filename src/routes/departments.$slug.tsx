import { createFileRoute, notFound } from "@tanstack/react-router";
import { DepartmentPage } from "@/components/site/DepartmentPage";
import { departments } from "@/components/site/department-data";

export const Route = createFileRoute("/departments/$slug")({
  loader: ({ params }) => {
    const dept = departments[params.slug];
    if (!dept) throw notFound();
    // Only serializable data crosses the SSR boundary; icons stay in the module.
    return { slug: dept.slug, name: dept.name, description: dept.metaDescription };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Department not found — City of Conway, SC" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const title = `${loaderData.name} — City of Conway, SC`;
    return {
      meta: [
        { title },
        { name: "description", content: loaderData.description },
        { property: "og:title", content: title },
        { property: "og:description", content: loaderData.description },
      ],
    };
  },
  component: DepartmentRoute,
});

function DepartmentRoute() {
  const { slug } = Route.useLoaderData();
  const dept = departments[slug]!;
  return <DepartmentPage dept={dept} />;
}
