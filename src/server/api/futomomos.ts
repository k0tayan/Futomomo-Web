import pkg, { Prisma } from "@prisma/client";
const { PrismaClient } = pkg;

const prisma = new PrismaClient({
  log: ["query"],
});

export default async (req: any, res: any) => {
  const allFutomomos = await prisma.futomomo.findMany({ take: 20 });
  // console.log(allFutomomos);
  return allFutomomos;
};
