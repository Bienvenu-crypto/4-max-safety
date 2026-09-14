import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import ClientScript from "@/components/ClientScript";
import SiteShell from "@/components/SiteShell";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "4 Max Safety | Occupational Safety, Health & Environment Consultants, Uganda",
  description: "4 Max Safety provides professional Occupational Safety, Health and Environment (OSH) consultancy, auditing, training and PPE supply for organizations across Uganda.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <SiteShell>{children}</SiteShell>
        <ClientScript />
      </body>
    </html>
  );
}
