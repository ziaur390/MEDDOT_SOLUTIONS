import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function SiteFooter() {
  return <footer className="site-footer">
    <div className="container footer-main">
      <div className="footer-brand">
        <Link href="/" className="brand-logo footer-logo" aria-label="Meddot Solutions home"><img src="/meddot-logo.png" alt="Meddot Solutions" /></Link>
        <p>Practical support for the business side of care.</p>
      </div>
      <div className="footer-links"><h2>Explore</h2><Link href="/services/revenue-operations">Revenue operations</Link><Link href="/services/digital-growth">Digital growth</Link><Link href="/services/healthcare-ai">Healthcare AI</Link></div>
      <div className="footer-links"><h2>Company</h2><Link href="/how-we-work">How we work</Link><Link href="/about">About Meddot</Link><Link href="/contact">Contact</Link></div>
      <div className="footer-contact"><span>LET'S START A CONVERSATION</span><h2>Build a stronger practice, together.</h2><Link className="button button-teal" href="/contact">Request a consultation <ArrowUpRight size={17} /></Link></div>
    </div>
    <div className="container footer-bottom"><span>© {new Date().getFullYear()} Meddot Solutions</span><span>Built for independent healthcare practices</span></div>
  </footer>;
}
