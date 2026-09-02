import Link from "next/link";
import { prisma } from "@/lib/prisma";

export default async function Services() {
  const services = await prisma.service.findMany({
    orderBy: { title: 'asc' }
  });

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
          <div className="crumb">
            <Link href="/">Home</Link> &nbsp;/&nbsp; Services
          </div>
          <h1>Comprehensive safety solutions for every industry</h1>
          <p>
            From the first walk-through to certification and ongoing compliance, our core service lines cover the full lifecycle of Occupational Safety, Health and Environment management.
          </p>
        </div>
      </section>

      <section className="section reveal">
        <div className="container">
          {services.length === 0 ? (
            <div style={{ textAlign: "center", padding: "60px 0", color: "var(--muted)" }}>
              <p>No services found in the database. Please run the seed script to populate services.</p>
            </div>
          ) : (
            <div className="row-list" style={{ marginBottom: "70px" }}>
              {services.map((service) => (
                <div key={service.id} className="course-item" style={{ border: "1px solid var(--line)", padding: "24px", marginBottom: "20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div>
                    <div className="tags" style={{ display: "flex", gap: "8px", marginBottom: "12px" }}>
                      <span className="pill">{service.category}</span>
                    </div>
                    <h3 style={{ fontSize: "20px", marginBottom: "8px" }}>{service.title}</h3>
                    <p style={{ color: "var(--muted)", fontSize: "14.5px" }}>{service.description}</p>
                  </div>
                  <div>
                    <Link href={`/services/request/${service.id}`} className="btn btn-solid">
                      Request Service
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
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
