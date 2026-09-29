import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { ProcessTabs } from "@/components/process-tabs";

export const metadata: Metadata = {
  title: "How We Work | Meddot Solutions",
  description: "See how Meddot Solutions begins a working relationship with an independent healthcare practice.",
};

export default function HowWeWork() {
  return <main>
    <section className="inner-hero"><div className="container"><p className="kicker">MEDDOT / HOW WE WORK</p><h1>A clearer way to move forward.</h1><p>Useful support begins with understanding your practice. We start by discussing the work, the handoffs, and the people involved.</p><a className="button button-teal" href="/contact">Request a consultation <ArrowUpRight size={17} /></a></div></section>
    <section className="section"><div className="container how-grid"><div className="how-intro"><p className="kicker">OUR PROCESS</p><h2>Four steps to a stronger working relationship.</h2><p>These stages describe how we approach a new conversation. The exact onboarding plan depends on the services you choose.</p></div><ProcessTabs /></div></section>
    <section className="section pale-section"><div className="container split-section"><div><p className="kicker">THE FIRST CONVERSATION</p><h2>Tell us what needs attention.</h2></div><div><p>Share the services you're interested in, your practice size, the tools you use today, and the challenges you want to solve. From there, we can discuss fit and a practical next step.</p><a className="text-link" href="/contact">Get in touch <ArrowUpRight size={17} /></a></div></div></section>
  </main>;
}
