import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";

import { AppShell } from "@/components/app-shell";
import { Button } from "@/components/ui/button";

const CALENDLY_URL =
  "https://calendly.com/anmolkumar2003-work/30-minute-discovery-call";

export const metadata: Metadata = {
  title: "Contact Me",
  description: "Get in touch or book a 30-minute discovery call.",
};

export default function ContactPage() {
  return (
    <AppShell backHref="/" backLabel="Home">
      <div className="mx-auto w-full max-w-5xl px-5 py-10 sm:px-8 sm:py-14 lg:px-10 lg:py-20">
        <div className="max-w-2xl">
          <p className="eyebrow text-emerald-700">Let&apos;s talk</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-[-0.045em] text-ink sm:text-5xl">
            Contact Me
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-8 text-muted-foreground">
            Have a project in mind or want to discuss an idea? Book a time that
            works for you.
          </p>
        </div>

        <section
          className="mt-10 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_22px_60px_-42px_rgba(15,23,42,0.4)] sm:mt-12"
          aria-labelledby="schedule-heading"
        >
          <div className="flex flex-col gap-5 border-b border-slate-100 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <div>
              <h2 id="schedule-heading" className="text-xl font-semibold tracking-tight text-ink">
                Schedule a discovery call
              </h2>
              <p className="mt-1.5 text-sm leading-6 text-slate-500">
                Choose a convenient time for a 30-minute conversation.
              </p>
            </div>
            <Button asChild variant="outline" size="sm" className="self-start sm:self-auto">
              <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
                Open Calendly in a new tab
                <ArrowUpRight aria-hidden="true" />
              </a>
            </Button>
          </div>

          <div className="overflow-hidden bg-white">
            <iframe
              src={CALENDLY_URL}
              width="100%"
              height="700"
              frameBorder="0"
              title="Schedule a 30-minute discovery call"
              loading="lazy"
              className="block min-h-[700px] w-full border-0"
            />
          </div>
        </section>
      </div>
    </AppShell>
  );
}
