import Link from "next/link";
import Image from "next/image";

export default function Research() {
  return (
    <>
      <section className="page-banner">
        <div className="hero-bg">
          <img
            src="https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=1800"
            alt="Team reviewing research findings around a table"
          />
        </div>
        <div className="container">
          <div className="crumb">
            <Link href="/">Home</Link> &nbsp;/&nbsp; Research & Insights
          </div>
          <h1>Evidence-based thinking on workplace safety</h1>
          <p>Reports, field insights and updates from our consultants — grounded in data, not opinion.</p>
        </div>
      </section>

      <section id="reports" className="section reveal">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Research Reports</span>
            <h2>Field data and compliance benchmarks</h2>
            <p>
              In-depth studies produced from our audits, assessments, and training engagements across Uganda's high-risk sectors.
            </p>
          </div>
          <div className="row-list">
            <div className="row-item">
              <div className="num">01</div>
              <div>
                <h3>State of Workplace Safety Compliance in Uganda</h3>
                <p>A benchmark review of OSH Act 2006 conformity across manufacturing, construction and logistics employers.</p>
              </div>
              <Link href="/contact" className="go">&rarr;</Link>
            </div>
            <div className="row-item">
              <div className="num">02</div>
              <div>
                <h3>Incident Trends: Root Causes Across High-Risk Sectors</h3>
                <p>Aggregated root-cause findings from post-incident reviews, and what they mean for prevention strategy.</p>
              </div>
              <Link href="/contact" className="go">&rarr;</Link>
            </div>
            <div className="row-item">
              <div className="num">03</div>
              <div>
                <h3>PPE Utilization & Compliance Gaps</h3>
                <p>Field observations on personal protective equipment adoption and the barriers to consistent use.</p>
              </div>
              <Link href="/contact" className="go">&rarr;</Link>
            </div>
          </div>
        </div>
      </section>

      <section id="media" className="section on-paper2 reveal">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Insights & Media</span>
            <h2>Notes from the field</h2>
            <p>Short, practical write-ups from our consultants on hazard control, culture-building, and regulatory change.</p>
          </div>
          <div className="icon-rows">
            <div className="icon-row">
              <div className="ico">01</div>
              <h4>Building a Reporting Culture That Employees Trust</h4>
              <p>Why near-miss reporting fails in most organizations — and three fixes that work.</p>
            </div>
            <div className="icon-row">
              <div className="ico">02</div>
              <h4>Reading the OSH Act 2006 for Equipment Owners</h4>
              <p>A plain-language walkthrough of inspection obligations for machinery operators.</p>
            </div>
            <div className="icon-row">
              <div className="ico">03</div>
              <h4>ISO 45001 vs. Local Compliance: What's the Gap?</h4>
              <p>Where Uganda's regulatory floor ends and international certification begins.</p>
            </div>
            <div className="icon-row">
              <div className="ico">04</div>
              <h4>Ergonomics on a Budget</h4>
              <p>Low-cost workstation adjustments that measurably cut musculoskeletal complaints.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="newsletters" className="section reveal">
        <div className="container two-col">
          <div>
            <span className="eyebrow">Newsletters</span>
            <h2 style={{ fontSize: "30px" }}>Stay ahead of compliance changes</h2>
            <p style={{ color: "var(--muted)", fontSize: "15px" }}>
              A short, practical briefing on OSH regulation, training opportunities and field insights.
            </p>
          </div>
          <div>
            <form action="mailto:oryemdavidmark64@gmail.com" method="post" encType="text/plain" style={{ display: "flex", gap: 0, border: "1.5px solid var(--ink)", maxWidth: "480px" }}>
              <input type="email" required placeholder="Your work email" style={{ flex: 1, border: 0, padding: "16px 18px", fontFamily: "inherit", fontSize: "14.5px", background: "transparent", outline: "none" }} />
              <button type="submit" className="btn btn-solid" style={{ border: 0 }}>Subscribe</button>
            </form>
            <p style={{ fontSize: "13px", color: "var(--muted)", marginTop: "14px" }}>
              No spam — just OSH insight, occasionally.
            </p>
          </div>
        </div>
      </section>

      <section className="cta-banner reveal">
        <div className="hero-bg">
          <img
            src="https://images.pexels.com/photos/11429201/pexels-photo-11429201.jpeg?auto=compress&cs=tinysrgb&w=1800"
            alt="Worker on an outdoor construction site"
          />
        </div>
        <div className="container">
          <span className="eyebrow" style={{ color: "var(--amber)" }}>Have A Question?</span>
          <h2>Ask our consultants directly</h2>
          <p>Whether it's a specific report or a compliance question about your site, we're happy to help.</p>
          <div className="hero-actions">
            <Link href="/contact" className="btn btn-solid">Contact Us</Link>
          </div>
        </div>
      </section>
    </>
  );
}
