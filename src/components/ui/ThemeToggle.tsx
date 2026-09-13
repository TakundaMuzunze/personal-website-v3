"use client";

import { useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";

function subscribe(callback: () => void) {
  const observer = new MutationObserver(callback);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
  return () => observer.disconnect();
}

export function ThemeToggle() {
  const isDark = useSyncExternalStore(
    subscribe,
    () => document.documentElement.dataset.theme === "dark",
    () => false,
  );

  function toggleTheme() {
    const theme = isDark ? "light" : "dark";
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem("portfolio-theme", theme);
    } catch {
      /* Theme still works when storage is unavailable. */
    }
  }

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label="Dark theme"
      title={isDark ? "Switch to light theme" : "Switch to dark theme"}
      onClick={toggleTheme}
      className="relative inline-flex h-11 w-20 items-center justify-between rounded-full border border-primary/15 bg-surface px-3"
    >
      <span
        aria-hidden="true"
        className={`absolute top-1 left-1 size-8 rounded-full bg-background shadow-sm transition-transform motion-reduce:transition-none ${isDark ? "translate-x-9" : "translate-x-0"}`}
      />
      <Sun size={16} aria-hidden="true" className="relative" />
      <Moon size={16} aria-hidden="true" className="relative" />
    </button>
  );
}
