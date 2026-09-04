import Link from "next/link";
import React from "react";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#f8f9fa' }}>
      {/* Sidebar */}
      <aside style={{ width: '250px', background: 'var(--ink)', color: 'white', padding: '24px' }}>
        <div style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '40px', color: 'var(--amber)' }}>
          4M Admin
        </div>
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <Link href="/admin" style={{ color: 'white', opacity: 0.85, textDecoration: 'none', padding: '10px 14px', borderRadius: '6px', fontSize: '14px' }}>📊 Dashboard</Link>
          <div style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'rgba(255,255,255,0.4)', padding: '16px 14px 6px', marginTop: '8px' }}>Content</div>
          <Link href="/admin/services" style={{ color: 'white', opacity: 0.85, textDecoration: 'none', padding: '10px 14px', borderRadius: '6px', fontSize: '14px' }}>🛠 Manage Services</Link>
          <Link href="/admin/courses" style={{ color: 'white', opacity: 0.85, textDecoration: 'none', padding: '10px 14px', borderRadius: '6px', fontSize: '14px' }}>📚 Manage Courses</Link>
          <div style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'rgba(255,255,255,0.4)', padding: '16px 14px 6px', marginTop: '8px' }}>Submissions</div>
          <Link href="/admin/orders" style={{ color: 'white', opacity: 0.85, textDecoration: 'none', padding: '10px 14px', borderRadius: '6px', fontSize: '14px' }}>🎓 Course Enrollments</Link>
          <Link href="/admin/requests" style={{ color: 'white', opacity: 0.85, textDecoration: 'none', padding: '10px 14px', borderRadius: '6px', fontSize: '14px' }}>📋 Service Requests</Link>
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', marginTop: '24px', paddingTop: '16px' }}>
            <Link href="/" style={{ color: 'white', opacity: 0.6, textDecoration: 'none', padding: '10px 14px', borderRadius: '6px', fontSize: '13px', display: 'block' }}>← Back to Site</Link>
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <main style={{ flex: 1, padding: '40px', overflowY: 'auto' }}>
        {children}
      </main>
    </div>
  );
}
