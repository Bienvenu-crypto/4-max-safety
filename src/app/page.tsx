import Link from "next/link";
import Image from "next/image";
import { prisma } from "@/lib/prisma";

export default async function Home() {
  const services = await prisma.service.findMany({ take: 3, orderBy: { title: 'asc' } });
  const courses = await prisma.course.findMany({ take: 3, orderBy: { title: 'asc' } });

  return (
    <>
      <section className="hero hero-new">
        <div className="hero-bg">
          <div className="hero-slide">
            <img
              src="https://images.pexels.com/photos/8159/construction-site-build-construction-work.jpg?auto=compress&cs=tinysrgb&w=1800"
              alt="Construction workers in high-visibility vests and hard hats on an active job site"
            />
          </div>
          <div className="hero-slide hero-slide--2">
            <img
              src="https://images.pexels.com/photos/18340568/pexels-photo-18340568.jpeg?auto=compress&cs=tinysrgb&w=1800"
              alt="Fire safety training exercise with an extinguisher"
            />
          </div>
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content text-center">
          <div className="container">
            <h1 className="hero-title">
              Workplace safety,<br />
              engineered <em>right.</em>
            </h1>
            <h2 className="hero-subtitle">
              4M OCCUPATIONAL SAFETY, HEALTH AND ENVIRONMENT
            </h2>
            <p className="hero-description">
              4 Max Safety helps organizations across Uganda ensure compliance, protect their people, and build sustainable, accident-free workplaces through auditing, training, consultancy and certified safety equipment.
            </p>
            <div className="hero-actions justify-center">
              <Link href="/services" className="btn btn-turquoise">
                Explore Services &rarr;
              </Link>
              <Link href="/contact" className="btn btn-blue">
                Talk To Us &rarr;
              </Link>
            </div>
          </div>
        </div>
        <div className="hero-stats-new">
          <div className="container">
            <div className="stat-new">
              <div className="num-new">19+</div>
              <div className="lbl-new">SERVICES AVAILABLE</div>
            </div>
            <div className="stat-new">
              <div className="num-new">25+</div>
              <div className="lbl-new">TRAINING COURSES</div>
            </div>
            <div className="stat-new">
              <div className="num-new">12+</div>
              <div className="lbl-new">INDUSTRIES SERVED</div>
            </div>
            <div className="stat-new">
              <div className="num-new">OSH Act</div>
              <div className="lbl-new">COMPLIANT DELIVERY</div>
            </div>
          </div>
        </div>
      </section>

      <div className="ticker">
        <div className="ticker-track">
          <span className="dot">&#9670;</span><span>Safety Precaution</span>
          <span className="dot">&#9670;</span><span>Troubleshooting</span>
          <span className="dot">&#9670;</span><span>Maintenance</span>
          <span className="dot">&#9670;</span><span>Quality Control</span>
          <span className="dot">&#9670;</span><span>Documentation & Records</span>
        </div>
      </div>

      <section className="section reveal">
        <div className="container split">
          <div className="split-media">
            <img
              src="https://images.pexels.com/photos/9301291/pexels-photo-9301291.jpeg?auto=compress&cs=tinysrgb&w=1400"
              alt="4 Max Safety consultants in a strategy meeting"
            />
            <div className="frame-tag">Servant Leadership &middot; Safety First</div>
          </div>
          <div className="split-text">
            <span className="eyebrow">Who We Are</span>
            <h2>A dedicated partner for Occupational Safety, Health & Environment</h2>
            <p>
              4 MAX SAFETY is a company dedicated to providing professional Occupational Safety, Health and Environment. We help organizations to ensure compliance, ensures safety and sustainable workplaces for their workers. We are positioned to meet the growing demand for workplace safety solutions in Uganda. With the right strategy, expertise, and commitment to quality, the company can become a trusted partner for organizations seeking safer and compliant operations. Trainings, auditing, consultancy, supply of safety equipment are among our services we are offering.
            </p>
            <div className="value-tags">
              <span>Servant leadership</span>
              <span>Safety First</span>
              <span>Integrity</span>
              <span>Professionalism</span>
              <span>Innovation and creativity</span>
              <span>Stewardship</span>
            </div>
            <Link href="/about" className="btn">
              Learn More About Us <span className="btn-arrow">&rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      <div className="quote-block reveal">
        <div className="container">
          <span className="mark">&ldquo;</span>
          <p>
            To be a leading provider of Occupational Safety Health and Environment solutions in the world based on Technical concepts and evidenced delivery of professional services.
          </p>
          <div className="who">Our Vision</div>
        </div>
      </div>

      <div className="quote-block reveal" style={{ background: 'var(--ink-soft)', paddingTop: 0 }}>
        <div className="container">
          <span className="mark" style={{ color: 'var(--accent)' }}>&ldquo;</span>
          <p>
            To provide human Resource, environment and property protections through offering high-quality, practical, and compliant safety solutions and partnerships that foster HSE development internationally.
          </p>
          <div className="who">Our Mission</div>
        </div>
      </div>

      <section className="section on-paper2 reveal">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">What We Do</span>
            <h2>Services built around every stage of workplace safety</h2>
            <p>
              From the first walk-through to certification and ongoing compliance, our five core service lines cover the full lifecycle of Occupational Safety, Health and Environment management.
            </p>
          </div>
          <div className="wp-card-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
            {services.map((service) => (
              <div key={service.id} className="wp-card">
                {service.imageUrl && (
                  <img src={service.imageUrl} alt={service.title} className="wp-card-img" />
                )}
                <div className="wp-card-content">
                  <div className="wp-card-category">{service.category}</div>
                  <h3 className="wp-card-title">{service.title}</h3>
                  <p className="wp-card-desc">{service.description}</p>
                  <div className="wp-card-footer">
                    <Link href={`/services/${service.id}`} className="wp-card-btn">
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 36, textAlign: 'center' }}>
            <Link href="/services" className="btn btn-solid">
              See All Services <span className="btn-arrow">&rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="section reveal">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Commitment Benefit</span>
            <h2>Why a robust commitment to OSH pays off</h2>
            <p>We believe dedication to OSH is not merely a regulatory duty but a strategic advantage.</p>
          </div>
          <div className="icon-rows">
            <div className="icon-row">
              <div className="ico">01</div>
              <h4>Improved Safety</h4>
              <p>Significantly lowered risk of mishaps, injuries, and ailments in the workplace.</p>
            </div>
            <div className="icon-row">
              <div className="ico">02</div>
              <h4>Reduced Expenses</h4>
              <p>Minimized costs linked to mishaps — workers’ compensation claims, legal fees, and lost productivity.</p>
            </div>
            <div className="icon-row">
              <div className="ico">03</div>
              <h4>Increased Output</h4>
              <p>A safer, healthier environment lifts employee morale, engagement, and productivity.</p>
            </div>
            <div className="icon-row">
              <div className="ico">04</div>
              <h4>Regulatory Conformity</h4>
              <p>Full conformity with relevant OSH regulations and standards, avoiding penalties and legal issues.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section on-ink reveal">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Why 4 Max Safety</span>
            <h2>Quantitative rigor. Evidence over opinion.</h2>
          </div>
          <div className="why-grid">
            <div className="why-item">
              <span className="idx">01</span>
              <h4>Quantitative Backbone</h4>
              <p>Every analysis in Safety, Security, Health & Environment is grounded in measurable outcomes.</p>
            </div>
            <div className="why-item">
              <span className="idx">02</span>
              <h4>Evidence-Based Methods</h4>
              <p>Our conclusions are driven by data, not politics, pressure, or preference. Intellectual honesty, always.</p>
            </div>
            <div className="why-item">
              <span className="idx">03</span>
              <h4>Professional Reporting</h4>
              <p>World-class reports and strategic frameworks. Precision, clarity, and professionalism define our outputs.</p>
            </div>
            <div className="why-item">
              <span className="idx">04</span>
              <h4>Policy Expertise</h4>
              <p>Solutions that shape policy, development, and economic transformation across Africa.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section reveal">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Who Do We Serve</span>
            <h2>Tailored safety solutions for high-risk & complex sectors</h2>
          </div>
          <div className="chips">
            <span>Manufacturing & Warehousing</span>
            <span>Basic Metal Production</span>
            <span>Chemical Industries</span>
            <span>Construction</span>
            <span>Mining</span>
            <span>Food & Beverages</span>
            <span>Transport & Logistics</span>
            <span>Oil & Gas</span>
            <span>Mechanical & Electrical</span>
            <span>Educational Sector</span>
            <span>Agricultural Sector</span>
            <span>NGOs & International Organizations</span>
            <span>Government Institutions</span>
            <span>Schools & Hospitals</span>
            <span>Restaurants & Hotels</span>
          </div>
        </div>
      </section>

      <section className="section on-paper2 reveal">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Training Programs</span>
            <h2>Practical, certificate-bearing courses</h2>
            <p>Hands-on OSH training designed to build competent, safety-conscious teams at every level.</p>
          </div>
          <div className="wp-card-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
            {courses.map((course) => (
              <div key={course.id} className="wp-card">
                {course.imageUrl && (
                  <img src={course.imageUrl} alt={course.title} className="wp-card-img" />
                )}
                <div className="wp-card-content">
                  <div className="wp-card-category">{course.category}</div>
                  <h3 className="wp-card-title">{course.title}</h3>
                  <p className="wp-card-desc">{course.description}</p>
                  <div className="wp-card-footer">
                    <Link href={`/courses/${course.id}`} className="wp-card-btn">
                      Learn More
                    </Link>
                    {course.price && <div className="wp-card-price">${course.price}</div>}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 36, textAlign: 'center' }}>
            <Link href="/courses" className="btn btn-solid">
              See All Courses <span className="btn-arrow">&rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="cta-banner reveal">
        <div className="hero-bg">
          <img
            src="https://images.pexels.com/photos/18340568/pexels-photo-18340568.jpeg?auto=compress&cs=tinysrgb&w=1800"
            alt="Fire safety training exercise with an extinguisher"
          />
        </div>
        <div className="container">
          <span className="eyebrow" style={{ color: "var(--amber)" }}>
            Get Started
          </span>
          <h2>Ready to build a safer, compliant workplace?</h2>
          <p>
            Partner with 4 Max Safety to reduce risk, meet regulatory standards, and protect the people who power your organization.
          </p>
          <div className="hero-actions">
            <Link href="/contact" className="btn btn-solid">
              Request A Quote
            </Link>
            <a href="https://wa.me/256779868200" className="btn btn-ghost-light">
              Chat On WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
