import Link from "next/link";

export function Header() {
  return (
    <header className="px-6 py-6 md:px-12 lg:px-40">
      <nav className="flex items-center justify-between">
        <Link
          href="/"
          className="text-lg font-medium tracking-wide text-foreground transition-colors hover:text-primary"
        >
          Temitayo Olawoye
        </Link>
        <Link
          href="#projects"
          className="text-lg text-muted-foreground transition-colors hover:text-primary"
        >
          Projects
        </Link>
      </nav>
    </header>
  );
}
