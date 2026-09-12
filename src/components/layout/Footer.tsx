import Link from "next/link";
import { ArrowUp, ExternalLink } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto flex w-full items-center justify-between p-5">
      <p>&copy; {currentYear} Takunda Muzunze</p>

      <div className="flex items-center gap-6">
        <Link href="https://www.github.com/TakundaMuzunze" target="_blank" className="inline-flex items-center gap-1">
          Github
          <ExternalLink size={16} />
        </Link>

        <button className="inline-flex items-center gap-1">
          Back to top
          <ArrowUp size={16} />
        </button>
      </div>
    </footer>
  );
}
