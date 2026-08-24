import { useState } from "react";
import { MessageCircle, Send, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const suggestions = [
  "How do I pay my water bill?",
  "When is trash pickup on my street?",
  "What's happening this weekend?",
  "How do I apply for a building permit?",
];

export function AskConway() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<{ from: "bot" | "user"; text: string }[]>([
    {
      from: "bot",
      text: "Hey neighbor! I'm Ask Conway. I can help you find services, forms, and events around the city.",
    },
  ]);
  const [draft, setDraft] = useState("");

  function send(text: string) {
    if (!text.trim()) return;
    setMessages((m) => [
      ...m,
      { from: "user", text },
      {
        from: "bot",
        text: "Thanks! I'm looking that up for you — a City staff member can also help at (843) 248-2920.",
      },
    ]);
    setDraft("");
  }

  return (
    <div className="fixed bottom-5 right-5 z-50 print:hidden">
      {open ? (
        <div
          role="dialog"
          aria-label="Ask Conway assistant"
          className="mb-3 flex h-[30rem] w-[min(22rem,calc(100vw-2.5rem))] flex-col overflow-hidden rounded-xl border border-border bg-card shadow-raised"
        >
          <div className="flex items-center justify-between gap-2 bg-primary px-4 py-3 text-primary-foreground">
            <div className="min-w-0">
              <p className="font-display text-lg leading-tight">Ask Conway</p>
              <p className="truncate text-xs text-primary-foreground/85">
                Your city services assistant
              </p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close Ask Conway"
              className="grid size-9 place-items-center rounded-md hover:bg-white/15"
            >
              <X aria-hidden="true" className="size-4" />
            </button>
          </div>

          <div className="flex-1 space-y-3 overflow-y-auto bg-muted p-4">
            {messages.map((m, i) => (
              <p
                key={i}
                className={
                  m.from === "bot"
                    ? "max-w-[90%] rounded-lg rounded-tl-none bg-card p-3 text-sm shadow-card"
                    : "ml-auto max-w-[90%] rounded-lg rounded-tr-none bg-primary p-3 text-sm text-primary-foreground"
                }
              >
                {m.text}
              </p>
            ))}
            <div>
              <p className="eyebrow mt-4 mb-2">Try asking</p>
              <ul className="space-y-2">
                {suggestions.map((s) => (
                  <li key={s}>
                    <button
                      type="button"
                      onClick={() => send(s)}
                      className="w-full rounded-md border border-border bg-card px-3 py-2 text-left text-sm transition-colors hover:border-primary hover:bg-background"
                    >
                      {s}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <form
            className="flex items-center gap-2 border-t border-border bg-card p-3"
            onSubmit={(e) => {
              e.preventDefault();
              send(draft);
            }}
          >
            <label htmlFor="ask-conway-input" className="sr-only">
              Ask a question
            </label>
            <input
              id="ask-conway-input"
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              placeholder="Type your question…"
              className="h-11 w-full rounded-md border border-input bg-background px-3 text-sm"
            />
            <Button type="submit" size="icon" aria-label="Send message">
              <Send aria-hidden="true" />
            </Button>
          </form>
        </div>
      ) : null}

      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="ml-auto flex items-center gap-2 rounded-full bg-primary px-5 py-3.5 font-semibold text-primary-foreground shadow-raised transition-colors hover:bg-primary-dark"
      >
        <MessageCircle aria-hidden="true" className="size-5" />
        Ask Conway
      </button>
    </div>
  );
}
