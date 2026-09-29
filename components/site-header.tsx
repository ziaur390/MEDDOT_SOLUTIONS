"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  { label: "Services", href: "/#services" },
  { label: "Revenue operations", href: "/services/revenue-operations" },
  { label: "Digital growth", href: "/services/digital-growth" },
  { label: "Healthcare AI", href: "/services/healthcare-ai" },
  { label: "How we work", href: "/how-we-work" },
  { label: "About", href: "/about" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" aria-label="Meddot Solutions home" className="brand-logo" onClick={() => setOpen(false)}>
          <img src="/meddot-logo.png" alt="Meddot Solutions" />
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          <Link href="/#services">Services</Link>
          <Link href="/how-we-work">How we work</Link>
          <Link href="/about">About</Link>
        </nav>
        <div className="header-actions">
          <Link className="button button-navy header-cta" href="/contact">Request a consultation <ArrowUpRight size={16} strokeWidth={2} /></Link>
          <Button type="button" variant="ghost" size="icon" className="menu-button" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-nav" onClick={() => setOpen(!open)}>
            {open ? <X size={23} /> : <Menu size={23} />}
          </Button>
        </div>
      </div>
      {open && <nav id="mobile-nav" className="mobile-nav" aria-label="Mobile navigation">
        {links.map((link) => <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}</Link>)}
        <Link className="mobile-nav-cta" href="/contact" onClick={() => setOpen(false)}>Request a consultation <ArrowUpRight size={16} /></Link>
      </nav>}
    </header>
  );
}
