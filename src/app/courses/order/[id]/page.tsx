import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { createOrder } from "@/app/actions";
import { notFound } from "next/navigation";

export default async function OrderCourse(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const course = await prisma.course.findUnique({
    where: { id: params.id }
  });

  if (!course) {
    notFound();
  }

  return (
    <>
      <section className="page-banner" style={{ padding: '120px 0 60px' }}>
        <div className="hero-bg">
          <img
            src={course.imageUrl || "https://images.pexels.com/photos/18340568/pexels-photo-18340568.jpeg?auto=compress&cs=tinysrgb&w=1800"}
            alt={course.title}
          />
        </div>
        <div className="container">
          <div className="crumb">
            <Link href="/">Home</Link> &nbsp;/&nbsp; <Link href="/courses">Courses</Link> &nbsp;/&nbsp; Enroll
          </div>
          <h1>Enroll: {course.title}</h1>
          <p>Fill in your details below to enroll in this course.</p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 380px', gap: '50px', alignItems: 'start' }}>
          
          {/* Form */}
          <div>
            <h2 style={{ fontSize: '26px', marginBottom: '8px' }}>Your Information</h2>
            <p style={{ color: 'var(--muted)', marginBottom: '32px' }}>
              Our team will get back to you within 24 hours with payment details and schedule information.
            </p>

            <form action={createOrder} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <input type="hidden" name="courseId" value={course.id} />

              <div>
                <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 600, letterSpacing: '.06em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '8px' }}>
                  Full Name *
                </label>
                <input
                  type="text"
                  name="customerName"
                  required
                  placeholder="e.g. John Doe"
                  style={{ width: '100%', padding: '14px 16px', border: '1.5px solid #ddd', borderRadius: '6px', fontFamily: 'inherit', fontSize: '15px', background: '#fff', outline: 'none', transition: 'border-color .2s' }}
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
                  Organisation / Company (optional)
                </label>
                <input
                  type="text"
                  name="organisation"
                  placeholder="e.g. ABC Manufacturing Ltd"
                  style={{ width: '100%', padding: '14px 16px', border: '1.5px solid #ddd', borderRadius: '6px', fontFamily: 'inherit', fontSize: '15px', background: '#fff' }}
                />
              </div>

              <button
                type="submit"
                className="btn btn-solid"
                style={{ padding: '16px 32px', fontSize: '16px', marginTop: '8px', justifyContent: 'center' }}
              >
                Submit Enrollment &rarr;
              </button>
            </form>
          </div>

          {/* Summary Card */}
          <div>
            <div className="wp-card" style={{ padding: '28px', position: 'sticky', top: '100px' }}>
              {course.imageUrl && (
                <img src={course.imageUrl} alt={course.title} style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '6px', marginBottom: '20px' }} />
              )}
              <div style={{ fontSize: '12px', textTransform: 'uppercase', color: 'var(--accent)', fontWeight: 600, marginBottom: '8px' }}>{course.category}</div>
              <h3 style={{ fontSize: '20px', marginBottom: '12px' }}>{course.title}</h3>
              <p style={{ fontSize: '14px', color: 'var(--muted)', marginBottom: '20px' }}>{course.description}</p>
              {course.price && (
                <div style={{ fontSize: '28px', fontWeight: 700, color: 'var(--ink)', borderTop: '1px solid #eee', paddingTop: '16px' }}>
                  ${course.price} <span style={{ fontSize: '14px', color: 'var(--muted)', fontWeight: 400 }}>per person</span>
                </div>
              )}
              <div style={{ marginTop: '16px', padding: '12px', background: '#f8fdf8', borderRadius: '6px', border: '1px solid #d4edda' }}>
                <p style={{ margin: 0, fontSize: '13px', color: '#155724' }}>
                  ✓ Certificate awarded on completion<br />
                  ✓ Practical, hands-on sessions<br />
                  ✓ OSH Act 2006 compliant
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
