import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowUpRight, Check } from "lucide-react";
import { revenueServices, type RevenueSlug } from "@/lib/service-content";

export function generateStaticParams() { return Object.keys(revenueServices).map((slug) => ({ slug })); }
export function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  return params.then(({ slug }) => {
    const service = revenueServices[slug as RevenueSlug];
    return service ? { title: `${service.title} | Meddot Solutions`, description: service.intro } : {};
  });
}

export default async function RevenueService({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = revenueServices[slug as RevenueSlug];
  if (!service) notFound();
  return <main>
    <section className="inner-hero"><div className="container"><p className="kicker">{service.eyebrow}</p><h1>{service.title}</h1><p>{service.intro}</p><a className="button button-teal" href="/contact">Request a consultation <ArrowUpRight size={17} /></a></div></section>
    <section className="section"><div className="container split-section"><div><p className="kicker">THE WORK</p><h2>What this service covers.</h2></div><div><p>{service.overview}</p><p className="scope-note">We’ll confirm the exact responsibilities, systems, and handoffs with your practice before work begins.</p></div></div></section>
    <section className="section pale-section"><div className="container"><div className="section-intro"><div><p className="kicker">A CLOSER LOOK</p><h2>Details that deserve attention.</h2></div></div><div className="service-card-grid">{service.items.map(([title, body], index) => <div className="service-card" key={title}><span>0{index + 1} / 04</span><h3>{title}</h3><p>{body}</p><Check className="service-card-check" size={20} /></div>)}</div></div></section>
    <section className="mini-cta"><div className="container mini-cta-inner"><h2>{service.question}</h2><a className="button button-navy" href="/contact">Talk with Meddot <ArrowUpRight size={17} /></a></div></section>
    <div className="container back-link"><a href="/services/revenue-operations">← All revenue services</a></div>
  </main>;
}
