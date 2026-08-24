import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { AlertTriangle, Info, X, CalendarDays } from "lucide-react";

export type AlertSeverity = "info" | "warning" | "emergency";

type Props = {
  severity?: AlertSeverity;
  title: string;
  message?: string;
  actionLabel?: string;
  actionTo?: string;
};

const styles: Record<AlertSeverity, string> = {
  info: "bg-primary text-primary-foreground",
  warning: "bg-secondary text-secondary-foreground",
  emergency: "bg-destructive text-destructive-foreground",
};

export function AlertBanner({
  severity = "info",
  title,
  message,
  actionLabel,
  actionTo,
}: Props) {
  const [open, setOpen] = useState(true);
  if (!open) return null;

  const Icon =
    severity === "emergency" ? AlertTriangle : severity === "warning" ? Info : CalendarDays;

  return (
    <div
      role={severity === "emergency" ? "alert" : "status"}
      className={`${styles[severity]} w-full`}
    >
      <div className="container-civic grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 py-3 sm:flex sm:justify-between">
        <div className="flex min-w-0 items-start gap-3">
          <Icon aria-hidden="true" className="mt-0.5 size-5 shrink-0" />
          <p className="min-w-0 text-sm sm:text-base">
            <span className="font-semibold">{title}</span>
            {message ? <span className="opacity-95"> — {message}</span> : null}
            {actionLabel && actionTo ? (
              <>
                {" "}
                <Link to={actionTo} className="font-semibold underline underline-offset-4">
                  {actionLabel}
                </Link>
              </>
            ) : null}
          </p>
        </div>
        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label={`Dismiss alert: ${title}`}
          className="shrink-0 rounded-md p-2 transition-colors hover:bg-white/15"
        >
          <X aria-hidden="true" className="size-4" />
        </button>
      </div>
    </div>
  );
}
