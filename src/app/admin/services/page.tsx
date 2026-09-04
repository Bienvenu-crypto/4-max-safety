import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export default async function AdminServices() {
  const services = await prisma.service.findMany({
    orderBy: { title: 'asc' }
  });

  async function addService(formData: FormData) {
    "use server";
    await prisma.service.create({
      data: {
        title: formData.get("title") as string,
        category: formData.get("category") as string,
        description: formData.get("description") as string,
        imageUrl: formData.get("imageUrl") as string || null,
        content: formData.get("content") as string || null,
      }
    });
    revalidatePath("/admin/services");
    revalidatePath("/services");
  }

  async function deleteService(formData: FormData) {
    "use server";
    const id = formData.get("id") as string;
    await prisma.service.delete({ where: { id } });
    revalidatePath("/admin/services");
    revalidatePath("/services");
  }

  return (
    <div>
      <h1 style={{ marginBottom: '24px' }}>Manage Services</h1>
      
      <div style={{ background: 'white', padding: '24px', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)', marginBottom: '40px' }}>
        <h2 style={{ fontSize: '20px', marginBottom: '16px' }}>Add New Service</h2>
        <form action={addService} style={{ display: 'grid', gap: '16px', maxWidth: '600px' }}>
          <div>
            <label style={{ display: 'block', fontSize: '14px', marginBottom: '8px' }}>Title</label>
            <input name="title" required style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ddd' }} />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '14px', marginBottom: '8px' }}>Category</label>
            <input name="category" required style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ddd' }} />
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
            <label style={{ display: 'block', fontSize: '14px', marginBottom: '8px' }}>Full Content Details (optional, use newlines for bullet points)</label>
            <textarea name="content" rows={5} style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ddd', fontFamily: 'inherit' }}></textarea>
          </div>
          <button type="submit" style={{ padding: '12px 24px', background: 'var(--accent)', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>
            Add Service
          </button>
        </form>
      </div>

      <div style={{ background: 'white', padding: '24px', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
        <h2 style={{ fontSize: '20px', marginBottom: '16px' }}>Existing Services</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {services.length === 0 ? (
            <p>No services found.</p>
          ) : (
            services.map(service => (
              <div key={service.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px', border: '1px solid #eee', borderRadius: '8px' }}>
                <div>
                  <h4 style={{ margin: '0 0 4px 0' }}>{service.title}</h4>
                  <p style={{ margin: 0, fontSize: '13px', color: 'var(--muted)' }}>{service.category}</p>
                </div>
                <form action={deleteService}>
                  <input type="hidden" name="id" value={service.id} />
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
