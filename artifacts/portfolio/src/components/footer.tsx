export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background py-8">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-lg font-bold font-display tracking-tighter">
          ALEX.<span className="text-primary">DEV</span>
        </div>
        
        <p className="text-muted-foreground text-sm text-center md:text-left">
          &copy; {currentYear} Alex Chen. All rights reserved. Built with React & Tailwind CSS.
        </p>

        <div className="flex items-center gap-6">
          <a href="#home" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Home</a>
          <a href="#about" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">About</a>
          <a href="#projects" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Projects</a>
        </div>
      </div>
    </footer>
  );
}