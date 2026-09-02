import 'dotenv/config';
import { PrismaClient } from '../src/generated/prisma/client';
import { PrismaBetterSqlite3 } from '@prisma/adapter-better-sqlite3';

const adapter = new PrismaBetterSqlite3({
  url: process.env.DATABASE_URL || 'file:./prisma/dev.db'
});

const prisma = new PrismaClient({ adapter });

async function main() {
  await prisma.course.create({
    data: {
      title: "Occupational Safety & Health (OSH) Training",
      category: "Foundational",
      description: "From training rationale to job safety analysis — a complete instructional programme for safety professionals.",
      syllabus: "Rationale for Safety and Health Training, Education and Training Requirements, etc.",
      price: 250,
    }
  });

  await prisma.course.create({
    data: {
      title: "Fire Safety & Emergency Response",
      category: "Emergency Response",
      description: "Fire suppression, emergency action planning, and Emergency Response Team roles and operations.",
      syllabus: "Fundamentals of Fire and Hazard Awareness, Fire Suppression, etc.",
      price: 150,
    }
  });

  await prisma.service.create({
    data: {
      title: "Risk Assessment & Workplace Safety Audits",
      category: "Audits",
      description: "Detailed evaluations, hazard identification and control using a structured 5-step risk methodology, plus ergonomic and equipment assessments.",
    }
  });

  await prisma.service.create({
    data: {
      title: "Management Systems, ISO & Legal Compliance",
      category: "Consultancy",
      description: "Regulatory and legal compliance guidance, ISO 9001 / 14001 / 45001 management systems, ESIA, and secure HSSE data management.",
    }
  });

  console.log("Database seeded successfully.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
