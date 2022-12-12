"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = void 0;
const prisma_1 = __importDefault(require("utils/prisma"));
async function create(input) {
    const user = await prisma_1.default.user.findMany();
}
exports.create = create;
//# sourceMappingURL=user.service.js.map