"use server";

import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

export async function createOrder(formData: FormData) {
  const courseId = formData.get("courseId") as string;
  const customerName = formData.get("customerName") as string;
  const customerEmail = formData.get("customerEmail") as string;
  const customerPhone = formData.get("customerPhone") as string;

  await prisma.order.create({
    data: {
      courseId,
      customerName,
      customerEmail,
      customerPhone,
    },
  });

  redirect("/courses?success=true");
}

export async function createServiceRequest(formData: FormData) {
  const serviceId = formData.get("serviceId") as string;
  const customerName = formData.get("customerName") as string;
  const customerEmail = formData.get("customerEmail") as string;
  const customerPhone = formData.get("customerPhone") as string;
  const details = formData.get("details") as string;

  await prisma.serviceRequest.create({
    data: {
      serviceId,
      customerName,
      customerEmail,
      customerPhone,
      details,
    },
  });

  redirect("/services?success=true");
}
