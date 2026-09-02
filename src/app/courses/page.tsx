import Link from "next/link";
import { prisma } from "@/lib/prisma";

export default async function Courses() {
  const courses = await prisma.course.findMany({
    orderBy: { title: 'asc' }
  });

  return (
    <>
      <section className="page-banner">
        <div className="hero-bg">
          <img
            src="https://images.pexels.com/photos/18340568/pexels-photo-18340568.jpeg?auto=compress&cs=tinysrgb&w=1800"
            alt="Team in a hands-on fire safety training session"
          />
        </div>
        <div className="container">
          <div className="crumb">
            <Link href="/">Home</Link> &nbsp;/&nbsp; Courses
          </div>
          <h1>Training programs built for real workplaces</h1>
          <p>
            Practical, certificate-bearing courses covering every discipline of Occupational Safety, Health and Environment.
          </p>
        </div>
      </section>

      <section className="section reveal">
        <div className="container">
          {courses.length === 0 ? (
            <div style={{ textAlign: "center", padding: "60px 0", color: "var(--muted)" }}>
              <p>No courses found in the database. Please run the seed script to populate courses.</p>
            </div>
          ) : (
            <div className="row-list" style={{ marginBottom: "70px" }}>
              {courses.map((course) => (
                <div key={course.id} className="course-item" style={{ border: "1px solid var(--line)", padding: "24px", marginBottom: "20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div>
                    <div className="tags" style={{ display: "flex", gap: "8px", marginBottom: "12px" }}>
                      <span className="pill">Certificate</span>
                      <span className="pill">{course.category}</span>
                    </div>
                    <h3 style={{ fontSize: "20px", marginBottom: "8px" }}>{course.title}</h3>
                    <p style={{ color: "var(--muted)", fontSize: "14.5px" }}>{course.description}</p>
                    {course.price && <p style={{ fontWeight: 600, color: "var(--ink)", marginTop: "8px" }}>Price: ${course.price}</p>}
                  </div>
                  <div>
                    <Link href={`/courses/order/${course.id}`} className="btn btn-solid">
                      Order Course
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
          <img src="https://images.pexels.com/photos/38070/pexels-photo-38070.jpeg?auto=compress&cs=tinysrgb&w=1800" alt="Safety helmets ready for training participants" />
        </div>
        <div className="container">
          <span className="eyebrow" style={{ color: "var(--amber)" }}>Book A Cohort</span>
          <h2>Bring this training to your organization</h2>
          <p>We deliver on-site and cohort-based training tailored to your industry and team size.</p>
          <div className="hero-actions">
            <Link href="/contact" className="btn btn-solid">Enquire About Courses</Link>
            <a href="https://wa.me/256779868200" className="btn btn-ghost-light">Chat On WhatsApp</a>
          </div>
        </div>
      </section>
    </>
  );
}
