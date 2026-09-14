"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function addService(formData: FormData) {
  await prisma.service.create({
    data: {
      title: formData.get("title") as string,
      category: formData.get("category") as string,
      description: formData.get("description") as string,
      imageUrl: (formData.get("imageUrl") as string) || null,
      content: (formData.get("content") as string) || null,
    },
  });
  revalidatePath("/admin/services");
  revalidatePath("/services");
  revalidatePath("/");
}

export async function updateService(formData: FormData) {
  const id = formData.get("id") as string;
  await prisma.service.update({
    where: { id },
    data: {
      title: formData.get("title") as string,
      category: formData.get("category") as string,
      description: formData.get("description") as string,
      imageUrl: (formData.get("imageUrl") as string) || null,
      content: (formData.get("content") as string) || null,
    },
  });
  revalidatePath("/admin/services");
  revalidatePath("/services");
  revalidatePath("/");
}

export async function toggleHideService(formData: FormData) {
  const id = formData.get("id") as string;
  const currentHidden = formData.get("hidden") === "true";
  await prisma.service.update({
    where: { id },
    data: {
      hidden: !currentHidden,
    },
  });
  revalidatePath("/admin/services");
  revalidatePath("/services");
  revalidatePath("/");
}
