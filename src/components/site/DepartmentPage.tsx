import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Download,
  FileText,
  Mail,
  MapPin,
  Phone,
  Clock,
  Megaphone,
  Facebook,
  Instagram,
  ChevronDown,
} from "lucide-react";
import { Breadcrumbs, Pill } from "@/components/site/PageHeader";
import { Button } from "@/components/ui/button";
import {
  departmentSections,
  departmentIcons,
  type Department,
} from "@/components/site/department-data";

function SectionNav({ className = "" }: { className?: string }) {
  return (
    <ul className={`space-y-1 ${className}`}>
      {departmentSections.map((s) => (
        <li key={s.id}>
          <a
            href={`#${s.id}`}
            className="block rounded-md border-l-2 border-transparent px-3 py-2 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:bg-accent hover:text-primary"
          >
            {s.label}
          </a>
        </li>
      ))}
    </ul>
  );
}

export function DepartmentPage({ dept }: { dept: Department }) {
  const Icon = departmentIcons[dept.slug] ?? FileText;

  return (
    <>
      {/* Department header band */}
      <section className="bg-secondary text-secondary-foreground">
        <div className="container-civic grid gap-8 py-8 md:py-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:items-center">
          <div className="min-w-0">
            <div className="[&_a]:text-secondary-foreground/85 [&_a:hover]:text-secondary-foreground [&_li]:text-secondary-foreground/85 [&_span]:text-secondary-foreground">
              <Breadcrumbs
                items={[{ label: "Departments", to: "/departments" }, { label: dept.name }]}
              />
            </div>
            <div className="mt-6 flex items-center gap-3">
              <span className="grid size-12 shrink-0 place-items-center rounded-lg bg-secondary-foreground/15">
                <Icon aria-hidden="true" className="size-6" />
              </span>
              <h1 className="min-w-0 text-secondary-foreground">{dept.name}</h1>
            </div>
            <p className="mt-4 max-w-xl text-lg text-secondary-foreground/90">{dept.tagline}</p>
          </div>
          <img
            src={dept.hero}
            alt={dept.heroAlt}
            width={1280}
            height={720}
            className="h-56 w-full rounded-xl object-cover shadow-card md:h-72"
          />
        </div>
      </section>

      <div className="container-civic grid gap-10 py-10 lg:grid-cols-[200px_minmax(0,1fr)_280px] lg:py-14">
        {/* Left: in-department nav */}
        <nav aria-label="On this page" className="min-w-0">
          <div className="lg:hidden">
            <details className="rounded-lg border border-border bg-card">
              <summary className="flex cursor-pointer items-center justify-between gap-2 px-4 py-3 font-semibold">
                On this page
                <ChevronDown aria-hidden="true" className="size-4" />
              </summary>
              <div className="border-t border-border p-2">
                <SectionNav />
              </div>
            </details>
          </div>
          <div className="hidden lg:block lg:sticky lg:top-28">
            <p className="eyebrow px-3">On this page</p>
            <SectionNav className="mt-3" />
          </div>
        </nav>

        {/* Main content */}
        <main className="min-w-0 space-y-14">
          {/* Overview */}
          <section id="overview" className="scroll-mt-28">
            <h2 className="text-2xl">Overview</h2>
            <p className="mt-3 text-lg text-muted-foreground">{dept.overview}</p>

            <h3 className="mt-8 text-base font-semibold uppercase tracking-wide text-muted-foreground">
              Popular on this page
            </h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {dept.popular.map((p) => (
                <li key={p.label}>
                  <Link
                    to={p.to}
                    className="inline-flex items-center gap-1 rounded-full border border-primary bg-primary/5 px-4 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                  >
                    {p.label}
                    <ArrowRight aria-hidden="true" className="size-4" />
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          {/* CMS module: programs */}
          <section id="programs" className="scroll-mt-28">
            <h2 className="text-2xl">{dept.programsHeading}</h2>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2">
              {dept.programs.map(({ name, desc, Icon: ProgramIcon }) => (
                <li key={name}>
                  <div className="flex h-full flex-col rounded-xl border border-border bg-card p-6 shadow-card">
                    <span className="grid size-11 place-items-center rounded-md bg-primary/10 text-primary">
                      <ProgramIcon aria-hidden="true" className="size-5" />
                    </span>
                    <h3 className="mt-4 text-xl">{name}</h3>
                    <p className="mt-2 flex-1 text-muted-foreground">{desc}</p>
                    <Link
                      to="/i-want-to"
                      className="mt-4 inline-flex items-center gap-1 font-semibold text-primary underline underline-offset-4"
                    >
                      Learn more<span className="sr-only"> about {name}</span>
                      <ArrowRight aria-hidden="true" className="size-4" />
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          {/* CMS module: documents */}
          <section id="documents" className="scroll-mt-28">
            <h2 className="text-2xl">{dept.documentsHeading}</h2>
            <ul className="mt-6 divide-y divide-border overflow-hidden rounded-xl border border-border bg-card shadow-card">
              {dept.documents.map((d) => (
                <li
                  key={d.title}
                  className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-4 p-4"
                >
                  <FileText aria-hidden="true" className="size-6 shrink-0 text-secondary" />
                  <div className="min-w-0">
                    <p className="font-semibold">{d.title}</p>
                    <p className="text-sm text-muted-foreground">
                      {d.date} · {d.size}
                    </p>
                  </div>
                  <Button variant="outline" size="sm" asChild>
                    <a href="#documents" download>
                      <Download aria-hidden="true" className="size-4" />
                      <span className="hidden sm:inline">Download</span>
                      <span className="sr-only">{d.title}</span>
                    </a>
                  </Button>
                </li>
              ))}
            </ul>
          </section>

          {/* CMS module: staff directory */}
          <section id="staff" className="scroll-mt-28">
            <h2 className="text-2xl">Staff directory</h2>
            <div className="mt-6 overflow-x-auto rounded-xl border border-border bg-card shadow-card">
              <table className="w-full min-w-[36rem] border-collapse text-left">
                <caption className="sr-only">{dept.name} staff contacts</caption>
                <thead>
                  <tr className="bg-primary text-primary-foreground">
                    <th scope="col" className="px-4 py-3 text-sm font-semibold">Name</th>
                    <th scope="col" className="px-4 py-3 text-sm font-semibold">Title</th>
                    <th scope="col" className="px-4 py-3 text-sm font-semibold">Phone</th>
                    <th scope="col" className="px-4 py-3 text-sm font-semibold">Email</th>
                  </tr>
                </thead>
                <tbody>
                  {dept.staff.map((s, i) => (
                    <tr key={s.email} className={i % 2 === 1 ? "bg-muted" : undefined}>
                      <th scope="row" className="px-4 py-3 font-semibold">{s.name}</th>
                      <td className="px-4 py-3 text-muted-foreground">{s.title}</td>
                      <td className="px-4 py-3">
                        <a href={`tel:${s.phone.replace(/[^0-9]/g, "")}`} className="text-primary underline underline-offset-4">
                          {s.phone}
                        </a>
                      </td>
                      <td className="px-4 py-3">
                        <a href={`mailto:${s.email}`} className="text-primary underline underline-offset-4">
                          {s.email}
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* CMS module: department news */}
          <section id="news" className="scroll-mt-28">
            <div className="flex flex-wrap items-end justify-between gap-3">
              <h2 className="text-2xl">News from {dept.name}</h2>
              <Link
                to="/residents"
                className="inline-flex items-center gap-1 font-semibold text-primary underline underline-offset-4"
              >
                All city news <ArrowRight aria-hidden="true" className="size-4" />
              </Link>
            </div>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {dept.news.map((n) => (
                <li key={n.title}>
                  <article className="flex h-full flex-col rounded-xl border border-border bg-card p-5 shadow-card">
                    <Pill tone="green">{dept.name}</Pill>
                    <p className="mt-3 text-sm text-muted-foreground">{n.date}</p>
                    <h3 className="mt-1 text-lg">{n.title}</h3>
                    <p className="mt-2 flex-1 text-sm text-muted-foreground">{n.excerpt}</p>
                    <Link
                      to="/residents"
                      className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary underline underline-offset-4"
                    >
                      Read more<span className="sr-only"> about {n.title}</span>
                      <ArrowRight aria-hidden="true" className="size-4" />
                    </Link>
                  </article>
                </li>
              ))}
            </ul>
          </section>
        </main>

        {/* Right: contact card */}
        <aside id="contact" className="min-w-0 scroll-mt-28">
          <div className="lg:sticky lg:top-28">
            <div className="rounded-xl border border-border bg-card p-6 shadow-card">
              <h2 className="text-xl">Contact {dept.name}</h2>
              <ul className="mt-4 space-y-3 text-sm">
                <li className="flex gap-2">
                  <MapPin aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-secondary" />
                  <span>{dept.contact.address}</span>
                </li>
                <li className="flex gap-2">
                  <Phone aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-secondary" />
                  <a
                    href={`tel:${dept.contact.phone.replace(/[^0-9]/g, "")}`}
                    className="text-primary underline underline-offset-4"
                  >
                    {dept.contact.phone}
                  </a>
                </li>
                <li className="flex gap-2">
                  <Mail aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-secondary" />
                  <a
                    href={`mailto:${dept.contact.email}`}
                    className="break-all text-primary underline underline-offset-4"
                  >
                    {dept.contact.email}
                  </a>
                </li>
                <li className="flex gap-2">
                  <Clock aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-secondary" />
                  <span>{dept.contact.hours}</span>
                </li>
              </ul>
              {dept.contact.extra ? (
                <p className="mt-4 rounded-md bg-muted p-3 text-sm text-muted-foreground">
                  {dept.contact.extra}
                </p>
              ) : null}
              <Button asChild className="mt-5 w-full">
                <Link to="/i-want-to">
                  <Megaphone aria-hidden="true" className="size-4" />
                  Report an issue
                </Link>
              </Button>
              <div className="mt-4 flex gap-2">
                {[
                  { Icon: Facebook, label: `${dept.name} on Facebook` },
                  { Icon: Instagram, label: `${dept.name} on Instagram` },
                ].map(({ Icon: SocialIcon, label }) => (
                  <a
                    key={label}
                    href="https://www.cityofconway.com"
                    aria-label={label}
                    className="grid size-11 place-items-center rounded-md border border-border text-foreground transition-colors hover:border-primary hover:text-primary"
                  >
                    <SocialIcon aria-hidden="true" className="size-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}
