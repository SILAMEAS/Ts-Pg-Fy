import prisma from "utils/prisma";

export async function create(input) {
  const user = await prisma.user.findMany();
}
