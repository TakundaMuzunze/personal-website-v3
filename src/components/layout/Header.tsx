"use client";

import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const dialog = useRef<HTMLDialogElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1024px)");
    const closeOnDesktop = () => {
      if (desktop.matches) dialog.current?.close();
    };

    desktop.addEventListener("change", closeOnDesktop);
    return () => desktop.removeEventListener("change", closeOnDesktop);
  }, []);

  return (
    <header id="top" tabIndex={-1} className="flex w-full scroll-mt-4 items-center justify-between py-5 text-primary">
      <a href="#top" aria-label="Takunda Muzunze — back to top" className="text-2xl font-semibold">
        TM<span className="text-base text-accent">•</span>
      </a>
      <nav aria-label="Main navigation" className="hidden lg:block">
        <ul className="flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="text-sm transition-colors hover:text-accent">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <button
        type="button"
        aria-label="Open navigation"
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        onClick={() => {
          dialog.current?.showModal();
          setIsOpen(true);
        }}
        className="inline-flex size-11 items-center justify-center rounded-full hover:bg-surface lg:hidden"
      >
        <Menu size={22} aria-hidden="true" />
      </button>
      <dialog
        ref={dialog}
        id="mobile-navigation"
        aria-label="Navigation"
        onClose={() => setIsOpen(false)}
        onClick={(event) => {
          if (event.target === event.currentTarget && event.clientX < event.currentTarget.getBoundingClientRect().left) event.currentTarget.close();
        }}
        className="mobile-navigation fixed inset-y-0 right-0 left-auto m-0 h-dvh max-h-none w-1/2 max-w-none border-l border-primary/10 bg-background p-5 text-primary backdrop:bg-black/15 backdrop:backdrop-blur-sm sm:p-8"
      >
        <div className="flex justify-end">
          <button
            type="button"
            aria-label="Close navigation"
            onClick={() => dialog.current?.close()}
            className="inline-flex size-11 items-center justify-center rounded-full hover:bg-surface"
          >
            <X size={22} aria-hidden="true" />
          </button>
        </div>
        <nav aria-label="Mobile navigation" className="mt-12">
          <ul className="flex flex-col gap-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => dialog.current?.close()}
                  className="block border-b border-primary/10 py-4 text-base transition-colors hover:text-accent sm:text-xl"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </dialog>
    </header>
  );
}
