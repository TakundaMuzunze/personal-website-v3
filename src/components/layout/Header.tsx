import Link from "next/link";

const navItems = [
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Work",
    href: "#work",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

export function Header() {
  return (
    <header className="flex w-full items-center justify-between px-5 py-2">
      <Link href="/">
        <h2 className="text-2xl font-semibold">
          TM<span className="text-base text-accent">•</span>
        </h2>
      </Link>

      <nav>
        <ul className="flex items-center gap-4">
          {navItems.map((item) => (
            <li key={item.href} className="text-primary hover:text-primary/75 font-normal md:text-lg">
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
