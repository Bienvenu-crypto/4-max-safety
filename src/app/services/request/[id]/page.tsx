import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { createServiceRequest } from "@/app/actions";
import { notFound } from "next/navigation";

export default async function RequestService(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const service = await prisma.service.findUnique({
    where: { id: params.id }
  });

  if (!service) {
    notFound();
  }

  return (
    <>
      <section className="page-banner" style={{ padding: '120px 0 60px' }}>
        <div className="hero-bg">
          <img
            src={service.imageUrl || "https://images.pexels.com/photos/9301291/pexels-photo-9301291.jpeg?auto=compress&cs=tinysrgb&w=1800"}
            alt={service.title}
          />
        </div>
        <div className="container">
          <div className="crumb">
            <Link href="/">Home</Link> &nbsp;/&nbsp; <Link href="/services">Services</Link> &nbsp;/&nbsp; Request
          </div>
          <h1>Request: {service.title}</h1>
          <p>Fill in your details and we will get back to you with a tailored consultation.</p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 380px', gap: '50px', alignItems: 'start' }}>

          {/* Form */}
          <div>
            <h2 style={{ fontSize: '26px', marginBottom: '8px' }}>Your Information</h2>
            <p style={{ color: 'var(--muted)', marginBottom: '32px' }}>
              Our consultants will review your request and contact you within 24 hours to schedule a consultation.
            </p>

            <form action={createServiceRequest} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <input type="hidden" name="serviceId" value={service.id} />

              <div>
                <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 600, letterSpacing: '.06em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '8px' }}>
                  Full Name *
                </label>
                <input
                  type="text"
                  name="customerName"
                  required
                  placeholder="e.g. John Doe"
                  style={{ width: '100%', padding: '14px 16px', border: '1.5px solid #ddd', borderRadius: '6px', fontFamily: 'inherit', fontSize: '15px', background: '#fff' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 600, letterSpacing: '.06em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '8px' }}>
                  Email Address *
                </label>
                <input
                  type="email"
                  name="customerEmail"
                  required
                  placeholder="e.g. john@company.com"
                  style={{ width: '100%', padding: '14px 16px', border: '1.5px solid #ddd', borderRadius: '6px', fontFamily: 'inherit', fontSize: '15px', background: '#fff' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 600, letterSpacing: '.06em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '8px' }}>
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="customerPhone"
                  required
                  placeholder="e.g. +256 779 000 000"
                  style={{ width: '100%', padding: '14px 16px', border: '1.5px solid #ddd', borderRadius: '6px', fontFamily: 'inherit', fontSize: '15px', background: '#fff' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 600, letterSpacing: '.06em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '8px' }}>
                  Organisation / Company *
                </label>
                <input
                  type="text"
                  name="organisation"
                  required
                  placeholder="e.g. ABC Manufacturing Ltd"
                  style={{ width: '100%', padding: '14px 16px', border: '1.5px solid #ddd', borderRadius: '6px', fontFamily: 'inherit', fontSize: '15px', background: '#fff' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 600, letterSpacing: '.06em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '8px' }}>
                  Additional Details *
                </label>
                <textarea
                  name="details"
                  rows={5}
                  required
                  placeholder="Briefly describe what you need help with, the size of your organisation, and any specific concerns..."
                  style={{ width: '100%', padding: '14px 16px', border: '1.5px solid #ddd', borderRadius: '6px', fontFamily: 'inherit', fontSize: '15px', background: '#fff', resize: 'vertical', lineHeight: 1.6 }}
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn btn-solid"
                style={{ padding: '16px 32px', fontSize: '16px', marginTop: '8px', justifyContent: 'center' }}
              >
                Submit Request &rarr;
              </button>
            </form>
          </div>

          {/* Summary Card */}
          <div>
            <div className="wp-card" style={{ padding: '28px', position: 'sticky', top: '100px' }}>
              {service.imageUrl && (
                <img src={service.imageUrl} alt={service.title} style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '6px', marginBottom: '20px' }} />
              )}
              <div style={{ fontSize: '12px', textTransform: 'uppercase', color: 'var(--accent)', fontWeight: 600, marginBottom: '8px' }}>{service.category}</div>
              <h3 style={{ fontSize: '20px', marginBottom: '12px' }}>{service.title}</h3>
              <p style={{ fontSize: '14px', color: 'var(--muted)', marginBottom: '20px' }}>{service.description}</p>

              <div style={{ marginTop: '16px', padding: '12px', background: '#f8fdf8', borderRadius: '6px', border: '1px solid #d4edda' }}>
                <p style={{ margin: 0, fontSize: '13px', color: '#155724' }}>
                  ✓ Free initial consultation<br />
                  ✓ OSH Act 2006 compliant delivery<br />
                  ✓ Response within 24 hours
                </p>
              </div>

              <div style={{ marginTop: '20px', paddingTop: '16px', borderTop: '1px solid #eee' }}>
                <p style={{ fontSize: '13px', color: 'var(--muted)', margin: '0 0 8px' }}>Or contact us directly:</p>
                <a href="https://wa.me/256779868200" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#25D366', fontWeight: 600, fontSize: '14px' }}>
                  💬 Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
