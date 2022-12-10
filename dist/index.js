"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const app = (0, fastify_1.default)();
app.get("/", (req, reply) => {
    const { username, password } = req.query;
    return reply.send({
        code: 200,
        message: "succse",
        body: {
            username,
            password,
        },
    });
});
app.listen({ port: 3000 }, (err, add) => {
    if (err) {
        app.log.error(err);
    }
    console.log("server running on port" + add);
});
