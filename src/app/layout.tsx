import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

import { ToastProvider } from "@/components/ui/ToastProvider";

export const metadata: Metadata = {
  title: "Takunda Muzunze",
  description: "Software Engineer portfolio",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try { document.documentElement.dataset.theme = localStorage.getItem('portfolio-theme') === 'dark' ? 'dark' : 'light'; } catch {}`,
          }}
        />
      </head>
      <body>
        <ToastProvider />
        <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-10">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
