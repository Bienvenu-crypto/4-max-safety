import { prisma } from "@/lib/prisma";
import CourseManager from "./CourseManager";

export default async function AdminCoursesPage() {
  const courses = await prisma.course.findMany({
    orderBy: { title: 'asc' },
  });

  return <CourseManager initialCourses={courses} />;
}
