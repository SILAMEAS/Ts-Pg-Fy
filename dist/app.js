"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const user_route_1 = __importDefault(require("./routes/user.route"));
const app = (0, fastify_1.default)({
    pluginTimeout: 20000,
});
async function main() {
    const prefix = "/api/v1";
    // server.addContentTypeParser('text/json', { parseAs: 'string' }, server.getDefaultJsonParser('ignore', 'ignore'))
    (0, user_route_1.default)(app, prefix);
    // app.register(userRoute, { prefix: "/user" });
    // -----------------------------Port running
    await app.listen({ port: 3001 }, (err, add) => {
        if (err) {
            app.log.error(err);
        }
        console.log("server running on port" + add);
    });
}
main();
//# sourceMappingURL=app.js.map