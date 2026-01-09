"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

const STORAGE_KEYS = {
  start: "start_tmp",
  accumulated: "accumulated_time",
};

const readStoredTime = () => {
  if (typeof window === "undefined") {
    return { startTimestamp: null, accumulatedMs: 0 };
  }

  const startRaw = window.localStorage.getItem(STORAGE_KEYS.start);
  const accumulatedRaw = window.localStorage.getItem(STORAGE_KEYS.accumulated);
  const startTimestamp =
    startRaw === null ? null : Number.parseInt(startRaw, 10);
  const accumulatedMs =
    accumulatedRaw === null ? 0 : Number.parseInt(accumulatedRaw, 10);

  return {
    startTimestamp: Number.isNaN(startTimestamp) ? null : startTimestamp,
    accumulatedMs: Number.isNaN(accumulatedMs) ? 0 : accumulatedMs,
  };
};

const persistTime = (startTimestamp: number | null, accumulatedMs: number) => {
  if (typeof window === "undefined") return;

  if (startTimestamp === null) {
    window.localStorage.removeItem(STORAGE_KEYS.start);
  } else {
    window.localStorage.setItem(STORAGE_KEYS.start, String(startTimestamp));
  }
  window.localStorage.setItem(STORAGE_KEYS.accumulated, String(accumulatedMs));
};

const formatTime = (ms: number) => {
  const totalSeconds = Math.max(0, Math.floor(ms / 1000));
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return [
    String(hours).padStart(2, "0"),
    String(minutes).padStart(2, "0"),
    String(seconds).padStart(2, "0"),
  ].join(":");
};

const trackEvent = (name: string) => {
  if (typeof window === "undefined") return;
  const maybeGtag = (window as Window & { gtag?: (...args: unknown[]) => void })
    .gtag;
  if (typeof maybeGtag === "function") {
    maybeGtag("event", name);
  }
};

export default function Home() {
  const [startTimestamp, setStartTimestamp] = useState<number | null>(null);
  const [accumulatedMs, setAccumulatedMs] = useState(0);
  const [nowMs, setNowMs] = useState(0);

  useEffect(() => {
    const stored = readStoredTime();
    setStartTimestamp(stored.startTimestamp);
    setAccumulatedMs(stored.accumulatedMs);
    setNowMs(Date.now());
  }, []);

  useEffect(() => {
    if (startTimestamp === null) return;

    const tick = () => setNowMs(Date.now());
    tick();
    const interval = window.setInterval(tick, 1000);
    return () => window.clearInterval(interval);
  }, [startTimestamp]);

  const totalMs =
    startTimestamp === null
      ? accumulatedMs
      : accumulatedMs + Math.max(0, nowMs - startTimestamp);
  const formattedTime = useMemo(() => formatTime(totalMs), [totalMs]);
  const isRunning = startTimestamp !== null;
  const resetDisabled = startTimestamp === null && accumulatedMs === 0;

  const handleStartPause = () => {
    if (startTimestamp === null) {
      const nextStart = Date.now();
      setStartTimestamp(nextStart);
      persistTime(nextStart, accumulatedMs);
      setNowMs(Date.now());
      trackEvent("timer_start");
      return;
    }

    const elapsed = Date.now() - startTimestamp;
    const nextAccumulated = accumulatedMs + Math.max(0, elapsed);
    setStartTimestamp(null);
    setAccumulatedMs(nextAccumulated);
    persistTime(null, nextAccumulated);
    setNowMs(Date.now());
    trackEvent("timer_pause");
  };

  const handleReset = () => {
    setStartTimestamp(null);
    setAccumulatedMs(0);
    persistTime(null, 0);
    setNowMs(Date.now());
    trackEvent("timer_reset");
  };

  return (
    <div className="min-h-screen bg-[var(--sand)] text-[var(--ink)]">
      <header className="relative z-10">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 text-sm uppercase tracking-[0.2em] text-[var(--ink)]">
          <span className="font-semibold">Persistent Stopwatch</span>
          <div className="flex items-center gap-6 text-xs font-medium">
            <Link
              href="/info"
              className="transition hover:text-[var(--ember)]"
              onClick={() => trackEvent("info_page_click")}
            >
              Info
            </Link>
            <Link
              href="/privacy-policy"
              className="transition hover:text-[var(--ember)]"
            >
              Privacy
            </Link>
          </div>
        </nav>
      </header>

      <main>
        <section
          className="relative overflow-hidden"
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              trackEvent("empty_area_click");
            }
          }}
        >
          <div className="pointer-events-none absolute -left-20 top-24 h-64 w-64 rounded-full bg-[var(--glow-2)] opacity-50 blur-3xl" />
          <div className="pointer-events-none absolute -right-10 top-10 h-72 w-72 rounded-full bg-[var(--glow-1)] opacity-60 blur-3xl" />
          <div className="pointer-events-none absolute bottom-0 right-20 h-40 w-40 rounded-full bg-[var(--gold)] opacity-30 blur-2xl" />

          <div className="relative mx-auto grid min-h-screen max-w-6xl items-center gap-12 px-6 py-16 md:grid-cols-[1.05fr_0.95fr] md:py-24">
            <div className="space-y-8">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--teal)]">
                Always-on timing
              </p>
              <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
                A stopwatch that keeps running even when your tab is gone.
              </h1>
              <p className="max-w-xl text-lg text-[var(--ink)]/80">
                Start it once, close the browser, and come back later. We store
                timestamps, not ticking timers, so your elapsed time is always
                accurate.
              </p>
              <div className="flex flex-wrap items-center gap-4 text-sm">
                <button
                  type="button"
                  onClick={handleStartPause}
                  className={`rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] transition ${
                    isRunning
                      ? "bg-[var(--ink)] text-[var(--sand)] hover:bg-black"
                      : "bg-[var(--ember)] text-white hover:bg-[#d44e24]"
                  }`}
                >
                  {isRunning ? "Pause" : "Start"}
                </button>
                <button
                  type="button"
                  onClick={handleReset}
                  disabled={resetDisabled}
                  className={`rounded-full border px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] transition ${
                    resetDisabled
                      ? "cursor-not-allowed border-[var(--ink)]/20 text-[var(--ink)]/30"
                      : "border-[var(--ink)]/40 text-[var(--ink)] hover:border-[var(--ink)]"
                  }`}
                >
                  Reset
                </button>
              </div>
              <div className="flex flex-wrap gap-6 text-sm text-[var(--ink)]/70">
                <div>
                  <span className="block text-xs uppercase tracking-[0.3em] text-[var(--teal)]">
                    Status
                  </span>
                  <span className="text-base font-medium">
                    {isRunning ? "Running" : "Paused"}
                  </span>
                </div>
                <div>
                  <span className="block text-xs uppercase tracking-[0.3em] text-[var(--teal)]">
                    Stored Locally
                  </span>
                  <span className="text-base font-medium">
                    Browser storage
                  </span>
                </div>
              </div>
            </div>

            <div className="rounded-[32px] border border-white/60 bg-white/70 p-8 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.35)] backdrop-blur">
              <button
                type="button"
                onClick={() => trackEvent("display_click")}
                className="w-full rounded-3xl border border-[var(--ink)]/10 bg-[var(--mist)] px-6 py-10 text-center font-mono text-4xl font-bold tracking-[0.2em] text-[var(--ink)] md:text-5xl"
                aria-label="Elapsed time display"
              >
                {formattedTime}
              </button>
              <div className="mt-6 grid gap-4 text-sm text-[var(--ink)]/70">
                <div className="flex items-center justify-between rounded-2xl bg-white/70 px-4 py-3">
                  <span className="text-xs uppercase tracking-[0.25em] text-[var(--teal)]">
                    Persistence
                  </span>
                  <span className="font-medium">Local timestamps</span>
                </div>
                <div className="flex items-center justify-between rounded-2xl bg-white/70 px-4 py-3">
                  <span className="text-xs uppercase tracking-[0.25em] text-[var(--teal)]">
                    Precision
                  </span>
                  <span className="font-medium">Seconds display</span>
                </div>
                <div className="flex items-center justify-between rounded-2xl bg-white/70 px-4 py-3">
                  <span className="text-xs uppercase tracking-[0.25em] text-[var(--teal)]">
                    Reset
                  </span>
                  <span className="font-medium">Clears stored time</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white/80">
          <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2">
            <div className="space-y-6">
              <h2 className="text-3xl font-semibold">Why it persists</h2>
              <p className="text-base text-[var(--ink)]/70">
                Instead of keeping a timer alive, we store a start timestamp and
                the total accumulated time in your browser. That makes the timer
                resilient to refreshes, closed tabs, and long breaks.
              </p>
              <div className="space-y-4 text-sm text-[var(--ink)]/70">
                <div className="rounded-2xl border border-[var(--ink)]/10 bg-white px-5 py-4">
                  <span className="block text-xs uppercase tracking-[0.3em] text-[var(--ember)]">
                    Start
                  </span>
                  <p className="mt-2">
                    We save the exact moment you press start.
                  </p>
                </div>
                <div className="rounded-2xl border border-[var(--ink)]/10 bg-white px-5 py-4">
                  <span className="block text-xs uppercase tracking-[0.3em] text-[var(--ember)]">
                    Pause
                  </span>
                  <p className="mt-2">
                    We add the elapsed time to your stored total.
                  </p>
                </div>
                <div className="rounded-2xl border border-[var(--ink)]/10 bg-white px-5 py-4">
                  <span className="block text-xs uppercase tracking-[0.3em] text-[var(--ember)]">
                    Resume
                  </span>
                  <p className="mt-2">
                    We continue counting from the stored total instantly.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-semibold">Built for long sessions</h2>
              <p className="text-base text-[var(--ink)]/70">
                Track workouts, study sessions, long builds, or coffee brews
                without worrying about tab lifecycles. The timer keeps honest
                time even if your laptop sleeps.
              </p>
              <div className="grid gap-4 text-sm text-[var(--ink)]/70 md:grid-cols-2">
                <div className="rounded-2xl bg-[var(--sand)] px-5 py-4">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--teal)]">
                    Zero drift
                  </h3>
                  <p className="mt-2">
                    We compute elapsed time from timestamps, not timers.
                  </p>
                </div>
                <div className="rounded-2xl bg-[var(--sand)] px-5 py-4">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--teal)]">
                    One click
                  </h3>
                  <p className="mt-2">
                    Start and pause instantly with a clean interface.
                  </p>
                </div>
                <div className="rounded-2xl bg-[var(--sand)] px-5 py-4">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--teal)]">
                    Local-first
                  </h3>
                  <p className="mt-2">
                    Your timing data stays inside your browser storage.
                  </p>
                </div>
                <div className="rounded-2xl bg-[var(--sand)] px-5 py-4">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--teal)]">
                    Clear reset
                  </h3>
                  <p className="mt-2">
                    Reset wipes both stored values in one action.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[var(--sand)]">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <div className="grid gap-10 rounded-[32px] border border-[var(--ink)]/10 bg-white/80 p-10 md:grid-cols-3">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--ember)]">
                  Best for
                </h3>
                <p className="mt-4 text-lg font-medium">
                  Deep work, training blocks, long cooking, and field work.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--ember)]">
                  What you get
                </h3>
                <p className="mt-4 text-lg font-medium">
                  A focused timer with no accounts and no resets on refresh.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--ember)]">
                  Always visible
                </h3>
                <p className="mt-4 text-lg font-medium">
                  The stopwatch lives at the top of the page so you can scroll
                  and still jump back to it fast.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
