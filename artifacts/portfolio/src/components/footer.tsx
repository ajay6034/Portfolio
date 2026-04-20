import { Link } from "wouter";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background py-8">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
        <Link
          href="/"
          className="text-lg font-bold font-display tracking-tighter hover:opacity-80 transition-opacity"
        >
          AJAY.<span className="text-primary">AI</span>
        </Link>

        <p className="text-muted-foreground text-sm text-center md:text-left">
          &copy; {currentYear} Ajay Kumar. All rights reserved.
        </p>

        <div className="flex items-center gap-6">
          <Link href="/" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            Home
          </Link>
          <Link href="/#about" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            About
          </Link>
          <Link href="/projects" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            Projects
          </Link>
        </div>
      </div>
    </footer>
  );
}
