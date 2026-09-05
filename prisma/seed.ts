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

  // ─────────────────────────────────────────────────────────────────────────
  // CATEGORY 1: Risk Assessment & Workplace Safety Audits
  // ─────────────────────────────────────────────────────────────────────────
  await prisma.service.createMany({
    data: [
      {
        title: "Safety Audits & Inspections",
        category: "Risk Assessment & Workplace Safety Audits",
        description: "Detailed evaluations of facilities to identify existing and potential hazards, highlight areas of excellence, and outline actionable paths for continuous safety improvement.",
        imageUrl: "https://images.pexels.com/photos/9301291/pexels-photo-9301291.jpeg?auto=compress&cs=tinysrgb&w=800",
        content: "Comprehensive facility walkthroughs to identify hazards\nDocumented findings with clear corrective action plans\nHighlight areas of excellence and improvement opportunities\nOSH Act 2006 compliant audit reports\nFollow-up inspections to verify corrective actions taken",
      },
      {
        title: "Workplace Risk Assessment",
        category: "Risk Assessment & Workplace Safety Audits",
        description: "Hazard identification and control using a structured 5-step risk methodology and human factors optimization.",
        imageUrl: "https://images.pexels.com/photos/8159/construction-site-build-construction-work.jpg?auto=compress&cs=tinysrgb&w=800",
        content: "5-step structured risk methodology\nHazard identification and severity evaluation\nHuman factors and behavioural safety analysis\nControl measures: eliminate, substitute, engineer, administer, PPE\nRisk registers and monitoring plans",
      },
      {
        title: "Ergonomic & Health Risk Assessments",
        category: "Risk Assessment & Workplace Safety Audits",
        description: "Evaluation of workstations and work activities to prevent musculoskeletal injuries, control chemical or physical hazards, and advance occupational hygiene standards.",
        imageUrl: "https://images.pexels.com/photos/9301291/pexels-photo-9301291.jpeg?auto=compress&cs=tinysrgb&w=800",
        content: "Workstation and posture analysis\nMusculoskeletal disorder prevention recommendations\nChemical and physical hazard exposure monitoring\nOccupational hygiene standards compliance\nPersonalised ergonomic improvement reports",
      },
      {
        title: "Equipment Assessments",
        category: "Risk Assessment & Workplace Safety Audits",
        description: "Regular inspections compliant with the OSH Act 2006 to detect deterioration early and ensure safe machinery operation.",
        imageUrl: "https://images.pexels.com/photos/8159/construction-site-build-construction-work.jpg?auto=compress&cs=tinysrgb&w=800",
        content: "Machinery and equipment inspection schedules\nOSH Act 2006 compliance checks\nEarly deterioration detection and reporting\nMaintenance recommendation plans\nSafe operation certification and documentation",
      },
    ]
  });

  // ─────────────────────────────────────────────────────────────────────────
  // CATEGORY 2: Management Systems, ISO & Legal Compliance
  // ─────────────────────────────────────────────────────────────────────────
  await prisma.service.createMany({
    data: [
      {
        title: "Regulatory & Legal Compliance",
        category: "Management Systems, ISO & Legal Compliance",
        description: "Expert guidance ensuring alignment with national legislation (Uganda's OSH Act 2006) alongside international benchmarks like OSHA standards.",
        imageUrl: "https://images.pexels.com/photos/9301291/pexels-photo-9301291.jpeg?auto=compress&cs=tinysrgb&w=800",
        content: "Gap analysis against OSH Act 2006 requirements\nOSHA and international standards alignment\nLegal compliance calendars and obligation registers\nRegulatory change monitoring and updates\nCompetent authority liaison and reporting support",
      },
      {
        title: "ISO Management Systems (ISO 9001, 14001, 45001)",
        category: "Management Systems, ISO & Legal Compliance",
        description: "End-to-end design, implementation, and auditing of Quality, Environmental, and Occupational Health & Safety management systems.",
        imageUrl: "https://images.pexels.com/photos/8159/construction-site-build-construction-work.jpg?auto=compress&cs=tinysrgb&w=800",
        content: "ISO 9001 Quality Management System design and implementation\nISO 14001 Environmental Management System\nISO 45001 Occupational Health & Safety Management System\nInternal and external audit preparation\nCertification pathway support",
      },
      {
        title: "Environmental & Social Impact Assessment (ESIA)",
        category: "Management Systems, ISO & Legal Compliance",
        description: "NEMA and IFC-compliant environmental assessments, Resettlement Action Plans (RAP), and annual social audits.",
        imageUrl: "https://images.pexels.com/photos/9301291/pexels-photo-9301291.jpeg?auto=compress&cs=tinysrgb&w=800",
        content: "NEMA-compliant Environmental Impact Assessments\nIFC Performance Standards alignment\nResettlement Action Plans (RAP)\nAnnual environmental and social audits\nStakeholder engagement and reporting",
      },
      {
        title: "HSSE Data Management",
        category: "Management Systems, ISO & Legal Compliance",
        description: "Secure, accessible online record-keeping systems providing reliable safety metrics and analytics for informed decision-making.",
        imageUrl: "https://images.pexels.com/photos/8159/construction-site-build-construction-work.jpg?auto=compress&cs=tinysrgb&w=800",
        content: "Secure online OSH record-keeping system setup\nKPI dashboards and safety performance metrics\nAccident, near-miss and incident tracking\nRegulatory reporting data management\nCost-effective, accessible analytics",
      },
      {
        title: "Management System Audits",
        category: "Management Systems, ISO & Legal Compliance",
        description: "ISO compliance audits and continuous improvement programmes for quality, environment and safety management systems.",
        imageUrl: "https://images.pexels.com/photos/9301291/pexels-photo-9301291.jpeg?auto=compress&cs=tinysrgb&w=800",
        content: "ISO 9001, 14001 and 45001 system audits\nGap analysis and corrective action plans\nContinual improvement framework implementation\nManagement review facilitation\nCertification readiness assessments",
      },
    ]
  });

  // ─────────────────────────────────────────────────────────────────────────
  // CATEGORY 3: Training, Competence & Culture Development
  // ─────────────────────────────────────────────────────────────────────────
  await prisma.service.createMany({
    data: [
      {
        title: "Custom OSH Programs",
        category: "Training, Competence & Culture Development",
        description: "Strategic safety programs built around your organisation's unique operational nuances and industry-specific challenges.",
        imageUrl: "https://images.pexels.com/photos/18340568/pexels-photo-18340568.jpeg?auto=compress&cs=tinysrgb&w=800",
        content: "Industry-specific OSH programme design\nCustom safety policy and procedure development\nSafety culture assessment and transformation planning\nLeadership safety engagement programmes\nOngoing programme review and adaptation",
      },
      {
        title: "HSSE Training & Education",
        category: "Training, Competence & Culture Development",
        description: "Engaging workplace safety programmes covering hazard awareness, safe work practices, and emergency procedures tailored to all organisational levels.",
        imageUrl: "https://images.pexels.com/photos/18340568/pexels-photo-18340568.jpeg?auto=compress&cs=tinysrgb&w=800",
        content: "Hazard awareness and safe work practices training\nEmergency procedures and response drills\nPractical, hands-on training sessions\nWorker, supervisor and management level programmes\nCertificate of completion issued",
      },
      {
        title: "Training Needs Assessment",
        category: "Training, Competence & Culture Development",
        description: "Targeted evaluations to ensure competency in equipment safety, high-risk work environments, and hazard control across all roles.",
        imageUrl: "https://images.pexels.com/photos/18340568/pexels-photo-18340568.jpeg?auto=compress&cs=tinysrgb&w=800",
        content: "Role-based competency gap analysis\nEquipment and task-specific training identification\nHigh-risk environment readiness assessments\nCompetency matrix development\nTraining calendar and prioritisation planning",
      },
    ]
  });

  // ─────────────────────────────────────────────────────────────────────────
  // CATEGORY 4: Incident Investigation & Post-Accident Support
  // ─────────────────────────────────────────────────────────────────────────
  await prisma.service.createMany({
    data: [
      {
        title: "Root Cause Analysis & Incident Investigation",
        category: "Incident Investigation & Post-Accident Support",
        description: "Thorough investigations of workplace incidents and near-misses to fulfill legal requirements, identify root causes, and prevent recurrence.",
        imageUrl: "https://images.pexels.com/photos/9301291/pexels-photo-9301291.jpeg?auto=compress&cs=tinysrgb&w=800",
        content: "Immediate incident scene preservation and evidence collection\nStructured root cause analysis methodologies (5-Why, Fishbone)\nLegal reporting fulfilment (OSH Act 2006 obligations)\nCorrective and preventive action (CAPA) plans\nIncident trend analysis and recurrence prevention",
      },
      {
        title: "Post-Industrial Accident Management",
        category: "Incident Investigation & Post-Accident Support",
        description: "Comprehensive Post-Incident Reviews (PIR), legal fulfilment support, and trauma support for affected personnel.",
        imageUrl: "https://images.pexels.com/photos/9301291/pexels-photo-9301291.jpeg?auto=compress&cs=tinysrgb&w=800",
        content: "Post-Incident Reviews (PIR) facilitation\nTrauma counselling referral and support for affected employees\nLegal fulfilment assistance and documentation\nWorkers' compensation process guidance\nOrganisational learning and safety culture recovery",
      },
    ]
  });

  // ─────────────────────────────────────────────────────────────────────────
  // CATEGORY 5: PPE & Safety Equipment Supply
  // ─────────────────────────────────────────────────────────────────────────
  await prisma.service.createMany({
    data: [
      {
        title: "Personal Protective Equipment (PPE) Supply",
        category: "PPE & Safety Equipment Supply",
        description: "Supply of certified safety gear including helmets, gloves, protective footwear, high-visibility reflective jackets, and fall-protection equipment.",
        imageUrl: "https://images.pexels.com/photos/38070/pexels-photo-38070.jpeg?auto=compress&cs=tinysrgb&w=800",
        content: "Safety helmets and hard hats (EN/ANSI certified)\nProtective gloves for chemical, mechanical and electrical hazards\nSafety boots and protective footwear\nHigh-visibility reflective jackets and vests\nFall protection harnesses and lanyards\nRespiratory protective equipment (RPE)",
      },
      {
        title: "Safety & Emergency Hardware Supply",
        category: "PPE & Safety Equipment Supply",
        description: "Supply of fire extinguishers, compliant safety signage, and standardised workplace first-aid kits to keep your site fully equipped.",
        imageUrl: "https://images.pexels.com/photos/38070/pexels-photo-38070.jpeg?auto=compress&cs=tinysrgb&w=800",
        content: "Fire extinguishers (dry powder, CO2, foam — all classes)\nOSH-compliant safety signage (ISO 7010 standard)\nStandardised workplace first-aid kits\nEmergency eyewash and shower stations\nSpill kits and containment equipment",
      },
    ]
  });

  // ─────────────────────────────────────────────────────────────────────────
  // COURSES
  // ─────────────────────────────────────────────────────────────────────────

  // Category: OSH Training
  await prisma.course.createMany({
    data: [
      {
        title: "Occupational Safety & Health (OSH) Training",
        category: "OSH Training",
        description: "A comprehensive instructional programme covering the full rationale, methodology, and delivery of safety and health training in the workplace.",
        price: 250,
        imageUrl: "https://images.pexels.com/photos/18340568/pexels-photo-18340568.jpeg?auto=compress&cs=tinysrgb&w=800",
        content: "I. Rationale for Safety and Health Training\nII. Education and Training Requirements\nIII. Safety and Health Professionals as Trainers\nIV. Preparing Safety and Health Instruction\nV. Presenting Safety and Health Instruction\nVI. Applying Safety and Health Instruction\nVII. Evaluating Safety and Health Instruction\nVIII. Training Supervisors\nIX. Training New and Transferred Employees\nX. Job Safety Analysis as a Training Technique\nXI. Training Opportunities Available",
        syllabus: "See content",
      },
      {
        title: "Hazardous Material Handling",
        category: "OSH Training",
        description: "Comprehensive training on the safe identification, handling, storage, and emergency response for hazardous chemical materials.",
        price: 220,
        imageUrl: "https://images.pexels.com/photos/9301291/pexels-photo-9301291.jpeg?auto=compress&cs=tinysrgb&w=800",
        content: "I. Introduction and Regulatory Framework\nII. Chemical Hazard Identification\nIII. Health Hazards and Toxicology\nIV. Personal Protective Equipment (PPE)\nV. Storage, Safe Handling and Transfer\nVI. Spill Response and Emergency Procedures",
        syllabus: "See content",
      },
    ]
  });

  // Category: Fire & Emergency Response
  await prisma.course.createMany({
    data: [
      {
        title: "Fire Safety & Emergency Response Training",
        category: "Fire & Emergency Response",
        description: "Practical training covering fire fundamentals, suppression techniques, emergency planning, and Emergency Response Team (ERT) operations.",
        price: 200,
        imageUrl: "https://images.pexels.com/photos/18340568/pexels-photo-18340568.jpeg?auto=compress&cs=tinysrgb&w=800",
        content: "I. Fundamentals of Fire and Hazard Awareness\nII. Fire Suppression and Equipment Handling\nIII. Emergency Action Planning and Evacuation\nIV. Emergency Response Team (ERT) Roles and Operations\nV. Practical Exercises and Evaluation",
        syllabus: "See content",
      },
    ]
  });

  // Category: First Aid & CPR
  await prisma.course.createMany({
    data: [
      {
        title: "First Aid & CPR Certification",
        category: "First Aid & CPR",
        description: "Practical certification course covering scene safety, patient assessment, CPR, AED use, and management of medical emergencies.",
        price: 180,
        imageUrl: "https://images.pexels.com/photos/8159/construction-site-build-construction-work.jpg?auto=compress&cs=tinysrgb&w=800",
        content: "I. General Principles and Scene Safety\nII. Patient Assessment and Primary Survey\nIII. Cardiopulmonary Resuscitation (CPR)\nIV. Automated External Defibrillator (AED)\nV. Foreign Body Airway Obstruction (Choking)\nVI. Medical Emergencies and Basic Trauma Care",
        syllabus: "See content",
      },
    ]
  });

  // Category: Environmental Management
  await prisma.course.createMany({
    data: [
      {
        title: "Environmental Management Training",
        category: "Environmental Management",
        description: "Training on environmental management systems, hazard identification, policy, governance, and resource management.",
        price: 210,
        imageUrl: "https://images.pexels.com/photos/9301291/pexels-photo-9301291.jpeg?auto=compress&cs=tinysrgb&w=800",
        content: "I. Foundations in Environmental Management and Systems\nII. Hazard Identification and Environmental Control\nIII. Policy, Governance and Ethics\nIV. Resource Management and Waste Control",
        syllabus: "See content",
      },
      {
        title: "Environment & Social Impact Assessment",
        category: "Environmental Management",
        description: "Structured course on conducting ESIA studies including screening, baseline studies, impact evaluation, and stakeholder engagement.",
        price: 280,
        imageUrl: "https://images.pexels.com/photos/9301291/pexels-photo-9301291.jpeg?auto=compress&cs=tinysrgb&w=800",
        content: "I. Introduction and Foundations\nII. Screening, Scoping and Baseline Studies\nIII. Impact Identification, Prediction and Evaluation\nIV. Socio-Economic Assessment and Mitigation\nV. Stakeholder Engagement, Reporting and Decision Making\nVI. Case Studies and Practices",
        syllabus: "See content",
      },
    ]
  });

  // Category: PPE Training
  await prisma.course.createMany({
    data: [
      {
        title: "Training on Use of Personal Protective Equipment (PPE)",
        category: "PPE Training",
        description: "Comprehensive training on PPE fundamentals, legal framework, selection, inspection, maintenance, and certification.",
        price: 150,
        imageUrl: "https://images.pexels.com/photos/38070/pexels-photo-38070.jpeg?auto=compress&cs=tinysrgb&w=800",
        content: "I. Fundamentals of PPE and Legal Framework\nII. Workplace Risk and Hazard Assessments\nIII. Equipment Specifics, Selection and Application\nIV. Inspection, Maintenance and Management\nV. Assessment and Certification Framework",
        syllabus: "See content",
      },
    ]
  });

  // Category: Audits & Inspections
  await prisma.course.createMany({
    data: [
      {
        title: "Safety Audits and Inspections",
        category: "Audits & Inspections",
        description: "Introduction to workplace safety evaluation, auditing framework, risk-based corrective actions, and continuous improvement.",
        price: 200,
        imageUrl: "https://images.pexels.com/photos/8159/construction-site-build-construction-work.jpg?auto=compress&cs=tinysrgb&w=800",
        content: "I. Introduction to Workplace Safety Evaluation\nII. Workplace Safety Inspection\nIII. Safety Auditing Framework\nIV. Risk Assessment and Corrective Action Plans\nV. Reporting, Follow-up and Continuous Improvement\nVI. Assessment and Practical Application",
        syllabus: "See content",
      },
    ]
  });

  // Category: Incident Investigation
  await prisma.course.createMany({
    data: [
      {
        title: "Incident Investigation",
        category: "Incident Investigation",
        description: "Structured training on immediate incident response, evidence collection, root cause analysis, and corrective action implementation.",
        price: 190,
        imageUrl: "https://images.pexels.com/photos/18340568/pexels-photo-18340568.jpeg?auto=compress&cs=tinysrgb&w=800",
        content: "I. Foundation and Immediate Response\nII. Data and Evidence Collection\nIII. Root Cause Analysis Methodologies\nIV. Corrective Action and Implementation\nV. Reporting, Communication and Review",
        syllabus: "See content",
      },
    ]
  });

  // Category: Health & Safety Management
  await prisma.course.createMany({
    data: [
      {
        title: "Management of Health and Safety",
        category: "Health & Safety Management",
        description: "Advanced management programme covering ISOH, NEBOSH IGC, OSHA systems, and ethical safety leadership for managers and supervisors.",
        price: 350,
        imageUrl: "https://images.pexels.com/photos/9301291/pexels-photo-9301291.jpeg?auto=compress&cs=tinysrgb&w=800",
        content: "I. ISOH Management Safety\nII. NEBOSH International General Certificate (IGC) — Management of Health and Safety\nIII. OSHA / Safety and Health Management Systems\nIV. CCOH Health and Safety for Managers and Supervisors\nV. Ethics and Safety\nVI. Hazard Analysis / Prevention and Safety Management",
        syllabus: "See content",
      },
      {
        title: "Health Risk Assessment",
        category: "Health & Safety Management",
        description: "Scientific approach to identifying, evaluating and managing workplace health hazards through dose-response and exposure assessments.",
        price: 240,
        imageUrl: "https://images.pexels.com/photos/9301291/pexels-photo-9301291.jpeg?auto=compress&cs=tinysrgb&w=800",
        content: "I. Introduction and Fundamentals\nII. Hazard Identifications\nIII. Dose-Response Assessment\nIV. Exposure Assessment\nV. Risk Characteristics and Uncertainty\nVI. Risk Management and Communication",
        syllabus: "See content",
      },
      {
        title: "Workplace Risk Assessment",
        category: "Health & Safety Management",
        description: "Foundation to advanced training on workplace safety law, hazard identification techniques, risk evaluation, and control measures documentation.",
        price: 220,
        imageUrl: "https://images.pexels.com/photos/8159/construction-site-build-construction-work.jpg?auto=compress&cs=tinysrgb&w=800",
        content: "I. Foundation of Workplace Safety and Legal Framework\nII. Hazard Identification Techniques\nIII. Risk Evaluation and Prioritisation\nIV. Establishment of Control Measures\nV. Documentation, Reporting and Review\nVI. Practical Field Application",
        syllabus: "See content",
      },
    ]
  });

  // Category: Data & Systems Management
  await prisma.course.createMany({
    data: [
      {
        title: "HSSE Data Management",
        category: "Data & Systems Management",
        description: "Training on capturing, classifying, analysing and reporting HSSE data for performance monitoring and governance.",
        price: 230,
        imageUrl: "https://images.pexels.com/photos/8159/construction-site-build-construction-work.jpg?auto=compress&cs=tinysrgb&w=800",
        content: "I. Foundations of HSSE Data Management\nII. Capturing, Classification and Ensuring Data Quality\nIII. Analysis Techniques and Performance Metrics\nIV. Visualisation, Reporting and Dashboards\nV. Governance, Advanced Application and Capstone",
        syllabus: "See content",
      },
      {
        title: "Management System Audits",
        category: "Data & Systems Management",
        description: "Lead auditor qualification covering ISO management system fundamentals, integrated systems, and CQI/IRCA audit models.",
        price: 300,
        imageUrl: "https://images.pexels.com/photos/8159/construction-site-build-construction-work.jpg?auto=compress&cs=tinysrgb&w=800",
        content: "I. Fundamentals of Management Systems\nII. Management System Lead Auditor Course (CQI/IRCA Model)\nIII. Integrated Management System Auditor Course",
        syllabus: "See content",
      },
    ]
  });

  console.log("✅ Database seeded successfully with all 19 services and 14 courses.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
