"use client";

import React, { useState } from "react";
import Link from "next/link";
import { loginAdminAction, logoutAdminAction } from "./authActions";

interface AdminAuthGuardProps {
  initialAuthenticated: boolean;
  children: React.ReactNode;
}

export default function AdminAuthGuard({ initialAuthenticated, children }: AdminAuthGuardProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(initialAuthenticated);
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const result = await loginAdminAction(password);
    setLoading(false);

    if (result.success) {
      setIsAuthenticated(true);
      setPassword("");
    } else {
      setError(result.error || "Invalid password");
    }
  };

  const handleLogout = async () => {
    await logoutAdminAction();
    setIsAuthenticated(false);
  };

  if (!isAuthenticated) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0F172A 0%, #1E293B 100%)",
          padding: "20px",
          fontFamily: "inherit",
        }}
      >
        <div
          style={{
            background: "rgba(255, 255, 255, 0.98)",
            borderRadius: "16px",
            padding: "40px 36px",
            width: "100%",
            maxWidth: "420px",
            boxShadow: "0 20px 50px rgba(0,0,0,0.3)",
            textAlign: "center",
          }}
        >
          <div
            style={{
              width: "60px",
              height: "60px",
              background: "#0284c7",
              color: "white",
              fontWeight: 800,
              fontSize: "22px",
              borderRadius: "14px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 18px",
              boxShadow: "0 4px 14px rgba(2, 132, 199, 0.4)",
            }}
          >
            4M
          </div>
          <h1 style={{ fontSize: "22px", fontWeight: 700, margin: "0 0 6px", color: "#0F172A" }}>
            Admin Portal Access
          </h1>
          <p style={{ fontSize: "14px", color: "#64748B", margin: "0 0 28px" }}>
            Enter your admin password to manage 4 Max Safety services & courses.
          </p>

          {error && (
            <div
              style={{
                background: "#FEF2F2",
                border: "1px solid #FCA5A5",
                color: "#991B1B",
                padding: "10px 14px",
                borderRadius: "8px",
                fontSize: "13px",
                marginBottom: "20px",
                fontWeight: 600,
              }}
            >
              ⚠️ {error}
            </div>
          )}

          <form onSubmit={handleLogin} autoComplete="off" style={{ display: "grid", gap: "18px", textAlign: "left" }}>
            <div>
              <label style={{ display: "block", fontSize: "12px", fontWeight: 700, textTransform: "uppercase", color: "#475569", marginBottom: "6px" }}>
                Admin Password
              </label>
              <input
                type="password"
                name="admin_sec_pwd"
                id="admin_sec_pwd"
                autoComplete="new-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                style={{
                  width: "100%",
                  padding: "12px 16px",
                  borderRadius: "8px",
                  border: "1px solid #CBD5E1",
                  fontSize: "15px",
                  outline: "none",
                  boxSizing: "border-box",
                }}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              style={{
                padding: "13px",
                background: "#0284c7",
                color: "white",
                border: "none",
                borderRadius: "8px",
                fontSize: "15px",
                fontWeight: 700,
                cursor: loading ? "not-allowed" : "pointer",
                transition: "all 0.2s",
                boxShadow: "0 4px 12px rgba(2, 132, 199, 0.3)",
              }}
            >
              {loading ? "Authenticating..." : "Sign In to Admin"}
            </button>
          </form>

          <div style={{ marginTop: "24px", paddingTop: "20px", borderTop: "1px solid #F1F5F9" }}>
            <button
              type="button"
              onClick={() => {
                window.location.href = "/";
              }}
              style={{
                background: "#F1F5F9",
                border: "1px solid #CBD5E1",
                color: "#334155",
                fontSize: "14px",
                fontWeight: 600,
                cursor: "pointer",
                padding: "10px 18px",
                borderRadius: "8px",
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                width: "100%",
                justifyContent: "center",
                transition: "all 0.2s",
              }}
            >
              ← Return to Main Website
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#f8f9fa" }}>
      {/* Admin Sidebar */}
      <aside
        style={{
          width: "250px",
          background: "var(--ink, #0F172A)",
          color: "white",
          padding: "24px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div>
          <div style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "40px", color: "var(--amber, #f59e0b)" }}>
            4M Admin
          </div>
          <nav style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
            <Link
              href="/admin"
              style={{ color: "white", opacity: 0.85, textDecoration: "none", padding: "10px 14px", borderRadius: "6px", fontSize: "14px" }}
            >
              Dashboard
            </Link>
            <div style={{ fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.08em", color: "rgba(255,255,255,0.4)", padding: "16px 14px 6px", marginTop: "8px" }}>
              Content
            </div>
            <Link
              href="/admin/services"
              style={{ color: "white", opacity: 0.85, textDecoration: "none", padding: "10px 14px", borderRadius: "6px", fontSize: "14px" }}
            >
              Manage Services
            </Link>
            <Link
              href="/admin/courses"
              style={{ color: "white", opacity: 0.85, textDecoration: "none", padding: "10px 14px", borderRadius: "6px", fontSize: "14px" }}
            >
              Manage Courses
            </Link>
            <div style={{ fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.08em", color: "rgba(255,255,255,0.4)", padding: "16px 14px 6px", marginTop: "8px" }}>
              Submissions
            </div>
            <Link
              href="/admin/orders"
              style={{ color: "white", opacity: 0.85, textDecoration: "none", padding: "10px 14px", borderRadius: "6px", fontSize: "14px" }}
            >
              Course Enrollments
            </Link>
            <Link
              href="/admin/requests"
              style={{ color: "white", opacity: 0.85, textDecoration: "none", padding: "10px 14px", borderRadius: "6px", fontSize: "14px" }}
            >
              Service Requests
            </Link>
          </nav>
        </div>

        <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "16px", display: "grid", gap: "8px" }}>
          <button
            type="button"
            onClick={async () => {
              await handleLogout();
              window.location.href = "/";
            }}
            style={{
              width: "100%",
              padding: "10px 14px",
              background: "#ef4444",
              color: "white",
              border: "none",
              borderRadius: "6px",
              fontSize: "13px",
              fontWeight: 600,
              cursor: "pointer",
              textAlign: "left",
            }}
          >
            🔒 Sign Out & Exit
          </button>
          <button
            type="button"
            onClick={async () => {
              await handleLogout();
              window.location.href = "/";
            }}
            style={{
              width: "100%",
              background: "transparent",
              color: "rgba(255,255,255,0.7)",
              border: "none",
              padding: "8px 14px",
              borderRadius: "6px",
              fontSize: "13px",
              cursor: "pointer",
              textAlign: "left",
            }}
          >
            ← Return to Main Website
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main style={{ flex: 1, padding: "40px", overflowY: "auto" }}>{children}</main>
    </div>
  );
}
