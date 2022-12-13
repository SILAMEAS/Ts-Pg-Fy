import fastify, { FastifyInstance } from "fastify";
import userRoute from "./routes/user.route";
const app: FastifyInstance = fastify({
  pluginTimeout: 20000,
});

async function main() {
  const prefix = "/api/v1";
  // server.addContentTypeParser('text/json', { parseAs: 'string' }, server.getDefaultJsonParser('ignore', 'ignore'))

  userRoute(app, prefix);
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
