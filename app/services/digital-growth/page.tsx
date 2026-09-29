import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Globe2, MessageSquareText, Settings2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Digital Growth Services | Meddot Solutions",
  description: "Explore healthcare website development and GoHighLevel services from Meddot Solutions.",
};

export default function DigitalGrowth() {
  return <main>
    <section className="inner-hero"><div className="container inner-hero-grid"><div><p className="kicker">MEDDOT / DIGITAL GROWTH</p><h1>A better digital front door for your practice.</h1><p>We help independent practices create a clear online presence and connect the tools that support patient inquiries and communication.</p><Link className="button button-teal" href="/contact">Discuss your project <ArrowUpRight size={17} /></Link></div><div className="digital-hero-card"><div className="digital-card-top"><span>CONNECTED PRACTICE EXPERIENCE</span><span>MEDDOT / 02</span></div><Globe2 size={78} strokeWidth={.9} /><div><strong>From first impression<br />to first conversation.</strong><p>Websites · GoHighLevel</p></div></div></div></section>
    <section className="section"><div className="container"><div className="section-intro"><div><p className="kicker">THE OFFERING</p><h2>Make the next step easier to take.</h2></div><p>Digital work should serve a real practice need, whether that is explaining your services or making it easier for someone to get in touch.</p></div><div className="service-card-grid three-col">
      <article className="service-card"><Globe2 size={29} strokeWidth={1.5} /><h3>Website development</h3><p>Practice websites with clear content, thoughtful design, mobile usability, and an easy path to contact your team.</p></article>
      <article className="service-card"><MessageSquareText size={29} strokeWidth={1.5} /><h3>GoHighLevel services</h3><p>GoHighLevel support shaped around your practice's inquiry and communication needs. We define the specific setup and workflows together.</p></article>
      <article className="service-card"><Settings2 size={29} strokeWidth={1.5} /><h3>Connected thinking</h3><p>Plan how your website and communication tools should work together, with a practical scope your team can manage.</p></article>
    </div></div></section>
    <section className="section pale-section"><div className="container split-section"><div><p className="kicker">OUR APPROACH</p><h2>Built around the way patients find you.</h2></div><div><p>A prospective patient should quickly understand what you offer, where you work, and how to take the next step. Your team should have a clear way to handle that interest. We bring those two perspectives into the planning process.</p><Link className="text-link" href="/how-we-work">See how we work <ArrowUpRight size={17} /></Link></div></div></section>
    <section className="mini-cta"><div className="container mini-cta-inner"><h2>Have a website or workflow in mind?</h2><Link className="button button-navy" href="/contact">Talk through your needs <ArrowUpRight size={17} /></Link></div></section>
  </main>;
}
