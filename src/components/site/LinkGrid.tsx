import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export type GridItem = { title: string; desc: string; to?: string };

export function LinkGrid({ heading, items }: { heading: string; items: GridItem[] }) {
  const id = heading.toLowerCase().replace(/[^a-z]+/g, "-");
  return (
    <section className="section-pad" aria-labelledby={id}>
      <div className="container-civic">
        <h2 id={id}>{heading}</h2>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <li key={item.title}>
              <Link
                to={item.to ?? "/i-want-to"}
                className="flex h-full flex-col rounded-lg border border-border bg-card p-6 shadow-card transition-colors hover:border-primary"
              >
                <h3 className="text-xl">{item.title}</h3>
                <p className="mt-2 flex-1 text-muted-foreground">{item.desc}</p>
                <span className="mt-4 inline-flex items-center gap-1 font-semibold text-primary">
                  Learn more <ArrowRight aria-hidden="true" className="size-4" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
