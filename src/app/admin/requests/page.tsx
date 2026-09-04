import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export default async function AdminRequests() {
  const requests = await prisma.serviceRequest.findMany({
    orderBy: { createdAt: 'desc' },
    include: { service: true },
  });

  async function updateStatus(formData: FormData) {
    "use server";
    const id = formData.get("id") as string;
    const status = formData.get("status") as string;
    await prisma.serviceRequest.update({ where: { id }, data: { status } });
    revalidatePath("/admin/requests");
    revalidatePath("/admin");
  }

  async function deleteRequest(formData: FormData) {
    "use server";
    const id = formData.get("id") as string;
    await prisma.serviceRequest.delete({ where: { id } });
    revalidatePath("/admin/requests");
    revalidatePath("/admin");
  }

  return (
    <div>
      <h1 style={{ marginBottom: '8px' }}>Service Requests</h1>
      <p style={{ color: 'var(--muted)', marginBottom: '32px' }}>All service request submissions from users.</p>

      <div style={{ background: 'white', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)', overflow: 'hidden' }}>
        {requests.length === 0 ? (
          <div style={{ padding: '40px', textAlign: 'center', color: 'var(--muted)' }}>No service requests yet.</div>
        ) : (
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ background: '#f8f9fa', borderBottom: '2px solid #eee' }}>
                <th style={{ padding: '14px 20px', textAlign: 'left', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.04em', color: 'var(--muted)' }}>Name</th>
                <th style={{ padding: '14px 20px', textAlign: 'left', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.04em', color: 'var(--muted)' }}>Contact</th>
                <th style={{ padding: '14px 20px', textAlign: 'left', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.04em', color: 'var(--muted)' }}>Service</th>
                <th style={{ padding: '14px 20px', textAlign: 'left', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.04em', color: 'var(--muted)' }}>Details</th>
                <th style={{ padding: '14px 20px', textAlign: 'left', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.04em', color: 'var(--muted)' }}>Date</th>
                <th style={{ padding: '14px 20px', textAlign: 'left', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.04em', color: 'var(--muted)' }}>Status</th>
                <th style={{ padding: '14px 20px', textAlign: 'left', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.04em', color: 'var(--muted)' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {requests.map((req, i) => (
                <tr key={req.id} style={{ borderBottom: '1px solid #f0f0f0', background: i % 2 === 0 ? 'white' : '#fafafa' }}>
                  <td style={{ padding: '14px 20px', fontWeight: 600, fontSize: '14px' }}>{req.customerName}</td>
                  <td style={{ padding: '14px 20px', fontSize: '13px', color: 'var(--muted)' }}>
                    <div>{req.customerEmail}</div>
                    <div>{req.customerPhone}</div>
                  </td>
                  <td style={{ padding: '14px 20px', fontSize: '13px' }}>{req.service.title}</td>
                  <td style={{ padding: '14px 20px', fontSize: '13px', color: 'var(--muted)', maxWidth: '200px' }}>
                    <span title={req.details} style={{ display: 'block', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                      {req.details}
                    </span>
                  </td>
                  <td style={{ padding: '14px 20px', fontSize: '13px', color: 'var(--muted)' }}>{new Date(req.createdAt).toLocaleDateString()}</td>
                  <td style={{ padding: '14px 20px' }}>
                    <form action={updateStatus} style={{ display: 'inline-flex', gap: '6px', alignItems: 'center' }}>
                      <input type="hidden" name="id" value={req.id} />
                      <select name="status" defaultValue={req.status} style={{ padding: '4px 8px', fontSize: '12px', borderRadius: '4px', border: '1px solid #ddd' }}>
                        <option value="PENDING">PENDING</option>
                        <option value="COMPLETED">COMPLETED</option>
                        <option value="CANCELLED">CANCELLED</option>
                      </select>
                      <button type="submit" style={{ padding: '4px 10px', background: '#28a745', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '12px' }}>Update</button>
                    </form>
                  </td>
                  <td style={{ padding: '14px 20px' }}>
                    <form action={deleteRequest} style={{ display: 'inline' }}>
                      <input type="hidden" name="id" value={req.id} />
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
