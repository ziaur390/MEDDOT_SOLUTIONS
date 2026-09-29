import type { Metadata } from "next";
import { ArrowUpRight, Check } from "lucide-react";
import { revenueServices } from "@/lib/service-content";

export const metadata: Metadata = {
  title: "Revenue Operations | Meddot Solutions",
  description: "Explore Meddot's medical billing, revenue cycle management, medical coding, and credentialing services for independent practices.",
};

export default function RevenueOperations() {
  return <main>
    <section className="inner-hero navy-hero"><div className="container inner-hero-grid"><div><p className="kicker">MEDDOT / REVENUE OPERATIONS</p><h1>Clarity for the business side of care.</h1><p>Billing, revenue cycle management, coding, and credentialing each have a part to play in a healthier practice workflow.</p><a className="button button-teal" href="/contact">Request a consultation <ArrowUpRight size={17} /></a></div><div className="hero-index"><span>FOUR CONNECTED SERVICES</span>{Object.values(revenueServices).map((service, i) => <div key={service.title}><span>0{i + 1}</span>{service.title.replace(/ (that|with|of|the).*$/, "")}</div>)}</div></div></section>
    <section className="section"><div className="container"><div className="section-intro"><div><p className="kicker">OUR SERVICES</p><h2>Support at every handoff.</h2></div><p>Explore the areas where Meddot can help your practice organize essential revenue work.</p></div><div className="service-card-grid">{Object.entries(revenueServices).map(([slug, service], i) => <a className="service-card" href={`/services/revenue-operations/${slug}`} key={slug}><span>0{i + 1} / 04</span><h3>{service.title}</h3><p>{service.intro}</p><strong>Explore service <ArrowUpRight size={17} /></strong></a>)}</div></div></section>
    <section className="section pale-section"><div className="container split-section"><div><p className="kicker">WHY THE WHOLE CYCLE</p><h2>Good work depends on good connections.</h2></div><div><p>Details move between the front office, clinical team, billing staff, and payers. When responsibilities and open questions are visible, practices can make better decisions about the work ahead.</p><ul className="check-list"><li><Check size={18} /> Clearer handoffs</li><li><Check size={18} /> Focus on unresolved work</li><li><Check size={18} /> More useful conversations about progress</li></ul></div></div></section>
    <section className="mini-cta"><div className="container mini-cta-inner"><h2>Let’s talk about your current workflow.</h2><a className="button button-navy" href="/contact">Request a consultation <ArrowUpRight size={17} /></a></div></section>
  </main>;
}
