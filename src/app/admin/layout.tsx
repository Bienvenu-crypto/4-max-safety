import React from "react";
import AdminAuthGuard from "./AdminAuthGuard";
import { checkAdminAuth } from "./authActions";

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const isAuth = await checkAdminAuth();

  return (
    <AdminAuthGuard initialAuthenticated={isAuth}>
      {children}
    </AdminAuthGuard>
  );
}
