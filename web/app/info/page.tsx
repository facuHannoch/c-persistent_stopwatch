import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Info | Persistent Stopwatch",
  description:
    "Learn how the persistent stopwatch works, what it stores locally, and how it keeps time across sessions.",
};

export default function InfoPage() {
  return (
    <div className="min-h-screen bg-[var(--sand)] text-[var(--ink)]">
      <header className="relative z-10">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 text-sm uppercase tracking-[0.2em] text-[var(--ink)]">
          <span className="font-semibold">Persistent Stopwatch</span>
          <div className="flex items-center gap-6 text-xs font-medium">
            <Link className="transition hover:text-[var(--ember)]" href="/info">
              Info
            </Link>
            <Link
              className="transition hover:text-[var(--ember)]"
              href="/privacy-policy"
            >
              Privacy
            </Link>
          </div>
        </nav>
      </header>

      <main className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 pb-20">
        <section className="rounded-[32px] border border-[var(--ink)]/10 bg-white/80 p-8 shadow-[0_30px_80px_-60px_rgba(0,0,0,0.35)] backdrop-blur sm:p-12">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--teal)]">
            About
          </p>
          <h1 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl">
            About Persistent Stopwatch
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-[var(--ink)]/80">
            This app keeps accurate time even when your browser closes by
            storing timestamps locally and recalculating elapsed time on every
            visit.
          </p>
          <div className="mt-6 flex flex-wrap gap-6 text-sm text-[var(--ink)]/70">
            <Link className="transition hover:text-[var(--ember)]" href="/">
              Back to stopwatch
            </Link>
            <Link
              className="transition hover:text-[var(--ember)]"
              href="/privacy-policy"
            >
              Privacy policy
            </Link>
          </div>
        </section>

        <section className="grid gap-8 md:grid-cols-2">
          <div className="space-y-4 rounded-[28px] border border-[var(--ink)]/10 bg-white/70 p-8">
            <h2 className="text-xl font-semibold">How it works</h2>
            <p className="text-[var(--ink)]/70">
              When you start the timer, the app stores a start timestamp in
              localStorage. When you pause, it adds the elapsed time to a stored
              total. On every load, it calculates:
            </p>
            <ul className="list-disc space-y-2 pl-6 text-[var(--ink)]/70">
              <li>
                Running: accumulated time plus the difference between now and
                the start timestamp.
              </li>
              <li>Paused: the accumulated time only.</li>
            </ul>
          </div>
          <div className="space-y-4 rounded-[28px] border border-[var(--ink)]/10 bg-white/70 p-8">
            <h2 className="text-xl font-semibold">What is stored</h2>
            <p className="text-[var(--ink)]/70">
              The app stores two values in localStorage:
            </p>
            <ul className="list-disc space-y-2 pl-6 text-[var(--ink)]/70">
              <li>
                <span className="font-medium text-[var(--ink)]">start_tmp</span>
                : Timestamp for the current running session or null when
                paused.
              </li>
              <li>
                <span className="font-medium text-[var(--ink)]">
                  accumulated_time
                </span>
                : Total elapsed milliseconds across sessions.
              </li>
            </ul>
          </div>
        </section>

        <section className="grid gap-8 md:grid-cols-2">
          <div className="space-y-4 rounded-[28px] border border-[var(--ink)]/10 bg-white/70 p-8">
            <h2 className="text-xl font-semibold">Analytics</h2>
            <p className="text-[var(--ink)]/70">
              We use Google Analytics 4 to understand how people use the
              stopwatch. This helps prioritize improvements and usability fixes.
              You can learn more on the privacy policy page.
            </p>
          </div>
          <div className="space-y-4 rounded-[28px] border border-[var(--ink)]/10 bg-white/70 p-8">
            <h2 className="text-xl font-semibold">Contact</h2>
            <p className="text-[var(--ink)]/70">
              If you have questions or concerns, reach out via the contact
              method listed in the project repository.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
