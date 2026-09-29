import { ArrowUpRight, Menu } from "lucide-react";

const links = [
  { label: "Services", href: "/#services" },
  { label: "Revenue operations", href: "/services/revenue-operations" },
  { label: "Digital growth", href: "/services/digital-growth" },
  { label: "Healthcare AI", href: "/services/healthcare-ai" },
  { label: "How we work", href: "/how-we-work" },
  { label: "About", href: "/about" },
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a href="/" aria-label="Meddot Solutions home" className="brand-logo">
          <img src="/meddot-logo.png" alt="Meddot Solutions" />
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="/#services">Services</a>
          <a href="/how-we-work">How we work</a>
          <a href="/about">About</a>
        </nav>
        <div className="header-actions">
          <a className="button button-navy header-cta" href="/contact">Request a consultation <ArrowUpRight size={16} strokeWidth={2} /></a>
          <details className="mobile-menu">
            <summary aria-label="Open menu"><Menu size={23} /></summary>
            <nav className="mobile-nav" aria-label="Mobile navigation">
              {links.map((link) => <a key={link.href} href={link.href}>{link.label}</a>)}
              <a className="mobile-nav-cta" href="/contact">Request a consultation <ArrowUpRight size={16} /></a>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
