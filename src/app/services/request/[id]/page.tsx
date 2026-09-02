import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { createServiceRequest } from "@/app/actions";
import { notFound } from "next/navigation";

export default async function RequestService({ params }: { params: { id: string } }) {
  const service = await prisma.service.findUnique({
    where: { id: params.id }
  });

  if (!service) {
    notFound();
  }

  return (
    <>
      <section className="page-banner" style={{ paddingBottom: 0 }}>
        <div className="container">
          <div className="crumb">
            <Link href="/services">Services</Link> &nbsp;/&nbsp; Request
          </div>
          <h1>Request Service: {service.title}</h1>
          <p>Please provide your details below to request this service.</p>
        </div>
      </section>

      <section className="section reveal">
        <div className="container">
          <div style={{ maxWidth: "600px" }}>
            <span className="eyebrow">Request Details</span>
            <h2 style={{ fontSize: "28px", marginBottom: "24px" }}>Provide your information</h2>
            
            <form action={createServiceRequest}>
              <input type="hidden" name="serviceId" value={service.id} />
              
              <div style={{ marginBottom: "18px" }}>
                <label style={{ fontSize: "12.5px", fontWeight: 600, letterSpacing: ".04em", textTransform: "uppercase", color: "var(--muted)" }}>Full Name</label>
                <input type="text" name="customerName" required style={{ width: "100%", marginTop: "8px", padding: "14px 16px", border: "1.5px solid var(--line)", fontFamily: "inherit", fontSize: "14.5px", background: "var(--white)" }} />
              </div>
              
              <div style={{ marginBottom: "18px" }}>
                <label style={{ fontSize: "12.5px", fontWeight: 600, letterSpacing: ".04em", textTransform: "uppercase", color: "var(--muted)" }}>Email</label>
                <input type="email" name="customerEmail" required style={{ width: "100%", marginTop: "8px", padding: "14px 16px", border: "1.5px solid var(--line)", fontFamily: "inherit", fontSize: "14.5px", background: "var(--white)" }} />
              </div>
              
              <div style={{ marginBottom: "18px" }}>
                <label style={{ fontSize: "12.5px", fontWeight: 600, letterSpacing: ".04em", textTransform: "uppercase", color: "var(--muted)" }}>Phone</label>
                <input type="tel" name="customerPhone" required style={{ width: "100%", marginTop: "8px", padding: "14px 16px", border: "1.5px solid var(--line)", fontFamily: "inherit", fontSize: "14.5px", background: "var(--white)" }} />
              </div>

              <div style={{ marginBottom: "24px" }}>
                <label style={{ fontSize: "12.5px", fontWeight: 600, letterSpacing: ".04em", textTransform: "uppercase", color: "var(--muted)" }}>Additional Details</label>
                <textarea name="details" rows={4} required style={{ width: "100%", marginTop: "8px", padding: "14px 16px", border: "1.5px solid var(--line)", fontFamily: "inherit", fontSize: "14.5px", background: "var(--white)", resize: "vertical" }}></textarea>
              </div>

              <button type="submit" className="btn btn-solid">Submit Request <span className="btn-arrow">&rarr;</span></button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
