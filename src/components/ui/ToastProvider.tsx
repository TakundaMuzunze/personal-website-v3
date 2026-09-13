"use client";

import { Toaster } from "react-hot-toast";

export function ToastProvider() {
  return (
    <Toaster
      position="bottom-center"
      toastOptions={{
        duration: 5000,
        style: {
          background: "var(--color-background)",
          color: "var(--color-primary)",
          border: "1px solid var(--color-surface)",
          borderRadius: "12px",
        },
        success: { iconTheme: { primary: "var(--color-accent)", secondary: "var(--color-background)" } },
        error: { duration: 7000 },
      }}
    />
  );
}
