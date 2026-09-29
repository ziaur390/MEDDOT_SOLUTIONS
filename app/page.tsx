import Image from "next/image";
import { ArrowUpRight, HeartPulse, Layers3, Sparkles, Check, CircleDot, Monitor, MessageSquareText } from "lucide-react";
import { ProcessTabs } from "@/components/process-tabs";

const pillars = [
  {
    number: "01",
    icon: HeartPulse,
    title: "Revenue operations",
    description: "Medical billing, revenue cycle management, coding, and credentialing for growing practices.",
    href: "/services/revenue-operations",
    link: "Explore revenue services",
  },
  {
    number: "02",
    icon: Layers3,
    title: "Digital growth",
    description: "Practice websites and GoHighLevel services to create a more connected patient journey.",
    href: "/services/digital-growth",
    link: "Explore digital services",
  },
  {
    number: "03",
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
            <div className="eyebrow"><span className="eyebrow-line" /> FOR THE PRACTICES MOVING CARE FORWARD</div>
            <h1>Better operations.<br /><em>More room to care.</em></h1>
            <p className="hero-lede">Meddot brings medical billing expertise and digital growth services together for independent healthcare practices.</p>
            <div className="hero-actions">
              <a className="button button-teal" href="/contact">Request a consultation <ArrowUpRight size={17} /></a>
              <a className="text-link" href="#services">Explore our services <ArrowUpRight size={16} /></a>
            </div>
          </div>
          <div className="hero-visual">
            <Image src="/hero-clinic.png" alt="A receptionist at the front desk of a contemporary medical practice" fill priority sizes="(max-width: 900px) 100vw, 46vw" />
            <div className="hero-visual-label"><span className="label-rule" /> Built around your practice</div>
          </div>
        </div>
        <div className="container hero-footer"><span>BETTER SYSTEMS. BETTER FOCUS.</span><span>SCROLL TO EXPLORE ↓</span></div>
      </section>

      <section className="services-section section" id="services">
        <div className="container">
          <div className="section-intro"><div><p className="kicker">WHAT WE DO</p><h2>One partner for the work<br />behind better care.</h2></div><p>From the revenue cycle to your digital front door, we help independent practices build the support they need to grow.</p></div>
          <div className="pillar-grid">
            {pillars.map(({ number, icon: Icon, title, description, href, link }) => (
              <article className="pillar-card" key={number}>
                <div className="pillar-top"><span>{number} / 03</span><Icon size={25} strokeWidth={1.6} /></div>
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
            <p>Claims, coding, follow-up, and enrollment each affect the way a practice runs. Meddot brings these services together around a clearer operational picture.</p>
            <a className="button button-white" href="/services/revenue-operations">See revenue services <ArrowUpRight size={17} /></a>
          </div>
          <div className="revenue-list">
            {[["Medical billing", "The day-to-day work of preparing, submitting, and tracking claims."],["Revenue cycle management", "A broader view of the steps from service to payment."],["Medical coding", "Turning documented care into accurate, usable claim information."],["Credentialing", "Supporting provider enrollment and payer participation."]].map(([title, description], index) => <div className="revenue-row" key={title}><span>0{index + 1}</span><div><h3>{title}</h3><p>{description}</p></div><CircleDot size={21} strokeWidth={1.4} /></div>)}
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
          <div className="digital-copy"><p className="kicker">DIGITAL GROWTH</p><h2>Your practice online, with purpose.</h2><p>A thoughtful website gives patients a clearer first impression. GoHighLevel services can help connect inquiries and communication across the practice's digital journey. We'll shape the work around the services you actually need.</p><a className="button button-navy" href="/services/digital-growth">Explore digital growth <ArrowUpRight size={17} /></a></div>
        </div>
      </section>

      <section className="ai-strip"><div className="container ai-strip-inner"><div><span className="status-label">IN DEVELOPMENT</span><h2>Practical AI for the next chapter of care.</h2><p>We're developing an AI receptionist and other healthcare-focused solutions. Follow the ideas as they take shape.</p></div><a className="text-link" href="/services/healthcare-ai">Explore what’s coming <ArrowUpRight size={16} /></a></div></section>

      <section className="section fit-section" id="about"><div className="container fit-grid"><div><p className="kicker">WHO WE SERVE</p><h2>Built around independent practice life.</h2></div><div><p>We focus on physicians, practice managers, and small medical groups who need capable support without adding more complexity to their day.</p><ul><li><Check size={18} /> Independent practices</li><li><Check size={18} /> Small medical groups</li><li><Check size={18} /> Teams planning their next stage of growth</li></ul><a className="text-link" href="/about">Get to know Meddot <ArrowUpRight size={16} /></a></div></div></section>

      <section className="closing-section"><div className="container closing-inner"><p className="kicker">LET'S CONNECT</p><h2>Make more space for the work that matters.</h2><p>Tell us about your practice and what you want to improve. We can explore whether Meddot is the right fit.</p><a className="button button-teal" href="/contact">Request a consultation <ArrowUpRight size={17} /></a></div></section>
    </main>
  );
}
