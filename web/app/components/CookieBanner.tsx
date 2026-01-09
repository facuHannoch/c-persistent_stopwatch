"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const STORAGE_KEY = "cookie_consent";

type ConsentState = "accepted" | "rejected" | null;

export default function CookieBanner() {
  const [consent, setConsent] = useState<ConsentState>(null);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === "accepted" || saved === "rejected") {
      setConsent(saved);
    }
  }, []);

  const handleChoice = (choice: Exclude<ConsentState, null>) => {
    window.localStorage.setItem(STORAGE_KEY, choice);
    setConsent(choice);
  };

  if (consent) {
    return null;
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-zinc-200 bg-white/95 px-4 py-4 text-zinc-900 shadow-sm backdrop-blur">
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-2 text-sm text-zinc-700">
          <p className="text-base font-medium text-zinc-900">
            We use cookies for analytics.
          </p>
          <p>
            Accepting helps us improve the stopwatch. You can decline and still
            use the app. See the{" "}
            <Link className="underline" href="/privacy-policy">
              privacy policy
            </Link>
            .
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <button
            className="rounded-full border border-zinc-300 px-5 py-2 text-sm font-medium text-zinc-700 transition hover:border-zinc-400"
            type="button"
            onClick={() => handleChoice("rejected")}
          >
            Decline
          </button>
          <button
            className="rounded-full bg-zinc-900 px-5 py-2 text-sm font-medium text-white transition hover:bg-zinc-800"
            type="button"
            onClick={() => handleChoice("accepted")}
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
