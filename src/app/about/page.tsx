import Link from "next/link";
import Image from "next/image";

export default function About() {
  return (
    <>
      <section className="page-banner">
        <div className="hero-bg">
          <img
            src="https://images.pexels.com/photos/11321790/pexels-photo-11321790.jpeg?auto=compress&cs=tinysrgb&w=1800"
            alt="Safety consultant on site wearing a hard hat"
          />
        </div>
        <div className="container">
          <div className="crumb">
            <Link href="/">Home</Link> &nbsp;/&nbsp; About Us
          </div>
          <h1>Built on servant leadership and safety first.</h1>
          <p>
            4 Max Safety is positioned to meet the growing demand for workplace safety solutions in Uganda — with the strategy, expertise, and commitment to quality that make us a trusted partner.
          </p>
        </div>
      </section>

      <section id="who" className="section reveal">
        <div className="container split">
          <div className="split-media">
            <img
              src="https://images.pexels.com/photos/9301291/pexels-photo-9301291.jpeg?auto=compress&cs=tinysrgb&w=1400"
              alt="4 Max Safety team discussing a client engagement"
            />
            <div className="frame-tag">Est. Kampala, Uganda</div>
          </div>
          <div className="split-text">
            <span className="eyebrow">Who We Are</span>
            <h2>Trusted partners for safer, compliant operations</h2>
            <p>
              4 Max Safety Company is dedicated to providing professional Occupational Safety, Health and Environment services. We help organizations ensure compliance and build safe, sustainable workplaces for their workers.
            </p>
            <p>
              With the right strategy, expertise, and commitment to quality, we are becoming a trusted partner for organizations across Uganda that are seeking safer and more compliant operations. Trainings, auditing, consultancy, and the supply of safety equipment are among the services we offer.
            </p>
            <Link href="/contact" className="btn">
              Work With Us <span className="btn-arrow">&rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      <section id="vision" className="section on-paper2 reveal">
        <div className="container two-col">
          <div>
            <span className="eyebrow">Guiding Statements</span>
            <h2 style={{ fontSize: "30px" }}>Vision & Mission</h2>
          </div>
          <div className="row-list" style={{ borderTop: "1px solid var(--line)" }}>
            <div className="row-item" style={{ gridTemplateColumns: "1fr" }}>
              <div>
                <h3>Our Vision</h3>
                <p>
                  To be a leading provider of Occupational Safety, Health and Environment solutions in the world, based on technical concepts and evidenced delivery of professional services.
                </p>
              </div>
            </div>
            <div className="row-item" style={{ gridTemplateColumns: "1fr", borderBottom: 0 }}>
              <div>
                <h3>Our Mission</h3>
                <p>
                  To provide human resource, environment and property protection through offering high-quality, practical, and compliant safety solutions and partnerships that foster HSE development internationally.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="values" className="section reveal">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">What We Stand For</span>
            <h2>Our Core Values</h2>
          </div>
          <ul className="values-list">
            <li>
              <span className="n">01</span>
              <div><h4>Servant Leadership</h4></div>
            </li>
            <li>
              <span className="n">02</span>
              <div><h4>Safety First</h4></div>
            </li>
            <li>
              <span className="n">03</span>
              <div><h4>Integrity</h4></div>
            </li>
            <li>
              <span className="n">04</span>
              <div><h4>Professionalism</h4></div>
            </li>
            <li>
              <span className="n">05</span>
              <div><h4>Innovation & Creativity</h4></div>
            </li>
            <li>
              <span className="n">06</span>
              <div><h4>Stewardship</h4></div>
            </li>
          </ul>
        </div>
      </section>

      <section id="team" className="section on-paper2 reveal">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Our Team</span>
            <h2>Highly qualified professionals</h2>
            <p>Expertise in occupational health, ISO standards, risk management, and environmental consulting.</p>
          </div>
          <div className="team-grid">
            <div className="team-item">
              <div className="team-photo">
                <img
                  src="https://images.pexels.com/photos/28196526/pexels-photo-28196526.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Oryem David Mark, CEO"
                />
              </div>
              <h4>Oryem David Mark</h4>
              <div className="role">CEO &middot; HSE Consultant & Trainer</div>
            </div>
            <div className="team-item">
              <div className="team-photo">
                <img
                  src="https://images.pexels.com/photos/8293699/pexels-photo-8293699.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Dr. Jeffy Briton Ssemuddu, Lead HSE Consultant"
                />
              </div>
              <h4>Dr. Jeffy Briton Ssemuddu</h4>
              <div className="role">Lead HSE Consultant & Trainer</div>
            </div>
            <div className="team-item">
              <div className="team-photo">
                <img
                  src="https://images.pexels.com/photos/8960942/pexels-photo-8960942.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Laker Immaculate, HSE Consultant"
                />
              </div>
              <h4>Laker Immaculate</h4>
              <div className="role">HSE Consultant & Trainer</div>
            </div>
            <div className="team-item">
              <div className="team-photo">
                <img
                  src="https://images.pexels.com/photos/4981798/pexels-photo-4981798.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Yengi Bismark, Legal Consultant"
                />
              </div>
              <h4>Yengi Bismark</h4>
              <div className="role">Legal Consultant</div>
            </div>
            <div className="team-item">
              <div className="team-photo">
                <img
                  src="https://images.pexels.com/photos/11429201/pexels-photo-11429201.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Oroma Patrick, Security Specialist"
                />
              </div>
              <h4>Oroma Patrick</h4>
              <div className="role">Security Specialist</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section reveal">
        <div className="container two-col">
          <div>
            <span className="eyebrow">Environmental Principles</span>
            <h2 style={{ fontSize: "30px" }}>How we manage our environmental impact</h2>
          </div>
          <div className="row-list" style={{ borderTop: "1px solid var(--line)" }}>
            <div className="row-item" style={{ gridTemplateColumns: "60px 1fr" }}>
              <div className="num">1</div>
              <p style={{ margin: 0, color: "var(--ink-soft)" }}>
                We are committed not only to maintaining an environmental management system but also to constantly improving it through designated programs, based on assessed environmental aspects.
              </p>
            </div>
            <div className="row-item" style={{ gridTemplateColumns: "60px 1fr" }}>
              <div className="num">2</div>
              <p style={{ margin: 0, color: "var(--ink-soft)" }}>
                All our employees and managers contribute to our environmental management system, adhere to its provisions, and help continually improve the system.
              </p>
            </div>
            <div className="row-item" style={{ gridTemplateColumns: "60px 1fr" }}>
              <div className="num">3</div>
              <p style={{ margin: 0, color: "var(--ink-soft)" }}>
                Our environmental management system guarantees compliance with environmental laws, standards, regulations and approval restrictions.
              </p>
            </div>
            <div className="row-item" style={{ gridTemplateColumns: "60px 1fr" }}>
              <div className="num">4</div>
              <p style={{ margin: 0, color: "var(--ink-soft)" }}>
                Careful handling of hazardous materials and energy saving through progressive, modern technologies play an important role in advancing our company.
              </p>
            </div>
            <div className="row-item" style={{ gridTemplateColumns: "60px 1fr", borderBottom: 0 }}>
              <div className="num">5</div>
              <p style={{ margin: 0, color: "var(--ink-soft)" }}>
                Our strong awareness of environmental issues means we set benchmarks, both internally and externally.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-banner reveal">
        <div className="hero-bg">
          <img
            src="https://images.pexels.com/photos/8487733/pexels-photo-8487733.jpeg?auto=compress&cs=tinysrgb&w=1800"
            alt="Personal protective equipment close up"
          />
        </div>
        <div className="container">
          <span className="eyebrow" style={{ color: "var(--amber)" }}>Let's Talk</span>
          <h2>Meet the team behind your safety programme</h2>
          <p>We'd love to understand your operation and show you exactly how we can help.</p>
          <div className="hero-actions">
            <Link href="/contact" className="btn btn-solid">Contact Our Team</Link>
            <Link href="/services" className="btn btn-ghost-light">View Our Services</Link>
          </div>
        </div>
      </section>
    </>
  );
}
