import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";

type Crumb = { label: string; to?: string };

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-1 text-sm text-muted-foreground">
        <li className="flex items-center gap-1">
          <Link to="/" className="underline-offset-4 hover:text-primary hover:underline">
            Home
          </Link>
          <ChevronRight aria-hidden="true" className="size-4" />
        </li>
        {items.map((c, i) => (
          <li key={c.label} className="flex items-center gap-1">
            {c.to && i < items.length - 1 ? (
              <Link to={c.to} className="underline-offset-4 hover:text-primary hover:underline">
                {c.label}
              </Link>
            ) : (
              <span aria-current="page" className="font-semibold text-foreground">
                {c.label}
              </span>
            )}
            {i < items.length - 1 ? <ChevronRight aria-hidden="true" className="size-4" /> : null}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function PageHeader({
  eyebrow,
  title,
  intro,
  crumbs,
  image,
  imageAlt,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  crumbs: Crumb[];
  image?: string;
  imageAlt?: string;
}) {
  if (image) {
    return (
      <div className="relative isolate overflow-hidden border-b border-border bg-primary-deep">
        <img
          src={image}
          alt={imageAlt ?? ""}
          width={1600}
          height={700}
          className="absolute inset-0 -z-10 size-full object-cover"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-gradient-to-r from-primary-deep/95 via-primary-deep/80 to-primary-deep/40"
        />
        <div className="container-civic py-12 md:py-20 text-primary-foreground">
          <div className="[&_a]:text-primary-foreground/85 [&_a:hover]:text-primary-foreground [&_li]:text-primary-foreground/85 [&_span]:text-primary-foreground [&_ol]:text-primary-foreground/85">
            <Breadcrumbs items={crumbs} />
          </div>
          {eyebrow ? (
            <p className="eyebrow mt-6 text-primary-foreground/80">{eyebrow}</p>
          ) : null}
          <h1 className="mt-2 max-w-3xl text-primary-foreground">{title}</h1>
          {intro ? (
            <p className="mt-4 max-w-2xl text-lg text-primary-foreground/90">{intro}</p>
          ) : null}
        </div>
      </div>
    );
  }

  return (
    <div className="border-b border-border bg-muted">
      <div className="container-civic py-8 md:py-12">
        <Breadcrumbs items={crumbs} />
        {eyebrow ? <p className="eyebrow mt-6">{eyebrow}</p> : null}
        <h1 className="mt-2 max-w-3xl">{title}</h1>
        {intro ? <p className="mt-4 max-w-2xl text-lg text-muted-foreground">{intro}</p> : null}
      </div>
    </div>
  );
}


export function Pill({
  children,
  tone = "default",
}: {
  children: React.ReactNode;
  tone?: "default" | "tan" | "green";
}) {
  const tones = {
    default: "border-border bg-muted text-muted-foreground",
    tan: "border-secondary/40 bg-secondary/10 text-secondary",
    green: "border-primary/30 bg-primary/10 text-primary",
  };
  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold ${tones[tone]}`}
    >
      {children}
    </span>
  );
}
