import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Persistent Stopwatch",
  description:
    "Privacy policy for the Persistent Stopwatch app, including localStorage usage and analytics details.",
};

export default function PrivacyPolicyPage() {
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
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--ember)]">
            Privacy
          </p>
          <h1 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl">
            Privacy Policy
          </h1>
          <p className="mt-2 text-sm text-[var(--ink)]/60">
            Last updated: 2025-01-01
          </p>
          <p className="mt-4 max-w-2xl text-lg text-[var(--ink)]/80">
            This policy explains what data is collected when you use the
            Persistent Stopwatch and how it is used.
          </p>
          <div className="mt-6 flex flex-wrap gap-6 text-sm text-[var(--ink)]/70">
            <Link className="transition hover:text-[var(--ember)]" href="/">
              Back to stopwatch
            </Link>
            <Link className="transition hover:text-[var(--ember)]" href="/info">
              About the app
            </Link>
          </div>
        </section>

        <section className="grid gap-8 md:grid-cols-2">
          <div className="space-y-4 rounded-[28px] border border-[var(--ink)]/10 bg-white/70 p-8">
            <h2 className="text-xl font-semibold">Data we collect</h2>
            <ul className="list-disc space-y-2 pl-6 text-[var(--ink)]/70">
              <li>
                Local timer data stored in your browser (start timestamp and
                total elapsed time).
              </li>
              <li>
                Analytics data such as page views, approximate location, device
                type, and interaction events.
              </li>
            </ul>
          </div>
          <div className="space-y-4 rounded-[28px] border border-[var(--ink)]/10 bg-white/70 p-8">
            <h2 className="text-xl font-semibold">How we use data</h2>
            <ul className="list-disc space-y-2 pl-6 text-[var(--ink)]/70">
              <li>To keep your stopwatch running across sessions.</li>
              <li>To understand which features are used and improve the app.</li>
            </ul>
          </div>
        </section>

        <section className="grid gap-8 md:grid-cols-2">
          <div className="space-y-4 rounded-[28px] border border-[var(--ink)]/10 bg-white/70 p-8">
            <h2 className="text-xl font-semibold">Local storage</h2>
            <p className="text-[var(--ink)]/70">
              The stopwatch stores two values in localStorage on your device:
            </p>
            <ul className="list-disc space-y-2 pl-6 text-[var(--ink)]/70">
              <li>
                <span className="font-medium text-[var(--ink)]">start_tmp</span>
                : Timestamp in milliseconds when the timer is running.
              </li>
              <li>
                <span className="font-medium text-[var(--ink)]">
                  accumulated_time
                </span>
                : Total elapsed time in milliseconds.
              </li>
            </ul>
            <p className="text-[var(--ink)]/70">
              These values never leave your browser unless you clear or sync
              your browser storage.
            </p>
          </div>
          <div className="space-y-4 rounded-[28px] border border-[var(--ink)]/10 bg-white/70 p-8">
            <h2 className="text-xl font-semibold">Analytics provider</h2>
            <p className="text-[var(--ink)]/70">
              We use Google Analytics 4 to collect usage statistics. Google may
              set cookies or similar identifiers to measure traffic and usage.
              Data is processed by Google LLC in accordance with their privacy
              policy.
            </p>
          </div>
        </section>

        <section className="grid gap-8 md:grid-cols-2">
          <div className="space-y-4 rounded-[28px] border border-[var(--ink)]/10 bg-white/70 p-8">
            <h2 className="text-xl font-semibold">Your choices</h2>
            <ul className="list-disc space-y-2 pl-6 text-[var(--ink)]/70">
              <li>
                You can clear localStorage at any time to reset the stopwatch.
              </li>
              <li>
                You can block analytics cookies in your browser settings or
                with privacy extensions.
              </li>
            </ul>
          </div>
          <div className="space-y-4 rounded-[28px] border border-[var(--ink)]/10 bg-white/70 p-8">
            <h2 className="text-xl font-semibold">Contact</h2>
            <p className="text-[var(--ink)]/70">
              For privacy-related questions, contact the maintainer through the
              project repository.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
