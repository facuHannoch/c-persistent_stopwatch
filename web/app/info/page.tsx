import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Info | Persistent Stopwatch",
  description:
    "Learn how the persistent stopwatch works, what it stores locally, and how it keeps time across sessions.",
};

export default function InfoPage() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900">
      <main className="mx-auto flex w-full max-w-3xl flex-col gap-8 px-6 py-16">
        <header className="space-y-4">
          <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
            Persistent Stopwatch
          </p>
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            About Persistent Stopwatch
          </h1>
          <p className="text-lg text-zinc-600">
            This app keeps accurate time even when your browser closes by
            storing timestamps locally and recalculating elapsed time on every
            visit.
          </p>
          <div className="flex flex-wrap gap-3 text-sm">
            <Link className="text-zinc-900 underline" href="/">
              Back to stopwatch
            </Link>
            <Link className="text-zinc-900 underline" href="/privacy-policy">
              Privacy policy
            </Link>
          </div>
        </header>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">How it works</h2>
          <p className="text-zinc-600">
            When you start the timer, the app stores a start timestamp in
            localStorage. When you pause, it adds the elapsed time to a stored
            total. On every load, it calculates:
          </p>
          <ul className="list-disc space-y-2 pl-6 text-zinc-600">
            <li>
              Running: accumulated time plus the difference between now and the
              start timestamp.
            </li>
            <li>Paused: the accumulated time only.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">What is stored</h2>
          <p className="text-zinc-600">
            The app stores two values in localStorage:
          </p>
          <ul className="list-disc space-y-2 pl-6 text-zinc-600">
            <li>
              <span className="font-medium text-zinc-800">start_tmp</span>:
              Timestamp for the current running session or null when paused.
            </li>
            <li>
              <span className="font-medium text-zinc-800">
                accumulated_time
              </span>
              : Total elapsed milliseconds across sessions.
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Analytics</h2>
          <p className="text-zinc-600">
            We use Google Analytics 4 to understand how people use the
            stopwatch. This helps prioritize improvements and usability fixes.
            You can learn more on the privacy policy page.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Contact</h2>
          <p className="text-zinc-600">
            If you have questions or concerns, reach out via the contact method
            listed in the project repository.
          </p>
        </section>
      </main>
    </div>
  );
}
