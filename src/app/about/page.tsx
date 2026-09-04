import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <>
      <div className="page-banner" style={{ minHeight: '400px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <div className="hero-bg">
          <img src="https://images.pexels.com/photos/9301291/pexels-photo-9301291.jpeg?auto=compress&cs=tinysrgb&w=1800" alt="About 4 Max Safety" />
        </div>
        <div className="container">
          <div className="crumb"><Link href="/">Home</Link> / About Us</div>
          <h1>About 4 Max Safety</h1>
          <p>A trusted partner for organizations seeking safer and compliant operations.</p>
        </div>
      </div>

      <section className="section">
        <div className="container split">
          <div className="split-text">
            <span className="eyebrow" style={{ display: 'block', color: 'var(--accent)', fontWeight: 600, letterSpacing: '0.05em', marginBottom: '10px' }}>Executive Summary</span>
            <h2>Leading provider of workplace safety solutions in Uganda</h2>
            <p>
              4 MAX SAFETY COMPANY is positioned to meet the growing demand for workplace safety solutions in Uganda. With the right strategy, expertise, and commitment to quality, the company can become a trusted partner for organizations seeking safer and compliant operations.
            </p>
            <p>
              We are dedicated to providing professional Occupational Safety, Health and Environment. We help organizations to ensure compliance, ensures safety and sustainable workplaces for their workers. Trainings, auditing, consultancy, supply of safety equipment are among our services we are offering.
            </p>
          </div>
          <div className="split-media" style={{ borderRadius: '8px', overflow: 'hidden' }}>
            <img src="https://images.pexels.com/photos/18340568/pexels-photo-18340568.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Safety experts" />
          </div>
        </div>
      </section>

      <section className="section on-paper2">
        <div className="container">
          <div className="section-head center">
            <h2>Vision & Mission</h2>
            <p>The foundation of our commitment to safety</p>
          </div>
          <div className="split" style={{ gap: '30px' }}>
            <div className="wp-card" style={{ padding: '40px' }}>
              <h3 style={{ color: 'var(--accent)', marginBottom: '20px' }}>Our Vision</h3>
              <p style={{ fontSize: '18px', lineHeight: '1.8' }}>
                To be a leading provider of Occupational Safety Health and Environment solutions in the world based on Technical concepts and evidenced delivery of professional services.
              </p>
            </div>
            <div className="wp-card" style={{ padding: '40px' }}>
              <h3 style={{ color: 'var(--accent)', marginBottom: '20px' }}>Our Mission</h3>
              <p style={{ fontSize: '18px', lineHeight: '1.8' }}>
                To provide human Resource, environment and property protections through offering high-quality, practical, and compliant safety solutions and partnerships that foster HSE development internationally.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section on-ink">
        <div className="container">
          <div className="section-head center">
            <h2>Our Core Values</h2>
            <p>The principles that guide our everyday operations</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginTop: '40px' }}>
            {[
              "Servant leadership",
              "Safety First",
              "Integrity",
              "Professionalism",
              "Innovation and creativity",
              "Stewardship"
            ].map((val, idx) => (
              <div key={idx} style={{ background: 'var(--ink-soft)', padding: '24px', borderRadius: '8px', borderLeft: '4px solid var(--amber)' }}>
                <h4 style={{ margin: 0, fontSize: '18px' }}>{val}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head center">
            <h2>Commitment Benefit</h2>
            <p>Why a robust dedication to OSH is a strategic advantage</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
            <div className="wp-card" style={{ padding: '30px' }}>
              <h4>Improved Safety</h4>
              <p>Significantly lowered risk of mishaps, injuries, and ailments in the workplace.</p>
            </div>
            <div className="wp-card" style={{ padding: '30px' }}>
              <h4>Reduced Expenses</h4>
              <p>Minimizing potential expenses linked with mishaps, such as workers' compensation claims, legal fees, and lost productivity.</p>
            </div>
            <div className="wp-card" style={{ padding: '30px' }}>
              <h4>Increased Output</h4>
              <p>A safer and healthier work environment can result in heightened employee morale, involvement, and ultimately, greater productivity.</p>
            </div>
            <div className="wp-card" style={{ padding: '30px' }}>
              <h4>Regulatory Conformity</h4>
              <p>Guaranteeing complete conformity with all relevant OSH regulations and standards, avoiding penalties and legal issues.</p>
            </div>
            <div className="wp-card" style={{ padding: '30px', gridColumn: '1 / -1' }}>
              <h4>Enhanced Standing</h4>
              <p>Showcasing a proactive dedication to safety and health can greatly boost the organization's standing and public image, attracting top talent and fostering trust with stakeholders.</p>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
