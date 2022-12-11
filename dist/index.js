"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const app = (0, fastify_1.default)();
app.get("/", (req, reply) => {
    return "hello seng seng";
});
app.listen({ port: 3000 }, (err, add) => {
    if (err) {
        app.log.error(err);
    }
    console.log("server running on port" + add);
});
//# sourceMappingURL=index.js.map