import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { createOrder } from "@/app/actions";
import { notFound } from "next/navigation";

export default async function OrderCourse({ params }: { params: { id: string } }) {
  const course = await prisma.course.findUnique({
    where: { id: params.id }
  });

  if (!course) {
    notFound();
  }

  return (
    <>
      <section className="page-banner" style={{ paddingBottom: 0 }}>
        <div className="container">
          <div className="crumb">
            <Link href="/courses">Courses</Link> &nbsp;/&nbsp; Order
          </div>
          <h1>Order Course: {course.title}</h1>
          <p>Please provide your details below to place an order for this course.</p>
        </div>
      </section>

      <section className="section reveal">
        <div className="container">
          <div style={{ maxWidth: "600px" }}>
            <span className="eyebrow">Order Details</span>
            <h2 style={{ fontSize: "28px", marginBottom: "24px" }}>Provide your information</h2>
            
            <form action={createOrder}>
              <input type="hidden" name="courseId" value={course.id} />
              
              <div style={{ marginBottom: "18px" }}>
                <label style={{ fontSize: "12.5px", fontWeight: 600, letterSpacing: ".04em", textTransform: "uppercase", color: "var(--muted)" }}>Full Name</label>
                <input type="text" name="customerName" required style={{ width: "100%", marginTop: "8px", padding: "14px 16px", border: "1.5px solid var(--line)", fontFamily: "inherit", fontSize: "14.5px", background: "var(--white)" }} />
              </div>
              
              <div style={{ marginBottom: "18px" }}>
                <label style={{ fontSize: "12.5px", fontWeight: 600, letterSpacing: ".04em", textTransform: "uppercase", color: "var(--muted)" }}>Email</label>
                <input type="email" name="customerEmail" required style={{ width: "100%", marginTop: "8px", padding: "14px 16px", border: "1.5px solid var(--line)", fontFamily: "inherit", fontSize: "14.5px", background: "var(--white)" }} />
              </div>
              
              <div style={{ marginBottom: "24px" }}>
                <label style={{ fontSize: "12.5px", fontWeight: 600, letterSpacing: ".04em", textTransform: "uppercase", color: "var(--muted)" }}>Phone</label>
                <input type="tel" name="customerPhone" required style={{ width: "100%", marginTop: "8px", padding: "14px 16px", border: "1.5px solid var(--line)", fontFamily: "inherit", fontSize: "14.5px", background: "var(--white)" }} />
              </div>

              <button type="submit" className="btn btn-solid">Submit Order <span className="btn-arrow">&rarr;</span></button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
