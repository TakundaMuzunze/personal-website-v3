import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

import { ToastProvider } from "@/components/ui/ToastProvider";

export const metadata: Metadata = {
  title: "Takunda Muzunze",
  description: "Frontend Software Engineer portfolio",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
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
