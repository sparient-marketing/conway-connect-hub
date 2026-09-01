import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  ChevronDown,
  CreditCard,
  Facebook,
  Globe,
  Instagram,
  Megaphone,
  Menu,
  Search,
  Sparkles,
  X,
  Youtube,
} from "lucide-react";
import { primaryNav, iWantTo } from "./nav-data";
import { Button } from "@/components/ui/button";

export function SiteHeader() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpenMenu(null);
        setSearchOpen(false);
      }
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (searchOpen) searchInputRef.current?.focus();
  }, [searchOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background">
      {/* Utility bar */}
      <div className="bg-primary-deep text-primary-foreground">
        <div className="container-civic flex flex-wrap items-center justify-between gap-x-6 gap-y-2 py-2 text-sm">
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-md px-2 py-1 font-medium transition-colors hover:bg-white/15"
          >
            <Globe aria-hidden="true" className="size-4" />
            Select language / Seleccionar idioma
            <ChevronDown aria-hidden="true" className="size-4" />
          </button>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <Link
              to="/i-want-to"
              className="inline-flex items-center gap-2 rounded-md px-2 py-1 font-semibold transition-colors hover:bg-white/15"
            >
              <CreditCard aria-hidden="true" className="size-4" />
              Pay a Bill
            </Link>
            <Link
              to="/i-want-to"
              className="inline-flex items-center gap-2 rounded-md px-2 py-1 font-semibold transition-colors hover:bg-white/15"
            >
              <Megaphone aria-hidden="true" className="size-4" />
              Report an Issue
            </Link>
            <ul className="flex items-center gap-1">
              {[
                { Icon: Facebook, label: "Conway on Facebook" },
                { Icon: Instagram, label: "Conway on Instagram" },
                { Icon: Youtube, label: "Conway on YouTube" },
              ].map(({ Icon, label }) => (
                <li key={label}>
                  <a
                    href="#"
                    aria-label={label}
                    className="grid size-9 place-items-center rounded-md transition-colors hover:bg-white/15"
                  >
                    <Icon aria-hidden="true" className="size-4" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container-civic flex items-center justify-between gap-4 py-3">
        <Link to="/" className="flex min-w-0 items-center rounded-md py-1">
          <img
            src="/conway-logo.png"
            alt="City of Conway, South Carolina"
            width={599}
            height={333}
            className="h-14 w-auto md:h-16"
          />
        </Link>

        <div ref={navRef} className="hidden items-center gap-1 lg:flex">
          <nav aria-label="Primary">
            <ul className="flex items-center">
              {primaryNav.map((item) => (
                <li key={item.label} className="relative">
                  <button
                    type="button"
                    aria-expanded={openMenu === item.label}
                    aria-haspopup="true"
                    onClick={() => setOpenMenu(openMenu === item.label ? null : item.label)}
                    className="inline-flex items-center gap-1 rounded-md px-3 py-2 text-[15px] font-semibold text-foreground transition-colors hover:bg-muted hover:text-primary"
                  >
                    {item.label}
                    <ChevronDown aria-hidden="true" className="size-4" />
                  </button>
                  {openMenu === item.label && item.groups ? (
                    <div className="absolute left-0 top-full z-50 mt-1 w-[26rem] rounded-lg border border-border bg-popover p-5 shadow-raised">
                      <div className="grid grid-cols-2 gap-5">
                        {item.groups.map((group) => (
                          <div key={group.heading}>
                            <p className="eyebrow mb-2">{group.heading}</p>
                            <ul className="space-y-1">
                              {group.links.map((link) => (
                                <li key={link.label}>
                                  <Link
                                    to={link.to}
                                    onClick={() => setOpenMenu(null)}
                                    className="block rounded-md px-2 py-1.5 text-sm text-foreground transition-colors hover:bg-muted hover:text-primary"
                                  >
                                    {link.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                      <Link
                        to={item.to}
                        onClick={() => setOpenMenu(null)}
                        className="mt-4 inline-block border-t border-border pt-3 text-sm font-semibold text-primary underline underline-offset-4"
                      >
                        View all {item.label}
                      </Link>
                    </div>
                  ) : null}
                </li>
              ))}
              <li className="relative">
                <button
                  type="button"
                  aria-expanded={openMenu === "iwant"}
                  aria-haspopup="true"
                  onClick={() => setOpenMenu(openMenu === "iwant" ? null : "iwant")}
                  className="ml-1 inline-flex items-center gap-1 rounded-md bg-secondary px-3 py-2 text-[15px] font-semibold text-secondary-foreground transition-colors hover:bg-secondary/85"
                >
                  I Want To…
                  <ChevronDown aria-hidden="true" className="size-4" />
                </button>
                {openMenu === "iwant" ? (
                  <div className="absolute right-0 top-full z-50 mt-1 w-[34rem] rounded-lg border border-border bg-popover p-5 shadow-raised">
                    <p className="eyebrow mb-3">Popular citizen services</p>
                    <ul className="grid grid-cols-2 gap-2">
                      {iWantTo.map((link) => (
                        <li key={link.label}>
                          <Link
                            to={link.to}
                            onClick={() => setOpenMenu(null)}
                            className="block rounded-md border border-border p-3 transition-colors hover:border-primary hover:bg-muted"
                          >
                            <span className="block text-sm font-semibold text-primary">
                              {link.label}
                            </span>
                            <span className="block text-xs text-muted-foreground">{link.desc}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </li>
            </ul>
          </nav>
          <button
            type="button"
            onClick={() => setSearchOpen(true)}
            aria-label="Open search"
            className="ml-2 grid size-11 place-items-center rounded-md border border-border transition-colors hover:bg-muted"
          >
            <Search aria-hidden="true" className="size-5 text-primary" />
          </button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <button
            type="button"
            onClick={() => setSearchOpen(true)}
            aria-label="Open search"
            className="grid size-11 place-items-center rounded-md border border-border"
          >
            <Search aria-hidden="true" className="size-5 text-primary" />
          </button>
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            className="grid size-11 place-items-center rounded-md bg-primary text-primary-foreground"
          >
            {mobileOpen ? (
              <X aria-hidden="true" className="size-5" />
            ) : (
              <Menu aria-hidden="true" className="size-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {mobileOpen ? (
        <div id="mobile-nav" className="border-t border-border bg-background lg:hidden">
          <nav aria-label="Mobile" className="container-civic py-4">
            <ul className="divide-y divide-border">
              {primaryNav.map((item) => (
                <li key={item.label} className="py-1">
                  <details className="group">
                    <summary className="flex cursor-pointer items-center justify-between rounded-md px-2 py-3 font-semibold">
                      {item.label}
                      <ChevronDown
                        aria-hidden="true"
                        className="size-4 transition-transform group-open:rotate-180"
                      />
                    </summary>
                    <ul className="pb-2 pl-3">
                      {item.groups?.flatMap((g) => g.links).map((link) => (
                        <li key={link.label}>
                          <Link
                            to={link.to}
                            onClick={() => setMobileOpen(false)}
                            className="block rounded-md px-2 py-2 text-sm text-muted-foreground"
                          >
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </details>
                </li>
              ))}
              <li className="pt-3">
                <Button asChild variant="secondary" className="w-full">
                  <Link to="/i-want-to" onClick={() => setMobileOpen(false)}>
                    I Want To…
                  </Link>
                </Button>
              </li>
            </ul>
          </nav>
        </div>
      ) : null}

      {/* Search overlay */}
      {searchOpen ? (
        <div className="absolute inset-x-0 top-0 z-50 border-b border-border bg-background shadow-raised">
          <div className="container-civic py-5">
            <div className="flex items-center gap-3">
              <Sparkles aria-hidden="true" className="size-5 shrink-0 text-secondary" />
              <label htmlFor="site-search" className="sr-only">
                Search the City of Conway website
              </label>
              <input
                ref={searchInputRef}
                id="site-search"
                type="search"
                placeholder="Ask anything — “How do I pay my water bill?”"
                className="h-12 w-full rounded-md border border-input bg-background px-4 text-base placeholder:text-muted-foreground"
              />
              <button
                type="button"
                onClick={() => setSearchOpen(false)}
                aria-label="Close search"
                className="grid size-11 shrink-0 place-items-center rounded-md border border-border"
              >
                <X aria-hidden="true" className="size-5" />
              </button>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              AI-powered search across services, forms, agendas and events.
            </p>
          </div>
        </div>
      ) : null}
    </header>
  );
}
