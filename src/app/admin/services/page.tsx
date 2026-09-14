import { prisma } from "@/lib/prisma";
import ServiceManager from "./ServiceManager";

export default async function AdminServicesPage() {
  const services = await prisma.service.findMany({
    orderBy: { title: 'asc' },
  });

  return <ServiceManager initialServices={services} />;
}
