import { LucideIcon } from "lucide-react";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  icon?: LucideIcon;
};

export function ButtonLink({ href, children, variant = "primary", icon: Icon }: ButtonLinkProps) {
  const baseClasses = "inline-flex items-center gap-2 justify-center rounded-md px-6 py-3 text-sm font-medium transition-colors";

  const variants = {
    primary: "hover:bg-accent text-button-text bg-primary hover:opacity-90",
    secondary: "bg-transparent text-primary hover:text-accent",
  };

  return (
    <a href={href} className={`${baseClasses} ${variants[variant]}`}>
      {children}
      {Icon && <Icon size={16} aria-hidden="true" />}
    </a>
  );
}
