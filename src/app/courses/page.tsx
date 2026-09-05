import Link from "next/link";
import { prisma } from "@/lib/prisma";

export default async function Courses(props: { searchParams: Promise<{ success?: string }> }) {
  const searchParams = await props.searchParams;
  const success = searchParams.success === 'true';

  const courses = await prisma.course.findMany({ orderBy: { category: 'asc' } });


  const grouped = courses.reduce((acc, course) => {
    if (!acc[course.category]) acc[course.category] = [];
    acc[course.category].push(course);
    return acc;
  }, {} as Record<string, typeof courses>);

  const categoryOrder = [
    "OSH Training",
    "Fire & Emergency Response",
    "First Aid & CPR",
    "Environmental Management",
    "PPE Training",
    "Audits & Inspections",
    "Incident Investigation",
    "Health & Safety Management",
    "Data & Systems Management",
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
            src="https://images.pexels.com/photos/18340568/pexels-photo-18340568.jpeg?auto=compress&cs=tinysrgb&w=1800"
            alt="Team in a hands-on fire safety training session"
          />
        </div>
        <div className="container">
          <h1>Training programs built for real workplaces</h1>
          <p>
            Practical, certificate-bearing courses covering every discipline of Occupational Safety, Health and Environment from entry-level workers to senior managers.
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
              <span><strong>Enrollment submitted successfully!</strong> Our team will contact you within 24 hours with payment details and schedule information.</span>
            </div>
          )}

          {sortedCategories.map((category, index) => (
            <div key={category} style={{ marginBottom: '64px' }}>

              <div style={{ marginBottom: '32px', textAlign: 'center' }}>
                <span style={{ display: 'inline-block', background: 'var(--accent)', color: 'white', fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '4px 12px', borderRadius: '4px', marginBottom: '10px' }}>
                  Training Programme
                </span>
                <h2 style={{ fontSize: '28px', fontWeight: 700, margin: 0 }}>{index + 1}. {category}</h2>
              </div>


              <div className="wp-card-grid">
                {grouped[category].map((course) => (
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
            </div>
          ))}
        </div>
      </section>

      <section className="cta-banner reveal">
        <div className="hero-bg">
          <img src="https://images.pexels.com/photos/38070/pexels-photo-38070.jpeg?auto=compress&cs=tinysrgb&w=1800" alt="Safety helmets ready for training participants" />
        </div>
        <div className="container">
          <span className="eyebrow" style={{ color: "var(--amber)" }}>Book A Cohort</span>
          <h2>Bring this training to your organisation</h2>
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
