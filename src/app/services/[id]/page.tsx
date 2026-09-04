import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";

export default async function ServiceDetail(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const service = await prisma.service.findUnique({
    where: { id: params.id },
  });

  if (!service) {
    notFound();
  }

  // Split content by newlines to render paragraphs/bullet points
  const contentParagraphs = service.content ? service.content.split('\n') : [];

  return (
    <>
      <section className="page-banner" style={{ minHeight: '350px', padding: '120px 0 60px' }}>
        <div className="hero-bg">
          <img
            src={service.imageUrl || "https://images.pexels.com/photos/9301291/pexels-photo-9301291.jpeg?auto=compress&cs=tinysrgb&w=1400"}
            alt={service.title}
          />
        </div>
        <div className="container">
          <div className="crumb">
            <Link href="/">Home</Link> &nbsp;/&nbsp; <Link href="/services">Services</Link> &nbsp;/&nbsp; {service.category}
          </div>
          <h1 style={{ maxWidth: '800px' }}>{service.title}</h1>
        </div>
      </section>

      <section className="section" style={{ padding: '80px 0' }}>
        <div className="container split">
          <div className="split-text" style={{ flex: '2' }}>
            <span className="eyebrow" style={{ display: 'block', color: 'var(--accent)', fontWeight: 600, letterSpacing: '0.05em', marginBottom: '10px' }}>Service Details</span>
            <h2 style={{ fontSize: '32px', marginBottom: '24px' }}>Overview</h2>
            <p style={{ fontSize: '18px', color: 'var(--muted)', marginBottom: '40px' }}>
              {service.description}
            </p>

            <h3 style={{ fontSize: '24px', marginBottom: '20px' }}>What this service includes</h3>
            <div style={{ background: 'var(--white)', padding: '30px', borderRadius: '8px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
              {contentParagraphs.length > 0 ? (
                <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                  {contentParagraphs.map((para, i) => (
                    <li key={i} style={{ marginBottom: '16px', display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                      <span style={{ color: 'var(--amber)', fontSize: '20px', lineHeight: '1.2' }}>•</span>
                      <span style={{ fontSize: '16px', lineHeight: '1.6' }}>{para}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p>No detailed information available for this service.</p>
              )}
            </div>
          </div>

          <div style={{ flex: '1', display: 'flex', flexDirection: 'column', gap: '30px' }}>
            <div className="wp-card" style={{ padding: '30px', background: 'var(--ink)', color: 'var(--white)' }}>
              <h3 style={{ color: 'var(--white)', marginBottom: '16px' }}>Ready to proceed?</h3>
              <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '24px' }}>
                Request this service and our team will get back to you with a tailored consultation.
              </p>
              <Link href={`/services/request/${service.id}`} className="btn btn-solid" style={{ width: '100%', justifyContent: 'center' }}>
                Request Service
              </Link>
            </div>

            <div className="wp-card" style={{ padding: '30px', background: 'var(--paper-2)' }}>
              <h3 style={{ marginBottom: '16px' }}>Have questions?</h3>
              <p style={{ color: 'var(--muted)', marginBottom: '24px' }}>
                Reach out to our support team for more details about {service.title.toLowerCase()}.
              </p>
              <Link href="/contact" className="btn btn-blue" style={{ width: '100%', justifyContent: 'center' }}>
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
