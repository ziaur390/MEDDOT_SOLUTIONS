/* eslint-disable @next/next/no-html-link-for-pages -- Native links work reliably in the current Sites runtime. */
import Image from "next/image";
import { ArrowUpRight, HeartPulse, Layers3, Sparkles, Check, CircleDot, Monitor, MessageSquareText, ClipboardCheck, Mail, FileCheck2 } from "lucide-react";
import { ProcessTabs } from "@/components/process-tabs";

const pillars = [
  {
    icon: HeartPulse,
    title: "Revenue operations",
    description: "Billing, coding, credentialing, AR recovery, audits, and clearinghouse support for independent practices.",
    href: "/services/revenue-operations",
    link: "Explore revenue services",
  },
  {
    icon: Layers3,
    title: "Digital growth",
    description: "Practice websites, search marketing, GoHighLevel, and clinical system integrations.",
    href: "/services/digital-growth",
    link: "Explore digital services",
  },
  {
    icon: Sparkles,
    title: "Healthcare AI",
    description: "An AI receptionist and practical healthcare automation solutions are in development.",
    href: "/services/healthcare-ai",
    link: "See what's coming",
  },
];

export default function Home() {
  return (
    <main>
      <section className="hero-section">
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="eyebrow"><span className="eyebrow-line" /> MEDICAL BILLING + PRACTICE GROWTH</div>
            <h1>Medical billing that <em>moves your practice forward.</em></h1>
            <p className="hero-lede">Medical billing, revenue cycle support, and digital services for independent practices and small medical groups. Tell us where the work is getting stuck.</p>
            <div className="hero-actions">
              <a className="button button-teal" href="/contact#consultation-form">Talk about your practice <ArrowUpRight size={17} /></a>
              <a className="text-link" href="#start-here">Find the right support <ArrowUpRight size={16} /></a>
            </div>
            <p className="hero-reassurance">Start with a focused conversation about your workflow and goals.</p>
          </div>
          <div className="hero-visual">
            <Image src="/hero-clinic.png" alt="A receptionist at the front desk of a contemporary medical practice" fill priority sizes="(max-width: 900px) 100vw, 46vw" />
            <div className="hero-visual-label"><span className="label-rule" /> For independent practices &amp; small groups</div>
          </div>
        </div>
        <div className="container hero-footer"><span>REVENUE OPERATIONS · DIGITAL GROWTH</span><span>SCROLL TO EXPLORE ↓</span></div>
      </section>

      <section className="trust-band" aria-label="How we begin"><div className="container trust-band-inner"><div><HeartPulse size={20}/><p><strong>Built for smaller practices</strong><span>Support shaped around your team and workload</span></p></div><div><ClipboardCheck size={20}/><p><strong>Clear scope first</strong><span>Discuss responsibilities before work begins</span></p></div><div><Mail size={20}/><p><strong>Start with a conversation</strong><span>Tell us what you need help moving forward</span></p></div></div></section>

      <section className="start-section section" id="start-here">
        <div className="container start-grid">
          <div className="start-intro"><p className="kicker">START WITH WHAT&apos;S ON YOUR DESK</p><h2>What needs attention <em>right now?</em></h2><p>Choose the issue closest to yours. We can work out the right scope together in a consultation.</p><a className="text-link" href="/contact#consultation-form">Tell us about your practice <ArrowUpRight size={16}/></a></div>
          <div className="need-list">
            <a href="/services/revenue-operations/medical-billing"><span>01</span><div><strong>Claims and billing workflow</strong><small>Submission, tracking, and day-to-day billing support</small></div><ArrowUpRight size={20}/></a>
            <a href="/services/revenue-operations/ar-recovery"><span>02</span><div><strong>Aging or unresolved A/R</strong><small>Follow-up for claims that need a closer look</small></div><ArrowUpRight size={20}/></a>
            <a href="/services/revenue-operations/credentialing"><span>03</span><div><strong>Provider enrollment</strong><small>Credentialing and payer participation support</small></div><ArrowUpRight size={20}/></a>
            <a href="/services/digital-growth"><span>04</span><div><strong>Your digital front door</strong><small>Websites, search, and GoHighLevel workflows</small></div><ArrowUpRight size={20}/></a>
          </div>
        </div>
      </section>

      <section className="services-section section" id="services">
        <div className="container">
          <div className="section-intro"><div><p className="kicker">WHAT WE DO</p><h2>Support across the parts<br />of a practice that connect.</h2></div><p>Begin with the service you need now. Billing and revenue operations are our core focus; digital services support the way patients find and reach you.</p></div>
          <div className="pillar-grid">
            {pillars.map(({ icon: Icon, title, description, href, link }) => (
              <article className={`pillar-card ${title === "Healthcare AI" ? "pillar-card-future" : ""}`} key={title}>
                <div className="pillar-top"><Icon size={25} strokeWidth={1.6} /></div>
                <div><h3>{title}</h3><p>{description}</p></div>
                <a href={href}>{link} <ArrowUpRight size={17} /></a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="revenue-feature section" id="approach">
        <div className="container feature-grid">
          <div className="feature-intro">
            <p className="kicker">REVENUE OPERATIONS</p>
            <h2>Because every part of the cycle matters.</h2>
            <p>Claims, coding, follow-up, enrollment, audits, and clearinghouse work all affect the way a practice runs. Explore the support that fits your current needs.</p>
            <a className="button button-white" href="/services/revenue-operations">See revenue services <ArrowUpRight size={17} /></a>
          </div>
          <div className="revenue-list">
            {[["Medical billing", "The day-to-day work of preparing, submitting, and tracking claims."],["Medical coding", "Turning documented care into usable claim information."],["AR recovery", "A focused plan for aging and unresolved claims."],["Credentialing", "Supporting provider enrollment and payer participation."]].map(([title, description]) => <div className="revenue-row" key={title}><span aria-hidden="true"><CircleDot size={18} strokeWidth={1.4}/></span><div><h3>{title}</h3><p>{description}</p></div><CircleDot size={21} strokeWidth={1.4} /></div>)}
          </div>
        </div>
      </section>

      <section className="section how-section">
        <div className="container how-grid">
          <div className="how-intro"><p className="kicker">HOW WE WORK</p><h2>Progress starts with a clear plan.</h2><p>Every practice is different. The best starting point is a conversation about the work you need handled and the experience you want for your team.</p><a className="text-link" href="/how-we-work">More about our approach <ArrowUpRight size={16} /></a></div>
          <ProcessTabs />
        </div>
      </section>

      <section className="digital-feature section">
        <div className="container digital-grid">
          <div className="digital-card"><div className="digital-card-top"><span>YOUR DIGITAL FRONT DOOR</span><span>MEDDOT / 02</span></div><div className="digital-card-icons"><Monitor size={42} strokeWidth={1.15} /><MessageSquareText size={42} strokeWidth={1.15} /></div><div className="digital-card-caption"><span>Websites</span><span>GoHighLevel</span></div></div>
          <div className="digital-copy"><p className="kicker">DIGITAL GROWTH</p><h2>Your practice online, with purpose.</h2><p>Websites, search marketing, EHR and EMR connections, and GoHighLevel workflows can each solve a different practice problem. We’ll start with the one your team needs to address.</p><a className="button button-navy" href="/services/digital-growth">Explore digital services <ArrowUpRight size={17} /></a></div>
        </div>
      </section>

      <section className="ai-strip"><div className="container ai-strip-inner"><div><span className="status-label">IN DEVELOPMENT</span><h2>Practical AI for the next chapter of care.</h2><p>We’re developing an AI receptionist and other healthcare-focused solutions. Follow the ideas as they take shape.</p></div><a className="text-link" href="/services/healthcare-ai">Explore what’s coming <ArrowUpRight size={16} /></a></div></section>

      <section className="section fit-section" id="about"><div className="container fit-grid"><div><p className="kicker">WHO WE SERVE</p><h2>Built around independent practice life.</h2></div><div><p>We focus on physicians, practice managers, and small medical groups who need capable support without adding more complexity to their day.</p><ul><li><Check size={18} /> Independent practices</li><li><Check size={18} /> Small medical groups</li><li><Check size={18} /> Teams planning their next stage of growth</li></ul><a className="text-link" href="/about">Get to know Meddot <ArrowUpRight size={16} /></a></div></div></section>

      <section className="closing-section"><div className="container closing-inner"><p className="kicker">YOUR FIRST CONVERSATION</p><h2>Tell us what is slowing your team down.</h2><p>Share the issue, your practice type, and the support you are considering. We’ll use that context to discuss a practical scope and next steps.</p><div className="closing-steps"><span><FileCheck2 size={18}/> Describe the need</span><span><MessageSquareText size={18}/> Discuss the workflow</span><span><Check size={18}/> Agree on next steps</span></div><a className="button button-teal" href="/contact#consultation-form">Request a consultation <ArrowUpRight size={17} /></a></div></section>
    </main>
  );
}
