"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUser = exports.Getall = exports.GetUser = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
async function GetUser(ids) {
    const user = await prisma.user.findFirst({
        where: {
            id: ids,
        },
    });
    return user;
}
exports.GetUser = GetUser;
async function Getall() {
    const Allusers = await prisma.user.findMany();
    return Allusers;
}
exports.Getall = Getall;
async function CreateUser(dataX) {
    try {
        const namez = dataX.name;
        const agez = Number(dataX.age);
        const emailz = dataX.email;
        const user = await prisma.user.create({
            data: { name: namez, age: agez, email: emailz },
        });
        return user;
    }
    catch (error) {
        return error;
    }
}
exports.CreateUser = CreateUser;
//# sourceMappingURL=user.controller.js.map