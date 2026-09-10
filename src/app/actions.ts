"use server";

import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import { sendMail } from "@/lib/mailer";



export async function createOrder(formData: FormData) {
  const courseId = formData.get("courseId") as string;
  const customerName = formData.get("customerName") as string;
  const customerEmail = formData.get("customerEmail") as string;
  const customerPhone = formData.get("customerPhone") as string;
  const organisation = formData.get("organisation") as string;


  const course = await prisma.course.findUnique({ where: { id: courseId } });

  await prisma.order.create({
    data: {
      courseId,
      customerName,
      customerEmail,
      customerPhone,
    },
  });


  await sendMail({
    subject: `New Course Enrollment: ${course?.title ?? "Unknown Course"}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #eee; border-radius: 8px; overflow: hidden;">
        <div style="background: #E15B0F; padding: 24px 32px;">
          <h2 style="color: white; margin: 0; font-size: 20px;">New Course Enrollment</h2>
          <p style="color: rgba(255,255,255,0.85); margin: 4px 0 0; font-size: 14px;">4 Max Safety — Enrollment Notification</p>
        </div>
        <div style="padding: 32px;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #666; font-size: 13px; width: 140px;">Course</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; font-weight: 600;">${course?.title ?? courseId}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #666; font-size: 13px;">Category</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;">${course?.category ?? "—"}</td>
            </tr>
            ${course?.price ? `
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #666; font-size: 13px;">Price</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; font-weight: 600; color: #E15B0F;">$${course.price} per person</td>
            </tr>` : ""}
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #666; font-size: 13px;">Full Name</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;">${customerName}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #666; font-size: 13px;">Email</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;"><a href="mailto:${customerEmail}" style="color: #E15B0F;">${customerEmail}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #666; font-size: 13px;">Phone</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;">${customerPhone}</td>
            </tr>
            ${organisation ? `
            <tr>
              <td style="padding: 10px 0; color: #666; font-size: 13px;">Organisation</td>
              <td style="padding: 10px 0;">${organisation}</td>
            </tr>` : ""}
          </table>
          <div style="margin-top: 24px; padding: 16px; background: #fff8f5; border-radius: 6px; border-left: 4px solid #E15B0F;">
            <p style="margin: 0; font-size: 13px; color: #666;">Please follow up with the student within 24 hours with payment details and schedule information.</p>
          </div>
        </div>
      </div>
    `,
  });


  await sendMail({
    to: customerEmail,
    subject: `Enrollment Confirmed: ${course?.title ?? "Course"}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #eee; border-radius: 8px; overflow: hidden;">
        <div style="background: #E15B0F; padding: 24px 32px;">
          <h2 style="color: white; margin: 0; font-size: 20px;">Enrollment Received! ✓</h2>
          <p style="color: rgba(255,255,255,0.85); margin: 4px 0 0; font-size: 14px;">4 Max Safety — Training & Certification</p>
        </div>
        <div style="padding: 32px;">
          <p style="font-size: 16px; color: #333;">Dear <strong>${customerName}</strong>,</p>
          <p style="color: #555; line-height: 1.7;">Thank you for enrolling in <strong>${course?.title ?? "our course"}</strong>. We have received your registration and our team will contact you within <strong>24 hours</strong> with payment details and schedule information.</p>
          <div style="margin: 28px 0; padding: 20px 24px; background: #f8fdf8; border-radius: 8px; border: 1px solid #d4edda;">
            <p style="margin: 0 0 8px; font-size: 13px; font-weight: 700; color: #155724;">What happens next?</p>
            <p style="margin: 0; font-size: 13px; color: #155724; line-height: 1.7;">
              ✓ Our team reviews your enrollment<br>
              ✓ We send you payment instructions (within 24 hrs)<br>
              ✓ Your spot is confirmed upon payment<br>
              ✓ Certificate awarded upon course completion
            </p>
          </div>
          <p style="color: #555; font-size: 14px;">If you have any questions, feel free to reach us on WhatsApp: <a href="https://wa.me/256779868200" style="color: #E15B0F;">+256 779 868 200</a></p>
          <p style="color: #999; font-size: 13px; margin-top: 32px;">— The 4 Max Safety Team<br>Kampala, Uganda</p>
        </div>
      </div>
    `,
  });

  redirect("/courses?success=true");
}



export async function createServiceRequest(formData: FormData) {
  const serviceId = formData.get("serviceId") as string;
  const customerName = formData.get("customerName") as string;
  const customerEmail = formData.get("customerEmail") as string;
  const customerPhone = formData.get("customerPhone") as string;
  const organisation = formData.get("organisation") as string;
  const details = formData.get("details") as string;

  const service = await prisma.service.findUnique({ where: { id: serviceId } });

  await prisma.serviceRequest.create({
    data: {
      serviceId,
      customerName,
      customerEmail,
      customerPhone,
      details,
    },
  });


  await sendMail({
    subject: `New Service Request: ${service?.title ?? "Unknown Service"}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #eee; border-radius: 8px; overflow: hidden;">
        <div style="background: #1C3140; padding: 24px 32px;">
          <h2 style="color: white; margin: 0; font-size: 20px;">New Service Request</h2>
          <p style="color: rgba(255,255,255,0.85); margin: 4px 0 0; font-size: 14px;">4 Max Safety — Consultancy Request</p>
        </div>
        <div style="padding: 32px;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #666; font-size: 13px; width: 140px;">Service</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; font-weight: 600;">${service?.title ?? serviceId}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #666; font-size: 13px;">Category</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;">${service?.category ?? "—"}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #666; font-size: 13px;">Full Name</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;">${customerName}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #666; font-size: 13px;">Organisation</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;">${organisation || "—"}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #666; font-size: 13px;">Email</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;"><a href="mailto:${customerEmail}" style="color: #E15B0F;">${customerEmail}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #666; font-size: 13px;">Phone</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;">${customerPhone}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #666; font-size: 13px; vertical-align: top;">Details</td>
              <td style="padding: 10px 0; line-height: 1.6;">${details.replace(/\n/g, "<br>")}</td>
            </tr>
          </table>
          <div style="margin-top: 24px; padding: 16px; background: #f5f8ff; border-radius: 6px; border-left: 4px solid #1C3140;">
            <p style="margin: 0; font-size: 13px; color: #666;">Please follow up with the client within 24 hours to schedule a consultation.</p>
          </div>
        </div>
      </div>
    `,
  });


  await sendMail({
    to: customerEmail,
    subject: `Request Received: ${service?.title ?? "Safety Consultancy"}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #eee; border-radius: 8px; overflow: hidden;">
        <div style="background: #1C3140; padding: 24px 32px;">
          <h2 style="color: white; margin: 0; font-size: 20px;">Request Received! ✓</h2>
          <p style="color: rgba(255,255,255,0.85); margin: 4px 0 0; font-size: 14px;">4 Max Safety — Professional Consultancy</p>
        </div>
        <div style="padding: 32px;">
          <p style="font-size: 16px; color: #333;">Dear <strong>${customerName}</strong>,</p>
          <p style="color: #555; line-height: 1.7;">Thank you for requesting our <strong>${service?.title ?? "consultancy service"}</strong>. One of our specialist consultants will review your request and contact you within <strong>24 hours</strong> to schedule a consultation tailored to your organisation's needs.</p>
          <div style="margin: 28px 0; padding: 20px 24px; background: #f8fdf8; border-radius: 8px; border: 1px solid #d4edda;">
            <p style="margin: 0 0 8px; font-size: 13px; font-weight: 700; color: #155724;">What happens next?</p>
            <p style="margin: 0; font-size: 13px; color: #155724; line-height: 1.7;">
              ✓ Our consultants review your requirements<br>
              ✓ We contact you within 24 hrs to schedule a consultation<br>
              ✓ Free initial consultation at no obligation<br>
              ✓ Fully compliant, OSH Act 2006 delivery
            </p>
          </div>
          <p style="color: #555; font-size: 14px;">Need urgent assistance? WhatsApp us directly: <a href="https://wa.me/256779868200" style="color: #E15B0F;">+256 779 868 200</a></p>
          <p style="color: #999; font-size: 13px; margin-top: 32px;">— The 4 Max Safety Team<br>Kampala, Uganda</p>
        </div>
      </div>
    `,
  });

  redirect("/services?success=true");
}



export async function submitContact(formData: FormData) {
  const name = formData.get("name") as string;
  const organisation = formData.get("organisation") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string;
  const service = formData.get("service") as string;
  const message = formData.get("message") as string;


  await sendMail({
    subject: `New Contact Message from ${name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #eee; border-radius: 8px; overflow: hidden;">
        <div style="background: #F5A623; padding: 24px 32px;">
          <h2 style="color: white; margin: 0; font-size: 20px;">New Contact Message</h2>
          <p style="color: rgba(255,255,255,0.9); margin: 4px 0 0; font-size: 14px;">4 Max Safety — Contact Form</p>
        </div>
        <div style="padding: 32px;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #666; font-size: 13px; width: 140px;">Full Name</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; font-weight: 600;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #666; font-size: 13px;">Organisation</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;">${organisation || "—"}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #666; font-size: 13px;">Email</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;"><a href="mailto:${email}" style="color: #E15B0F;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #666; font-size: 13px;">Phone</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;">${phone || "—"}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #666; font-size: 13px;">Service Interest</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;">${service}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #666; font-size: 13px; vertical-align: top;">Message</td>
              <td style="padding: 10px 0; line-height: 1.7;">${message.replace(/\n/g, "<br>")}</td>
            </tr>
          </table>
          <div style="margin-top: 24px; padding: 16px; background: #fffbf0; border-radius: 6px; border-left: 4px solid #F5A623;">
            <p style="margin: 0; font-size: 13px; color: #666;">Please reply to this enquiry within one business day.</p>
          </div>
        </div>
      </div>
    `,
  });


  await sendMail({
    to: email,
    subject: `We've received your message — 4 Max Safety`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #eee; border-radius: 8px; overflow: hidden;">
        <div style="background: #E15B0F; padding: 24px 32px;">
          <h2 style="color: white; margin: 0; font-size: 20px;">Message Received! ✓</h2>
          <p style="color: rgba(255,255,255,0.85); margin: 4px 0 0; font-size: 14px;">4 Max Safety — Occupational Safety · Health · Environment</p>
        </div>
        <div style="padding: 32px;">
          <p style="font-size: 16px; color: #333;">Dear <strong>${name}</strong>,</p>
          <p style="color: #555; line-height: 1.7;">Thank you for reaching out to 4 Max Safety. We have received your message regarding <strong>${service}</strong> and our team will respond within <strong>one business day</strong>.</p>
          <div style="margin: 28px 0; padding: 20px 24px; background: #f8f9ff; border-radius: 8px; border: 1px solid #dde3ff;">
            <p style="margin: 0 0 6px; font-size: 13px; font-weight: 700; color: #1C3140;">Need faster support?</p>
            <p style="margin: 0; font-size: 13px; color: #555; line-height: 1.7;">
              📱 WhatsApp: <a href="https://wa.me/256779868200" style="color: #E15B0F;">+256 779 868 200</a><br>
              📞 Phone: <a href="tel:+256779868200" style="color: #E15B0F;">+256 779 868 200</a>
            </p>
          </div>
          <p style="color: #999; font-size: 13px; margin-top: 32px;">— The 4 Max Safety Team<br>Kampala, Uganda</p>
        </div>
      </div>
    `,
  });

  redirect("/contact?success=true");
}
