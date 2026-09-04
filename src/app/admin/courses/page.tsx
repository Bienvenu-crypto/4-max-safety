import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export default async function AdminCourses() {
  const courses = await prisma.course.findMany({
    orderBy: { title: 'asc' }
  });

  async function addCourse(formData: FormData) {
    "use server";
    await prisma.course.create({
      data: {
        title: formData.get("title") as string,
        category: formData.get("category") as string,
        description: formData.get("description") as string,
        syllabus: formData.get("syllabus") as string,
        price: formData.get("price") ? parseFloat(formData.get("price") as string) : null,
        imageUrl: formData.get("imageUrl") as string || null,
        content: formData.get("content") as string || null,
      }
    });
    revalidatePath("/admin/courses");
    revalidatePath("/courses");
  }

  async function deleteCourse(formData: FormData) {
    "use server";
    const id = formData.get("id") as string;
    await prisma.course.delete({ where: { id } });
    revalidatePath("/admin/courses");
    revalidatePath("/courses");
  }

  return (
    <div>
      <h1 style={{ marginBottom: '24px' }}>Manage Courses</h1>
      
      <div style={{ background: 'white', padding: '24px', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)', marginBottom: '40px' }}>
        <h2 style={{ fontSize: '20px', marginBottom: '16px' }}>Add New Course</h2>
        <form action={addCourse} style={{ display: 'grid', gap: '16px', maxWidth: '600px' }}>
          <div>
            <label style={{ display: 'block', fontSize: '14px', marginBottom: '8px' }}>Title</label>
            <input name="title" required style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ddd' }} />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '14px', marginBottom: '8px' }}>Category</label>
              <input name="category" required style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ddd' }} />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '14px', marginBottom: '8px' }}>Price (USD)</label>
              <input name="price" type="number" step="0.01" style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ddd' }} />
            </div>
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '14px', marginBottom: '8px' }}>Short Description</label>
            <textarea name="description" required rows={2} style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ddd', fontFamily: 'inherit' }}></textarea>
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '14px', marginBottom: '8px' }}>Image URL (optional)</label>
            <input name="imageUrl" style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ddd' }} />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '14px', marginBottom: '8px' }}>Full Content/Syllabus Details (optional, use newlines for bullet points)</label>
            <textarea name="content" rows={5} style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ddd', fontFamily: 'inherit' }}></textarea>
          </div>
          <input type="hidden" name="syllabus" value="See details" />
          <button type="submit" style={{ padding: '12px 24px', background: 'var(--accent)', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>
            Add Course
          </button>
        </form>
      </div>

      <div style={{ background: 'white', padding: '24px', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
        <h2 style={{ fontSize: '20px', marginBottom: '16px' }}>Existing Courses</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {courses.length === 0 ? (
            <p>No courses found.</p>
          ) : (
            courses.map(course => (
              <div key={course.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px', border: '1px solid #eee', borderRadius: '8px' }}>
                <div>
                  <h4 style={{ margin: '0 0 4px 0' }}>{course.title}</h4>
                  <p style={{ margin: 0, fontSize: '13px', color: 'var(--muted)' }}>
                    {course.category} {course.price && `• $${course.price}`}
                  </p>
                </div>
                <form action={deleteCourse}>
                  <input type="hidden" name="id" value={course.id} />
                  <button type="submit" style={{ padding: '8px 16px', background: '#dc3545', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '13px' }}>
                    Delete
                  </button>
                </form>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
