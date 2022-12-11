"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient({
    log: ["query"],
});
async function main() {
    const user = await prisma.user.findFirst({
        where: {
            email: "las239879@gmailsdf.com",
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
//# sourceMappingURL=server.js.map