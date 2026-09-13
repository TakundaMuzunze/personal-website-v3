import type { LucideIcon } from "lucide-react";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  icon?: LucideIcon;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
};

export function Button({ children, variant = "primary", icon: Icon, type = "button", disabled }: ButtonProps) {
  const baseClasses =
    "inline-flex cursor-pointer items-center justify-center gap-2 rounded-md px-6 py-3 text-sm font-medium transition-colors disabled:cursor-not-allowed disabled:opacity-60";

  const variants = {
    primary: "bg-primary text-white hover:bg-accent hover:opacity-90",
    secondary: "bg-transparent text-primary hover:text-accent",
  };

  return (
    <button type={type} disabled={disabled} className={`${baseClasses} ${variants[variant]}`}>
      {children}
      {Icon && <Icon size={16} aria-hidden="true" />}
    </button>
  );
}
