import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Persistent Stopwatch",
  description:
    "Privacy policy for the Persistent Stopwatch app, including localStorage usage and analytics details.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <main className="mx-auto flex w-full max-w-3xl flex-col gap-8 px-6 py-16">
        <header className="space-y-4">
          <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
            Persistent Stopwatch
          </p>
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Privacy Policy
          </h1>
          <p className="text-sm text-zinc-500">Last updated: 2025-01-01</p>
          <p className="text-lg text-zinc-600">
            This policy explains what data is collected when you use the
            Persistent Stopwatch and how it is used.
          </p>
          <div className="flex flex-wrap gap-3 text-sm">
            <Link className="text-zinc-900 underline" href="/">
              Back to stopwatch
            </Link>
            <Link className="text-zinc-900 underline" href="/info">
              About the app
            </Link>
          </div>
        </header>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Data we collect</h2>
          <ul className="list-disc space-y-2 pl-6 text-zinc-600">
            <li>
              Local timer data stored in your browser (start timestamp and total
              elapsed time).
            </li>
            <li>
              Analytics data such as page views, approximate location, device
              type, and interaction events.
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">How we use data</h2>
          <ul className="list-disc space-y-2 pl-6 text-zinc-600">
            <li>To keep your stopwatch running across sessions.</li>
            <li>To understand which features are used and improve the app.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Local storage</h2>
          <p className="text-zinc-600">
            The stopwatch stores two values in localStorage on your device:
          </p>
          <ul className="list-disc space-y-2 pl-6 text-zinc-600">
            <li>
              <span className="font-medium text-zinc-800">start_tmp</span>:
              Timestamp in milliseconds when the timer is running.
            </li>
            <li>
              <span className="font-medium text-zinc-800">
                accumulated_time
              </span>
              : Total elapsed time in milliseconds.
            </li>
          </ul>
          <p className="text-zinc-600">
            These values never leave your browser unless you clear or sync your
            browser storage.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Analytics provider</h2>
          <p className="text-zinc-600">
            We use Google Analytics 4 to collect usage statistics. Google may
            set cookies or similar identifiers to measure traffic and usage.
            Data is processed by Google LLC in accordance with their privacy
            policy.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Your choices</h2>
          <ul className="list-disc space-y-2 pl-6 text-zinc-600">
            <li>
              You can clear localStorage at any time to reset the stopwatch.
            </li>
            <li>
              You can block analytics cookies in your browser settings or with
              privacy extensions.
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Contact</h2>
          <p className="text-zinc-600">
            For privacy-related questions, contact the maintainer through the
            project repository.
          </p>
        </section>
      </main>
    </div>
  );
}
