import { FastifyReply, FastifyRequest } from "fastify";
import { PrismaClient } from "@prisma/client";
import { type } from "os";
const prisma = new PrismaClient();
export async function GetUser(ids: string) {
  const user = await prisma.user.findFirst({
    where: {
      id: ids,
    },
  });
  return user;
}
export async function Getall() {
  const Allusers = await prisma.user.findMany();
  return Allusers;
}
type userType = {
  name: string;
  age: number;
  email: string;
};
export async function CreateUser(dataX: userType) {
  try {
    const namez = dataX.name;
    const agez = Number(dataX.age);
    const emailz = dataX.email;
    const user = await prisma.user.create({
      data: { name: namez, age: agez, email: emailz },
    });
    return user;
  } catch (error) {
    return error;
  }
}
