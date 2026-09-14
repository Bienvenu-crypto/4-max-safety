"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function addCourse(formData: FormData) {
  await prisma.course.create({
    data: {
      title: formData.get("title") as string,
      category: formData.get("category") as string,
      description: formData.get("description") as string,
      syllabus: (formData.get("syllabus") as string) || "See details",
      price: formData.get("price") ? parseFloat(formData.get("price") as string) : null,
      imageUrl: (formData.get("imageUrl") as string) || null,
      content: (formData.get("content") as string) || null,
    },
  });
  revalidatePath("/admin/courses");
  revalidatePath("/courses");
  revalidatePath("/");
}

export async function updateCourse(formData: FormData) {
  const id = formData.get("id") as string;
  await prisma.course.update({
    where: { id },
    data: {
      title: formData.get("title") as string,
      category: formData.get("category") as string,
      description: formData.get("description") as string,
      syllabus: (formData.get("syllabus") as string) || "See details",
      price: formData.get("price") ? parseFloat(formData.get("price") as string) : null,
      imageUrl: (formData.get("imageUrl") as string) || null,
      content: (formData.get("content") as string) || null,
    },
  });
  revalidatePath("/admin/courses");
  revalidatePath("/courses");
  revalidatePath("/");
}

export async function toggleHideCourse(formData: FormData) {
  const id = formData.get("id") as string;
  const currentHidden = formData.get("hidden") === "true";
  await prisma.course.update({
    where: { id },
    data: {
      hidden: !currentHidden,
    },
  });
  revalidatePath("/admin/courses");
  revalidatePath("/courses");
  revalidatePath("/");
}
