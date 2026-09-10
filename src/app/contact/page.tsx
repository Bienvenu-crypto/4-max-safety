import Link from "next/link";
import { submitContact } from "@/app/actions";

export default async function Contact(props: { searchParams: Promise<{ success?: string }> }) {
  const searchParams = await props.searchParams;
  const success = searchParams.success === "true";

  return (
    <>
      <section className="page-banner" style={{ paddingBottom: 0 }}>
        <div className="hero-bg">
          <img
            src="https://images.pexels.com/photos/8960942/pexels-photo-8960942.jpeg?auto=compress&cs=tinysrgb&w=1800"
            alt="Consultant ready to discuss a safety programme"
          />
        </div>
        <div className="container">
          <h1>Let's talk about your workplace safety</h1>
          <p>
            Reach out for audits, training, ISO consultancy, or PPE supply — our team responds within one business day.
          </p>
        </div>
      </section>

      <section className="section reveal">
        <div className="container" style={{ display: "grid", gridTemplateColumns: "1fr 1.3fr", gap: "70px" }}>
          <div>
            <span className="eyebrow">Get In Touch</span>
            <h2 style={{ fontSize: "28px" }}>Contact Details</h2>
            <div className="row-list" style={{ borderTop: "1px solid var(--line)", marginTop: "10px" }}>
              <div className="row-item" style={{ gridTemplateColumns: "50px 1fr", padding: "26px 0" }}>
                <div className="num">&#9742;</div>
                <div>
                  <h3 style={{ fontSize: "16px" }}>Phone</h3>
                  <p><a href="tel:+256779868200">+256 779 868 200</a></p>
                </div>
              </div>
              <div className="row-item" style={{ gridTemplateColumns: "50px 1fr", padding: "26px 0" }}>
                <div className="num">&#9993;</div>
                <div>
                  <h3 style={{ fontSize: "16px" }}>Email</h3>
                  <p><a href="mailto:oryemdavidmark64@gmail.com">oryemdavidmark64@gmail.com</a></p>
                </div>
              </div>
              <div className="row-item" style={{ gridTemplateColumns: "50px 1fr", padding: "26px 0" }}>
                <div className="num">&#9670;</div>
                <div>
                  <h3 style={{ fontSize: "16px" }}>WhatsApp</h3>
                  <p><a href="https://wa.me/256779868200">+256 779 868 200</a></p>
                </div>
              </div>
              <div className="row-item" style={{ gridTemplateColumns: "50px 1fr", padding: "26px 0" }}>
                <div className="num">&#9724;</div>
                <div>
                  <h3 style={{ fontSize: "16px" }}>Facebook</h3>
                  <p><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Oryem David Mark</a></p>
                </div>
              </div>
              <div className="row-item" style={{ gridTemplateColumns: "50px 1fr", padding: "26px 0", borderBottom: 0 }}>
                <div className="num">&#9679;</div>
                <div>
                  <h3 style={{ fontSize: "16px" }}>Location</h3>
                  <p>Kampala, Uganda</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <span className="eyebrow">Send A Message</span>
            <h2 style={{ fontSize: "28px" }}>Request A Quote</h2>

            {success ? (
              <div style={{
                background: "#d4edda", border: "1px solid #c3e6cb", color: "#155724",
                padding: "24px 28px", borderRadius: "8px", marginTop: "24px"
              }}>
                <div style={{ fontSize: "28px", marginBottom: "12px" }}>✅</div>
                <h3 style={{ margin: "0 0 8px", color: "#155724" }}>Message sent successfully!</h3>
                <p style={{ margin: "0 0 16px", fontSize: "14px", lineHeight: 1.6 }}>
                  Thank you for reaching out. Our team will respond within one business day.
                </p>
                <Link href="/contact" style={{ color: "#155724", fontWeight: 600, fontSize: "14px", textDecoration: "underline" }}>
                  ← Send another message
                </Link>
              </div>
            ) : (
              <form action={submitContact} style={{ marginTop: "4px" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "18px", marginBottom: "18px" }}>
                  <div>
                    <label style={{ fontSize: "12.5px", fontWeight: 600, letterSpacing: ".04em", textTransform: "uppercase", color: "var(--muted)" }}>Full Name *</label>
                    <input type="text" name="name" required style={{ width: "100%", marginTop: "8px", padding: "14px 16px", border: "1.5px solid var(--line)", fontFamily: "inherit", fontSize: "14.5px", background: "var(--white)", borderRadius: "4px" }} />
                  </div>
                  <div>
                    <label style={{ fontSize: "12.5px", fontWeight: 600, letterSpacing: ".04em", textTransform: "uppercase", color: "var(--muted)" }}>Organization</label>
                    <input type="text" name="organisation" style={{ width: "100%", marginTop: "8px", padding: "14px 16px", border: "1.5px solid var(--line)", fontFamily: "inherit", fontSize: "14.5px", background: "var(--white)", borderRadius: "4px" }} />
                  </div>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "18px", marginBottom: "18px" }}>
                  <div>
                    <label style={{ fontSize: "12.5px", fontWeight: 600, letterSpacing: ".04em", textTransform: "uppercase", color: "var(--muted)" }}>Email *</label>
                    <input type="email" name="email" required style={{ width: "100%", marginTop: "8px", padding: "14px 16px", border: "1.5px solid var(--line)", fontFamily: "inherit", fontSize: "14.5px", background: "var(--white)", borderRadius: "4px" }} />
                  </div>
                  <div>
                    <label style={{ fontSize: "12.5px", fontWeight: 600, letterSpacing: ".04em", textTransform: "uppercase", color: "var(--muted)" }}>Phone</label>
                    <input type="tel" name="phone" style={{ width: "100%", marginTop: "8px", padding: "14px 16px", border: "1.5px solid var(--line)", fontFamily: "inherit", fontSize: "14.5px", background: "var(--white)", borderRadius: "4px" }} />
                  </div>
                </div>
                <div style={{ marginBottom: "18px" }}>
                  <label style={{ fontSize: "12.5px", fontWeight: 600, letterSpacing: ".04em", textTransform: "uppercase", color: "var(--muted)" }}>Service Of Interest</label>
                  <select name="service" style={{ width: "100%", marginTop: "8px", padding: "14px 16px", border: "1.5px solid var(--line)", fontFamily: "inherit", fontSize: "14.5px", background: "var(--white)", borderRadius: "4px" }}>
                    <option>Risk Assessment &amp; Audits</option>
                    <option>Management Systems &amp; ISO</option>
                    <option>Training &amp; Courses</option>
                    <option>Incident Investigation</option>
                    <option>PPE &amp; Equipment Supply</option>
                  </select>
                </div>
                <div style={{ marginBottom: "24px" }}>
                  <label style={{ fontSize: "12.5px", fontWeight: 600, letterSpacing: ".04em", textTransform: "uppercase", color: "var(--muted)" }}>Message *</label>
                  <textarea name="message" rows={5} required style={{ width: "100%", marginTop: "8px", padding: "14px 16px", border: "1.5px solid var(--line)", fontFamily: "inherit", fontSize: "14.5px", background: "var(--white)", resize: "vertical", borderRadius: "4px" }}></textarea>
                </div>
                <button type="submit" className="btn btn-solid">Send Message <span className="btn-arrow">&rarr;</span></button>
              </form>
            )}
          </div>
        </div>
      </section>

      <section className="section on-paper2 reveal" style={{ paddingTop: 0 }}>
        <div className="container">
          <div style={{ border: "1px solid var(--line)", height: "380px", overflow: "hidden" }}>
            <iframe title="4 Max Safety location map" src="https://maps.google.com/maps?q=Kampala%2C%20Uganda&t=&z=12&ie=UTF8&iwloc=&output=embed" width="100%" height="100%" style={{ border: 0 }} loading="lazy"></iframe>
          </div>
        </div>
      </section>
    </>
  );
}
