import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import ClientScript from "@/components/ClientScript";

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
        <div className="topbar">
          <div className="container">
            <div className="topbar-links">
              <a href="tel:+256779868200">+256 779 868 200</a>
              <a href="mailto:oryemdavidmark64@gmail.com">oryemdavidmark64@gmail.com</a>
            </div>
            <div className="topbar-social">
              <a href="https://facebook.com" target="_blank" rel="noopener" aria-label="Facebook">Facebook</a>
              <a href="https://wa.me/256779868200" target="_blank" rel="noopener" aria-label="WhatsApp">WhatsApp</a>
            </div>
          </div>
        </div>

        <header className="site-header">
          <div className="container nav-wrap">
            <Link href="/" className="brand">
              <span className="brand-mark"><span>4M</span></span>
              <span>4 MAX SAFETY<small>Occupational Safety &middot; Health &middot; Environment</small></span>
            </Link>
            <nav className="main-nav">
              <ul>
                <li><Link href="/">Home</Link></li>
                <li>
                  <Link href="/about">About<i className="caret"></i></Link>
                  <div className="dropdown">
                    <Link href="/about#who">Who We Are</Link>
                    <Link href="/about#vision">Our Vision & Mission</Link>
                    <Link href="/about#team">Our Team</Link>
                    <Link href="/about#values">Our Core Values</Link>
                  </div>
                </li>
                <li>
                  <Link href="/services">Services<i className="caret"></i></Link>
                  <div className="dropdown">
                    <Link href="/services#risk">Risk Assessment & Audits</Link>
                    <Link href="/services#management">Management Systems & ISO</Link>
                    <Link href="/services#training">Training & Culture</Link>
                    <Link href="/services#investigation">Incident Investigation</Link>
                    <Link href="/services#ppe">PPE & Equipment Supply</Link>
                  </div>
                </li>
                <li>
                  <Link href="/courses">Courses<i className="caret"></i></Link>
                  <div className="dropdown">
                    <Link href="/courses#osh">OSH Training</Link>
                    <Link href="/courses#fire">Fire Safety & Emergency Response</Link>
                    <Link href="/courses#firstaid">First Aid & CPR</Link>
                    <Link href="/courses#ppe">Use of PPE</Link>
                    <Link href="/courses#audits">Safety Audits & Inspections</Link>
                  </div>
                </li>
                <li><Link href="/research">Research & Insights</Link></li>
                <li><Link href="/contact">Contact</Link></li>
              </ul>
            </nav>
            <div className="nav-cta">
              <Link href="/contact" className="btn btn-solid">Request A Quote</Link>
              <button className="nav-toggle" aria-label="Menu"><span></span><span></span><span></span></button>
            </div>
          </div>
        </header>

        <main>{children}</main>

        <footer className="site-footer">
          <div className="container">
            <div className="foot-grid">
              <div className="foot-brand">
                <Link href="/" className="brand"><span className="brand-mark"><span>4M</span></span><span>4 MAX SAFETY</span></Link>
                <p>Providing professional Occupational Safety, Health and Environment consultancy, training and certified safety equipment to organizations across Uganda.</p>
                <div className="foot-social">
                  <a href="https://facebook.com" target="_blank" rel="noopener">f</a>
                  <a href="https://wa.me/256779868200" target="_blank" rel="noopener">w</a>
                </div>
              </div>
              <div>
                <h5>Quick Links</h5>
                <ul>
                  <li><Link href="/about">About Us</Link></li>
                  <li><Link href="/services">Services</Link></li>
                  <li><Link href="/courses">Courses</Link></li>
                  <li><Link href="/research">Research & Insights</Link></li>
                  <li><Link href="/contact">Contact</Link></li>
                  <li><Link href="/admin">Admin Panel</Link></li>
                </ul>
              </div>
              <div>
                <h5>Our Services</h5>
                <ul>
                  <li><Link href="/services#risk">Risk Assessment & Audits</Link></li>
                  <li><Link href="/services#management">Management Systems & ISO</Link></li>
                  <li><Link href="/services#training">Training & Culture</Link></li>
                  <li><Link href="/services#ppe">PPE & Equipment Supply</Link></li>
                </ul>
              </div>
              <div>
                <h5>Contact</h5>
                <div className="contact-line">&#9742; <a href="tel:+256779868200">+256 779 868 200</a></div>
                <div className="contact-line">&#9993; <a href="mailto:oryemdavidmark64@gmail.com">oryemdavidmark64@gmail.com</a></div>
                <div className="contact-line">&#9670; WhatsApp: <a href="https://wa.me/256779868200">+256 779 868 200</a></div>
              </div>
            </div>
            <div className="foot-bottom">
              <span>&copy; 2026 4 Max Safety Company. All Rights Reserved.</span>
              <span>Kampala, Uganda</span>
            </div>
          </div>
          <div className="stripe-bar thin"></div>
        </footer>

        <a href="https://wa.me/256779868200" className="wa-float" target="_blank" rel="noopener" aria-label="Chat on WhatsApp">&#9743;</a>
        <ClientScript />
      </body>
    </html>
  );
}
