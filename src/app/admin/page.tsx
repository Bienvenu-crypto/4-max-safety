import { prisma } from "@/lib/prisma";
import Link from "next/link";

export default async function AdminDashboard() {
  const [serviceCount, courseCount, orderCount, requestCount] = await Promise.all([
    prisma.service.count(),
    prisma.course.count(),
    prisma.order.count(),
    prisma.serviceRequest.count(),
  ]);

  const recentOrders = await prisma.order.findMany({
    take: 5,
    orderBy: { createdAt: 'desc' },
    include: { course: true },
  });

  const recentRequests = await prisma.serviceRequest.findMany({
    take: 5,
    orderBy: { createdAt: 'desc' },
    include: { service: true },
  });

  return (
    <div>
      <h1 style={{ marginBottom: '8px' }}>Admin Dashboard</h1>
      <p style={{ color: 'var(--muted)', marginBottom: '40px' }}>Overview of your application data.</p>

      {/* Stats */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginBottom: '48px' }}>
        <div style={{ background: 'white', padding: '24px', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)', borderLeft: '4px solid var(--accent)' }}>
          <h3 style={{ color: 'var(--muted)', fontSize: '13px', textTransform: 'uppercase', marginBottom: '8px', letterSpacing: '0.05em' }}>Services</h3>
          <div style={{ fontSize: '36px', fontWeight: 'bold', color: 'var(--ink)' }}>{serviceCount}</div>
          <Link href="/admin/services" style={{ color: 'var(--accent)', fontSize: '13px', marginTop: '12px', display: 'inline-block' }}>Manage →</Link>
        </div>
        <div style={{ background: 'white', padding: '24px', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)', borderLeft: '4px solid #4e73df' }}>
          <h3 style={{ color: 'var(--muted)', fontSize: '13px', textTransform: 'uppercase', marginBottom: '8px', letterSpacing: '0.05em' }}>Courses</h3>
          <div style={{ fontSize: '36px', fontWeight: 'bold', color: 'var(--ink)' }}>{courseCount}</div>
          <Link href="/admin/courses" style={{ color: '#4e73df', fontSize: '13px', marginTop: '12px', display: 'inline-block' }}>Manage →</Link>
        </div>
        <div style={{ background: 'white', padding: '24px', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)', borderLeft: '4px solid #28a745' }}>
          <h3 style={{ color: 'var(--muted)', fontSize: '13px', textTransform: 'uppercase', marginBottom: '8px', letterSpacing: '0.05em' }}>Course Enrollments</h3>
          <div style={{ fontSize: '36px', fontWeight: 'bold', color: 'var(--ink)' }}>{orderCount}</div>
          <Link href="/admin/orders" style={{ color: '#28a745', fontSize: '13px', marginTop: '12px', display: 'inline-block' }}>View All →</Link>
        </div>
        <div style={{ background: 'white', padding: '24px', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)', borderLeft: '4px solid var(--amber)' }}>
          <h3 style={{ color: 'var(--muted)', fontSize: '13px', textTransform: 'uppercase', marginBottom: '8px', letterSpacing: '0.05em' }}>Service Requests</h3>
          <div style={{ fontSize: '36px', fontWeight: 'bold', color: 'var(--ink)' }}>{requestCount}</div>
          <Link href="/admin/requests" style={{ color: 'var(--amber)', fontSize: '13px', marginTop: '12px', display: 'inline-block' }}>View All →</Link>
        </div>
      </div>

      {/* Recent Orders */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
        <div style={{ background: 'white', padding: '24px', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
          <h2 style={{ fontSize: '18px', marginBottom: '20px' }}>Recent Course Enrollments</h2>
          {recentOrders.length === 0 ? (
            <p style={{ color: 'var(--muted)', fontSize: '14px' }}>No enrollments yet.</p>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {recentOrders.map(order => (
                <div key={order.id} style={{ padding: '12px', background: '#f8f9fa', borderRadius: '6px', borderLeft: '3px solid #28a745' }}>
                  <div style={{ fontWeight: 600, fontSize: '14px' }}>{order.customerName}</div>
                  <div style={{ fontSize: '13px', color: 'var(--muted)' }}>{order.course.title}</div>
                  <div style={{ fontSize: '12px', color: 'var(--muted)', marginTop: '4px' }}>{order.customerEmail} • {new Date(order.createdAt).toLocaleDateString()}</div>
                  <span style={{ display: 'inline-block', marginTop: '6px', padding: '2px 8px', background: order.status === 'PENDING' ? '#fff3cd' : '#d4edda', color: order.status === 'PENDING' ? '#856404' : '#155724', fontSize: '11px', borderRadius: '4px', fontWeight: 600 }}>
                    {order.status}
                  </span>
                </div>
              ))}
            </div>
          )}
          <Link href="/admin/orders" style={{ display: 'inline-block', marginTop: '16px', color: 'var(--accent)', fontSize: '13px' }}>View all enrollments →</Link>
        </div>

        <div style={{ background: 'white', padding: '24px', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
          <h2 style={{ fontSize: '18px', marginBottom: '20px' }}>Recent Service Requests</h2>
          {recentRequests.length === 0 ? (
            <p style={{ color: 'var(--muted)', fontSize: '14px' }}>No service requests yet.</p>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {recentRequests.map(req => (
                <div key={req.id} style={{ padding: '12px', background: '#f8f9fa', borderRadius: '6px', borderLeft: '3px solid var(--accent)' }}>
                  <div style={{ fontWeight: 600, fontSize: '14px' }}>{req.customerName}</div>
                  <div style={{ fontSize: '13px', color: 'var(--muted)' }}>{req.service.title}</div>
                  <div style={{ fontSize: '12px', color: 'var(--muted)', marginTop: '4px' }}>{req.customerEmail} • {new Date(req.createdAt).toLocaleDateString()}</div>
                  <span style={{ display: 'inline-block', marginTop: '6px', padding: '2px 8px', background: req.status === 'PENDING' ? '#fff3cd' : '#d4edda', color: req.status === 'PENDING' ? '#856404' : '#155724', fontSize: '11px', borderRadius: '4px', fontWeight: 600 }}>
                    {req.status}
                  </span>
                </div>
              ))}
            </div>
          )}
          <Link href="/admin/requests" style={{ display: 'inline-block', marginTop: '16px', color: 'var(--accent)', fontSize: '13px' }}>View all requests →</Link>
        </div>
      </div>
    </div>
  );
}
