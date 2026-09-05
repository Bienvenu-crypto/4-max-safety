import Link from "next/link";
import { prisma } from "@/lib/prisma";

export default async function Services(props: { searchParams: Promise<{ success?: string }> }) {
  const searchParams = await props.searchParams;
  const success = searchParams.success === 'true';

  const services = await prisma.service.findMany({ orderBy: { category: 'asc' } });

  // Group services by category
  const grouped = services.reduce((acc, service) => {
    if (!acc[service.category]) acc[service.category] = [];
    acc[service.category].push(service);
    return acc;
  }, {} as Record<string, typeof services>);

  const categoryOrder = [
    "Risk Assessment & Workplace Safety Audits",
    "Management Systems, ISO & Legal Compliance",
    "Training, Competence & Culture Development",
    "Incident Investigation & Post-Accident Support",
    "PPE & Safety Equipment Supply",
  ];

  const sortedCategories = [
    ...categoryOrder.filter(c => grouped[c]),
    ...Object.keys(grouped).filter(c => !categoryOrder.includes(c)),
  ];

  return (
    <>
      <section className="page-banner">
        <div className="hero-bg">
          <img
            src="https://images.pexels.com/photos/9301291/pexels-photo-9301291.jpeg?auto=compress&cs=tinysrgb&w=1400"
            alt="Safety consultant inspecting workplace"
          />
        </div>
        <div className="container">
          <h1>Comprehensive safety solutions for every industry</h1>
          <p>
            We offer a comprehensive range of Occupational Safety, Security, Health and Environment
            consulting services, tailored to address all aspects of your workplace safety needs.
          </p>
        </div>
      </section>

      <section className="section reveal">
        <div className="container">
          {success && (
            <div style={{
              background: '#d4edda', border: '1px solid #c3e6cb', color: '#155724',
              padding: '18px 24px', borderRadius: '8px', marginBottom: '40px',
              display: 'flex', alignItems: 'center', gap: '12px', fontSize: '15px'
            }}>
              <span style={{ fontSize: '22px' }}>✅</span>
              <span><strong>Service request submitted successfully!</strong> One of our consultants will contact you within 24 hours.</span>
            </div>
          )}

          {sortedCategories.map((category, index) => (
            <div key={category} style={{ marginBottom: '64px' }}>
              {/* Category Header */}
              <div style={{ marginBottom: '32px', textAlign: 'center' }}>
                <span style={{ display: 'inline-block', background: 'var(--accent)', color: 'white', fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '4px 12px', borderRadius: '4px', marginBottom: '10px' }}>
                  Core Service
                </span>
                <h2 style={{ fontSize: '28px', fontWeight: 700, margin: 0 }}>{index + 1}. {category}</h2>
              </div>

              {/* Cards Grid */}
              <div className="wp-card-grid">
                {grouped[category].map((service) => (
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
            </div>
          ))}
        </div>
      </section>

      <section className="cta-banner reveal">
        <div className="hero-bg">
          <img src="https://images.pexels.com/photos/18340568/pexels-photo-18340568.jpeg?auto=compress&cs=tinysrgb&w=1800" alt="Fire safety training exercise" />
        </div>
        <div className="container">
          <span className="eyebrow" style={{ color: "var(--amber)" }}>Get Started</span>
          <h2>Ready to build a safer, compliant workplace?</h2>
          <p>Partner with 4 Max Safety to reduce risk, meet regulatory standards, and protect your team.</p>
          <div className="hero-actions">
            <Link href="/contact" className="btn btn-solid">Request A Quote</Link>
            <a href="https://wa.me/256779868200" className="btn btn-ghost-light">Chat On WhatsApp</a>
          </div>
        </div>
      </section>
    </>
  );
}
