"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
async function main() {
    const user = await prisma.user.create({
        data: {
            name: "sola",
            age: 232,
            email: "las23987s9@gmadl.com",
        },
    });
    console.log(user);
    const userAll = await prisma.user.findMany();
    console.log(userAll);
}
main()
    .catch((e) => {
    console.log(e);
})
    .finally(async () => {
    prisma.$disconnect();
});
//# sourceMappingURL=script.js.map