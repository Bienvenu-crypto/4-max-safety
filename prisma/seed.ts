import 'dotenv/config';
import { PrismaClient } from '../src/generated/prisma/client';
import { PrismaBetterSqlite3 } from '@prisma/adapter-better-sqlite3';

const adapter = new PrismaBetterSqlite3({
  url: process.env.DATABASE_URL || 'file:./dev.db'
});

const prisma = new PrismaClient({ adapter });

async function main() {
  // Clear existing to avoid duplicates on re-seed
  await prisma.order.deleteMany({});
  await prisma.serviceRequest.deleteMany({});
  await prisma.course.deleteMany({});
  await prisma.service.deleteMany({});

  // Seed Services
  await prisma.service.create({
    data: {
      title: "Risk Assessment & Workplace Safety Audits",
      category: "Auditing",
      description: "Detailed evaluations, hazard identification and control using a structured 5-step risk methodology.",
      imageUrl: "https://images.pexels.com/photos/9301291/pexels-photo-9301291.jpeg?auto=compress&cs=tinysrgb&w=800",
      content: `Safety Audits & Inspections: Detailed evaluations of facilities to identify existing and potential hazards, highlight areas of excellence, and outline actionable paths for continuous safety improvement.\nWorkplace Risk Assessment: Hazard identification and control using a structured 5-step risk methodology and human factors optimization.\nErgonomic & Health Risk Assessments: Evaluation of workstations and work activities to prevent musculoskeletal injuries, control chemical or physical hazards, and advance occupational hygiene standards.\nEquipment Assessments: Regular inspections compliant with the OSH Act 2006 to detect deterioration early and ensure safe machinery operation.`,
    }
  });

  await prisma.service.create({
    data: {
      title: "Management Systems, ISO & Legal Compliance",
      category: "Compliance",
      description: "Regulatory and legal compliance guidance, ISO 9001 / 14001 / 45001 management systems, ESIA, and secure HSSE data management.",
      imageUrl: "https://images.pexels.com/photos/8159/construction-site-build-construction-work.jpg?auto=compress&cs=tinysrgb&w=800",
      content: `Regulatory & Legal Compliance: Expert guidance ensuring alignment with national legislation (such as Uganda's OSH Act 2006) alongside international benchmarks (like OSHA standards).\nISO Management Systems (ISO 9001, 14001, 45001): End-to-end design, implementation, and auditing of Quality, Environmental, and Occupational Health & Safety management systems.\nEnvironmental & Social Impact (ESIA): NEMA- and IFC-compliant environmental assessments, Resettlement Action Plans (RAP), and annual social audits.\nHSSE Data Management: Secure, accessible online record-keeping systems providing reliable safety metrics and analytics.`,
    }
  });

  await prisma.service.create({
    data: {
      title: "Training, Competence & Culture Development",
      category: "Training",
      description: "Custom OSH programs, HSSE training and education, and targeted training needs assessments.",
      imageUrl: "https://images.pexels.com/photos/18340568/pexels-photo-18340568.jpeg?auto=compress&cs=tinysrgb&w=800",
      content: `Custom OSH Programs: Strategic safety programs built around your organization's unique operational nuances and industry challenges.\nHSSE Training & Education: Engaging workplace safety programs covering hazard awareness, safe work practices, and emergency procedures tailored to employees at all organizational levels.\nTraining Needs Assessment: Targeted evaluations to ensure competency in equipment safety, high-risk work environments, and hazard control.`,
    }
  });

  await prisma.service.create({
    data: {
      title: "Incident Investigation & Post-Accident Support",
      category: "Support",
      description: "Thorough investigations of workplace incidents and near-misses to fulfill legal requirements, identify root causes, and prevent recurrence.",
      imageUrl: "https://images.pexels.com/photos/9301291/pexels-photo-9301291.jpeg?auto=compress&cs=tinysrgb&w=800",
      content: `Root Cause Analysis: Thorough investigations of workplace incidents and near-misses to fulfill legal requirements, identify root causes, and prevent recurrence.\nPost-Accident Support: Assistance in dealing with the aftermath of workplace incidents to ensure proper documentation and process improvement.`,
    }
  });

  // Seed Courses
  await prisma.course.create({
    data: {
      title: "Safety Audits and Inspections",
      category: "Audits",
      description: "Introduction to workplace safety evaluation and safety auditing framework.",
      price: 200,
      imageUrl: "https://images.pexels.com/photos/8159/construction-site-build-construction-work.jpg?auto=compress&cs=tinysrgb&w=800",
      content: `I. Introduction to workplace safety Evaluation\nII. Workplace safety inspection\nIII. Safety auditing framework\nIV. Risk assessment and corrective action plans\nV. Reporting, flow-up and continuous improvement\nVI. Assessment and practical application`,
      syllabus: "I. Introduction to workplace safety Evaluation\nII. Workplace safety inspection\nIII. Safety auditing framework\nIV. Risk assessment and corrective action plans\nV. Reporting, flow-up and continuous improvement\nVI. Assessment and practical application"
    }
  });

  await prisma.course.create({
    data: {
      title: "Incident Investigation",
      category: "Safety",
      description: "Foundation and immediate response, root cause analysis methodologies.",
      price: 180,
      imageUrl: "https://images.pexels.com/photos/18340568/pexels-photo-18340568.jpeg?auto=compress&cs=tinysrgb&w=800",
      content: `I. Foundation and immediate response\nII. Data and Evidence collection\nIII. Root cause analysis methodologies\nIV. Corrective action and implementation\nV. Reporting, Communication and Review`,
      syllabus: "I. Foundation and immediate response\nII. Data and Evidence collection\nIII. Root cause analysis methodologies\nIV. Corrective action and implementation\nV. Reporting, Communication and Review"
    }
  });

  await prisma.course.create({
    data: {
      title: "Management of health and safety",
      category: "Management",
      description: "ISOH Management Safety, OSHA and CCOH Health and Safety.",
      price: 300,
      imageUrl: "https://images.pexels.com/photos/9301291/pexels-photo-9301291.jpeg?auto=compress&cs=tinysrgb&w=800",
      content: `I. ISOH Management Safety\nII. NEBOSH international General Certificate (IGC) Management of Health and Safety focus\nIII. OSHA/ Safety and Health Management Systems\nIV. CCOH Health and Safety for Managers and Supervisors\nV. Ethics and Safety\nVI. Hazard Analysis/Prevention and Safety Management`,
      syllabus: "I. ISOH Management Safety\nII. NEBOSH international General Certificate (IGC) Management of Health and Safety focus\nIII. OSHA/ Safety and Health Management Systems\nIV. CCOH Health and Safety for Managers and Supervisors\nV. Ethics and Safety\nVI. Hazard Analysis/Prevention and Safety Management"
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
