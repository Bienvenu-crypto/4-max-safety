import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export default async function AdminOrders() {
  const orders = await prisma.order.findMany({
    orderBy: { createdAt: 'desc' },
    include: { course: true },
  });

  async function updateStatus(formData: FormData) {
    "use server";
    const id = formData.get("id") as string;
    const status = formData.get("status") as string;
    await prisma.order.update({ where: { id }, data: { status } });
    revalidatePath("/admin/orders");
    revalidatePath("/admin");
  }

  async function deleteOrder(formData: FormData) {
    "use server";
    const id = formData.get("id") as string;
    await prisma.order.delete({ where: { id } });
    revalidatePath("/admin/orders");
    revalidatePath("/admin");
  }

  return (
    <div>
      <h1 style={{ marginBottom: '8px' }}>Course Enrollments</h1>
      <p style={{ color: 'var(--muted)', marginBottom: '32px' }}>All course enrollment submissions from users.</p>

      <div style={{ background: 'white', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)', overflow: 'hidden' }}>
        {orders.length === 0 ? (
          <div style={{ padding: '40px', textAlign: 'center', color: 'var(--muted)' }}>No enrollments yet.</div>
        ) : (
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ background: '#f8f9fa', borderBottom: '2px solid #eee' }}>
                <th style={{ padding: '14px 20px', textAlign: 'left', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.04em', color: 'var(--muted)' }}>Name</th>
                <th style={{ padding: '14px 20px', textAlign: 'left', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.04em', color: 'var(--muted)' }}>Contact</th>
                <th style={{ padding: '14px 20px', textAlign: 'left', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.04em', color: 'var(--muted)' }}>Course</th>
                <th style={{ padding: '14px 20px', textAlign: 'left', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.04em', color: 'var(--muted)' }}>Date</th>
                <th style={{ padding: '14px 20px', textAlign: 'left', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.04em', color: 'var(--muted)' }}>Status</th>
                <th style={{ padding: '14px 20px', textAlign: 'left', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.04em', color: 'var(--muted)' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, i) => (
                <tr key={order.id} style={{ borderBottom: '1px solid #f0f0f0', background: i % 2 === 0 ? 'white' : '#fafafa' }}>
                  <td style={{ padding: '14px 20px', fontWeight: 600, fontSize: '14px' }}>{order.customerName}</td>
                  <td style={{ padding: '14px 20px', fontSize: '13px', color: 'var(--muted)' }}>
                    <div>{order.customerEmail}</div>
                    <div>{order.customerPhone}</div>
                  </td>
                  <td style={{ padding: '14px 20px', fontSize: '13px' }}>{order.course.title}</td>
                  <td style={{ padding: '14px 20px', fontSize: '13px', color: 'var(--muted)' }}>{new Date(order.createdAt).toLocaleDateString()}</td>
                  <td style={{ padding: '14px 20px' }}>
                    <form action={updateStatus} style={{ display: 'inline-flex', gap: '6px', alignItems: 'center' }}>
                      <input type="hidden" name="id" value={order.id} />
                      <select name="status" defaultValue={order.status} style={{ padding: '4px 8px', fontSize: '12px', borderRadius: '4px', border: '1px solid #ddd' }}>
                        <option value="PENDING">PENDING</option>
                        <option value="COMPLETED">COMPLETED</option>
                        <option value="CANCELLED">CANCELLED</option>
                      </select>
                      <button type="submit" style={{ padding: '4px 10px', background: '#28a745', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '12px' }}>Update</button>
                    </form>
                  </td>
                  <td style={{ padding: '14px 20px' }}>
                    <form action={deleteOrder} style={{ display: 'inline' }}>
                      <input type="hidden" name="id" value={order.id} />
                      <button type="submit" style={{ padding: '6px 12px', background: '#dc3545', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '12px' }}>Delete</button>
                    </form>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
